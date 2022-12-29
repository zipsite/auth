module.exports = validateModel = (struct, params) => {
    for (let key in struct) {
        console.log((key) in params)
        if ((key in params)) {
            if (!((typeof params[key]) === struct[key].type)) {
                return {
                    error: true,
                    message: `parameter "${key}" is of the wrong type `
                }
            }
        } else {
            return {
                error: true,
                message: `object does not have this parameter: ${key}`
            }
        }
    }
    return {
        error: false,
        message: "valid!"
    }
}