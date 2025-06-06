import { tiers } from "@/lib/products";

export default function PricingSection() {
  return (
    <div
      className="relative bg-linear-120 from-background to-teal-50 isolate px-6 py-24 sm:py-32 lg:px-8"
      id="pricing"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-teal-600">Precios</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
          Servicios y Precios
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          En Pilates Vitalia ofrecemos una variedad de planes adaptados a tus
          necesidades y objetivos. Tanto clases individuales como grupales,
          tenemos la opción perfecta para ti.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 sm:grid-cols-2 items-center gap-y-6 sm:mt-20 lg:max-w-7xl xl:grid-cols-4 gap-x-8">
        {tiers.map((tier, key) => (
          <div
            key={key}
            className="relative bg-background flex h-full flex-col shadow-2xl rounded-3xl p-8 ring-1 ring-teal-600/60 sm:p-10"
          >
            <div className="absolute top-3 right-3">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14" cy="14" r="2" fill="var(--color-teal-500)" />
                <circle cx="14" cy="2" r="2" fill="var(--color-teal-500)" />
                <circle cx="26" cy="26" r="2" fill="var(--color-teal-500)" />
                <circle cx="2" cy="2" r="2" fill="var(--color-teal-500)" />
                <circle cx="26" cy="14" r="2" fill="var(--color-teal-500)" />
              </svg>
            </div>
            <h3 className="text-teal-600 text-base/7 font-semibold">
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight">
                {tier.price}
              </span>
              {tier.per && <span className="text-base">/ sesión</span>}
            </p>
            {tier.bonus && (
              <h3 className="text-teal-500 text-base/7 font-semibold">
                {tier.bonus}
              </h3>
            )}
            <p className="mt-auto text-base/7">{tier.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
