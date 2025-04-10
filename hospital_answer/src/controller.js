class Controller {
    static setup() {
        /*
        ID    Last Name    First Name   Office  Fees
        11     Xu            Jian       N400    $50
        13     John          Emily      W7      $25
        12     Kumar         Santosh    A22      $40
        */
        const DOCTORS = [
            { id: "11", lastName: "Xu", firstName: "Jian", office: "N400", fees: 50 },
            { id: "13", lastName: "John", firstName: "Emily", office: "W7", fees: 25 },
            { id: "12", lastName: "Kumar", firstName: "Santosh", office: "A22", fees: 40 }
        ]

        /*
        ID   Last Name      First Name  Fees Owing    Doctor ID
        200  Fisher          Shelleyu     0            11
        400  Koirala          Kimi       25            12
        300  Chen             Liang      40            12
        500  Ahmed            Riyaz       0            13
        100  Knightly         Jude       30            11
        */
        const PATIENTS = [
            { id: "200", lastName: "Fisher", firstName: "Shelley", feesOwing: 0, doctorId: "11" },
            { id: "100", lastName: "Knightly", firstName: "Jude", feesOwing: 30, doctorId: "11" },
            { id: "400", lastName: "Koirala", firstName: "Kimi", feesOwing: 25, doctorId: "12" },
            { id: "300", lastName: "Chen", firstName: "Liang", feesOwing: 40, doctorId: "12" },
            { id: "500", lastName: "Ahmed", firstName: "Riyaz", feesOwing: 0, doctorId: "13" }
        ]

        let theHospital = new Hospital()

        // Create doctors
        DOCTORS.forEach(doctor => {
            theHospital.addDoctor(doctor.id, doctor.lastName, doctor.firstName, doctor.office, doctor.fees)
        })

        // Create patients
        PATIENTS.forEach(patient => {
            let theDoctor = theHospital.findDoctor(patient.doctorId)
            theDoctor.addPatient(patient.id, patient.lastName, patient.firstName, patient.feesOwing)
        })

        return theHospital
    }
}