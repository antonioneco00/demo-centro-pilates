import { features } from "@/lib/features";
import Image from "next/image";

export default function FeatureSection() {
  return (
    <div className="overflow-hidden bg-background py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8">
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
            className="w-auto h-auto object-contain drop-shadow-three rounded-tl-4xl rounded-br-4xl shadow-[10px_10px_0_#729493]"
          />
        </div>
      </div>
    </div>
  );
}
