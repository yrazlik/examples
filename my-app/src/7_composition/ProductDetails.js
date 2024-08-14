const ProductDetails = ({ name, description, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <strong>${price}</strong>
      </p>
    </div>
  );
};

export default ProductDetails;
