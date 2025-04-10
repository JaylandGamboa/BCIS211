describe("Question Six", function() {
    describe("Patient.getPaidStatus function", function() {
        let aPatient
        beforeEach(function() {
            aPatient = new Patient()
        })

        it("should exist", function() {
            expect(aPatient.getPaidStatus).toBeDefined()
        })

        it("should return a boolean", function() {
            expect(typeof aPatient.getPaidStatus()).toBe("boolean")
        })

        it("should return true if the FeesOwing is equal to zero.", function() {
            aPatient = new Patient(null, null, null, 0)
            expect(aPatient.getPaidStatus()).toBe(true)
        })

        it("should return true if the FeesOwing is more than zero.", function() {
            aPatient = new Patient(null, null, null, 100)
            expect(aPatient.getPaidStatus()).toBe(false)
        })
    })
})