"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout393() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Vorteile</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Warum AK Crystal Clean wählen
          </h1>
          <p className="md:text-md">Vier Gründe für unsere Partnerschaft</p>
        </div>
        <div className="grid auto-cols-fr gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <div className="flex flex-col border border-border-primary">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <div className="rb-5 mb-5 md:mb-6">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Premium-Service ohne Kompromisse
                </h2>
                <p>
                  Hochwertige Arbeit mit modernen Methoden und zertifizierten
                  Verfahren.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Erfahren"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Erfahren
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <div className="rb-5 mb-5 md:mb-6">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 2"
                  />
                </div>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Premium-Service ohne Kompromisse
                </h2>
                <p>
                  Hochwertige Arbeit mit modernen Methoden und zertifizierten
                  Verfahren.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Erfahren"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Erfahren
                </Button>
              </div>
            </div>
          </div>
          <div className="flex auto-cols-fr flex-col border border-border-primary sm:col-span-2 sm:grid-cols-2 lg:col-span-1 lg:col-start-3 lg:row-span-2">
            <div className="flex size-full flex-col items-center justify-center self-start lg:h-auto">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2 font-semibold">Maßgeschneidert</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Individuelle Lösungen für Ihren Bedarf
                </h2>
                <p>
                  Jedes Projekt ist anders. Wir passen uns Ihren Anforderungen
                  an.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Erfahren"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Erfahren
                </Button>
              </div>
            </div>
          </div>
          <div className="flex auto-cols-fr flex-col border border-border-primary last-of-type:row-span-1 last-of-type:grid sm:col-span-2 sm:grid-cols-2 sm:last-of-type:row-start-2 md:last-of-type:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-span-2 lg:last-of-type:col-span-2">
            <div className="flex size-full flex-col items-center justify-center self-start lg:h-auto">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 2"
              />
            </div>
            <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2 font-semibold">Transparent</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Klare Absprachen von Anfang an
                </h2>
                <p>
                  Keine versteckten Kosten, keine Überraschungen. Ehrliche
                  Kommunikation.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Erfahren"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Erfahren
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
