import {useState,useEffect} from 'react'
import { add } from '../store/cartSlice';
import { useDispatch , useSelector} from 'react-redux';
import { fetchProducts } from '../store/ProductSlice';
import {STATUSES} from '../store/ProductSlice'

const Products = () => {
  const dispatch = useDispatch();
  const {data :products, status} = useSelector((state) => state.product);

    // const [products, setProducts] = useState([]);

    useEffect(() => {
      dispatch(fetchProducts())
      //  const fetchproducts = async () => {
      //   const res =  await fetch('https://fakestoreapi.com/products');
      //  const  data = await res.json();
      //   console.log(data);
      //   setProducts(data);

      //  } 

      //  fetchproducts();

    }, []);

    const handleAdd =(product) => {
        dispatch(add(product));
    }


    if (status === STATUSES.LOADING){
      return <h2>Loading...</h2>
    }

  return (
    
    <div className='product-wrapper'>
       {
        products.map((product) => (
            <div className='card' key={product.id}>
                <img  src={product.image} alt='' />
                <h2>{product.title}</h2>
                <h3>{product.price}</h3>
                <button className='btn' onClick={() => handleAdd(product)} >Add to cart</button>
            </div>
        ))
       } 

    </div>
    
  )
}

export default Products