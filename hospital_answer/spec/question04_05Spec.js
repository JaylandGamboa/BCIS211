describe("Question Four and Question Five", function() {
    describe("Patient", function() {
        let aPatient
        
        beforeEach(function() {
            aPatient = new Patient()
        })

        it("should have a .myDoctor reference", function() {
            expect(Object.prototype.hasOwnProperty.call(aPatient, "myDoctor")).toBeTruthy()
        })

        it("should have an .id property", function() {
            expect(Object.prototype.hasOwnProperty.call(aPatient, "id")).toBeTruthy()
        })

        it("should have a .lastName property", function() {
            expect(Object.prototype.hasOwnProperty.call(aPatient, "lastName")).toBeTruthy()
        })

        it("should have a .firstName property", function() {
            expect(Object.prototype.hasOwnProperty.call(aPatient, "firstName")).toBeTruthy()
        })

        it("should have a .feesOwing property", function() {
            expect(Object.prototype.hasOwnProperty.call(aPatient, "feesOwing")).toBeTruthy()
        })
    })

    describe("write a Doctor.addPatient function to add the Patients", function() {
        let theHospital
        beforeEach(function() {
            theHospital = Controller.setup()
        })

        it("Doctor 13 should have 1 Patient", function() {
            let theDoctor = theHospital.findDoctor("13")
            expect(theDoctor.allMyPatients.length).toBe(1)
        })

        it("Doctor 11 should have 2 Patients", function() {
            let theDoctor = theHospital.findDoctor("11")
            expect(theDoctor.allMyPatients.length).toBe(2)
        })

        it("Doctor 12 should have 2 Patients", function() {
            let theDoctor = theHospital.findDoctor("12")
            expect(theDoctor.allMyPatients.length).toBe(2)
        })

        it("should correctly set Patient details", function() {
            /*
            ID    Last Name   First Name  Fees Owing    Doctor ID
            200   Fisher      Shelley        0            11
            400   Koirala      Kimi         25            12
            300   Chen         Liang        40            12
            500   Ahmed        Riyaz         0            13
            100   Knightly     Jude         30            11
            */
           
            let aPatient, theDoctor
            theDoctor = theHospital.findDoctor("13")
            aPatient = theDoctor.sortPatients()
            // 500   Ahmed       Riyaz       0        13
            aPatient = theDoctor.allMyPatients[0]
            expect(aPatient.myDoctor).toEqual(theDoctor)
            expect(aPatient.id).toBe("500")
            expect(aPatient.lastName).toBe("Ahmed")
            expect(aPatient.firstName).toBe("Riyaz")
            expect(aPatient.feesOwing).toBe(0)

            theDoctor = theHospital.findDoctor("11")
            aPatient = theDoctor.sortPatients()
            // 100   Knightly    Jude        30       11
            aPatient = theDoctor.allMyPatients[0]
            expect(aPatient.myDoctor).toEqual(theDoctor)
            expect(aPatient.id).toBe("100")
            expect(aPatient.lastName).toBe("Knightly")
            expect(aPatient.firstName).toBe("Jude")
            expect(aPatient.feesOwing).toBe(30)

            // 200   Fisher      Shelley    0       11
            aPatient = theDoctor.allMyPatients[1]
            expect(aPatient.myDoctor).toEqual(theDoctor)
            expect(aPatient.id).toBe("200")
            expect(aPatient.lastName).toBe("Fisher")
            expect(aPatient.firstName).toBe("Shelley")
            expect(aPatient.feesOwing).toBe(0)

            theDoctor = theHospital.findDoctor("12")
            aPatient = theDoctor.sortPatients()
            // 300    Chen       Liang        4       12
            aPatient = theDoctor.allMyPatients[0]
            expect(aPatient.myDoctor).toEqual(theDoctor)
            expect(aPatient.id).toBe("300")
            expect(aPatient.lastName).toBe("Chen")
            expect(aPatient.firstName).toBe("Liang")
            expect(aPatient.feesOwing).toBe(40)

            // 400   Koirala    Kimi      25      12
            aPatient = theDoctor.allMyPatients[1]
            expect(aPatient.myDoctor).toEqual(theDoctor)
            expect(aPatient.id).toBe("400")
            expect(aPatient.lastName).toBe("Koirala")
            expect(aPatient.firstName).toBe("Kimi")
            expect(aPatient.feesOwing).toBe(25)
        })
    })
})