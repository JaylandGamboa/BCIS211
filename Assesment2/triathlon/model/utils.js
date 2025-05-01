
class WorkoutPropertiesValidator {
    static validateWorkoutProperties(id, name, comment) {
        if (typeof name !== 'string' || typeof comment !== 'string') {
            throw new Error('Name and colour must be strings')
        }
        
        if (typeof id !== 'number' || cost < 0) {
            throw new Error('Cost must be a non-negative number')
        }
    }
} 

export default WorkoutPropertiesValidator