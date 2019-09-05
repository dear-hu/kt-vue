<template>
	<div class="header">
		<el-row :gutter="20">
		<el-col :md="5" :sm="3" :offset="1">
			<div class="logo">
				<a href="javascript:void(0)">
					<el-row :gutter="20">
						<el-col :md="5">
							<img src="../assets/img/nav_logo.png" alt="堃泰生物科技有限公司" class="logoIcon" />
						</el-col>
						<el-col :md="18" :offset="1" class='hidden-md-and-down'>
							<p>堃泰生物科技有限公司</p>
						</el-col>
					</el-row>
				</a>
			</div>
		</el-col>
		<el-col :md="17" :sm="19">
			<ul class="navbar-nav ml-auto">
				<el-row :gutter="20">
					<el-col :span="3" :offset="2" class="nav-item-box">
						<li class="nav-item" :class="{active:'/' === $route.path }"  @click="goto('/')">
							<a class="nav-link" href="javascript:void(0)">官网首页</a>
						</li>
					</el-col>
					<el-col :span="3" class="nav-item-box">
						<li class="nav-item" :class="{active:'/news' === $route.path }" @click="goto('/news')">
							<a class="nav-link" href="javascript:void(0)">新闻中心</a>
						</li>
					</el-col>
					<el-col :span="3" class="nav-item-box"> 
						<li class="nav-item" :class="{active:'/product' === $route.path }" @click="goto('/product')">
							<a class="nav-link" href="javascript:void(0)">产品中心</a>
						</li>
					</el-col>
					<el-col :span="3" class="nav-item-box"> 
						<li class="nav-item " :class="{active:'/research' === $route.path }" @click="goto('/research')">
							<a class="nav-link" href="javascript:void(0)">研发技术</a>
						</li>
					</el-col>
					<el-col :span="3" class="nav-item-box"> 
						<li class="nav-item" :class="{active:'/plant' === $route.path }" @click="goto('/plant')">
							<a class="nav-link" href="javascript:void(0)">农化服务</a>
						</li>
					</el-col>
					<el-col :span="3" class="nav-item-box"> 
						<li class="nav-item" :class="{active:'/idea' === $route.path }" @click="goto('/idea')">
							<a class="nav-link" href="javascript:void(0)">人才战略</a>
						</li>
					</el-col>
					<el-col :span="3" class="nav-item-box"> 
						<li class="nav-item" :class="{active:'/about' === $route.path }" @click="goto('/about')">
							<a class="nav-link" href="#">关于我们</a>
						</li>
					</el-col>
				</el-row>
			</ul>
		</el-col>
	</el-row>
	</div>
</template>

<script>
	import 'element-ui/lib/theme-chalk/display.css';
	export default {
		name: 'Head',
		props: {
			msg: String
		},
		methods: {
			goto(path) {
				console.log(path)
				this.$router.replace(path)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import "../assets/css/reset.css";
		
	.header{
		height: 50px;
		padding: 15px 0;
		font-size: 15px;
		line-height: 50px;
		.logo{
			.logoIcon{
				display: block;
				margin-top: 4px;
				max-height: 42px;
			}
			p{
				font-weight: 900;
				font-size: 16px;
			}
		}
		.nav-item-box{
			padding-left: 0!important;
			padding-right: 0!important;
		}
		
		.nav-item{
			a{
				padding: 5px 10px;
				font-weight: 600;
				font-size: 14px;				
				border-radius: 8px;				
			}
			a:hover{
				background:#2e992e;
				color: #fff;
			}
		}
		.active{
			a{
				background:#2e992e;
				color: #fff;
			}
			
		}
	}
</style>
