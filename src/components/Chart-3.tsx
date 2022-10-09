import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart3 = () => {
	const chartRef = useRef(null);
	useEffect(() => {
		const myChart = echarts.init(chartRef.current);
		myChart.setOption(createEchartsOptions({
			grid: {
				left: "3%",
				bottom: "35%",
				right: "5%",
				top: "5%",
				containLabel: true,
			},
			legend: {
				data: ['盗窃', '醉驾', '诈骗', '故意伤人'],
				textStyle: {
					color: 'white',
					fontSize:px(18)
				},
				itemWidth: px(30),
				itemHeight: px(16),
				top: '70%',
				left: '10%',
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: '#05417d'
					}
				}
			},
			yAxis: {
				type: 'value',
				splitLine: {
					show: true,
					lineStyle: {
						color: '#05417d'
					}
				},
				axisLabel: {
					formatter(val) {
						return val * 100 + '%';
					}
				}
			},
			series: [
				{
					name: '盗窃',
					type: 'line',
					stack: 'Total',
					data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09].reverse()
				},
				{
					name: '醉驾',
					type: 'line',
					stack: 'Total',
					data: [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10].reverse()
				},
				{
					name: '诈骗',
					type: 'line',
					stack: 'Total',
					data: [0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11].reverse()
				},
				{
					name: '故意伤人',
					type: 'line',
					stack: 'Total',
					data: [0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12, 0.13].reverse()
				}
			].map(obj => ({
				...obj,
				symbol: 'circle',
				symbolSize: px(12),
				lineStyle: {width: px(2)}
			}))
		}))
		;
	}, []);
	return (
		<div className="bordered 趋势分析">
			<h2>发案趋势分析</h2>
			<div ref={chartRef} className="chart"></div>
		</div>
	);
};