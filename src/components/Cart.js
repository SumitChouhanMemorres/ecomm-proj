import { useSelector } from "react-redux";

const Cart = () => {
  const selectedItem = useSelector((state) => state.cartData);
  const amount = selectedItem?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  return (
    <div>
      <h1>Cart Page</h1>
      <div className="product-container">
        {selectedItem?.map((item) => {
          return (
            <div key={item.id} className="product-item">
              <img src={item.image} alt="temp" />
              <div>Name: {item.name}</div>
              <div>Color: {item.color}</div>
              <div>Price: {item.price}</div>
              <div>Category: {item.category}</div>
              <div>Brand: {item.brand}</div>
            </div>
          );
        })}
      </div>
      <div>
        <h1>Total Amount: {amount}</h1>
        <h1>Discount: {amount / 10}</h1>
        <h1>Total Amount after discount: {amount - amount / 10}</h1>
      </div>
    </div>
  );
};

export default Cart;
