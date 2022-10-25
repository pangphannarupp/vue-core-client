interface DatabaseService {
    save(item: any): boolean,
    delete(id: number): boolean,
    getById(id: number): any,
    getAll(): [any],
}

class MobileDatabaseService implements DatabaseService {
    save(item: any): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    getById(id: number) {
        throw new Error("Method not implemented.");
    }
    getAll(): [any] {
        throw new Error("Method not implemented.");
    }
}

class WebDatabaseService implements DatabaseService {
    save(item: any): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    getById(id: number) {
        throw new Error("Method not implemented.");
    }
    getAll(): [any] {
        throw new Error("Method not implemented.");
    }
}


var databaseservice: DatabaseService = new MobileDatabaseService()
var databaseservice: DatabaseService = new WebDatabaseService()