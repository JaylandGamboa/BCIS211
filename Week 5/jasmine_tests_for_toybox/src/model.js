/* 
<<MODEL>>
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes?token=xul%3Amoodle%3A1469669953000%3A0ejB6H4qu38vU0GsI7N5Ew%3D%3D
Class declaration
class declarations are hoisted. 
It means that declare class first then access it. 
*/
class Toy {
    /*
    The constructor method is a special method for creating and initializing an object created with a class.
    There can only be one special method with the name "constructor" in a class. 
    A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.
    */
    constructor(newName = "unnamed", newColour = "white", newCost = 0.0) {
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Default_parameters
        this.name = newName
        this.colour = newColour
        this.cost = newCost
    }

    toString() {
        /*
        The let declaration syntax is the same as the syntax for var. 
        You can basically replace var with let to declare a variable, but limit the variable’s scope to only the current code block 
        (there are a few other subtle differences discussed a bit later, as well).
        */
        let result

        /*
        result =  this.name + " (" + this.colour + ') @ $' +  this.cost.toFixed(2)
        Using Template literals is better
        */

        result = `${this.name} ( ${this.colour} ) @ $${this.cost.toFixed(2)}`

        return result
    }
}


class Box {
    constructor() {
        this.toyCount = 0
        this.allMyToys = []
    }

    addToy(newName, newColour, newCost) {
        const newToy = new Toy(
            newName,
            newColour,
            newCost
        )

        this.allMyToys.push(newToy)
        this.toyCount += 1
    }

    sortToys() {
        this.allMyToys.sort(

            (a, b) => {
                if (a.name < b.name) {
                    return -1
                }
                if (a.name > b.name) {
                    return 1
                }

                // A must be equal to b
                return 0
            }

        )
    }

    toString() {
        // let result, aToy
        let result // Why doesn't variable aToy need to be declared?

        this.sortToys()
        // result = 'This toybox has ' + this.toyCount + ' toys:' + View.newline()
        result = `This toybox has ${this.toyCount} toys${View.newline()}`

        /*
        for (aToy of this.allMyToys) {
            result += View.tab() + aToy + View.newline()
        }
        */

        // Using arrow function
        this.allMyToys.forEach((aToy) => {
            result += View.tab() + aToy + View.newline()
        })

        return result
    }
}