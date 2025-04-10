/**
 * https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
 *
 * The basic pattern that IndexedDB encourages is the following:
 * 1. Open a database.
 * 2. Create an object store in the database.
 * 3. Start a transaction and make a request to do somekind of database operation,
 *    such as like adding or retrieving data.
 * 4. Wait for the operation to complete by listening to the right kind of DOM event.
 * 5. Do something with the results (which can be found on the request object).
 *
 * Please note that if you run this program twice, you may see errors appearing
 * in the console because the database/data already exists.
 */

/**
 * IndexedDB demo database class.
 */
class IndexedDBDB {
  #db
  #databaseName
  #objectStoreName

  /**
   * Initializes a new instance of the IndexedDBDB class.
   *
   * @param {string} [databaseName="MyTestDatabase"] - The name of the database to open or create.
   * @param {string} [objectStoreName="customers"] - The name of the object store to use within the database.
   */
  constructor(databaseName = "MyTestDatabase", objectStoreName = "customers") {
    this.databaseName = databaseName
    this.objectStoreName = objectStoreName
    this.#db = undefined
  }

  set databaseName(databaseName) {
    this.#databaseName = databaseName
  }

  set objectStoreName(objectStoreName) {
    this.#objectStoreName = objectStoreName
  }

  async connectTogetherDemo() {
    try {
      await this.setUpDatabase()

      await this.addData()
      await this.readData()
      await this.readAllByGetAll()
      await this.readDataByNameIndex("Bill")

      await this.updateData()
      await this.deleteData()

      await this.readAllByCursor()
    } catch (error) {
      console.error(`Error in connectTogetherDemo: ${error}`)
    } finally {
      this.tearUp()
    }
  }

  async setUpDatabase() {
    return new Promise((resolve, reject) => {
      /*
      opens a connection to an IndexedDB database with the name stored in this.#databaseName and 
      version 1. If the database does not exist, it will be created. If it already exists with a 
      different version, an onupgradeneeded event will be triggered.
      */
      const request = window.indexedDB.open(this.#databaseName, 1)

      /**
       * This event is triggered if an error occurrs while the database is
       * being opened. This could be due to a number of reasons: the user
       * denied the request, the database couldn't be created, etc.
       *
       * @param {IDBRequest} event
       * @see https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest/onerror
       */
      request.onerror = (event) => {
        // Handle errors.
        console.log("Why didn't you allow my web app to use IndexedDB?!")
        console.log(`Database error: ${event.target.errorCode}`)

        reject(new Error(`Failed to open database: ${event.target.error}`))
      }

      /**
       * This event is triggered when the database version is increased. This
       * indicates that the database needs to be upgraded. The
       * `onupgradeneeded` event is only triggered if the database version is
       * different from the version of the database that is currently open in
       * another tab. If the database version is the same, this event is not
       * triggered and the success event is triggered instead.
       *
       * @param {IDBVersionChangeEvent} event
       * @see https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest/onupgradeneeded
       */
      request.onupgradeneeded = (event) => {
        this.#db = event.target.result

        if (!this.#db.objectStoreNames.contains(this.#objectStoreName)) {
          // Create an objectStore to hold information about our customers. We're
          // going to use "ssn" as our key path because it's guaranteed to be
          // unique - or at least that's what I was told during the kickoff meeting.

          // keyPath here is the name of the key column
          const objectStore = this.#db.createObjectStore(
            this.#objectStoreName,
            {
              keyPath: "ssn",
            }
          )

          // Create an index to search customers by name. We may have duplicates
          // so we cannot use a unique index.
          objectStore.createIndex("nameIndex", "name", { unique: false })

          // Create an index to search customers by email. We want to ensure that
          // no two customers have the same email, so use a unique index.
          objectStore.createIndex("emailIndex", "email", { unique: true })

          /*
          In IndexedDB, you can also create indexes on object stores, which allow you to query 
          records based on specific properties. While an index can be used to speed up queries, 
          it is not the same as the keyPath.
          The keyPath is used to uniquely identify a record, whereas an index is used to speed 
          up queries on a specific property. You can have multiple indexes on an object store, 
          but you can only have one keyPath.
          */

          console.log("Database upgrade complete")
        }

        console.log(`onupgradeneeded: ${event.target.result}`)
      }

      /**
       * This event is triggered when the database has been successfully opened.
       *
       * @param {IDBRequest} event
       * @see https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest/onsuccess
       */
      request.onsuccess = (event) => {
        this.#db = event.target.result
        console.log("Database opened successfully")
        resolve()
      }
    })
  }

  async deleteData(ssn = "555-55-5555") {
    await new Promise((resolve, reject) => {
      /*
      The transaction() method is part of the IndexedDB API, which allows you to perform a series 
      of operations on a database as a single, atomic unit. This ensures that either all 
      operations are executed successfully, or none are, maintaining the integrity of the database.
      */
      const transaction = this.#db.transaction(
        [this.#objectStoreName],
        "readwrite"
      )
      const objectStore = transaction.objectStore(this.#objectStoreName)
      const request = objectStore.delete(ssn)

      request.onerror = (event) => {
        console.log(`Error deleting data: ${event.target.error}`)
        reject(new Error(`Error deleting data: ${event.target.error}`))
      }

      request.onsuccess = (event) => {
        console.log("Deleting has successfully completed!")
        resolve()
      }
    })
  }

  async updateData(ssn = "444-44-4444") {
    await new Promise((resolve, reject) => {
      const transaction = this.#db.transaction(
        [this.#objectStoreName],
        "readwrite"
      )
      const objectStore = transaction.objectStore(this.#objectStoreName)
      const request = objectStore.get(ssn)

      request.onerror = (event) => {
        console.log(`Error reading data: ${event.target.error}`)
        reject(new Error(`Error reading data: ${event.target.error}`))
      }

      request.onsuccess = (event) => {
        // Get the old value that we want to update
        const data = event.target.result

        if (data) {
          // Update the value(s) in the object that you want to change
          data.age = 42

          // Put this updated object back into the objectStore
          const requestUpdate = objectStore.put(data)

          requestUpdate.onerror = (event) => {
            console.log(`Error updating data: ${event.target.error}`)
            reject(new Error(`Error updating data: ${event.target.error}`))
          }

          requestUpdate.onsuccess = (event) => {
            console.log("Updating has successfully completed!")
            resolve()
          }
        } else {
          reject(new Error("Data not found"))
        }
      }
    })
  }

  async readData(ssn = "444-44-4444") {
    await new Promise((resolve, reject) => {
      const transaction = this.#db.transaction(
        [this.#objectStoreName],
        "readonly"
      )
      const objectStore = transaction.objectStore(this.#objectStoreName)
      const request = objectStore.get(ssn)

      request.onerror = (event) => {
        console.log(`Error reading data: ${event.target.error}`)
        reject(new Error(`Error reading data: ${event.target.error}`))
      }

      request.onsuccess = (event) => {
        const data = event.target.result
        if (data) {
          console.log(
            `Data retrieved: Name for SSN ${ssn} is ${request.result.name}`
          )
        } else {
          console.log("Data not found in the database!")
        }
        resolve()
      }
    })
  }

  async readAllByCursor() {
    await new Promise((resolve, reject) => {
      const transaction = this.#db.transaction(
        [this.#objectStoreName],
        "readonly"
      )
      const objectStore = transaction.objectStore(this.#objectStoreName)

      // The openCursor() method is part of the IndexedDB API, which allows you to retrieve a
      // cursor over a range of records in an object store.
      const request = objectStore.openCursor()

      request.onerror = (event) => {
        console.log(`Error reading data: ${event.target.error}`)
        reject(new Error(`Error reading data: ${event.target.error}`))
      }

      request.onsuccess = (event) => {
        const cursor = event.target.result

        if (cursor) {
          console.log(`Name for SSN ${cursor.key} is ${cursor.value.name}`)

          // https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/continue
          // This method advances the cursor to the next record in the object store.
          cursor.continue()
        } else {
          console.log("No more entries!")
        }

        resolve()
      }
    })
  }

  async readAllByGetAll() {
    await new Promise((resolve, reject) => {
      const transaction = this.#db.transaction(
        [this.#objectStoreName],
        "readonly"
      )
      const objectStore = transaction.objectStore(this.#objectStoreName)

      // The getAll() method returns a request object that will resolve with an array of all
      // records in the object store.
      const request = objectStore.getAll()

      request.onerror = (event) => {
        console.log(`Error reading data: ${event.target.error}`)
        reject(new Error(`Error reading data: ${event.target.error}`))
      }

      request.onsuccess = (event) => {
        const data = event.target.result

        if (data && data.length > 0) {
          data.forEach((customer) => {
            console.log(customer)
          })
        } else {
          console.log("No data found!")
        }

        resolve()
      }
    })
  }

  async readDataByNameIndex(name) {
    await new Promise((resolve, reject) => {
      const transaction = this.#db.transaction(
        [this.#objectStoreName],
        "readonly"
      )
      const objectStore = transaction.objectStore(this.#objectStoreName)
      const index = objectStore.index("nameIndex")
      const request = index.getAll(name)

      request.onerror = (event) => {
        console.log(`Error reading data: ${event.target.error}`)
        reject(new Error(`Error reading data: ${event.target.error}`))
      }

      request.onsuccess = (event) => {
        const data = event.target.result
        if (data && data.length > 0) {
          console.log(
            `Data retrieved: ${data.length} records with name ${name}`
          )
          console.log(data)
        } else {
          console.log(`No records found with name ${name}`)
        }
        resolve()
      }
    })
  }

  /* 
    Of course, you wouldn't use someone's social security number as the primary 
    key to a customer table because not everyone has a social security number, 
    and you would store their birth date instead of their age, but let's ignore 
    those unfortunate choices for the sake of convenience and move along.
    */
  async addData(
    customerData = [
      {
        ssn: "444-44-4444",
        name: "Bill",
        age: 35,
        email: "bill@company.com",
      },
      {
        ssn: "555-55-5555",
        name: "Donna",
        age: 32,
        email: "donna@home.org",
      },
      {
        ssn: "666-66-6666",
        name: "Jerry",
        age: 23,
        email: "jerry@home.org",
      },
    ]
  ) {
    const transaction = this.#db.transaction(
      [this.#objectStoreName],
      "readwrite"
    )
    const objectStore = transaction.objectStore(this.#objectStoreName)

    // Use transaction oncomplete to make sure the objectStore creation is
    // finished before adding data into it.
    return new Promise((resolve, reject) => {
      transaction.oncomplete = () => {
        console.log("Transaction completed. Data added to the database.")
        resolve()
      }

      transaction.onerror = (event) => {
        console.error("Transaction error:", event.target.error)
        reject(new Error(`Transaction error: ${event.target.error}`))
      }

      customerData.forEach((customer) => {
        const request = objectStore.add(customer)

        request.onsuccess = () => {
          console.log(`Data added to the database ${JSON.stringify(customer)}`)
        }

        request.onerror = (event) => {
          console.error(
            `Error adding data ${JSON.stringify(customer)} ${
              event.target.error
            }`
          )

          reject(event.target.error)
        }
      })
    })
  }

  tearUp() {
    if (this.#db) {
      this.#db.close()
      console.log("Database connection closed")
    }
  }
}

export default IndexedDBDB
