/* eslint linebreak-style: ["error", "unix"]*/

describe("Box of Toys", function() {
    let theBox

    beforeEach(() => {
        theBox = new Box()
    })

    describe("An empty box", function() {
        it("should have a .toyCount property", function() {
            expect(Object.prototype.hasOwnProperty.call(theBox, "toyCount")).toBeTruthy()
        })

        it("should have a toy count of 0", function() {
            const count = theBox.toyCount
            expect(count).toBe(0)
        })

        it("should have an .allMyToys property", function() {
            expect(Object.prototype.hasOwnProperty.call(theBox, "allMyToys")).toBeTruthy()
        })

        it("should have an array for the .allMyToys ", function() {
            expect(Array.isArray(theBox.allMyToys)).toBeTruthy()
        })

        it("should have nothing in the allMyToys array", function() {
            const arraySize = theBox.allMyToys.length
            expect(arraySize).toBe(0)
        })

        it("should return a string saying it has 0 toys", function() {
            const output = theBox.toString()
            expect(output).toBe("This toybox has 0 toys" + View.newline())
        })
    })

    describe("a box with 1 toy in it", function() {
        beforeEach(function() {
            theBox.addToy("Aardvark", "Brown", 11.11)
        })

        it("should have a toy count of 1", function() {
            const count = theBox.toyCount
            expect(count).toBe(1)
        })

        it("should have one entry in the allMyToys array", function() {
            const arraySize = theBox.allMyToys.length
            expect(arraySize).toBe(1)
        })

        it("should have a Toy in the allMyToys array", function() {
            const aToy = theBox.allMyToys[0]
            expect(aToy instanceof Toy).toBeTruthy()
        })

        describe("The Brown Arrdvark Toy worth 11.11 in the toy box", function() {
            let aToy

            beforeEach(function() {
                aToy = theBox.allMyToys[0]
            })

            it("should have a .name property", function() {
                expect(Object.prototype.hasOwnProperty.call(aToy, "name")).toBeTruthy()
            })

            it("should have a .color property", function() {
                expect(Object.prototype.hasOwnProperty.call(aToy, "colour")).toBeTruthy()
            })

            it("should have a .cost property", function() {
                expect(Object.prototype.hasOwnProperty.call(aToy, "cost")).toBeTruthy()
            })

            it("should have a .name of \"Aardvark\"", function() {
                let theValue = aToy.name
                expect(theValue).toBe("Aardvark")
            })

            it("should have a .color of \"Brown\"", function() {
                let theValue = aToy.colour
                expect(theValue).toBe("Brown")
            })

            it("should have a .cost of 11.11", function() {
                let theValue = aToy.cost
                expect(theValue).toBe(11.11)
            })

            it("should return the correct String", function() {
                let theWords = aToy.toString()
                expect(theWords).toBe("Aardvark ( Brown ) @ $11.11")
            })
        })
    })

    describe("a box with 3 toys in it", function() {
        beforeEach(function() {
            theBox.addToy("Dolly", "Pink", 33.33)
            theBox.addToy("Aardvark", "Brown", 11.11)
            theBox.addToy("Bat", "Wooden", 22.22)
        })

        it("should have a toy count of 3", function() {
            const count = theBox.toyCount
            expect(count).toBe(3)
        })

        it("should have three entries in the allMyToys array", function() {
            const arraySize = theBox.allMyToys.length
            expect(arraySize).toBe(3)
        })

        it("should return the right string", function() {
            const output = theBox.toString()
            expect(output).toBe("This toybox has 3 toys<br>&nbsp;&nbsp;&nbsp;&nbsp;Aardvark ( Brown ) @ $11.11<br>&nbsp;&nbsp;&nbsp;&nbsp;Bat ( Wooden ) @ $22.22<br>&nbsp;&nbsp;&nbsp;&nbsp;Dolly ( Pink ) @ $33.33<br>")
        })
    })
})