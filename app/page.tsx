import React from 'react';
import { Navbar1 } from './components/Navbar1';
import { Header5 } from './components/Header5';
import { Layout360 } from './components/Layout360';
import { Layout394 } from './components/Layout394';
import { Layout514 } from './components/Layout514';
import { Layout513 } from './components/Layout513';
import { Team2 } from './components/Team2';
import { Gallery24 } from './components/Gallery24';
import { Testimonial22 } from './components/Testimonial22';
import { Cta25 } from './components/Cta25';
import { Stats1 } from './components/Stats1';
import { Logo6 } from './components/Logo6';
import { Logo3 } from './components/Logo3';
import { Blog42 } from './components/Blog42';
import { Faq6 } from './components/Faq6';
import { Cta53 } from './components/Cta53';
import { Footer7 } from './components/Footer7';
import { Header30 } from './components/Header30';
import { Header84 } from './components/Header84.jsx';
import { HeaderFullwidthImage } from './components/HeaderFullwidthImage.jsx';
import { Gallery1 } from './components/Gallery1.jsx';
import { Gallery14 } from './components/Gallery14.jsx';
import { Layout121 } from './components/Layout121.jsx';
import { Cta25GoTOServices } from './components/Cta25GoTOServices.jsx';

export default function Page() {
	return (
		<div>
			<Navbar1 />
			<div className="lg:min-h-18 " />
			{/* <Header30 /> */}
			<HeaderFullwidthImage />
			<Header84 />
			<Logo3 />
			{/* <Logo3 /> */}
			<Layout360 /> {/*Leistungen 2*/}
			{/* <Layout394 /> Leistungen other 6 */}
			<Cta25GoTOServices />
			<Layout121 />
			<Layout514 />
			<Layout513 />
			<Team2 />
			{/* <Gallery24 /> */}
			{/* <Gallery1 /> */}
			<Gallery14 />
			{/* a navigatable gallery would be nice but relumes version is broken , unclerar how long it takes to fix*/}
			<Testimonial22 />
			<Cta25 />
			{/* <Stats1 /> */}
			{/* <Logo6 /> */}
			<Blog42 />
			<Faq6 />
			<Cta53 />
			<Footer7 />
		</div>
	);
}
