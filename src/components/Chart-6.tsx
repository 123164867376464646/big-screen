import React, {useEffect, useRef} from "react";
import * as echarts from 'echarts';
import china from '../geo/china.json';
import {createEchartsOptions} from '../shared/create-echarts-options';
import AreaArray from '../shared/area';
import {px} from '../shared/px';

export const Chart6 = () => {
	const divRef = useRef(null);
	const myChart = useRef(null);
	let mTime = undefined;
	let index = -1;

	useEffect(() => {
		myChart.current = echarts.init(divRef.current);
		// @ts-ignore
		echarts.registerMap('CN', china);
		let chartOption = {
			tooltip: {
				trigger: 'item',
				triggerOn: 'mousemove|click',
				showDelay: 0,
				alwaysShowContent: true,
				backgroundColor: '#0f113a',
				borderColor: '#6879e4',
				borderWidth: px(2),
				color: 'white',
				textStyle: {
					color: 'white'
				},
				transitionDuration: 0.2
			},
			xAxis: {show: false},
			yAxis: {show: false},
			visualMap: {
				left: 'right',
				bottom: '8%',
				min: 0,
				max: 34,
				inRange: {
					color: [
						'rgba(109,127,238,1)',
						'rgba(109,127,238,0.8)',
						'rgba(109,127,238,0.6)',
						'rgba(109,127,238,0.5)',
						'rgba(109,127,238,0.4)',
						'rgba(109,127,238,0.3)',
						'rgba(109,127,238,0.2)',
						'rgba(109,127,238,0.1)',
						'rgba(109,127,238,0.05)',
					]
				},
				text: ['高', '低'],
				textStyle: {
					color: 'white',
					fontSize: px(16)
				},
				calculable: true
			},
			series: [
				{
					name: '分布情况',
					type: 'map',
					map: 'CN',
					data: AreaArray(),
					label: {show: false, color: 'white'},
					itemStyle: {
						shadowColor: '#01091f',
						shadowBlur: px(2),
						color: 'rgba(255,255,255,0)',
						areaColor: '#010D3D',
						borderColor: '#2891BD',
						emphasis: {
							label: {show: true, color: 'white'},
							areaColor: '#010D3D',
						},
					}
				},
			]
		};
		myChart.current.setOption(createEchartsOptions(chartOption));
	}, []);

	const mapActive = () => {
		const dataLength = china.features.length;
		// 用定时器控制高亮
		mTime = setInterval(() => {
			// 清除之前的高亮
			myChart.current.dispatchAction({
				type: 'downplay',
				seriesIndex: 0,
				dataIndex: index
			});
			index++;
			// 当前下标高亮
			myChart.current.dispatchAction({
				type: 'highlight',
				seriesIndex: 0,
				dataIndex: index
			});
			myChart.current.dispatchAction({
				type: 'showTip',
				seriesIndex: 0,
				dataIndex: index
			});
			if(index > dataLength) {
				index = 0;
			}
		}, 1500);
	};
	useEffect(() => {
		mapActive();
	}, []);
	const onMouseOver = () => {
		clearInterval(mTime);
		mTime = undefined;
		console.log(mTime);
		myChart.current.dispatchAction({
			type: 'downplay',
			seriesIndex: 0,
			dataIndex: index
		});
	};
	const onMouseOut = () => {
		mapActive();
	};
	return (
		<div className="bordered 分布地">
			<h2>全市犯罪人员籍贯分布地</h2>
			<div onMouseOver={onMouseOver} onMouseOut={onMouseOut} ref={divRef} className="chart"></div>
			<div className="notes">此地图仅展示部分地区</div>
		</div>
	);
};