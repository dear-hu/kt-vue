<template>
	<div class="block">
		<el-carousel trigger="click" height="500px">
			<el-carousel-item v-for="item in lunboList" :key="item.id">
				<img class="lunboImg" :src='item.img' />

				<!-- <h3>{{ item }}</h3> -->
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'home',
		data() {
			return {
				lunboList:[]
			}
		},
		methods: {	
			getData () {		
				axios.get('http://localhost:8888/lunbo.json').then((data) => {
					console.log(this)		
					this.lunboList = data.data.beans
				})
				.catch((error) => {
					console.log(error);
				});
			}
		},
		mounted() {
			this.getData();
		}
	}
</script>
<style lang="scss">
	.lunboImg{
		display: bloc;
		width: 100%;
	}
</style>
