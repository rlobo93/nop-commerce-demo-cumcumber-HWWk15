Feature: Login Test

  @smoke, @regression
  Scenario: User should navigate to login page successfully
    Given I am on homepage
    When I click on login link
    Then I should navigate to login page successfully

  @sanity, @regeneration
  Scenario Outline: Verify the error message with invalid credentials
    Given I am on homepage
    When I click on login link
    And I enter email "<email>"
    And I enter password "<password>"
    And I click on login button
    Then I should see the error message"<errorMessage>"

    Examples:
      | email           | password | errorMessage                                                                                |
      | rl123@gmail.com | r1234    | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
      | rl123@gmail.com |          | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
      |                 | r1234    | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |

  @sanity, @regeneration
  Scenario: User should login successfully with valid credentials
    Given I am on homepage
    When I click on login link
    And I enter email "rl1111111@gmail.com"
    And I enter password "rl123456"
    And I click on login button
    Then I should login successfully
    Then I Verify that LogOut link is display


  @regeneration
  Scenario: VerifyThatUserShouldLogOutSuccessFully
    Given I am on homepage
    When I click on login link
    And I enter email "rl1111111@gmail.com"
    And I enter password "rl123456"
    And I click on login button
    And I Click on LogOut Link
    Then I Verify that LogIn Link Display

