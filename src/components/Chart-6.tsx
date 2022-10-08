import React, {useEffect, useRef} from "react";
import * as echarts from 'echarts';
import china from '../geo/china-geojson/china.json';

export const Chart6 = () => {
	const divRef = useRef(null);
	const colors = {'青海省': '#BB31F7', '甘肃省': '#15B8FD', '四川省': '#06E1EE', '新疆维吾尔自治区': '#dd3c2d'};

	useEffect(() => {
		const myChart = echarts.init(divRef.current);

		// @ts-ignore
		echarts.registerMap('CN', china);
		myChart.setOption({
			xAxis: {show: false},
			yAxis: {show: false},
			series: [
				{
					type: 'map',
					mapType: 'CN', // 自定义扩展图表类型
					data: [
						{name: '甘肃省', value: 1},
					],
					label: {show: false, color: 'white'},
					itemStyle: {
						shadowColor: '#002b62',
						shadowBlur: 2,
						areaColor: '#010D3D',
						color: colors['甘肃省'],
						borderColor: '#01A7F7',
						emphasis: {
							label: {color: 'white'},
							areaColor: '#5470C6',
						},
					}
				},
				{
					type: 'map',
					mapType: 'CN', // 自定义扩展图表类型
					data: [
						{name: '四川省', value: 100},
					],
					itemStyle: {
						areaColor: '#010D3D',
						color: colors['四川省'],
						borderColor: 'yellow',
						emphasis: {
							label: {color: 'white'},
							areaColor: '#5470C6',
						},
					}
				},
				{
					type: 'map',
					mapType: 'CN', // 自定义扩展图表类型
					data: [
						{name: '青海省', value: 100},
					],
					itemStyle: {
						areaColor: '#010D3D',
						color: colors['青海省'],
						borderColor: '#01A7F7',
						emphasis: {
							label: {color: 'white'},
							areaColor: '#ffffff',
						},
					}
				},

			]
		});
	}, []);

	return (
		<div className="bordered 分布地">
			<h2>全重庆市犯罪人员籍贯分布地</h2>
			<div className="wrapper">
				<div ref={divRef} className="chart"/>
				<div className="legend bordered">
					<span className="icon" style={{background: colors['甘肃省']}}/>甘肃籍
					<span className="icon" style={{background: colors['四川省']}}/>四川籍
					<span className="icon" style={{background: colors['青海省']}}/>青海籍
				</div>
				<div className="notes">此地图仅显示了中国的部分区域</div>
			</div>
		</div>
	);
};