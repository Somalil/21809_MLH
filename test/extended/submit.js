import sel from '../../data/selectors';
import {input4Values} from '../../helpers/methods';
import {name, age, story} from '../../data/testData';
describe('Name field', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(function () {
        browser.refresh()
    });

    describe('Positive cases', function() {

        it('TC-129 Clicking on Submit button takes user to the story page, when 1-4 fields are filled correctly', function () {
            input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
            $(sel.submit).click();
            const button = $(sel.resetButton).isDisplayed();
            expect(button).toEqual(true);
        });

        it('TC-130 Verify that submit button is "Create!"', function () {
            expect($(sel.submit).getText()).toEqual('Create!');
        });

        it('TC-131 User can use Enter/Return button instead of clicking on Submit', function () {
            input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
            $(sel.submit).keys('Enter');
            const button = $(sel.resetButton).isDisplayed();
            expect(button).toEqual(true);
        });

        it('TC-132 Button is disabled when All fields aren\'t filled', function () {
            const button = $(sel.submit).isEnabled();
            expect(button).toEqual(false);
        });

        it('TC-133 Button is disabled when Name field isn\'t filled', function () {
            $(sel.radioButtonHe).click();
            $(sel.age).setValue('4');
            $(sel.storyType).click();
            $$(sel.storyList)[story.comedy].click();
            const button = $(sel.submit).isEnabled();
            expect(button).toEqual(false);
        });

        it('TC-134 Button is disabled when Gender field isn\'t filled', function () {
            $(sel.name).setValue('Sherlock Holmes 99')
            $(sel.age).setValue('4');
            $(sel.storyType).click();
            $$(sel.storyList)[story.comedy].click();
            const button = $(sel.submit).isEnabled();
            expect(button).toEqual(false);
        });

    });

    describe('Negative cases', function() {

        it('TC-135 Button is disabled when Age field isn\'t filled', function (){
            $(sel.name).setValue('Sherlock Holmes 99')
            $(sel.radioButtonHe).click();
            $(sel.storyType).click();
            $$(sel.storyList)[story.comedy].click();
            const button = $(sel.submit).isEnabled();
            expect(button).toEqual(false);
        });

        it('TC-136 Button is disabled when Story field isn\'t filled', function (){
            $(sel.name).setValue('Sherlock Holmes 99')
            $(sel.radioButtonHe).click();
            $(sel.age).setValue('4');
            const button = $(sel.submit).isEnabled();
            expect(button).toEqual(false);
        });

        it('TC-138 Verify that Create button becomes disabled when all the required fields are filled BUT then user deletes Name.', function () {
            input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
            $(sel.name).click();
            $(sel.name).keys(['Command', 'a']);
            $(sel.name).keys('Backspace');
            const button = $(sel.submit).isEnabled();
            expect(button).toEqual(false);
        });

        it('TC-139 Verify that Create button becomes disabled when all the required fields are filled BUT then user deletes Age.', function () {
            input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
            $(sel.age).doubleClick();
            $(sel.age).keys('Backspace');
            const button = $(sel.submit).isEnabled();
            expect(button).toEqual(false);
        });

        it('TC-140 Verify that Create button becomes disabled when all the required fields are filled BUT then user deletes Story type', function () {
            input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
            $(sel.age).doubleClick();
            $(sel.age).keys('Backspace');
            const button = $(sel.submit).isEnabled();
            expect(button).toEqual(false);
        });

    });

});
