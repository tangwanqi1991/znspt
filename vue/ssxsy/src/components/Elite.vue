<template>
    <div>
        <!--nav-->
        <nav class="navbar navbar-fixed-top my-navbar" role="navigation">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse"
                        data-target="#example-navbar-collapse">
                    <sapn><img src="static/images/logo.png" alt=""></sapn>
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
                    <li><img src="static/images/logo.png" alt=""></li>
                    <li> <router-link to="/Recruit">人才发展</router-link></li>
                    <li><router-link to="/Project">项目欣赏</router-link></li>
                    <li><router-link to="/Contact">联系我们</router-link></li>
                </ul>
            </div></nav>
        <!--end nav-->

        <!--banner-->
        <div class="banner">
            <div class="row">
                <div class="col-sm-6 col-md-12"></div>
            </div></div>
        <!--end banner-->

        <!--bq-->
        <div class="bq">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6 col-md-2"></div>
                    <div class="col-sm-6 col-md-8">
                        <router-link to="/">首页</router-link> >
                        <router-link to="/Expansion">职业发展与培训</router-link> >
                        <router-link class="active" to="/Expansion">精英团队</router-link>
                    </div>
                    <div class="col-sm-6 col-md-2"></div>

                </div>
            </div>
        </div>
        <!--end bq-->

        <!--jytd-->
        <div class="jytd">
            <div class="container-fluid" style="text-align: center">
                <div class="row">
                    <div class="col-sm-6 col-sm-2"></div>
                    <div class="col-sm-6 col-md-8">
                        <!-- swiper1 -->
                        <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
                            <swiper-slide class="slide-1">
                                <div class="img-group">
                                    <div class="row">
                                        <div class="col-sm-6 col-md-4"></div>
                                        <div class="col-sm-6 col-md-4">
                                            <div class="name">张路</div>
                                        </div>
                                        <div class="col-sm-6 col-md-4">
                                            <div class="introduce">
                                                一贯给人以平易近人，耐心沟通，娉婷婉约的印象，落落大方中待人接物，总以不骄不躁的心态迎接并着每一天的生活与工作。
                                                曾经，多年行政，文员的工作阅历，沉淀下专业的修为与素养，常年前台纷繁琐碎的工作，练就了有条不紊，尽然有序的处事功力，
                                                看似娇弱的身躯却扛下诸多不为人知的繁琐之事， 兢兢业业不曾懈怠；每日以极具亲和力的风格协调于各部门之间，给予全力的配
                                                合和支持，始终以最为饱满的热情坚守着自己的岗位阵营。
                                            </div>
                                        </div>
                                    </div>
                                    <img src="/static/images/jytd/zl.jpg" alt="">
                                </div>
                            </swiper-slide>
                            <swiper-slide class="slide-2">
                                <div class="img-group">
                                    <div class="row">
                                        <div class="col-sm-6 col-md-4"></div>
                                        <div class="col-sm-6 col-md-4">
                                            <div class="name">李佳</div>
                                        </div>
                                        <div class="col-sm-6 col-md-4">
                                            <div class="introduce">
                                                80后的她亦如同龄人一样，自踏入社会后编织着属于自己的梦想，以女性固有的责任心经营着幸福的家庭和属于自己的人生旅途。
                                                而今已是两位孩子妈妈的她，更是泛滥着满满的母爱，于生活倾注着更多的爱心。
                                                曾经，艺术设计是其职业生涯的第一份工作；而随后的行业选择却让她与房产有了第一次的亲密接触，从此开启了她房产置业的
                                                职业生涯之路；所谓“隔行如隔山”，一切从零开始的她，迎难而上，在不断在实践中积蓄专业的素养武装自己，
                                                充实着自身专业技能，时至今日近5个年头摸爬滚打，已然成为行业里的佼佼者，更是公司“营销天团”中一员实力干将。
                                            </div>
                                        </div>
                                    </div>
                                    <img src="/static/images/jytd/lj.jpg" alt="">
                                </div>
                            </swiper-slide>
                            <swiper-slide class="slide-3">
                                <div class="img-group">
                                    <div class="row">
                                        <div class="col-sm-6 col-md-4"></div>
                                        <div class="col-sm-6 col-md-4">
                                            <div class="name">赵佳依</div>
                                        </div>
                                        <div class="col-sm-6 col-md-4">
                                            <div class="introduce">
                                                默默无闻，却有着一颗强大的心和恪尽职守的心，终日与数字打交道，虽有乏味之意，但终究尽职尽责，
                                                这不仅是对于工作上， 生活上也已是众人皆知的贤妻型。对于工作更是如此,丁是丁卯是卯，绝
                                                不会徇私舞弊，在对审核上更是一丝不苟，据 实执行，不曾有所懈怠和舞弊，总以最为积极的心态和处
                                                事之风执行好交于手上的工作，兢兢业业务实的完成着每一项公司 所授予的职责和工作，尽其应有的职
                                                业操守。
                                            </div>
                                        </div>
                                    </div>
                                    <img src="/static/images/jytd/zjy.jpg" alt="">
                                </div>
                            </swiper-slide>
                            <swiper-slide class="slide-4">
                                <div class="img-group">
                                    <div class="row">
                                        <div class="col-sm-6 col-md-4"></div>
                                        <div class="col-sm-6 col-md-4">
                                            <div class="name">李佳</div>
                                        </div>
                                        <div class="col-sm-6 col-md-4">
                                            <div class="introduce">
                                                80后的她亦如同龄人一样，自踏入社会后编织着属于自己的梦想，以女性固有的责任心经营着幸福的家庭和属于自己的人生旅途。
                                                而今已是两位孩子妈妈的她，更是泛滥着满满的母爱，于生活倾注着更多的爱心。
                                                曾经，艺术设计是其职业生涯的第一份工作；而随后的行业选择却让她与房产有了第一次的亲密接触，从此开启了她房产置业的
                                                职业生涯之路；所谓“隔行如隔山”，一切从零开始的她，迎难而上，在不断在实践中积蓄专业的素养武装自己，
                                                充实着自身专业技能，时至今日近5个年头摸爬滚打，已然成为行业里的佼佼者，更是公司“营销天团”中一员实力干将。
                                            </div>
                                        </div>
                                    </div>
                                    <img src="/static/images/jytd/lj.jpg" alt="">
                                </div>
                            </swiper-slide>
                            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                        </swiper>
                        <!-- swiper2 Thumbs -->
                        <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
                            <swiper-slide class="slide-1">
                                <img src="/static/images/jytd/zl.jpg" alt="">
                            </swiper-slide>
                            <swiper-slide class="slide-2">
                                <img src="/static/images/jytd/lj.jpg" alt="">
                            </swiper-slide>
                            <swiper-slide class="slide-3">
                                <img src="/static/images/jytd/zjy.jpg" alt="">
                            </swiper-slide>
                            <swiper-slide class="slide-4">
                                <img src="/static/images/jytd/zy.jpg" alt="">
                            </swiper-slide>
                        </swiper>
                    </div>
                    <div class="col-sm-6 col-sm-2"></div>


                </div>
            </div>
        </div>

        <!--end jytd-->

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
        name: "Elite",
        data() {
            return {
                swiperOptionTop: {
                    spaceBetween: 10,
                    loop: true,
                    loopedSlides: 5, //looped slides should be the same
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                swiperOptionThumbs: {
                    spaceBetween: 10,
                    slidesPerView: 4,
                    touchRatio: 0.2,
                    loop: true,
                    loopedSlides: 5, //looped slides should be the same
                    slideToClickedSlide: true,
                }

            }/*return*/
        },/*data*/
        mounted(){
            /*go_top*/
            document.querySelector('.scrollTop').style.bottom = this.toBottom;
            $(".scrollTop").scrollToTop(1000);
            /*end go_top*/
            this.$nextTick(() => {
                const swiperTop = this.$refs.swiperTop.swiper
                const swiperThumbs = this.$refs.swiperThumbs.swiper
                swiperTop.controller.control = swiperThumbs
                swiperThumbs.controller.control = swiperTop
            })

        },
        methods:{
            toTop() {
                document.documentElement.scrollTop = document.body.scrollTop = 0;
            }
        }
    }
</script>

<style scoped>
    /*<!--jytd-->*/
    .jytd{
        margin: 80px 0;
        width: 100%;
        height: 6100%;

    }
    .gallery-top {
        width: 100%;
        height: 700px!important;

    }
    .gallery-top img {
        width:100%;
        height: 750px!important;

    }
    .gallery-thumbs {
        height: 200px;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 0;
    }
    .gallery-thumbs img {
        width: 100%;
        height:200px;

    }
    .gallery-thumbs .swiper-slide {
        width: 20%;
        opacity: 0.4;
    }
    .gallery-thumbs .swiper-slide-active {
        opacity: 1;
    }

    .img-group .name{
        font-family: 方正姚体;
        position: absolute;
        width: 100%;
        text-align: right;
        color: #000;
        display: block;
        font-size: 25px;
        font-weight: bold;
        margin-top: 100px;
        line-height: 1.5;
        padding: 0 20px 0 10px;

    }
    .img-group .introduce{
        font-family: "思源黑体 CN Light";
        position: absolute;
        text-align: left;
        /*letter-spacing:3px;*/
        width: 80%;
        color: #000;
        display: block;
        font-size: 16px;
        margin-top: 100px;
        line-height: 1.5;
     /*   text-indent: 2em;*/




    }
    /*end jytd*/

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
                rgba(0, 0, 0, 0.2)
        ), url('../../static/images/joinus.jpg') no-repeat fixed;
        width: 100%;
        height: 814px;
        -o-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;

    }
    /*end baner*/



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
    /*bq*/
    .bq{
        margin: 20px auto 0;
        text-align: right;


    }
    .bq a{
        font-family: 幼圆;
        text-decoration: none;
        font-size: 16px;
        color: #337ab7;
    }
    .bq .active{
        color:#000;
    }
    /*end bq*/

</style>