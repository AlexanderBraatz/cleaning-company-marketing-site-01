'use client';

import { Button } from '@relume_io/relume-ui';
import React from 'react';
import { RxChevronRight } from 'react-icons/rx';

export function Layout223() {
	return (
		<section
			id="relume"
			className="px-[5%] py-16 md:py-24 lg:py-28"
		>
			<div className="container">
				<div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
					<div className="order-2 md:order-1">
						<img
							src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
							className="w-full object-cover"
							alt="Relume placeholder image"
						/>
					</div>
					<div className="order-1 md:order-2">
						<div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
							<div className="flex self-start">
								<div className="mr-6 flex-none self-start">
									<img
										src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
										className="size-12"
										alt="Relume logo"
									/>
								</div>
								<div>
									<h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
										Zuverlässigkeit
									</h3>
									<p>
										Jedes Projekt erhält persönliche Aufmerksamkeit und
										maßgeschneiderte Lösungen.
									</p>
								</div>
							</div>
							<div className="flex self-start">
								<div className="mr-6 flex-none self-start">
									<img
										src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
										className="size-12"
										alt="Relume logo"
									/>
								</div>
								<div>
									<h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
										Freundlichkeit
									</h3>
									<p>
										Höchste Standards in Ausführung, Material und Kundenservice
										sind selbstverständlich.
									</p>
								</div>
							</div>
							<div className="flex self-start">
								<div className="mr-6 flex-none self-start">
									<img
										src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
										className="size-12"
										alt="Relume logo"
									/>
								</div>
								<div>
									<h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
										Individuelle Betreuung
									</h3>
									<p>Wir stehen für Qualität, die hält, was sie verspricht.</p>
								</div>
							</div>
						</div>
						<div className="mt-6 flex flex-wrap gap-4 md:mt-8">
							<Button variant="secondary">Kontakt</Button>
							<Button
								variant="link"
								size="link"
								iconRight={<RxChevronRight />}
							>
								Mehr
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
