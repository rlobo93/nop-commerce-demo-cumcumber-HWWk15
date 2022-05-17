package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class RegisterSteps {
    @When("^I click on register link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }

    @Then("^I verify Register text<\"([^\"]*)\">$")
    public void iVerifyRegisterText(String Register) {
        Assert.assertEquals("Register Text Not Displayed", Register, new RegisterPage().getRegisterText());
    }

    @When("^I click on Register Button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().clickOnRegisterButton();
    }


    @And("^I enter First Name \"([^\"]*)\"$")
    public void iEnterFirstName(String firstName) {
        new RegisterPage().enterFirstName(firstName);
    }

    @And("^I enter Last Name \"([^\"]*)\"$")
    public void iEnterLastName(String lastName) {
        new RegisterPage().enterLastName(lastName);
    }

    @And("^I enter Date of Birth \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void iEnterDateOfBirth(String day, String month, String year) {
        new RegisterPage().selectDateOfBirth(day, month, year);
    }

    @And("^I enter Email \"([^\"]*)\"$")
    public void iEnterEmail(String email) {
        new RegisterPage().enterEmail(email);
    }

    @And("^I enter Password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new RegisterPage().enterPassword(password);
    }

    @And("^I enter Confirm password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String confPassword) {
        new RegisterPage().enterConfirmPassword(confPassword);

    }


    @Then("^I Verify registration message <\"([^\"]*)\">$")
    public void iVerifyRegistrationMessage() {
        String expectedMessage = "Your registration completed";
        String actualMessage = new RegisterPage().getYourRegCompletedText();
        Assert.assertEquals("Your registration completed Text Not Displayed", expectedMessage, actualMessage);
    }


    @And("^I should see the error message for firstname \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessageForFirstname(String firstname) {
        new RegisterPage().getValidationErrorMessageForField(firstname);
    }

    @And("^I should see the error message for lastname \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessageForLastname(String lastname) {
        new RegisterPage().getValidationErrorMessageForField(lastname);
    }

    @And("^I should see the error message for email \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessageForEmail(String email) {
        new RegisterPage().getValidationErrorMessageForField(email);
    }

    @And("^I should see the error message for password \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessageForPassword(String password) {
        new RegisterPage().getValidationErrorMessageForField(password);
    }

    @And("^I should see the error message for confirmPassword \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessageForConfirmPassword(String confirmPassword) {
        new RegisterPage().getValidationErrorMessageForField(confirmPassword);

    }

}
