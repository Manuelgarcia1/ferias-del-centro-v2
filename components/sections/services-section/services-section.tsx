"use client";

import { ServicesHeader } from "./services-header";
import { ServiceCard } from "./service.card";
import { FinancingCard } from "./financig-card";
import { servicesData, whatsappConfig } from "./services-data";

export function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ServicesHeader />

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Sección de financiación */}
        <FinancingCard
          phone={whatsappConfig.financiacionNumber}
          className="mt-16"
        />
      </div>
    </section>
  );
}
