export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>₹ {product.price}</p>
    </div>
  );
}