class Patient {
    id
    lastName
    firstName
    feesOwing
    myDoctor

    constructor(newId, newLastName, newFirstName, newFeesOwing, theDoctor) {
        this.id = newId
        this.lastName = newLastName
        this.firstName = newFirstName
        this.feesOwing = newFeesOwing
        this.myDoctor = theDoctor
    }

    getPaidStatus() {
        return this.feesOwing === 0
    }

    toString() {
        return `${this.lastName} ${this.firstName}`
    }
}