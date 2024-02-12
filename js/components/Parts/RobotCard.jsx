import Image from 'next/image';

function getBatteryColor(batteryLevel) {
	if (batteryLevel > 75) return 'green';
	if (batteryLevel > 50) return 'yellow';
	if (batteryLevel > 25) return 'orange';
	return 'red'; // Battery level <= 25%
}

function getHealthColor(health) {
	switch (health) {
		case 'GOOD':
			return 'green';
		case 'FAIR':
			return 'yellow';
		case 'POOR':
			return 'orange';
		default:
			return 'red'; // Health status is 'CRITICAL
	}
}

export default function RobotCard(props){
	const {robot} = props;

	const {
		robotId,
		robotName,
		robotType,
		robotStatuses,
		robotImage,
	} = robot;

	const {
		robotBattery,
		robotOverallHealth,
		robotCurrentAction,
	} = robotStatuses;

	return (
		<div className="bg-white border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<Image
				className="rounded-t-lg"
				src={robotImage}
				alt={robotName}
				width={500}
				height={300}
				objectFit="cover"
			/>
			<div className="p-5">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{robotName}</h5>
				<p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
					<span className={'font-bold'}>Type: </span>
					<span>{robotType}</span>
				</p>
				<p className="mb-2 font-normal">
					<span className={'font-bold'}>Battery: </span>
					<span style={{color: getBatteryColor(robotBattery)}}>{robotBattery}%</span>
				</p>
				<p className="mb-2 font-normal">
					<span className={'font-bold'}>Health: </span>
					<span style={{color: getHealthColor(robotOverallHealth)}}>{robotOverallHealth}%</span>
				</p>
				<p className="font-normal text-gray-700 dark:text-gray-400">
					<span className={'font-bold'}>Current action: </span>
					<span>{robotCurrentAction}</span>
				</p>
			</div>
			<a href={`/robots/${robotId}`}>
				<button type="button"
				        className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 text-center me-2 font-bold">Robot
					Dashboard
				</button>
			</a>
		</div>
	)
}