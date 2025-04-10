describe("Question Seven", function() {
    describe("Hospital.getBillablePatients function", function() {
        let theHospital
        beforeEach(
            function() {
                theHospital = Controller.setup()
            }
        )

        it("should return a string", function() {
            expect(typeof theHospital.getBillablePatients()).toBe("string")
        })

        it("should NOT be hard coded", function() {
            theHospital = new Hospital()
            expect(theHospital.getBillablePatients()).toBe("")
        })

        it("should correctly report details of patient who has not paid the doctor’s fees", function() {
            expect(theHospital.getBillablePatients()).toBe("11 - Xu Jian.\nKnightly Jude\n12 - Kumar Santosh.\nChen Liang\nKoirala Kimi\n13 - John Emily.\n")
        })
    })
})