/* 
<<MODEL>>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

Class declaration vs class expression

Unlike function declarations, class declarations are not hoisted, which means 
    that you cannot use a class before it is declared. 
*/
class Toybox {
    toyCount = 0
    allMyToys = []

    // replace with class field declaration
    /*
    constructor() {
        this.toyCount = 0
        this.allMyToys = []
    } */

    addToy(newName, newColour, newCost) {
        ToyValidator.validateToyProperties(newName, newColour, newCost)

        const newToy = new Toy(newName, newColour, newCost)
        this.allMyToys.push(newToy)
        this.toyCount += 1
    }

    sortToys() {
        // Using localeCompare (case-insensitive) simpler
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
        this.allMyToys.sort((a, b) => a.name.localeCompare(b.name))
    }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
    toString() {
        // let result, aToy
        let result // Why doesn't variable aToy need to be declared?

        this.sortToys()

        result = String.raw`This toybox has ${this.toyCount} toys:\n`
        // Using arrow function
        /* 
            String.raw: This is a tagged template literal function in JavaScript. It is 
            used to create a string without processing escape sequences. In this context, 
            it ensures that the backslashes (\t and \n) are treated as literal characters 
            rather than escape sequences.
        */
        this.allMyToys.forEach((aToy) => {
            result += String.raw`\t${aToy}\n`
        })

        return result
    }
}
