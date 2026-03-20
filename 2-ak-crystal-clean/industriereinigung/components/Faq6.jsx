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
          FAQ
        </h2>
        <p className="md:text-md">
          Häufig gestellte Fragen zur Industriereinigung beantworten wir gerne.
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
              Wie läuft eine Industriereinigung ab?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Wir besprechen Ihre spezifischen Anforderungen und erstellen einen
              maßgeschneiderten Plan. Unser Team arbeitet nach einem
              strukturierten Ablauf, um Ihre Produktion minimal zu
              beeinträchtigen. Alle Arbeiten erfolgen nach höchsten
              Sicherheitsstandards.
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
              Können Sie während der Betriebszeit arbeiten?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Ja, wir koordinieren unsere Einsätze flexibel mit Ihren
              Betriebszeiten. Ob nachts, am Wochenende oder in Schichten – wir
              passen uns an. So entstehen keine Produktionsausfälle.
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
              Welche Sicherheitsmaßnahmen gelten?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Unser Personal ist geschult in Arbeitssicherheit und kennt Ihre
              spezifischen Risiken. Wir nutzen zertifizierte Verfahren und
              moderne Schutzausrüstung. Alle Maßnahmen entsprechen den geltenden
              Vorschriften.
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
              Wie oft sollte eine Industriereinigung erfolgen?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Das hängt von Ihrer Branche und Ihren Prozessen ab. Wir erstellen
              einen individuellen Wartungsplan, der Ihre Anforderungen erfüllt.
              Regelmäßige Reinigung sichert Hygiene und Effizienz.
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
              Arbeitet ihr mit umweltfreundlichen Produkten?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Selbstverständlich. Wir setzen auf moderne, umweltschonende
              Reinigungsmittel. Diese sind wirksam und schonen gleichzeitig Ihre
              Anlagen und die Umwelt.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
