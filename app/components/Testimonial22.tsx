'use client';

import { Button } from '@relume_io/relume-ui';

import { RxChevronRight } from 'react-icons/rx';
import privateunterhaltsrienigung from '@/public/images/client-solo-private.jpeg';
import buisnessunterhaltsreinigung from '@/public/images/client-solo-stock-older.webp';
import businessFasadenreinigung from '@/public/images/client-solo-stock-young.jpg';
import Image from 'next/image';

export function Testimonial22() {
	return (
		<section
			id="relume"
			className="px-[5%] theme-color-scheme-14 bg-background-primary   text-text-primary py-16 md:py-24 lg:py-28"
		>
			<div className="container">
				<div className="mb-12 md:mb-18 lg:mb-20">
					<h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
						Kundenstimmen
					</h2>
					<p className="md:text-md">
						Das sagen unsere zufriedenen Kunden über unsere Arbeit.
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					<div className="flex w-full flex-col items-start justify-between bg-foreground-primary border-0 p-6 md:p-8">
						<div className="rb-5 mb-5 md:mb-6">
							{/* <div className="mb-8 md:mb-10 lg:mb-12"></div> */}
							<blockquote className="md:text-md">
								{`"AK Crystal Clean hat unsere Büros verwandelt. Pünktlich,
								zuverlässig und freundlich."`}
							</blockquote>
							<div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
								<div>
									<Image
										src={privateunterhaltsrienigung}
										alt="privateunterhaltsrienigung"
										className="size-12 min-h-12 min-w-12 rounded-full object-cover"
									/>
								</div>
								<div>
									<p className="font-semibold">Petra Hoffmann</p>
									<p>Geschäftsführerin, Hoffmann GmbH</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex w-full flex-col items-start justify-between bg-foreground-primary border-0 p-6 md:p-8">
						<div className="rb-5 mb-5 md:mb-6">
							<blockquote className="md:text-md">
								{`"Die Fassadenreinigung war beeindruckend. Unser Gebäude sieht
								wieder wie neu aus."`}
							</blockquote>
							<div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
								<div>
									<Image
										src={buisnessunterhaltsreinigung}
										alt="Testimonial avatar"
										className="size-12 min-h-12 min-w-12 rounded-full object-cover"
									/>
								</div>
								<div>
									<p className="font-semibold">Robert Keller</p>
									<p>Immobilienverwalter, Keller inc.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex w-full flex-col items-start justify-between bg-foreground-primary border-0 p-6 md:p-8">
						<div className="rb-5 mb-5 md:mb-6">
							<blockquote className="md:text-md">
								{`"Flexible Leistungen, faire Preise und echte Partnerschaft.
								Genau das haben wir gesucht."`}
							</blockquote>
							<div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
								<div>
									<Image
										src={businessFasadenreinigung}
										alt="Testimonial avatar"
										className="size-12 min-h-12 min-w-12 rounded-full object-cover"
									/>
								</div>
								<div>
									<p className="font-semibold">Anke Richter</p>
									<p>Betriebsleiterin, Richter Industrie</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
