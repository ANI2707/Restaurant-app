import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { clearCart } from '../utils/cartSlice';
const Cart = () => {

    const cartItems=useSelector((state)=>state.cart.items);
    const dispatch=useDispatch()
    const handleClearCart =()=>{
        dispatch(clearCart());
    }
  return (
    <div className='text-center m-6 p-6 '>
        <h1 className='text-2xl font-bold'>Cart</h1>
        <div className=' w-6/12 mx-auto'>
            <button onClick={handleClearCart} className='p-2 m-2 text-white bg-black rounded-lg'>Clear Cart</button>
            {cartItems.length=== 0 && <h1>Cart is empty add items to the cart!</h1>}
            <div className=''>
            {
                cartItems.map((item,inx)=>(
                    <div
                    key={item.card.info.id}
                    className="p-2 m-2 border-b-2 text-left flex justify-between"
                  >
                    <div className="w-9/12">
                      <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span>
                          - ₹
                          {item.card.info.price
                            ? item.card.info.price / 100
                            : item.card.info.defaultPrice / 100}
                        </span>
                      </div>
                      <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                      <div className="absolute">
                        <button onClick={()=>handleAddItem(item)} className="p-2 ml-6 rounded-lg bg-black text-white shadow-lg hover:bg-white  hover:text-black transition-all duration-[.3s]">
                          Add +
                        </button>
                      </div>
                      <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
                        alt={item.card.info.name}
                        className="w-full rounded-md"
                      />
                    </div>
                  </div>
                ))
            }
            </div>
            
        </div>
    </div>
  )
}

export default Cart