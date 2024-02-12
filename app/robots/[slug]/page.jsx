// pages/robots/[slug].js
import React from 'react';
import RobotDashboardPage from "@/js/components/Pages/RobotDashboardPage";
import {userRobots} from "@/js/utils/content";

export default function RobotPage({ params }) {
	const { slug } = params;

	const robot = userRobots.find((robot) => robot.robotId === parseInt(slug));
	if (!robot) {
		return <h1>Robot not found</h1>;
	}
	return (
		<main className="page-container relative">
			<RobotDashboardPage robot={robot}/>
		</main>
	);
}