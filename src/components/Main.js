import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log("data in main component from saga ", data);
  useEffect(() => {
    dispatch(productList());
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      <button onClick={() => dispatch(productList())}>Get Product List</button>
      <div className="product-container">
        {data?.map((item) => {
          return (
            <div key={item.id} className="product-item">
              <img src={item.image} alt="temp" />
              <div>Name: {item.name}</div>
              <div>Color: {item.color}</div>
              <div>Price: {item.price}</div>
              <div>Category: {item.category}</div>
              <div>Brand: {item.brand}</div>
              <div>
                <button onClick={() => dispatch(addToCart(item))}>
                  Add to Cart
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove from Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
