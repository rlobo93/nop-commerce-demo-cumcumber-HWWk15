package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.*;
import com.nopcommerce.demo.utility.Utility;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ComputerSteps {

    @When("^I click on computer tab <\"([^\"]*)\">$")
    public void iClickOnComputerTab(String Computers)  {
        new HomePage().clickOnMenuTab(Computers);
    }
    @Then("^I verify Computer text <\"([^\"]*)\">$")
    public void iVerifyComputerText(String Computers)  {
        Assert.assertEquals("Computers Text Not Displayed", Computers, new ComputerPage().getPageTitleText());
    }


    @Then("^I verify Desktops text <\"([^\"]*)\">$")
    public void iVerifyDesktopsText(String Desktops)  {
        Assert.assertEquals("Desktops Text Not Displayed", Desktops, new DesktopsPage().getPageTitleText());
    }


    @And("^I click on Desktops link <\"([^\"]*)\">$")
    public void iClickOnDesktopsLink(String Desktops)  {
        new ComputerPage().clickOnSubMenu(Desktops);
    }

    @And("^I click on Build your own computer$")
    public void iClickOnBuildYourOwnComputer() {
        new DesktopsPage().clickOnBuildYourOwnComputer();
    }

    @And("^I select processor \"([^\"]*)\"$")
    public void iSelectProcessor(String processorName)  {
        new BuildYourOwnComputerPage().selectProcessor(processorName);
    }

    @And("^I select  Ram \"([^\"]*)\"$")
    public void iSelectRam(String ramGB) {
        new BuildYourOwnComputerPage().selectRam(ramGB);
    }

    @And("^I select HDD  \"([^\"]*)\"$")
    public void iSelectHDD(String hDdGB)  {
        new BuildYourOwnComputerPage().selectHDD(hDdGB);
    }

    @And("^I select OS  \"([^\"]*)\"$")
    public void iSelectOS(String oSName)  {
        new BuildYourOwnComputerPage().selectOS(oSName);
    }

    @And("^I select  Software \"([^\"]*)\"$")
    public void iSelectSoftware(String softwareName)  {
        new BuildYourOwnComputerPage().selectSoftware(softwareName);
    }

    @And("^I click on Add to cart$")
    public void iClickOnAddToCart() {
        new BuildYourOwnComputerPage().clickOnAddToCartButton();
    }



    @Then("^I verify message text \"([^\"]*)\"$")
    public void iVerifyMessageText(String Message)  {
    Assert.assertEquals("The product has been added to your shopping cart Text Not Displayed", Message, new BuildYourOwnComputerPage().getProductAddedMessage());
    }



}
