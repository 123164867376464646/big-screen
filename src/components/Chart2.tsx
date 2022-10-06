import React, {useEffect, useRef} from "react";
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';


export const Chart2 = () => {
	const chartRef = useRef(null);
	useEffect(() => {
		const myChart = echarts.init(chartRef.current);
		myChart.setOption(createEchartsOptions({
			xAxis: {
				type: 'value',
				boundaryGap: [0, 0.01]
			},
			yAxis: {
				type: 'category',
				data: ['渝中区', '南岸区', '江北区', '渝北区', '九龙坡区', '沙坪坝区', '北碚区', '巴南区', '大渡口区'],
			},
			series: [
				{
					name: '破案排名1',
					type: 'bar',
					data: [5, 3, 2, 4, 1, 6, 9, 7, 8]
				},
				{
					name: '破案排名2',
					type: 'bar',
					data: [5, 3, 2, 4, 1, 6, 9, 7, 8]
				}
			]
		}))
		;
	}, []);

	return (
		<div className="bordered 管辖统计">
			<h2>案件破获排名</h2>
			<div ref={chartRef} className="chart"></div>
		</div>
	);
};