import Manager from "../model/manager"

describe("Getting workout add and get data", () => {
    test("pushing and retriving workout array", () => {
        // expect(sum(1, 2)).toBe(3)

        // arrange
        const idTestingData = 1
        const nameTestingData = 'jogging'
        const typeTestingData = 'Running'
        const distanceTestingData = 12
        const commentTestingData = 'Comment Goes Here'

        const expected = `Workout Id: 1 Workout name: jogging Workout type: Running Workout Distance: 12 Done: false Comment: Comment Goes Here`

        // act
        const manager = new Manager()
        manager.addWorkout(idTestingData, 
            nameTestingData, 
            typeTestingData, 
            distanceTestingData,
            false
            , 
            commentTestingData)
            let actual = manager.getAllWorkouts()
        // assert
        expect(actual).toBe(expected)
    })
    
    test('addWorkout uses default value for isDone when not provided', () => {
        const manager = new Manager();
        manager.addWorkout(2, 'swimming', 'Cardio', 30, undefined, 'Pool session');
      
        const result = manager.getAllWorkouts();
        expect(result).toContain('Done: false');
      });
})
