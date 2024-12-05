const { env } = require('node:process');
const path = require('node:path');
const fs = require('node:fs');
const os = require('node:os');
const isUnixOS = path.sep === '/';
const isWindowsOS = path.sep === '\\';

function createWorkingDirectory() {
  let date = new Date().toISOString().replaceAll('.','_').replaceAll(':','_').replaceAll('-','_');
  let tmpdir = isUnixOS
    ?
      path.join(env.CDS_CUCUMBER_TMPDIR, `cds_cucumber_${os.userInfo().username}`, `${process.pid}_${date}`)
    :
      path.join(env.CDS_CUCUMBER_TMPDIR, `cds_cucumber_${os.userInfo().username}_${process.pid}_${date}`)
    ;
  let workingDirectory = env.CDS_CUCUMBER_WORKING_DIRECTORY || tmpdir;
  if (!fs.existsSync(workingDirectory)) {
    console.log('Created temporary directory:', workingDirectory);
    fs.mkdirSync(workingDirectory, { recursive: true });
  }
  if(isWindowsOS) {
    let homedirRegistryFile = path.join(os.homedir(), '.cds-services.json'); 
    if(fs.existsSync(homedirRegistryFile)) {
      console.log("delete",homedirRegistryFile);
      fs.unlinkSync(homedirRegistryFile);
    }
  }
  const registryFile = path.join(workingDirectory, '.cds-services.json');
  if (!fs.existsSync(registryFile+'.lock')) {
    if(fs.existsSync(registryFile)) {
      console.log("delete",registryFile);
      fs.unlinkSync(registryFile);
    }
  } else {
    console.log("keep",registryFile);
  }
  const markFile = path.join(workingDirectory, '.cds.cucumber');
  if (!fs.existsSync(markFile)) {
    fs.writeFileSync(markFile, new Date().toString());
  }
  if(env.CUCUMBER_CDS_PROFILE==='hybrid') {
    const cfdir = path.join(workingDirectory,'.cf')
    const cfconfig = path.join(cfdir,'config.json')
    console.log('Create cf directory:', cfdir);
    fs.mkdirSync(cfdir, { recursive: true });
    const source = path.join(os.homedir(),'.cf','config.json')
    console.log('Create cf config symlink:', source, cfconfig);
    fs.symlinkSync(source, cfconfig)
  }
  return {workingDirectory,markFile};
}

module.exports = createWorkingDirectory
