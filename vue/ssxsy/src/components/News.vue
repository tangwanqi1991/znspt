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
                        <router-link class="active" to="/News">新闻资讯</router-link>
                    </div>
                    <div class="col-sm-6 col-md-2"></div>

                </div>
            </div>
        </div>
        <!--end bq-->

        <!--News-->
        <div class="news">
            <div class="row">
                <div class="col-sm-6 col-md-2"></div>
                <div class="col-sm-6 col-md-8">
                    <h1>新闻资讯</h1>
                    <p class="alias"> news information</p>
                </div>
                <div class="col-sm-6 col-md-2"></div>
            </div>
        </div>
        <!--end News-->

        <!--myTab-->
        <div class="row">
            <div class="col-sm-6 col-md-2"></div>
            <div class="col-sm-6 col-md-8">
                <!--头部标签-->
                <div class="tab">
                    <ul id="myTab" class="nav nav-tabs">
                        <li class="active"><a href="#home" data-toggle="tab"><img src="/static/icon/new_icon.ico" alt="">公司新闻</a></li>
                        <li><a href="#News" data-toggle="tab"><img src="/static/icon/News%20information.ico" alt="">各地动态</a></li>
                        <li><a href="#media" data-toggle="tab"><img src="/static/icon/media%20reports.ico" alt="">媒体报道</a></li>
                    </ul>
                </div>
                <!--end 头部标签-->
            </div>
            <div class="col-sm-6 col-md-2"></div>
        </div><!--row 媒体标题-->
        <div class="row">
            <div class="col-sm-6 col-md-2"></div>
            <div class="col-sm-6 col-md-8">
                <div class="row">
                    <div class="col-sm-6 col-md-12">
                        <div  class="tab-content">
                            <div class="tab-pane fade in active" id="home">
                                <div class="jumbotron"><!--jumbotron-->
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-sm-6 col-md-4">
                                                <img src="/static/images/news_01.png" alt="">
                                            </div>
                                            <div class="col-sm-6 col-md-1"></div>
                                            <div class="col-sm-6 col-md-3">
                                                <h1  class="news_title"><router-link to="/NewsContents">上尚新商业集团组织开展“旗帜领航·美好生活在上尚新商业集团 ”2018年春节系列活动</router-link></h1>
                                                <p class="news_time">23 / 04 / 2018</p>
                                                <p class="news_content">
                                                    4月20日，拥有着独一无二音乐体验，娱乐氛围，标志性零售商品和纯正美式菜肴的餐厅品牌——Hard Rock硬石餐厅，正式入驻天津。
                                                </p>
                                            </div>
                                            <div class="col-sm-6 col-md-4">
                                                <div class="panel-group" id="accordion">
                                                    <div class="panel panel-default">
                                                        <div class="panel-heading">
                                                            <h4 class="panel-title">
                                                                <a data-toggle="collapse" data-parent="#accordion"
                                                                   href="#collapseOne">
                                                                    <img src="/static/images/news_02.png" alt="">
                                                                </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseOne" class="panel-collapse collapse in">
                                                            <div class="panel-body">
                                                                <a href="#">新京报：上尚新商业集团  “中查模式”让藏乡变了样</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div><!--jumbotron-->

                                <!--news_tab-->
                                <div class="news_tab">
                                    <div class="row">
                                        <div class="col-sm-6 col-md-8">
                                            <div class="tab_content">
                                                <a href="#" class="news_title">上尚新商业集团 集团组织开展“旗帜领航·美好生活在上尚新商业集团 ”2018年春节系列活动</a>
                                                <p class="news_author">发布者：外联部 &nbsp&nbsp&nbsp<storp class="news_time">时间：2018.02.23</storp></p>

                                                <p class="news_content">
                                                    春节期间，上尚新商业集团 集团整合区域资源，上下联动开展“旗帜领航·美好生活在上尚新商业集团 ”主题2018年春节系列活动，为上尚新商业集团 业主送去新春的祝福，建设美好生活社区。
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-4">
                                            <img src="/static/images/sswh-ban2.jpg" alt="">
                                        </div>
                                    </div>
                                </div>
                                <!--end news_tag-->

                            </div><!--home-->
                            <div class="tab-pane fade" id="News">
                                <div class="jumbotron"><!--jumbotron-->
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-sm-6 col-md-4">
                                                <img src="/static/images/news_01.png" alt="">
                                            </div>
                                            <div class="col-sm-6 col-md-1"></div>
                                            <div class="col-sm-6 col-md-3">
                                                <h1  class="news_title"><a href="#">上尚新商业集团 集团组织开展“旗帜领航·美好生活在上尚新商业集团 ”2018年春节系列活动</a></h1>
                                                <p class="news_time">23 / 04 / 2018</p>
                                                <p class="news_content">
                                                    4月20日，拥有着独一无二音乐体验，娱乐氛围，标志性零售商品和纯正美式菜肴的餐厅品牌——Hard Rock硬石餐厅，正式入驻天津。
                                                </p>
                                            </div>
                                            <div class="col-sm-6 col-md-4">
                                                <div class="panel-group" id="accordion2">
                                                    <div class="panel panel-default">
                                                        <div class="panel-heading">
                                                            <h4 class="panel-title">
                                                                <a data-toggle="collapse" data-parent="#accordion2" href="#collapseOne2">
                                                                    <img src="/static/images/news_02.png" alt="">
                                                                </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseOne2" class="panel-collapse collapse in">
                                                            <div class="panel-body">
                                                                <a href="#">新京报：上尚新商业集团  “中查模式”让藏乡变了样</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div><!--jumbotron-->

                                <!--news_tab-->
                                <div class="news_tab">
                                    <div class="row">
                                        <div class="col-sm-6 col-md-8">
                                            <div class="tab_content">
                                                <a href="#" class="news_title">上尚新商业集团 集团组织开展“旗帜领航·美好生活在上尚新商业集团 ”2018年春节系列活动</a>
                                                <p class="news_author">发布者：外联部 &nbsp&nbsp&nbsp<storp class="news_time">时间：2018.02.23</storp></p>

                                                <p class="news_content">
                                                    春节期间，上尚新商业集团 集团整合区域资源，上下联动开展“旗帜领航·美好生活在上尚新商业集团 ”主题2018年春节系列活动，为上尚新商业集团 业主送去新春的祝福，建设美好生活社区。
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-4">
                                            <img src="/static/images/sswh-ban2.jpg" alt="">
                                        </div>
                                    </div>
                                </div>
                                <!--end news_tag-->

                            </div><!--News-->
                            <div class="tab-pane fade" id="media"><!--media-->
                                <div class="jumbotron"><!--jumbotron-->
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-sm-6 col-md-4">
                                                <img src="/static/images/news_01.png" alt="">
                                            </div>
                                            <div class="col-sm-6 col-md-1"></div>
                                            <div class="col-sm-6 col-md-3">
                                                <h1  class="news_title"><a href="#">上尚新商业集团 集团组织开展“旗帜领航·美好生活在上尚新商业集团 ”2018年春节系列活动</a></h1>
                                                <p class="news_time">23 / 04 / 2018</p>
                                                <p class="news_content">
                                                    4月20日，拥有着独一无二音乐体验，娱乐氛围，标志性零售商品和纯正美式菜肴的餐厅品牌——Hard Rock硬石餐厅，正式入驻天津。
                                                </p>
                                            </div>
                                            <div class="col-sm-6 col-md-4">
                                                <div class="panel-group" id="accordion3">
                                                    <div class="panel panel-default">
                                                        <div class="panel-heading">
                                                            <h4 class="panel-title">
                                                                <a data-toggle="collapse" data-parent="#accordion3" href="#collapseOne3">
                                                                    <img src="/static/images/news_02.png" alt="">
                                                                </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseOne3" class="panel-collapse collapse in">
                                                            <div class="panel-body">
                                                                <a href="#">新京报：上尚新商业集团  “中查模式”让藏乡变了样</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div><!--jumbotron-->

                                <!--news_tab-->
                                <div class="news_tab">
                                    <div class="row">
                                        <div class="col-sm-6 col-md-8">
                                            <div class="tab_content">
                                                <a href="#" class="news_title">上尚新商业集团 集团组织开展“旗帜领航·美好生活在上尚新商业集团 ”2018年春节系列活动</a>
                                                <p class="news_author">发布者：外联部 &nbsp&nbsp&nbsp<storp class="news_time">时间：2018.02.23</storp></p>

                                                <p class="news_content">
                                                    春节期间，上尚新商业集团 集团整合区域资源，上下联动开展“旗帜领航·美好生活在上尚新商业集团 ”主题2018年春节系列活动，为上尚新商业集团 业主送去新春的祝福，建设美好生活社区。
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-4">
                                            <img src="/static/images/sswh-ban2.jpg" alt="">
                                        </div>
                                    </div>
                                </div>

                                <!--end news_tag-->

                            </div><!--media-->
                            <!--pager-->
                            <!--<div class="row">
                                <div class="col-sm-6 col-md-12" style="text-align: center; margin: 20px 0 0 0;">
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
                            <!--end pager-->
                        </div><!--tab-content-->
                    </div><!--col-sm-6 col-md-12-->


                    </div><!--row-->
                </div>
            <div class="col-sm-6 col-md-2"></div>
        </div><!--row1 内容-->
        <!--end myTab-->

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
        name: "News",
        data() {
            return {}
            /*return*/
        },/*data()*/
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
        margin: 10px auto 0;
        background: linear-gradient(
                rgba(0, 0, 0, 0.2),
                rgba(0, 0, 0, 0.2)
        ), url('../../static/images/new_ban.jpg') no-repeat fixed;
        width: 100%;
        height: 614px;
        -o-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;

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

    /*News*/
    .news {
        width: 100%;
        height: 100%;
    }
    .news h1 {
        color: #4e565d;
    }
    .news .alias {
        margin: 20px 0;
        font-family: Arial;
        font-size: 18px;
        color: #4e565d;
        text-transform: Capitalize; /*首字母大写*/
    }
    /*end News*/

    /*myTab*/
    .tab{
        width: 100%;
        height: 100%;
    }
    .tab .nav-tabs{
        border-bottom: 1px solid #b2b2b2;
    }
    .tab .nav-tabs>li>a{
        border: none;
        margin: 10px 0 10px 0;
        width: 100%;
        height: 100%;
        font-size: 16px;
    }
    .tab .nav-tabs>li>a:hover{
        background-color: #4187ab;
    }
    .tab img{
        width: 45px;
        height: 40px;
    }
    .tab .nav-tabs>li.active>a{
        color: black;
        background-color: #4187ab;
    }
    .tab-content{
        margin: 20px 0 0 0;
    }
    /*end myTab*/

    /*footer*/
    .footer {
        font-family: 方正兰亭黑简体;
        margin: 40px auto 0;
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
        /*text-indent: 8em;*/
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



    /*用min-width时，小的放上面*/
    @media screen and (min-width: 768px) {
        .navbar-fixed-top .navbar-toggle img {
            width: 40px;
            height: 40px;
            margin-right: 60px;
        }
    }
    @media screen and (min-width: 992px){
        /*jumbotron*/
        .jumbotron{
            margin: 50px auto 0;
            width: 100%;
            height: 100%;
        }
        .jumbotron img{
            margin: 20px 0 10px 20px;
            width: 400px;
            height: 300px;
            background-color: #000;
        }
        .news_title a{
            text-decoration: none;
        }
        .news_title{
            letter-spacing: 0.05em;/*字体间距*/
            line-height: 24px;
            margin:30px auto 0;
            font-size:18px;
            font-weight: bolder;
            /*字段省略号*/
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            /*字段省略号*/
        }
        .news_time{
            margin: 10px auto 0;
            color: #000;
            font-weight: bold;
            font-size: 16px;
        }
        .news_author{
            margin: 10px auto 0;
            color: #000;
            font-size: 16px;
        }
        .news_content{
            margin: 10px 0 10px 0;
            font-size: 16px;
            color: #4e565d;
            line-height: 30px;
        }
        /*end jumbotron*/
        .panel-default{
            width: 100%;
            height: 200px;
            background-color: transparent;
            border: none;
        }
        .panel-default>.panel-heading {
            background-color: transparent;
            border-color: #ddd;

        }
        /*accordion*/
        #accordion{
            margin: 20px 0 0 50px;
        }
        #accordion img{
            width: 100%;
            height: 200px;
        }

        #accordion2{
            margin: 20px 0 0 50px;
        }
        #accordion2 img{
            width: 100%;
            height: 200px;
        }

        #accordion3{
            margin: 20px 0 0 50px;
        }
        #accordion3 img{
            width: 100%;
            height: 200px;
        }

        .panel-body{
            text-align: center;
            font-size: 14px;
            width: 100%;
            margin: 10px 0 0 20px;

        }
        /*end accordion*/
        /*news_tab*/
        .news_tab{
            margin: 20px auto 0;
            border-bottom: 1px dashed #b2b2b2;
            width: 100%;
            height: 100%;
        }
        .news_tab .tab_content {
            margin: 20px auto 0;
            line-height: 2em;
        }
        .news_tab img{
            width: 100%;
            height: 280px;
            margin: 10px 0 20px 0;
        }
        .news_tab a{
            color: #000;
            text-decoration: none;
        }
        .news_tab a:hover{
            color: #e94620;
        }
        .news_tab:hover{
            background-color: #e2f2fb;
        }
        /*end news_tab*/
    }
    @media screen and (min-width: 1200px){
        /*jumbotron*/
        .jumbotron{
            margin: 50px auto 0;
            width: 100%;
            height: 100%;
        }
        .jumbotron img{
            margin: 20px 0 10px 20px;
            width: 350px;
            height: 300px;
            background-color: #000;
        }
        .news_title a{
            text-decoration: none;
        }
        .news_title{
            letter-spacing: 0.05em;/*字体间距*/
            line-height: 24px;
            margin:30px auto 0;
            font-size:18px;
            font-weight: bolder;
            /*字段省略号*/
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            /*字段省略号*/
        }
        .news_time{
            margin: 10px auto 0;
            color: #000;
            font-weight: bold;
            font-size: 16px;
        }
        .news_author{
            margin: 10px auto 0;
            color: #000;
            font-size: 16px;
        }
        .news_content{
            margin: 10px 0 10px 0;
            font-size: 16px;
            color: #4e565d;
            line-height: 30px;
        }
        /*end jumbotron*/
        .panel-default{
            width: 100%;
            height: 200px;
            background-color: transparent;
            border: none;
        }
        .panel-default>.panel-heading {
            background-color: transparent;
            border-color: #ddd;

        }
        /*accordion*/
        #accordion{
            margin: 20px 0 0 50px;
        }
        #accordion img{
            width: 85%;
            height: 200px;
        }

        #accordion2{
            margin: 20px 0 0 50px;
        }
        #accordion2 img{
            width: 85%;
            height: 200px;
        }

        #accordion3{
            margin: 20px 0 0 50px;
        }
        #accordion3 img{
            width: 85%;
            height: 200px;
        }


        .panel-body{
            text-align: center;
            font-size: 14px;
            width: 80%;
            margin: 10px 0 0 25px;

        }
        /*end accordion*/

        /*news_tab*/
        .news_tab{
            margin: 20px auto 0;
            border-bottom: 1px dashed #b2b2b2;
            width: 100%;
            height: 100%;
        }
        .news_tab .tab_content {
            margin: 20px auto 0;
            line-height: 2em;
        }
        .news_tab img{
            width: 100%;
            height: 280px;
            margin: 10px 0 20px 0;
        }
        .news_tab a{
            color: #000;
            text-decoration: none;
        }
        .news_tab a:hover{
            color: #e94620;
        }
        .news_tab:hover{
            background-color: #e2f2fb;
        }
        /*end news_tab*/
    }

    /*用max-width那么就是大的在上面*/

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
        .jumbotron img{
            margin: 0;
            max-width: 330px;
            max-height: 300px;

        }
        .news_title{
            letter-spacing: 0.05em;/*字体间距*/
            line-height: 24px;
            text-align: center;
            font-size:18px;
            font-weight: bolder;
            /*字段省略号*/
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            /*字段省略号*/
        }

        #accordion{
            margin: 20px 0 0 20px;
        }
        #accordion img{
            width: 100%;
            height: 200px;
        }

        #accordion2{
            margin: 20px 0 0 20px;
        }
        #accordion2 img{
            width: 100%;
            height: 200px;
        }

        #accordion3{
            margin: 20px 0 0 20px;
        }
        #accordion3 img{
            width: 100%;
            height: 200px;
        }

        .news_tab{
            margin: 20px auto;
            border-bottom: 1px dashed #b2b2b2;
            width: 100%;
            height: 100%;

        }
        .news_tab .tab_content {
            margin: 20px auto;
            line-height: 2em;

        }
        .news_tab img{
            width: 100%;
            height: 280px;
            margin: 10px 0 20px 0;
        }
        .news_tab a{
            color: #000;
            text-decoration: none;
            font-size: 16px;
        }
        .news_tab a:hover{
            color: #e94620;
        }
        .news_tab:hover{
            background-color: #e2f2fb;
        }

    }
    @media screen and (max-width: 768px) {

        .banner {
            /* text-align: center;*/
            margin: 10px auto 0;
            background: linear-gradient(
                    rgba(0, 0, 0, 0.2),
                    rgba(0, 0, 0, 0.2)
            ), url('../../static/images/new_ban.jpg') no-repeat fixed;
            width: 100%;
            height:414px;
            -o-background-size: cover;
            -moz-background-size: cover;
            background-size: cover;

        }

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
        .news h1{
            font-size: 18px;
        }
        .news alias{
            font-size: 16px;
        }

        /*myTab*/
        .tab{
            width: 100%;
            height: 100%;
        }
        .tab .nav-tabs{
            border-bottom: 1px solid #b2b2b2;
        }
        .tab .nav-tabs>li>a{
            border: none;
            margin: 10px 0 10px 0;
            width: 100%;
            height: 100%;
            font-size: 14px;
        }
        .tab .nav-tabs>li>a:hover{
            background-color: #4187ab;
        }
        .tab img{
            width: 20px;
            height: 20px;
        }
        .tab .nav-tabs>li.active>a{
            color: black;
            background-color: #4187ab;
        }
        .tab-content{
            margin: 20px 0 0 0;
        }
        /*end myTab*/

        /*jumbotron*/
        .jumbotron{
            margin: 20px auto 0;
            width: 100%;
            height: 100%;
        }
        .jumbotron img{
            margin: 20px 25px;
            width: 100%;
            height: 100%;
            background-color: #000;
        }
        .news_title{
            /*字段省略号*/
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            /*字段省略号*/
        }
        .news_title a{
            letter-spacing: 0.05em;/*字体间距*/
            line-height: 24px;
            margin:30px 0;
            font-size:16px;
            font-weight: bolder;
            color: #000;
            text-decoration: none;
        }
        .news_time{
            margin: 10px auto 0;
            color: #000;
            font-weight: bold;
            font-size: 14px;
        }
        .news_author{
            margin: 10px auto 0;
            color: #000;
            font-size: 14px;
        }
        .news_content{
            margin: 10px 0 10px 0;
            font-size: 14px;
            color: #4e565d;
            line-height: 30px;
        }
        /*end jumbotron*/
        .panel-default{
            width: 100%;
            height: 100%;
            background-color: transparent;
            border: none;
            margin-bottom: 20px;
        }
        .panel-default>.panel-heading {
            background-color: transparent;
            border-color: #ddd;

        }

        /*accordion*/
        #accordion{
            margin: 20px 0;
        }
        #accordion img{
            width: 100%;
            height: 180px;
        }

        #accordion2{
            margin: 20px 0;
        }
        #accordion2 img{
            width: 100%;
            height: 180px;
        }

        #accordion3{
            margin: 20px 0;
        }
        #accordion3 img{
            width: 100%;
            height: 180px;
        }
        .panel-body{
            text-align: center;
            font-size: 14px;
            width: 100%;
            margin: 10px 0;

        }
        /*end accordion*/

        /*news_tab*/
        .news_tab{
            margin: 10px auto 0;
            border-bottom: 1px dashed #b2b2b2;
            width: 100%;
            height: 100%;

        }
        .news_tab .news_title {
            color: #000;
            font-size: 16px;
            font-weight: bold;
            width:100%;
            word-break:break-all;
            display:-webkit-box;
            -webkit-line-clamp:1;
            -webkit-box-orient:vertical;
            overflow:hidden;

        }

        .news_tab .tab_content {
            margin: 20px auto 0;
            line-height: 2em;
        }
        .news_tab img{
            width: 100%;
            height: 200px;
            margin: 10px 0 20px 0;
        }
        .news_tab  a:hover{
            color: #e94620;
            text-decoration: none;
        }
        .news_tab:hover{
            background-color: #e2f2fb;
        }
        /*end news_tab*/
    }





</style>