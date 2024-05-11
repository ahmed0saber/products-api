import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const products = [
    {
        "id": "1",
        "title": "Black T-Shirt",
        "description": "This is a Black T-Shirt.",
        "price": 18.99,
        "sale_percentage": 8,
        "image": "https://ahmed0saber.github.io/products-api/images/Black T-Shirt.jfif",
    },
    {
        "id": "2",
        "title": "Black Watch",
        "description": "This is a Black Watch.",
        "price": 54.49,
        "sale_percentage": 12,
        "image": "https://ahmed0saber.github.io/products-api/images/Black Watch.jfif",
    },
    {
        "id": "3",
        "title": "Blue Back Bag",
        "description": "This is a Blue Back Bag.",
        "price": 35.99,
        "sale_percentage": 6,
        "image": "https://ahmed0saber.github.io/products-api/images/Blue Back Bag.jfif",
    },
    {
        "id": "4",
        "title": "Gaming Keyboard",
        "description": "This is a Gaming Keyboard.",
        "price": 30.99,
        "sale_percentage": 24,
        "image": "https://ahmed0saber.github.io/products-api/images/Gaming Keyboard.jfif",
    },
    {
        "id": "5",
        "title": "Modern Headset",
        "description": "This is a Modern Headset.",
        "price": 25.29,
        "sale_percentage": 0,
        "image": "https://ahmed0saber.github.io/products-api/images/Modern Headset.jfif",
    },
    {
        "id": "6",
        "title": "Purple Hand Bag",
        "description": "This is a Purple Hand Bag.",
        "price": 12.49,
        "sale_percentage": 11,
        "image": "https://ahmed0saber.github.io/products-api/images/Purple Hand Bag.jfif",
    },
    {
        "id": "7",
        "title": "Red T-Shirt",
        "description": "This is a Red T-Shirt.",
        "price": 24.99,
        "sale_percentage": 10,
        "image": "https://ahmed0saber.github.io/products-api/images/Red T-Shirt.jfif",
    },
    {
        "id": "8",
        "title": "Smart Phone",
        "description": "This is a Smart Phone.",
        "price": 320.49,
        "sale_percentage": 32,
        "image": "https://ahmed0saber.github.io/products-api/images/Smart Phone.jfif",
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
