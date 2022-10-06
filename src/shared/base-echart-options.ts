import {px} from './px';

export const baseEchartOptions= {
	tooltip: {show: false},
	textStyle: {
		fontSize: px(12),
		color: '#79839E'
	},
	title: {show: false},
	legend: {show: false},
	grid: {
		left: "5%",
		bottom: "5%",
		right: "5%",
		top: "5%",
		containLabel: true,
	},
}