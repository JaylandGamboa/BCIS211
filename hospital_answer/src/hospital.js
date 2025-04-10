class Hospital {
    allMyDoctors = []

    addDoctor(newId, newFirstName, newLastName, newOffice, newFees) {
        let newDoctor = new Doctor(newId, newFirstName, newLastName, newOffice, newFees, this)
        this.allMyDoctors.push(newDoctor)
    }

    findDoctor(targetOwnerId) {
        return this.allMyDoctors.find(doctor => doctor.id === targetOwnerId) || null
    }   

    sortDoctors() {
        this.allMyDoctors.sort((a, b) => { return a.id - b.id })
    }

    getDoctors() {
        this.sortDoctors() // Sort doctors if necessary

        return this.allMyDoctors
            .map(doctor => `${doctor}\n`) // Convert each doctor to a string
            .join("") // Join the doctor strings with a newline character
    }

    getBillablePatients() {
        this.sortDoctors()
        
        let out = ""
        this.allMyDoctors.forEach((aDoctor) => {
            out = `${out}${aDoctor}\n`
            if (aDoctor.hasPaidStatus()) {
                aDoctor.sortPatients()
                out = `${out}${aDoctor.getPaidStatus()}`
            }
        })
        return out
    }
}