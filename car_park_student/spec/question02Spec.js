describe("Question Two", function () {
    describe("adding the three Zones", function () {
        let theCarPark
        beforeEach(function () {
            // let theController = new Controller();
            theCarPark = Controller.setup()
        })

        it("should have added 3 Zones", function () {
            expect(theCarPark.allMyZones.length).toBe(3)
        })

        it("should have correctly set details for each Zone", function () {
            let aZone
            aZone = theCarPark.allMyZones[0]
            expect(aZone).toBeDefined()
            expect(aZone.id).toBe(3)
            expect(aZone.location).toBe("Cashel Mall")

            aZone = theCarPark.allMyZones[1]
            expect(aZone).toBeDefined()
            expect(aZone.id).toBe(1)
            expect(aZone.location).toBe("Central City")

            aZone = theCarPark.allMyZones[2]
            expect(aZone).toBeDefined()
            expect(aZone.id).toBe(2)
            expect(aZone.location).toBe("Madras Street")
        })
    })
})
