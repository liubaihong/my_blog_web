<template>
    <header>
        <ul class="leadUl">
            <li class="leadLi"><nuxt-link class="linkItem" to="/">首页</nuxt-link></li>
            <li class="leadLi"><nuxt-link class="linkItem" to="/about/home">产品中心</nuxt-link></li>
            <li class="leadLi"><nuxt-link class="linkItem" to="/about/introduce">公司简介</nuxt-link></li>
            <li class="leadLi"><nuxt-link class="linkItem" to="/about/page">新闻资讯</nuxt-link></li>
            <li class="leadLi"><nuxt-link class="linkItem" to="/about/apply">申请代理商</nuxt-link></li>
            <li class="leadLi"><nuxt-link class="linkItem" to="/about/help">帮助中心</nuxt-link></li>
        </ul>
    </header>
</template>
<script>
    export default{

    }
</script>
<style scoped>
    .leadUl {
        list-style-type:none;
        margin:0;
        padding:0;
        overflow:hidden;
    }
    .leadLi {
        float:left;
    }
    a:link,a:visited {
        display:block;
        width:120px;
        font-weight:bold;
        color:#FFFFFF;
        background-color: #42B0FF;
        text-align:center;
        padding:4px;
        text-decoration:none;
        text-transform:uppercase;
    }
    a:hover,a:active {
        background-color: red;
    }
</style>