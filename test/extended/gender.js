import sel from '../../data/selectors';

describe('Gender field', function () {

    before('Positive cases', function () {
        browser.url('');
    });

    beforeEach( () => {
        browser.refresh()
    });

    it('TC-054 Button "he" is enabled', function () {
        $(sel.radioButtonHe).click();
        const isSel = $(sel.radioButtonHe).isSelected();
        expect(isSel).toEqual(true);
    });

    it('TC-055 Button "she" is enabled', function () {
        $(sel.radioButtonShe).click();
        const isSel = $(sel.radioButtonShe).isSelected();
        expect(isSel).toEqual(true);
    });

    it('TC-056 Button "it" is enabled', function () {
        $(sel.radioButtonIt).click();
        const isSel = $(sel.radioButtonIt).isSelected();
        expect(isSel).toEqual(true);
    });

    it('TC-057 User can choose only one button at the time (he)', function () {
        $(sel.radioButtonHe).click();
        const isHe = $(sel.radioButtonHe).isSelected();
        const isShe = $(sel.radioButtonShe).isSelected();
        const isIt = $(sel.radioButtonIt).isSelected();
        expect(isHe && !isShe && !isIt).toEqual(true);
    });

    it('TC-058 User can choose only one button at the time (she)', function () {
        $(sel.radioButtonShe).click();
        const isHe = $(sel.radioButtonHe).isSelected();
        const isShe = $(sel.radioButtonShe).isSelected();
        const isIt = $(sel.radioButtonIt).isSelected();
        expect(!isHe && isShe && !isIt).toEqual(true);
    });

    it('TC-059 User can choose only one button at the time (it)', function () {
        $(sel.radioButtonIt).click();
        const isHe = $(sel.radioButtonHe).isSelected();
        const isShe = $(sel.radioButtonShe).isSelected();
        const isIt = $(sel.radioButtonIt).isSelected();
        expect(!isHe && !isShe && isIt).toEqual(true);
    });

    it('TC-060 User can switch the option he -> she', function () {
        $(sel.radioButtonHe).click();
        $(sel.radioButtonShe).click();
        const isHe = $(sel.radioButtonHe).isSelected();
        const isShe = $(sel.radioButtonShe).isSelected();
        const isIt = $(sel.radioButtonIt).isSelected();
        expect(!isHe && isShe && !isIt).toEqual(true);
    });

    it('TC-061 User can switch the option he -> it', function () {
        $(sel.radioButtonHe).click();
        $(sel.radioButtonIt).click();
        const isHe = $(sel.radioButtonHe).isSelected();
        const isShe = $(sel.radioButtonShe).isSelected();
        const isIt = $(sel.radioButtonIt).isSelected();
        expect(!isHe && !isShe && isIt).toEqual(true);
    });

    it('TC-062 User can switch the option she -> he', function () {
        $(sel.radioButtonShe).click();
        $(sel.radioButtonHe).click();
        const isHe = $(sel.radioButtonHe).isSelected();
        const isShe = $(sel.radioButtonShe).isSelected();
        const isIt = $(sel.radioButtonIt).isSelected();
        expect(isHe && !isShe && !isIt).toEqual(true);
    });

    it('TC-063 User can switch the option she -> it', function () {
        $(sel.radioButtonShe).click();
        $(sel.radioButtonIt).click();
        const isHe = $(sel.radioButtonHe).isSelected();
        const isShe = $(sel.radioButtonShe).isSelected();
        const isIt = $(sel.radioButtonIt).isSelected();
        expect(!isHe && !isShe && isIt).toEqual(true);
    });

    it('TC-064 User can switch the option it -> he', function () {
        $(sel.radioButtonIt).click();
        $(sel.radioButtonHe).click();
        const isHe = $(sel.radioButtonHe).isSelected();
        const isShe = $(sel.radioButtonShe).isSelected();
        const isIt = $(sel.radioButtonIt).isSelected();
        expect(isHe && !isShe && !isIt).toEqual(true);
    });

    it('TC-065 User can switch the option it -> she', function () {
        $(sel.radioButtonIt).click();
        $(sel.radioButtonShe).click();
        const isHe = $(sel.radioButtonHe).isSelected();
        const isShe = $(sel.radioButtonShe).isSelected();
        const isIt = $(sel.radioButtonIt).isSelected();
        expect(!isHe && isShe && !isIt).toEqual(true);
    });

});
