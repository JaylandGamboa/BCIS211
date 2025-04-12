class Workout{
    id
    name
    type
    distance
    isDone = false
    comment  = 'Comment Goes Here'

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

export default Workout