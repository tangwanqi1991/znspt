<template>
    <div>
        <!--nav-->
        <nav class="navbar navbar-fixed-top my-navbar" role="navigation">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse"
                        data-target="#example-navbar-collapse">
                    <img src="static/images/logo/logo.png" alt="">
                </button>
            </div>
            <div class="collapse navbar-collapse" id="example-navbar-collapse" style="text-align: center;">
                <ul class="nav navbar-nav" data-in="fadeInDown" data-out="fadeOutUp"
                    style="display: inline-block;float: none;">
                    <li>
                        <router-link to="/">
                            首页
                        </router-link>
                    </li>
                    <li class="dropdown">
                        <router-link to="/Group">走进上尚</router-link>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link to="/Group">
                                    集团介绍
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/Sswh">
                                    企业文化
                                </router-link>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <router-link to="/News">新闻资讯</router-link>
                    </li>
                    <li><img src="static/images/logo/logo.png" alt=""></li>
                    <li>
                        <router-link to="/Recruit">人才发展</router-link>
                    </li>
                    <li><router-link to="/Project">项目欣赏</router-link></li>
                    <li>
                        <router-link to="/Contact">联系我们</router-link>
                    </li>
                </ul>
            </div>

        </nav>
        <!--end nav-->

        <!--banner-->
        <div class="banner">
            <div class="row">
                <div class="col-sm-6 col-md-12">

                </div>
            </div>
        </div>
        <!--end banner-->

        <!--bq-->
        <div class="bq">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6 col-md-2"></div>
                    <div class="col-sm-6 col-md-8">
                        <router-link to="/">首页</router-link>
                        >
                        <router-link class="active" to="/Project">项目欣赏</router-link>
                    </div>
                    <div class="col-sm-6 col-md-2"></div>

                </div>
            </div>
        </div>
        <!--end bq-->

        <!--porject-->
        <div class="porject">
            <div class="row">
                <div class="col-sm-6 col-md-2"></div>
                <div class="col-sm-6 col-md-8">
                    <h1>项目欣赏</h1>
                    <p class="alias">Project to appreciate</p>
                </div>
                <div class="col-sm-6 col-md-2"></div>
            </div>
        </div>
        <!--end porject-->

        <!--cases-->
        <div class="cases">
            <div class="row">
                <div class="col-sm-6 col-md-2"></div>
                <div class="col-sm-6 col-md-8">
                    <div class="row">
                        <div class="demo">
                            <div class="row" >
                                <div class="col-sm-6 col-md-4" v-for="v in xmbt" :key="v.id" style="margin-top: 20px;">
                                    <div class="box">
                                        <img :src="v.preview">
                                        <div class="box-content">
                                            <h3 class="title">{{v.title}}</h3>
                                            <span class="post">{{v.site}}</span>
                                            <ul class="social">
                                               <!-- <li><router-link to="/ProjectContents"><img src="/static/images/ck.png" alt="" style="width: 30px;height: 30px;"></router-link></li>-->
                                                <li>
                                                    <router-link :to="{params:{xmbtId:v.id},name:'ProjectContents'}"><img src="/static/images/ck.png" alt="" style="width: 30px;height: 30px;"></router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <!--<div class="col-sm-6 col-md-4">
                                    <div class="box">
                                        <img src="/static/images/2.jpg">
                                        <div class="box-content">
                                            <h3 class="title">锦绣时代</h3>
                                            <span class="post">杭州未来科技城海创园二期</span>
                                            <ul class="social">
                                                <li><a href="#"><img src="/static/images/ck.png" alt="" style="width: 30px;height: 30px;"></a></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-4">
                                    <div class="box">
                                        <img src="/static/images/3.jpg">
                                        <div class="box-content">
                                            <h3 class="title">捷瑞达瑞谷中心</h3>
                                            <span class="post">杭州未来科技</span>
                                            <ul class="social">
                                                <li><a href="#"><img src="/static/images/ck.png" alt="" style="width: 30px;height: 30px;"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>-->
                            </div>
                        </div>
                        <!--<div class="demo">
                            <div class="row">
                                <div class="col-sm-6 col-md-4">
                                    <div class="box">
                                        <img src="/static/images/4.jpg">
                                        <div class="box-content">
                                            <h3 class="title">海智中心</h3>
                                            <span class="post">杭州未来科技</span>
                                            <ul class="social">
                                                <li><a href="#"><img src="/static/images/ck.png" alt="" style="width: 30px;height: 30px;"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-4">
                                    <div class="box">
                                        <img src="/static/images/5.jpg">
                                        <div class="box-content">
                                            <h3 class="title">上尚城</h3>
                                            <span class="post">杭州未来科技</span>
                                            <ul class="social">
                                                <li><a href="#"><img src="/static/images/ck.png" alt="" style="width: 30px;height: 30px;"></a></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-4">
                                    <div class="box">
                                        <img src="/static/images/6.png">
                                        <div class="box-content">
                                            <h3 class="title">飞鸟客</h3>
                                            <span class="post">杭州未来科技</span>
                                            <ul class="social">
                                                <li><a href="#"><img src="/static/images/ck.png" alt="" style="width: 30px;height: 30px;"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="demo">
                            <div class="row">
                                <div class="col-sm-6 col-md-4">
                                    <div class="box">
                                        <img src="/static/images/7.jpg">
                                        <div class="box-content">
                                            <h3 class="title">申鼎大厦</h3>
                                            <span class="post">杭州未来科技</span>
                                            <ul class="social">
                                                <li><a href="#"><img src="/static/images/ck.png" alt="" style="width: 30px;height: 30px;"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-4">
                                    <div class="box">
                                        <img src="/static/images/8.jpg">
                                        <div class="box-content">
                                            <h3 class="title">遇见溪望商业街</h3>
                                            <span class="post">杭州未来科技</span>
                                            <ul class="social">
                                                <li><a href="#"><img src="/static/images/ck.png" alt="" style="width: 30px;height: 30px;"></a></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-4">
                                    <div class="box">
                                        <img src="/static/images/9.jpg">
                                        <div class="box-content">
                                            <h3 class="title">国际会议中心</h3>
                                            <span class="post">杭州未来科技</span>
                                            <ul class="social">
                                                <li><a href="#"><img src="/static/images/ck.png" alt="" style="width: 30px;height: 30px;"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>-->
                    </div>
                    <!--pager-->

                    <!--分页-->
                       <!-- <div class="row">
                            <div class="col-sm-6 col-md-12" style="text-align: center;">
                                <ul class="pagination">
                                    <li><a href="#">&laquo;</a></li>
                                    <li class="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#">&raquo;</a></li>
                                </ul>
                            </div>
                        </div>-->
                    <!--end 分页-->

                    <!--end pager-->
                </div>
                <div class="col-sm-6 col-md-2"></div>
            </div>
        </div>
        <!--end cases-->

        <!--footer-->
        <div class="footer">
            <div class="row">
                <div class="col-sm-6 clo-md-8">
                    <div class="ba">
                        <dl>
                            <dt class="strong">网站备案号：浙ICP备16028135号</dt>
                            <dt class="copyright">Copyright © 2016-2020 上尚新商业集团版权所有</dt>
                        </dl>
                        <!--<p class="strong">网站备案号：浙ICP备16028135号</p>
                        <p>Copyright © 2002-2017 某某企业集团有限公司版权所有</p>-->
                    </div>
                </div>
                <div class="col-sm-6 clo-md-4">
                    <img src="/static/images/s.png" alt="">
                    <dl class="tel-content">
                        <p>咨询热线</p>
                        <p>0571-6211-0999</p>
                        <p>服务时间：9：00-22：00</p>
                    </dl>

                </div>

            </div>

        </div>
        <!--end footer-->

        <!--go_top-->
        <div class="scrollTop" @click="toTop"></div>
        <!--end go_top-->


    </div>

</template>

<script>
    export default {
        name: "Project",
        data(){
            return {
                xmbt:[],
            }
        },
        mounted(){
            this.axios.get('http://huifw.vip/api/xmbt').then((response) => {
                this.xmbt = response.data.data;
            });


            /*go_top*/
            document.querySelector('.scrollTop').style.bottom = this.toBottom;
            $(".scrollTop").scrollToTop(1000);
            /*end go_top*/
        },
        methods:{
            toTop() {
                document.documentElement.scrollTop = document.body.scrollTop = 0;
            }
        }
    }
</script>

<style scoped>
    * {
        font-family: 方正兰亭中黑_GBK;
        margin: 0;
        padding: 0;
    }


    /*go_top*/
    .scrollTop {
        display: none;
        position: fixed;
        bottom: 5px;
        right: 5px;
        width: 64px;
        height: 64px;
        background-image: url('/static/icon/top.png');
        background-repeat: no-repeat;
        opacity: 0.4;
        filter: alpha(opacity=40); /* For IE8 and earlier */
    }
    .scrollTop:hover {
        opacity: 0.8;
        filter: alpha(opacity=80); /* For IE8 and earlier */
    }
    /*end go_top*/

    /*logo*/
    .nav > li > img {
        width: 80px;
        height: 80px;
        margin: -2px 0px 0 20px;
    }

    /*end logo*/
    /*导航字体*/
    nav.navbar.my-navbar ul.nav > li > a {
        color: #fff;
        background-color: transparent;
        text-transform: uppercase;
        margin: 25px 25px 0 45px;
    }

    /*end 导航字体*/
    /*导航下拉透明背景效果*/
    .my-navbar {
        padding: 20px 0;
        transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
    }

    .my-navbar a {
        background: transparent !important;
        color: #fff !important
    }

    .my-navbar a:hover {
        color: #45bcf9 !important;
        background: transparent;
        outline: 0
    }

    .my-navbar a {
        transition: color 0.5s ease-in-out;
    }

    /*-webkit-transition ;-moz-transition*/
    .top-nav {
        padding: 0;
        background: #000;
    }

    /*整个背景都是transparent透明的，会看不到，所以再次覆盖一下*/
    button.navbar-toggle > span.icon-bar {
        background-color: #dedede
    }

    /*end 导航下拉透明背景效果*/

    /* 鼠标经过显示二级菜单*/
    .navbar .nav > li .dropdown-menu {
        margin: 0;
        text-align: center;
        background-color: #222222;
    }

    .navbar .nav > li:hover .dropdown-menu {
        display: block;
    }

    .navbar-nav > li > .dropdown-menu > li > a {
        border-bottom: solid 1px #272727;
        color: #fff;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .navbar-nav > li > .dropdown-menu > li > a:hover {
        background-color: #5a5a64;

    }

    /*end 鼠标经过显示二级菜单*/
    /*sapn logo navbar-toggle*/
    .navbar-collapse, .navbar-fixed-top .navbar-collapse {
        max-height: 340px;
        margin-right: 40px;
    }

    .navbar-fixed-top .navbar-toggle img {
        width: 40px;
        height: 40px;
        margin-right: 50px;
    }

    .navbar-inverse .navbar-toggle {
        border-color: rgba(1, 1, 1, 0.01);
    }

    .navbar-toggle {
        position: relative;
        float: right;
        padding: 9px 10px;
        margin: 2px 110px 0 0;
        background-color: transparent;
        background-image: none;
        border: 1px solid transparent;
        border-radius: 4px;
    }

    /*end sapn logo  navbar-toggle*/

    /*banner*/
    .banner {
        margin: 0 auto;
        background: linear-gradient(
                rgba(0, 0, 0, 0.2),
                rgba(0, 0, 0, 0.2)
        ), url('../../static/images/project.jpg') no-repeat fixed;
        width: 100%;
        height: 648px;

    }
    /*end baner*/

    /*bq*/
    .bq {
        margin: 20px auto 0;
        text-align: right;

    }
    .bq a {
        font-family: 幼圆;
        text-decoration: none;
        font-size: 16px;
        color: #337ab7;
    }
    .bq .active {
        color: #000;
    }
    /*end bq*/

    /*porject*/
    .porject {
        width: 100%;
        height: 100%;
    }
    .porject h1 {
        color: #4e565d;
    }
    .porject .alias {
        margin: 20px 0;
        font-family: Arial;
        font-size: 18px;
        color: #4e565d;
        text-transform: Capitalize; /*首字母大写*/
    }
    /*end porject*/

    /*cases*/
    .demo{
        padding: 2em 0;
    }
    .box{
        text-align: center;
        overflow: hidden;
        color: #fff;
        position: relative;
        margin: 0 10px 0 10px;
    }
    .box:after{
        content: "";
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.08) 69%, rgba(0, 0, 0, 0.76) 100%);
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.5s ease 0s;
    }
    .box:hover:after{
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.01) 0%, rgba(0, 0, 0, 0.09) 11%, rgba(0, 0, 0, 0.12) 13%, rgba(0, 0, 0, 0.19) 20%, rgba(0, 0, 0, 0.29) 28%, rgba(0, 0, 0, 0.29) 29%, rgba(0, 0, 0, 0.42) 38%, rgba(0, 0, 0, 0.46) 43%, rgba(0, 0, 0, 0.53) 47%, rgba(0, 0, 0, 0.75) 69%, rgba(0, 0, 0, 0.87) 84%, rgba(0, 0, 0, 0.98) 99%, rgba(0, 0, 0, 0.94) 100%);
    }
    .box img{
        width: 100%;
        height: 340px;
    }
    .box .box-content{
        width: 100%;
        padding: 20px;
        margin-bottom: 20px;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
    }
    .box .title{
        font-size: 22px;
        font-weight: 700;
        text-transform: uppercase;
        margin: 0 0 10px 0;
        transform: translateY(145px);
        transition: all 0.4s cubic-bezier(0.13, 0.62, 0.81, 0.91) 0s;
    }
    .box .post{
        display: block;
        padding: 8px 0;
        font-size: 15px;
        transform: translateY(145px);
        transition: all 0.4s cubic-bezier(0.13, 0.62, 0.81, 0.91) 0s;
    }
    .box:hover .title,
    .box:hover .post{
        transform: translateY(0);
    }
    .box .social{
        list-style: none;
        padding: 0 0 5px 0;
        margin: 40px 0 25px;
        opacity: 0;
        position: relative;
        transform: perspective(500px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg);
        transition: all 0.6s cubic-bezier(0, 0, 0.58, 1) 0s;
    }
    .box:hover .social{
        opacity: 1;
        transform: perspective(500px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    .box .social:before{
        content: "";
        width: 50px;
        height: 2px;
        background: #fff;
        margin: 0 auto;
        position: absolute;
        top: -23px;
        left: 0;
        right: 0;
    }
    .box .social li{
        display: inline-block;
    }
    .box .social li a{
        display: block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 50%;
        background: #6d3795;
        font-size: 20px;
        color: #fff;
        margin-right: 10px;
        transition: all 0.3s ease 0s;
    }
    .box .social li a:hover{
        background: #bea041;
    }
    .box .social li:last-child a{
        margin-right: 0;
    }


    /*end cases*/
    /*footer*/
    .footer {
        font-family: 方正兰亭黑简体;
        margin: 50px auto 0;
        /*    background: linear-gradient(
                    rgba(0, 0, 0, 0.2),
                    rgba(0, 0, 0, 0.2)
            ), url('../../static/images/ssxys_amap.png') no-repeat fixed;*/
        background-color: #1b1b1b;
        width: 100%;
        height: 200px;
        -o-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;
    }

    .ba {
        margin: 70px auto 0;
        /*text-align: center;*/
        color: #fff;
        font-family: 方正兰亭黑简;
        font-size: 16px;
        text-align: center;

    }

    .ba .strong {
        line-height: 2;
        word-spacing: 1px;
        letter-spacing: 1px;
    }

    .ba .copyright {
      /*  text-indent: 8em;*/
        line-height: 2;
        word-spacing: 1px;
        letter-spacing: 1px;
    }

    .footer img {
        margin: 20px 0 0 400px;
    }

    .footer .tel-content {
        line-height: 300%;
        color: #fff;
        margin: -130px 0 0 450px;
    }

    /*end footer*/

    @media screen and (max-width: 1500px){
        .footer img {
            margin: 20px 0 0 300px;
        }
        .footer .tel-content {
            line-height: 300%;
            color: #fff;
            margin: -130px 0 0 350px;
        }
    }
    @media screen and (max-width: 1300px) {
        .footer img {
            margin: 20px 0 0 300px;
        }
        .footer .tel-content {
            line-height: 300%;
            color: #fff;
            margin: -130px 0 0 350px;
        }
        .box img{
            width: 100%;
            height: 280px;
        }

    }
    @media screen and (max-width: 990px){
        .box{ margin-bottom: 30px; }
    }
    @media (max-width: 768px){
        /*banner*/
        .banner {
            margin: 0 auto;
            background: linear-gradient(
                    rgba(0, 0, 0, 0.2),
                    rgba(0, 0, 0, 0.2)
            ), url('../../static/images/project.jpg') no-repeat fixed;
            width: 100%;
            height: 448px;

        }
        /*end baner*/

        /*footer*/
        .footer {
            margin: -30px auto 0;
            background-color: #1b1b1b;
            width: 100%;
            height: 100%;
            -o-background-size: cover;
            -moz-background-size: cover;
            background-size: cover;
        }
        .ba {
            margin: 50px auto 0;
            /*text-align: center;*/
            color: #fff;
            font-family: 方正兰亭黑简;
            font-size: 14px;
            text-align: center;

        }
        .ba .copyright {
            text-indent: 0em;
            line-height: 2;

            word-spacing: 1px;
            letter-spacing: 1px;
            /*自动换行*/
            /*  word-wrap: break-word;
              word-break: break-all;*/
            /*end 自动换行*/
        }
        .footer img {
            margin: 20px 0 0 60px;
        }
        .footer .tel-content {
            line-height: 300%;
            color: #fff;
            margin: -130px 0 0 100px;
        }

        /*end footer*/
    }
    .pagination{
        margin: 20px 0 0 0;
        text-align: center
    }


</style>