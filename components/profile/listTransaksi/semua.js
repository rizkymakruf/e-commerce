import BelumBayar from "./belumBayar";
import Dibatalkan from "./dibatalkan";
import Dikemas from "./dikemas";
import Dikirim from "./dikirim";
import Selesai from "./selesai";

export default function Semua() {
  return (
    <>
      <div className="flex-col w-full">
        <BelumBayar />
        <Dikemas />
        <Dikirim />
        <Selesai />
        <Dibatalkan />
      </div>
    </>
  );
}
