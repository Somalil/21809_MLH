import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import {input4Values} from '../../helpers/methods';

describe('Required fields and story created', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-026 Submit button is enabled after fields 1-4 are filled in with valid values', function () {
        $(sel.name).setValue(name.default);
        $(sel.radioButtonHe).click();
        $(sel.age).setValue(age.default);
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(true);
    });

    it('TC-027 User can create a story with valid values', function () {
        browser.refresh();
        input4Values(name.default, gender.she, age.default, story.comedy);
        $(sel.submit).click();
        browser.pause(1000)
        let tryAgainBtn = $(sel.tryAgain).isDisplayed();
        expect(tryAgainBtn).toEqual(true);
    });

});
