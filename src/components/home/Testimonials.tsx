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
      <div className="absolute top-0 right-0">
        <svg
          width="289"
          height="277"
          viewBox="0 0 289 277"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-auto size-2/5 sm:size-2/3 lg:size-full"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M320.548 -145.219C327.445 -98.1356 319.15 -48.4808 293.567 -4.03931C246.921 76.9922 156.422 117.025 69.2608 103.351C73.0411 105.927 76.9474 108.379 80.9774 110.699C167.133 160.295 277.182 130.658 326.778 44.5022C362.048 -16.7662 357.248 -90.1177 320.548 -145.219Z"
            fill="#B0E5E1"
            fillOpacity="0.51"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M168.711 207.72C161.813 160.637 170.108 110.982 195.691 66.5403C242.337 -14.4912 332.836 -54.5243 419.997 -40.8503C416.217 -43.4261 412.311 -45.8782 408.281 -48.1981C322.125 -97.7943 212.076 -68.157 162.48 17.9988C127.21 79.2672 132.01 152.619 168.711 207.72Z"
            fill="#50B8AF"
            fillOpacity="0.46"
          />
          <circle
            cx="47.5"
            cy="47.5"
            r="47.5"
            transform="matrix(1 0 0 -1 45 228.501)"
            fill="url(#paint0_radial_30_517)"
          />
          <circle
            cx="47.5"
            cy="47.5"
            r="47"
            transform="matrix(1 0 0 -1 190 276.501)"
            stroke="url(#paint1_linear_30_517)"
          />
          <circle
            cx="47.5"
            cy="47.5"
            r="47"
            transform="matrix(0 1 1 0 0 4.50098)"
            stroke="url(#paint2_linear_30_517)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_30_517"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(35 33.5) rotate(78.511) scale(62.7575)"
            >
              <stop stopColor="#F0FFFE" />
              <stop offset="1" stopColor="#BFDDDA" />
            </radialGradient>
            <linearGradient
              id="paint1_linear_30_517"
              x1="47.5"
              y1="0"
              x2="47.5"
              y2="95"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#009689" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_30_517"
              x1="47.5"
              y1="0"
              x2="47.5"
              y2="95"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#009689" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
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
            className="relative flex h-full flex-col shadow-2xl rounded-3xl p-8 ring-1 ring-teal-600/60 sm:p-10 overflow-hidden"
          >
            <div className="absolute bottom-0 left-0">
              <svg
                width="135"
                height="24"
                viewBox="0 0 135 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="22"
                  cy="113"
                  r="113"
                  fill="url(#paint0_radial_15_58)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_15_58"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(56.487 23.4805) rotate(95.4539) scale(146.684 126.484)"
                  >
                    <stop stopColor="#B4EFEA" />
                    <stop offset="1" stopColor="#67A7A1" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute bottom-0 right-0">
              <svg
                width="160"
                height="56"
                viewBox="0 0 160 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="115"
                  cy="115"
                  r="115"
                  fill="url(#paint0_radial_15_57)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_15_57"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(117.347 30.5102) rotate(90.674) scale(199.504)"
                  >
                    <stop stopColor="#F2FFFE" />
                    <stop offset="1" stopColor="#C2DDDA" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
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
