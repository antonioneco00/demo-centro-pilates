"use client";

import { MobileMenuProps } from "@/types";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <Dialog open={isOpen} onClose={setIsOpen} className="lg:hidden">
      <div className="fixed inset-0 z-10" />
      <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-my-10 -ml-5 p-1.5 flex items-center">
            <Image
              alt="Logo"
              src="/logo.png"
              width={80}
              height={80}
              className="w-auto h-auto object-contain"
            />
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="size-6 text-foreground" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Link
                href="#about"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Sobre mí
              </Link>
              <Link
                href="#pricing"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#contact"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <Link
                href="#footer"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Horarios
              </Link>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}
