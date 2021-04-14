import sel from "../data/selectors";

function input4Values (name, genderButton, age, story){
    $(sel.name).setValue(name);
    $(genderButton).click();
    $(sel.age).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
}

function imageUpload(imagePath){
    const fileUpload = $(sel.imageInput);
    browser.execute((el) => el.style.display = 'block', fileUpload);
    fileUpload.waitForDisplayed();
    const path = require('path');
    const filePath = path.join(__dirname, imagePath);
    const remoteFilePath = browser.uploadFile(filePath);
    fileUpload.setValue(remoteFilePath);
}

function isPronounsCorrect(pronoun){
    const body = $(sel.body).getText();
    return body.includes(`shakes ${pronoun} head`);
}

function isFirstGenderUppercase(gender){
    const body = $(sel.body).getText();
    let index = body.indexOf('are unequal. ');
    let bodyGender = body.substr(index + 13, 2);
    let expectedGender = gender[0].toUpperCase() + gender.slice(1);
    return bodyGender === expectedGender;
}

function isSecondGenderUppercase(gender){
    const body = $(sel.body).getText();
    let index = body.indexOf('continues doing');
    let bodyGender = body.substr(index - 3, 2);
    let expectedGender = gender[0].toUpperCase() + gender.slice(1);
    return bodyGender === expectedGender;
}

module.exports = {input4Values, imageUpload, isPronounsCorrect, isFirstGenderUppercase, isSecondGenderUppercase}
