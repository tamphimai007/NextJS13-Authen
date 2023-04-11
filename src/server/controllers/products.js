import Product from '@/server/models/products'


export const create = async (req, res) => {
    try {
        // code
        const newProduct = await new Product(req.body).save()
        console.log(newProduct)
        res.send(newProduct)
    } catch (err) {
        // check err
        console.log(err)
        res.status(400).send('Server Create Error!!')
    }
}
export const list = async (req, res) => {
    try {
        const listData = await Product.find({}).exec()
        console.log(listData)
        res.send(listData)
    } catch (err) {
        console.log(err)
        res.status(400).send('Server List Error!!!')
    }
}
export const read = async (req, res) => {
    try {

        const readData = await Product.findOne({ _id: req.query.id }).exec()
        console.log(readData)
        res.send(readData)
    } catch (err) {
        console.log(err)
        res.status(400).send('Server read Error!!!')
    }
}
export const update = async (req, res) => {
    try {
        const id = req.query.id
        const updated = await Product
            .findOneAndUpdate({ _id: id }, req.body, { new: true })
            .exec()
        console.log(updated)
        res.send(updated)
    } catch (err) {
        console.log(err)
        res.status(400).send('Server update Error!!!')
    }
}
export const remove = async (req, res) => {
    try {
        const id = req.query.id
        const deleted = await Product
            .findByIdAndDelete({ _id: id })
            .exec()

        console.log(deleted)
        res.send(deleted)
    } catch (err) {
        console.log(err)
        res.status(400).send('Server remove Error!!!')
    }
}