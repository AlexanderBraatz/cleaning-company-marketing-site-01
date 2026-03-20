"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout22() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-20"
                alt="Relume logo"
              />
            </div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Tiefenreinigung, die wirklich zählt
            </h2>
            <p className="md:text-md">
              Wir reinigen jeden Winkel gründlich. Von Böden bis Fenster, von
              Sanitäranlagen bis zu versteckten Ecken. Ideal nach Renovierungen,
              beim Einzug oder Auszug.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Mehr erfahren" variant="secondary">
                Mehr erfahren
              </Button>
              <Button
                title="Anfragen"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Anfragen
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
