import React, {useEffect, useRef} from "react";
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';


export const Chart2 = () => {
	const chartRef = useRef(null);
	const myChart = useRef(null);
	const data = [
		{name: '渝南区', 2011: 2, 2012: 3},
		{name: '岸南区', 2011: 2, 2012: 3},
		{name: '江南区', 2011: 2, 2012: 3},
		{name: '渝西区', 2011: 2, 2012: 3},
		{name: '九龙区', 2011: 2, 2012: 3},
		{name: '沙坪区', 2011: 2, 2012: 3},
		{name: '北倍区', 2011: 2, 2012: 3},
		{name: '巴中区', 2011: 2, 2012: 3},
		{name: '大渡区', 2011: 2, 2012: 3},
	];
	useEffect(() => {
		setInterval(() => {
			const newDate = [
				{name: '渝南区', 2011: 2, 2012: Math.random()*10},
				{name: '岸南区', 2011: 2, 2012: 3},
				{name: '江南区', 2011: 2, 2012: 3},
				{name: '渝西区', 2011: 2, 2012: 3},
				{name: '九龙区', 2011: 2, 2012: 3},
				{name: '沙坪区', 2011: 2, 2012: 3},
				{name: '北倍区', 2011: 2, 2012: 3},
				{name: '巴中区', 2011: 2, 2012: 3},
				{name: '大渡区', 2011: 2, 2012: 3},
			];
			x(newDate);
		}, 1000);
	}, []);
	const x = (data) => {
		myChart.current.setOption(createEchartsOptions({
			grid: {
				left: "5%",
				bottom: "15%",
				right: "5%",
				top: "5%",
				containLabel: true,
			},
			legend: {
				top: '89%',
				left: '30%',
				itemGap: px(6),
				itemWidth: 18,
				itemHeight: 10,
				textStyle: {
					color: '#83accb',
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
				data: data.map(i => i.name),
				axisTick: {show: false},
			},

			series: [
				{
					name: '2020',
					type: 'bar',
					data: data.map(i => i[2011]),
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
					name: '2021',
					type: 'bar',
					data: data.map(i => i[2012]),
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
		}));
	};
	useEffect(() => {
		myChart.current = echarts.init(chartRef.current);
		x(data);
	}, []);

	return (
		<div className="bordered 破获排名">
			<h2>案件破获排名</h2>
			<div ref={chartRef} className="chart"></div>
		</div>
	);
};