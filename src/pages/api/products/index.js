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
        list(req, res)
    } else if (req.method === 'POST') {
        create(req, res)
    } else {
        res.status(400).send("Error!!")
    }
}