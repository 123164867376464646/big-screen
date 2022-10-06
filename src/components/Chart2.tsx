import React, {useEffect, useRef} from "react";
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';


export const Chart2 = () => {
	const chartRef = useRef(null);
	useEffect(() => {
		const myChart = echarts.init(chartRef.current);
		myChart.setOption(createEchartsOptions({
			grid: {
				left: "5%",
				bottom: "15%",
				right: "5%",
				top: "5%",
				containLabel: true,
			},
			legend: {
				top:'89%',
				left:'30%',
				itemGap: px(6),
				itemWidth: 18,
				itemHeight: 10,
				textStyle:{
					color:'#83accb',
					fontSize: px(16)
				}
			},
			xAxis: {
				type: 'value',
				boundaryGap: [0, 0.01],
				splitLine: {show: false},
				axisLabel: {show: false}
			},
			yAxis: {
				type: 'category',
				data: ['渝中区', '南岸区', '江北区', '渝北区', '九龙坡区', '沙坪坝区', '北碚区', '巴南区', '大渡口区'],
				axisTick: {show: false},
			},

			series: [
				{
					name: '破案排名1',
					type: 'bar',
					data: [5, 3, 2, 4, 1, 6, 9, 7, 8],
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 1,
						y2: 0,
						colorStops: [{
							offset: 0, color: '#2033f9' // 0% 处的颜色
						}, {
							offset: 1, color: '#099afb' // 100% 处的颜色
						}],
					},
				},
				{
					name: '破案排名2',
					type: 'bar',
					data: [5, 3, 2, 4, 1, 6, 9, 7, 8],
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 1,
						y2: 0,
						colorStops: [{
							offset: 0, color: '#ba28e9' // 0% 处的颜色
						}, {
							offset: 1, color: '#6571e3' // 100% 处的颜色
						}],
					},
				}
			]
		}))
		;
	}, []);

	return (
		<div className="bordered 破获排名">
			<h2>案件破获排名</h2>
			<div ref={chartRef} className="chart"></div>
		</div>
	);
};