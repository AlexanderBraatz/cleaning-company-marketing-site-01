'use client';

import { Button } from '../relume-manually-added-components/Button';
import React from 'react';
import { RxChevronRight } from 'react-icons/rx';

export function Blog42() {
	return (
		<section
			id="relume"
			className="px-[5%]  theme-color-scheme-5 bg-background   text-text-primary py-16 md:py-24 lg:py-28"
		>
			<div className="container">
				<div className="rb-12 mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
					<div className="md:mr-12 lg:mr-0">
						<div className="w-full max-w-lg">
							<p className="mb-3 font-semibold md:mb-4">Wissen</p>
							<h2 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
								Tipps und Einblicke
							</h2>
							<p className="md:text-md">
								Erfahren Sie mehr über professionelle Reinigung und
								Gebäudepflege.
							</p>
						</div>
					</div>
					<div className="hidden md:flex"></div>
				</div>
				<div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
					<div className="flex size-full flex-col items-start justify-start text-start">
						<a
							href="#"
							className="mb-6 w-full"
						>
							<img
								src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
								alt="Relume placeholder image"
								className="aspect-[3/2] size-full object-cover"
							/>
						</a>
						<div className="rb-4 mb-4 flex w-full items-center justify-start">
							<p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
								Reinigung
							</p>
							<p className="inline text-sm font-semibold">4 min Lesezeit</p>
						</div>
						<a
							className="mb-2 flex justify-start text-start"
							href="#"
						>
							<h2 className="text-xl font-bold md:text-2xl">
								Fassadenreinigung im Frühling richtig planen
							</h2>
						</a>
						<p>
							Saubere Fassaden sind das Gesicht eines Gebäudes. Wir zeigen,
							worauf es ankommt.
						</p>
						<Button
							title="Lesen"
							variant="link"
							size="link"
							iconRight={<RxChevronRight />}
							className="mt-6 flex items-center justify-center gap-x-2"
						>
							Lesen
						</Button>
					</div>
					<div className="flex size-full flex-col items-start justify-start text-start">
						<a
							href="#"
							className="mb-6 w-full"
						>
							<img
								src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
								alt="Relume placeholder image"
								className="aspect-[3/2] size-full object-cover"
							/>
						</a>
						<div className="rb-4 mb-4 flex w-full items-center justify-start">
							<p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
								Wartung
							</p>
							<p className="inline text-sm font-semibold">5 min Lesezeit</p>
						</div>
						<a
							className="mb-2 flex justify-start text-start"
							href="#"
						>
							<h2 className="text-xl font-bold md:text-2xl">
								Unterhaltsreinigung spart Zeit und Kosten
							</h2>
						</a>
						<p>
							Regelmäßige Reinigung verhindert Verschleiß und hält Räume in
							bestem Zustand.
						</p>
						<Button
							title="Lesen"
							variant="link"
							size="link"
							iconRight={<RxChevronRight />}
							className="mt-6 flex items-center justify-center gap-x-2"
						>
							Lesen
						</Button>
					</div>
					<div className="flex size-full flex-col items-start justify-start text-start">
						<a
							href="#"
							className="mb-6 w-full"
						>
							<img
								src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
								alt="Relume placeholder image"
								className="aspect-[3/2] size-full object-cover"
							/>
						</a>
						<div className="rb-4 mb-4 flex w-full items-center justify-start">
							<p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
								Sicherheit
							</p>
							<p className="inline text-sm font-semibold">3 min Lesezeit</p>
						</div>
						<a
							className="mb-2 flex justify-start text-start"
							href="#"
						>
							<h2 className="text-xl font-bold md:text-2xl">
								Winterdienste für sichere Außenanlagen
							</h2>
						</a>
						<p>
							Schnee und Eis erfordern schnelle Reaktion. Unser Team ist immer
							bereit.
						</p>
						<Button
							title="Lesen"
							variant="link"
							size="link"
							iconRight={<RxChevronRight />}
							className="mt-6 flex items-center justify-center gap-x-2"
						>
							Lesen
						</Button>
					</div>
				</div>
				<Button
					className="mt-10 md:hidden"
					variant="secondary"
				>
					Lesen
				</Button>
			</div>
		</section>
	);
}
