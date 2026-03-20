"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout400() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Tagline</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Short heading goes here
            </h2>
            <p className="md:text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Tagline</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Medium length section heading goes here
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Button"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Button
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Tagline</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Medium length section heading goes here
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Button"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Button
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Tagline</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Medium length section heading goes here
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Button"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Button
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Tagline</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Medium length section heading goes here
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Button"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Button
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
