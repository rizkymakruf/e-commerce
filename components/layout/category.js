const Category = (props) => {
  return (
    <div
      onMouseOver={() => props.setCategory(true)}
      onMouseLeave={() => props.setCategory(false)}
      className={`w-full duration-300 h-auto fixed z-30 justify-center flex ${
        props.category
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      } `}
    >
      <div className="flex h-auto w-4/5 justify-center shadow-md">
        {/* category menu */}
        <div className="w-2/6 bg-white p-5 gap-y-2 flex flex-col rounded-bl-lg pb-20 border-r">
          <button className="hover:bg-gray-200 w-full py-1 rounded-lg pl-2 text-red-600 font-semibold justify-start flex">
            Coffee
          </button>
          <button className="hover:bg-gray-200 w-full py-1 rounded-lg pl-2 text-red-600 font-semibold justify-start flex">
            Coffee Machines
          </button>
          <button className="hover:bg-gray-200 w-full py-1 rounded-lg pl-2 text-red-600 font-semibold justify-start flex">
            Coffee Grinder
          </button>
          <button className="hover:bg-gray-200 w-full py-1 rounded-lg pl-2 text-red-600 font-semibold justify-start flex">
            Manual Brewers
          </button>
          <button className="hover:bg-gray-200 w-full py-1 rounded-lg pl-2 text-red-600 font-semibold justify-start flex">
            Coffee Tools
          </button>
          <button className="hover:bg-gray-200 w-full py-1 rounded-lg pl-2 text-red-600 font-semibold justify-start flex">
            Barista Tools
          </button>
          <button className="hover:bg-gray-200 w-full py-1 rounded-lg pl-2 text-red-600 font-semibold justify-start flex">
            Roasters {"&"} Others
          </button>
          <button className="hover:bg-gray-200 w-full py-1 rounded-lg pl-2 text-red-600 font-semibold justify-start flex">
            Bundling Package
          </button>
        </div>
        {/* show category menu */}
        <div className="w-full bg-white rounded-br-lg pb-20 p-5 flex gap-x-2">
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
        </div>
      </div>
    </div>
  );
};

export default Category;
