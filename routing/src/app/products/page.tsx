// export default function ProductList() {
//   return (
//     <div>
//       <h1>Product Lists</h1>
//       <h2>Product 1</h2>
//       <h2>Product 2</h2>
//       <h2>Product 3</h2>
//     </div>
//   );
// }
import Link from "next/link";

const products = [
  { id: "1", name: "Laptop" },
  { id: "2", name: "Phone" },
  { id: "3", name: "Headphones" },
];

export default function ProductList() {
  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
