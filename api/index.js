import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const products = [
    {
        "id": "1",
        "title": "Product One",
        "description": "This is the first product.",
        "price": 10.99
    },
    {
        "id": "2",
        "title": "Product Two",
        "description": "This is the second product.",
        "price": 20.49
    },
    {
        "id": "3",
        "title": "Product Three",
        "description": "This is the third product.",
        "price": 15.99
    },
    {
        "id": "4",
        "title": "Product Four",
        "description": "This is the fourth product.",
        "price": 30.99
    },
    {
        "id": "5",
        "title": "Product Five",
        "description": "This is the fifth product.",
        "price": 25.99
    },
    {
        "id": "6",
        "title": "Product Six",
        "description": "This is the sixth product.",
        "price": 12.49
    }
]

app.get('/api/products', async (req, res) => {
    return res.json(products)
})

app.get('/api/product/:id', async (req, res) => {
    const { id } = req.params
    const currentProduct = products.find(user => user.id.toString() === id)

    if (currentProduct) {
        return res.json(currentProduct)
    }

    return res.status(404).json({ message: 'Product not found' })
})

app.get('/api/products/:ids', async (req, res) => {
    const { ids } = req.params
    const idsArray = ids.split(",")
    const currentProducts = products.filter(user => idsArray.includes(user.id.toString()))

    if (currentProducts) {
        return res.json(currentProducts)
    }

    return res.status(404).json({ message: 'Products not found' })
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})

export default app
