import sel from '../../data/selectors';
import {input4Values, imageUpload} from '../../helpers/methods';
import {name, age, story, imagePath} from '../../data/testData';
import exp from '../../data/expected.json';

describe('Story elements', function () {

    before('Positive cases', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh()
    });

    it('TC-140 History page contains Header', function () {
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        expect($(sel.header)).toBeDisplayed();
    });

    it('TC-141 header = \'My Little Hero\'', function () {
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        const headerText = $(sel.header).getText();
        expect(headerText).toEqual(exp.storyHeader);
    });

    it('TC-142 History page contains Title', function () {
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        expect($(sel.title)).toBeDisplayed();
    });

    it('TC-143 History page contains Body', function () {
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        expect($(sel.body)).toBeDisplayed();
    });

    it('TC-144 History page contains Moral', function () {
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        expect($(sel.moral)).toBeDisplayed();
    });

    it('TC-145 History page contains Image', function () {
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        imageUpload(imagePath.JPG3_9);
        $(sel.submit).click()
        const src = $('.error__pic[src]').getAttribute('src');
        const isImage = src !== imagePath.noImage;
        expect(isImage).toEqual(true);

    });

    it('TC-146 History page contains Reset button', function () {
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        const btn = $(sel.resetButton).isDisplayed();
        expect(btn).toEqual(true);
    });

});
