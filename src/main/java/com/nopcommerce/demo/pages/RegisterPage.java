package com.nopcommerce.demo.pages;

import com.aventstack.extentreports.Status;
import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class RegisterPage extends Utility {

    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(css = "div[class='page-title'] h1")
    WebElement registerText;

    @CacheLookup
    @FindBy(xpath = "//div[@id='gender']//label")
    List<WebElement> genderRadios;

    @CacheLookup
    @FindBy(id = "FirstName")
    WebElement firstNameField;

    @CacheLookup
    @FindBy(id = "LastName")
    WebElement lastNameField;

    @CacheLookup
    @FindBy(name = "DateOfBirthDay")
    WebElement dateOfBirthDay;

    @CacheLookup
    @FindBy(name = "DateOfBirthMonth")
    WebElement dateOfBirthMonth;

    @CacheLookup
    @FindBy(name = "DateOfBirthYear")
    WebElement dateOfBirthYear;

    @CacheLookup
    @FindBy(name = "Email")
    WebElement emailField;

    @CacheLookup
    @FindBy(id = "Password")
    WebElement passwordField;

    @CacheLookup
    @FindBy(id = "ConfirmPassword")
    WebElement confirmPasswordField;

    @CacheLookup
    @FindBy(css = "#register-button")
    WebElement registerBtn;

    @CacheLookup
    @FindBy(className = "field-validation-error")
    List<WebElement> fieldValidationErrors;

    @CacheLookup
    @FindBy(css = ".result")
    WebElement yourRegCompletedText;

    @CacheLookup
    @FindBy(css = ".button-1.register-continue-button")
    WebElement continueBtn;


    public String getRegisterText() {
        String message = getTextFromElement(registerText);

        log.info("Get registerText : " + registerText.getText() + registerText.getText());
        return message;
    }

    public void selectGender(String gender) {
        for (WebElement radio : genderRadios) {
            if (radio.getText().contains(gender)) {
                log.info("Select '" + gender + "' radio button" + genderRadios.toString());
                clickOnElement(radio);
                break;
            }
        }
    }

    public void enterFirstName(String firstName) {

        sendTextToElement(firstNameField, firstName);

        log.info("Enter Firstname : '" + firstName + "' to firstName field" + firstNameField.getText());
    }

    public void enterLastName(String lastName) {
        sendTextToElement(lastNameField, lastName);

        log.info("Enter Lastname : '" + lastName + "' to lastName field" + lastNameField.getText());
    }

    public void selectDateOfBirth(String day, String month, String year) {
        selectByVisibleTextFromDropDown(dateOfBirthDay, day);
        selectByVisibleTextFromDropDown(dateOfBirthMonth, month);
        selectByVisibleTextFromDropDown(dateOfBirthYear, year);
                log.info("Select day : '" + day + "', month : '" + month + "', year : '" + year + "'" + "<br>");
    }

    public void enterEmail(String email) {
        log.info("Enter Email : '" + email + "' to email field" + emailField.toString());
        sendTextToElement(emailField, email);


    }

    public void enterPassword(String password) {
        log.info("Enter Password : " + passwordField.toString());
        sendTextToElement(passwordField, password);


    }

    public void enterConfirmPassword(String confPassword) {
        log.info("Enter Confirm password : " + confirmPasswordField.toString());
        sendTextToElement(confirmPasswordField, confPassword);
    }

    public void clickOnRegisterButton() {
        log.info("Click on 'REGISTER' button" + registerBtn.toString());
        clickOnElement(registerBtn);
    }

    public String getValidationErrorMessageForField(String fieldName) {
        String validationMessage = null;
        for (WebElement message : fieldValidationErrors) {
            if (message.getAttribute("data-valmsg-for").equals(fieldName)) {
                validationMessage = message.getText();

                log.info("Click on 'REGISTER' button" + fieldValidationErrors.toString());
                break;
            }
        }
        return validationMessage;
    }

    public String getYourRegCompletedText() {
        log.info("Get your reg completed text : " + yourRegCompletedText.toString());
        String message = getTextFromElement(yourRegCompletedText);
        return message;
    }

    public void clickOnContinueButton() {

   log.info("Click on 'CONTINUE' button" + continueBtn.toString());
        clickOnElement(continueBtn);
    }







}
