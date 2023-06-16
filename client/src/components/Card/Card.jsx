import React from 'react'
import axios from 'axios'
const Card = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/getall/products');
            setProducts(data)
        }
        fetchProducts();
    }, [])
    return (
        <div class="w-[60%] bg-white border rounded-md shadow">
            <div href="#" className='p-5'>
                <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt=""/>
            </div>
            <div class="p-5">
                <h5 class="mb-2 text-[14px] font-semibold  text-black">Noteworthy technology acquisitions 2021</h5>
                <h5 class="text-[14px] font-semibold  text-black">$Price</h5>
            </div>
        </div>
    )
}

export default Card
