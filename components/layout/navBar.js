import Category from "./category";
import { useState } from "react";
export default function NavBar() {
  const [category, setCategory] = useState(false);

  function Hovered() {
    !category ? null : setCategory(true);
  }

  return (
    <>
      <Category category={category} setCategory={setCategory} />
      <div className="md:bg-red-600 md:bg-opacity-70 md:backdrop-filter md:backdrop-blur-md bg-white w-full h-24 flex items-center justify-around  md:px-14 gap-4 fixed z-40 top-0">
        <a className="hidden md:block" href="/">
          <div className="hidden md:block">
            <div className="flex items-center gap-x-2 w-full">
              <img
                className="w-8 h-8 md:w-9 md:h-9"
                src="/static/images/logo.png"
              />
              <p className="text-white font-semibold text-sm whitespace-nowrap mr-8">
                PT SEMUA KOPI INDONESIA
              </p>
            </div>
          </div>
        </a>
        <div className="hidden md:block">
          <button
            className="flex items-center gap-x-2"
            onMouseOver={() => setCategory(true)}
            onMouseLeave={() => setCategory(false)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.28647"
                y="1"
                width="7.70833"
                height="7.70833"
                rx="1.5"
                stroke="white"
              />
              <rect
                x="1.28647"
                y="11.2916"
                width="7.70833"
                height="7.70833"
                rx="1.5"
                stroke="white"
              />
              <rect
                x="11.5785"
                y="1"
                width="7.70833"
                height="7.70833"
                rx="1.5"
                stroke="white"
              />
              <rect
                x="11.5785"
                y="11.2916"
                width="7.70833"
                height="7.70833"
                rx="1.5"
                stroke="white"
              />
            </svg>
            <span className="text-white font-light">Kategori</span>
          </button>
          <div
            className="absolute bg-transparent w-24 h-10"
            onMouseOver={Hovered}
            onMouseLeave={() => setCategory(false)}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="flex items-center justify-between px-4 md:hidden">
            <div className="flex items-center gap-x-2">
              <a href="/">
                <img className="w-6 h-6" src="/static/images/logo.png" />
              </a>
            </div>
            <div className="flex items-center gap-2">
              {/* notif */}
              <a href="#">
                <div>
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.646 2.24799C7.79541 1.8787 8.0517 1.56244 8.38202 1.33976C8.71234 1.11707 9.10163 0.998108 9.5 0.998108C9.89837 0.998108 10.2877 1.11707 10.618 1.33976C10.9483 1.56244 11.2046 1.8787 11.354 2.24799C12.8328 2.65467 14.1371 3.53554 15.0668 4.75532C15.9964 5.9751 16.4999 7.46633 16.5 8.99998V13.697L18.332 16.445C18.4325 16.5956 18.4902 16.7706 18.499 16.9515C18.5078 17.1323 18.4673 17.3121 18.3819 17.4718C18.2965 17.6314 18.1693 17.7648 18.014 17.8579C17.8587 17.9509 17.681 18 17.5 18H12.965C12.8446 18.8331 12.4281 19.5949 11.7917 20.1459C11.1553 20.6969 10.3418 21.0002 9.5 21.0002C8.65824 21.0002 7.84466 20.6969 7.2083 20.1459C6.57193 19.5949 6.1554 18.8331 6.035 18H1.5C1.31895 18 1.1413 17.9509 0.985988 17.8579C0.830676 17.7648 0.703533 17.6314 0.618123 17.4718C0.532713 17.3121 0.492242 17.1323 0.501025 16.9515C0.509809 16.7706 0.567518 16.5956 0.667997 16.445L2.5 13.697V8.99998C2.5 5.77598 4.68 3.05999 7.646 2.24799ZM8.086 18C8.18928 18.2926 8.38078 18.546 8.63412 18.7253C8.88746 18.9045 9.19016 19.0008 9.5005 19.0008C9.81084 19.0008 10.1135 18.9045 10.3669 18.7253C10.6202 18.546 10.8117 18.2926 10.915 18H8.085H8.086ZM9.5 3.99999C8.17391 3.99999 6.90215 4.52677 5.96446 5.46445C5.02678 6.40213 4.5 7.6739 4.5 8.99998V14C4.50004 14.1975 4.44158 14.3906 4.332 14.555L3.369 16H15.63L14.667 14.555C14.5578 14.3905 14.4997 14.1974 14.5 14V8.99998C14.5 7.6739 13.9732 6.40213 13.0355 5.46445C12.0978 4.52677 10.8261 3.99999 9.5 3.99999V3.99999Z"
                      fill="#969498"
                    />
                  </svg>
                </div>
              </a>
              {/* wishlist */}
              <a href="#">
                <div>
                  <svg
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1453 3.21916L11 4.62618L11.8547 3.21916C12.6822 1.85685 14.13 1 15.7727 1C18.3271 1 20.5 3.20794 20.5 6C20.5 7.2128 19.9648 8.51183 19.0401 9.83279C18.1217 11.1449 16.8769 12.3956 15.5992 13.4907C14.326 14.582 13.0481 15.4953 12.0859 16.1367C11.6463 16.4298 11.2746 16.6648 11.0019 16.8328C10.729 16.6635 10.3567 16.4265 9.91636 16.1312C8.95387 15.4857 7.67548 14.5676 6.40183 13.4729C5.12366 12.3743 3.87828 11.1215 2.95941 9.81105C2.03381 8.49098 1.5 7.19871 1.5 6C1.5 3.20794 3.67289 1 6.22727 1C7.86996 1 9.3178 1.85685 10.1453 3.21916Z"
                      stroke="#969498"
                      stroke-width="2"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <hr className="md:hidden pl-0 ml-0 w-full" />
          {/* searchbox */}
          <div className="px-4">
            <div className="absolute flex z-10 justify-center items-center translate-y-2 ml-3">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.2322 12.0639L17.9904 16.8221C18.1576 16.9895 18.2515 17.2164 18.2514 17.453C18.2513 17.6896 18.1573 17.9165 17.9899 18.0838C17.8226 18.251 17.5956 18.3449 17.359 18.3448C17.1224 18.3447 16.8955 18.2507 16.7283 18.0833L11.9701 13.3251C10.5477 14.4268 8.75901 14.9453 6.96792 14.775C5.17683 14.6047 3.51788 13.7585 2.32856 12.4085C1.13923 11.0585 0.508865 9.30615 0.565699 7.50788C0.622533 5.70961 1.3623 4.00054 2.6345 2.72834C3.9067 1.45614 5.61577 0.716374 7.41404 0.65954C9.21231 0.602706 10.9647 1.23307 12.3147 2.4224C13.6647 3.61172 14.5109 5.27067 14.6812 7.06176C14.8514 8.85285 14.333 10.6415 13.2313 12.0639H13.2322ZM7.6382 13.0377C9.04558 13.0377 10.3953 12.4786 11.3905 11.4834C12.3857 10.4883 12.9447 9.13854 12.9447 7.73116C12.9447 6.32378 12.3857 4.97404 11.3905 3.97887C10.3953 2.9837 9.04558 2.42462 7.6382 2.42462C6.23082 2.42462 4.88108 2.9837 3.88591 3.97887C2.89075 4.97404 2.33167 6.32378 2.33167 7.73116C2.33167 9.13854 2.89075 10.4883 3.88591 11.4834C4.88108 12.4786 6.23082 13.0377 7.6382 13.0377Z"
                  fill="#AEAEAE"
                />
              </svg>
            </div>
            <input
              className="p-2 w-full bg-[#F2F2F2] rounded-full pl-10 items-center focus:outline-none text-xs md:text-sm"
              placeholder="Kopi, alat kopi..."
            />
          </div>
        </div>
        {/* end search box */}
        <div className="hidden md:block">
          <svg
            width="33"
            height="30"
            viewBox="0 0 33 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.1162 12.6332H22.1161H8.96445L7.99182 9.27907C7.99181 9.27904 7.9918 9.27901 7.9918 9.27898C7.78581 8.5658 7.43269 8.15583 7.06697 7.92693C6.70448 7.70006 6.34413 7.66006 6.13456 7.66006H3.45738C3.03134 7.66006 2.68673 8.00507 2.68673 8.43068C2.68673 8.85635 3.03171 9.20129 3.45736 9.20129H6.13423L6.13588 9.20129C6.1667 9.20127 6.21057 9.20125 6.26711 9.24552C6.33009 9.29484 6.42589 9.41357 6.50921 9.70092L9.96295 22.3938L9.96324 22.3949C10.0564 22.7275 10.3596 22.9572 10.7052 22.9572H19.142C19.4671 22.9572 19.7574 22.7535 19.8673 22.4472L19.8682 22.4447L22.841 13.6645C22.8412 13.6641 22.8413 13.6636 22.8415 13.6632C22.9258 13.4274 22.8905 13.165 22.7466 12.9605C22.6754 12.8595 22.581 12.777 22.4713 12.72C22.3616 12.663 22.2398 12.6333 22.1162 12.6332ZM21.0252 14.1747L18.5974 21.4163H11.292L9.39497 14.1747H21.0252ZM17.4744 23.9151C16.5284 23.9151 15.7619 24.6816 15.7619 25.6276C15.7619 26.5735 16.5284 27.3401 17.4744 27.3401C18.4203 27.3401 19.1869 26.5735 19.1869 25.6276C19.1869 24.6816 18.4203 23.9151 17.4744 23.9151ZM11.8494 23.9151C10.9034 23.9151 10.1369 24.6816 10.1369 25.6276C10.1369 26.5735 10.9034 27.3401 11.8494 27.3401C12.7953 27.3401 13.5619 26.5735 13.5619 25.6276C13.5619 24.6816 12.7953 23.9151 11.8494 23.9151Z"
              fill="#AEAEAE"
            />
            <path
              d="M22.1162 12.6332H22.1161H8.96445L7.99182 9.27907C7.99181 9.27904 7.9918 9.27901 7.9918 9.27898C7.78581 8.5658 7.43269 8.15583 7.06697 7.92693C6.70448 7.70006 6.34413 7.66006 6.13456 7.66006H3.45738C3.03134 7.66006 2.68673 8.00507 2.68673 8.43068C2.68673 8.85635 3.03171 9.20129 3.45736 9.20129H6.13423L6.13588 9.20129C6.1667 9.20127 6.21057 9.20125 6.26711 9.24552C6.33009 9.29484 6.42589 9.41357 6.50921 9.70092L9.96295 22.3938L9.96324 22.3949C10.0564 22.7275 10.3596 22.9572 10.7052 22.9572H19.142C19.4671 22.9572 19.7574 22.7535 19.8673 22.4472L19.8682 22.4447L22.841 13.6645C22.8412 13.6641 22.8413 13.6636 22.8415 13.6632C22.9258 13.4274 22.8905 13.165 22.7466 12.9605C22.6754 12.8595 22.581 12.777 22.4713 12.72C22.3616 12.663 22.2398 12.6333 22.1162 12.6332ZM21.0252 14.1747L18.5974 21.4163H11.292L9.39497 14.1747H21.0252ZM17.4744 23.9151C16.5284 23.9151 15.7619 24.6816 15.7619 25.6276C15.7619 26.5735 16.5284 27.3401 17.4744 27.3401C18.4203 27.3401 19.1869 26.5735 19.1869 25.6276C19.1869 24.6816 18.4203 23.9151 17.4744 23.9151ZM11.8494 23.9151C10.9034 23.9151 10.1369 24.6816 10.1369 25.6276C10.1369 26.5735 10.9034 27.3401 11.8494 27.3401C12.7953 27.3401 13.5619 26.5735 13.5619 25.6276C13.5619 24.6816 12.7953 23.9151 11.8494 23.9151Z"
              fill="white"
            />
            <path
              d="M22.1162 12.6332H22.1161H8.96445L7.99182 9.27907C7.99181 9.27904 7.9918 9.27901 7.9918 9.27898C7.78581 8.5658 7.43269 8.15583 7.06697 7.92693C6.70448 7.70006 6.34413 7.66006 6.13456 7.66006H3.45738C3.03134 7.66006 2.68673 8.00507 2.68673 8.43068C2.68673 8.85635 3.03171 9.20129 3.45736 9.20129H6.13423L6.13588 9.20129C6.1667 9.20127 6.21057 9.20125 6.26711 9.24552C6.33009 9.29484 6.42589 9.41357 6.50921 9.70092L9.96295 22.3938L9.96324 22.3949C10.0564 22.7275 10.3596 22.9572 10.7052 22.9572H19.142C19.4671 22.9572 19.7574 22.7535 19.8673 22.4472L19.8682 22.4447L22.841 13.6645C22.8412 13.6641 22.8413 13.6636 22.8415 13.6632C22.9258 13.4274 22.8905 13.165 22.7466 12.9605C22.6754 12.8595 22.581 12.777 22.4713 12.72C22.3616 12.663 22.2398 12.6333 22.1162 12.6332ZM21.0252 14.1747L18.5974 21.4163H11.292L9.39497 14.1747H21.0252ZM17.4744 23.9151C16.5284 23.9151 15.7619 24.6816 15.7619 25.6276C15.7619 26.5735 16.5284 27.3401 17.4744 27.3401C18.4203 27.3401 19.1869 26.5735 19.1869 25.6276C19.1869 24.6816 18.4203 23.9151 17.4744 23.9151ZM11.8494 23.9151C10.9034 23.9151 10.1369 24.6816 10.1369 25.6276C10.1369 26.5735 10.9034 27.3401 11.8494 27.3401C12.7953 27.3401 13.5619 26.5735 13.5619 25.6276C13.5619 24.6816 12.7953 23.9151 11.8494 23.9151Z"
              stroke="#AEAEAE"
              stroke-width="0.3"
            />
            <path
              d="M22.1162 12.6332H22.1161H8.96445L7.99182 9.27907C7.99181 9.27904 7.9918 9.27901 7.9918 9.27898C7.78581 8.5658 7.43269 8.15583 7.06697 7.92693C6.70448 7.70006 6.34413 7.66006 6.13456 7.66006H3.45738C3.03134 7.66006 2.68673 8.00507 2.68673 8.43068C2.68673 8.85635 3.03171 9.20129 3.45736 9.20129H6.13423L6.13588 9.20129C6.1667 9.20127 6.21057 9.20125 6.26711 9.24552C6.33009 9.29484 6.42589 9.41357 6.50921 9.70092L9.96295 22.3938L9.96324 22.3949C10.0564 22.7275 10.3596 22.9572 10.7052 22.9572H19.142C19.4671 22.9572 19.7574 22.7535 19.8673 22.4472L19.8682 22.4447L22.841 13.6645C22.8412 13.6641 22.8413 13.6636 22.8415 13.6632C22.9258 13.4274 22.8905 13.165 22.7466 12.9605C22.6754 12.8595 22.581 12.777 22.4713 12.72C22.3616 12.663 22.2398 12.6333 22.1162 12.6332ZM21.0252 14.1747L18.5974 21.4163H11.292L9.39497 14.1747H21.0252ZM17.4744 23.9151C16.5284 23.9151 15.7619 24.6816 15.7619 25.6276C15.7619 26.5735 16.5284 27.3401 17.4744 27.3401C18.4203 27.3401 19.1869 26.5735 19.1869 25.6276C19.1869 24.6816 18.4203 23.9151 17.4744 23.9151ZM11.8494 23.9151C10.9034 23.9151 10.1369 24.6816 10.1369 25.6276C10.1369 26.5735 10.9034 27.3401 11.8494 27.3401C12.7953 27.3401 13.5619 26.5735 13.5619 25.6276C13.5619 24.6816 12.7953 23.9151 11.8494 23.9151Z"
              stroke="white"
              stroke-width="0.3"
            />
            <rect
              x="14.7868"
              y="0.5"
              width="18"
              height="18"
              rx="9"
              fill="#D63031"
            />
            <path
              d="M24.5828 5.53333V13H22.8548V6.92H21.3615V5.53333H24.5828Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="hidden md:block">
          <a>
            <span className="text-sm font-semibold text-white">Masuk</span>
          </a>
        </div>
        <div className="hidden md:block">
          <a>
            <span className="py-1 px-2 bg-white text-red-600 font-semibold text-sm rounded-md">
              Daftar
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
