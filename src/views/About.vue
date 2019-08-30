<template>
  <div class="about">
    <Head/>
    <h1>关于我们</h1>
    <el-button>按钮</el-button>
  </div>
</template>
<script>
    // @ is an alias to /src
    import Head from '@/components/Head.vue'

    export default {
        name: 'about',
        components: {
            Head
        }
    }
</script>