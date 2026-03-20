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
          Fragen
        </h2>
        <p className="md:text-md">
          Hier finden Sie Antworten zu häufig gestellten Fragen
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
              Wie schnell können Sie einen Termin anbieten?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Wir bemühen uns, Anfragen innerhalb von 24 Stunden zu beantworten.
              Bei dringenden Anliegen rufen Sie uns direkt an. Unsere Termine
              sind oft innerhalb weniger Tage verfügbar.
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
              Welche Leistungen bieten Sie an?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              AK Crystal Clean bietet umfassende Reinigungslösungen für
              Fassaden, Unterhaltsreinigung, Grundreinigung und viele weitere
              Spezialbereiche. Besuchen Sie unsere Leistungsseite für
              vollständige Details.
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
              Sind Sie auch außerhalb von Gründau tätig?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Ja, wir arbeiten in der gesamten Region Hessen. Kontaktieren Sie
              uns, um zu erfahren, ob Ihr Standort in unserem Servicegebiet
              liegt.
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
              Wie kann ich einen Termin vereinbaren?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Nutzen Sie unser Kontaktformular auf dieser Seite oder rufen Sie
              uns direkt an. Wir kümmern uns schnell um Ihre Anfrage und finden
              einen passenden Termin.
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
              Welche Zahlungsmöglichkeiten akzeptieren Sie?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Wir akzeptieren alle gängigen Zahlungsmethoden. Sprechen Sie uns
              bei der Terminvereinbarung auf Ihre bevorzugte Zahlungsart an.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
