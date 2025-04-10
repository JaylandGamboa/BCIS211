class Controller {
    static setup() {
        let theCarPark
        theCarPark = new CarPark()
        // ADD CODE HERE TO CREATE THE ZONES
		const ZONES = [
			{zone: 3 , location: "Cashel Mall"},
			{zone: 1 , location: "Central City"},
			{zone: 2 , location: "Madras Street"}
		]
        /*
		3 Cashel Mall
		1 Central City
		2 Madras Street
		*/

        // ADD CODE HERE TO CREATE THE CLIENTS
		const CLIENTS = [
			{1 , 6001, "Maya Thorne", }
		]
        /*
		1 6001 Maya Thorne 31 Jan 1996 no
		1 6002 Carl Umaga 29 Aug 1996 yes
		2 7001 Jessica Bush 31 March 1997 yes
		2 7002 Marge Clinton 14 May 1997 yes
		3 8001 Jillian Fleming 14 Feb 1998 no
		1 6003 Anna Kumar 31 March 1999 no
		*/
        return theCarPark
    }
	static getZones (zones, location){
		
	}
}
