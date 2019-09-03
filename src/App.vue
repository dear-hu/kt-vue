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
	import Foot from '@/components/Footer.vue'

	export default {
		name: 'home',
		components: {
			Head,
			Foot
		}
	}
</script>

<style lang="scss">
	.content {
		padding-top: 100px;
	}
</style>
