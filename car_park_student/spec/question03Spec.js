describe("Question Three", function () {
    describe("CarPark.getZones function", function () {
        let theCarPark

        beforeEach(function () {
            theCarPark = Controller.setup()
        })

        it("should return a string", function () {
            expect(typeof theCarPark.getZones()).toBe("string")
        })

        it("should NOT be hard coded", function () {
            theCarPark = new CarPark()
            expect(theCarPark.getZones()).toBe("")
        })

        it("should return correctly formatted data in the right order", function () {
            expect(theCarPark.getZones()).toBe(
                "1. - Central City.\n2. - Madras Street.\n3. - Cashel Mall.\n"
            )
        })
    })
})
