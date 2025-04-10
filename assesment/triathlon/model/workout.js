class Workout{
    id
    name
    type
    distance
    isDone
    comment

    constructor(id,name,type,distance,isDone,comment){
        this.id = id
        this.name = name
        this.type = type
        this.distance = distance
        this.isDone = isDone
        this.comment = comment
    }
    toString(){
        return `${this.id} ${this.name} ${this.type} ${this.distance} ${this.isDone} ${this.comment}`
    }
}
// const workout = new Workout(1,'test','testt',2,true,'test3')
// console.log(workout.toString())

export default Workout