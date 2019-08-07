<template>
    <div>
        <!--nav-->
        <nav class="navbar navbar-fixed-top my-navbar" role="navigation">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse"
                        data-target="#example-navbar-collapse">
                    <sapn><img src="static/images/logo/logo.png" alt=""></sapn>
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
                        <router-link class="active" to="/Contact">联系我们</router-link>
                    </div>
                    <div class="col-sm-6 col-md-2"></div>

                </div>
            </div>
        </div>
        <!--end bq-->

        <!--contact-->
        <div class="contact">
            <div class="row">
                <div class="col-sm-6 col-md-2"></div>
                <div class="col-sm-6 col-md-8">
                    <h1>联系我们</h1>
                    <p class="alias">contact us</p>
                </div>
                <div class="col-sm-6 col-md-2"></div>
            </div>
        </div>
        <!--end contact-->

        <!--地图与联系-->
        <div class="map">

            <div class="row">
                <div class="col-sm-6 col-md-2"></div>
                <div class="col-sm-6 col-md-5">
                    <!--amap-->
                    <div class="amap-page-container">
                        <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">

                            <el-amap-circle-marker v-for="marker in markers" :center="marker.center"
                                                   :radius="marker.radius" :fill-color="marker.fillColor"
                                                   :fill-opacity="marker.fillOpacity" :events="marker.events">
                            </el-amap-circle-marker>

                            <el-amap-info-window
                                    :position="currentWindow.position"
                                    :content="currentWindow.content"
                                    :visible="currentWindow.visible"
                                    :events="currentWindow.events">
                            </el-amap-info-window>


                        </el-amap>
                    </div>
                    <!--end amap-->
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="post-format-content">
                        <div class="post-thumbnail">
                            <img src="/static/images/tel.png">
                        </div>
                        <div class="content-wrap">
                            <h1 class="entry-title">
                                <p class="featured-image" rel="bookmark">
                                    服务热线：0571-6211-0999
                                </p>
                            </h1>
                        </div>
                    </div>
                    <div class="post-format-content">
                        <div class="post-thumbnail">
                            <img src="/static/images/e-mail.png">
                        </div>
                        <div class="content-wrap">
                            <h1 class="entry-title">
                                <p class="featured-image" rel="bookmark">E-mail：tang513184923outlook.com</p>
                            </h1>
                        </div>
                    </div>
                    <div class="post-format-content">
                        <div class="post-thumbnail">
                            <img src="/static/images/brand.png">
                        </div>
                        <div class="content-wrap">
                            <h1 class="entry-title">
                                <p class="featured-image" rel="bookmark">品牌中心：杭州市余杭区海智中心3号楼</p>
                            </h1>
                        </div>
                    </div>
                    <div class="post-format-content">
                        <div class="post-thumbnail">
                            <img src="/static/images/media.png">
                        </div>
                        <div class="content-wrap">
                            <h1 class="entry-title">
                                <p class="featured-image" rel="bookmark">尊敬的媒体朋友，欢迎留言洽谈！<br/><br/>媒体联系：0571-6211-0999
                                </p>
                            </h1>

                        </div>
                    </div>

                </div>

                <div class="col-sm-6 col-md-2"></div>
            </div>

        </div>
        <!--end 地图与联系-->

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
        name: "Contact",
        props: {
            toBottom: {
                type: Number,
                default: 0
            }
        },

        data() {
            return {
                zoom: 18,
                center: [120.012801, 30.286514],
                markers: [
                    {
                        center: [120.012801, 30.286514],
                        radius: 15,
                        fillOpacity: 0.5,
                    }
                ],
                windows: [
                    {
                        position: [120.012801, 30.286514],
                        content: '杭州上尚新商业集团',
                        visible: true,
                        events: {
                            close() {
                                console.log('close infowindow1');
                            }
                        }
                    }, {
                        position: [120.012801, 30.286514],
                        content: 'Hi! I am here too!',
                        visible: true,
                        events: {
                            close() {
                                console.log('close infowindow2');
                            }
                        }
                    }
                ],
                slotWindow: {
                    position: [121.5163285, 31.21515044]
                },
                currentWindow: {
                    position: [0, 0],
                    content: '',
                    events: {},
                    visible: false
                }
            }
        },
        mounted() {
            this.currentWindow = this.windows[0];

            /*go_top*/
            document.querySelector('.scrollTop').style.bottom = this.toBottom;
            $(".scrollTop").scrollToTop(1000);
            /*end go_top*/

        },
        methods: {
            switchWindow(tab) {
                this.currentWindow.visible = false;
                this.$nextTick(() => {
                    this.currentWindow = this.windows[tab];
                    this.currentWindow.visible = true;
                });


            },
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
        ), url('../../static/images/contact1.jpg') no-repeat fixed;
        width: 100%;
        height: 814px;
      /*  -o-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;*/

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

    /*contact*/
    .contact {
        width: 100%;
        height: 100%;
    }

    .contact h1 {
        color: #4e565d;
    }

    .contact .alias {
        margin: 20px 0;
        font-family: Arial;
        font-size: 18px;
        color: #4e565d;
        text-transform: Capitalize; /*首字母大写*/
    }

    /*end contact*/

    /*map*/
    .map img {
        width: 100%;
        height: 100%;

    }

    .post-format-content {
        position: relative;
        background: #111;
    }

    .post-thumbnail {
        max-width: 100%;
        height: auto;
        overflow: hidden;
        margin-top: 10px;
    }

    .content-wrap {
        position: absolute;
        text-align: center;
        width: 100%;
        top: 0;
        bottom: 0;
        display: table-cell;
        vertical-align: middle;
        overflow: hidden;
    }

    .content-wrap h1.entry-title {
        display: table;
        font-size: 110%;
        height: 100%;
        width: 100%;
        margin: 0;
    }

    .edit-link {
        z-index: 2;
    }

    .featured-image {
        display: table-cell;
        position: relative;
        transition: opacity .25s ease-in-out, background .25s ease-in-out;
        -moz-transition: opacity .25s ease-in-out, background .25s ease-in-out;
        -webkit-transition: opacity .25s ease-in-out, background .25s ease-in-out;
        vertical-align: middle;
        z-index: 1;
        color: #fff;
        text-decoration: none;
        opacity: 0;
        padding: 10%;
    }

    .featured-image:hover {
        opacity: 0.9;
        color: #fff;
        background: rgba(0, 0, 0, 0.8);
    }

    .post-thumbnail img {
        display: block;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    .amap-page-container {
        margin: 10px 10px 0 0;
        height: 754px;
    }


    /*end map*/

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

    /*用max-width时，小的放下面*/
    @media (max-width: 1500px) {
        .amap-page-container {
            margin: 10px 10px 0 0;
            height: 570px;
        }

        .footer img {
            margin: 20px 0 0 300px;
        }
        .footer .tel-content {
            line-height: 300%;
            color: #fff;
            margin: -130px 0 0 350px;
        }


    }
    @media (max-width: 1300px) {
        .amap-page-container {
            margin: 10px 10px 0 0;
            height: 510px;
        }
    }
    @media (max-width: 768px) {
        /*banner*/
        .banner {
            /* text-align: center;*/
            margin: 0 auto;
            background: linear-gradient(
                    rgba(0, 0, 0, 0.2),
                    rgba(0, 0, 0, 0.2)
            ), url('../../static/images/contact1.jpg') no-repeat fixed;
            width: 100%;
            height: 414px;
            -o-background-size: cover;
            -moz-background-size: cover;
            background-size: cover;

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
        .recruit {
            text-align: center;
        }

        .recruit p {
            line-height: 2.3em;
            font-size: 14px;

        }

        .recruit h2 {
            margin-bottom: 10px;
        }

        .recruit p a {
            text-decoration: none;
            color: #000;
        }

        .recruit p img {
            width: 18px;
            height: 25px;
        }

        .nav-justified > li > a {
            color: #000;
            font-size: 16px;
            line-height: 1.3em;
        }
    }


</style>