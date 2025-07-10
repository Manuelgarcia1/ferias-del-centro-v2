"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { validateForm, extractFormData } from "./utils/form-validation";
import type { ContactFormProps } from "./types";

export function ContactForm({ isInView }: ContactFormProps) {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    // Extraer y validar datos
    const formData = extractFormData(form);
    const validationError = validateForm(formData);

    if (validationError) {
      toast.error(validationError, { id: "contact" });
      return;
    }

    // Indicar carga
    toast.loading("Enviando mensaje…", { id: "contact" });

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success(result.message || "Enviado correctamente", {
          id: "contact",
        });
        form.reset();
      } else {
        toast.error(result.message || "Error al enviar", { id: "contact" });
      }
    } catch (err: any) {
      toast.error(err.message || "Error de red", { id: "contact" });
    }
  };

  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ x: -50, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="h-full relative z-10 pointer-events-auto"
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col">
        <h3 className="text-2xl font-bold text-customGreen mb-6">
          Envíanos un mensaje
        </h3>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 flex-1 flex flex-col"
        >
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <Label htmlFor="nombre" className="text-customGreen">
                Nombre
              </Label>
              <Input
                id="nombre"
                name="nombre"
                placeholder="Su nombre"
                className="border-gray-300 focus:border-customAccent focus:ring-customAccent"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-customGreen">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Su email"
                className="border-gray-300 focus:border-customAccent focus:ring-customAccent"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="asunto" className="text-customGreen">
              Asunto
            </Label>
            <Input
              id="asunto"
              name="asunto"
              placeholder="Asunto del mensaje"
              className="border-gray-300 focus:border-customAccent focus:ring-customAccent"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensaje" className="text-customGreen">
              Mensaje
            </Label>
            <Textarea
              id="mensaje"
              name="mensaje"
              placeholder="Escriba su mensaje aquí"
              rows={5}
              className="border-gray-300 focus:border-customAccent focus:ring-customAccent"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-customGreen hover:bg-customGreen/90 group mt-auto"
          >
            Enviar Mensaje
            <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>
      </div>
    </motion.div>
  );
}
