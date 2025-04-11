import BackgroundImage from "@/components/backgrounds/BackgroundImage";

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-2xl py-40 sm:py-50 lg:py-56">
      {/* Imagen de fondo opcional */}
      <BackgroundImage />
      <div className="text-center">
        <h1 className="text-5xl text-white font-semibold font-inter tracking-tight text-balance sm:text-7xl">
          Equilibra tu cuerpo y mente
        </h1>
        <p className="mt-8 text-lg font-medium font-sans text-pretty text-teal-100 sm:text-xl/8">
          Clases de pilates en Valencia para todos los niveles
        </p>
        {/* Botón opcional. Cambiar py del div padre si no se usa */}
        {/* <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-teal-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          >
            Get started
          </a>
        </div> */}
      </div>
    </div>
  );
}
