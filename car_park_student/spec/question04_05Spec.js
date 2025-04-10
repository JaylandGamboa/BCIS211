describe("Question Four and Question Five", function () {
    describe("Client", function () {
        let client = new Client()

        it("should have an .myZone reference", function () {
            expect(
                Object.prototype.hasOwnProperty.call(client, "myZone")
            ).toBeTruthy()
        })

        it("should have a .id property", function () {
            expect(
                Object.prototype.hasOwnProperty.call(client, "id")
            ).toBeTruthy()
        })

        it("should have a .personalName property", function () {
            expect(
                Object.prototype.hasOwnProperty.call(client, "personalName")
            ).toBeTruthy()
        })

        it("should have a .familyName property", function () {
            expect(
                Object.prototype.hasOwnProperty.call(client, "familyName")
            ).toBeTruthy()
        })

        it("should have a .birthday property", function () {
            expect(
                Object.prototype.hasOwnProperty.call(client, "birthday")
            ).toBeTruthy()
        })
        it("should have a .isPermanent property", function () {
            expect(
                Object.prototype.hasOwnProperty.call(client, "isPermanent")
            ).toBeTruthy()
        })
    })

    describe("write a Zone.addClient function to add the Clients", function () {
        let theCarPark

        beforeEach(function () {
            let theController
            theCarPark = Controller.setup()
        })

        it("Zone 1 should have 3 Clients", function () {
            let theZone = theCarPark.findZone(1)
            expect(theZone.allMyClients.length).toBe(3)
        })

        it("Zone 2 should have 2 Clients", function () {
            let theZone = theCarPark.findZone(2)
            expect(theZone.allMyClients.length).toBe(2)
        })

        it("Zone 3 should have 1 Client", function () {
            let theZone = theCarPark.findZone(3)
            expect(theZone.allMyClients.length).toBe(1)
        })

        it("should correctly set client details", function () {
            /*
            1 6001 Maya Thorne 31 Jan 1996 no
            1 6002 Carl Umaga 29 Aug 1996 yes
            2 7001 Jessica Bush 31 March 1997 yes
            2 7002 Marge Clinton 14 May 1997 yes
            3 8001 Jillian Fleming 14 Feb 1998 no
            1 6003 Anna Kumar 31 March 1999 no
            */
            let aClient, theZone
            theZone = theCarPark.findZone(1)

            // 1 6001 Maya Thorne 31 Jan 1996 no
            aClient = theZone.allMyClients[0]
            expect(aClient.myZone).toEqual(theZone)
            expect(aClient.id).toBe(6001)
            expect(aClient.personalName).toBe("Maya")
            expect(aClient.familyName).toBe("Thorne")
            expect(aClient.birthday).toEqual(new Date(1996, 0, 31))
            expect(aClient.isPermanent).toBe(false)

            // 1 6002 Carl Umaga 29 Aug 1996 yes
            aClient = theZone.allMyClients[1]
            expect(aClient.myZone).toEqual(theZone)
            expect(aClient.id).toBe(6002)
            expect(aClient.personalName).toBe("Carl")
            expect(aClient.familyName).toBe("Umaga")
            expect(aClient.birthday).toEqual(new Date(1996, 6, 29))
            expect(aClient.isPermanent).toBe(true)

            // 1 6003 Anna Kumar 31 March 1999 no
            aClient = theZone.allMyClients[2]
            expect(aClient.myZone).toEqual(theZone)
            expect(aClient.id).toBe(6003)
            expect(aClient.personalName).toBe("Anna")
            expect(aClient.familyName).toBe("Kumar")
            expect(aClient.birthday).toEqual(new Date(1999, 2, 31))
            expect(aClient.isPermanent).toBe(false)

            theZone = theCarPark.findZone(2)

            aClient = theZone.allMyClients[0]
            // 2 7001 Jessica Bush 31 March 1997 yes
            expect(aClient.myZone).toEqual(theZone)
            expect(aClient.id).toBe(7001)
            expect(aClient.personalName).toBe("Jessica")
            expect(aClient.familyName).toBe("Bush")
            expect(aClient.birthday).toEqual(new Date(1997, 2, 31))
            expect(aClient.isPermanent).toBe(true)

            // 2 7002 Marge Clinton 14 May 1997 yes
            aClient = theZone.allMyClients[1]
            expect(aClient.myZone).toEqual(theZone)
            expect(aClient.id).toBe(7002)
            expect(aClient.personalName).toBe("Marge")
            expect(aClient.familyName).toBe("Clinton")
            expect(aClient.birthday).toEqual(new Date(1997, 4, 14))
            expect(aClient.isPermanent).toBe(true)

            theZone = theCarPark.findZone(3)
            // 3 8001 Jillian Fleming 14 Feb 1998 no
            aClient = theZone.allMyClients[0]
            expect(aClient.myZone).toEqual(theZone)
            expect(aClient.id).toBe(8001)
            expect(aClient.personalName).toBe("Jillian")
            expect(aClient.familyName).toBe("Fleming")
            expect(aClient.birthday).toEqual(new Date(1998, 1, 14))
            expect(aClient.isPermanent).toBe(false)
        })
    })
})
