describe("Basic Check For Original Source Code", function() {
    describe("Hospital", function() {
        let theHospital
        beforeEach(function() {
            theHospital = new Hospital()
        })

        describe("the allMyDoctors property", function() {
            it("should have an .allMyDoctors property", function() {
                expect(Object.prototype.hasOwnProperty.call(theHospital, "allMyDoctors")).toBeTruthy()
            })
            it("should reference an array", function() {
                expect(Array.isArray(theHospital.allMyDoctors)).toBeTruthy()
            })
        })

        it("should have an .addDoctor function", function() {
            expect(typeof theHospital.addDoctor).toBe("function")
        })

        it("should have a .findDoctor function", function() {
            expect(typeof theHospital.findDoctor).toBe("function")
        })

        it("should have a .sortDoctors function", function() {
            expect(typeof theHospital.sortDoctors).toBe("function")
        })
    })

    describe("Doctor", function() {
        let aDoctor
        
        beforeEach(function() {
            aDoctor = new Doctor()            
        })

        it("should have an .id property", function() {
            expect(Object.prototype.hasOwnProperty.call(aDoctor, "id")).toBeTruthy()            
        })

        it("should have a .firstName property", function() {
            expect(Object.prototype.hasOwnProperty.call(aDoctor, "firstName")).toBeTruthy()            
        })

        it("should have a .lastName property", function() {
            expect(Object.prototype.hasOwnProperty.call(aDoctor, "lastName")).toBeTruthy()            
        })

        it("should have an .office property", function() {
            expect(Object.prototype.hasOwnProperty.call(aDoctor, "office")).toBeTruthy()            
        })

        it("should have a .fees property", function() {
            expect(Object.prototype.hasOwnProperty.call(aDoctor, "fees")).toBeTruthy()            
        })

        it("should have a .myHospital reference", function() {
            expect(Object.prototype.hasOwnProperty.call(aDoctor, "myHospital")).toBeTruthy()            
        })

        describe("the allMyPatients property", function() {
            it("should have an .allMyPatients reference", function() {
                expect(Object.prototype.hasOwnProperty.call(aDoctor, "allMyPatients")).toBeTruthy()                
            })

            it("should reference an array", function() {
                expect(Array.isArray(aDoctor.allMyPatients)).toBeTruthy()                
            })
        })

        it("should have a .sortPatients function", function() {
            expect(typeof aDoctor.sortPatients).toBe("function")            
        })
    })
})