import subtract from "../model/subtract"

describe("getSubtractResult", () => {
    test("Subtract 2 from 5 to equal 3", () => {
        // arrange
        const testingData1 = 5
        const testingData2 = 2
        const expected = 3

        // act
        const actual = subtract(testingData1, testingData2)

        // assert
        expect(actual).toBe(expected)
    })
    test("Subtract 2 from 5 to equal 3", () => {
        // arrange
        const testingData1 = 2
        const testingData2 = 5
        const expected = 3

        // act
        const actual = subtract(testingData1, testingData2)

        // assert
        expect(actual).toBe(expected)
    })
})
