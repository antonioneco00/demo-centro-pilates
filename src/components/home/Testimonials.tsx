import Image from "next/image";

export default function Testimonials() {
  const clients = [
    {
      name: "Ana R.",
      image: "/testimonial-1.png",
      quote: "He ganado movilidad y me siento con más energía.",
    },
    {
      name: "Marcos G.",
      image: "/testimonial-0.png",
      quote: "Los profesores explican genial, ambiente muy acogedor.",
    },
    {
      name: "Laura V.",
      image: "/testimonial-2.png",
      quote: "Me ha ayudado mucho con mi dolor de espalda.",
    },
  ];

  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mt-2 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
          Testimonios
        </h1>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
        Lo que dicen nuestros alumnos sobre nosotros.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 lg:max-w-6xl lg:grid-cols-3 gap-x-8">
        {clients.map((client) => (
          <div
            key={client.name}
            className="relative flex h-full flex-col shadow-2xl rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
          >
            <p className="text-lg text-gray-500 font-sans mb-6">
              “{client.quote}”
            </p>
            <div className="flex pt-3 mt-auto border-t border-gray-900/10">
              <div className="relative self-center h-[50px] w-full max-w-[50px] mr-4 overflow-hidden rounded-full">
                <Image
                  src={client.image}
                  alt="Testimonio"
                  width={50}
                  height={50}
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-teal-600 text-base/7 font-semibold">
                  {client.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
