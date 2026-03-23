'use client';

import { Button } from '../relume-manually-added-components/Button';

import React from 'react';

export function Cta53() {
	return (
		<section
			id="relume"
			className="px-[5%]  theme-color-scheme-2 bg-background  text-text-primary  py-16 md:py-24 lg:py-28"
		>
			<div className="container relative">
				<div className="relative z-10 flex flex-col items-center p-8 md:p-12 lg:p-16">
					<div className="max-w-lg text-center">
						<h2 className="rb-5 mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
							Starten Sie noch heute
						</h2>
						<p className="text-text-alternative md:text-md">
							Vereinbaren Sie einen Termin mit unserem Team und lassen Sie sich
							von unserer Arbeit überzeugen.
						</p>
					</div>
					<div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
						<Button title="Termin anfragen">Termin anfragen</Button>
						<Button
							title="Anrufen"
							variant="secondary-alt"
						>
							Anrufen
						</Button>
					</div>
				</div>
				<div className="absolute inset-0 z-0">
					<img
						src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
						className="size-full object-cover"
						alt="Relume placeholder image"
					/>
					<div className="absolute inset-0 bg-black/50" />
				</div>
			</div>
		</section>
	);
}
