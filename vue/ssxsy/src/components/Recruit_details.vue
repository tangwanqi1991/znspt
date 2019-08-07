<template>
    <div id="topbar">
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
                    <li><img src="/static/images/logo/logo.png" alt=""></li>
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

        <!--图片nave-->
        <div class="tpnav">
            <div class="row">
                <div class="col-sm-6 col-md-4"></div>
                <div class="col-sm-6 col-md-4">
                    <ul class="nav nav-pills nav-justified">
                        <li v-for="v in recruit" :key="v.id">
                            <router-link :to="v.url">{{ v.navtitle }}</router-link>
                        </li>
                        <!--<li><a href="#" class="active">社会招聘</a></li>
                        <li><a href="#">校园招聘</a></li>
                        <li>
                            <router-link to="/Telents">人才理念</router-link>
                        </li>
                        <li><router-link to="/Expansion">职业发展</router-link></li>-->
                    </ul>
                </div>
                <div class="col-sm-6 col-md-4"></div>
            </div>

        </div>
        <!--end 图片nav-->

        <!--bq-->
        <div class="bq">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6 col-md-2"></div>
                    <div class="col-sm-6 col-md-8" v-for="v in rczpnrs" :key="v.id">
                        <router-link to="/">首页</router-link> >
                        <router-link to="/Recruit">人才招聘</router-link> >
                        <router-link class="active" :to=" ''">{{v.position}}</router-link>
                    </div>
                    <div class="col-sm-6 col-md-2"></div>

                </div>
            </div>
        </div>
        <!--end bq-->

        <!--社会招聘-->
        <div class="recruit">
            <div class="row">
                <div class="col-sm-6 col-md-2"></div>
                <div class="col-sm-6 col-md-2">
                    <h2 class="active">岗位描述</h2>

                </div>
                <div class="col-sm-6 col-md-6">
                    <div class="table-responsive"  v-for="v in rczpnrs" :key="v.id">
                        <table class="table table-striped">
                            <tbody>
                            <tr class="info">
                                <td>职位信息  &nbsp<strong>{{v.position}}</strong></td>
                                <td>薪资      &nbsp<strong>{{v.salary}}</strong></td>
                                <td>学历      &nbsp<strong>{{v.education}}</strong></td>
                            </tr>
                            <tr>
                                <td>工作地点   &nbsp<strong>{{v.workplace}}</strong></td>
                                <td>所属部门   &nbsp<strong>{{v.section}}</strong></td>
                                <td>招聘人数   &nbsp<strong>{{v.nnt}}</strong></td>
                            </tr>
                            <tr>
                                <td>更新时间   &nbsp<strong>{{v.created_at}}</strong></td>
                                <td>截止时间   &nbsp<strong>{{v.deadline}}</strong></td>
                                <td>工作年限   &nbsp<strong>{{v.gznx}}</strong></td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="job">
                            <h4>任职要求：</h4>
                            <p>
                                {{v.required}}
                            </p>

                            <!--<p>1、工程管理类：土建、精装修、机电暖通 [各事业部均在招]</p>

                            <p>2、成本合约类：成本造价、采购管理 [住宅开发、商业开发在招]</p>

                            <p>3、设计管理类：建筑、景观、室内、结构 [各事业部均在招]</p>-->

                        </div>
                        <div class="job" >
                            <h4>岗位职责：</h4>

                            <p>
                                {{v.duty}}
                            </p>



                        </div>

                    </div>
                    <router-link  type="button" class="btn btn-primary" to="/Recruit" role="button" style="padding: 6px 6px;margin: 20px 0 20px 0;">返回列表</router-link>

                    <p><router-link to="">上一篇：已是第一篇了</router-link></p>
                    <p><router-link to="">下一篇：博睿管培生2</router-link></p>
                </div>

                <div class="col-sm-6 col-md-2"></div>

            </div>


        </div>
        <!--end 社会招聘-->

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
        name: "Recruit_details",
        data(){
            return {
                recruit:[],
                rczpnrs:[],

            }/*data*/
        },/*return*/

        mounted(){
            /*人才发展navtitle*/
            this.axios.get('http://huifw.vip/api/recruit').then((response) => {
                this.recruit = response.data.data;
            });

           let rczpbtId = this.$route.params.rczpbtId;/*alert(rczpbtId) 打印;*/
            this.axios.get('http://huifw.vip/api/rczpnrs/'+rczpbtId).then((response) => {
                this.rczpnrs = response.data.data;
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
        background-image: url('../../static/icon/top.png');
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

    /*tpnav*/
    .tpnav{
        margin: 0 auto;
        background: rgba(62,192,69,0.9);
    }
    .nav-justified>li>a:hover{
        background-color: rgb(37, 192, 81);
    }
    /*end tpnav*/

    /*recruit*/
    .recruit{
        padding: 90px 10px;
    }
    .recruit h2{
        font-weight: bold;
    }
    .recruit .table-striped td{
        line-height: 2em;
        font-size: 16px;
    }
    .recruit  .job{
        margin: 20px auto 0;
        line-height: 2em;
    }


    .recruit .row p>a{
        text-decoration: none;
        color: #999999;
    }
    .recruit .row p>a:hover{
        color: #000;
    }
    /*end recruit*/

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
        text-indent: 8em;
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

    /* 小屏幕（平板，小于等于 768px） */
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
        .jumbotron {
            width: 70%;
            height: 100%;
            background-color: #fff;
            border: solid 1px #b2b2b2;
            border-top-color: transparent;
            border-left-color: transparent;
            border-bottom-color: transparent;

        }
    }
    @media (max-width: 768px)  {
        .nav-justified>li>a{
            color: #000;
            font-size: 18px;
            line-height: 1.3em;
        }
        /*banner*/
        .banner {
            /* text-align: center;*/
            margin: 0 auto;
            background: linear-gradient(
                    rgba(0, 0, 0, 0.2),
                    rgba(0, 0, 0, 0.2)
            ), url('../../static/images/joinus.jpg') no-repeat fixed;
            width: 100%;
            height: 414px;
            -o-background-size: cover;
            -moz-background-size: cover;
            background-size: cover;

        }
        /*end baner*/

        /*recruit*/
        .recruit{
            padding: 40px 10px;
        }
        .recruit h2{
            font-weight: bold;
        }
        .recruit .table-striped td{
            line-height: 2em;
            font-size: 16px;
        }
        .recruit  .job{
            margin: 20px auto 0;
        }
        .recruit  .job{
            line-height: 2em;
        }

        /*end recruit*/

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
            text-indent: 4em;
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

    /*用min-width时，小的放上面*/
    @media (min-width: 992px) {
        .nav-justified>li>a{
            color: #000;
            font-size: 18px;
            line-height: 1.3em;
        }
    }
    @media (min-width: 1200px) {
        .nav-justified>li>a{
            color: #000;
            font-size: 18px;
            line-height: 1.3em;
        }
    }


</style>