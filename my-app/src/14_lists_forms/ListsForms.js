import { useState } from "react";

const ForLoop = ({ elements }) => {
  const createElements = () => {
    const uiElements = [];
    for (let i = 0; i < elements.length; i++) {
      uiElements.push(<li>{elements[i]}</li>);
    }
    return uiElements;
  };

  return <ul>{createElements()}</ul>;
};

function ProductCard({ product }) {
  const { image, title, price } = product;

  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <div style={styles.info}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.price}>${price}</p>
      </div>
    </div>
  );
}

function ProductView({ products }) {
  const [text, setText] = useState("a");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div style={styles.container}>
      <input type="text" value={text} onChange={handleChange} />
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    width: "200px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backgroundColor: "#fff",
    margin: "10px",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
  info: {
    padding: "10px",
  },
  title: {
    fontSize: "18px",
    margin: "10px 0 5px 0",
  },
  price: {
    fontSize: "16px",
    color: "#888",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
};

export { ForLoop, ProductView };
