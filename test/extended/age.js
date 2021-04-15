import sel from '../../data/selectors';
import exp from '../../data/expected.json';

describe('Age field', () => {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(function(){
        browser.refresh()
    });

    describe('Placeholder', function(){

        it('TC-067 Age field placeholder = "Hero\'s age', function (){
            let elem = $(sel.age);
            expect(elem).toHaveElementProperty('placeholder', exp.agePlaceholder)
        });
    });

    describe('Positive cases', function() {

        it('TC-068 Age field accepts one digit', function () {
            const input = $(sel.age);
            input.setValue('1');
            const err = $(sel.ageFieldError).isExisting();
            expect(err).toEqual(false);
        });

        it('TC-069 Age field accepts 12 digits', function() {
            const input = $(sel.age);
            input.setValue('99999999999');
            browser.pause(1000);
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(false);
        });

        it('TC-070 Age field accepts random digits', function(){
            const input = $(sel.age);
            input.setValue(Math.trunc(Math.random() * (98) + 1));
            browser.pause(1000);
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(false);
        });

        it('TC-071 Age field accepts 0 before the number', function(){
            const input = $(sel.age);
            input.setValue('0' + Math.trunc(Math.random() * (98) + 1));
            browser.pause(1000);
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(false);
        });

        it('TC-072 Age field accepts space before the number', function(){
            const input = $(sel.age);
            input.setValue(' ' + Math.trunc(Math.random() * (98) + 1));
            browser.pause(1000);
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(false);
        });

        it('TC - 073 Clicking up on the spin, the value should be increased by 1, when Age field empty', function() {
            $(sel.spinnerUp).click();
            expect($(sel.age).getValue()).toEqual('1');
        });

        it('TC - 074 By clicking up on the spin, the value should increase by 1, when Age field not empty', function() {
            const input = $(sel.age);
            input.setValue('1');
            $(sel.spinnerUp).click();
            expect($(sel.age).getValue()).toEqual('2');
        });

        it('TC - 075 Clicking down on the spin, the value should be decreased by 1, when Age field is not empty', function() {
            const input = $(sel.age);
            input.setValue('1');
            $(sel.spinnerDown).click();
            expect($(sel.age).getValue()).toEqual('0');
        });

        it('Tc-076 Copy-paste functionality', function(){
            $(sel.name).setValue('2134');
            $(sel.name).doubleClick();
            $(sel.name).keys('Command', 'c');
            $(sel.age).click();
            $(sel.age).keys('Command', 'v');
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(false);
        });

    });

    describe('Negative cases', function(){

        it('TC-077 Click down on the spin, when Age field is empty', function(){
            $(sel.spinnerDown).click();
            const err = $(sel.ageFieldError).waitForDisplayed();
            expect(err).toEqual(true);
        });

        it('TC-078 Click down on the spin, when Age field value is "1"', function(){
            const input = $(sel.age);
            input.setValue('1');
            $(sel.spinnerDown).click();
            const err = $(sel.ageFieldError).waitForDisplayed({timeout: 1000});
            expect(err).toEqual(true);
        });

        it('TC-079 Click up on the spin, when Age field value is 999999999999', function(){
            const input = $(sel.age);
            input.setValue('999999999999');
            $(sel.spinnerUp).click();
            const err = $(sel.ageFieldError).waitForDisplayed();
            expect(err).toEqual(true);
        });

        it('TC-080 13 digits in Age field', function(){
            const input = $(sel.age);
            input.setValue('7777777777777');
            const err = $(sel.ageFieldError).waitForDisplayed();
            expect(err).toEqual(true);
        });

        it('TC-081 Age field doesn\'t accepts letters', function(){
            const input = $(sel.age);
            input.setValue('abc');
            const err = $(sel.ageFieldError).waitForDisplayed();
            expect(err).toEqual(true);
        });

        it('TC-082 Age field doesn\'t accepts Uppercase letters', function(){
            const input = $(sel.age);
            input.setValue('ABC');
            const err = $(sel.ageFieldError).waitForDisplayed();
            expect(err).toEqual(true);
        });

        it('TC-083 Age field doesn\'t accepts special symbols', function(){
            const input = $(sel.age);
            input.setValue('@\\]^_`{|~');
            const err = $(sel.ageFieldError).waitForDisplayed();
            expect(err).toEqual(true);
        });

        it('TC-084 Age field doesn\'t accepts bad symbols', function(){
            const input = $(sel.age);
            input.setValue('♣ ☺ ♂');
            const err = $(sel.ageFieldError).waitForDisplayed();
            expect(err).toEqual(true);
        });

        it('TC-085 Age field doesn\'t accepts line feed symbols', function(){
            const input = $(sel.age);
            input.setValue('^M" /  "\n" /  "\r"');
            const err = $(sel.ageFieldError).waitForDisplayed();
            expect(err).toEqual(true);
        });

        it('TC-086 Age field doesn\'t accepts russian letters', function(){
            const input = $(sel.age);
            input.setValue('фбвгд');
            const err = $(sel.ageFieldError).waitForDisplayed();
            expect(err).toEqual(true);
        });


        it('TC-087 Error appears when the Age field left empty', function () {
            const input = $(sel.age);
            input.setValue('1');
            $(sel.age).keys('Backspace');
            const err = $(sel.ageFieldError).waitForDisplayed({timeout: 1000});
            expect(err).toEqual(true);
        });

    });
    });
