import Image from "next/image";
import Product2 from "../../public/static/images/product2.jpg";
import Product4 from "../../public/static/images/product4.jpg";
import Product5 from "../../public/static/images/product5.jpg";
import Product7 from "../../public/static/images/product7.jpg";

const TerakhirDilihat = () => {
  return (
    <div className="py-5">
      <div className="flex py-2 justify-between">
        <div className="font-bold">Terakhir Dilihat</div>
        <div>
          <button className="flex items-center gap-2">
            <span className="text-red-600 font-bold">Lihat Semua</span>
            <svg
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.344158 0.330173C0.123793 0.541647 -9.17463e-07 0.828428 -9.04392e-07 1.12745C-8.91321e-07 1.42648 0.123793 1.71326 0.344158 1.92473L6.16269 7.50681L0.344159 13.0889C0.130039 13.3016 0.0115591 13.5864 0.0142371 13.8821C0.016915 14.1778 0.140537 14.4606 0.358477 14.6697C0.576417 14.8788 0.871237 14.9974 1.17944 15C1.48764 15.0025 1.78457 14.8889 2.00626 14.6834L8.65584 8.30409C8.87621 8.09261 9 7.80583 9 7.50681C9 7.20778 8.87621 6.921 8.65584 6.70953L2.00626 0.330173C1.78583 0.118764 1.4869 3.28408e-07 1.17521 3.42033e-07C0.863519 3.55657e-07 0.56459 0.118764 0.344158 0.330173Z"
                fill="#D63031"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-5 gap-y-3 w-full">
        <div className="drop-shadow-md">
          <div className="">
            <div className="relative">
              <div className="absolute bottom-2 right-2 z-20">
                <svg
                  width="18"
                  height="14"
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
                className="rounded-t-md"
                src={Product2}
                objectFit={"cover"}
                layout={"responsive"}
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
              <p className="text-xs font-semibold text-white">Rp 100.000</p>
            </div>
            <div>
              <p className="text-xs ml-2 text-white py-1">Stock {">"} 100</p>
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
        <div className="drop-shadow-md">
          <div className="">
            <div className="relative">
              <div className="absolute bottom-2 right-2 z-20">
                <svg
                  width="18"
                  height="14"
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
                className="rounded-t-md"
                src={Product4}
                objectFit={"cover"}
                layout={"responsive"}
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
              <p className="text-xs font-semibold text-white">Rp 100.000</p>
            </div>
            <div>
              <p className="text-xs ml-2 text-white py-1">Stock {">"} 100</p>
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
        <div className="drop-shadow-md">
          <div className="">
            <div className="relative">
              <div className="absolute bottom-2 right-2 z-20">
                <svg
                  width="18"
                  height="14"
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
                className="rounded-t-md"
                src={Product5}
                objectFit={"cover"}
                layout={"responsive"}
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
              <p className="text-xs font-semibold text-white">Rp 100.000</p>
            </div>
            <div>
              <p className="text-xs ml-2 text-white py-1">Stock {">"} 100</p>
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
        <div className="drop-shadow-md">
          <div className="">
            <div className="relative">
              <div className="absolute bottom-2 right-2 z-20">
                <svg
                  width="18"
                  height="14"
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
                className="rounded-t-md"
                src={Product7}
                objectFit={"cover"}
                layout={"responsive"}
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
              <p className="text-xs font-semibold text-white">Rp 100.000</p>
            </div>
            <div>
              <p className="text-xs ml-2 text-white py-1">Stock {">"} 100</p>
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
      </div>
    </div>
  );
};

export default TerakhirDilihat;
