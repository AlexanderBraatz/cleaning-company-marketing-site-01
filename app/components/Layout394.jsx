'use client';

import React from 'react';
import { RxChevronRight } from 'react-icons/rx';
import { Button } from '../relume-manually-added-components/Button';
import { useRouter } from 'next/navigation';
import wohnungsaufloesung from '@/public/images/team-solo-dusting-2.jpg';
import pflasterstinImage from '@/public/images/mashine-floorCleaing.jpg';
import HausmeisterImage from '@/public/images/team-solo-gardening-2.jpg';
import solarImage from '@/public/images/maschine-solarpanel-cleaning.jpg';
import IndustrieImage from '@/public/images/team-mashine-carDealership-2.jpg';
import EndsorgungImage from '@/public/images/cars-branded.jpg';
import Image from 'next/image';

export function Layout394() {
	const router = useRouter();
	const cards = [
		// {
		// 	id: 'glas-fassadenreinigung',
		// 	category: 'Reinigung',
		// 	title: 'Glas & Fassadenreinigung',
		// 	description:
		// 		'Kristallklare Fenster und makellose Fassaden für Wintergärten, Glasfronten und gewerbliche Gebäude, mit zertifizierten Methoden und moderner Technik.',
		// 	image: glasFassadenImage,
		// 	width: 1024,
		// 	height: 1024,
		// 	alt: 'Glas- und Fassadenreinigung'
		// },
		// {
		// 	id: 'unterhaltsreinigung',
		// 	category: 'Reinigung',
		// 	title: 'Unterhaltsreinigung',
		// 	description:
		// 		'Regelmäßige Reinigung für Büros, Praxen, Fitnessstudios und Gewerbebetriebe, damit Ihre Räume dauerhaft sauber und gepflegt bleiben.',
		// 	image: unterhaltsImage,
		// 	width: 1024,
		// 	height: 1024,
		// 	alt: 'Unterhaltsreinigung'
		// },
		{
			id: 'hausmeister',
			category: 'Service',
			title: 'Winterdienst & Außenanlage',
			description:
				'Von der Grünpflege im Sommer bis zum Räumdienst im Winter, zuverlässige Betreuung Ihrer Außenanlagen das ganze Jahr über.',
			image: HausmeisterImage,
			width: 1024,
			height: 1024,
			alt: 'Winterdienst und Außenanlage'
		},
		{
			id: 'pflasterstein-wege',
			category: 'Reinigung',
			title: 'Pflasterstein & Wege',
			description:
				'Professionelle Hochdruckreinigung für Pflastersteine, Wege und Plätze, Ihr Außenbereich erstrahlt wieder wie neu.',
			image: pflasterstinImage,
			width: 1024,
			height: 1024,
			alt: 'Pflasterstein- und Wegereinigung'
		},
		{
			id: 'wohnungsaufloesung-entruempelung',
			category: 'Reinigung',
			title: 'Auflösung & Entrümpelung',
			description:
				'Stressfreie Wohnungsauflösung und Entrümpelung, wir kümmern uns schnell und zuverlässig um alles, auf Wunsch inklusive Entsorgung.',
			image: wohnungsaufloesung,
			width: 1024,
			height: 1024,
			alt: 'Wohnungsauflösung und Entrümpelung'
		},
		{
			id: 'solar-dach',
			category: 'Reinigung',
			title: 'Solar & Dachrinnen',
			description:
				'Saubere Solarpanele leisten mehr, wir reinigen Photovoltaikanlagen und Dachrinnen professionell mit moderner Maschinentechnik.',
			image: solarImage,
			width: 1024,
			height: 1024,
			alt: 'Solar- und Dachrinnenreinigung'
		},
		{
			id: 'entsorgung-recycling',
			category: 'Service',
			title: 'Entsorgung & Recycling',
			description:
				'Fachgerechte Entsorgung und umweltbewusstes Recycling nach Entrümpelungen oder Renovierungen, alles aus einer Hand.',
			image: EndsorgungImage,
			width: 1024,
			height: 1024,
			alt: 'Entsorgung und Recycling'
		},
		{
			id: 'industrie-reinigung',
			category: 'Reinigung',
			title: 'Industriere & Großküchen',
			description:
				'Tiefenreinigung von Produktionshallen, Großküchen und Maschinen, von Fettablagerungen bis zum Dunstabzug, professionell und gründlich.',
			image: IndustrieImage,
			width: 1024,
			height: 1024,
			alt: 'Industrie- und Großküchenreinigung'
		}
	];

	return (
		<section
			id="relume"
			className="px-[5%]  theme-color-scheme-2 bg-background   text-text-primary pb-16 md:pb-24 lg:pb-28 pt-6 md:pt-8"
		>
			<div className="container">
				{/* <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20" /> */}
				<div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
					{cards.map(card => (
						<div
							key={card.id}
							onClick={() => {
								router.push(`/${card.id}`);
							}}
							onKeyDown={e => {
								if (e.key === 'Enter' || e.key === ' ') {
									e.preventDefault();
									router.push(`/${card.id}`);
								}
							}}
							role="link"
							tabIndex={0}
							className="flex flex-col border-0 border-border-primary bg-foreground-primary"
						>
							<div className="flex w-full flex-col items-center justify-center self-start">
								<Image
									className="object-cover w-full h-90"
									src={card.image}
									width={card.width}
									height={card.height}
									alt={card.alt}
								/>
							</div>
							<div className="flex flex-1 flex-col justify-between  p-6 md:p-8">
								<div>
									{/* <p className="mb-2 font-semibold">{card.category}</p> */}
									<h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
										{card.title}
									</h2>
									<p>{card.description}</p>
								</div>

								<div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
									<Button
										title="Termin anfragen"
										variant="primary"
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
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
