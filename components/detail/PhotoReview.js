const PhotoReview = () => {
  return (
    <div className="w-full h-auto">
      <div className="flex items-center justify-between pb-4">
        <div className="text-lg font-bold">Foto dari pembeli</div>
        <div className="flex items-center gap-x-2">
          <div className="text-red-600 text-lg font-bold">Lihat semua</div>
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
        </div>
      </div>
      <div className="flex items-center gap-x-4 justify-between ">
        <div className="w-40 h-40 bg-slate-400 rounded-lg" />
        <div className="w-40 h-40 bg-slate-400 rounded-lg" />
        <div className="w-40 h-40 bg-slate-400 rounded-lg" />
        <div className="w-40 h-40 bg-slate-400 rounded-lg" />
        <div className="w-40 h-40 bg-slate-400 rounded-lg" />
      </div>
    </div>
  );
};

export default PhotoReview;
