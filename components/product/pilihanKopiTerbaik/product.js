import Image from "next/image";
import ProductFour from "/public/static/images/product4.jpg";
// public/static/images/product7.jpg
const Product = () => {
  const products = [
    {
      image: ProductFour,
    },
    {
      image: ProductFour,
    },
    {
      image: ProductFour,
    },
    {
      image: ProductFour,
    },
    {
      image: ProductFour,
    },
    {
      image: ProductFour,
    },

    {
      image: ProductFour,
    },
    {
      image: ProductFour,
    },
    {
      image: ProductFour,
    },
    {
      image: ProductFour,
    },
  ];
  return (
    <div className="h-full w-full bg-white">
      <div className="grid grid-cols-5  grid-flow-row gap-8">
        {products.map((a, id) => {
          return (
            <div className="" key={id}>
              <div>
                <Image
                  className="rounded-t-md"
                  src={a.image}
                  layout={"responsive"}
                  objectFit={"contain"}
                  priority
                />
              </div>
              <div className="bg-red-600 w-full h-fit rounded-b-md text-white p-4 flex flex-col gap-2">
                <p className="font-semibold text-center">
                  Espresso Coffee Blend Alacarte Blend 1kg
                </p>
                <p className="font-semibold text-center">Rp 110.000</p>
                <p className="text-sm text-center">Stock {"<"} 10</p>
                <button className="bg-white mx-4 rounded-md">
                  <div className="flex flex-row items-center justify-center gap-2 py-1">
                    <svg
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.55726 7.9496V4.79322M5.55726 4.79322V1.63684M5.55726 4.79322H8.71364M5.55726 4.79322H2.40088"
                        stroke="#D63031"
                        strokeWidth="1.09259"
                        strokeLinecap="round"
                      />
                    </svg>

                    <p className="text-red-600">Keranjang</p>
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
