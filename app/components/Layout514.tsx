'use client';
import One from '@/public/images/team-group-arms-outside.jpg';
import Two from '@/public/images/team-two-happy.jpg';
import Three from '@/public/images/team-group-inAction-gym.jpg';
import Four from '@/public/images/team-solo-window-inside.jpg';

import { useTabletOrMobile } from '@/app/hooks/useTabletOrMobile';
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { RxDotFilled } from 'react-icons/rx';

const ConditionalRender = ({
	condition,
	children
}: {
	condition: boolean;
	children: ReactNode;
}) => {
	return condition ? <>{children}</> : null;
};

export function Layout514() {
	const render = useTabletOrMobile();
	const desktopFeatures = useMemo(
		() => [
			{
				heading: 'Zuverlässigkeit',
				description: 'Wir behandeln jeden Kunden wie einen Teil unserer Familie.'
			},
			{
				heading: 'Freundlichkeit',
				description: 'Wir behandeln jeden Kunden wie einen Teil unserer Familie.'
			},
			{
				heading: 'Individuelle Betreuung',
				description:
					'Höchste Standards in Ausführung, Material und Kundenservice sind selbstverständlich.'
			},
			{
				heading: 'Premium-Service',
				description: 'Wir behandeln jeden Kunden wie einen Teil unserer Familie.'
			}
		],
		[]
	);

	const [activeIndex, setActiveIndex] = useState(0);
	const desktopImageRefs = useRef<Array<HTMLDivElement | null>>([]);

	useEffect(() => {
		if (!render.isTablet) return;

		let rafId: number | null = null;

		const updateActiveFromViewportCenter = () => {
			rafId = null;

			const viewportCenterY = window.innerHeight / 2;
			let bestIndex = 0;
			let bestDistance = Number.POSITIVE_INFINITY;

			desktopImageRefs.current.forEach((el, index) => {
				if (!el) return;
				const rect = el.getBoundingClientRect();
				const centerY = rect.top + rect.height / 2;
				const distance = Math.abs(centerY - viewportCenterY);
				if (distance < bestDistance) {
					bestDistance = distance;
					bestIndex = index;
				}
			});

			setActiveIndex(bestIndex);
		};

		const onScrollOrResize = () => {
			if (rafId != null) return;
			rafId = window.requestAnimationFrame(updateActiveFromViewportCenter);
		};

		window.addEventListener('scroll', onScrollOrResize, { passive: true });
		window.addEventListener('resize', onScrollOrResize);
		onScrollOrResize();

		return () => {
			if (rafId != null) window.cancelAnimationFrame(rafId);
			window.removeEventListener('scroll', onScrollOrResize);
			window.removeEventListener('resize', onScrollOrResize);
		};
	}, [render.isTablet]);

	return (
		<section
			id="relume"
			className="px-[5%] theme-color-scheme-14 bg-background-primary   text-text-primary py-16 md:py-24 lg:py-28"
		>
			<div className="container">
				<div className="mx-auto mb-12 flex max-w-3xl flex-col text-center md:mb-16">
					<p className="mb-3 text-sm font-semibold uppercase tracking-wide text-text-primary/60">
						Unser Anspruch
					</p>

					<h2 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
						Saubere Arbeit. Persönlich, zuverlässig und mit Blick fürs Detail.
					</h2>

					<p className="mx-auto max-w-2xl text-base text-text-primary/70 md:text-md">
						Ein Team, das sorgfältig arbeitet, freundlich auftritt und jeden Auftrag
						mit Verantwortung behandelt.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-20">
					<div className="hidden md:grid md:grid-cols-1 md:gap-40">
						<div
							ref={(el) => {
								desktopImageRefs.current[0] = el;
							}}
							className="h-[70vh] overflow-hidden"
						>
							<Image
								src={One}
								alt="two team cleaning window"
								className="size-full object-cover"
								width={1024}
								height={1024}
							/>
						</div>
						<div
							ref={(el) => {
								desktopImageRefs.current[1] = el;
							}}
							className="h-[70vh] overflow-hidden"
						>
							<Image
								src={Two}
								alt="two team cleaning window"
								className="size-full object-cover"
								width={1024}
								height={1024}
							/>
						</div>
						<div
							ref={(el) => {
								desktopImageRefs.current[2] = el;
							}}
							className="h-[70vh] overflow-hidden"
						>
							<Image
								src={Three}
								alt="two team cleaning window"
								className="size-full object-cover"
								width={1024}
								height={1024}
							/>
						</div>
						<div
							ref={(el) => {
								desktopImageRefs.current[3] = el;
							}}
							className="h-[70vh] overflow-hidden"
						>
							<Image
								src={Four}
								alt="two team cleaning window"
								className="size-full object-cover"
								width={1024}
								height={1024}
							/>
						</div>
					</div>
					<div className="flex flex-col gap-y-16 md:sticky md:top-40 md:pb-20 md:h-[calc(100vh-10rem)] md:justify-center md:gap-y-20">
						<div className="flex flex-col justify-center gap-y-8">
							<ConditionalRender condition={render.isTablet}>
								<div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
									{desktopFeatures.map((feature, index) => {
										const isActive = index === activeIndex;
										return (
											<div key={feature.heading} className="flex self-start">
												<div className="mr-6 flex-none self-start">
													<RxDotFilled
														aria-hidden="true"
														className={[
															'size-12 transition-colors duration-300',
															isActive
																? 'text-text-primary'
																: 'text-text-primary/30'
														].join(' ')}
													/>
												</div>
												<div>
													<h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
														{feature.heading}
													</h3>
													<p>{feature.description}</p>
												</div>
											</div>
										);
									})}
								</div>
							</ConditionalRender>

							<ConditionalRender condition={render.isMobile}>
								<div className="flex flex-col gap-y-12">
									<div>
										<h5 className="mb-3 text-xl font-bold">Zuverlässigkeit</h5>
										<p>Wir behandeln jeden Kunden wie einen Teil unserer Familie.</p>
										<div className="mt-4">
											<img
												src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg"
												alt="Relume placeholder image 1"
												className="size-full"
											/>
										</div>
									</div>

									<div>
										<h5 className="mb-3 text-xl font-bold">Freundlichkeit</h5>
										<p>Wir behandeln jeden Kunden wie einen Teil unserer Familie.</p>
										<div className="mt-4">
											<img
												src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg"
												alt="Relume placeholder image 2"
												className="size-full"
											/>
										</div>
									</div>

									<div>
										<h5 className="mb-3 text-xl font-bold">Individuelle Betreuung</h5>
										<p>
											Höchste Standards in Ausführung, Material und Kundenservice
											sind selbstverständlich.
										</p>
										<div className="mt-4">
											<img
												src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg"
												alt="Relume placeholder image 3"
												className="size-full"
											/>
										</div>
									</div>

									<div>
										<h5 className="mb-3 text-xl font-bold">Premium-Service</h5>
										<p>Wir behandeln jeden Kunden wie einen Teil unserer Familie.</p>
										<div className="mt-4">
											<img
												src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg"
												alt="Relume placeholder image 4"
												className="size-full"
											/>
										</div>
									</div>
								</div>
							</ConditionalRender>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
