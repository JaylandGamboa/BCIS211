describe("Question Three", function() {
    describe("Hospital.getDoctors function", function() {
        let theHospital
        beforeEach(function() {
            theHospital = Controller.setup()
        })

        it("should return a string", function() {
            expect(typeof theHospital.getDoctors()).toBe("string")
        })

        it("should NOT be hard coded", function() {
            theHospital = new Hospital()
            expect(theHospital.getDoctors()).toBe("")
        })

        it("should return correctly formatted data in the right order", function() {
            expect(theHospital.getDoctors()).toBe("11 - Xu Jian.\n12 - Kumar Santosh.\n13 - John Emily.\n")
        })
    })
})