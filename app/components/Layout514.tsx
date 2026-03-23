'use client';
import One from '@/public/images/team-face-dusting.jpg';
import Two from '@/public/images/team-many-arms.jpg';
import Three from '@/public/images/team-hand-on-sink.jpg';
import Four from '@/public/images/team-boss-jumping.jpg';

import { useTabletOrMobile } from '@/app/hooks/useTabletOrMobile';
import {
	AnimatePresence,
	motion,
	useScroll,
	useTransform
} from 'framer-motion';
import { Fragment, ReactNode, useRef } from 'react';
import Image from 'next/image';

const ConditionalRender = ({
	condition,
	children
}: {
	condition: boolean;
	children: ReactNode;
}) => {
	return condition ? <>{children}</> : null;
};

interface RelumeItem {
	heading: string;
	description: string;
	image: { src: string; alt: string };
	imageMobile: { src: string; alt: string };
}

const useRelume = ({ data }: { data: RelumeItem[] }) => {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start center', 'end center']
	});
	const useGetStyles = (index: number) => {
		const startProgress = index / data.length;
		const endProgress = (index + 1) / data.length;
		const opacity = useTransform(
			scrollYProgress,
			[
				Math.max(0, startProgress - 0.07),
				startProgress,
				endProgress - 0.07,
				Math.min(1, endProgress)
			],
			[0, 1, 1, 0]
		);
		const y = useTransform(
			scrollYProgress,
			[
				Math.max(0, startProgress - 0.1),
				startProgress,
				endProgress - 0.1,
				Math.min(1, endProgress)
			],
			[100, 0, 0, -100]
		);
		return { opacity, y };
	};
	return { containerRef, useGetStyles };
};

// const useMobile = () => {
// 	const isMobile = useMediaQuery('(max-width: 767px)');
// 	return { isMobile };
// };

// const useTablet = () => {
// 	const isTablet = useMediaQuery('(min-width: 768px)');
// 	return { isTablet };
// };

export function Layout514() {
	const render = useTabletOrMobile();
	const useScroll = useRelume({
		data: [
			{
				heading: '01 Feature one',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
				image: {
					src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1-portrait.svg',
					alt: 'Relume placeholder image 1'
				},
				imageMobile: {
					src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg',
					alt: 'Relume placeholder image 1'
				}
			},
			{
				heading: '02 Feature two',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
				image: {
					src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2-portrait.svg',
					alt: 'Relume placeholder image 2'
				},
				imageMobile: {
					src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg',
					alt: 'Relume placeholder image 2'
				}
			},
			{
				heading: '03 Feature three',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
				image: {
					src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3-portrait.svg',
					alt: 'Relume placeholder image 3'
				},
				imageMobile: {
					src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg',
					alt: 'Relume placeholder image 3'
				}
			},
			{
				heading: '04 Feature four',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
				image: {
					src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4-portrait.svg',
					alt: 'Relume placeholder image 4'
				},
				imageMobile: {
					src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg',
					alt: 'Relume placeholder image 4'
				}
			}
		]
	});
	return (
		<section
			ref={useScroll.containerRef}
			id="relume"
			className="px-[5%] theme-color-scheme-14 bg-background-primary   text-text-primary py-16 md:py-24 lg:py-28"
			// ref={useScroll.containerRef}
		>
			<div className="container">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-20">
					<div className="hidden md:grid md:grid-cols-1 md:gap-4">
						<div className="h-screen overflow-hidden">
							<Image
								src={One}
								alt="two team cleaning window"
								className="size-full object-cover"
								width={1024}
								height={1024}
							/>
						</div>
						<div className="h-screen overflow-hidden">
							<Image
								src={Two}
								alt="two team cleaning window"
								className="size-full object-cover"
								width={1024}
								height={1024}
							/>
						</div>
						<div className="h-screen overflow-hidden">
							<Image
								src={Three}
								alt="two team cleaning window"
								className="size-full object-cover"
								width={1024}
								height={1024}
							/>
						</div>
						<div className="h-screen overflow-hidden">
							<Image
								src={Four}
								alt="two team cleaning window"
								className="size-full object-cover"
								width={1024}
								height={1024}
							/>
						</div>
					</div>
					<div className="flex flex-col gap-y-16 md:sticky md:top-40 md:pb-20 md:h-[calc(100vh_-10rem)] md:justify-between">
						<div className="flex  flex-col">
							<p className="mb-3 font-semibold md:mb-4">Qualität</p>
							<h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
								Warum AK Crystal Clean wählen
							</h2>
							<p className="md:text-md mb-8">
								Wir setzen auf Zuverlässigkeit und persönliche Betreuung. Unser
								Team arbeitet mit modernen Methoden und umweltfreundlichen
								Produkten für Ihre Zufriedenheit.
							</p>
						</div>
						<div className="flex flex-col justify-center gap-y-8">
							<AnimatePresence>
								<Fragment key="feature-1">
									<ConditionalRender condition={render.isMobile}>
										<div>
											<h5 className="mb-3 text-xl font-bold">
												Zuverlässigkeit
											</h5>
											<p>
												Wir behandeln jeden Kunden wie einen Teil unserer
												Familie.
											</p>
											<div className="mt-4">
												<img
													src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg"
													alt="Relume placeholder image 1"
													className="size-full"
												/>
											</div>
										</div>
									</ConditionalRender>
									<ConditionalRender condition={render.isTablet}>
										<motion.div
											style={{
												opacity: useScroll.useGetStyles(0).opacity,
												y: useScroll.useGetStyles(0).y
											}}
											initial={{ opacity: 0, y: 100 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.5 }}
											className="md:absolute first:md:relative"
										>
											<h5 className="font-bold md:mb-4 md:text-2xl">
												Zuverlässigkeit
											</h5>
											<p className="md:text-md">
												Wir behandeln jeden Kunden wie einen Teil unserer
												Familie.
											</p>
										</motion.div>
									</ConditionalRender>
								</Fragment>
								<Fragment key="feature-2">
									<ConditionalRender condition={render.isMobile}>
										<div>
											<h5 className="mb-3 text-xl font-bold">Freundlichkeit</h5>
											<p>
												Wir behandeln jeden Kunden wie einen Teil unserer
												Familie.
											</p>
											<div className="mt-4">
												<img
													src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg"
													alt="Relume placeholder image 2"
													className="size-full"
												/>
											</div>
										</div>
									</ConditionalRender>
									<ConditionalRender condition={render.isTablet}>
										<motion.div
											style={{
												opacity: useScroll.useGetStyles(1).opacity,
												y: useScroll.useGetStyles(1).y
											}}
											initial={false}
											animate={{}}
											transition={{}}
											className="md:absolute first:md:relative"
										>
											<h5 className="font-bold md:mb-4 md:text-2xl">
												Freundlichkeit
											</h5>
											<p className="md:text-md">
												Wir behandeln jeden Kunden wie einen Teil unserer
												Familie.
											</p>
										</motion.div>
									</ConditionalRender>
								</Fragment>
								<Fragment key="feature-3">
									<ConditionalRender condition={render.isMobile}>
										<div>
											<h5 className="mb-3 text-xl font-bold">
												Individuelle Betreuung
											</h5>
											<p>
												Höchste Standards in Ausführung, Material und
												Kundenservice sind selbstverständlich.
											</p>
											<div className="mt-4">
												<img
													src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg"
													alt="Relume placeholder image 3"
													className="size-full"
												/>
											</div>
										</div>
									</ConditionalRender>
									<ConditionalRender condition={render.isTablet}>
										<motion.div
											style={{
												opacity: useScroll.useGetStyles(2).opacity,
												y: useScroll.useGetStyles(2).y
											}}
											initial={false}
											animate={{}}
											transition={{}}
											className="md:absolute first:md:relative"
										>
											<h5 className="font-bold md:mb-4 md:text-2xl">
												Individuelle Betreuung
											</h5>
											<p className="md:text-md">
												Höchste Standards in Ausführung, Material und
												Kundenservice sind selbstverständlich.
											</p>
										</motion.div>
									</ConditionalRender>
								</Fragment>
								<Fragment key="feature-4">
									<ConditionalRender condition={render.isMobile}>
										<div>
											<h5 className="mb-3 text-xl font-bold">
												Premium-Service
											</h5>
											<p>
												Wir behandeln jeden Kunden wie einen Teil unserer
												Familie.
											</p>
											<div className="mt-4">
												<img
													src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg"
													alt="Relume placeholder image 4"
													className="size-full"
												/>
											</div>
										</div>
									</ConditionalRender>
									<ConditionalRender condition={render.isTablet}>
										<motion.div
											style={{
												opacity: useScroll.useGetStyles(3).opacity,
												y: useScroll.useGetStyles(3).y
											}}
											initial={false}
											animate={{}}
											transition={{}}
											className="md:absolute first:md:relative"
										>
											<h5 className="font-bold md:mb-4 md:text-2xl">
												Premium-Service
											</h5>
											<p className="md:text-md">
												Wir behandeln jeden Kunden wie einen Teil unserer
												Familie.
											</p>
										</motion.div>
									</ConditionalRender>
								</Fragment>
							</AnimatePresence>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
