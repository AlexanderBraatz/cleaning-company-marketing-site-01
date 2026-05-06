'use client';

import Image from 'next/image';
import heroImage from '@/public/images/team-group-son-2-cropped-more.jpg';
export function HeaderFullwidthImage() {
	return (
		<section
			id="relume"
			className="relative theme-color-scheme-2 bg-background   text-text-primary "
		>
			<div className="relative h-45 overflow-hidden">
				<Image
					src={heroImage}
					alt="two team cleaning window"
					className="relative size-full object-cover object-top"
					width={7008}
					height={4672}
				/>
				<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/50" />
			</div>
		</section>
	);
}
