"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-customAccent" />,
      title: "Dirección",
      details: "Av. Almte. Brown 361, San Carlos de Bolivar.",
    },
    {
      icon: <Phone className="h-5 w-5 text-customAccent" />,
      title: "Teléfono",
      details: "+54 2314 123456",
    },
    {
      icon: <Mail className="h-5 w-5 text-customAccent" />,
      title: "Email",
      details: "info@feriasdelcentro.com.ar",
    },
    {
      icon: <Clock className="h-5 w-5 text-customAccent" />,
      title: "Horario de Atención",
      details: "Lunes a Viernes: 8:00 - 18:00",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as any;
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const asunto = form.asunto.value.trim();
    const mensaje = form.mensaje.value.trim();

    // 1️⃣ Validación
    if (!nombre || !email || !asunto || !mensaje) {
      toast.error("Por favor completa todos los campos.", { id: "contact" });
      return;
    }

    // 2️⃣ Indicar carga
    toast.loading("Enviando mensaje…", { id: "contact" });

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, asunto, mensaje }),
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
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ y: 0, opacity: 1 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <h2 className="text-xl font-medium text-customAccent uppercase tracking-wider">
              Contacto
            </h2>
          </motion.div>

          <h3 className="text-3xl md:text-4xl font-bold text-customGreen mb-4">
            Estamos a tu <span className="text-customAccent">Disposición</span>
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Contáctenos para obtener más información sobre nuestros servicios o
            para programar una consulta personalizada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* IZQUIERDA */}
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full"
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
                      placeholder="Su nombre"
                      className="border-gray-300 focus:border-customAccent focus:ring-customAccent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-customGreen">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Su email"
                      className="border-gray-300 focus:border-customAccent focus:ring-customAccent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="asunto" className="text-customGreen">
                    Asunto
                  </Label>
                  <Input
                    id="asunto"
                    placeholder="Asunto del mensaje"
                    className="border-gray-300 focus:border-customAccent focus:ring-customAccent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje" className="text-customGreen">
                    Mensaje
                  </Label>
                  <Textarea
                    id="mensaje"
                    placeholder="Escriba su mensaje aquí"
                    rows={5}
                    className="border-gray-300 focus:border-customAccent focus:ring-customAccent"
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

          {/* DERECHA */}
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-full flex flex-col justify-between"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8 h-auto">
              <h3 className="text-2xl font-bold text-customGreen mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-customAccent/10 p-3 rounded-full mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-customGreen">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg h-64 relative">
              <h3 className="text-2xl font-bold text-customGreen mb-4">
                Nuestra Ubicación
              </h3>
              <div className="absolute inset-0 mt-20 bg-gray-200 rounded-b-2xl">
                <iframe
                  title="Ubicación de Ferias del Centro"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.5086533759027!2d-61.11399992343833!3d-36.22713594504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bfe3aca4a8acff%3A0x7e445efeccd9b9a4!2sFerias%20del%20Centro!5e0!3m2!1ses!2sar!4v1749678785229!5m2!1ses!2sar"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
