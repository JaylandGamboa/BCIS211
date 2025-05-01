import Workout from "../model/workout"

describe("getWorkoutResult", () => {
    test("returning the workour class", () => {
        // expect(sum(1, 2)).toBe(3)
        const testingDataID = 1
        const testingDataName = "running"
        const testingDataType = "Marathon"
        const testingDataDistance =  12
        const testingDataisDone = true
        const testingDataComment = "Comment Goes Here"


        const expected = `1 running Marathon 12 true Comment Goes Here`
        
        // act
        let workout = new Workout(
            testingDataID,
            testingDataName,
            testingDataType,
            testingDataDistance,
            testingDataisDone,
            testingDataComment
        )
        const actual = workout.toString()

        // assert
        expect(actual).toBe(expected)
    })
})