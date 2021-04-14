import sel from "../../data/selectors";
import exp from "../../data/expected.json";
import {
    input4Values,
    isPronounsCorrect,
    isFirstGenderUppercase,
    isSecondGenderUppercase,
    imageUpload
} from '../../helpers/methods';
import {name, age, story, imagePath, pronoun} from '../../data/testData';

describe('Reading story', function () {

    before('Open App', function () {
        browser.url('');
    });
    beforeEach(function(){
        browser.refresh()
    });

    it('TC-156 Story page title = Two Cats And A `$name`', function (){
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        const getName = $(sel.title).getText();
        expect(getName.substring(15)).toEqual(name.default);
    });

    it('TC-157 Correct $pronounsName in body for \'he\'', function (){
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        expect(isPronounsCorrect(pronoun.he)).toEqual(true);
    });

    it('TC-158 Correct $pronounsName in body for \'she\'', function (){
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        expect(isPronounsCorrect(pronoun.she)).toEqual(true);
    });

    it('TC-159 Correct $pronounsName in body for \'it\'', function (){
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        expect(isPronounsCorrect(pronoun.it)).toEqual(true);
    });

    it('TC-160 First word $gender starts with uppercase', function (){
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        expect(isFirstGenderUppercase(exp.heLabel)).toEqual(true);
    });

    it('TC-161 Second word $gender starts with uppercase', function (){
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        $(sel.submit).click();
        expect(isSecondGenderUppercase(exp.heLabel)).toEqual(true);
    });

    it('TC-162 Image is displayed', function (){
        input4Values(name.default, sel.radioButtonHe, age.default, story.comedy);
        imageUpload(imagePath.JPG3_9);
        $(sel.submit).click()
        const src = $('.error__pic[src]').getAttribute('src');
        const isImage = src !== imagePath.noImage;
        expect(isImage).toEqual(true);
    });

});
