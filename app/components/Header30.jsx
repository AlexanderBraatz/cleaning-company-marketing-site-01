'use client';

import Image from 'next/image';
import heroImage from '@/public/images/team-group-son-2.jpg';
import { Button } from '../relume-manually-added-components/Button';
import { RxChevronRight } from 'react-icons/rx';

export function Header30() {
	return (
		<section
			id="relume"
			className="relative px-[5%] theme-color-scheme-2 bg-background   text-text-primary "
		>
			<div className="container relative z-10">
				<div className="flex max-h-[60rem] min-h-svh items-center justify-center py-16 text-center md:py-24 lg:py-28">
					<div className="w-full max-w-lg">
						<h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
							Professionelle Gebäudereinigung aus Gründau
						</h1>
						<p className="text-text-alternative md:text-md">
							AK Crystal Clean ist ein Meisterbetrieb mit über 20 Jahren
							Erfahrung. Wir reinigen Ihre Fassaden, Büros und Außenanlagen mit
							zertifizierten Methoden und umweltfreundlichen Produkten.
						</p>
						<div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
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
				<Image
					src={heroImage}
					alt="two team cleaning window"
					className="size-full object-cover"
					width={7008}
					height={4672}
				/>
				<div className="absolute inset-0 bg-black/50" />
			</div>
		</section>
	);
}
