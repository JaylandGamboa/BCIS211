/* 
<<MODEL>>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

Class declaration vs class expression

Unlike function declarations, class declarations are not hoisted, which means 
    that you cannot use a class before it is declared. 

// Using a class expression to create a conditional class
    const Toy = allowExtras ? class {
        constructor(name) {
            this.name = name
            this.hasExtras = true
        }
    } : class {
        constructor(name) {
            this.name = name
            this.hasExtras = false
        }
    }
*/

// Toy class declaration
/**
 * Represents a toy with name, colour, and cost.
 * @class
 */
class Toy {
    //  class field declaration
    name       // A class field without default value defaults to undefined.
    colour
    cost

    /*
        The constructor method is a special method for creating and 
        initializing an object created with a class. There can only be one 
        special method with the name "constructor" in a class — a SyntaxError 
        is thrown if the class contains more than one occurrence of a 
        constructor method.
    */
    /**
     * Creates a new Toy instance.
     * @param {string} newName - The name of the toy
     * @param {string} newColour - The colour of the toy
     * @param {number} newCost - The cost of the toy
     */
    constructor(newName = "unnamed", newColour = "white", newCost = 0.0) {
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Default_parameters

        /*
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
        if your instance properties' values do not depend on the constructor's 
        arguments, you can define them as class fields.
        */

        ToyValidator.validateToyProperties(newName, newColour, newCost)

        this.name = newName
        this.colour = newColour
        this.cost = newCost
    }

    toString() {
        /*
        The let declaration syntax is the same as the syntax for var. 
        You can basically replace var with let to declare a variable, 
        but limit the variable's scope to only the current code block.
        */
        let result

        /*
        result =  this.name + " (" + this.colour + ') @ $' +  this.cost.toFixed(2)
        Using Template literals with backtick (`) characters is better
        */
        result = `${this.name} ( ${this.colour} ) @ $${this.cost.toFixed(2)}`

        return result
    }
}