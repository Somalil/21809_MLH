import sel from '../../data/selectors';
import storyGenerate from '../../helpers/methods';
import {name, age, story} from '../../data/testData';
import exp from '../../data/expected.json';

describe('Story elements', function () {

    before('Positive cases', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh()
    });

    it('TC-140 History page contains Header', function () {
        storyGenerate(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        expect($(sel.header)).toBeDisplayed();
    });

    it('TC-141 header = \'My Little Hero\'', function () {
        storyGenerate(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        const headerText = $(sel.header).getText();
        expect(headerText).toEqual(exp.storyHeader);
    });

    it('TC-142 History page contains Title', function () {
        storyGenerate(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        expect($(sel.title)).toBeDisplayed();
    });

    it('TC-143 History page contains Body', function () {
        storyGenerate(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        expect($(sel.body)).toBeDisplayed();
    });

    it('TC-144 History page contains Moral', function () {
        storyGenerate(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        expect($(sel.moral)).toBeDisplayed();
    });
});
