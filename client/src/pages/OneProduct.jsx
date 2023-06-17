import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const OneProduct = () => {
    const { id } = useParams()

    const [product, setProducts] = useState({})
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get(`http://localhost:8000/api/product/${id}`);
            console.log(response.data)
            setProducts(response.data);
        };
        fetchProducts()
    }, [id]);

    return (
        <div>
            <h1> {product.name}</h1>
            <h1> {product.brand}</h1>
            <h1> {product.model}</h1>
            <h1> {product.description}</h1>
            <h1> {product.size}</h1>
            <h1> {product.price}</h1>
            <h1> {product.color}</h1>
        </div>
    )
}

export default OneProduct
