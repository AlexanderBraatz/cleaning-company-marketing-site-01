"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Testimonial22() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Kundenstimmen
          </h2>
          <p className="md:text-md">Was unsere Kunden sagen</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mb-8 md:mb-10 lg:mb-12">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                  alt="Webflow logo"
                  className="max-h-12"
                />
              </div>
              <blockquote className="md:text-md">
                "AK Crystal Clean hat unsere Fassade wie neu gemacht. Die Arbeit
                war präzise und die Kommunikation war hervorragend."
              </blockquote>
              <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Michael Hoffmann</p>
                  <p>Geschäftsführer, Hoffmann GmbH</p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                Zur Fallstudie
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mb-8 md:mb-10 lg:mb-12">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                  alt="Webflow logo"
                  className="max-h-12"
                />
              </div>
              <blockquote className="md:text-md">
                "Zuverlässig, freundlich und immer pünktlich. AK Crystal Clean
                ist unser Partner für alle Reinigungsaufgaben geworden."
              </blockquote>
              <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Sandra Weber</p>
                  <p>Büroleiterin, Weber Consulting</p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                Zur Fallstudie
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mb-8 md:mb-10 lg:mb-12">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                  alt="Webflow logo"
                  className="max-h-12"
                />
              </div>
              <blockquote className="md:text-md">
                "Die Unterhaltsreinigung ist jetzt kein Problem mehr. Flexible
                Zeiten und professionelle Arbeit, genau das was wir brauchten."
              </blockquote>
              <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                <div>
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Klaus Bergmann</p>
                  <p>Eigentümer, Bergmann Immobilien</p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <Button variant="link" size="link" iconRight={<RxChevronRight />}>
                Zur Fallstudie
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
