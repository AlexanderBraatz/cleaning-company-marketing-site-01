'use client';

import { Button } from '../relume-manually-added-components/Button';
import dusting from '@/public/images/team-solo-dusting-mirrored-croped.png';
import window from '@/public/images/team-solo-window-mirrored-croped.png';
import Image from 'next/image';

import React from 'react';

export function Header84() {
	return (
		<section
			id="relume"
			className="px-[5%] py-12 md:py-16 lg:py-12  theme-color-scheme-2 bg-background   text-text-primary"
		>
			<div className="container">
				<div className="grid auto-cols-fr gap-40 py-8 md:py-12 grid-cols-1   lg:grid-cols-2">
					<div className="flex flex-col justify-items-start justify-between ">
						<div>
							<h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
								{/* Stressfreie Rundumreinigung ihrer Gebäude */}
								Ihr Partner für jeden Reinigungsbedarf
							</h1>
							<p className="md:text-md">
								Wir reinigen Ihre Fassaden, Büros und Außenanlagen mit
								zertifizierten Methoden und umweltfreundlichen Produkten.
							</p>
						</div>

						<div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
							<Button
								title="Termin anfragen"
								variant="primary"
							>
								Termin anfragen
							</Button>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-[2px] bg-text-primary h-100 overflow-hidden  border-2 border-text-primary ">
						<Image
							src={dusting}
							className="w-full h-full object-cover"
							alt="Dusting"
							width={1757}
							height={2636}
						/>
						<Image
							src={window}
							className="w-full h-full object-cover"
							alt="Window"
							height={2636}
							width={1757}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
