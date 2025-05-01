import WorkoutPropertiesValidator from "../model/utils"

describe("validateWorkoutProperties", () => {
    test("does not throw an error for valid input", () => {
        // arrange
        const id = 1
        const name = "Run"
        const comment = "Morning session"

        // act & assert
        expect(() => {
            WorkoutPropertiesValidator.validateWorkoutProperties(id, name, comment)
        }).not.toThrow()
    })

    test("throws error for invalid name", () => {
        // arrange
        const id = 1
        const name = 123 // invalid
        const comment = "Morning"

        // act & assert
        expect(() => {
            WorkoutPropertiesValidator.validateWorkoutProperties(id, name, comment)
        }).toThrow("Name and colour must be strings")
    })

    test("throws error for invalid id", () => {
        // arrange
        const id = "a" // invalid
        const name = "Run"
        const comment = "Morning"

        // act & assert
        expect(() => {
            WorkoutPropertiesValidator.validateWorkoutProperties(id, name, comment)
        }).toThrow("Cost must be a non-negative number")
    })
})