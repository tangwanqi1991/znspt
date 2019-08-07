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
                                <router-link to="/Group">
                                    企业文化
                                </router-link>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <router-link to="/News">
                            新闻资讯
                        </router-link>
                    </li>
                    <li><img src="static/images/logo/logo.png" alt=""></li>
                    <li> <router-link to="/Recruit">人才发展</router-link></li>
                    <li><router-link to="/Project">项目欣赏</router-link></li>
                    <li><router-link to="/Contact">联系我们</router-link></li>
                </ul>
            </div>

        </nav>
        <!--end nav-->

        <!--banner-->
        <div class="banner">
            <div class="row">
                <div class="col-sm-6 col-md-12"></div>
                <div class="row" style="margin: 200px auto 0;">
                    <div class="col-sm-6 col-md-2"></div>
                    <div class="col-sm-6 col-md-4">
                        <h1>人才理念</h1>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <p class="title">员工是企业最宝贵的资产</p>
                        <p class="content">
                            资产增值是新城对员工的坚定承诺。
                            新城提倡以人为本，实现员工与企业共成长。
                            新城期望人才德才兼备、以德为先。
                            新城致力于打造“以此为生、精于此道、追求卓越”的专业化、职业化团队。

                            我们一贯倡导“人本质上，德能启运”的企业文化，并努力践行。我们致力于为员工提供空间广阔又有挑战性的工作，轻松又和谐的工作氛围，完善的培训机制，以及具有竞争力的薪酬福利，从而吸引和发展优秀人才成为未来的商业领袖，为企业创造价值。
                        </p>
                    </div>
                    <div class="col-sm-6 col-md-2"></div>
                </div>
            </div>
        </div>
        <!--end banner-->

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
        name: "Telents",
        data(){
            return {

            }/*return*/
        },/*data*/
        mounted(){
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
        /* text-align: center;*/
        margin: 0;
        background: linear-gradient(
                rgba(0, 0, 0, 0.2),
                rgba(0, 0, 0, 0.1)
        ), url('../../static/images/bj.jpg') no-repeat fixed;
        width: 100%;
        height: 825px;
        -o-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;

    }
    .banner h1{
        font-size: 32px;
        font-weight: bold;
        line-height: 1em;
        letter-spacing:5px;
    }
    .banner .title{
        font-weight: bold;
        font-size: 20px;
        letter-spacing:2px;
    }
    .banner .content{
        margin-top: 20px;
        line-height: 2em;
        color: #fff;
        font-size: 16px;
        letter-spacing:2px;



    }
    /*end baner*/



    /*footer*/
    .footer {
        font-family: 方正兰亭黑简体;
        margin: 0 auto;
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
       /* text-indent: 8em;*/
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
    /*用max-width时，小的放下面*/

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
    @media screen and (max-width: 1300px){
        .footer img {
            margin: 20px 0 0 300px;
        }
        .footer .tel-content {
            line-height: 300%;
            color: #fff;
            margin: -130px 0 0 350px;
        }

    }
    @media screen and (max-width: 768px){
        /*banner*/
        .banner {
            /* text-align: center;*/
            margin: 0 auto;
            background: linear-gradient(
                    rgba(0, 0, 0, 0.1),
                    rgba(0, 0, 0, 0.1)
            ), url('../../static/images/bj.jpg') no-repeat fixed;
            width: 100%;
            height: 100%;
            -o-background-size: cover;
            -moz-background-size: cover;
            background-size: cover;

        }
        .banner h1{
            text-align: center;
            font-size: 30px;
            font-weight: bold;
            line-height: 1em;
            letter-spacing:5px;
        }
        .banner .title{
            text-align: center;
            font-weight: bold;
            font-size: 18px;
            margin-top: 20px;
            letter-spacing:2px;

        }
        .banner .content{
            text-indent: 2em;
            line-height: 2em;
            font-size: 16px;
            letter-spacing:2px;
            color: #101010;

        }
        /*end baner*/
        /*footer*/
        .footer {
            background-color: #1b1b1b;
            width: 100%;
            height: 100%;
            -o-background-size: cover;
            -moz-background-size: cover;
            background-size: cover;
        }
        .ba {
            margin: 50px auto 0;
            text-align: center;
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
            /*!*自动换行*!*/
            word-wrap: break-word;
            word-break: break-all;
            /* !*end 自动换行*!*/
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
</style>