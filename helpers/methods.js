import sel from "../data/selectors";

function input4Values (name, genderButton, age, story){
    $(sel.name).setValue(name);
    $(genderButton).click();
    $(sel.age).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
}

module.exports = input4Values;
