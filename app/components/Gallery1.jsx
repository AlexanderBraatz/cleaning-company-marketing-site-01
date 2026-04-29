'use client';

import React from 'react';

import team from '@/public/images/team-group-new-outside.jpg';
import Image from 'next/image';
export function Gallery1() {
	return (
		<section
			id="relume"
			className="px-[5%] py-16 md:py-24 lg:py-28 theme-color-scheme-2 bg-background-primary   text-text-primary"
		>
			<div className="container">
				<div className="mb-12 text-center md:mb-18 lg:mb-20">
					<h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
						Unser Team in Aktion
					</h2>
					<p className="md:text-md">
						Professionelle Reinigung mit Gesicht und Herz für jeden Auftrag.
					</p>
				</div>
				<div className="grid auto-cols-fr grid-cols-1 gap-8">
					<a
						href="#"
						className="size-full"
					>
						<div className="w-full overflow-hidden">
							<Image
								src={team}
								alt="Relume placeholder image 1"
								className="aspect-video size-full object-cover"
								width={5151}
								height={3434}
							/>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
}
