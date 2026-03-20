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
          Häufig gestellte Fragen zur Pflastersteinreinigung
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
              Wie lange dauert die Reinigung?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Die Dauer hängt von der Größe und dem Verschmutzungsgrad ab.
              Kleine Flächen sind oft in wenigen Stunden erledigt, größere
              Projekte können einen oder zwei Tage dauern. Wir geben Ihnen vor
              Ort eine genaue Schätzung.
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
              Welche Methoden verwenden Sie?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Wir nutzen Hochdruckreinigung mit zertifizierten Methoden und
              umweltfreundlichen Produkten. Je nach Material und Verschmutzung
              passen wir den Druck und die Reinigungsmittel an, um Ihre Steine
              zu schonen.
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
              Können Moos und Algen wieder wachsen?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Nach der Reinigung sind Ihre Steine frei von Moos und Algen. Mit
              der Zeit können diese natürlich wieder entstehen, besonders an
              schattigen und feuchten Stellen. Regelmäßige Reinigung hält Ihre
              Flächen länger sauber.
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
              Muss ich etwas vorbereiten?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Bitte räumen Sie lose Gegenstände von der Fläche. Parkplätze
              sollten frei sein. Ansonsten kümmern wir uns um alles Weitere und
              hinterlassen Ihre Fläche sauber und trocken.
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
              Sind Ihre Produkte umweltfreundlich?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Ja, wir verwenden ausschließlich umweltfreundliche
              Reinigungsmittel. Unsere Methoden sind schonend für Natur und
              Umwelt, während sie gleichzeitig maximale Reinigungskraft bieten.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
