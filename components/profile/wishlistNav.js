import Image from "next/image";
import ProductFour from "/public/static/images/product4.jpg";

const WishlistNav = () => {
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
  ];
  return (
    <>
      <div className="w-full">
        <div className="w-full py-3 flex">
          <p className="text-xl font-bold">Wishlist</p>
        </div>
      </div>
      <div className="h-full w-full">
        <div className="grid grid-cols-4  grid-flow-row gap-x-4 gap-y-5">
          {products.map((a, id) => {
            return (
              <div className="">
                <div className="">
                  <div className="relative">
                    <div className="absolute bottom-4 right-4 z-10">
                      <svg
                        width="22"
                        height="18"
                        viewBox="0 0 22 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3152 3.25076L11.2593 4.73439L12.2034 3.25076C13.0052 1.99084 14.4246 1.17642 16.0604 1.17642C18.6111 1.17642 20.7027 3.26801 20.7027 5.81871C20.7027 6.92234 20.1909 8.13075 19.269 9.38792C18.3556 10.6335 17.1133 11.826 15.8319 12.8745C14.556 13.9184 13.2745 14.7926 12.3089 15.4071C11.8889 15.6743 11.5307 15.8912 11.2614 16.0501C10.9918 15.8899 10.633 15.6713 10.2123 15.4019C9.24631 14.7836 7.9643 13.9047 6.68787 12.8574C5.40589 11.8056 4.16298 10.6111 3.2491 9.36695C2.32604 8.11034 1.81588 6.9085 1.81588 5.81871C1.81588 3.26801 3.90746 1.17642 6.45816 1.17642C8.09399 1.17642 9.51341 1.99084 10.3152 3.25076Z"
                          fill="#D63031"
                          stroke="#D63031"
                          strokeWidth="2.23816"
                        />
                      </svg>
                    </div>
                    <Image
                      src={a.image}
                      className="w-40 md:w-full rounded-t-md"
                      layout={"responsive"}
                      objectFit={"cover"}
                      priority
                    />
                  </div>
                </div>

                <div className="w-40 md:w-full lg:w-full h-auto bg-red-600 justify-center items-center text-center py-3 rounded-b-md gap-y-1 flex flex-col">
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Expresso Coffee Blend
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Alacarte Blend 1kg
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white py-1">
                      Rp 100.000
                    </p>
                  </div>
                  <div>
                    <p className="text-xs ml-2 text-white py-1">
                      Stock {">"} 100
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <div className="bg-white w-full px-3 rounded-md">
                      <div className="flex items-center justify-center gap-x-2 py-1">
                        <div>
                          <svg
                            width="6"
                            height="7"
                            viewBox="0 0 6 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.99935 5.94652V3.39199M2.99935 3.39199V0.837463M2.99935 3.39199H5.55388M2.99935 3.39199H0.444824"
                              stroke="#D63031"
                              stroke-width="0.884259"
                              stroke-linecap="round"
                            />
                          </svg>
                        </div>
                        <div className="text-xs font-semibold text-red-600">
                          Keranjang
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WishlistNav;
