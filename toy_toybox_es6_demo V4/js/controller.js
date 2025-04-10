/* global Toybox */
// <<CONTROLLER>>
class Controller {
    static go(view) {
        // Move magic strings and values to constants
        const DEFAULT_TOYS = [
            { name: "Teddy", color: "Brown", cost: 12.34 },
            { name: "Dolly", color: "Pink", cost: 21.43 },
            { name: "Bat", color: "Wooden", cost: 34.56 }
        ]

        const toybox = new Toybox()
        DEFAULT_TOYS.forEach(toy => toybox.addToy(toy.name, toy.color, toy.cost))
        view.clear()

        /*
        create the dependency between View and Model
        View.out(toybox)
    
        Alternative way:
        force the type converting here in Controller to remove the dependency
        */
        const OUTPUT_INHTML = `${toybox}`.replaceAll('\\n', view.newline()).replaceAll('\\t', view.tab())
        view.out(OUTPUT_INHTML)
    }
}