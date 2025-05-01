import Manager from "../model/manager"

describe("Testing following methods", () => {
    let manager

    const idTestingData = 1
    const nameTestingData = 'jogging'
    const typeTestingData = 'Running'
    const distanceTestingData = 12
    const commentTestingData = 'Comment Goes Here'
    
    const idTestingData2 = 2
    const nameTestingData2 = 'Bike'
    const typeTestingData2 = 'Cardio'
    const distanceTestingData2 = 3
    const commentTestingData2 = 'Comment Goes Here'
    
    
    const sessionIDTestData1 = 1
    const sessionName1 = 'Initial Training'
    const sessionComment1 = 'Comment Goes Here'
    
    const sessionIDTestData2 = 2
    const sessionName2 = 'Session 2 - Warmup'
    const sessionComment2 = 'Comment Goes Here'

    const resultSession = `Session ID: 1 Session Name: Initial Training Comment: Comment Goes Here Complete: false`
    const resultWorkout = `Workout Id: 1 Workout name: jogging Workout type: Running Workout Distance: 12 Done: false Comment: Comment Goes Here`
    //ignore logs
    beforeEach(() => {
        manager = new Manager()
        jest.spyOn(console, 'log').mockImplementation(() => {}) 
      })
      

    test("addWorkout - Pushing data to array", () => {

    // act
    manager = new Manager()
    manager.addWorkout(idTestingData, 
        nameTestingData, 
        typeTestingData, 
        distanceTestingData,
        false
        , 
        commentTestingData)
        let actual = manager.getAllWorkouts()
    // assert
        expect(actual).toBe(resultWorkout)
    })
    
    test('addWorkout uses default value for isDone when not provided', () => {

        manager = new Manager();
        manager.addWorkout(2, 'swimming', 'Cardio', 30, undefined, 'Pool session');
        const actual = manager.getAllWorkouts();

        expect(actual).toContain('Done: false');
      });

    test('Test for pushing data',() =>{
    //arrange
        
        manager.addSession(sessionIDTestData1,sessionName1,sessionComment1)
        let actual = manager.getAllSession()
        
    expect(actual).toBe(resultSession);
    })

    test('setWorkout - data does not exist', () => {
        manager = new Manager();
        const actual = jest.spyOn(console, 'log').mockImplementation(() => {});
        manager.setWorkout(99, 1); 
        expect(actual).toHaveBeenCalledWith("Session Doesn't exist");
        actual.mockRestore();
      });

      test('setWorkout - data does not exist', () => {
        manager = new Manager();
        manager.addSession(1, 'Test Session', 'Test comment');
        const actual = jest.spyOn(console, 'log').mockImplementation(() => {});
        manager.setWorkout(1, 999); 
        expect(actual).toHaveBeenCalledWith("Session Doesn't exist");
        actual.mockRestore();
      });

      test('sortSessions - sorting sessions asc', () => {
        manager.addSession(3, 'Zumba', 'Zumba session');
        manager.addSession(1, 'Yoga', 'Yoga session');
        manager.addSession(2, 'Aerobics', 'Aerobics session');
        manager.sortSessions('name', 'asc');
        const sorted = manager.allSessions.map(session => session.name);
        expect(sorted).toEqual(['Aerobics', 'Yoga', 'Zumba']);
      });
    
      test('sortSessions - sorting sessions desc', () => {
        manager.addSession(3, 'Zumba', 'Zumba session');
        manager.addSession(1, 'Yoga', 'Yoga session');
        manager.addSession(2, 'Aerobics', 'Aerobics session');
        manager.sortSessions('id', 'desc');
        const sorted = manager.allSessions.map(s => s.id);
        expect(sorted).toEqual([3, 2, 1]);
      });

      
})
