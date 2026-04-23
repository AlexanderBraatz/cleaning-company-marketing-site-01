'use client';

import React from 'react';
import { RxChevronRight } from 'react-icons/rx';
import { Button } from '../relume-manually-added-components/Button';
import grundReinigungImage from '@/public/images/team-standing-with-mop.jpg';
import pflasterstinImage from '@/public/images/maschine-stone-cleaner.jpg';
import HausmeisterImage from '@/public/images/mashine-mop.jpg';
import solarImage from '@/public/images/maschine-solarpanel-cleaning.jpg';
import IndustrieImage from '@/public/images/machine-mop-2.jpg';
import ServiceImage from '@/public/images/team-many-arms.jpg';
import Image from 'next/image';

export function Layout394() {
	const cards = [
		{
			id: 'grundreinigung-entruempelung',
			category: 'Reinigung',
			title: 'Grundreinigung & Entrümpelung',
			description:
				'Tiefenreinigung für Wohnungen und Gewerberäume mit professioneller Entrümpelung.',
			image: grundReinigungImage,
			width: 1024,
			height: 1024,
			alt: 'Picture of the team',
		},
		{
			id: 'pflasterstein-wege',
			category: 'Reinigung',
			title: 'Pflasterstein & Wege',
			description:
				'Hochdruckreinigung für Wege und Plätze, die wieder wie neu aussehen.',
			image: pflasterstinImage,
			width: 1024,
			height: 1024,
			alt: 'Picture of the team',
		},
		{
			id: 'hausmeister-aussenanlage',
			category: 'Service',
			title: 'Hausmeister & Außenanlage',
			description:
				'Umfassende Betreuung Ihrer Außenanlagen und Winterdienste das ganze Jahr.',
			image: HausmeisterImage,
			width: 1024,
			height: 1024,
			alt: 'Picture of the team',
		},
		{
			id: 'photovoltaik-dach',
			category: 'Reinigung',
			title: 'Photovoltaik & Dach',
			description:
				'Optimale Leistung und Langlebigkeit Ihrer Anlage durch professionelle Reinigung von Dächern und Photovoltaikanlagen.',
			image: solarImage,
			width: 1024,
			height: 1024,
			alt: 'Picture of the team',
		},
		{
			id: 'industrie-kuechen',
			category: 'Reinigung',
			title: 'Industriere & Küchen',
			description:
				'Großküchenmaschinen erstrahlen wieder in neuem Glanz durch professionelle Industriereinigung von Fettablagerungen.',
			image: IndustrieImage,
			width: 1024,
			height: 1024,
			alt: 'Picture of the team',
		},
		{
			id: 'service-kombination',
			category: 'Service',
			title: 'Service Kombination',
			description:
				'Durch die Kombination von professioneller Entrümpelung mit gründlicher Tiefenreinigung nach Auszug oder Renovierung erzielen wir optimale Ergebnisse für Ihre Immobilie.',
			image: ServiceImage,
			width: 1024,
			height: 1024,
			alt: 'Picture of the team',
		},
	];

	return (
		<section
			id="relume"
			className="px-[5%]  theme-color-scheme-2 bg-background   text-text-primary py-16 md:py-24 lg:py-28"
		>
			<div className="container">
				<div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20" />
				<div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
					{cards.map((card) => (
						<div
							key={card.id}
							className="flex flex-col border-0 border-border-primary bg-foreground-primary"
						>
							<div className="flex flex-1 flex-col justify-between  p-6 md:p-8">
								<div>
									<p className="mb-2 font-semibold">{card.category}</p>
									<h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
										{card.title}
									</h2>
									<p>{card.description}</p>
								</div>
								<div className="mt-5 md:mt-6">
									<Button
										title="Mehr"
										variant="link"
										size="link"
										iconRight={<RxChevronRight />}
									>
										Mehr
									</Button>
								</div>
							</div>
							<div className="flex w-full flex-col items-center justify-center self-start">
								<Image
									src={card.image}
									width={card.width}
									height={card.height}
									alt={card.alt}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
