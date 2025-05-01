import Workout from "./workout.js"
import Session from "./session.js"
import WorkoutPropertiesValidator from "./utils.js"

class Manager{
    constructor(){
        this.allSessions = []
        this.allWorkouts = []
    }
// ======= Methods for Workout ========
    addWorkout = (newId, newName, newType = 'cardio', newDistance = 0,newisDone = false, newComment) => {
        new WorkoutPropertiesValidator(newId,newId,newComment)
        let workout = new Workout(newId, newName, newType, newDistance,newisDone, newComment)
        this.allWorkouts.push(workout)
    }
    getAllWorkouts = () => {
        return this.allWorkouts.map(workout => `Workout Id: ${workout.id} Workout name: ${workout.name} Workout type: ${workout.type} Workout Distance: ${workout.distance} Done: ${workout.isDone} Comment: ${workout.comment}` ).join('/n')
    }
    //Need to test
    findWorkout = (id) => this.allWorkouts.find(workout => workout.id === id)

    filterWorkoutInSession = (sessionId, predicate) => {
        const session = this.findSession(sessionId);
        if (!session) console.log("Session not found");
      
        return session.workout.filter(predicate);
      };

    sortWorkoutsInSession = (sessionId, key = 'id', order = 'asc') => {
        const session = this.findSession(sessionId)
        if (!session) console.log("Session doesn't exist")
    
        const isDesc = order === 'desc'
        session.workout.sort((a, b) =>
          isDesc ? (b[key] > a[key]) - (b[key] < a[key]) : (a[key] > b[key]) - (a[key] < b[key])
        )
      }
    
    editWorkoutInSession = (sessionId, workoutId, updates = {}) => {
        const session = this.findSession(sessionId)
        if (!session) console.log("Session not found")
        
        const workout = session.workout.find(workout => workout.id === workoutId)
        if (!workout) console.log("Workout not found in session")
        
        Object.assign(workout, updates)
    }

    deleteWorkoutInSession = (sessionId, workoutId) => {
        const session = this.findSession(sessionId);
        if (!session) console.log("Session not found");
        
        session.workout = session.workout.filter(workout => workout.id !== workoutId);
    };

    

// ======= Maethods for Sessions =======

    addSession = (newId, newName,newCommment) => {
        let session = new Session(newId, newName, newCommment)
        this.allSessions.push(session)
    }
    getAllSession = () => {
        return this.allSessions.map(session => `Session ID: ${session.id} Session Name: ${session.name} Comment: ${session.comment} Complete: ${session.isComplete}`).join('/n')
    }
    //Need to test
    findSession = (id) => this.allSessions.find(session => session.id === id)

    setWorkout = (sessionId,workoutId) =>{
        let session = this.findSession(sessionId)
        let workout = this.findWorkout(workoutId)
        if (!session){
            console.log("Session Doesn't exist")
            return
        }
        if (!workout){
            console.log("Session Doesn't exist")
            return
        }
        session.setWorkout(workout)
    }

    filterSession = (key) => {
        return this.allSessions.filter(key);
      };      

    sortSessions = (key = 'id', order = 'asc') => {
        const isDesc = order === 'desc'
        this.allSessions.sort((a, b) =>
          isDesc ? (b[key] > a[key]) - (b[key] < a[key]) : (a[key] > b[key]) - (a[key] < b[key])
        )
      }

    editSession = (id, updates = {}) => {
        const session = this.findSession(id)
        if (!session) console.log("Session doesn't exist")
        Object.assign(session, updates)
    }

    deleteSession = (sessionId) => {
        this.allSessions = this.allSessions.filter(session => session.id !== sessionId);
    };
    



}

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

const manager = new Manager()
manager.addWorkout(idTestingData, 
    nameTestingData, 
    typeTestingData, 
    distanceTestingData,
    false, 
    commentTestingData)

manager.addWorkout(idTestingData2, 
    nameTestingData2, 
    typeTestingData2, 
    distanceTestingData2,
    false, 
    commentTestingData2)

manager.addSession(1,'Initial Training','Comment Goes Here')

manager.addSession(2,'Warmup','Comment Goes Here')

manager.setWorkout(1,1)
manager.setWorkout(1,2)

//console.log(manager.allSessions)

manager.sortSessions('name', 'asc')
manager.sortWorkoutsInSession(1, 'distance', 'desc')

manager.editSession(1, { 
    name: "Updated Training", 
    comment: "New notes" 
})

manager.editWorkoutInSession(1, 2, {
    name: "Updated Bike Workout",
    distance: 5,
    isDone: true,
})

console.log(manager.allSessions)

export default Manager