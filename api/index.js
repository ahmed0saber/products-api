import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const products = [
    {
        "id": "1",
        "title": "Black T-Shirt",
        "description": "Classic style meets premium comfort in our Black T-Shirt. Grab yours now!",
        "price": 18.99,
        "sale_percentage": 8,
        "image": "https://ahmed0saber.github.io/products-api/images/Black T-Shirt.jfif",
    },
    {
        "id": "2",
        "title": "Black Watch",
        "description": "Elevate your look with our sleek Black Watch, available at a great deal!",
        "price": 54.49,
        "sale_percentage": 12,
        "image": "https://ahmed0saber.github.io/products-api/images/Black Watch.jfif",
    },
    {
        "id": "3",
        "title": "Blue Back Bag",
        "description": "Stay organized in style with our Blue Backpack, now offered at a special price!",
        "price": 35.99,
        "sale_percentage": 6,
        "image": "https://ahmed0saber.github.io/products-api/images/Blue Back Bag.jfif",
    },
    {
        "id": "4",
        "title": "Gaming Keyboard",
        "description": "Level up your gaming setup with our Gaming Keyboard, available at a discounted rate!",
        "price": 30.99,
        "sale_percentage": 24,
        "image": "https://ahmed0saber.github.io/products-api/images/Gaming Keyboard.jfif",
    },
    {
        "id": "5",
        "title": "Modern Headset",
        "description": "Immerse yourself in crystal-clear sound with our Modern Headset, available now at an amazing value!",
        "price": 25.29,
        "sale_percentage": 0,
        "image": "https://ahmed0saber.github.io/products-api/images/Modern Headset.jfif",
    },
    {
        "id": "6",
        "title": "Purple Hand Bag",
        "description": "Add a pop of color to your outfit with our Purple Handbag, now offered at a fantastic price!",
        "price": 12.49,
        "sale_percentage": 11,
        "image": "https://ahmed0saber.github.io/products-api/images/Purple Hand Bag.jfif",
    },
    {
        "id": "7",
        "title": "Red T-Shirt",
        "description": "Stand out in style with our vibrant Red T-Shirt, now available at an unbeatable value!",
        "price": 24.99,
        "sale_percentage": 10,
        "image": "https://ahmed0saber.github.io/products-api/images/Red T-Shirt.jfif",
    },
    {
        "id": "8",
        "title": "Smart Phone",
        "description": "Stay connected and productive with our advanced Smart Phone, now offered at an incredible discount!",
        "price": 320.49,
        "sale_percentage": 32,
        "image": "https://ahmed0saber.github.io/products-api/images/Smart Phone.jfif",
    }
]

app.get('/api/products', async (req, res) => {
    return res.json(products)
})

app.get('/api/products/search', async (req, res) => {
    const searchQuery = req.query.q
    if (searchQuery === undefined) {
        return res.json(products)
    }

    const searchPattern = new RegExp(searchQuery, "i")
    const filteredProducts = products.filter(product => searchPattern.test(product.title))

    return res.json(filteredProducts)
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
