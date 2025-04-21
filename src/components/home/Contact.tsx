"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { ContactFormData } from "@/types";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>();

  const [error, setError] = useState("");

  const onSubmit = async (data: ContactFormData) => {
    setError("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL!,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8" id="contact">
      <div className="absolute top-0 left-0 size-full -z-5 bg-radial from-background from-70% sm:from-65% md:from-60% lg:from-50% xl:from-45% to-transparent"/>
      <div className="absolute bg-[url(/polka-dot.svg)] size-full top-0 left-0 -z-10"/>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Contacto
        </h2>
        <p className="mt-6 text-lg/8 text-gray-500">
          Si tienes alguna pregunta o quieres más información sobre nuestras
          clases, no dudes en contactarnos. Estaremos encantados de ayudarte.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-12 max-w-xl"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm/6 font-semibold">
              Nombre
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                {...register("name", { required: "El nombre es obligatorio" })}
                className="block w-full rounded-md px-3.5 py-2 text-base outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-teal-600"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "El email no es válido",
                  },
                })}
                className="block w-full rounded-md px-3.5 py-2 text-base outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-teal-600"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold">
              Mensaje
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                rows={4}
                {...register("message", {
                  required: "El mensaje es obligatorio",
                })}
                className="block w-full rounded-md px-3.5 py-2 text-base outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-teal-600"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message as string}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="block w-full rounded-md bg-teal-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-teal-600 focus-visible:outline-teal-600 cursor-pointer"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </div>

        {isSubmitSuccessful && !error && (
          <p className="mt-4 text-green-600 text-center">Mensaje enviado!</p>
        )}
        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
      </form>
    </div>
  );
}
