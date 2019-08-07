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

        <!--碎片背景-->
        <!-- swiper -->
        <div class="container-fluid">
            <div class="subBan">
                <swiper :options="swiperOption">
                    <div class="parallax-bg" slot="parallax-bg" data-swiper-parallax="-23%"></div>
                    <swiper-slide>
                        <div class="title" data-swiper-parallax="-100">企业文化墙</div>
                        <br>
                        <div class="subtitle" data-swiper-parallax="-200">来自员工的心声</div>
                        <div class="text" data-swiper-parallax="-300">
                            <p>
                                商场如战场，品质打先锋。只有勇于承担责任，才能承担更大的责任。企业因创新而美好，工作因创新而精彩！
                            </p>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="title" data-swiper-parallax="-100">企业文化墙</div>
                        <div class="subtitle" data-swiper-parallax="-200">企业</div>
                        <div class="text" data-swiper-parallax="-300">
                            <p>
                                求生存，敬业爱岗与公司共命运；谋发展，开拓进取创企业新局面，求生存敬业爱岗与公司共命运；谋发展开拓进取创企业新局面。
                            </p>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="title" data-swiper-parallax="-100">企业文化墙</div>
                        <div class="subtitle" data-swiper-parallax="-200">来自企业的心声</div>
                        <div class="text" data-swiper-parallax="-300">
                            <p>
                                和传统的昨天告别，向规范的未来迈进，科技是第一生产力，人才是第一资源！
                            </p>
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>

                </swiper>
            </div>
        </div>
        <!--end 碎片背景-->

        <!--msTab-->
        <div class="msTab">
            <div class="row">
                <div class="col-sm-6 col-md-12">
                    <ul id="myTab" class="nav nav-tabs">
                        <li class="active"  v-for="v in navtitle" :key="v.id">
                            <router-link :to="v.url" data-toggle="tab">{{ v.navtitle }}</router-link>
                        </li>
                        <li><a href="#ios" data-toggle="tab">团队介绍</a></li>
                        <li><router-link to="/Sswh">企业文化 </router-link></li>
                    </ul>
                    <div class="row">
                        <div class="col-sm-6 col-md-8">
                            <div id="myTabContent" class="tab-content">
                                <div class="tab-pane fade in active" id="home">
                                    <div class="container">
                                        <div class="jumbotron" v-for="v in navtitle" :key="v.id">
                                            <div class="aa" v-for="v in jts" :key="v.id">
                                                <h1 style="text-transform:capitalize;">{{v.found}}</h1>
                                                <h3>{{v.title}}</h3>
                                                <p class="alias">{{v.alias}}</p>
                                                <p class="lead">{{v.description}}</p>
                                            </div>
                                            <p><img :src="v.inset" alt="" style="width: 100%; height: 100%;"></p>
                                            <div id="btn" type="button" class="btn btn-primary" data-toggle="collapse"
                                                 data-target="#demo">
                                                了解更多...
                                            </div>

                                            <div id="demo" class="panel-collapse collapse">
                                                <p class="lead" v-html="v.content"></p><!--v-html(提取字符串，去掉html)-->
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="ios">
                                    <div class="container">
                                        <div class="jumbotron">
                                            <div class="media"  v-for="v in team" :key="v.id">
                                                <a class="media-left" href="#">
                                                    <img class="media-object" :src="v.preview" alt="媒体对象">
                                                </a>
                                                <div class="media-body">
                                                    <h4 class="media-heading">{{v.name}}</h4>
                                                    <p class="media-position">{{v.position}}</p>
                                                    <p class="introduce">
                                                        {{v.introduction}}
                                                    </p>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="tplj">
                                <a href="#"><img src="/static/images/xnyqc/ss.jpg" class="img-rounded" style="width:100%;height:309px;margin: 0 0 10px 0;"></a>
                                <a href="#"><img src="/static/images/xnyqc/xnyqc.png" class="img-rounded"
                                                 style="width:100%;height:309px;margin: 0 0 10px 0;"></a>
                                <a href="#"><img src="/static/images/xnyqc/rl.jpg" class="img-rounded" style="width:100%;height:309px;margin: 0 0 10px 0;"></a>

                            </div>
                        </div>
                        <div class="col-sm-6 col-md-1"></div>

                    </div>

                </div>
            </div>

        </div>
        <!--end msTab-->

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
        name: "Group",
        data() {
            return {
                navtitle: [],
                jts: [],
                team: [],
                swiperOption: {
                    speed: 600,
                    parallax: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                },


            }
            /* return*/

        },
        mounted(){

            /*集团标题*/
            this.axios.get('http://huifw.vip/api/navtitle').then((response) => {
                this.navtitle = response.data.data;
            });

            /*集团介绍内容*/

            this.axios.get('http://huifw.vip/api/jts').then((response) => {
                this.jts = response.data.data;
            });

            /*团队介绍*/
            this.axios.get('http://huifw.vip/api/team').then((response) => {
                this.team = response.data.data;
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

    .subBan {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        font-size: 18px;
        color: #000;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 40px 60px;
        background-color: transparent !important;
        justify-content: space-around !important;
    }

    .parallax-bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 130%;
        height: 100%;
        -webkit-background-size: cover;
        background-size: cover;
        background-position: center;
        background-image: url(/static/images/qjt.jpg);
    }

    .swiper-slide .title {
        margin: 300px 0 100px 0;
        font-size: 41px;
        font-weight: 300;
    }

    .swiper-slide .subtitle {
        margin: -50px 0 20px 0;
        font-size: 21px;

    }

    .swiper-slide .text {
        font-size: 14px;
        max-width: 400px;
        line-height: 1.3;
    }

    /*mousewheel*/
    .mousewheel {
        text-align: center;
        background-color: #fff;
        width: 100%;
        height: 64px;
        border-bottom: solid 1px #f4f4f4;

    }

    .mousewheel .active {
        width: 20%;
        height: 64px;
        background-color: #f4f4f4;
    }

    .mousewheel .active img {
        width: 40px;
        height: 40px;
        margin: 10px auto 0;
    }

    .mousewheel .gyss {
        width: 100%;
        margin: -40px 0;

    }

    .mousewheel .gyss a {
        display: inline;
        margin: 0 10px 0 10px;
        font-size: 16px;
        text-decoration: none;
        color: #848181;

    }

    .mousewheel .gyss span {
        font-size: 14px;
        color: #0e98a5;

    }



    /*end mousewheel*/

    /*msTab*/
    .msTab {
        margin: 20px 0;
    }
    #myTab {
        background-color: #fff;
    }

    #myTab li a {
        left:50%;
        font-size: 16px;
        /*word-spacing: 2px;
        letter-spacing: 2px;*/
    }

    .nav-tabs {
        border-bottom: 1px solid #b2b2b2;
    }

    .nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover {
        color: #000;
        background-color: transparent;
        border-bottom-color: transparent;
        border: none;
    }
    .jumbotron {
            width:100%;
            height: 100%;
            background-color: #fff;
            border: solid 1px #b2b2b2;
            border-top-color: transparent;
            border-left-color: transparent;
            border-bottom-color: transparent;

        }
    .jumbotron h1 {
        opacity: 0.1;
        margin: 10px 0 5px 0;
        letter-spacing: 2px

    }
    .jumbotron h3 {
        margin: 10px 0 5px 0;
        color: #000;
        font-weight: bold;
        font-family: 方正兰亭超细黑简体;
        letter-spacing: 2px
    }
    .jumbotron .lead {
        font-size: 16px;
        line-height: 40px;
        letter-spacing: 2px
    }
    .jumbotron button {
        font-size: 16px;
    }
    .jumbotron #demo {
        font-size: 16px;
        line-height: 40px;
        letter-spacing: 2px
    }
    .tplj {
        width: 100%;
        height: 100%;
        margin: 20px 0 0 0;
    }

    /*end msTab*/
    .media{
        margin: 20px 0;
        background-color: #f1eff1;
        width: 100%;
        height: 100%;

    }
    .media-object{
        margin: 10px 10px 0 10px;
        width: 180px;
        height: 180px;
        cursor:default;/*默认光标*/
    }
    .media-body{
        width: 100%;
        height: 100%;

    }
    .media-heading{
        margin: 18px 0;
        font-size: 16px;
        font-weight: bolder;

    }
    .media-position{
        font-size: 14px;
        font-weight: bold;

    }
    .introduce{
        font-size: 14px;
        line-height: 20px;
        color: #000;
        text-indent: 2em;/*//缩进*/
        letter-spacing: 2px;/*//间距*/
        line-height: 30px;/*//行高*/
    }

    /*media*/

    /*end media*/

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

    @media screen and (max-width: 1500px){
        .jumbotron {
            width:75%;
            height: 100%;
            background-color: #fff;
            border: solid 1px #b2b2b2;
            border-top-color: transparent;
            border-left-color: transparent;
            border-bottom-color: transparent;

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
    @media screen and (max-width: 1300px) {
        .footer img {
            margin: 20px 0 0 300px;
        }
        .footer .tel-content {
            line-height: 300%;
            color: #fff;
            margin: -130px 0 0 350px;
        }
        .jumbotron {
            width: 70%;
            height: 100%;
            background-color: #fff;
            border: solid 1px #b2b2b2;
            border-top-color: transparent;
            border-left-color: transparent;
            border-bottom-color: transparent;

        }
        .introduce{
            font-size: 14px;
            line-height: 20px;
            color: #000;
            text-indent: 2em;/*//缩进*/
            letter-spacing: 2px;/*//间距*/
            line-height: 30px;/*//行高*/
        }

    }
    @media screen and (max-width: 768px) {
        .navbar-fixed-top .navbar-toggle img {
            width: 40px;
            height: 40px;
            margin-right: 60px;
        }

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



        .jumbotron {
            width: 100%;
            background-color: #fff;
            border: solid 1px #b2b2b2;
            border-top-color: transparent;
            border-left-color: transparent;
            border-bottom-color: transparent;

        }
        .parallax-bg {
            position: absolute;
            left: 0;
            top: 0;
            width: 130%;
            height: 300px;
            -webkit-background-size: cover;
            background-size: cover;
            background-position: center;
            background-image: url(/static/images/qjt.jpg);
        }
        .subBan {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            font-size: 18px;
            color: #000;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            padding: 40px 10px;
            background-color: transparent !important;
            justify-content: space-around !important;
        }
        .swiper-slide .title {
            margin: 300px 0 100px 0;
            font-size: 41px;
            font-weight: 300;
        }
        .swiper-slide .subtitle {
            margin: -80px 0 20px 0;
            font-size: 21px;

        }
        .swiper-slide .text {
            font-size: 14px;
            max-width: 400px;
            line-height: 1.3;
        }
    }

    /*end footer*/




</style>