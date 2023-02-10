import { _saveQuestion, _saveQuestionAnswer } from "./utils/_Data";

describe("_saveQuestion", ()=>{
    it("_saveQuestion will save question successfully and will return the expected response", async () => {
        let questionResponse = await _saveQuestion({optionOneText:'First Option', optionTwoText:'Second Option', author:'mtsamis'});

        expect(questionResponse.author).toBe('mtsamis');
        expect(questionResponse.optionOne.text).toBe('First Option');
        expect(questionResponse.optionTwo.text).toBe('Second Option');
    })

    it("_saveQuestion will not save question will return an error message", async () => {
        await expect(_saveQuestion({abc:'question'})).rejects.toEqual(
            'Please provide optionOneText, optionTwoText, and author'
        );
    })
})

describe("_saveQuestionAnswer", ()=>{
    it("_saveQuestionAnswer will save answer and return true", async () => {
        let payload = {
            authedUser: 'mtsamis',
            qid: '6ni6ok3ym7mf1p33lnez',
            answer: 'optionOne',
          }
        let questionResponse = await _saveQuestionAnswer(payload);

        expect(questionResponse).toBe(true);
    })

    it("_saveQuestionAnswer will not save answer and it will return an error message", async () => {
        let a = 1
        let b = 2
        await expect(_saveQuestionAnswer(a, b)).rejects.toEqual(
            'Please provide authedUser, qid, and answer'
        );
    })
})