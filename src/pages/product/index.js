// rafce
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const index = () => {
    const uri = 'http://localhost:3000/api/products'
    const [data, setData] = useState(null)
    const [formData, setFormData] = useState({})
    // javascript
    useEffect(() => {
        // code
        loadData()
    }, [])
    const loadData = async () => {
        // code
        await axios.get(uri)
            .then(res => {
                setData(res.data)
            }).catch(err => {
                console.log(err)
            })
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
        await axios.post(uri, formData)
            .then(res => loadData())
            .catch(err => console.log(err))
    }
    const handleDelete = async (id) => {
        console.log(id)
        await axios.delete(uri + '/' + id)
            .then(res => {
                console.log(res)
                loadData()
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    onChange={handleChange}
                    placeholder='name'
                    type='text' />
                <br />
                <input
                    onChange={handleChange}
                    name="detail"
                    placeholder='detail'
                    type='text' />
                <br />
                <input
                    onChange={handleChange}
                    name="price"
                    placeholder='price'
                    type='number' />
                <br />
                <button type='submit'>Submit</button>
            </form>

            <hr />
            <ui>
                {data && data.map(item =>
                    <li key={item._id}>
                        {item.name}
                        : {item.detail}
                        :{item.price}
                        ---<p onClick={() => handleDelete(item._id)}>Delete</p>
                    </li>
                )}
            </ui>
        </>

    )
}

export default index