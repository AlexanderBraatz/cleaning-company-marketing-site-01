'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@relume_io/relume-ui';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import team from '@/public/images/team-group-new-outside.jpg';
import team2 from '@/public/images/team-group-cleaningProducts.jpg';
import team3 from '@/public/images/team-boss-center.jpg';
import Image from 'next/image';

const useCarousel = () => {
	const [api, setApi] = useState();
	const [current, setCurrent] = useState(1);

	useEffect(() => {
		if (!api) {
			return;
		}
		const handleSelect = () => {
			setCurrent(api.selectedScrollSnap() + 1);
		};

		const rafId = requestAnimationFrame(handleSelect);
		api.on('select', handleSelect);
		api.on?.('reInit', handleSelect);

		return () => {
			cancelAnimationFrame(rafId);
			api.off?.('select', handleSelect);
			api.off?.('reInit', handleSelect);
		};
	}, [api]);

	const handleDotClick = index => () => {
		if (api) {
			api.scrollTo(index);
		}
	};

	const dotClassName = index => {
		return `relative mx-[3px] inline-block size-2 rounded-full ${
			current === index + 1 ? 'bg-black' : 'bg-neutral-darker/40'
		}`;
	};

	const currentClassName = index => {
		return clsx(
			'aspect-video size-full object-cover transition-opacity duration-700 ease-linear',
			{
				'opacity-30': current !== index + 1
			}
		);
	};

	return {
		api,
		setApi,
		current,
		handleDotClick,
		dotClassName,
		currentClassName
	};
};

export function Gallery14() {
	const carouselState = useCarousel();
	return (
		<section
			id="relume"
			className="theme-color-scheme-2 bg-background-primary   text-text-primary"
		>
			<div className="px-[5%] py-16 md:py-24 lg:py-28">
				<div className="container">
					<div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
						<h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
							Unser Team in Aktion
						</h2>
						<p className="md:text-md">
							Professionelle Reinigung mit Gesicht und Herz für jeden Auftrag.
						</p>
					</div>
					<Carousel
						setApi={carouselState.setApi}
						opts={{ loop: true, align: 'start' }}
					>
						<div className="relative">
							<CarouselContent className="md:ml-0">
								<CarouselItem className="px-2 lg:px-4">
									<div className="w-full">
										<Image
											src={team}
											alt="pictrue of the whole team 1"
											className={carouselState.currentClassName(0)}
											width={5151}
											height={3434}
										/>
									</div>
								</CarouselItem>
								<CarouselItem className="px-2 lg:px-4">
									<div className="w-full">
										<Image
											src={team2}
											alt="pictrue of the whole team 2"
											className={carouselState.currentClassName(1)}
											width={5151}
											height={3434}
										/>
									</div>
								</CarouselItem>
								<CarouselItem className="px-2 lg:px-4">
									<div className="w-full">
										<Image
											src={team3}
											alt="pictrue of the whole team 3"
											className={carouselState.currentClassName(2)}
											width={5151}
											height={3434}
										/>
									</div>
								</CarouselItem>
							</CarouselContent>
							<CarouselPrevious className="hidden md:flex md:size-12 lg:size-14" />
							<CarouselNext className="hidden md:flex md:size-12 lg:size-14" />
						</div>
						<div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
							<button
								onClick={carouselState.handleDotClick(0)}
								className={carouselState.dotClassName(0)}
							/>
							<button
								onClick={carouselState.handleDotClick(1)}
								className={carouselState.dotClassName(1)}
							/>
							<button
								onClick={carouselState.handleDotClick(2)}
								className={carouselState.dotClassName(2)}
							/>
						</div>
					</Carousel>
				</div>
			</div>
		</section>
	);
}
