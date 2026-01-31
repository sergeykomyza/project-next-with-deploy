

import Image from "next/image";
import { prisma } from "@/lib/prisma";
import type { Product } from "@prisma/client";
import GhostCursor from "./components/GhostCursor/GhostCursor";

export default async function Home() {
  const products: Product[] = await prisma.product.findMany()
  
  return (
    <section>
      <div className="container">
        <div className="bannerBox">
          <GhostCursor
            // Visuals
            color="#B19EEF"
            brightness={2}
            edgeIntensity={0}

            // Trail and motion
            trailLength={50}
            inertia={0.5}

            // Post-processing
            grainIntensity={0.05}
            bloomStrength={0}
            bloomRadius={1}
            bloomThreshold={0.025}

            // Fade-out behavior
            fadeDelayMs={500}
            fadeDurationMs={1500}
          />
          <Image 
            className="banner"
            src={`/img/foto-1.png`} 
            alt='banner' 
            width={1500} 
            height={1000} 
          />
          <div className="bannerContent">
            <h1 className="bannerTitle">GameCraft</h1>
          </div>
        </div>
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
