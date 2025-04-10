describe("Question Seven", function () {
    describe("CarPark.getTemps function", function () {
        let theCarPark

        beforeEach(function () {
            theCarPark = Controller.setup()
        })

        it("should return a string", function () {
            expect(typeof theCarPark.getTemps()).toBe("string")
        })

        it("should NOT be hard coded", function () {
            theCarPark = new CarPark()
            expect(theCarPark.getTemps()).toBe("")
        })

        it("should correctly report details of temp Clients in order", function () {
            expect(theCarPark.getTemps()).toBe(
                "Maya Thorne\nAnna Kumar\nJillian Fleming\n"
            )
        })
    })
})
