'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import icon3 from '@/public/images/logo-ak-crystal-clean.png';

const AnimationSection = () => {
	const scrollSectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: scrollSectionRef,
		offset: ['start 55%', 'start start']
	});
	const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
	return (
		<div
			ref={scrollSectionRef}
			className="absolute left-8 right-auto top-[10%] h-3/4 w-0.5 bg-black/15 md:left-[2.4375rem]"
		>
			<motion.div
				className="bg-black"
				style={{ height }}
			/>
		</div>
	);
};

export function Layout121() {
	return (
		<section
			id="relume"
			className="px-[5%] py-16 md:py-24 lg:py-28  theme-color-scheme-2 bg-background   text-text-primary  py-16 "
		>
			<div className="container">
				<div className="grid grid-cols-1 items-start gap-y-8 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
					<div>
						<p className="mb-3 font-semibold md:mb-4">Unser Prozess</p>
						<h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
							In 4 Schritten zum Glänzen so funktioniert’s
						</h2>
					</div>

					<div className="relative">
						<AnimationSection />
						<div className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10">
							<div className="relative flex flex-col items-center justify-start py-10">
								<div className="relative rounded-full z-10 -mt-4 bg-white px-2 py-2 md:px-2">
									<Image
										src={icon3}
										alt="Relume icon 3"
										className="size-16"
										width={1000}
										height={1000}
									/>
								</div>
							</div>
							<div className="py-10">
								<h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
									1. Anfragen senden
								</h6>
								<p>Wir melden uns innerhalb von 24 Stunden.</p>
							</div>
						</div>
						<div className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10">
							<div className="relative flex flex-col items-center justify-start py-10">
								<div className="relative rounded-full z-10 -mt-4 bg-white px-2 py-2 md:px-2">
									<Image
										src={icon3}
										alt="Relume icon 3"
										className="size-16"
										width={1000}
										height={1000}
									/>
								</div>
							</div>
							<div className="py-10">
								<h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
									2. Telefongespräch
								</h6>
								<p>Wir besprechen, was wir für Sie reinigen können.</p>
							</div>
						</div>
						<div className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10">
							<div className="relative flex flex-col items-center justify-start py-10">
								<div className="relative rounded-full z-10 -mt-4 bg-white px-2 py-2 md:px-2">
									<Image
										src={icon3}
										alt="Relume icon 3"
										className="size-16"
										width={1000}
										height={1000}
									/>
								</div>
							</div>
							<div className="py-10">
								<h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
									3. Reinigung
								</h6>
								<p>Unser Team führt die Reinigung durch.</p>
							</div>
						</div>
						<div className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10">
							<div className="relative flex flex-col items-center justify-start py-10">
								<div className="relative rounded-full z-10 -mt-4 bg-white px-2 py-2 md:px-2">
									<Image
										src={icon3}
										alt="Relume icon 3"
										className="size-16"
										width={1000}
										height={1000}
									/>
								</div>
							</div>
							<div className="py-10">
								<h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
									4. Kontrolle
								</h6>
								<p>Die Chefs machen persönlich Stichproben.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
