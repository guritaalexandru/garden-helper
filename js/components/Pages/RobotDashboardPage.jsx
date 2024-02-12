import React from "react";
import Header from "@/js/components/Layout/Header";
import Footer from "@/js/components/Layout/Footer";

export default function RobotDashboardPage(props) {
	const { robot } = props;

	const {
		robotId,
		robotName,
		robotImage,
		robotType,
		robotStatuses: { robotBattery, robotOverallHealth, robotCurrentAction },
		actionHistory,
	} = robot;

	return (
		<div id="RobotDashboardPage">
			<Header/>
			<div className="max-w-4xl mx-auto my-8 p-4 bg-white shadow-md rounded-lg">
				<div className="flex flex-col md:flex-row">
					<div className="md:w-1/3">
						<img src={robotImage} alt={robotName} className="rounded-lg shadow-md"/>
					</div>
					<div className="md:w-2/3 md:pl-4">
						<h2 className="text-2xl font-bold mt-2 md:mt-0">{robotName}</h2>
						<p className="text-gray-600">Type: {robotType}</p>
						<p>Battery: {robotBattery}%</p>
						<p>Overall Health: {robotOverallHealth}</p>
						<p>Current Action: {robotCurrentAction}</p>
					</div>
				</div>
				<div className="mt-4">
					<h3 className="text-xl font-semibold">Action History</h3>
					{actionHistory.map((action, index) => (
						<div key={index} className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-2 mb-2"
						     role="alert">
							<p className="font-semibold">{action.actionType}</p>
							<p>{action.actionMessage}</p>
							<p className="text-sm text-gray-600">{new Date(action.actionTime).toLocaleString()}</p>
						</div>
					))}
				</div>
				<div className="flex mt-4 space-x-2">
					<button
						className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">Input
						Command
					</button>
					<button
						className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">Stop
						Robot
					</button>
					<button
						className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition duration-300">Call
						for Maintenance
					</button>
				</div>
			</div>
			<Footer/>
		</div>
	);
}
