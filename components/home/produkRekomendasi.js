import Link from "next/link";
import Image from "next/image";

import Rekomendasi1 from "../../public/static/images/rekomendasi1.png";
import Rekomendasi2 from "../../public/static/images/rekomendasi2.png";
import Rekomendasi3 from "../../public/static/images/rekomendasi3.png";

export default function ProductRekomendasi() {
  return (
    <>
      {/* Heading */}
      <div className="flex lg:mx-14 md:mx-14 justify-between mb-1 lg:mb-6 lg:text-md ml-3.5">
        <div className="font-bold text-black mt-5 lg:mt-10 mb-1 md:mb-4 text-md lg:text-lg">
          Produk Rekomendasi
        </div>
        <Link href={"/auth/productRekomendasi"}>
          <button className="font-bold text-black mt-5 lg:mt-10 mb-1 md:mb-4 text-md lg:text-lg flex items-center">
            <span className="pr-2 font-bold text-red-600">Lihat Semua</span>
            <svg
              className="justify-center items-center"
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.344158 0.830173C0.123793 1.04165 -9.17463e-07 1.32843 -9.04392e-07 1.62745C-8.91321e-07 1.92648 0.123793 2.21326 0.344158 2.42473L6.16269 8.00681L0.344159 13.5889C0.130039 13.8016 0.0115591 14.0864 0.0142371 14.3821C0.016915 14.6778 0.140537 14.9606 0.358477 15.1697C0.576417 15.3788 0.871237 15.4974 1.17944 15.5C1.48764 15.5025 1.78457 15.3889 2.00626 15.1834L8.65584 8.80409C8.87621 8.59261 9 8.30583 9 8.00681C9 7.70778 8.87621 7.421 8.65584 7.20953L2.00626 0.830173C1.78583 0.618764 1.4869 0.5 1.17521 0.5C0.863519 0.5 0.56459 0.618764 0.344158 0.830173Z"
                fill="#D63031"
              />
            </svg>
          </button>
        </Link>
      </div>

      {/* Content */}
      <div className="ml-3.5 md:mx-14">
        <div className="flex md:grid md:grid-cols-3 md:gap-4 gap-2 overflow-x-scroll md:overflow-hidden">
          <div className="">
            <div className="">
              <div className="relative">
                <div className="absolute"></div>
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
                  className="w-60 md:w-full rounded-t-md"
                  src={Rekomendasi1}
                  layout={"responsive"}
                  objectFit={"cover"}
                />
              </div>
            </div>

            <div className="w-60 md:w-full bg-red-600 text-white justify-center items-center text-center py-2 rounded-br-md rounded-bl-md">
              <p className="text-xs pt-2 font-semibold">
                Expresso Coffee Blend
              </p>
              <p className="text-xs pb-2 font-semibold">Alacarte Blend 1kg</p>
              <span className="text-xs font-semi  bold">Rp 100.000</span>

              <a href="#">
                <div className="bg-white py-1 rounded-md md:font-bold m-3 md:m-3 text-[#D63031] flex justify-center items-center">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.49953 13.4671V7.50701M7.49953 7.50701V1.54694M7.49953 7.50701H13.4596M7.49953 7.50701H1.53946"
                      stroke="#D63031"
                      strokeWidth="2.0631"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="lg:pl-2 pl-2 text-xs md:text-md lg:text-md">
                    Keranjang
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="relative">
                <div className="absolute"></div>
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
                  className="w-60 md:w-full rounded-t-md"
                  src={Rekomendasi2}
                  layout={"responsive"}
                  objectFit={"cover"}
                />
              </div>
            </div>

            <div className="w-60 md:w-full bg-red-600 text-white justify-center items-center text-center py-2 rounded-br-md rounded-bl-md">
              <p className="text-xs pt-2 font-semibold">
                Expresso Coffee Blend
              </p>
              <p className="text-xs pb-2 font-semibold">Alacarte Blend 1kg</p>
              <span className="text-xs font-semi  bold">Rp 100.000</span>

              <a href="#">
                <div className="bg-white py-1 rounded-md md:font-bold m-3 md:m-3 text-[#D63031] flex justify-center items-center">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.49953 13.4671V7.50701M7.49953 7.50701V1.54694M7.49953 7.50701H13.4596M7.49953 7.50701H1.53946"
                      stroke="#D63031"
                      strokeWidth="2.0631"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="lg:pl-2 pl-2 text-xs md:text-md lg:text-md">
                    Keranjang
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className=" mr-3.5 md:mr-0 lg:mr-0">
            <div className="">
              <div className="relative">
                <div className="absolute"></div>
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
                  className="w-60 md:w-full rounded-t-md"
                  src={Rekomendasi3}
                  layout={"responsive"}
                  objectFit={"cover"}
                />
              </div>
            </div>

            <div className="w-60 md:w-full bg-red-600 text-white justify-center items-center text-center py-2 rounded-br-md rounded-bl-md">
              <p className="text-xs pt-2 font-semibold">
                Expresso Coffee Blend
              </p>
              <p className="text-xs pb-2 font-semibold">Alacarte Blend 1kg</p>
              <span className="text-xs font-semi  bold">Rp 100.000</span>

              <a href="#">
                <div className="bg-white py-1 rounded-md md:font-bold m-3 md:m-3 text-[#D63031] flex justify-center items-center">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.49953 13.4671V7.50701M7.49953 7.50701V1.54694M7.49953 7.50701H13.4596M7.49953 7.50701H1.53946"
                      stroke="#D63031"
                      strokeWidth="2.0631"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="lg:pl-2 pl-2 text-xs md:text-md lg:text-md">
                    Keranjang
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
