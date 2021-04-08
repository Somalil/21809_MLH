import sel from '../../data/selectors';
import {input4Values, imageUpload} from '../../helpers/methods';
import {name, age, story, imagePath} from '../../data/testData';
import exp from '../../data/expected.json';


describe('Image field', function () {

    before('Positive cases', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh()
    });

    it('TC-105 placeholder = \'Click or drag and drop\'', function () {
        const placeholderText = $(sel.imagePlaceholder).getText();
        expect(placeholderText).toEqual(exp.imagePlaceholderText);
    });

    it('TC-106 Verify that the Image field is optional', function () {
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        const isStoryDisplayed = $(sel.body).isDisplayed();
        expect(isStoryDisplayed).toEqual(true);
    });

    it('TC-108 Validate that user can select jpeg file smaller then 4 mb from file explorer', function () {
        imageUpload(imagePath.JPG3_9)
        const isDisplaying = $(sel.imageThumbnail).isDisplayed()
        expect(isDisplaying).toEqual(true);
    });

    it('TC-109 Validate that user can select png smaller then 4 mb file from file explorer', function () {
        imageUpload(imagePath.PNG3_9)
        const isDisplaying = $(sel.imageThumbnail).isDisplayed()
        expect(isDisplaying).toEqual(true);
    });

    it('TC-110 Verify that bin icon appears when hover over the image preview', function () {
        imageUpload(imagePath.JPG1)
        $(sel.imageIconActions).waitForExist()
        $(sel.imageIcon).moveTo()
        const isDisplaying = $(sel.imageRemoveButton).isDisplayed()
        expect(isDisplaying).toEqual(true);
    });

});
