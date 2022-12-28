const Model = require("./Model.js")
module.exports = class Book extends Model {
    struct = {
        name: {
            type: String,
            default: ""
        },
        author: {
            type: String,
            default: ""
        },
        year: {
            type: String,
            default: ""
        }
    }
}