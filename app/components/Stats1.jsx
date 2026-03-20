"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Stats1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-[5.25rem]">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Erfolg</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              Zahlen, die für unsere Arbeit sprechen
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              AK Crystal Clean hat sich als verlässlicher Partner für Hunderte
              von Kunden etabliert. Unsere Bilanz zeigt Engagement und Qualität
              in jedem Projekt.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button variant="secondary">Kontakt</Button>
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Mehr
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <div className="border-l-2 border-border-primary pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
              850+
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Zufriedene Kunden
            </h3>
          </div>
          <div className="border-l-2 border-border-primary pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
              2000+
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Projekte abgeschlossen
            </h3>
          </div>
          <div className="border-l-2 border-border-primary pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
              20+
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Jahre Erfahrung
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
