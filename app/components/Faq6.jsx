"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function Faq6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          Häufig gefragt
        </h2>
        <p className="md:text-md">
          Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren
          Leistungen und Abläufen.
        </p>
        <div className="mt-6 md:mt-8">
          <Button title="Kontakt" variant="secondary">
            Kontakt
          </Button>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          <AccordionItem
            value="item-0"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Wie lange dauert eine Fassadenreinigung?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Die Dauer hängt von Größe und Verschmutzungsgrad ab. Ein
              Einfamilienhaus benötigt meist zwei bis drei Tage. Wir erstellen
              ein individuelles Angebot nach Besichtigung.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-1"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Welche Produkte verwendet AK Crystal Clean?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Wir setzen ausschließlich auf umweltfreundliche und zertifizierte
              Reinigungsmittel. Diese schonen Ihre Gesundheit und die Umwelt,
              ohne Kompromisse bei der Wirksamkeit.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Können Sie auch Notfallaufträge übernehmen?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Ja, wir bieten flexible Leistungen und versuchen, kurzfristige
              Anfragen zu berücksichtigen. Kontaktieren Sie uns direkt, um
              Verfügbarkeit zu klären.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Bietet AK Crystal Clean Verträge an?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Selbstverständlich. Wir erstellen maßgeschneiderte
              Wartungsverträge für regelmäßige Unterhaltsreinigung. So sparen
              Sie Zeit und Kosten durch planbare Leistungen.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Wie kann ich ein Angebot anfordern?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Nutzen Sie unser Kontaktformular oder rufen Sie uns an. Unser Team
              vereinbart einen Termin zur Besichtigung und erstellt ein
              unverbindliches Angebot.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
