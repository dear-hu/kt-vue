<template>
    <div id="app">
		<el-container>
		  <el-header>
			  <Head/>
		  </el-header>
		  <el-main>
			  <router-view/>
		  </el-main>
		</el-container>

    </div>
</template>
<script>
    // @ is an alias to /src
    import Head from '@/components/Head.vue'

    export default {
        name: 'home',
        components: {
            Head
        }
    }
</script>

<style lang="scss">
   .content{
       padding-top: 100px;
   }
</style>
