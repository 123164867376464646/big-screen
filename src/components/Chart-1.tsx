import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart1 = () => {
	const chartRef = useRef(null);
	useEffect(() => {
		const myChart = echarts.init(chartRef.current);
		myChart.setOption(createEchartsOptions({
			xAxis: {
				data: ['渝中区', '南岸区', '江北区', '渝北区', '九龙坡区', '沙坪坝区', '北碚区', '巴南区', '大渡口区'],
				axisLabel: {
					interval: 0,
					color: '#414d6c',
					formatter: function(value) {
						if(value.length > 2) {
							const array = value.split('');
							array.splice(2, 0, '\n');
							return array.join('');
						}
						return value;
					}
				},
				axisLine: {
					show: true,
					lineStyle: {color: '#09376a'}
				},
				axisTick: {
					show: false
				},
			},
			yAxis: {
				axisLine: {
					show: true,
					lineStyle: {color: '#09376a'}
				}
			}
			,
			series: [
				{
					type: 'bar',
					data: [29, 20, 20, 41, 15, 33, 26, 13, 10]
				}
			]
		}))
		;
	}, []);
	return (
		<div className="bordered 管辖统计">
			<h2>案发派出所管辖统计</h2>
			<div ref={chartRef} className="chart"></div>
		</div>
	);
};