'use client';

import Image from 'next/image';
import heroImage from '@/public/images/team-group-son-2.jpg';
import { Button } from '../relume-manually-added-components/Button';
import { RxChevronRight } from 'react-icons/rx';
import GlasCleaning from '@/public/images/team-solo-window-cleaning-outside-insideview-croped.jpg';
import UnterhlatsReinigungImage from '@/public/images/team-group-hoovering-gym.jpg';

export function Header30() {
	return (
		<section
			id="relume"
			className="relative theme-color-scheme-2 bg-background   text-text-primary "
		>
			<div className=" h-80  overflow-hidden ">
				<Image
					src={heroImage}
					alt="two team cleaning window"
					className="size-full object-cover relative top-15"
					width={7008}
					height={4672}
				/>
				{/* <div className="absolute inset-0 bg-black/50" /> */}
			</div>
			<div className=" relative z-10 bg-amber-1xx00 px-[5%]  ">
				<div className="flex max-h-[60rem] min-h-sxxxvh items-start flex-row justify-center py-1s6 text-left md:pyx-24 lg:py-2x8">
					<div className="w-[33vw] max-w-lg bg-amxxber-200 flex flex-col items-start ">
						<h1 className="mb-5 mt-10 text-6xl font-bold  text-text-primary md:mb-6 md:text-9xl lg:text-10xl">
							{/* Unterhaltsreinigung und Fassadenreinigung aus einer hand */}
							{/* GebäudeReinigung von Innen und vn Aussen  */}
							{/* Ihre kompletlösung für GebäudeReinigung */}
							{/* Ein Partner für alles on von vassade bis Innenraum wir Reinigne  */}
							{/* Ihr All-In-One Reinigungspartner */}
							{/* Ihr Partner für jeden Reinigungsbedarf */}
							Ein Partner für stressfreie RundumReinigung ihrer Gebäude
						</h1>
						<p className="text-text-primary md:text-md">
							{/* AK Crystal Clean ist ein Meisterbetrieb mit über 20 Jahren
							Erfahrung. Wir reinigen Ihre Fassaden, Büros und Außenanlagen mit
							zertifizierten Methoden und umweltfreundlichen Produkten. */}
							{/* Ob Fassadenreinigung oder Innenraumreinigung wir bringen alles zum
							glänzen. */}
							Mit 10+ Jahren Erfahrung biten wir ihen ein pased auf sie
							abgestimte sevice lösung an.
						</p>

						<div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
							<Button
								variant="primary"
								title="Termin anfragen"
							>
								Termin anfragen
							</Button>
							{/* <Button
								title="Anrufen"
								variant="secondary-alt"
								iconRight={<RxChevronRight />}
							>
								Anrufen
							</Button> */}
						</div>
					</div>

					<div className="flex items-center justify-center">
						<Image
							src={GlasCleaning}
							alt="two team cleaning window"
							className="size-full object-cover  h-90"
							width={2048}
							height={1365}
						/>
					</div>
					<div className="flex items-center justify-center">
						<Image
							src={UnterhlatsReinigungImage}
							alt="two team cleaning window"
							className="size-full object-cover  h-90"
							width={1024}
							height={1024}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
