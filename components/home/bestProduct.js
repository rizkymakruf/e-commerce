import Link from "next/link";

export default function BestProduct() {
  return (
    <div className="w-full">
      {/* Headding */}
      <div className="flex lg:mx-14 md:mx-14 justify-between mb-1 lg:mb-6 lg:text-md ml-3.5">
        <div className="font-bold text-black mb-1 lg:mb-6 text-md lg:text-lg">
          Pilihan Kopi Terbaik
        </div>
        <a className="lg:hidden" href="#">
          <div className="text-sm md:text-md lg:text-lg flex items-center justify-center mr-3.5">
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
          </div>
        </a>
      </div>

      {/* Content */}
      <div className="flex md:grid md:grid-cols-6 gap-2 md:gap-3 md:mx-14 md:overflow-hidden overflow-hidden overflow-x-scroll ml-3.5">
        <Link href={"/auth/detail"}>
          <button className="w-28 md:w-full flex-none justify-center items-center">
            <img
              className="w-full rounded-tr-md rounded-tl-md"
              src="/static/images/product1.jpg"
            />
            <div className="bg-red-600 text-white items-center text-center justify-center h-11 flex text-[10px] lg:text-xs rounded-br-md font-semibold rounded-bl-md shadow-lg ">
              Expresso Coffee Blend <br />
              Red Blend 1kg
            </div>
          </button>
        </Link>

        <div className="w-28 md:w-full flex-none justify-center items-center">
          <img
            className="w-full rounded-tr-md rounded-tl-md"
            src="/static/images/product3.jpg"
          />
          <div className="bg-red-600 text-white items-center text-center justify-center h-11 flex text-[10px] lg:text-xs rounded-br-md font-semibold rounded-bl-md">
            Flores Manggarai <br />
            Yellow Caturra 250gr
          </div>
        </div>

        <div className="w-28 md:w-full flex-none justify-center items-center">
          <img
            className="w-full rounded-tr-md rounded-tl-md"
            src="/static/images/product1.jpg"
          />
          <div className="bg-red-600 text-white items-center text-center justify-center h-11 flex text-[10px] lg:text-xs rounded-br-md font-semibold rounded-bl-md">
            Expresso Coffee Blend <br />
            Merah Series 1Kg
          </div>
        </div>

        <div className="w-28 md:w-full flex-none justify-center items-center">
          <img
            className="w-full rounded-tr-md rounded-tl-md"
            src="/static/images/product3.jpg"
          />
          <div className="bg-red-600 text-white items-center text-center justify-center h-11 flex text-[10px] lg:text-xs rounded-br-md font-semibold rounded-bl-md">
            Bali Wanagiri 250gr
          </div>
        </div>

        <div className="w-28 md:w-full flex-none justify-center items-center">
          <img
            className="w-full rounded-tr-md rounded-tl-md"
            src="/static/images/product1.jpg"
          />
          <div className="bg-red-600 text-white items-center text-center justify-center h-11 flex text-[10px] lg:text-xs rounded-br-md font-semibold rounded-bl-md">
            Expresso Coffee Blend <br />
            Putih Series 1Kg
          </div>
        </div>

        <div className="w-28 md:w-full flex-none justify-center items-center md:hidden">
          <img
            className="w-full rounded-tr-md rounded-tl-md"
            src="/static/images/product3.jpg"
          />
          <div className="bg-red-600 text-white items-center text-center justify-center h-11 flex text-[10px] lg:text-xs rounded-br-md font-semibold rounded-bl-md">
            Expresso Coffee Blend <br />
            Putih Series 1Kg
          </div>
        </div>

        <div className="w-28 md:w-full flex-none justify-center items-center md:hidden">
          <img
            className="w-full rounded-tr-md rounded-tl-md"
            src="/static/images/product1.jpg"
          />
          <div className="bg-red-600 text-white items-center text-center justify-center h-11 flex text-[10px] lg:text-xs rounded-br-md font-semibold rounded-bl-md">
            Expresso Coffee Blend <br />
            Putih Series 1Kg
          </div>
        </div>

        <div className="mr-3.5 md:hidden">
          <div className="w-28 md:w-full flex-none justify-center items-center ">
            <img
              className="w-full rounded-tr-md rounded-tl-md"
              src="/static/images/product3.jpg"
            />
            <div className="bg-red-600 text-white items-center text-center justify-center h-11 flex text-[10px] lg:text-xs rounded-br-md font-semibold rounded-bl-md">
              Expresso Coffee Blend <br />
              Putih Series 1Kg
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="w-28 md:w-full flex flex-col justify-between items-center">
            <div className="grid grid-rows-2 grid-cols-2 gap-2 mb-3">
              <img
                className="w-full rounded-md"
                src="/static/images/product1.jpg"
              />
              <img
                className="w-full rounded-md"
                src="/static/images/product3.jpg"
              />
              <img
                className="w-full rounded-md"
                src="/static/images/product1.jpg"
              />
              <img
                className="w-full rounded-md"
                src="/static/images/product3.jpg"
              />
            </div>
            <div className="bg-red-600  flex justify-center items-center h-8 rounded-md w-full bottom-0">
              <span className="text-white text-xs md:text-xs pr-2 font-semibold ">
                Lihat semuanya
              </span>
              <svg
                className="justify-center items-center"
                width="10"
                height="12"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.844327 0.463902C0.623961 0.675376 0.500167 0.962158 0.500167 1.26118C0.500167 1.56021 0.623962 1.84699 0.844327 2.05846L6.66287 7.64055L0.844328 13.2226C0.630208 13.4353 0.511728 13.7202 0.514406 14.0159C0.517084 14.3115 0.640706 14.5944 0.858646 14.8035C1.07659 15.0125 1.37141 15.1311 1.67961 15.1337C1.98781 15.1363 2.28474 15.0226 2.50643 14.8172L9.15602 8.43783C9.37639 8.22636 9.50018 7.93957 9.50018 7.64055C9.50018 7.34153 9.37639 7.05474 9.15602 6.84327L2.50643 0.463902C2.286 0.252492 1.98707 0.133728 1.67538 0.133728C1.36369 0.133728 1.06476 0.252492 0.844327 0.463902Z"
                  fill="#D63031"
                />
                <path
                  d="M0.844327 0.463902C0.623961 0.675376 0.500167 0.962158 0.500167 1.26118C0.500167 1.56021 0.623962 1.84699 0.844327 2.05846L6.66287 7.64055L0.844328 13.2226C0.630208 13.4353 0.511728 13.7202 0.514406 14.0159C0.517084 14.3115 0.640706 14.5944 0.858646 14.8035C1.07659 15.0125 1.37141 15.1311 1.67961 15.1337C1.98781 15.1363 2.28474 15.0226 2.50643 14.8172L9.15602 8.43783C9.37639 8.22636 9.50018 7.93957 9.50018 7.64055C9.50018 7.34153 9.37639 7.05474 9.15602 6.84327L2.50643 0.463902C2.286 0.252492 1.98707 0.133728 1.67538 0.133728C1.36369 0.133728 1.06476 0.252492 0.844327 0.463902Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
