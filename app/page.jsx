import Image from "next/image";

export default function Home() {
   return (
    <div className="flex h-screen">
      {/* Lado izquierdo*/}
      <div className="w-1/2 bg-yellow-400 flex items-center justify-center">
        <p className="text-black text-lg">Imagen del logo de la empresa</p>
      </div>

      {/* Lado derecho*/}
      <div className="w-1/2 bg-black text-white flex items-center justify-center">
        <form className="w-[300px] flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-center mb-4">Inicio de Sesión</h2>

          <div>
            <label htmlFor="usuario" className="text-sm block mb-1">Ingrese su usuario</label>
            <input
              id="usuario"
              type="text"
              className="w-full px-3 py-2 rounded-md bg-white text-black"
              placeholder="Usuario"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm block mb-1">Ingrese contraseña</label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 rounded-md bg-white text-black"
              placeholder="Contraseña"
            />
          </div>

          <button
            type="submit"
            className="bg-white text-black font-semibold py-2 rounded-md hover:bg-gray-200 transition"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}
