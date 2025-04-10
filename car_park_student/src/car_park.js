class CarPark {
    constructor() {
        this.allMyZones = []
    }

    addZone(newId, newLocation) {
        let newZone = new Zone(newId, newLocation)
        this.allMyZones.push(newZone)
    }

    findZone(targetId) {
        let foundZone = null
        for (let aZone of this.allMyZones) {
            if (aZone.id === targetId) {
                foundZone = aZone
            }
        }
        return foundZone
    }

    sortZones() {
        this.allMyZones.sort((a, b) => a.id - b.id)
    }
}
