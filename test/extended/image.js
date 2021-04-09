import sel from '../../data/selectors';
import {input4Values, imageUpload} from '../../helpers/methods';
import {name, age, story, imagePath} from '../../data/testData';
import exp from '../../data/expected.json';


describe('Image field', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh()
    });

    describe('Positive cases', () => {

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
            const isDisplaying = $(sel.imageThumbnail).isExisting()
            expect(isDisplaying).toEqual(true);
        });

        it('TC-109 Validate that user can select png smaller then 4 mb file from file explorer', function () {
            imageUpload(imagePath.PNG3_9)
            const isDisplaying = $(sel.imageThumbnail).isExisting()
            expect(isDisplaying).toEqual(true);
        });

        it('TC-110 Verify that bin icon appears when hover over the image preview', function () {
            imageUpload(imagePath.JPG1)
            $(sel.imageIconActions).waitForExist()
            $(sel.imageIcon).moveTo()
            const isDisplaying = $(sel.imageRemoveButton).isDisplayed()
            expect(isDisplaying).toEqual(true);
        });

        it('TC-111 Validate that user can delete image', function () {
            imageUpload(imagePath.JPG1)
            $(sel.imageIconActions).waitForExist()
            $(sel.imageIcon).moveTo()
            $(sel.imageRemoveButton).click()
            const isDeleted = $(sel.image).isDisplayed()
            expect(isDeleted).toEqual(true);
        });

    });

    describe('Negative cases', () => {

        it('TC-115 Validate that the user is not able to upload jpeg file > 4 mb from file explorer', function () {
            imageUpload(imagePath.JPG4_1)
            const err = $(sel.imageError).waitForDisplayed({timeout: 1000})
            expect(err).toEqual(true);
        });

        it('TC-116 Validate that  the user is not able to upload png file > 4 mb from file explorer', function () {
            imageUpload(imagePath.PNG4_1)
            const err = $(sel.imageError).waitForDisplayed({timeout: 1000})
            expect(err).toEqual(true);
        });

        it('TC-123 Verify that the user is not able to upload txt file', function () {
            imageUpload(imagePath.TXT)
            const err = $(sel.imageError).waitForDisplayed({timeout: 1000})
            expect(err).toEqual(true);
        });

        it('TC-124 Verify that the user is not able to upload gif file', function () {
            imageUpload(imagePath.GIF)
            const err = $(sel.imageError).waitForDisplayed({timeout: 1000})
            expect(err).toEqual(true);
        });

        it('TC-125 Verify that the user is not able to upload bmp file', function () {
            imageUpload(imagePath.BMP)
            const err = $(sel.imageError).waitForDisplayed({timeout: 1000})
            expect(err).toEqual(true);
        });

        it('TC-126 Verify that the user is not able to upload pdf file', function () {
            imageUpload(imagePath.PDF)
            const err = $(sel.imageError).waitForDisplayed({timeout: 1000})
            expect(err).toEqual(true);
        });

        it('TC-127 Verify that the user is not able to upload mp4 file', function () {
            imageUpload(imagePath.MP4)
            const err = $(sel.imageError).waitForDisplayed({timeout: 1000})
            expect(err).toEqual(true);
        });

        it('TC-128 Verify that the user is not able to upload ppt file ', function () {
            imageUpload(imagePath.PPT)
            const err = $(sel.imageError).waitForDisplayed({timeout: 1000})
            expect(err).toEqual(true);
        });

    });

});
