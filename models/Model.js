const JsonDb = require("../utils/jsondb.js")

module.exports = class Model{
    table = (this.constructor.name).toLowerCase() + 's'
    struct = {}
    constructor() {
        // super(this.table)
        this.db = new JsonDb(this.table)
    }
    all() {
        return this.db.all();
    }
    find(id) {
        return this.db.find(id)
    }
    where(field, value) {
        return this.db.where(field, value)
    }
    create(arrParams) {
        return this.db.create(arrParams);
    }
    update(id, arrParams) {
        return this.db.update(id, arrParams)
    }
    delete(id) {
        return this.db.delete(id)
    }
}