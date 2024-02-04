import {MdDelete} from "react-icons/md"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import {toast} from "react-hot-toast";


const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("ITem Removed");
  }

  return (
    <div>

      <div className="flex gap-x-10 border-b-2 border-slate-800 pb-10">

        <div >
          <img src={item.image} alt="" width={130} height={160}/>
        </div>

        <div className="w-[360px]">
          <h1 className="text-gray-700 font-semibold text-lg text-left  mt-1 ">{item.title}</h1>
          <h1 className="w-40 text-gray-400 font-normal text-[12px] text-left">{item.description.split(" ").slice(0, 16).join(" ") + "..."}</h1>
          <div className="flex justify-between gap-12 items-center w-full mt-5">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div onClick={removeFromCart} className="flex flex-col cursor-pointer mr-12 bg-red-300 rounded-full w-[35px]  justify-center items-center h-[35px]">
              <MdDelete className="text-[25px] p-0"></MdDelete>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default CartItem;
