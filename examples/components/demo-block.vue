<template lang='pug'>
	.docs-demo-wrapper
		.demo-container(:style="{height: isExpand ? 'auto' : '0'}" )
			.docs-demo.docs-demo--expand
				.highlight-wrapper
					slot(name="highlight")
		.docs-trans.docs-demo__triangle(@click="toggle") {{isExpand ? '隐藏代码' : '显示代码'}}
</template>

<script>
	export default {
		name: 'demo-block',
		data () {
			return {
				isExpand: false
			}
		},
		methods: {
			toggle () {
				this.isExpand = !this.isExpand
			}
		}
	}
</script>

<style lang='stylus' scoped>
	.docs-demo-wrapper
		padding 10px
	.demo-container
		transition: max-height .3s ease;
		overflow: hidden;

	.docs-demo
		width: 100%;
		height: auto;
		box-sizing: border-box;
		font-size: 14px;
		background-color: #F7F7F7;
		border: 1px solid #e2ecf4;
		border-top: none;
		pre code
			font-family: Consolas, Menlo, Courier, monospace;
			line-height: 22px;
			border: none;

	.docs-trans
		width: 100%;
		text-align: center;
		display: inline-block;
		color: #C5D9E8;
		font-size: 12px;
		padding: 10px 0;
		background-color: #FAFBFC;

	.docs-demo__code,
	.highlight-wrapper,
	.docs-demo__meta
		padding: 10px;
		overflow-y: auto;

	.docs-demo__code
		border-bottom: 1px solid #eee;

	.docs-demo.docs-demo--expand .docs-demo__meta
		border-bottom: 1px dashed #e9e9e9;

	.docs-demo.docs-demo--expand .docs-demo__triangle
		transform: rotate(180deg);

	.highlight-wrapper
		display: none;
		p,
		pre
			margin: 0;

		.hljs
			padding: 0;

	.docs-demo.docs-demo--expand .highlight-wrapper
		display: block;

	.docs-demo__code__mobi
		height: 620px;
		margin: 20px 0;

	.docs-demo__code__mobi__header
		border-radius: 4px 4px 0 0;
		background: -webkit-linear-gradient(rgba(55, 55, 55, .98), #545456);
		background: linear-gradient(rgba(55, 55, 55, .98), #545456);
		text-align: center;
		padding: 8px;
		img
			width: 100%;
		.url-box
			height: 28px;
			line-height: 28px;
			color: #fff;
			padding: 0 3px;
			background-color: #a2a2a2;
			margin: 10px auto 0;
			border-radius: 4px;
			white-space: nowrap;
			overflow-x: auto;

	.docs-demo__code__mobi__content
		iframe
			width: 100%;
			border: 0;
			height: 548px;
</style>
