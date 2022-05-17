$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ComputerPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "Computer",
  "description": "",
  "id": "computer",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3297474700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "verifyUserShouldNavigateToDesktopsPageSuccessfully",
  "description": "",
  "id": "computer;verifyusershouldnavigatetodesktopspagesuccessfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@sanity,"
    },
    {
      "line": 9,
      "name": "@regeneration"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on computer tab \u003c\"Computers\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on Desktops link \u003c\"Desktops\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify Desktops text \u003c\"Desktops\"\u003e",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 90133800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 26
    }
  ],
  "location": "ComputerSteps.iClickOnComputerTab(String)"
});
formatter.result({
  "duration": 524175100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 27
    }
  ],
  "location": "ComputerSteps.iClickOnDesktopsLink(String)"
});
formatter.result({
  "duration": 461787900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iVerifyDesktopsText(String)"
});
formatter.result({
  "duration": 26931300,
  "status": "passed"
});
formatter.after({
  "duration": 607166300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "verifyThatUserShouldBuildYouOwnComputerAndAddThemToCartSuccessfully(String processor, String ram, String hdd, String os, String software)",
  "description": "",
  "id": "computer;verifythatusershouldbuildyouowncomputerandaddthemtocartsuccessfully(string-processor,-string-ram,-string-hdd,-string-os,-string-software)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@regeneration"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on computer tab \u003c\"Computers\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on Desktops link \u003c\"Desktops\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select processor \"\u003cprocessorName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select  Ram \"\u003cramGB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select HDD  \"\u003chDdGB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select OS  \"\u003coSName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select  Software \"\u003csoftwareName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I verify message text \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "computer;verifythatusershouldbuildyouowncomputerandaddthemtocartsuccessfully(string-processor,-string-ram,-string-hdd,-string-os,-string-software);",
  "rows": [
    {
      "cells": [
        "processorName",
        "ramGB",
        "hDdGB",
        "oSName",
        "softwareName",
        "Message"
      ],
      "line": 31,
      "id": "computer;verifythatusershouldbuildyouowncomputerandaddthemtocartsuccessfully(string-processor,-string-ram,-string-hdd,-string-os,-string-software);;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]",
        "The product has been added to your shopping cart"
      ],
      "line": 32,
      "id": "computer;verifythatusershouldbuildyouowncomputerandaddthemtocartsuccessfully(string-processor,-string-ram,-string-hdd,-string-os,-string-software);;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]",
        "The product has been added to your shopping cart"
      ],
      "line": 33,
      "id": "computer;verifythatusershouldbuildyouowncomputerandaddthemtocartsuccessfully(string-processor,-string-ram,-string-hdd,-string-os,-string-software);;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "VistaHome [+$50.00]",
        "Total Commander [+$5.00]",
        "The product has been added to your shopping cart"
      ],
      "line": 34,
      "id": "computer;verifythatusershouldbuildyouowncomputerandaddthemtocartsuccessfully(string-processor,-string-ram,-string-hdd,-string-os,-string-software);;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2748564500,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "verifyThatUserShouldBuildYouOwnComputerAndAddThemToCartSuccessfully(String processor, String ram, String hdd, String os, String software)",
  "description": "",
  "id": "computer;verifythatusershouldbuildyouowncomputerandaddthemtocartsuccessfully(string-processor,-string-ram,-string-hdd,-string-os,-string-software);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@regeneration"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on computer tab \u003c\"Computers\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on Desktops link \u003c\"Desktops\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select  Ram \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select HDD  \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select OS  \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select  Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I verify message text \"The product has been added to your shopping cart\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 15700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 26
    }
  ],
  "location": "ComputerSteps.iClickOnComputerTab(String)"
});
formatter.result({
  "duration": 540308900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 27
    }
  ],
  "location": "ComputerSteps.iClickOnDesktopsLink(String)"
});
formatter.result({
  "duration": 391644200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnBuildYourOwnComputer()"
});
formatter.result({
  "duration": 744901200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 63136100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 15
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 63851300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 15
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 55685500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 53896800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 52654600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 41679900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 23
    }
  ],
  "location": "ComputerSteps.iVerifyMessageText(String)"
});
formatter.result({
  "duration": 896498100,
  "status": "passed"
});
formatter.after({
  "duration": 619856400,
  "status": "passed"
});
formatter.before({
  "duration": 2511084700,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "verifyThatUserShouldBuildYouOwnComputerAndAddThemToCartSuccessfully(String processor, String ram, String hdd, String os, String software)",
  "description": "",
  "id": "computer;verifythatusershouldbuildyouowncomputerandaddthemtocartsuccessfully(string-processor,-string-ram,-string-hdd,-string-os,-string-software);;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@regeneration"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on computer tab \u003c\"Computers\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on Desktops link \u003c\"Desktops\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select  Ram \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select HDD  \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select OS  \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select  Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I verify message text \"The product has been added to your shopping cart\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 14900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 26
    }
  ],
  "location": "ComputerSteps.iClickOnComputerTab(String)"
});
formatter.result({
  "duration": 459836700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 27
    }
  ],
  "location": "ComputerSteps.iClickOnDesktopsLink(String)"
});
formatter.result({
  "duration": 422875300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnBuildYourOwnComputer()"
});
formatter.result({
  "duration": 677776000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 38521600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 15
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 65023700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 15
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 68314000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 63908900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 65930700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 41243000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 23
    }
  ],
  "location": "ComputerSteps.iVerifyMessageText(String)"
});
formatter.result({
  "duration": 831532000,
  "status": "passed"
});
formatter.after({
  "duration": 603170500,
  "status": "passed"
});
formatter.before({
  "duration": 1719084400,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "verifyThatUserShouldBuildYouOwnComputerAndAddThemToCartSuccessfully(String processor, String ram, String hdd, String os, String software)",
  "description": "",
  "id": "computer;verifythatusershouldbuildyouowncomputerandaddthemtocartsuccessfully(string-processor,-string-ram,-string-hdd,-string-os,-string-software);;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@regeneration"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on computer tab \u003c\"Computers\"\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on Desktops link \u003c\"Desktops\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select  Ram \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select HDD  \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select OS  \"VistaHome [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select  Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I verify message text \"The product has been added to your shopping cart\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 14900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 26
    }
  ],
  "location": "ComputerSteps.iClickOnComputerTab(String)"
});
formatter.result({
  "duration": 480572300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 27
    }
  ],
  "location": "ComputerSteps.iClickOnDesktopsLink(String)"
});
formatter.result({
  "duration": 405194500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnBuildYourOwnComputer()"
});
formatter.result({
  "duration": 694181200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 40992800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 15
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 61440900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 15
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 55926200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VistaHome [+$50.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 36505100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 75745700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 40539000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 23
    }
  ],
  "location": "ComputerSteps.iVerifyMessageText(String)"
});
formatter.result({
  "duration": 269680400,
  "status": "passed"
});
formatter.after({
  "duration": 604540200,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@sanity,"
    },
    {
      "line": 9,
      "name": "@regeneration"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error message\"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 18,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "rl123@gmail.com",
        "r1234",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 19,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "rl123@gmail.com",
        "",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 20,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "",
        "r1234",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 21,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2528013700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@sanity,"
    },
    {
      "line": 9,
      "name": "@regeneration"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"rl123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"r1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error message\"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 20000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 407305700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rl123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 58546100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "r1234",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 54174500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 373610400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 31
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 23221400,
  "status": "passed"
});
formatter.after({
  "duration": 591086400,
  "status": "passed"
});
formatter.before({
  "duration": 2531789300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@sanity,"
    },
    {
      "line": 9,
      "name": "@regeneration"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"rl123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error message\"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 13900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 448006800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rl123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 55988100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 51650500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 372272800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 31
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 25190800,
  "status": "passed"
});
formatter.after({
  "duration": 596265600,
  "status": "passed"
});
formatter.before({
  "duration": 2551611900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@sanity,"
    },
    {
      "line": 9,
      "name": "@regeneration"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"r1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error message\"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 19900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 420033000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 44966300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "r1234",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 53862000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 50902200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 31
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 20025579500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027message-error validation-summary-errors\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027RONALDO\u0027, ip: \u0027192.168.1.63\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [39b9fdeff693db006858f8a92c454a3e, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027message-error validation-summary-errors\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Ronaldo\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:54895}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:54895/devtoo..., se:cdpVersion: 101.0.4951.54, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 39b9fdeff693db006858f8a92c454a3e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.getTextFromElement(Utility.java:64)\r\n\tat com.nopcommerce.demo.pages.LoginPage.getErrorMessage(LoginPage.java:67)\r\n\tat com.nopcommerce.demo.steps.LoginSteps.iShouldSeeTheErrorMessage(LoginSteps.java:51)\r\n\tat ✽.Then I should see the error message\"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"(login.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 868532300,
  "status": "passed"
});
formatter.before({
  "duration": 1887549500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@sanity,"
    },
    {
      "line": 23,
      "name": "@regeneration"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter email \"rl1111111@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password \"rl123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I Verify that LogOut link is display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 14500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 410020800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rl1111111@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 56607200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rl123456",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 57866900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 657758300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 11500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyThatLogOutLinkIsDisplay()"
});
formatter.result({
  "duration": 30355400,
  "status": "passed"
});
formatter.after({
  "duration": 612628000,
  "status": "passed"
});
formatter.before({
  "duration": 1768585700,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "VerifyThatUserShouldLogOutSuccessFully",
  "description": "",
  "id": "login-test;verifythatusershouldlogoutsuccessfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@regeneration"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I enter email \"rl1111111@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter password \"rl123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I Click on LogOut Link",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Verify that LogIn Link Display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 14000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 416397300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rl1111111@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 56783400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rl123456",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 56410700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 594584200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogOutLink()"
});
formatter.result({
  "duration": 557537200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyThatLogInLinkDisplay()"
});
formatter.result({
  "duration": 25604700,
  "status": "passed"
});
formatter.after({
  "duration": 591050800,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register",
  "description": "",
  "id": "register",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "verifyThatFirstNameLastNameEmailPasswordAndConfirmPasswordFieldsAreMandatory",
  "description": "",
  "id": "register;verifythatfirstnamelastnameemailpasswordandconfirmpasswordfieldsaremandatory",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@sanity,"
    },
    {
      "line": 9,
      "name": "@regeneration"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on Register Button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should see the error message for firstname \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message for lastname \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error message for email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message for password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message for confirmPassword \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "register;verifythatfirstnamelastnameemailpasswordandconfirmpasswordfieldsaremandatory;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "password",
        "confirmPassword"
      ],
      "line": 21,
      "id": "register;verifythatfirstnamelastnameemailpasswordandconfirmpasswordfieldsaremandatory;;1"
    },
    {
      "cells": [
        "First name is required.",
        "Last name is required.",
        "Email is required.",
        "Password is required.",
        "Password is required."
      ],
      "line": 22,
      "id": "register;verifythatfirstnamelastnameemailpasswordandconfirmpasswordfieldsaremandatory;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1751331100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verifyThatFirstNameLastNameEmailPasswordAndConfirmPasswordFieldsAreMandatory",
  "description": "",
  "id": "register;verifythatfirstnamelastnameemailpasswordandconfirmpasswordfieldsaremandatory;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@sanity,"
    },
    {
      "line": 9,
      "name": "@regeneration"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on Register Button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should see the error message for firstname \"First name is required.\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message for lastname \"Last name is required.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error message for email \"Email is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message for password \"Password is required.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the error message for confirmPassword \"Password is required.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 423407700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 54732700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 46
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessageForFirstname(String)"
});
formatter.result({
  "duration": 89312800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 45
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessageForLastname(String)"
});
formatter.result({
  "duration": 57221900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 42
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessageForEmail(String)"
});
formatter.result({
  "duration": 58228300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 45
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessageForPassword(String)"
});
formatter.result({
  "duration": 54695600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 52
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessageForConfirmPassword(String)"
});
formatter.result({
  "duration": 54252000,
  "status": "passed"
});
formatter.after({
  "duration": 592276900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "User should create account successfully",
  "description": "",
  "id": "register;user-should-create-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@regeneration"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter First Name \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter Last Name \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter Date of Birth \"\u003cday\u003e\",\"\u003cmonth\u003e\",\"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter Email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter Confirm password \"\u003cconfPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Register Button",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I Verify registration message \u003c\"Your registration completed\"\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "register;user-should-create-account-successfully;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "day",
        "month",
        "year",
        "email",
        "password",
        "confPassword"
      ],
      "line": 38,
      "id": "register;user-should-create-account-successfully;;1"
    },
    {
      "cells": [
        "Ron",
        "Jira",
        "9",
        "November",
        "1992",
        "rl1111111@gmail.com",
        "rl123456",
        "rl123456"
      ],
      "line": 39,
      "id": "register;user-should-create-account-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2503629400,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "User should create account successfully",
  "description": "",
  "id": "register;user-should-create-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@regeneration"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter First Name \"Ron\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter Last Name \"Jira\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter Date of Birth \"9\",\"November\",\"1992\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter Email \"rl1111111@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Password \"rl123456\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter Confirm password \"rl123456\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Register Button",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I Verify registration message \u003c\"Your registration completed\"\u003e",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 15700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 443943500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ron",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 68235200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jira",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 69004600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 23
    },
    {
      "val": "November",
      "offset": 27
    },
    {
      "val": "1992",
      "offset": 38
    }
  ],
  "location": "RegisterSteps.iEnterDateOfBirth(String,String,String)"
});
formatter.result({
  "duration": 165591100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rl1111111@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 60800600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rl123456",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 58769800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rl123456",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 55143700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 391514900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.iVerifyRegistrationMessage()"
});
formatter.result({
  "duration": 107100,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.nopcommerce.demo.steps.RegisterSteps.iVerifyRegistrationMessage() in file:/C:/Users/Ronaldo/IdeaProjects/nop-commerce-demo-cumcumber-Wk15/target/test-classes/\u0027 with pattern [^I Verify registration message \u003c\"([^\"]*)\"\u003e$] is declared with 0 parameters. However, the gherkin step has 1 arguments [Your registration completed]. \nStep: Then I Verify registration message \u003c\"Your registration completed\"\u003e\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 818133100,
  "status": "passed"
});
});