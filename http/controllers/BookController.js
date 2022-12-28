const Book = new (require("../../models/Book.js"))();
module.exports = class BookController {
    index(req, res) {
        let result = Book.all();
        res.send(result)
    }
    show(req, res, ) {
        let result = Book.find(req.params.bookId)
        res.send(result)

    }
    store(req, res) {
        if (!req.body) return res.sendStatus(400);

        let result = Book.create({
            name: req.body.name,
            author: req.body.author,
            year: req.body.year
        })
        res.send(result)
    }
    update(req, res) {
        if (!req.body) return res.sendStatus(400);

        let result = Book.update(req.params.bookId, {
            name: req.body.name,
            author: req.body.author,
            year: req.body.year
        })
        res.send(result)
    }
    delete(req, res) {
        let result = Book.delete(req.params.bookId);
        res.send(result)
    }
}