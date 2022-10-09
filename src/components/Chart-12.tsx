import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart12 = () => {
	const divRef = useRef(null);
	const data = [
		{value: 0.08, name: '小龙街道'},
		{value: 0.06, name: '沙坪街道'},
		{value: 0.11, name: '磁器街道'},
		{value: 0.09, name: '歌乐街道'},
		{value: 0.12, name: '谭家岗'},
		{value: 0.06, name: '陈家湾'},
		{value: 0.08, name: '西永街道'},
	];
	useEffect(() => {
		const myChart = echarts.init(divRef.current);
		myChart.setOption(createEchartsOptions({
			xAxis: {show: false},
			yAxis: {show: false},
			grid: {x: 0, x2: 0, y: 0, y2: 0, containLabel: true},
			legend: {
				orient: 'vertical',
				left: '5%',
				top: '0%',
				textStyle: {
					fontSize: px(16),
					color: 'white'
				},
				itemWidth: px(20),
				itemHeight: px(12),
				formatter(name) {
					const value = data.find(i => i.name === name)?.value * 100 + '%';
					return name + ' ' + value;
				}
			},
			series: [
				{
					center: ['70%', '50%'],
					type: 'pie',
					radius: '70%',
					label: {show: false},
					labelLine: {show: false},
					data: data,
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
			]
		}));
	}, []);

	return (
		<div className="年龄段-图1">
			<div className="chart">
				<div className="main" ref={divRef}/>
			</div>
		</div>
	);
};