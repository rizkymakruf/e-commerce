import Image from "next/image";
import La1 from "/public/static/images/la-product1.png";
import La2 from "/public/static/images/la-product2.png";
import La3 from "/public/static/images/la-product3.png";
import La4 from "/public/static/images/la-product4.png";
import La5 from "/public/static/images/la-product5.png";

// public/static/images/product7.jpg
const Product = () => {
  const products = [
    {
      image: La1,
    },
    {
      image: La2,
    },
    {
      image: La3,
    },
    {
      image: La4,
    },
    {
      image: La5,
    },
  ];
  return (
    <>
      <div className="sticky z-30 top-24 w-full">
        <div className="w-full py-3 flex bg-white px-14 gap-x-3 items-center">
          <p className="text-xl font-bold">La Marzocco</p>
          <p className="text-sm text-gray-600">
            {"("}5 Produk{")"}
          </p>
        </div>
      </div>
      <div className="h-full w-full bg-white px-14">
        <div className="grid grid-cols-5  grid-flow-row gap-x-4 gap-y-5">
          {products.map((a, id) => {
            return (
              <div className="drop-shadow-md">
                <div className="">
                  <div className="relative">
                    {/* <div className="absolute z-10">
                      <svg
                        className="absolute top-3"
                        width="70"
                        height="21"
                        viewBox="0 0 70 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="69.8519"
                          height="19.8272"
                          transform="translate(0 0.2099)"
                          fill="#D63031"
                        />
                        <path
                          d="M12.5632 14.1235H10.7937V7.18011H8.25659V5.6684H15.1003V7.18011H12.5632V14.1235ZM18.3757 8.8266C17.9812 8.8266 17.655 8.95355 17.3972 9.20746C17.1433 9.46136 17.0007 9.7973 16.9695 10.2153H19.7234C19.7039 9.78558 19.573 9.44769 19.3308 9.2016C19.0925 8.9516 18.7742 8.8266 18.3757 8.8266ZM19.7585 12.2836H21.3464C21.2175 12.8969 20.8894 13.3813 20.3621 13.7368C19.8386 14.0883 19.1824 14.2641 18.3933 14.2641C17.4089 14.2641 16.6414 13.9711 16.0906 13.3852C15.5398 12.7953 15.2644 11.975 15.2644 10.9243C15.2644 9.87347 15.5417 9.0434 16.0964 8.43402C16.6511 7.82465 17.4089 7.51996 18.3699 7.51996C19.323 7.51996 20.0652 7.80707 20.5964 8.38129C21.1316 8.95551 21.3992 9.75629 21.3992 10.7836V11.3051H16.9636V11.393C16.9753 11.8735 17.1121 12.2543 17.3738 12.5356C17.6394 12.8129 17.9949 12.9516 18.4402 12.9516C18.7761 12.9516 19.0574 12.895 19.2839 12.7817C19.5105 12.6645 19.6687 12.4985 19.7585 12.2836ZM22.7996 14.1235V7.66058H24.4519V8.69183H24.5574C24.6433 8.36371 24.8386 8.09222 25.1433 7.87738C25.4519 7.66254 25.8093 7.55511 26.2156 7.55511C26.5085 7.55511 26.7312 7.58246 26.8835 7.63715V9.18988C26.7039 9.11957 26.4343 9.08441 26.075 9.08441C25.6023 9.08441 25.2214 9.21527 24.9324 9.47699C24.6472 9.73871 24.5046 10.0942 24.5046 10.5434V14.1235H22.7996ZM31.8347 14.2231C31.3777 14.2231 30.9734 14.1254 30.6218 13.9301C30.2742 13.7348 30.0144 13.4614 29.8425 13.1098H29.7371V14.1235H28.0847V5.19379H29.7898V8.69183H29.8953C30.0593 8.33636 30.3132 8.05902 30.657 7.8598C31.0007 7.65668 31.3933 7.55511 31.8347 7.55511C32.6511 7.55511 33.2917 7.85004 33.7566 8.43988C34.2214 9.02972 34.4539 9.84613 34.4539 10.8891C34.4539 11.9243 34.2195 12.7387 33.7507 13.3325C33.2859 13.9262 32.6472 14.2231 31.8347 14.2231ZM32.3093 9.49457C32.0476 9.15472 31.6921 8.9848 31.2429 8.9848C30.7937 8.9848 30.4363 9.15668 30.1707 9.50043C29.9089 9.84027 29.7761 10.3051 29.7722 10.895C29.7761 11.4809 29.9089 11.9457 30.1707 12.2895C30.4363 12.6293 30.7937 12.7993 31.2429 12.7993C31.696 12.7993 32.0515 12.6293 32.3093 12.2895C32.571 11.9496 32.7019 11.4828 32.7019 10.8891C32.7019 10.2993 32.571 9.83441 32.3093 9.49457ZM38.1746 12.9399C38.5691 12.9399 38.8992 12.8286 39.1648 12.6059C39.4304 12.3832 39.5632 12.1078 39.5632 11.7797V11.3051L38.2566 11.3871C37.53 11.4379 37.1667 11.6977 37.1667 12.1664C37.1667 12.4047 37.2585 12.5942 37.4421 12.7348C37.6296 12.8715 37.8738 12.9399 38.1746 12.9399ZM37.6121 14.2231C36.9871 14.2231 36.4773 14.0453 36.0828 13.6899C35.6921 13.3344 35.4968 12.8637 35.4968 12.2778C35.4968 11.6957 35.7117 11.2387 36.1414 10.9067C36.575 10.5707 37.1941 10.3793 37.9988 10.3325L39.5632 10.2387V9.71136C39.5632 9.44183 39.4695 9.2348 39.282 9.09027C39.0945 8.94183 38.825 8.86761 38.4734 8.86761C37.8406 8.86761 37.4519 9.06683 37.3074 9.46527H35.7371C35.7917 8.86761 36.073 8.39496 36.5808 8.0473C37.0925 7.69574 37.7546 7.51996 38.5671 7.51996C39.4187 7.51996 40.0769 7.71136 40.5417 8.09418C41.0105 8.47699 41.2449 9.01605 41.2449 9.71136V14.1235H39.5925V13.2797H39.4871C39.3191 13.5766 39.0691 13.809 38.7371 13.977C38.405 14.1411 38.03 14.2231 37.6121 14.2231ZM42.9207 14.1235V7.66058H44.573V8.69183H44.6785C44.7644 8.36371 44.9597 8.09222 45.2644 7.87738C45.573 7.66254 45.9304 7.55511 46.3367 7.55511C46.6296 7.55511 46.8523 7.58246 47.0046 7.63715V9.18988C46.825 9.11957 46.5554 9.08441 46.196 9.08441C45.7234 9.08441 45.3425 9.21527 45.0535 9.47699C44.7683 9.73871 44.6257 10.0942 44.6257 10.5434V14.1235H42.9207ZM53.9949 7.66058V14.1235H52.3425V13.0864H52.2371C51.9167 13.8715 51.2878 14.2641 50.3503 14.2641C49.6511 14.2641 49.0984 14.0532 48.6921 13.6313C48.2898 13.2055 48.0886 12.6196 48.0886 11.8735V7.66058H49.7937V11.434C49.7937 12.3325 50.1902 12.7817 50.9832 12.7817C51.4011 12.7817 51.7234 12.6586 51.95 12.4125C52.1765 12.1664 52.2898 11.8246 52.2898 11.3871V7.66058H53.9949Z"
                          fill="white"
                        />
                      </svg>
                    </div> */}
                    {/* <div className="absolute bottom-4 right-4 z-10">
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
                    </div> */}
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
                      Brand Name
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Product Name
                    </p>
                  </div>
                  <div>
                    <p className="text-xs ml-2 text-white py-1">
                      Stock {">"} 100
                    </p>
                  </div>
                  {/* <div className="flex gap-x-2 w-full items-center justify-between px-20 py-3"> */}
                  <div>
                    <p className="text-xs font-semibold text-white py-1">
                      Rp 299.000
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-white hover:bg-gray-200 w-full px-3 rounded-md">
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
                {/* </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;