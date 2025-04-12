// https://jestjs.io/docs/getting-started

// Using CommonJS module
// const sum = require("../sum")

// Using ES module
import sum from "../src/sum"

describe("getSumResult", () => {
    test("adds 1 + 2 to equal 3", () => {
        // expect(sum(1, 2)).toBe(3)

        // arrange
        const testingData1 = 1
        const testingData2 = 2
        const expected = 3

        // act
        const actual = sum(testingData1, testingData2)

        // assert
        expect(actual).toBe(expected)
    })
})
