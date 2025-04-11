import { PopoverGroup } from "@headlessui/react";
import Link from "next/link";

export default function DesktopNavigation() {
  return (
    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
      <Link
        href="#about"
        className="text-md hover:text-teal-600 font-semibold transition-colors duration-500"
      >
        Sobre mí
      </Link>
      <Link
        href="#pricing"
        className="text-md hover:text-teal-600 font-semibold transition-colors duration-500"
      >
        Servicios
      </Link>
      <Link
        href="#contact"
        className="text-md hover:text-teal-600 font-semibold transition-colors duration-500"
      >
        Contacto
      </Link>
      <Link
        href="#footer"
        className="text-md hover:text-teal-600 font-semibold transition-colors duration-500"
      >
        Horarios
      </Link>
    </PopoverGroup>
  );
}
