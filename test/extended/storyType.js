import exp from '../../data/expected.json'
import sel from "../../data/selectors";
import {name, age, story} from '../../data/testData';

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

        it('TC-090 By clicking on chevron opens list', function () {
            $(sel.storyType).click();
            expect($(sel.storyListHolder)).toBeDisplayed();
        });

        it('TC-091 After the value is chosen the dropdown is collapsed', function () {
            $(sel.storyType).click();
            $$(sel.storyList)[story.comedy].click()
            browser.pause(1000)
            const isDisp = $(sel.storyListHolder).isDisplayed()
            expect(isDisp).toEqual(false);
        });

    });

    describe('List of the stories is correct', () => {

        it('TC-092 First type of the story is "Overcoming the Monster"', function () {
            $(sel.storyType).click();
            const text = $$(sel.storyList)[story.overcomingTheMonster].getAttribute('title');
            expect(text).toEqual(exp.first);
        });

        it('TC-093 Second type of the story is "Rebirth""', function () {
            $(sel.storyType).click();
            const text = $$(sel.storyList)[story.rebirth].getAttribute('title');
            expect(text).toEqual(exp.second);
        });

        it('TC-094 Third type of the story is "Quest"', function () {
            $(sel.storyType).click();
            const text = $$(sel.storyList)[story.quest].getAttribute('title');
            expect(text).toEqual(exp.third);
        });

        it('TC-095 Fourth type of the story is "Journey and Return"', function () {
            $(sel.storyType).click();
            const text = $$(sel.storyList)[story.journeyAndReturn].getAttribute('title');
            expect(text).toEqual(exp.fourth);
        });

        it('TC-096 Fifth type of the story is "Rags and Riches"', function () {
            $(sel.storyType).click();
            const text = $$(sel.storyList)[story.ragsAndRiches].getAttribute('title');
            expect(text).toEqual(exp.fifth);
        });

        it('TC-097 Sixth type of the story is "Tragedy"', function () {
            $(sel.storyType).click();
            const text = $$(sel.storyList)[story.tragedy].getAttribute('title');
            expect(text).toEqual(exp.sixth);
        });

        it('TC-098 Seventh type of the story is "Comedy"', function () {
            $(sel.storyType).click();
            const text = $$(sel.storyList)[story.comedy].getAttribute('title');
            expect(text).toEqual(exp.seventh);
        });

    });

    describe('Field functionality', () => {

        it('TC-099 User can choose the story type "Overcoming the Monster"', function () {
            $(sel.storyType).click();
            $$(sel.storyList)[story.overcomingTheMonster].click();
            const text = $(sel.storyTypeSelected).getText()
            expect(text).toEqual(exp.first);
        });

        it('TC-100 User can choose the story type "Comedy"', function () {
            $(sel.storyType).click();
            $$(sel.storyList)[story.comedy].click();
            const text = $(sel.storyTypeSelected).getText()
            expect(text).toEqual(exp.seventh);
        });

        it('TC-101 User can change the type of the story "Comedy" -> "Tragedy"', function () {
            $(sel.storyType).click();
            $$(sel.storyList)[story.comedy].click();
            $(sel.storyType).click();
            $$(sel.storyList)[story.tragedy].click();
            const text = $(sel.storyTypeSelected).getText()
            expect(text).toEqual(exp.sixth);
        });

        it('TC-102 Story type is highlited when user hovers on it', function () {
            $(sel.storyType).click();
            $(sel.storyType).keys(['ArrowDown', 'ArrowDown', 'ArrowDown', 'ArrowDown', 'ArrowDown']);
            browser.pause(1000)
            const selected = $(sel.activeStory).getText()
            expect(selected).toEqual(exp.sixth);
        });

    });

    describe('Negative', () => {

        it('TC-104 Not chosen Story type', function () {
            $(sel.name).setValue(name.default);
            $(sel.radioButtonHe).click()
            $(sel.age).setValue(age.default)
            const isSubmitButtonEnabled = $(sel.submit).isEnabled()
            expect(isSubmitButtonEnabled).toEqual(false);
        });

    });

});
