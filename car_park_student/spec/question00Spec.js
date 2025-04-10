describe("Basic Check For Original Source Code", function () {
    describe("CarPark", function () {
        let theCarPark
        beforeEach(function () {
            theCarPark = new CarPark()
        })

        it("should have an allMyZones property", function () {
            expect(
                Object.prototype.hasOwnProperty.call(theCarPark, "allMyZones")
            ).toBeTruthy()
        })

        describe("the allMyZones property", function () {
            it("should reference an array", function () {
                expect(Array.isArray(theCarPark.allMyZones)).toBeTruthy()
            })
        })

        it("should have an addZone function", function () {
            expect(typeof theCarPark.addZone).toBe("function")
        })
    })

    describe("Zone", function () {
        let zone = new Zone()

        it("should have an .id property", function () {
            expect(
                Object.prototype.hasOwnProperty.call(zone, "id")
            ).toBeTruthy()
        })

        it("should have a .location property", function () {
            expect(
                Object.prototype.hasOwnProperty.call(zone, "location")
            ).toBeTruthy()
        })
        describe("the allMyClients property", function () {
            it("should have a .allMyClients reference", function () {
                expect(
                    Object.prototype.hasOwnProperty.call(zone, "allMyClients")
                ).toBeTruthy()
            })
            it("should reference an array", function () {
                expect(Array.isArray(zone.allMyClients)).toBeTruthy()
            })
        })
    })
})
