'use client';

import Image from 'next/image';
import React from 'react';
import { BiLogoDribbble, BiLogoLinkedinSquare } from 'react-icons/bi';
import { FaXTwitter } from 'react-icons/fa6';
import one from '@/public/images/team-solo-meditation.jpeg';
import two from '@/public/images/team-face-dusting.jpg';
import three from '@/public/images/team-many-arms.jpg';
import four from '@/public/images/team-boss-focus-arms-crossed.jpg';

export function Team2() {
	return (
		<section
			id="relume"
			className="px-[5%] theme-color-scheme-2 bg-background-primary   text-text-primary py-16 md:py-24 lg:py-28"
		>
			<div className="container">
				<div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
					<p className="mb-3 font-semibold md:mb-4">Team</p>
					<h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
						Unser Team
					</h2>
					<p className="md:text-md">
						Erfahrene Profis, die mit Leidenschaft arbeiten und Ihre Erwartungen
						übertreffen.
					</p>
				</div>
				<div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
					<div className="flex flex-col text-center">
						<div className="relative mb-5 size-full overflow-hidden pt-[66%] md:mb-6 md:pt-[100%]">
							<Image
								src={one}
								alt="Relume placeholder image"
								className="absolute inset-0 size-full object-cover"
							/>
						</div>
						<div className="mb-3 md:mb-4">
							<h5 className="text-md font-semibold md:text-lg">Klaus Müller</h5>
							<h6 className="md:text-md">Geschäftsführer</h6>
						</div>
						<p>
							Mit über 20 Jahren Erfahrung leitet Klaus das Unternehmen mit
							Kompetenz und Weitblick.
						</p>
						<div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
							<a href="#">
								<BiLogoLinkedinSquare className="size-6" />
							</a>
							<a href="#">
								<FaXTwitter className="size-6 p-0.5" />
							</a>
							<a href="#">
								<BiLogoDribbble className="size-6" />
							</a>
						</div>
					</div>
					<div className="flex flex-col text-center">
						<div className="relative mb-5 size-full overflow-hidden pt-[66%] md:mb-6 md:pt-[100%]">
							<Image
								src={two}
								alt="Relume placeholder image"
								className="absolute inset-0 size-full object-cover"
							/>
						</div>
						<div className="mb-3 md:mb-4">
							<h5 className="text-md font-semibold md:text-lg">Sandra Weber</h5>
							<h6 className="md:text-md">Projektleitung</h6>
						</div>
						<p>
							Sandra koordiniert jeden Auftrag mit Präzision und sorgt für
							reibungslose Abläufe.
						</p>
						<div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
							<a href="#">
								<BiLogoLinkedinSquare className="size-6" />
							</a>
							<a href="#">
								<FaXTwitter className="size-6 p-0.5" />
							</a>
							<a href="#">
								<BiLogoDribbble className="size-6" />
							</a>
						</div>
					</div>
					<div className="flex flex-col text-center">
						<div className="relative mb-5 size-full overflow-hidden pt-[66%] md:mb-6 md:pt-[100%]">
							<Image
								src={three}
								alt="Relume placeholder image"
								className="absolute inset-0 size-full object-cover"
							/>
						</div>
						<div className="mb-3 md:mb-4">
							<h5 className="text-md font-semibold md:text-lg">Thomas Bauer</h5>
							<h6 className="md:text-md">Fassadenspezialist</h6>
						</div>
						<p>
							Thomas bringt Fassaden zum Glänzen mit Fachwissen und modernen
							Techniken.
						</p>
						<div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
							<a href="#">
								<BiLogoLinkedinSquare className="size-6" />
							</a>
							<a href="#">
								<FaXTwitter className="size-6 p-0.5" />
							</a>
							<a href="#">
								<BiLogoDribbble className="size-6" />
							</a>
						</div>
					</div>
					<div className="flex flex-col text-center">
						<div className="relative mb-5 size-full overflow-hidden pt-[66%] md:mb-6 md:pt-[100%]">
							<Image
								src={four}
								alt="Relume placeholder image"
								className="absolute inset-0 size-full object-cover"
							/>
						</div>
						<div className="mb-3 md:mb-4">
							<h5 className="text-md font-semibold md:text-lg">
								Maria Schmidt
							</h5>
							<h6 className="md:text-md">Kundenbetreuung</h6>
						</div>
						<p>
							Maria ist erste Ansprechpartnerin und sorgt für persönliche,
							freundliche Kommunikation.
						</p>
						<div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
							<a href="#">
								<BiLogoLinkedinSquare className="size-6" />
							</a>
							<a href="#">
								<FaXTwitter className="size-6 p-0.5" />
							</a>
							<a href="#">
								<BiLogoDribbble className="size-6" />
							</a>
						</div>
					</div>
				</div>
				<div className="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24" />
			</div>
		</section>
	);
}
