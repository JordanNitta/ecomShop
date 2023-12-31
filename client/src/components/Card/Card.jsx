import { Link } from 'react-router-dom'
const Card = ({products}) => {
    // const [products, setProducts] = useState([])
    // const { id } = useParams
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const response = await axios.get('http://localhost:8000/api/all/products');
    //         setProducts(response.data);
    //     };
    //     fetchProducts()
    // }, []);

    return (
        <div className='grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-5 lg:grid-cols-3'>
            {products.map((product) => {
                const { _id, name, image, price, brand} = product;
                return (
                    <Link key={_id} to={`/products/${_id}`} className='pointer  bg-white '>
                        <div href="#" className='p-5'>
                            <img className="rounded-md" src={image} />
                        </div>
                        <div className="p-5">
                            <h5 className="mb-2 text-[14px] font-semibold text-gray-500">{brand}</h5>
                            <h5 className="mb-2 text-[14px] font-semibold text-black">{name}</h5>
                            <h5 className="text-[14px] font-bold text-black">${price}</h5>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

    export default Card
