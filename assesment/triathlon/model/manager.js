import Workout from "./workout.js"

class Manager{
    constructor(){
        this.allSessions = []
        this.allWorkouts = []
    }

    addWorkout = (newId, newName, newType, newDistance,newisDone = false, newComment) => {
    let workout = new Workout(newId, newName, newType, newDistance,newisDone, newComment)
        this.allWorkouts.push(workout)
    }
    getAllWorkouts = () => {
        return this.allWorkouts.map(workout => `Workout Id: ${workout.id} Workout name: ${workout.name} Workout type: ${workout.type} Workout Distance: ${workout.distance} Done: ${workout.isDone} Comment: ${workout.comment}` ).join('/n')
    }
}

// const idTestingData = 1
// const nameTestingData = 'jogging'
// const typeTestingData = 'Running'
// const distanceTestingData = 12
// const commentTestingData = 'Comment Goes Here'

// const manager = new Manager()
// manager.addWorkout(idTestingData, 
//     nameTestingData, 
//     typeTestingData, 
//     distanceTestingData,
//     false, 
//     commentTestingData)
// console.log(manager.getAllWorkouts())


export default Manager