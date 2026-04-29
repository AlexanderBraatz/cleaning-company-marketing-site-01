'use client';

import Image from 'next/image';
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

import olga from '@/public/images/team-group-and-olga-fun-cropped.png';

import riener from '@/public/images/team-solo-Reiner-other-boss-cropped.png';
import mehmet from '@/public/images/team-mehmet-solo-cropped.png';
import son from '@/public/images/team-son-solo-cropped.png';
const teamMembers = [
	{
		id: 'Olga-Klug',
		name: 'Olga Klug',
		role: 'Personalmanagement',
		bio: 'Olga sorgt dafür, dass sich unser Team wohlfühlt und jeden Tag engagiert arbeitet.',
		image: olga,
		phone: '06051 7002010'
	},
	{
		id: 'Mehmet-Akca',
		name: 'Mehmet Akca',
		role: 'Geschäftsführer',
		bio: 'Mehmet steht persönlich für Qualität, prüft Aufträge vor Ort und sichert den Crystal Clean Standard.',
		image: mehmet,
		phone: '06051 7002010'
	},
	{
		id: 'Reiner-bauer',
		name: 'Reiner Bauer',
		role: 'Kundenbetreuung',
		bio: 'Reiner betreut unsere Kunden zuverlässig und sorgt für schnelle, unkomplizierte Lösungen.',
		image: riener,
		phone: '06051 7002010'
	},
	{
		id: 'sohn-Akca',
		name: 'Sohn Akca',
		role: 'Fassadenspezialist',
		bio: 'Er reinigt Fassaden und Glasflächen präzise, gründlich und umweltbewusst.',
		image: son,
		phone: '06051 7002010'
	}
];
const phoneToHref = phone => `tel:${phone.replace(/[^\d+]/g, '')}`;

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
					{teamMembers.map(member => (
						<div
							key={member.id}
							className="flex flex-col text-center"
						>
							<div className="relative mb-5 size-full overflow-hidden pt-[66%] md:mb-6 md:pt-[100%]">
								<Image
									src={member.image}
									alt={member.name}
									className="absolute inset-0 size-full object-cover"
								/>
							</div>
							<div className="mb-3 md:mb-4">
								<h5 className="text-md font-semibold md:text-lg">
									{member.name}
								</h5>
								<h6 className="md:text-md">{member.role}</h6>
							</div>
							<p>{member.bio}</p>
							<a
								href={phoneToHref(member.phone)}
								className="mt-6 inline-flex items-center gap-2 self-center underline-offset-4 hover:underline"
							>
								{/* <FaPhoneAlt
									className="size-5"
									aria-hidden="true"
								/> */}
								<FiPhone
									className="size-5"
									aria-hidden="true"
								/>
								<span>{member.phone}</span>
							</a>
						</div>
					))}
				</div>
				<div className="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24" />
			</div>
		</section>
	);
}
