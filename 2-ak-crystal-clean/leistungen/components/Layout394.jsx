"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout394() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Weitere Leistungen</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Komplettes Leistungsspektrum
          </h1>
          <p className="md:text-md">
            Alles aus einer Hand für Ihre Reinigungsbedürfnisse
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="flex flex-col border border-border-primary">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Grundreinigung</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Tiefenreinigung und Entrümpelung
                </h2>
                <p>
                  Wir reinigen gründlich und kümmern uns um Wohnungsauflösungen
                  mit Sorgfalt und Diskretion.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Zur Grundreinigung"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Zur Grundreinigung
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Pflastersteinreinigung</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Außenflächen wie neu
                </h2>
                <p>
                  Terrassen, Wege und Plätze werden wieder strahlend sauber.
                  Hochdruckreinigung mit Sachverstand.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Zur Pflastersteinreinigung"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Zur Pflastersteinreinigung
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Hausmeisterservice</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Rundum-Betreuung für Immobilien
                </h2>
                <p>
                  Außenanlagenpflege und Winterdienst inklusive. Ihr
                  zuverlässiger Partner das ganze Jahr.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Zum Hausmeisterservice"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Zum Hausmeisterservice
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
