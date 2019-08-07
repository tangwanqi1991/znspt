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
                    <li>
                        <router-link to="/Recruit">人才发展</router-link>
                    </li>
                    <li>
                        <router-link to="/Project">项目欣赏</router-link>
                    </li>
                    <li>
                        <router-link to="/Contact">联系我们</router-link>
                    </li>
                </ul>
            </div>

        </nav>
        <!--end nav-->

        <!--bjt -->
        <div class="bjt">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6 col-md-12">
                        <swiper :options="swiperOption">
                            <swiper-slide v-for="v in slides" :key="v.id">
                                <img :src="v.preview">
                            </swiper-slide>
                        </swiper>


                    </div>
                </div>
            </div>
        </div>
        <!--end bjt-->

        <!--bq-->
        <div class="bq">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6 col-md-2"></div>
                    <div class="col-sm-6 col-md-8">
                        <router-link to="/">首页</router-link>
                        >
                        <router-link to="/Group">走进上尚</router-link>
                        >
                        <router-link class="active" to="/Sswh">企业文化</router-link>
                    </div>
                    <div class="col-sm-6 col-md-2"></div>

                </div>
            </div>
        </div>
        <!--end bq-->

        <!--qywh-->
        <div class="qywh">
            <div class="row">
                <div class="col-sm-6 col-md-2"></div>
                <div class="col-sm-6 col-md-8">
                    <h1>企业文化</h1>
                    <p class="alias">Corporate Culture</p>
                    <div class="row" v-for="v in sswhnr" :key="v.id">
                        <div class="qywhbj">
                            <div class="col-sm-6 col-md-6">
                                <img :src="v.preview" alt="">
                            </div>
                            <div class="col-sm-6 col-md-6">
                                <div class="wzbj">
                                    <p class="bttb"><img src="/static/images/qywh_01.jpg" alt=""></p>
                                    <h3 class="title">{{v.title}}</h3>
                                    <p class="alias">{{v.alias}}</p>
                                    <div class="row">
                                        <div class="col-sm-6 col-md-12">
                                            <div class="t1">
                                                <small> {{v.subtitle }}</small>
                                                <p>{{v.description}}</p>
                                            </div>
                                        </div>
                                        <!--<div class="col-sm-6 col-md-6">
                                            <div class="t1-1">
                                                <small>核心价值观</small>
                                                <p>诚信 责任 创新 奉献</p>
                                            </div>
                                        </div>-->
                                    </div>
                                    <!--<div class="row">
                                        <div class="col-sm-6 col-md-6">
                                            <div class="t1">
                                                <small class="text-left"> 企业愿景</small>
                                                <p class="text-left">美丽鲁能 基业长青</p>
                                            </div>
                                        </div>

                                        <div class="col-sm-6 col-md-6">
                                            <div class="t1-1">
                                                <small class="text-left">企业精神</small>
                                                <p class="text-left">努力超越 追求卓越</p>
                                            </div>
                                        </div>

                                    </div>-->
                                </div>

                            </div>

                        </div>
                    </div><!--row1-->
                    <div class="row" v-for="v in sswhnrdbs" :key="v.id">
                        <div class="qywhbj">
                            <div class="col-sm-6 col-md-6">
                                <div class="wzbj">
                                    <p class="bttb"><img src="/static/images/qywh_04.jpg" alt=""></p>
                                    <h3 class="title">{{v.title}}</h3>
                                    <p class="alias">{{v.alias}}</p>
                                    <div class="row">
                                        <!-- <div class="col-sm-6 col-md-6">
                                             <div class="t1">
                                                 <small>客户观</small>
                                                 <p>全心全意为客户服务</p>
                                             </div>
                                         </div>-->
                                        <div class="col-sm-6 col-md-12">
                                            <div class="t1">
                                                <small>{{v.subtitle}}</small>
                                                <p>{{v.description}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!--<div class="row">
                                        <div class="col-sm-6 col-md-6">
                                            <div class="t2">
                                                <small>人才观</small>
                                                <p>赋能人才 同创共享</p>
                                            </div>
                                        </div>

                                        <div class="col-sm-6 col-md-6">
                                            <div class="t2-1">
                                                <small>大营销观</small>
                                                <p>人人都是营销主体</p>
                                            </div>
                                        </div>
                                    </div>-->
                                </div>

                            </div>
                            <div class="col-sm-6 col-md-6">
                                <img :src="v.path" alt="">
                            </div>
                        </div>

                    </div><!--row2-->
                    <!--   <div class="row">
                        <div class="qywhbj">
                            <div class="col-sm-6 col-md-6">
                                <img src="/static/images/qywh3.jpg" alt="">
                            </div>
                            <div class="col-sm-6 col-md-6">
                                <div class="wzbj">
                                    <p class="bttb"><img src="/static/images/qywh_03.jpg" alt=""></p>
                                    <h3 class="title">经营之道文化理念</h3>
                                    <p class="alias"> BUSINESS</p>

                                    <div class="row">
                                        <div class="col-sm-6 col-md-6">
                                            <div class="t2">
                                                <small> 经营理念</small>
                                                <p>效益第一 品牌至尚 以人为本 科学管理</p>
                                            </div>
                                        </div>

                                        <div class="col-sm-6 col-md-6">
                                            <div class="t2-1">
                                                <small>客户观</small>
                                                <p>全心全意为客户服务</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-sm-6 col-md-6">
                                            <div class="t2">
                                                <small>人才观</small>
                                                <p>赋能人才 同创共享</p>
                                            </div>
                                        </div>

                                        <div class="col-sm-6 col-md-6">
                                            <div class="t2-1">
                                                <small>大营销观</small>
                                                <p>人人都是营销主体处处代表鲁能形象事事创造品牌价值</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-sm-6 col-md-6">
                                            <div class="t2">
                                                <small>大安全观</small>
                                                <p>生产安全 廉政安全
                                                    形象安全 合作安全</p>
                                            </div>
                                        </div>

                                        <div class="col-sm-6 col-md-6">
                                            <div class="t2-1">
                                                <small>产品观</small>
                                                <p>构筑品质生活产业生态链</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>--><!--row3-->
                    <!--<div class="row">
                        <div class="qywhbj">

                            <div class="col-sm-6 col-md-6">
                                <div class="wzbj">
                                    <p class="bttb"><img src="/static/images/qywh_04.jpg" alt=""></p>
                                    <h3 class="title">行为之规文化理念</h3>
                                    <p class="alias">BEHAVIOR</p>

                                    <div class="row">
                                        <div class="col-sm-6 col-md-6">
                                            <div class="t1">
                                                <small>市场意识</small>
                                                <p>信以立企 物竞天择</p>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6">
                                            <div class="t1-1">
                                                <small>团队意识</small>
                                                <p>目标凝聚 协作共赢</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-sm-6 col-md-6">
                                            <div class="t1">
                                                <small>行动意识</small>
                                                <p>因必明 行必果</p>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6">
                                            <div class="t1-1">
                                                <small>沟通意识</small>
                                                <p>开放 包容 共享</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-sm-6 col-md-6">
                                            <div class="t1">
                                                <small>学习意识</small>
                                                <p>学习力就是竞争力</p>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6">

                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div class="col-sm-6 col-md-6">
                                <img src="/static/images/qywh4.jpg" alt="">
                            </div>
                        </div>

                    </div>--><!--row4-->


                </div>
                <div class="col-sm-6 col-md-2"></div>

            </div>
        </div>
        <!--end qywh-->

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
        name: "Sswh",
        data() {
            return {
                sswhnr: [],
                sswhnrdbs: [],
                slides: [
                    {
                        id: 1,
                        preview: 'static/images/sswh-ban4.jpg',
                    },
                    {
                        id: 2,
                        preview: 'static/images/sswh-ban5.jpg',
                    }
                ],
                swiperOption: {
                    spaceBetween: 30,
                    centeredSlides: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }

            }
        },
        mounted() {

            /*上尚文化内容*/
            this.axios.get('http://huifw.vip/api/sswhnr').then((response) => {
                this.sswhnr = response.data.data;
            });
            /*上尚文化内容DB*/
            this.axios.get('http://huifw.vip/api/sswhnrdbs').then((response) => {
                this.sswhnrdbs = response.data.data;
            });


            /*go_top*/
            document.querySelector('.scrollTop').style.bottom = this.toBottom;
            $(".scrollTop").scrollToTop(1000);
            /*end go_top*/
        },
        methods: {
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

    /* @media screen and (min-width: 768px) {
         .navbar-fixed-top .navbar-toggle img {
             width: 40px;
             height: 40px;
             margin-right: 60px;
         }
     }*/

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

    /*bjt*/

    .swiper-container .swiper-slide row {
        height: 100%;
        width: 100%;
    }

    .swiper-container .swiper-slide img {
        height: 800px;
        width: 100%;
        -o-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;
        cursor: default; /*光标指针*/
    }

    /*@media screen  and (max-width: 768px) {
        .swiper-container .swiper-slide img {
            height: 300px;
            width: 100%;
            -o-background-size: cover;
            -moz-background-size: cover;
            background-size: cover;
            cursor: default; !*光标指针*!
        }
    }*/

    /*end bjt*/

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

    /*qywh*/
    .qywh {
        width: 100%;
        height: 100%;
    }

    .qywh h1 {
        color: #4e565d;
    }

    .qywh .alias {
        margin: 20px 0;
        font-family: Arial;
        font-size: 18px;
        color: #4e565d;
        text-transform: Capitalize; /*首字母大写*/
    }

    .qywhbj {
        margin: 20px auto 0;
    }

    .qywhbj img {
        width: 100%;
        height: 504px;
    }

    @media screen and (min-width: 1200px) {
        .wzbj {
            background-color: #f1eff1;
            width: 100%;
            height: 504px;
        }

        .wzbj img {
            margin: 50px 0 0 80px;
            width: 73px;
            height: 73px;
        }

        .wzbj .title {
            margin: 20px 0 0 80px;
        }

        .wzbj .alias {
            margin: 10px 0 0 80px;
        }

        .t1 {
            margin: 20px 0 0 80px;
            font-size: 18px;
            word-break: break-all;
            width: 350px;
            line-height: 40px;
        }

        .t1-1 {
            margin: 20px 0 0 40px;
            font-size: 18px;
        }

        .t2 {
            margin: 20px 0 0 80px;
            font-size: 18px;
            width: 50%;
        }

        .t2-1 {
            margin: 20px 0 0 20px;
            font-size: 18px;
        }
    }

    @media screen and (max-width: 1500px) {
        .qywh {
            width: 100%;
            height: 100%;
        }

        .qywh h1 {
            color: #4e565d;
        }

        .qywh .alias {
            margin: 10px 0;
            font-family: Arial;
            font-size: 18px;
            color: #4e565d;
            text-transform: Capitalize; /*首字母大写*/
        }

        .qywhbj {
            margin: 20px auto 0;
        }

        .qywhbj img {
            width: 100%;
            height: 404px;
        }

        .wzbj {
            background-color: #f1eff1;
            width: 100%;
            height: 404px;
        }

        .wzbj img {
            margin: 30px 0 0 80px;
            width: 60px;
            height: 60px;
        }

        .wzbj .title {
            margin: 10px 0 0 80px;
        }

        .wzbj .alias {
            margin: 10px 0 0 80px;
        }

        .t1 {
            margin: 10px 0 0 80px;
            font-size: 14px;
        }

        .t1-1 {
            margin: 10px 0 0 40px;
            font-size: 14px;
        }

        .t2 {
            margin: 10px 0 0 80px;
            font-size: 14px;
            width: 50%;
        }

        .t2-1 {
            margin: 10px 0 0 20px;
            font-size: 14px;
        }
    }

    @media screen and (max-width: 1300px) {
        .qywh {
            width: 100%;
            height: 100%;
        }

        .qywh h1 {
            color: #4e565d;
        }

        .qywh .alias {
            margin: 10px 0;
            font-family: Arial;
            font-size: 18px;
            color: #4e565d;
            text-transform: Capitalize; /*首字母大写*/
        }

        .qywhbj {
            margin: 20px auto 0;
        }

        .qywhbj img {
            width: 100%;
            height: 450px;
        }

        .wzbj {
            background-color: #f1eff1;
            width: 100%;
            height: 450px;
        }

        .wzbj img {
            margin: 30px 0 0 80px;
            width: 60px;
            height: 60px;
        }

        .wzbj .title {
            margin: 10px 0 0 80px;
        }

        .wzbj .alias {
            margin: 10px 0 0 80px;
        }

        .t1 {
            margin: 10px 0 0 80px;
            font-size: 14px;
            word-break: break-all;
            width: 260px;
            line-height: 40px;
        }

        .t1-1 {
            margin: 10px 0 0 40px;
            font-size: 14px;
        }

        .t2 {
            margin: 10px 0 0 80px;
            font-size: 14px;
            width: 50%;
        }

        .t2-1 {
            margin: 10px 0 0 20px;
            font-size: 14px;
        }

    }

    @media screen and (max-width: 768px) {
        .swiper-container .swiper-slide img {
            height: 300px;
            width: 100%;
            -o-background-size: cover;
            -moz-background-size: cover;
            background-size: cover;
            cursor: default; /*光标指针*/
        }

        .navbar-fixed-top .navbar-toggle img {
            width: 40px;
            height: 40px;
            margin-right: 60px;
        }

        .qywhbj img {
            width: 100%;
            height: 304px;
        }

        .wzbj {
            background-color: #f1eff1;
            width: 100%;
            height: 100%;
        }

        .wzbj img {
            margin: 20px 0 0 40px;
            width: 60px;
            height: 60px;
        }

        .wzbj .title {
            margin: 20px 0 0 40px;
        }

        .wzbj .alias {
            margin: 0 0 0 40px;
        }

        .t1 {
            margin: 10px 0 0 40px;
            font-size: 16px;
        }

        .tt {
            margin: 5px 0;
            width: 100%;
        }

        .t2 {
            margin: 20px 0 0 40px;
            font-size: 18px;
            width: 50%;

        }

        .t2-1 {
            margin: 20px 0 0 40px;
            font-size: 16px;
        }

    }

    /*qywh*/

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

    @media screen and (max-width: 1500px) {
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
    }

    @media screen and (max-width: 768px) {
        .footer {
            margin: 30px auto 0;
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
        .t1 {
            margin: 10px 0 0 80px;
            font-size: 14px;
            word-break: break-all;
            width: 270px;
            line-height: 40px;
        }
    }

    /*end footer*/

</style>