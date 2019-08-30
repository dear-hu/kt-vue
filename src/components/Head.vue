<template>
    <div class="navbarBox">
        <div class="logo">
            <a href="javascript:void(0)">
                <img src="../assets/img/nav_logo.png" alt="堃泰生物科技有限公司" class="logoIcon"/>
                <p>堃泰生物科技有限公司</p>
            </a>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item " :class="{active:'/' === $route.path }" @click="goto('/home')">
                  官网首页
                </li>
                <li class="nav-item " :class="{active:'/news' === $route.path }" @click="goto('/news')">
                    <a class="nav-link " href="#">新闻中心</a>
                </li>
                <li class="nav-item " :class="{active:'/product' === $route.path }" @click="goto('/product')">
                    <a class="nav-link " href="#">产品中心</a>
                </li>
                <li class="nav-item " :class="{active:'/research' === $route.path }" @click="goto('/research')">
                    <a class="nav-link " href="#">研发技术</a>
                </li>
                <li class="nav-item " :class="{active:'/plant' === $route.path }" @click="goto('/plant')">
                    <a class="nav-link " href="#">农化服务</a>
                </li>
                <li class="nav-item " :class="{active:'/idea' === $route.path }" @click="goto('/idea')">
                    <a class="nav-link " href="#">人才战略</a>
                </li>
                <li class="nav-item " :class="{active:'/about' === $route.path }" @click="goto('/about')">
                    <a class="nav-link" href="#">关于我们</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Head',
        props: {
            msg: String
        },
        methods:{
            goto(path){
                this.$router.replace(path)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "../assets/css/reset.css";
    .navbarBox {
        height: 50px;
        background: rgba(255, 255, 255, .9);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        padding: 10px 4%;
        color: #333;
        font-size: 18px;
    }

    .navbarBox .logo {
        line-height: 50px;
        float: left;
    }

    .navbarBox .logo a {
        color: #333;
        height: 50px;
        display: block;
        width: 300px;
        line-height: 50px;
    }

    .navbarBox .logo a img {
        display: block;
        height: 50px;
        margin-right: 8px;
        float: left;
    }

    .navbarBox .logo a span {
        display: inline-block;
        height: 50px;
        line-height: 50px;
    }

    .collapse {
        float: right;
        width: 68%;
    }

    .collapse ul {
        display: flex;
        line-height: 50px;
    }

    .collapse ul li {
        flex: 1;
    }

    .collapse ul li a {
        padding: 3px 12px;
        border-radius: 13px;
    }

    .collapse ul .active a {
        background: #2e992e;
        color: #ffffff;
    }
</style>
