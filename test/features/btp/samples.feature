Feature: test CAP samples on BTP

  Scenario: Login and press tile
    Given we have opened the url "https://samples.local/"
    When we click on html link "...accounts.....com"
      And we login with username "...." and password "...."
      And we select tile "Browse Books"
