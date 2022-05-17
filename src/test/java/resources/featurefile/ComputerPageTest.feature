Feature: Computer

  @smoke,@regression
  Scenario: verifyUserShouldNavigateToComputerPageSuccessfully
    Given I am on homepage
    When I click on computer tab <"Computers">
    Then I verify Computer text <"Computers">

  @sanity, @regeneration
  Scenario: verifyUserShouldNavigateToDesktopsPageSuccessfully
    Given I am on homepage
    When I click on computer tab <"Computers">
    And I click on Desktops link <"Desktops">
    Then I verify Desktops text <"Desktops">

  @regeneration
  Scenario Outline: verifyThatUserShouldBuildYouOwnComputerAndAddThemToCartSuccessfully(String processor, String ram, String hdd, String os, String software)
    Given I am on homepage
    When I click on computer tab <"Computers">
    And I click on Desktops link <"Desktops">
    And I click on Build your own computer
    And I select processor "<processorName>"
    And I select  Ram "<ramGB>"
    And I select HDD  "<hDdGB>"
    And I select OS  "<oSName>"
    And I select  Software "<softwareName>"
    And I click on Add to cart
    Then I verify message text "<Message>"

    Examples:
      | processorName                                   | ramGB         | hDdGB             | oSName                  | softwareName               | Message                                          |
      | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]    | Microsoft Office [+$50.00] | The product has been added to your shopping cart |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Acrobat Reader [+$10.00]   | The product has been added to your shopping cart |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | VistaHome [+$50.00]     | Total Commander [+$5.00]   | The product has been added to your shopping cart |