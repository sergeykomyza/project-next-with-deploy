import Image from "next/image";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

export default async function Home() {
  const products = await prisma.product.findMany()
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
