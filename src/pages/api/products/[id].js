import { connectDB } from "@/server/config/db"

import {
    create,
    list,
    read,
    update,
    remove
} from "@/server/controllers/products"

connectDB()
export default (req, res) => {
    // code
    if (req.method === 'GET') {
        read(req, res)
    } else if (req.method === 'PUT') {
        update(req, res)
    } else if (req.method === 'DELETE') {
        remove(req, res)
    } else {
        res.status(400).send("Error!!")
    }
}