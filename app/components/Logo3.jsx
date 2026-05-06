'use client';

import React from 'react';
import Image from 'next/image';

import hoeffnerLogo from '@/public/images/logo-hoffner-croped.png';
import altenheimLogo from '@/public/images/logo-altenheim-cropped.png';
import bauhausLogo from '@/public/images/logo-bauhause-white-background.png';
import dmLogo from '@/public/images/logo-dm.png';
import ixmalLogo from '@/public/images/logo-ixmal-with-background.png';
import kraftwerkLogo from '@/public/images/logo-kraftwerk-background-grey.png';

export function Logo3() {
	const logos = [
		{ src: hoeffnerLogo, alt: 'Höffner' },
		{ src: altenheimLogo, alt: 'Altenheim' },
		{ src: bauhausLogo, alt: 'BAUHAUS' },
		{ src: dmLogo, alt: 'dm' },
		{ src: ixmalLogo, alt: 'Ixmal' },
		{ src: kraftwerkLogo, alt: 'Kraftwerk' }
	];

	// Repeat to keep the marquee visually filled across viewports
	const marqueeLogos = [...logos, ...logos];

	return (
		<section
			id="relume"
			className="overflow-hidden xxpy-12 xxmd:py-16 xxlg:py-20 theme-color-scheme-2 bg-background   text-text-primary"
		>
			<div className="container mb-8 w-full max-w-lg px-[5%] md:mb-10 lg:mb-12">
				{/* <h1 className="text-center text-base font-bold leading-[1.2] md:text-md md:leading-[1.2]">
					Vertrauen von führenden Unternehmen in der Region
				</h1> */}
			</div>
			<div className="flex items-center pt-7 md:pt-0">
				<div className="flex shrink-0 animate-loop-horizontally items-center">
					{marqueeLogos.map((logo, index) => (
						<Image
							key={`marquee-a-${index}`}
							className="logo-partner-mauve-mono mx-7 max-h-12 w-auto shrink-0 object-contain md:mx-10 md:max-h-14"
							src={logo.src}
							alt={logo.alt}
						/>
					))}
				</div>
				<div className="flex shrink-0 animate-loop-horizontally items-center">
					{marqueeLogos.map((logo, index) => (
						<Image
							key={`marquee-b-${index}`}
							className="logo-partner-mauve-mono mx-7 max-h-12 w-auto shrink-0 object-contain md:mx-10 md:max-h-14"
							src={logo.src}
							alt={logo.alt}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
