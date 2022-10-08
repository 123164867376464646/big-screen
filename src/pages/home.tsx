import React from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import {Chart1} from '../components/Chart-1';
import {Chart2} from '../components/Chart-2';
import {Chart3} from '../components/Chart-3';
import {Chart4} from '../components/Chart-4';
import {Chart5} from '../components/Chart-5';
import {Chart6} from '../components/Chart-6';

export const Home = () => {

	const year = new Date().getFullYear();
	return (
		<div className="home">
			<header style={{backgroundImage: `url(${headerBg})`}}/>
			<main>
				<section className="section1">
					<Chart1/>
					<Chart2/>
				</section>
				<section className="section2">
					<Chart3/>
					<Chart4/>
				</section>
				<section className="section3">
					<Chart5/>
				</section>
				<section className="section4">
					<Chart6/>
				</section>
				<section className="bordered section5"></section>
			</main>
			<footer>
				&copy; 饥人谷 2020-{year}
			</footer>
		</div>
	);
};
