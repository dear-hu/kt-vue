<template>
	<div class="block">
		<el-carousel trigger="click" :height="hdgd">
			<el-carousel-item v-for="item in lunboList" :key="item.id">
				<img class="lunboImg" :src='item.img' />
			</el-carousel-item>
		</el-carousel>
		<div class="Plate newsCenter">
			<div class="palteTitle">
				<h2>新闻中心</h2>
				<p>新闻中心新闻中心新闻中心新闻中心新闻中心新闻中心新闻中心新闻中心</p>
			</div>
			<el-row :gutter="20" class="newsCon">
				<el-col :sm=" {span: 7, offset: 1}" :xs="{span:20, offset: 2}">
					<div class="grid-content">
						<div class="grid-content-img"><img src="../../public/img/banner_02.jpg"></div>
						<h4>新闻1</h4>
						<p>新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1</p>
					</div>
				</el-col>
				<el-col :sm="7" :xs="{span:20, offset: 2}">
					<div class="grid-content">
						<div class="grid-content-img"><img src="../../public/img/banner_03.jpg"></div>
						<h4>新闻2</h4>
						<p>新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1</p>
					</div>
				</el-col>
				<el-col :sm="7" :xs="{span:20, offset: 2}">
					<div class="grid-content">
						<div class="grid-content-img"><img src="../../public/img/banner_04.jpg"></div>
						<h4>新闻3</h4>
						<p>新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1新闻1</p>
					</div>
				</el-col>

			</el-row>
		</div>
		<div class="Plate productCenter">
			<el-row class="productCon">

				<el-col :sm="{span:22, offset: 1}" :xs="{span:22, offset: 1}">
					<el-carousel trigger="click" height="400px">
						<el-carousel-item>
							<el-row :gutter="20" class="productConItem">
								<el-col :sm="{span:9, offset: 4}" class="hidden-xs-only leftText">
									<h3>幼苗专用肥</h3>
									<p>幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥</p>
								</el-col>
								<el-col :sm="7" :xs="{span:18, offset: 3}">
									<img src="../../public/img/home_bg_fertilizer_nor.png">
								</el-col>
							</el-row>
						</el-carousel-item>
						<el-carousel-item>
							<el-row :gutter="20" class="productConItem">
								<el-col :sm="{span:9, offset: 4}" class="hidden-xs-only leftText">
									<h3>幼苗专用肥</h3>
									<p>幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥</p>
								</el-col>
								<el-col :sm="7" :xs="{span:18, offset: 3}">
									<img src="../../public/img/home_bg_nutrition_nor.png">
								</el-col>
							</el-row>
						</el-carousel-item>
						<el-carousel-item>
							<el-row :gutter="20" class="productConItem">
								<el-col :sm="{span:9, offset: 4}" class="hidden-xs-only leftText">
									<h3>幼苗专用肥</h3>
									<p>幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥幼苗专用肥</p>
								</el-col>
								<el-col :sm="7" :xs="{span:18, offset: 3}">
									<img src="../../public/img/home_bg_plant_nor.png">
								</el-col>
							</el-row>
						</el-carousel-item>
					</el-carousel>
				</el-col>

			</el-row>
		</div>
		<div class="Plate skillCenter">
			<div class="palteTitle">
				<h2>研发技术</h2>
				<p>新闻中心新闻中心新闻中心新闻中心新闻中心新闻中<br>心新闻中心新闻中心</p>
			</div>
			<el-row :gutter="20" class="skillCon">
				<el-col :sm="{span:5, offset: 2}" :xs="{span:10, offset: 2}">
					<div class="grid-content">
						<div class="grid-content-img"><img src="../../public/img/home_icon_computer.png"></div>
						<h2>有机液肥</h2>
					</div>
				</el-col>
				<el-col :sm="5" :xs="10">
					<div class="grid-content">
						<div class="grid-content-img"><img src="../../public/img/home_icon_earth.png"></div>
						<h2>有机液肥</h2>
					</div>
				</el-col>
				<el-col :sm="5" :xs="{span:10, offset: 2}">
					<div class="grid-content">
						<div class="grid-content-img"><img src="../../public/img/home_icon_health.png"></div>
						<h2>有机液肥</h2>
					</div>
				</el-col>
				<el-col :sm="5" :xs="10">
					<div class="grid-content">
						<div class="grid-content-img"><img src="../../public/img/home_icon_soil.png"></div>
						<h2>有机液肥</h2>
					</div>
				</el-col>

			</el-row>
		</div>
		<div class="Plate agrochemicalCenter">
			<div class="palteTitle">
				<h2>农化服务</h2>
				<p>农化服务</p>
			</div>
			<el-row :gutter="40" class="agrochemicalCon">
				<el-col :sm=" {span: 7, offset: 1}" :xs="{span:20, offset: 2}">
					<div class="grid-content">
						<div class="grid-content-img"><img src="../../public/img/home_bg_fertilizer_nor.png"></div>
						<div class="mask hidden-xs-only">
							<i class='maskImg'><img src="../assets/img/home_icon_earth.png"></i>
							<h4>作物种植管理</h4>
							<p><a href="javascript:void(0)" @click="goPlant('/plant')">查看更多</a></p>
						</div>				
					</div>
				</el-col>
				<el-col :sm="7" :xs="{span:20, offset: 2}">
					<div class="grid-content">
						<div class="grid-content-img"><img src="../../public/img/home_bg_nutrition_nor.png"></div>
						<div class="mask hidden-xs-only">
							<i class='maskImg'><img src="../assets/img/home_icon_earth.png"></i>
							<h4>作物营养方案</h4>
							<p><a href="javascript:void(0)" @click="goPlant('/plant')">查看更多</a></p>
						</div>
					</div>
				</el-col>
				<el-col :sm="7" :xs="{span:20, offset: 2}">
					<div class="grid-content">
						<div class="grid-content-img"><img src="../../public/img/home_bg_plant_nor.png"></div>
						<div class="mask hidden-xs-only">
							<i class='maskImg'><img src="../assets/img/home_icon_earth.png"></i>
							<h4>肥效展示</h4>
							<p><a href="javascript:void(0)" @click="goPlant('/plant')">查看更多</a></p>
						</div>
					</div>
				</el-col>
		
			</el-row>
		</div>
		
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'home',
		data() {
			return {
				lunboList: [],
				hdgd:"400px"
			}
		},
		methods: {
			getLunbo() {
				axios.get('http://localhost:8888/lunbo.json').then((data) => {
						console.log(this)
						this.lunboList = data.data.beans
					})
					.catch((error) => {
						console.log(error);
					});
			},
			goPlant(path) {
				console.log(path)
				this.$router.replace(path)
			}
		},
		mounted() {
			this.getLunbo();
			let that = this;
			window.onresize = function windowResize() {
			  // 通过捕获系统的onresize事件触发我们需要执行的事件
			  var w = window.innerWidth
			  var h = 0.45 * w		 
			  that.hdgd = h + 'px'
		
			}
			

		}
	}
</script>
<style lang="scss">
	@import "../assets/css/reset.css";
	
		.lunboImg {
			display: block;
			width: 100%;
			margin: 0 auto;
		}


	.Plate {
		padding: 60px 0 30px 4%;
		.palteTitle {
			text-align: center;
			margin-bottom: 50px;
			h2 {
				font-size: 34px;
				font-weight: 800;
				color: #2e992e;
				line-height: 54px;
			}

			p {
				color: #666;
				font-size: 16px;
				line-height: 20px;
			}
		}
	}

	.newsCon {
		
		.grid-content {
			margin-bottom: 25px;
			.grid-content-img {
				height: 260px;
				overflow: hidden;
				text-align: center;

				img {
					display: block;
					height: 100%;
					margin: 0 auto;
				}
			}

			h4 {
				font-size: 18px;
				color: #333;
				font-weight: 600;
				line-height: 40px;
				margin-top: 10px;
				height: 40px;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
				overflow: hidden;
			}

			p {
				font-size: 14px;
				color: #333;
				line-height: 20px;
				height: 40px;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}

		}

	}

	.productCenter {
		padding: 50px 0;
		.leftText{
			padding-top: 80px;
			h3{
				font-size: 32px;
				color: #2e992e;
				font-weight: 800;
				margin-bottom: 46px;
			}
			p{
				font-size: 16px;
				color: #333;
				line-height: 25px;
				height: 150px;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 6;
				overflow: hidden;
			}
		}
		
	}

	.skillCon {
		.grid-content{
			margin-bottom:20px;
			.grid-content-img {
				overflow: hidden;
				padding:30px 0 40px;
				img {
					display: block;
					height:150px;
					margin: 0 auto;
				}
			}
			h2{
				text-align: center;
				font-size: 22px;
				font-weight: 600;
			}
		}
		

	}
	
	.agrochemicalCenter{
		.agrochemicalCon{				
			.grid-content{
				position: relative;
				height: 640px;
				margin-bottom: 25px;
				overflow:hidden;
				.grid-content-img{
					height: 640px;
					overflow:hidden;
					img{
						display: block;
						height: 100%;
						margin: 0 auto;
					}
				}
				.mask{
					display: block;
					height: 100%;
					width: 100%;
					background: rgba(0,0,0,.4);
					position: absolute;
					top:0;
					text-align:center;
					.maskImg{
						display: block;
						width: 100px;
						height: 100px;
						border-radius: 50%;
						background: #fff;
						overflow: hidden;
						position:relative;
						margin:80px auto 140px;
						img{
							display: block;
							width: 70%;
							position: absolute;
							top:0;
							left:0;
							right:0;
							bottom:0;
							margin: auto;
						}
					}
					h4{
						color: #fff;
						text-align: center;
						font-size: 26px;
						font-weight: 600;
					}
					p{
						width: 100%;
						position: absolute;
						bottom:60px;
						text-align: center;
						a{
							color: #fff;
							font-size: 14px;
							padding: 4px 10px;
							cursor: pointer;
						}
					}
					
				}
			}
		}
			
	}
		

</style>
