
class ToyValidator {
    static validateToyProperties(name, colour, cost) {
        if (typeof name !== 'string' || typeof colour !== 'string') {
            throw new Error('Name and colour must be strings')
        }
        
        if (typeof cost !== 'number' || cost < 0) {
            throw new Error('Cost must be a non-negative number')
        }
    }
} 