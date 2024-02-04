import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";



const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce((acc, curr) => acc + curr.price, 0) );
  }, [cart])

  return (
    <div className="mt-7 flex ">
      {
        cart.length > 0 ? 
      (<div className="max-w-[1000px] p-2 mx-auto flex space-x-10 checkout">
           <div className="flex flex-col gap-y-20 ">
            {
              (cart.map((item, index) => {
                return  <CartItem key={item.id} itemIndex={index} item={item}> 
                
                </CartItem>
              }))
              
            }

            
          </div>

          <div className=" mt-12  h-[70vh] flex flex-col justify-between">


            <div className="">
              <div className="text-green-600 text-lg md:text-2xl uppercase font-semibold ">Your Cart</div>
              <div className="text-green-600 text-2xl md:text-5xl uppercase font-extrabold ">Summary</div>
              <p className="mt-5">
                <span className="font-semibold">Total Items: {cart.length}</span>
              </p>
            </div>

            <div >
             <p className="font-semibold">Total Amount: <span className="font-extrabold">${totalAmount}</span>  </p>  
             <div className="flex flex-col justify-center bg-green-600 text-white pt-2 pb-2 rounded-lg mt-3">
             <button >Checkout Now</button>
             </div>
            </div> 

          
           
           </div>
        </div>) :
        (
          <div className="h-[80vh] flex flex-col gap-y-4 items-center justify-center w-screen">
          <h1 className="font-semibold text-lg">Cart is Empty</h1>
          <Link to="/">
          <button  className="flex w-[10vw] flex-col items-center bg-green-600 text-white pt-2 pb-2 rounded-lg ">
            Shop Now
          </button>
          </Link>
          </div>
        )

      }
    </div>
  );
};

export default Cart;
