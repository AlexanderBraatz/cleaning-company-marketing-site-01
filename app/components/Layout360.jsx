"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout360() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Hauptleistungen</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Unsere Leistungen
            </h2>
            <p className="md:text-md">
              Entdecken Sie die Leistungen, die AK Crystal Clean auszeichnen.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          <div className="border border-border-primary">
            <div className="p-6 md:p-8 lg:p-12">
              <p className="mb-2 text-sm font-semibold">Fassaden</p>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                Glas- & Fassadenreinigung
              </h3>
              <p>
                Wir reinigen Fassaden mit zertifizierten Methoden und
                umweltfreundlichen Produkten für dauerhaft schöne Ergebnisse.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Termin anfragen" variant="secondary">
                  Termin anfragen
                </Button>
                <Button
                  title="Mehr erfahren"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Mehr erfahren
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="size-full object-cover"
                alt="Relume placeholder image 1"
              />
            </div>
          </div>
          <div className="border border-border-primary">
            <div className="p-6 md:p-8 lg:p-12">
              <p className="mb-2 text-sm font-semibold">Wartung</p>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                Unterhaltsreinigung
              </h3>
              <p>
                Regelmäßige Unterhaltsreinigung hält Ihre Räume sauber und
                gepflegt. Flexibel angepasst an Ihre Bedürfnisse.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Termin anfragen" variant="secondary">
                  Termin anfragen
                </Button>
                <Button
                  title="Mehr erfahren"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Mehr erfahren
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="size-full object-cover"
                alt="Relume placeholder image 1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
