<template>
	<div id="app">
		<el-container>
			<el-header>
				<Head />
			</el-header>
			<el-main>
				<router-view />
			</el-main>
		</el-container>
		<Foot />
	</div>
</template>
<script>
	// @ is an alias to /src
	import Head from '@/components/Head.vue'
	import Foot from '@/components/Foot.vue'

	export default {
		name: 'home',
		components: {
			Head,
			Foot
		}
	}
</script>

<style lang="scss">
	@import "./assets/css/reset.css";
	.el-main{
		padding: 20px 0!important;
	}
</style>
