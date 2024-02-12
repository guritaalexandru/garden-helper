import React from "react";
import Image from "next/image"; // Importing Image component from next/image for optimized images

export default function PlantCard(props) {
	const {
		plant,
	} = props;

	const {
		plantId,
		plantName,
		plantImage,
		plantType,
		plantStatuses,
		plantWarnings,
		plantActions,
	} = plant;

	const {
		soilHumidity,
		soilTemperature,
		soilNutrients,
		overallHealth,
	} = plantStatuses;

	return (
		<div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 overflow-hidden">
			<div className="p-4">
				<div className="grid md:grid-cols-4 gap-4">
						<Image layout="responsive" width={400} height={400} objectFit="cover"
						       className="rounded-t-lg md:rounded-none md:rounded-l-lg" src={plantImage}
						       alt={plantName}/>
					{/* Column 1: Plant Overall Information */}
					<div>
						<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">{plantName}</h5>
						<p className="text-gray-700 dark:text-gray-400">{plantType}</p>
						<p><span className={'font-bold'}>Soil Humidity: </span>{soilHumidity}%</p>
						<p><span className={'font-bold'}>Soil Temperature: </span>{soilTemperature}°C</p>
						<p><span className={'font-bold'}>Soil Nutrients: </span>{soilNutrients}</p>
						<p><span className={'font-bold'}>Overall Health: </span>{overallHealth}</p>
					</div>
					{/* Column 2: Plant Warnings */}
					<div>
						<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">Warnings</h5>
						{plantWarnings.map((warning, index) => (
							<div key={index} className="bg-red-100 border-l-4 border-red-500 text-red-700 p-2 mb-2"
							     role="alert">
								<p className="font-bold">{warning.warningType}</p>
								<p>{warning.warningMessage}</p>
							</div>
						))}
					</div>
					{/* Column 3: Plant Actions */}
					<div>
						<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">Tips</h5>
						{plantActions.map((action, index) => (
							<div key={index} className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-2 mb-2"
							     role="alert">
								<p className="font-bold">{action.actionType}</p>
								<p>{action.actionMessage}</p>
							</div>
						))}
					</div>
				</div>
				<div className="flex justify-start mt-4">
					<button type="button"
					        className="w-1/5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 text-center me-2 font-bold">
						Check plant again
					</button>
					<button type="button"
					        className="w-1/5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 text-center me-2 font-bold">
						Search for more tips
					</button>
				</div>
			</div>
		</div>
	);
}
