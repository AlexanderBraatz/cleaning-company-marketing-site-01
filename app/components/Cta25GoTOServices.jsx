'use client';

import React from 'react';
import { Button } from '../relume-manually-added-components/Button';

export function Cta25GoTOServices() {
	return (
		<section
			id="relume"
			className="px-[5%] theme-color-scheme-2 bg-background   text-text-primary py-16 md:py-24 lg:py-28"
		>
			<div className="container max-w-lg text-center">
				<p className="md:text-md">Weitere Leistungsangebote ?</p>
				<div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
					<Button
						variant="primary"
						title="Termin anfragen"
					>
						Zu unseren Leistungen
					</Button>
				</div>
			</div>
		</section>
	);
}
