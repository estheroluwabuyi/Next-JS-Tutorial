// const products = [
//   { id: "1", name: "Laptop", price: 1200 },
//   { id: "2", name: "Phone", price: 800 },
//   { id: "3", name: "Headphones", price: 200 },
// ];

// export default function ProductDetails({
//   params,
// }: {
//   params: { productId: string };
// }) {
//   const product = products.find((p) => p.id === params.productId);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <p>Price: ${product.price}</p>
//     </div>
//   );
// }

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;

  return <div>Details About Product {productId}</div>;
}
