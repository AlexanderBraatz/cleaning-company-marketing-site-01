'use client';

import One from '@/public/images/team-tshirtWinner-handingover.jpg';
import Two from '@/public/images/team-group-men.jpg';
import Three from '@/public/images/two-team-cleaning-window.jpg';
// import Three from '@/public/images/team-solo-hand-on-sink.jpg'; use this one if i cant get a beter quality verison of the leaning window image
import Four from '@/public/images/team-solo-manyArms-funny.jpg';
import { useTabletOrMobile } from '@/app/hooks/useTabletOrMobile';
import {
	AnimatePresence,
	motion,
	useScroll,
	useTransform
} from 'framer-motion';
import Image from 'next/image';
import { Fragment, ReactNode, useRef } from 'react';

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

export function Layout513() {
	const render = useTabletOrMobile();

	const useSctoll = useRelume({
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
			ref={useSctoll.containerRef}
			id="relume"
			className="px-[5%] theme-color-scheme-14 bg-background-primary   text-text-primary  py-16 md:py-24 lg:py-28"
		>
			<div className="container">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-20">
					<div className="flex flex-col gap-y-16 md:sticky md:top-40 md:pb-20  md:mt-20 md:h-[calc(100vh_-10rem)] md:justify-between">
						<div className="flex flex-col">
							<p className="mb-3 font-semibold md:mb-4">Unterschied</p>
							<h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
								Das macht AK Crystal Clean besonders
							</h2>
							<p className="md:text-md">
								Persönliche Ansprechpartner kennen Ihre Anforderungen und setzen
								sie gewissenhaft um.
							</p>
						</div>
						<div className="flex flex-col justify-start gap-y-8">
							<AnimatePresence>
								<Fragment key="feature-1">
									<ConditionalRender condition={render.isMobile}>
										<div>
											<h5 className="mb-3 text-xl font-bold">
												Familiäres Team
											</h5>
											<p>
												Jeder Kunde erhält einen persönlichen Ansprechpartner,
												der seine Anforderungen kennt.
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
												opacity: useSctoll.useGetStyles(0).opacity,
												y: useSctoll.useGetStyles(0).y
											}}
											initial={{ opacity: 0, y: 100 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.5 }}
											className="md:absolute first:md:relative"
										>
											<h5 className="font-bold md:mb-4 md:text-2xl">
												Familiäres Team
											</h5>
											<p className="md:text-md">
												Jeder Kunde erhält einen persönlichen Ansprechpartner,
												der seine Anforderungen kennt.
											</p>
										</motion.div>
									</ConditionalRender>
								</Fragment>
								<Fragment key="feature-2">
									<ConditionalRender condition={render.isMobile}>
										<div>
											<h5 className="mb-3 text-xl font-bold">
												Zertifizierte Methoden
											</h5>
											<p>
												Jeder Kunde erhält einen persönlichen Ansprechpartner,
												der seine Anforderungen kennt.
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
												opacity: useSctoll.useGetStyles(1).opacity,
												y: useSctoll.useGetStyles(1).y
											}}
											initial={false}
											animate={{}}
											transition={{}}
											className="md:absolute first:md:relative"
										>
											<h5 className="font-bold md:mb-4 md:text-2xl">
												Zertifizierte Methoden
											</h5>
											<p className="md:text-md">
												Jeder Kunde erhält einen persönlichen Ansprechpartner,
												der seine Anforderungen kennt.
											</p>
										</motion.div>
									</ConditionalRender>
								</Fragment>
								<Fragment key="feature-3">
									<ConditionalRender condition={render.isMobile}>
										<div>
											<h5 className="mb-3 text-xl font-bold">
												Umweltfreundliche Produkte
											</h5>
											<p>
												Wir passen unsere Dienste an Ihre Bedürfnisse an, nicht
												umgekehrt.
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
												opacity: useSctoll.useGetStyles(2).opacity,
												y: useSctoll.useGetStyles(2).y
											}}
											initial={false}
											animate={{}}
											transition={{}}
											className="md:absolute first:md:relative"
										>
											<h5 className="font-bold md:mb-4 md:text-2xl">
												Umweltfreundliche Produkte
											</h5>
											<p className="md:text-md">
												Wir passen unsere Dienste an Ihre Bedürfnisse an, nicht
												umgekehrt.
											</p>
										</motion.div>
									</ConditionalRender>
								</Fragment>
								<Fragment key="feature-4">
									<ConditionalRender condition={render.isMobile}>
										<div>
											<h5 className="mb-3 text-xl font-bold">
												Flexible Leistungen
											</h5>
											<p>
												Jeder Kunde erhält einen persönlichen Ansprechpartner,
												der seine Anforderungen kennt.
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
												opacity: useSctoll.useGetStyles(3).opacity,
												y: useSctoll.useGetStyles(3).y
											}}
											initial={false}
											animate={{}}
											transition={{}}
											className="md:absolute first:md:relative"
										>
											<h5 className="font-bold md:mb-4 md:text-2xl">
												Flexible Leistungen
											</h5>
											<p className="md:text-md">
												Jeder Kunde erhält einen persönlichen Ansprechpartner,
												der seine Anforderungen kennt.
											</p>
										</motion.div>
									</ConditionalRender>
								</Fragment>
							</AnimatePresence>
						</div>
					</div>
					<div className="hidden md:grid md:grid-cols-1 md:gap-4">
						<div className="h-[70vh] overflow-hidden">
							<Image
								src={One}
								alt="two team cleaning window"
								className="size-full object-cover"
								width={1024}
								height={1024}
							/>
						</div>
						<div className="h-[70vh] overflow-hidden">
							<Image
								src={Two}
								alt="two team cleaning window"
								className="size-full object-cover"
								width={1024}
								height={1024}
							/>
						</div>
						<div className="h-[70vh] overflow-hidden">
							<Image
								src={Three}
								alt="two team cleaning window"
								className="size-full object-cover"
								width={1024}
								height={1024}
							/>
						</div>
						<div className="h-[70vh] overflow-hidden">
							<Image
								src={Four}
								alt="two team cleaning window"
								className="size-full object-cover"
								width={1024}
								height={1024}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
