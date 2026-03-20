"use client";

import { Button, Tabs, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const ObservedSection = () => {
  <div id={section.id} ref={sectionRef}>
    {children}
  </div>;
};

const useRelume = () => {
  const getInitialActiveSection = (sections) => {
    if (typeof window === "undefined") return sections[0].id;
    const hash = window.location.hash.slice(1);
    const matchingSection = sections.find((section) => section.id === hash);
    return matchingSection?.id ?? sections[0].id;
  };
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const [activeSection, setActiveSection] = useState(() =>
    getInitialActiveSection(sections),
  );
  const scrollToSection = useCallback((sectionId) => {
    scrollToElement(sectionId);
    window.history.pushState(null, "", `#${sectionId}`);
  }, []);
  const handleIntersection = useCallback(
    (index) => {
      setActiveSection(sections[index].id);
    },
    [sections],
  );
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (sections.some((section) => section.id === hash)) {
        scrollToSection(hash);
      }
    };
    if (window.location.hash) {
      handleHashChange();
    }
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
  const currentSection =
    sections.find((section) => section.id === activeSection) ?? sections[0];
  return {
    activeSection,
    currentSection,
    scrollToSection,
    handleIntersection,
  };
};

export function Layout350() {
  const useScroll = useRelume({
    sections: [
      {
        id: "Content-Block-1",
        anchorTrigger: "Tab One",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg",
          alt: "Relume placeholder image 1",
        },
        tagline: "Tagline",
        heading: "Medium length section heading goes here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        buttons: [
          { title: "Button", variant: "secondary" },
          {
            title: "Button",
            variant: "link",
            size: "link",
            iconRight: <RxChevronRight />,
          },
        ],
      },
      {
        id: "Content-Block-2",
        anchorTrigger: "Tab Two",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg",
          alt: "Relume placeholder image 2",
        },
        tagline: "Tagline",
        heading: "Medium length section heading goes here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        buttons: [
          { title: "Button", variant: "secondary" },
          {
            title: "Button",
            variant: "link",
            size: "link",
            iconRight: <RxChevronRight />,
          },
        ],
      },
      {
        id: "Content-Block-3",
        anchorTrigger: "Tab Three",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg",
          alt: "Relume placeholder image 3",
        },
        tagline: "Tagline",
        heading: "Medium length section heading goes here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        buttons: [
          { title: "Button", variant: "secondary" },
          {
            title: "Button",
            variant: "link",
            size: "link",
            iconRight: <RxChevronRight />,
          },
        ],
      },
      {
        id: "Content-Block-4",
        anchorTrigger: "Tab Four",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg",
          alt: "Relume placeholder image 4",
        },
        tagline: "Tagline",
        heading: "Medium length section heading goes here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        buttons: [
          { title: "Button", variant: "secondary" },
          {
            title: "Button",
            variant: "link",
            size: "link",
            iconRight: <RxChevronRight />,
          },
        ],
      },
    ],
  });
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:gap-x-20">
          <div className="grid items-start gap-12 md:flex md:flex-col md:gap-0">
            <Tabs
              value={useScroll.activeSection}
              onValueChange={useScroll.scrollToSection}
              className="sticky top-24 z-10 hidden md:block"
            >
              <TabsList className="flex w-full gap-x-1 border border-border-primary bg-background-primary p-1">
                <TabsTrigger
                  value="Content-Block-1"
                  className="whitespace-nowrap px-5 py-2 underline data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
                >
                  Tab One
                </TabsTrigger>
                <TabsTrigger
                  value="Content-Block-2"
                  className="whitespace-nowrap px-5 py-2 underline data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
                >
                  Tab Two
                </TabsTrigger>
                <TabsTrigger
                  value="Content-Block-3"
                  className="whitespace-nowrap px-5 py-2 underline data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
                >
                  Tab Three
                </TabsTrigger>
                <TabsTrigger
                  value="Content-Block-4"
                  className="whitespace-nowrap px-5 py-2 underline data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
                >
                  Tab Four
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <ObservedSection
              section={{
                id: "Content-Block-1",
                anchorTrigger: "Tab One",
                image: {
                  src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg",
                  alt: "Relume placeholder image 1",
                },
                tagline: "Tagline",
                heading: "Medium length section heading goes here",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
                buttons: [
                  { title: "Button", variant: "secondary" },
                  {
                    title: "Button",
                    variant: "link",
                    size: "link",
                    iconRight: <RxChevronRight />,
                  },
                ],
              }}
              index={0}
              onIntersect={useScroll.handleIntersection}
            >
              <div className="flex flex-col items-start justify-center md:h-screen">
                <p className="mb-3 font-semibold md:mb-4">Tagline</p>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  Medium length section heading goes here
                </h2>
                <p className="md:text-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Button" variant="secondary">
                    Button
                  </Button>
                  <Button
                    title="Button"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Button
                  </Button>
                </div>
                <div className="mt-10 md:hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg"
                    alt="Relume placeholder image 1"
                  />
                </div>
              </div>
            </ObservedSection>
            <ObservedSection
              section={{
                id: "Content-Block-2",
                anchorTrigger: "Tab Two",
                image: {
                  src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg",
                  alt: "Relume placeholder image 2",
                },
                tagline: "Tagline",
                heading: "Medium length section heading goes here",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
                buttons: [
                  { title: "Button", variant: "secondary" },
                  {
                    title: "Button",
                    variant: "link",
                    size: "link",
                    iconRight: <RxChevronRight />,
                  },
                ],
              }}
              index={1}
              onIntersect={useScroll.handleIntersection}
            >
              <div className="flex flex-col items-start justify-center md:h-screen">
                <p className="mb-3 font-semibold md:mb-4">Tagline</p>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  Medium length section heading goes here
                </h2>
                <p className="md:text-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Button" variant="secondary">
                    Button
                  </Button>
                  <Button
                    title="Button"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Button
                  </Button>
                </div>
                <div className="mt-10 md:hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg"
                    alt="Relume placeholder image 2"
                  />
                </div>
              </div>
            </ObservedSection>
            <ObservedSection
              section={{
                id: "Content-Block-3",
                anchorTrigger: "Tab Three",
                image: {
                  src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg",
                  alt: "Relume placeholder image 3",
                },
                tagline: "Tagline",
                heading: "Medium length section heading goes here",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
                buttons: [
                  { title: "Button", variant: "secondary" },
                  {
                    title: "Button",
                    variant: "link",
                    size: "link",
                    iconRight: <RxChevronRight />,
                  },
                ],
              }}
              index={2}
              onIntersect={useScroll.handleIntersection}
            >
              <div className="flex flex-col items-start justify-center md:h-screen">
                <p className="mb-3 font-semibold md:mb-4">Tagline</p>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  Medium length section heading goes here
                </h2>
                <p className="md:text-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Button" variant="secondary">
                    Button
                  </Button>
                  <Button
                    title="Button"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Button
                  </Button>
                </div>
                <div className="mt-10 md:hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg"
                    alt="Relume placeholder image 3"
                  />
                </div>
              </div>
            </ObservedSection>
            <ObservedSection
              section={{
                id: "Content-Block-4",
                anchorTrigger: "Tab Four",
                image: {
                  src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg",
                  alt: "Relume placeholder image 4",
                },
                tagline: "Tagline",
                heading: "Medium length section heading goes here",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
                buttons: [
                  { title: "Button", variant: "secondary" },
                  {
                    title: "Button",
                    variant: "link",
                    size: "link",
                    iconRight: <RxChevronRight />,
                  },
                ],
              }}
              index={3}
              onIntersect={useScroll.handleIntersection}
            >
              <div className="flex flex-col items-start justify-center md:h-screen">
                <p className="mb-3 font-semibold md:mb-4">Tagline</p>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  Medium length section heading goes here
                </h2>
                <p className="md:text-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                  <Button title="Button" variant="secondary">
                    Button
                  </Button>
                  <Button
                    title="Button"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Button
                  </Button>
                </div>
                <div className="mt-10 md:hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg"
                    alt="Relume placeholder image 4"
                  />
                </div>
              </div>
            </ObservedSection>
          </div>
          <div className="sticky top-0 hidden h-screen flex-col items-center justify-center md:flex">
            <img
              src={useScroll.currentSection.image.src}
              alt={useScroll.currentSection.image.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
