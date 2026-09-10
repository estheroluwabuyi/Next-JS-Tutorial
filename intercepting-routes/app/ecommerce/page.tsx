import Link from "next/link";
import products from "../data/products";

export default function Ecommerce() {
  return (
    <div>
      <section className="m-[4rem]">
        <div>
          <h1 className="text-3xl mb-3">Ecommerce</h1>
        </div>

        <section className="flex">
          {products.map((product) => (
            <div key={product.id} className="w-[200px] border">
              <Link href={`/ecommerce/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}
