'use client';

import React from 'react';
import Image from 'next/image';

import hoeffnerLogo from '@/public/images/hoeffner-logo-vector.png';
import altenheimLogo from '@/public/images/logo-altenheim.jpg';
import bauhausLogo from '@/public/images/logo-bauhaus.png';
import dmLogo from '@/public/images/logo-dm.png';
import ixmalLogo from '@/public/images/logo-ixmal.png';
import kraftwerkLogo from '@/public/images/logo-kraftwerk.png';

export function Logo6() {
	return (
		<section
			id="relume"
			className="px-[5%] theme-color-scheme-2 bg-background   text-text-primary py-12 md:py-16 lg:py-20"
		>
			<div className="container">
				{/* <h1 className="mx-auto mb-8 w-full max-w-lg text-center text-base font-bold leading-[1.2] md:mb-10 md:text-md md:leading-[1.2] lg:mb-12">
          Vertrauen von führenden Unternehmen in der Region
        </h1> */}
				<div className="grid grid-cols-2 gap-2 md:grid-cols-3">
					<div className="flex w-full items-start justify-center justify-self-center bg-foreground px-4 pb-4 pt-[0.875rem] md:p-[0.875rem]">
						<Image
							src={hoeffnerLogo}
							className="max-h-12 w-auto object-contain md:max-h-14"
							alt="Höffner"
						/>
					</div>
					<div className="flex w-full items-start justify-center justify-self-center  bg-foreground px-4 pb-4 pt-[0.875rem] md:p-[0.875rem]">
						<Image
							src={altenheimLogo}
							className="max-h-12 w-auto object-contain md:max-h-14"
							alt="Altenheim"
						/>
					</div>
					<div className="flex w-full items-start justify-center justify-self-center  bg-foreground px-4 pb-4 pt-[0.875rem] md:p-[0.875rem]">
						<Image
							src={bauhausLogo}
							className="max-h-12 w-auto object-contain md:max-h-14"
							alt="BAUHAUS"
						/>
					</div>
					<div className="flex w-full items-start justify-center justify-self-center  bg-foreground px-4 pb-4 pt-[0.875rem] md:p-[0.875rem]">
						<Image
							src={dmLogo}
							className="max-h-12 w-auto object-contain md:max-h-14"
							alt="dm"
						/>
					</div>
					<div className="flex w-full items-start justify-center justify-self-center  bg-foreground px-4 pb-4 pt-[0.875rem] md:p-[0.875rem]">
						<Image
							src={ixmalLogo}
							className="max-h-12 w-auto object-contain md:max-h-14 bg-gray-800"
							alt="Ixmal"
						/>
					</div>
					<div className="flex w-full items-start justify-center justify-self-center  bg-foreground px-4 pb-4 pt-[0.875rem] md:p-[0.875rem]">
						<Image
							src={kraftwerkLogo}
							className="max-h-12 w-auto object-contain md:max-h-14"
							alt="Kraftwerk"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
