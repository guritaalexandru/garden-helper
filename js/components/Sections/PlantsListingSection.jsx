import React from "react";
import PlantCard from "@/js/components/Parts/PlantCard";
import {userPlants} from "@/js/utils/content";

export default function PlantsListingSection(props){
	const plantsArray = userPlants;

	return (
		<div id={'PlantsListingSection'}>
					<h2>
						Your Garden
					</h2>
					<div className="flex flex-wrap">
						{
							plantsArray.map((plant, index) => {
								return (
									<div className={'w-full mt-4'} key={index}>
										<PlantCard plant = {plant}/>
									</div>
								)
							})
						}
					</div>
		</div>
	)
}