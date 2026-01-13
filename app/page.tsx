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
              <div key={product.id} className="product">
                <Image
                  className="productFoto" 
                  src={product.foto || '/no_image.gif'} 
                  alt='main foto' 
                  width={300} 
                  height={300} 
                />
                {/* <p className="productDescription">{product.description}</p> */}
                <p className="productDescription">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will</p>
                <h2 className="productName">{product.name}</h2>
                <p className="productPrice">${product.price}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}
