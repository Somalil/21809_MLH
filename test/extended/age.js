import sel from '../../data/selectors';
import exp from '../../data/expected.json';

describe('Age field', () => {

    before('Open App', function () {
        browser.url('');
    });

    describe('Placeholder', function(){

        it.skip('TC-067 Age field placeholder = "Hero\'s age', function (){
            let elem = $(sel.age);
            expect(elem).toHaveElementProperty('placeholder', exp.agePlaceholder)
        });
    });
    });