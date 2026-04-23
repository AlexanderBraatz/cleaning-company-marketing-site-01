'use client';

import React from 'react';
import { RxChevronRight } from 'react-icons/rx';
import { Button } from '../relume-manually-added-components/Button';
import GlasCleaning from '@/public/images/team-solo-window-cleaning-outside-insideview-croped.jpg';
import UnterhlatsReinigungImage from '@/public/images/team-group-hoovering-gym.jpg';
import Image from 'next/image';

export function Layout360() {
	return (
		<section
			id="relume"
			className="px-[5%]  theme-color-scheme-2 bg-background   text-text-primary py-16 md:py-24 lg:py-28"
		>
			<div className="container bg-background">
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
					<div className="border-0   bg-foreground">
						<div className="p-6 md:p-8 lg:p-12">
							<p className="mb-2 text-sm font-semibold">Fassaden</p>
							<h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
								Glas & Fassaden reinigung
							</h3>
							<p>
								Wir reinigen Fassaden mit zertifizierten Methoden und
								umweltfreundlichen Produkten für dauerhaft schöne Ergebnisse.
							</p>
							<div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
								<Button
									title="Termin anfragen"
									variant="secondary"
									className="rounded-[12px]"
									size="primaryHalf"
								>
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
							<Image
								src={GlasCleaning}
								alt="two team cleaning window"
								className="size-full object-cover  h-90"
								width={2048}
								height={1365}
							/>
						</div>
					</div>
					<div className="border-0 bg-foreground">
						<div className="p-6 md:p-8 lg:p-12">
							<p className="mb-2 text-sm font-semibold">Wartung</p>
							<h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
								Unterhalts reinigung
							</h3>
							<p>
								Regelmäßige Unterhaltsreinigung hält Ihre Räume sauber und
								gepflegt. Flexibel angepasst an Ihre Bedürfnisse.
							</p>
							<div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
								<Button
									title="Termin anfragen"
									variant="secondary"
									className="rounded-[12px]"
									size="primaryHalf"
								>
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
							<Image
								src={UnterhlatsReinigungImage}
								alt="two team cleaning window"
								className="size-full object-cover  h-90"
								width={1024}
								height={1024}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
