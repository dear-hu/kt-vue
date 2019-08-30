<template>
    <div id="app">
        <Head/>
        <div  class="content">
            <router-view/>
        </div>

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
