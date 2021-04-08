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

module.exports = {input4Values, imageUpload}
