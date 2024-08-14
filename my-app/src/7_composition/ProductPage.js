import AddToCartButton from "./AddToCartButton";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";

//const ProductPage = ({ product }) => {
const ProductPage = (props) => {
  const handleAddToCart = () => {
    alert(`${props.product.name} has been added to your cart.`);
  };

  return (
    <div style={{ display: "flex", alignItems: "start", gap: "20px" }}>
      <ProductImage
        imageUrl={props.product.imageUrl}
        altText={props.product.name}
      />
      <div>
        <ProductDetails
          name={props.product.name}
          description={props.product.description}
          price={props.product.price}
        />
        <AddToCartButton onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default ProductPage;
