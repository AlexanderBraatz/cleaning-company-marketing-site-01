'use client';

import React from 'react';
import heroImage from '@/public/images/two-team-cleaning-window.jpg';
import Image from 'next/image';
import { Button } from '../relume-manually-added-components/Button';
import { RxChevronRight } from 'react-icons/rx';

export function Header5() {
	return (
		<section
			id="relume"
			className="relative px-[5%]  theme-color-scheme-2 bg-background   text-text-primary "
		>
			<div className="container relative z-10">
				<div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
					<div className="max-w-lg">
						<h1 className="mb-6 text-6xl font-bold text-text-alternative  md:text-9xl lg:text-3xl">
							ob von Innen oder von Aussen
						</h1>
						<h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-10 md:text-9xl lg:text-8xl">
							Wir reinigen Ihre Gebäude
						</h1>
						<p className="text-text-alternative md:text-md">
							AK Crystal Clean bietet umfassende Reinigungslösungen für
							Unternehmen und Büros. Mit Zuverlässigkeit und modernen Methoden
							sorgen wir für strahlend saubere Gebäude.
						</p>
						<div className="mt-6 flex flex-wrap gap-4 md:mt-8">
							<Button
								variant="primary"
								title="Termin anfragen"
							>
								Termin anfragen
							</Button>
							<Button
								title="Anrufen"
								variant="secondary-alt"
								iconRight={<RxChevronRight />}
							>
								Anrufen
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute inset-0 z-0">
				{/* <img
					src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
					className="size-full object-cover"
					alt="Relume placeholder image"
				/> */}
				<Image
					src={heroImage}
					alt="two team cleaning window"
					className="size-full object-cover"
					width={1024}
					height={1024}
				/>
				<div className="absolute inset-0 bg-linear-to-r from-[#1e1822]/90 from-30% to-transparent" />
			</div>
		</section>
	);
}
