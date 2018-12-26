import GChart from './g-chart'

import GChartPercent from './h-chart/g-chart-percent'
import GChartArrow from './h-chart/g-chart-arrow'
import GChartLiquidfill from './h-chart/g-chart-liquidfill'

import Resize from './utils/resize'
import ChartHelper from './utils/chart-helper'

import GFloatBall from './components/g-float-ball'
import GPopup from './components/g-popup'
import GPopover from './components/g-popover'
import GSelect from './components/g-select'
import GSelectTree from './components/g-select-tree'

import GDialog from './components/g-dialog'
import GTable from './components/g-table'


import './components/index'

const components = Object.values(GChart)
const install = function (Vue) {
	if (install.installed) return
	components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
	install
}

export {
	GChartPercent,
	GChartArrow,
	GChartLiquidfill,
	Resize,
	ChartHelper,
	GFloatBall,
	GPopup,
	GPopover,
	GSelect,
	GSelectTree,
	GDialog,
	GTable
}
