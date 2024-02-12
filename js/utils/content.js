export const userPlants = [
	{
		plantId: 1,
		plantName: 'Red Rose',
		plantImage: '/images/plant1.webp',
		plantType: 'Rose',
		plantStatuses: {
			soilHumidity: 50,
			soilTemperature: 30,
			soilNutrients: 70,
			overallHealth: 'GOOD',
		},
		plantWarnings: [
			{
				warningType: 'soilHumidity',
				warningMessage: 'Soil humidity is low',
			},
			{
				warningType: 'soilTemperature',
				warningMessage: 'Soil temperature is high',
			},
			{
				warningType: 'soilNutrients',
				warningMessage: 'Soil nutrients are low',
			},
			{
				warningType: 'pests',
				warningMessage: 'Pests detected',
			}
		],
		plantActions: [
			{
				actionType: 'watering',
				actionMessage: 'Watering needed',
			},
			{
				actionType: 'fertilizing',
				actionMessage: 'Fertilizing needed',
			},
			{
				actionType: 'pestControl',
				actionMessage: 'Pest control needed',
			},
		],
	},
	{
		plantId: 2,
		plantName: 'Yellow Rose',
		plantImage: '/images/plant1.webp',
		plantType: 'Rose',
		plantStatuses: {
			soilHumidity: 60,
			soilTemperature: 35,
			soilNutrients: 80,
			overallHealth: 'GOOD',
		},
		plantWarnings: [
			{
				warningType: 'soilHumidity',
				warningMessage: 'Soil humidity is low',
			},
			{
				warningType: 'soilTemperature',
				warningMessage: 'Soil temperature is high',
			},
			{
				warningType: 'soilNutrients',
				warningMessage: 'Soil nutrients are low',
			},
			{
				warningType: 'pests',
				warningMessage: 'Pests detected',
			}
		],
		plantActions: [
			{
				actionType: 'watering',
				actionMessage: 'Watering needed',
			},
			{
				actionType: 'fertilizing',
				actionMessage: 'Fertilizing needed',
			},
			{
				actionType: 'pestControl',
				actionMessage: 'Pest control needed',
			},
		],
	},
	{
		plantId: 3,
		plantName: 'White Rose',
		plantImage: '/images/plant1.webp',
		plantType: 'Rose',
		plantStatuses: {
			soilHumidity: 70,
			soilTemperature: 40,
			soilNutrients: 90,
			overallHealth: 'GOOD',
		},
		plantWarnings: [
			{
				warningType: 'soilHumidity',
				warningMessage: 'Soil humidity is low',
			},
			{
				warningType: 'soilTemperature',
				warningMessage: 'Soil temperature is high',
			},
			{
				warningType: 'soilNutrients',
				warningMessage: 'Soil nutrients are low',
			},
			{
				warningType: 'pests',
				warningMessage: 'Pests detected',
			}
		],
		plantActions: [
			{
				actionType: 'watering',
				actionMessage: 'Watering needed',
			},
			{
				actionType: 'fertilizing',
				actionMessage: 'Fertilizing needed',
			},
			{
				actionType: 'pestControl',
				actionMessage: 'Pest control needed',
			},
		],
	}
];

export const userRobots = [
	{
		robotId: 1,
		robotName: 'GardenRover x1000',
		robotImage: '/images/robot1.webp',
		robotType: 'GardenRover',
		robotStatuses: {
			robotBattery: 90,
			robotOverallHealth: 'GOOD',
			robotCurrentAction: 'Idle',
		},
		actionHistory: [
			{
				actionType: 'monitoringSoil',
				actionMessage: 'Monitoring soil health',
				actionTime: '2021-08-01T12:00:00Z',
			},
			{
				actionType: 'charging',
				actionMessage: 'Charging the battery',
				actionTime: '2021-08-01T12:30:00Z',
			},
			{
				actionType: 'monitoringEnvironment',
				actionMessage: 'Monitoring environment health',
				actionTime: '2021-08-01T13:00:00Z',
			},
			{
				actionType: 'monitoringPests',
				actionMessage: 'Monitoring pests in the garden',
				actionTime: '2021-08-01T13:30:00Z',
			},
			{
				actionType: 'charging',
				actionMessage: 'Charging the battery',
				actionTime: '2021-08-01T14:00:00Z',
			},
			{
				actionType: 'resting',
				actionMessage: 'Resting',
				actionTime: '2021-08-01T14:30:00Z',
			}
		],
	},
	{
		robotId: 2,
		robotName: 'GardenRover x2000',
		robotImage: '/images/robot1.webp',
		robotType: 'GardenRover',
		robotStatuses: {
			robotBattery: 80,
			robotOverallHealth: 'GOOD',
			robotCurrentAction: 'Watering',
		},
		actionHistory: [
			{
				actionType: 'monitoringSoil',
				actionMessage: 'Monitoring soil health',
				actionTime: '2021-08-01T12:00:00Z',
			},
			{
				actionType: 'charging',
				actionMessage: 'Charging the battery',
				actionTime: '2021-08-01T12:30:00Z',
			},
			{
				actionType: 'monitoringEnvironment',
				actionMessage: 'Monitoring environment health',
				actionTime: '2021-08-01T13:00:00Z',
			},
			{
				actionType: 'monitoringPests',
				actionMessage: 'Monitoring pests in the garden',
				actionTime: '2021-08-01T13:30:00Z',
			},
			{
				actionType: 'charging',
				actionMessage: 'Charging the battery',
				actionTime: '2021-08-01T14:00:00Z',
			},
			{
				actionType: 'resting',
				actionMessage: 'Resting',
				actionTime: '2021-08-01T14:30:00Z',
			}
		],
	},
	{
		robotId: 3,
		robotName: 'GuardPost x1000',
		robotImage: '/images/robot2.jpg',
		robotType: 'GuardPost',
		robotStatuses: {
			robotBattery: 100,
			robotOverallHealth: 'GOOD',
			robotCurrentAction: 'Monitoring',
		},
		actionHistory: [
			{
				actionType: 'birdSpotting',
				actionMessage: 'Watching birds in the garden',
				actionTime: '2021-08-01T12:00:00Z',
			},
			{
				actionType: 'scaringCrowsSoundAlarm',
				actionMessage: 'Scaring crows from the garden - sound alarm',
				actionTime: '2021-08-01T12:30:00Z',
			},
			{
				actionType: 'scaringCrowsLightAlarm',
				actionMessage: 'Scaring crows from the garden - light alarm',
				actionTime: '2021-08-01T13:00:00Z',
			},
			{
				actionType: 'monitoringPests',
				actionMessage: 'Monitoring pests in the garden',
				actionTime: '2021-08-01T13:30:00Z',
			},
			{
				actionType: 'resting',
				actionMessage: 'Resting',
				actionTime: '2021-08-01T14:00:00Z',
			}
		],
	},
];