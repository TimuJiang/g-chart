import echarts from 'echarts'
import theme from './theme.js'
import GChart from './g-chart'

import GTitle from './g-title'
import GTooltip from './g-tooltip'
import GGrid from './g-grid'
import GLegend from './g-legend'

import GXAxis from './g-xAxis'
import GYAxis from './g-yAxis'
import GSingleAxis from './g-singleAxis'

import GBar from './g-bar'
import GPie from './g-pie'

import GLine from './g-line'
import GArea from './g-area'
import GHeatmap from './g-heatmap'

import GScatter from './g-scatter'
import GEffectScatter from './g-effectScatter'

import GVisualMap from './g-visualMap'
echarts.registerTheme('default', theme)
export default {
	GChart,
	GTitle,
	GGrid,
	GLegend,
	GXAxis,
	GYAxis,
	GSingleAxis,
	GBar,
	GPie,
	GLine,
	GArea,
	GScatter,
	GEffectScatter,
	GHeatmap,
	GTooltip,
	GVisualMap
}
