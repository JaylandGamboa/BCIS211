// https://jestjs.io/docs/getting-started

// Using CommonJS module
// const sum = require("../sum")

// Using ES module
import Session from "../model/session"

describe("toString result", () => {
    test("Adding data to session class", () => {
        const sessionTestDataId = 1
        const sessionTestDataName = 'Initial Workout'
        const sessionTestComment = 'Comment Goes Here'
        const expected = `Session ID: 1 Session Name: Initial Workout Comment: Comment Goes Here Complete: false`

        // arrange
        let session = new Session(sessionTestDataId,sessionTestDataName,sessionTestComment)
        // act
        const actual = session.toString()

        // assert
        expect(actual).toBe(expected)
    })
})
