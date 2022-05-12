export default function BrandPilihan() {
  return (
    <>
      {/* Heading */}
      <div className="flex lg:mx-14 md:mx-14 justify-between mb-1 lg:mb-6 lg:text-md ml-3.5">
        <div className="font-bold text-black mt-5 lg:mt-10 mb-1 lg:mb-6 text-md lg:text-lg">
          Brand Pilihan
        </div>
        <a className="" href="#">
          <div className="mt-5 lg:mt-10 text-sm md:text-md lg:text-lg flex items-center justify-center mr-3.5">
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
      <div className="grid grid-cols-2  md:grid-cols-5 gap-2 md:gap-4 md:mx-[58px] mx-3.5">
        <div className="h-auto justify-center items-center md:drop-shadow-xl">
          <img
            className="w-full rounded-lg md:rounded-t-md md:rounded-b-none"
            src="/static/images/mesin1.png"
          />
          <div className="hidden md:block lg:block">
            <div className="bg-[#D63031] text-white items-center text-center justify-center h-11 flex lg:text-md rounded-br-md font-semibold rounded-bl-md">
              La Marzocco
            </div>
          </div>
          <div className="flex justify-center items-center md:hidden lg:hidden z-10">
            <div className="text-[#D63031] bg-white rounded-t-md w-24 text-center text-xs py-1 -mt-6 font-bold">
              La Marzocco
            </div>
          </div>
        </div>

        <div className="h-auto justify-center items-center md:drop-shadow-xl">
          <img
            className="w-full rounded-lg md:rounded-t-md md:rounded-b-none"
            src="/static/images/mesin8.png"
          />
          <div className="hidden md:block lg:block">
            <div className="bg-[#D63031] text-white items-center text-center justify-center h-11 flex lg:text-md rounded-br-md font-semibold rounded-bl-md">
              Bezzera
            </div>
          </div>
          <div className="flex justify-center items-center md:hidden lg:hidden z-10">
            <div className="text-[#D63031] bg-white rounded-t-md w-24 text-center text-xs py-1 -mt-6 font-bold">
              Bezzera
            </div>
          </div>
        </div>

        <div className="h-auto justify-center items-center md:drop-shadow-xl">
          <img
            className="w-full rounded-lg md:rounded-t-md md:rounded-b-none"
            src="/static/images/mesin3.png"
          />
          <div className="hidden md:block lg:block">
            <div className="bg-[#D63031] text-white items-center text-center justify-center h-11 flex lg:text-md rounded-br-md font-semibold rounded-bl-md">
              Mahlkonig
            </div>
          </div>
          <div className="flex justify-center items-center md:hidden lg:hidden z-10">
            <div className="text-[#D63031] bg-white rounded-t-md w-24 text-center text-xs py-1 -mt-6 font-bold">
              Mahlkonig
            </div>
          </div>
        </div>

        <div className="h-auto justify-center items-center md:drop-shadow-xl">
          <img
            className="w-full rounded-lg md:rounded-t-md md:rounded-b-none"
            src="/static/images/mesin6.png"
          />
          <div className="hidden md:block lg:block">
            <div className="bg-[#D63031] text-white items-center text-center justify-center h-11 flex lg:text-md rounded-br-md font-semibold rounded-bl-md">
              Mazzer
            </div>
          </div>
          <div className="flex justify-center items-center md:hidden lg:hidden z-10">
            <div className="text-[#D63031] bg-white rounded-t-md w-24 text-center text-xs py-1 -mt-6 font-bold">
              Mazzer
            </div>
          </div>
        </div>

        <div className="h-auto justify-center items-center drop-shadow-xl hidden lg:block md:block">
          <img
            className="w-full rounded-tr-md rounded-tl-md"
            src="/static/images/mesin5.png"
          />
          <div className="bg-[#D63031] text-white items-center text-center justify-center h-11 flex lg:text-md rounded-br-md font-semibold rounded-bl-md">
            Mazzer
          </div>
        </div>
      </div>
    </>
  );
}
