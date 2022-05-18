import { useState, useEffect } from "react";

const Navigation = ({ menu, setMenu }) => {
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleNavigation = (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        console.log("scrolling up");
      } else if (y < window.scrollY) {
        console.log("scrolling down");
      }
      setY(window.scrollY);
    };
    setY(window.scrollY);
    window.addEventListener("scroll", (e) => handleNavigation(e));
  }, [y]);

  return (
    <div
      className={`w-full duration-150 h-14 bg-white fixed z-10 ${
        y > 50 ? "-translate-y-10" : "translate-y-0"
      }`}
    >
      <div className="flex w-full h-full items-center justify-between px-14">
        <div>
          <div>
            <p>Pilihan Kopi Terbaik</p>
          </div>
        </div>
        <div className="flex gap-x-4">
          <button
            className={`duration-150 ${
              menu === "semua" ? "border-b-4 border-red-600" : ""
            }`}
            onClick={() => setMenu("semua")}
          >
            <p className="px-4 py-2">Semua</p>
          </button>
          <button
            className={`duration-150 ${
              menu === "house-blend" ? "border-b-4 border-red-600" : ""
            }`}
            onClick={() => setMenu("house-blend")}
          >
            <p className="px-4 py-2">House Blend</p>
          </button>
          <button
            className={`duration-150 ${
              menu === "single-origin" ? "border-b-4 border-red-600" : ""
            }`}
            onClick={() => setMenu("single-origin")}
          >
            <p className="px-4 py-2">Single Origin</p>
          </button>
          <button
            className={`duration-150 ${
              menu === "green-beans" ? "border-b-4 border-red-600" : ""
            }`}
            onClick={() => setMenu("green-beans")}
          >
            <p className="px-4 py-2">Green Beans</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
