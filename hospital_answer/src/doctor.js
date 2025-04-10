class Doctor {
    id
    firstName
    lastName
    office
    fees
    myHospital
    allMyPatients

    constructor(newId, newLastName, newFirstName, newOffice, newFees, theHospital) {
        this.id = newId
        this.firstName = newFirstName
        this.lastName = newLastName
        this.office = newOffice
        this.fees = newFees
        this.myHospital = theHospital
        this.allMyPatients = []
    }

    sortPatients() {
        this.allMyPatients.sort((a, b) => {
            return a.id - b.id
        })
    }

    toString() {
        return `${this.id} - ${this.lastName} ${this.firstName}.`
    }

    addPatient(newId, newLastName, newFirstName, newFeesOwing) {
        let newPatient = new Patient(newId, newLastName, newFirstName, newFeesOwing, this)
        this.allMyPatients.push(newPatient)
    }

    hasPaidStatus() {
        return this.allMyPatients.some(patient => patient.getPaidStatus() === false)
    }

    getPaidStatus() {
        return this.allMyPatients
            .filter(patient => patient.getPaidStatus() === false) // Filter patients with unpaid status
            .map(patient => `${patient}\n`) // Convert each patient to string
            .join("") // Join all patient strings with newline
    }
}