import exp from '../../data/expected.json'
import sel from "../../data/selectors";

describe('Story type', function () {

    before('before all', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh()
    });

    describe('Placeholder', () => {

        it('TC-088 Story type field placeholder = "Type of the story"', function () {
            const placeholder = $(sel.storyTypePlaceholder).text
            expect(placeholder).toEqual(exp.storyTypePlaceholder)
        });

    });

    describe('Extended list', () => {

        it('TC-089 Story type field has a chevron', function () {
            const chevron = $(sel.storyChevron).isDisplayed();
            expect(chevron).toEqual(true);
        });

        it.skip('TC-090 By clicking on chevron opens list', function () {
            $(sel.storyType).click();
            expect(sel.storyListHolder).toBeDisplayed();
        });

    });

});
