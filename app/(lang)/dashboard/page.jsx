import { FaUsers, FaClipboardList, FaShoppingCart } from "react-icons/fa";

export default function Home() {
  return (

  <>
    <div className="min-h-screen w-full bg-yellow-400 flex flex-col items-center justify-center p-4">
      <div className="w-24 h-24 rounded-full bg-gray-400 mb-6" />

      <div className="text-center mb-10">
        <h2 className="text-lg font-semibold">Bienvenido al Sistema de Inventario</h2>
        <p className="text-md">¿A qué módulo desea ingresar?</p>
      </div>

      <div className="flex gap-12">
        <div className="flex flex-col items-center">
          <FaUsers size={50} />
          <button className="mt-3 bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition">
            EMPLEADOS
          </button>
        </div>

        <div className="flex flex-col items-center">
          <FaClipboardList size={50} />
          <button className="mt-3 bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition">
            INVENTARIO
          </button>
        </div>

        <div className="flex flex-col items-center">
          <FaShoppingCart size={50} />
          <button className="mt-3 bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition">
            VENTAS
          </button>
        </div>
      </div>
    </div>
  </>
  );
}
