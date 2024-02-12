import React from "react";
import RobotsListSection from "@/js/components/Sections/RobotsListSection";
import PlantsListingSection from "@/js/components/Sections/PlantsListingSection";
import Header from "@/js/components/Layout/Header";
import Footer from "@/js/components/Layout/Footer";

export default function DashboardPage(props){
	return (
		<div id={'DashboardPage'}>
			<Header/>
			<div>
				<div className={'content-container'}>
					<h1 className={'text-5xl text-center mb-20 mt-10'}>
						Dashboard
					</h1>
				</div>
				<div className={'py-8 px-4 bg-blue-100 bg-opacity-50 shadow-xl drop-shadow-2xl shadow-blue-300'}>
					<div className={'content-container'}>
						<RobotsListSection/>
					</div>
				</div>
				<div className={'py-8 px-4 bg-blue-100 bg-opacity-50 shadow-xl drop-shadow-2xl shadow-blue-300'}>
					<div className={'content-container'}>
						<PlantsListingSection/>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	)
}