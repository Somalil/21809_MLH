import sel from '../../data/selectors';
import exp from '../../data/expected.json';

describe('Age field', () => {

    before('Open App', function () {
        browser.url('');
    });

    describe('Placeholder', function(){

        it('TC-067 Age field placeholder = "Hero\'s age', function (){
            let elem = $(sel.age);
            expect(elem).toHaveElementProperty('placeholder', exp.agePlaceholder)
        });
    });

    describe('Positive cases', function() {

        it('TC-068 Age field accepts one digit', function () {
            browser.refresh();
            const input = $(sel.age);
            input.setValue('1');
            browser.pause(1000);
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(false);
        });

        it('TC-069 Age field accepts 12 digits', function() {
            browser.refresh();
            const input = $(sel.age);
            input.setValue('99999999999');
            browser.pause(1000);
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(false);
        });

        it('TC-070 Age field accepts random digits', function(){
            browser.refresh();
            const input = $(sel.age);
            input.setValue(Math.trunc(Math.random() * (98) + 1));
            browser.pause(1000);
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(false);
        });

        it('TC-071 Age field accepts 0 before the number', function(){
            browser.refresh();
            const input = $(sel.age);
            input.setValue('0' + Math.trunc(Math.random() * (98) + 1));
            browser.pause(2000);
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(false);
        });

        it('TC-072 Age field accepts space before the number', function(){
            browser.refresh();
            const input = $(sel.age);
            input.setValue(' ' + Math.trunc(Math.random() * (98) + 1));
            browser.pause(2000);
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(false);
        });

        it('TC - 073 Clicking up on the spin, the value should be increased by 1, when Age field empty', function() {
            browser.refresh();
            $(sel.spinnerUp).click();
            expect($(sel.age).getValue()).toEqual('1');
        });

        it('TC - 074 By clicking up on the spin, the value should increase by 1, when Age field not empty', function() {
            browser.refresh();
            const input = $(sel.age);
            input.setValue('1');
            $(sel.spinnerUp).click();
            expect($(sel.age).getValue()).toEqual('2');
        });

        it('TC - 075 Clicking down on the spin, the value should be decreased by 1, when Age field is not empty', function() {
            browser.refresh();
            const input = $(sel.age);
            input.setValue('1');
            $(sel.spinnerDown).click();
            expect($(sel.age).getValue()).toEqual('0');
        });

        it('Tc-076 Copy-paste functionality', function(){
            browser.refresh();
            $(sel.name).setValue('2134');
            $(sel.name).doubleClick();
            $(sel.name).keys('Command', 'c');
            $(sel.age).click();
            $(sel.age).keys('Command', 'v');
            const err = $(sel.ageFieldError).isDisplayed();
            expect(err).toEqual(false);
        });

    });
    });
