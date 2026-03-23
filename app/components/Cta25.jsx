'use client';

import React from 'react';
import { Button } from '../relume-manually-added-components/Button';

export function Cta25() {
	return (
		<section
			id="relume"
			className="px-[5%] theme-color-scheme-2 bg-background   text-text-primary py-16 md:py-24 lg:py-28"
		>
			<div className="container max-w-lg text-center">
				<h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
					Lassen Sie uns Ihre Räume pflegen
				</h2>
				<p className="md:text-md">
					Kontaktieren Sie AK Crystal Clean noch heute für ein unverbindliches
					Angebot.
				</p>
				<div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
					<Button
						variant="primary"
						title="Termin anfragen"
					>
						Termin anfragen
					</Button>
					<Button
						title="Anrufen"
						variant="secondary"
					>
						Anrufen
					</Button>
				</div>
			</div>
		</section>
	);
}
