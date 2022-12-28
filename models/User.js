const Model = require("./Model.js")
module.exports = class User extends Model {
    struct = {
        name: {
            type: String,
        },
        email: {
            type: String
        },
        role: {
            type: String,
            enum: ["user", "admin"]
        },
        password: {
            type: String
        }
    }
}