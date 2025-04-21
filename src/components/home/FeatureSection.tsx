import { features } from "@/lib/features";
import Image from "next/image";

export default function FeatureSection() {
  return (
    <div
      className="relative overflow-hidden bg-background py-24 sm:py-32"
      id="about"
    >
      {/* Wave */}
      <div className="absolute top-0">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="w-screen"
        >
          <path
            d="M900 26L862.5 20.8C825 15.7 750 5.3 675 3.2C600 1 525 7 450 14.7C375 22.3 300 31.7 225 34C150 36.3 75 31.7 37.5 29.3L0 27V0H37.5C75 0 150 0 225 0C300 0 375 0 450 0C525 0 600 0 675 0C750 0 825 0 862.5 0H900V26Z"
            fill="url(#paint0_linear_102_20)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_102_20"
              x1="0"
              y1="24.8131"
              x2="900"
              y2="24.8131"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00BBA7" stopOpacity="0.6" />
              <stop offset="1" stopColor="#00BBA7" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lines 4 */}
      <div className="absolute bottom-0">
        <svg
          width="307"
          height="283"
          viewBox="0 0 307 283"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-1/3 md:size-1/2 lg:size-2/3 xl:size-full"
        >
          <path
            d="M56 0.99999C146.571 58.6396 131.682 134.873 199.921 162.143C304.288 203.852 296.074 246.846 306 283"
            stroke="url(#paint0_linear_16_85)"
          />
          <path
            d="M37 0.99999C127.571 58.6396 112.682 134.873 180.921 162.143C285.288 203.852 277.074 246.846 287 283"
            stroke="url(#paint1_linear_16_85)"
          />
          <path
            d="M19 0.99999C109.208 58.6396 94.3796 134.873 162.345 162.143C266.295 203.852 258.114 246.846 268 283"
            stroke="url(#paint2_linear_16_85)"
          />
          <path
            d="M0 0.99999C90.5707 58.6396 75.6824 134.873 143.921 162.143C248.288 203.852 240.074 246.846 250 283"
            stroke="url(#paint3_linear_16_85)"
          />
          <circle
            cx="233.5"
            cy="120.5"
            r="29.5"
            fill="url(#paint4_radial_16_85)"
            fillOpacity="0.3"
          />
          <circle
            cx="108.748"
            cy="221.748"
            r="32"
            transform="rotate(129.474 108.748 221.748)"
            stroke="url(#paint5_linear_16_85)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_16_85"
              x1="306.62"
              y1="283"
              x2="56.2568"
              y2="0.152883"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-teal-500)" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_16_85"
              x1="287.62"
              y1="283"
              x2="37.2568"
              y2="0.152883"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-teal-500)" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_16_85"
              x1="268.618"
              y1="283"
              x2="18.1345"
              y2="1.1494"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-teal-500)" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_16_85"
              x1="250.62"
              y1="283"
              x2="0.256819"
              y2="0.152883"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-teal-500)" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint4_radial_16_85"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(247 129) rotate(-140.194) scale(39.0512)"
            >
              <stop stopColor="var(--color-teal-500)" stopOpacity={0.05} />
              <stop offset="1" stopColor="var(--color-teal-500)" />
            </radialGradient>
            <linearGradient
              id="paint5_linear_16_85"
              x1="108.748"
              y1="189.248"
              x2="108.748"
              y2="254.248"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-teal-500)" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 z-10">
            <div className="lg:max-w-lg">
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
                Sobre nosotros
              </h2>
              <p className="mt-6 text-lg/8 text-gray-500">
                En Pilates Vitalia ayudamos a personas de todas las edades a
                mejorar su postura, flexibilidad y bienestar general.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-500 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-teal-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/about-image.png"
            alt="about image"
            width={400}
            height={400}
            className="w-auto h-auto object-contain mx-auto drop-shadow-three rounded-tl-4xl rounded-br-4xl shadow-[10px_10px_0] shadow-teal-600/60 z-10"
          />
        </div>
      </div>
    </div>
  );
}
