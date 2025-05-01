class Session{
    id
    name
    comment
    workout
    constructor(id,name,comment){
        this.id = id
        this.name = name
        this.comment = comment
        this.workout = []
        this.isComplete = false
    }
    //to be test
    setWorkout = (workout) => {
        this.workout.push(workout)
    }
    toString = () => {
        return `Session ID: ${this.id} Session Name: ${this.name} Comment: ${this.comment} Complete: ${this.isComplete}`
    }
}

export default Session