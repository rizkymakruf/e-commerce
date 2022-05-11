import { useState } from "react";
import Image from "next/image";
import ProductOne from "../../public/static/images/product1.jpg";
import ProductTwo from "../../public/static/images/product2.jpg";
import ProductThree from "../../public/static/images/product3.jpg";
import ProductFour from "../../public/static/images/product4.jpg";
const ProductGalery = () => {
  const Galery = [ProductOne, ProductTwo, ProductThree, ProductFour];

  const [galery, setGalery] = useState(Galery[0]);

  function DefaultVal() {}

  return (
    <div className="">
      <div className="flex flex-col justify-center w-full gap-y-4">
        <div className={`w-72 h-72 rounded-md`}>
          {/* <div className="absolute">
            <Image
              className="rounded-md"
              src={ProductTwo}
              layout={"responsive"}
              objectFit={"contain"}
              priority
            />
          </div> */}
          <div className="">
            <Image
              className="rounded-md"
              src={galery}
              layout={"responsive"}
              objectFit={"contain"}
              priority
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-2 w-72">
          {Galery.map((image, index) => {
            return (
              <Image
                src={image}
                className="rounded-md"
                onClick={() => setGalery(Galery[index])}
                onMouseOver={() => setGalery(Galery[index])}
              />
            );
          })}
        </div>
        <div>
          <p className="text-red-600 text-md font-bold text-xs">
            Gratis Ongkir
          </p>
          <p className="text-red-600 text-xs">Minimum pembelian Rp 200.000</p>
        </div>
      </div>
    </div>
  );
};

export default ProductGalery;

{
  /* <Image
src={ProductTwo}
className="rounded-md"
onClick={() => setGalery(Galery[1])}
onMouseOver={() => setGalery(Galery[1])}
/>
<Image
src={ProductThree}
className="rounded-md"
onClick={() => setGalery(Galery[2])}
onMouseOver={() => setGalery(Galery[2])}
/>
<Image
src={ProductFour}
className="rounded-md"
onClick={() => setGalery(Galery[3])}
onMouseOver={() => setGalery(Galery[3])}
/> */
}
