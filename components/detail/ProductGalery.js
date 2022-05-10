const ProductGalery = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center w-full gap-y-4">
        <div className="bg-gray-300 w-72 h-72 rounded-md"></div>
        <div className="flex flex-row items-center justify-between">
          <div className="bg-gray-300 w-16 h-16 rounded-md"></div>
          <div className="bg-gray-300 w-16 h-16 rounded-md"></div>
          <div className="bg-gray-300 w-16 h-16 rounded-md"></div>
          <div className="bg-gray-300 w-16 h-16 rounded-md"></div>
        </div>
        <div>
          <p className="text-red-600 text-md font-bold text-xs">
            Gratis Ongkir
          </p>
          <p className="text-red-600 text-xs">Minimum pembelian Rp 200.000</p>
        </div>
      </div>
    </div>
  );
};

export default ProductGalery;
