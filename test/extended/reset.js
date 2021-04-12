import sel from '../../data/selectors';
import {input4Values} from '../../helpers/methods';
import {name, age, story} from '../../data/testData';
import exp from '../../data/expected.json';

describe('Reset field', function () {
    before('Open App', function () {
        browser.url('');
    });

    beforeEach(function(){
        browser.refresh()
    });

    it('TC-147 Reset button is present', function(){
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        $(sel.resetButton).isDisplayed();
    });
    it('TC-148 Reset button label = \'Try again!\'', function(){
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        $(sel.resetButton).isDisplayed();
        const reset = $(sel.resetButton).getText();
        expect(reset).toEqual(exp.reset);
    });
    it('TC-149 Reset button is active', function(){
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        $(sel.resetButton).isDisplayed();
        const button = $(sel.resetButton);
        expect(button).toBeClickable();
    });
    it('TC-150 Clicking reset button takes user to the start page', function(){
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        $(sel.resetButton).click();
        expect(browser).toHaveUrl('https://qa-apps.netlify.app/hero/fix#')
    });
    it('TC-151 Name field is empty after clicking Reset button', function(){
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        $(sel.resetButton).click();
        expect($(sel.name)).toHaveElementProperty('placeholder', exp.namePlaceholder);
    });
    it('TC-152a Gender(He) radioButtons are not selected after clicking Reset button', function(){
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        $(sel.resetButton).click();
        const isSel = $(sel.radioButtonHe).isSelected();
        expect(isSel).toEqual(false);
    });
    it('TC-152b Gender(She) radioButtons are not selected after clicking Reset button', function(){
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        $(sel.resetButton).click();
        const isSel = $(sel.radioButtonShe).isSelected();
        expect(isSel).toEqual(false);
    });
    it('TC-152c Gender(It) radioButtons are not selected after clicking Reset button', function(){
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        $(sel.resetButton).click();
        const isSel = $(sel.radioButtonIt).isSelected();
        expect(isSel).toEqual(false);
    });
    it('TC-153 Age field is empty after clicking Reset button', function(){
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        $(sel.resetButton).click();
        expect($(sel.age)).toHaveElementProperty('placeholder', exp.agePlaceholder);
    });
    it('TC-154 Story field is empty after clicking Reset button', function(){
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        $(sel.resetButton).click();
        browser.pause(2000);
        expect($(sel.storyTypePlaceholder).getText()).toEqual(exp.storyPlaceholder);
    });
    it('TC-155 Image field is empty after clicking Reset button', function(){
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        $(sel.resetButton).click();
        const placeholderText = $(sel.imagePlaceholder).getText();
        expect(placeholderText).toEqual(exp.imagePlaceholderText);
    });
});
