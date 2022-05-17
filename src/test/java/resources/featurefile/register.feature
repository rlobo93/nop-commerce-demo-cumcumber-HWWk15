Feature: Register

  @smoke, @regression
  Scenario: verifyUserShouldNavigateToRegisterPageSuccessfully
    Given I am on homepage
    When I click on register link
    Then I verify Register text<"Register">

  @sanity, @regeneration
  Scenario Outline: verifyThatFirstNameLastNameEmailPasswordAndConfirmPasswordFieldsAreMandatory
    Given I am on homepage
    When I click on register link
    When I click on Register Button
    And I should see the error message for firstname "<firstname>"
    And I should see the error message for lastname "<lastname>"
    And I should see the error message for email "<email>"
    And I should see the error message for password "<password>"
    And I should see the error message for confirmPassword "<confirmPassword>"

    Examples:
      | firstname               | lastname               | email              | password              | confirmPassword       |
      | First name is required. | Last name is required. | Email is required. | Password is required. | Password is required. |

  @regeneration
  Scenario Outline: User should create account successfully
    Given I am on homepage
    When I click on register link
    And I enter First Name "<firstName>"
    And I enter Last Name "<lastName>"
    And I enter Date of Birth "<day>","<month>","<year>"
    And I enter Email "<email>"
    And I enter Password "<password>"
    And I enter Confirm password "<confPassword>"
    Then I click on Register Button
    Then I Verify registration message <"Your registration completed">
    Examples:

      | firstName | lastName | day | month    | year | email               | password | confPassword |
      | Ron       | Jira     | 9   | November | 1992 | rl1111111@gmail.com | rl123456 | rl123456     |

