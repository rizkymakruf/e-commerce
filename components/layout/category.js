import { useState } from "react";

const Category = (props) => {
  const [categorys, setCategory] = useState("coffee");

  return (
    <>
      <div
        onMouseOver={() => props.setCategory(true)}
        onMouseLeave={() => props.setCategory(false)}
        className={`w-full duration-500 h-auto fixed z-40 justify-center flex
       ${
         props.category
           ? "translate-y-0 opacity-100"
           : "-translate-y-full opacity-0"
       }
       `}
      >
        <div className="flex h-auto w-10/12">
          {/* category menu */}
          <div className="w-2/6 bg-white p-5 gap-y-2 flex flex-col rounded-bl-lg pb-20 border-r">
            <button
              className="hover:bg-gray-200 w-full py-1 rounded-lg pl-2 text-red-600 font-semibold justify-start flex"
              onClick={() => setCategory("coffee")}
              // onMouseOver={() => setCategory("coffee")}
            >
              Coffee
            </button>
            <button
              className="hover:bg-gray-200 w-full py-1 rounded-lg pl-2 text-red-600 font-semibold justify-start flex"
              onClick={() => setCategory("machines")}
            >
              Coffee Machines
            </button>
            <button
              className="hover:bg-gray-200 w-full py-1 rounded-lg pl-2 text-red-600 font-semibold justify-start flex"
              onClick={() => setCategory("grinder")}
            >
              Coffee Grinder
            </button>
            <button
              className="hover:bg-gray-200 w-full py-1 rounded-lg pl-2 text-red-600 font-semibold justify-start flex"
              onClick={() => setCategory("brewers")}
            >
              Manual Brewers
            </button>
            <button
              className="hover:bg-gray-200 w-full py-1 rounded-lg pl-2 text-red-600 font-semibold justify-start flex"
              onClick={() => setCategory("coffeeTools")}
            >
              Coffee Tools
            </button>
            <button
              className="hover:bg-gray-200 w-full py-1 rounded-lg pl-2 text-red-600 font-semibold justify-start flex"
              onClick={() => setCategory("baristaTools")}
            >
              Barista Tools
            </button>
            <button
              className="hover:bg-gray-200 w-full py-1 rounded-lg pl-2 text-red-600 font-semibold justify-start flex"
              onClick={() => setCategory("roasters")}
            >
              Roasters {"&"} Others
            </button>
            <button
              className="hover:bg-gray-200 w-full py-1 rounded-lg pl-2 text-red-600 font-semibold justify-start flex"
              onClick={() => setCategory("bundlingPackage")}
            >
              Bundling Package
            </button>
          </div>
          {/* show category menu */}
          <div className="w-full bg-white rounded-br-lg pb-20 p-5">
            <div className="flex gap-x-2">
              {categorys === "coffee" ? (
                <>
                  <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                    <div>House Blend</div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                    <div>Single Origin</div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                    <div>Green Beans</div>
                  </div>
                </>
              ) : categorys === "machines" ? (
                <>
                  <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                    <div>Mesin 1</div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                    <div>Mesin 2</div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                    <div>Mesin 3</div>
                  </div>
                </>
              ) : categorys === "grinder" ? (
                <>
                  <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                    <div>Grinder 1</div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                    <div>Grinder 2</div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                    <div>Grinder 3</div>
                  </div>
                </>
              ) : categorys === "brewers" ? (
                <>
                  <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                    <div>Brewers 1</div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                    <div>Brewers 2</div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                    <div>Brewers 3</div>
                  </div>
                </>
              ) : categorys === "coffeeTools" ? (
                <>
                  <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                    <div>Coffee Tools 1</div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                    <div>Coffee Tools 2</div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                    <div>Coffee Tools 3</div>
                  </div>
                </>
              ) : categorys === "baristaTools" ? (
                <>
                  <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                    <div>Barista Tools 1</div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                    <div>Barista Tools 2</div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                    <div>Barista Tools 3</div>
                  </div>
                </>
              ) : categorys === "roasters" ? (
                <>
                  <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                    <div>Roasters 1</div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                    <div>Roasters 2</div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                    <div>Roasters 3</div>
                  </div>
                </>
              ) : (
                categorys === "bundlingPackage" && (
                  <>
                    <div className="flex gap-x-2 items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                      <div>Bundling Package 1</div>
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                      <div>Bundling Package 2</div>
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                      <div>Bundling Package 3</div>
                    </div>
                  </>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
