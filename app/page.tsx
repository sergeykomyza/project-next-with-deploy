import Image from "next/image";
import { prisma } from "@/lib/prisma";
import type { Product } from "@prisma/client";

export default async function Home() {
  const products: Product[] = await prisma.product.findMany()
  console.log(products)
  return (
    <section>
      <div className="container">
        <div className="catalog">
          {
            products.map((product) => (
              <div key={product.id}>
                <Image
                  className="" 
                  src={product.foto || '/no_image.gif'} 
                  alt='main foto' 
                  width={300} 
                  height={300} 
                />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}
