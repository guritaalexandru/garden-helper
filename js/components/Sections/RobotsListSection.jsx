import React from "react";
import {userRobots} from "@/js/utils/content";
import RobotCard from "@/js/components/Parts/RobotCard";

export default function RobotsListSection(props){
	const robots = userRobots;

	return (
		<div id={'RobotsListSection'} className={''}>
			<h2>
				Your Helpers
			</h2>
			<div className="flex flex-wrap">
				{
					robots.map((robot, index) => {
						return (
							<div className={'w-1/4 mt-4 px-5'} key={robot.robotId}>
									<RobotCard robot = {robot}/>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}