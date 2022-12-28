const Model = require("./Model.js")
module.exports = class UserToken extends Model {
    struct = {
        userId: {
            type: String,
        },
        token: {
            type: String
        },
        created: {
            type: String
        }
    }
}