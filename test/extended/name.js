import sel from '../../data/selectors';
import exp from '../../data/expected.json';

describe('Name field', function () {

    before('Open App', function () {
        browser.url('');
    });
    beforeEach(function(){
        browser.refresh()
    });
    describe('Positive cases', function() {

        it('TC-028 Name field placeholder = "Hero\'s name', function (){
            let elem = $(sel.name);
            expect(elem).toHaveElementProperty('placeholder', exp.namePlaceholder)
        });
        it('TC-029 The cursor blinks in field', function (){
            $(sel.name).click();
            let is = $(sel.name).isFocused();
            expect(is).toEqual(true);
        });
        it('TC-030 Name field frame turns from grey to blue when hover the field', function (){
            $(sel.name).moveTo();
            const isEnabled = $(sel.name).isEnabled();
            expect(isEnabled).toEqual(true);
        });
        it('TC-031 Name field frame turns color after clicking on it', function (){
            $(sel.name).click();
            const isEnabled = $(sel.name).isEnabled();
            expect(isEnabled).toEqual(true);
        });
        it('TC-032 Name field accepts one symbol', function (){
            $(sel.name).setValue('a');
            browser.pause(1000);
            const err = $(sel.nameFieldError).isDisplayed();
            expect(err).toEqual(false);
        });

        it('TC-033 Name field accepts 70 symbols', function (){
            $(sel.name).setValue('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
            browser.pause(1000);
            const err = $(sel.nameFieldError).isDisplayed();
            expect(err).toEqual(false);
        });
        it('TC-034 Name field accepts letters', function () {
            $(sel.name).setValue('ABCDEFGHIKLMNOPQRSTVXYZ');
            browser.pause(1000);
            const err = $(sel.nameFieldError).isDisplayed();
            expect(err).toEqual(false);
        });
        it('TC-035 Name field accepts Lowercase letters', function () {
            $(sel.name).setValue('abc');
            browser.pause(1000);
            const err = $(sel.nameFieldError).isDisplayed();
            expect(err).toEqual(false);
        });
        it('TC-036 Name field accepts Uppercase letters', function () {
            $(sel.name).setValue('ABC');
            browser.pause(1000);
            const err = $(sel.nameFieldError).isDisplayed();
            expect(err).toEqual(false);
        });
        it('TC-037 Name field accepts digits', function(){
            $(sel.name).setValue('1234567890');
            browser.pause(1000);
            const err = $(sel.nameFieldError).isDisplayed();
            expect(err).toEqual(false);
        });
        it('TC-038 Name field accepts special symbols', function(){
            $(sel.name).setValue('!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~');
            browser.pause(1000);
            const err = $(sel.nameFieldError).isDisplayed();
            expect(err).toEqual(false);
        });
        it('TC-039 Name field accepts bad symbols', function(){
            $(sel.name).setValue('♣ ☺ ♂');
            browser.pause(1000);
            const err = $(sel.nameFieldError).isDisplayed();
            expect(err).toEqual(false);
        });
        it('TC-040 Name field accepts line feed symbols', function(){
            $(sel.name).setValue('^M" /  "\\n" /  "\\r');
            browser.pause(1000);
            const err = $('.ant-form-item-explain-error').isDisplayed();
            expect(err).toEqual(false);
        });
        it('TC-041 Name field accepts spaces', function(){
            $(sel.name).setValue('a bc');
            browser.pause(1000);
            const err = $(sel.nameFieldError).isDisplayed();
            expect(err).toEqual(false);
        });
        it('TC-042 Name field accepts cyrillic', function(){
            $(sel.name).setValue('АбВгД');
            browser.pause(1000);
            const err = $(sel.nameFieldError).isDisplayed();
            expect(err).toEqual(false);
        });
        it('TC-043 Copy-paste functionality', function(){
            $(sel.textExample).doubleClick();
            $(sel.textExample).keys('Command', 'c');
            $(sel.name).click();
            $(sel.name).keys('Command', 'v');
            browser.pause(1000);
            const err = $(sel.nameFieldError).isDisplayed();
            expect(err).toEqual(false);
        });
    });
    describe('Negative tests', function(){
        it('TC-044 Verify that the Name input field does not accepts SQL code injections', function () {
            $(sel.name).setValue('FOO`)DROP TABLE USERS');
            const error = $(sel.nameFieldError).isDisplayed();
            expect(error).toEqual(true);
        });
        it('TC-045 Verify that the Name input field does not accepts XML code injections', function () {
            $(sel.name).setValue('<code>');
            const error = $(sel.nameFieldError).isDisplayed();
            expect(error).toEqual(true);
        });
        it('TC-046 Verify that the Name input field does not accepts XSS code injections', function(){
            $(sel.name).setValue('<script>alert("I hacked this!")</script>');
            const err = $(sel.nameFieldError).waitForDisplayed({timeout: 2000});
            expect(err).toEqual(true);
        });
        it('TC-047 Verify that the Name input field does not allow to leave Name field empty', function () {
            $(sel.name).click();
            $(sel.age).click();
            const error = $(sel.nameFieldError).waitForDisplayed({timeout: 2000});
            expect(error).toEqual(true);
        });
        it('TC-048 Verify that the error appears after deleting text', function(){
            $(sel.name).setValue('a');
            $(sel.name).keys('Backspace');
            const err = $(sel.nameFieldError).waitForDisplayed({timeout: 3000});
            expect(err).toEqual(true);
        });
        it('TC-049 Name field doesn\'t accept 71 symbol', function(){
            $(sel.name).setValue('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
            const err = $(sel.nameFieldError).waitForDisplayed({timeout: 2000});
            expect(err).toEqual(true);
        });
        it('TC-050 Submit button disabled when Name field is empty', function(){
            $(sel.radioButtonHe).click();
            $(sel.age).setValue('123456');
            $(sel.storyType).click();
            $$(sel.storyList)[6].click();
            const button = $('.ant-btn').isEnabled();
            expect(button).toEqual(false);
        });
        it('TC-051 Name field does not accept spaces only', function(){
            $(sel.name).setValue(' ');
            const err = $(sel.nameFieldError).waitForDisplayed({timeout: 2000});
            expect(err).toEqual(true);
        });
        it('TC-052 Verify that the Name input field does not accepts links', function () {
            $(sel.name).setValue('https://en.wikipedia.org');
            const err = $(sel.nameFieldError).waitForDisplayed({timeout: 2000});
            expect(err).toEqual(true);
        });
        it('TC-053 Verify that the Name field does not accepts data type format', function () {
            $(sel.name).setValue('01/01/2021');
            const err = $(sel.nameFieldError).waitForDisplayed({timeout: 2000});
            expect(err).toEqual(true);
        });
    });


});
