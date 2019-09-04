<template>
	<div class="footer">
		<div class="footerImg">
			<img src="../assets/img/erweima.jpg">
			<p class="footerImgInfo">扫描二维码<br>了解更多</p>
		</div>
		<p class="footerBa">堃泰生物科技有限公司堃泰生物科技有限公司堃泰生物科技有限公司堃泰生物科技有限公司</p>
		<p class="footerLx">堃泰生物科技有限公司堃泰生物科技技有限公司</p>
	</div>
</template>

<script>
	import 'element-ui/lib/theme-chalk/display.css';
	export default {
		name: 'foot',
		props: {
			msg: String
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import "../assets/css/reset.css";

	.footer {
		padding:50px 0 30px;
		background:#000000;
		.footerImg {
			margin-bottom: 38px;

			img {
				display: block;
				width: 195px;
				height: 195px;
				margin: 0 auto 15px;
			}

			.footerImgInfo {
				font-size: 14px;
				line-height: 28px;
				text-align: center;
				color: #FFFFFF;
			}
		}

		.footerBa,
		.footerLx {
			font-size: 12px;
			line-height: 30px;
			text-align: center;
			color: #FFFFFF;
		}
	}
</style>
