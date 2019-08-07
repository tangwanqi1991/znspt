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
                        <router-link to="/News">
                            新闻资讯
                        </router-link>
                    </li>
                    <li><img src="static/images/logo/logo.png" alt=""></li>
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
                        <router-link to="/Recruit">人才招聘</router-link> >
                        <router-link class="active" to="/Expansion">职业发展与培训</router-link>
                    </div>
                    <div class="col-sm-6 col-md-2"></div>

                </div>
            </div>
        </div>
        <!--end bq-->

        <!--折叠-->
         <div class="expansion" style="margin-bottom: 50px;">
           <div class="row">
               <div class="col-sm-6 col-md-2"></div>
               <div class="col-sm-6 col-md-8">
                   <h2>职业发展与培训</h2>
                   <p>“人才是关键，有人就有才，有才就有市场，没有人才就没有市场。”这是董事长王振华在与员工面对面活动中说的话，也是新城这么多年来一直践行的人才理念。新城深知，优秀的人才和人才培养机制正是铸造“世界一流”的利器。多年来，新城结合企业战略，通过实战模拟、案例研讨、互动教学等不同的培训手段，不断改进、完善我们的培训项目，培养企业的优秀人才，让不同层级和不同领域的员工都能获得对应的培训学习机会，形成了完整的培训体系。</p>
               </div>
               <div class="col-sm-6 col-md-2"></div>
           </div>
       </div>
       <!-- <div class="expansion_1">
           <div class="row">
               <div class="col-sm-6 col-md-2"></div>
               <div class="col-sm-6 col-md-8">
                   <div class="panel-group" id="accordion">
                       <div class="panel panel-warning">
                           <div class="panel-heading">
                               <h4 class="panel-title">
                                   <a data-toggle="collapse" data-parent="#accordion"
                                      href="#collapseOne">
                                       新睿培养
                                   </a>
                               </h4>
                           </div>
                           <div id="collapseOne" class="panel-collapse collapse in">
                               <div class="panel-body">
                                   <div class="row">
                                       <div class="col-sm-6 col-md-6">
                                           应届大学生能为公司注入新的活力，也是公司长远发展的重要力量。从2000开始，新城就从全国各地学校招聘应届大学生（新睿）并通过系统的培训与发展体系使之成为公司快速发展的骨干人才，打造属于新城自己的内部队伍。
                                           新睿入职后，公司会统一组织为期2周的封闭式集中培训，从军事化训练、体验式培训到课程学习、丰富多样的团队活动，帮助新睿适应职场节奏，明确发展方向，更快地完成从“学生”到“职业人”的蜕变。
                                           新睿在完成集中培训后，将被送往各事业部、各部门，接受带教人的在岗带教和培训。行政人事中心（部）也会通过集中培训辅导、阶段性评估、工作轮岗等不同的培养方式对新睿大学生进行为期一年的培养。成长迅速、表现优异的新睿，将晋级加入“新城之星”，接受更系统、专业的培养，获得更宽广的发展平台。
                                       </div>
                                       <div class="col-sm-6 col-md-1"></div>
                                       <div class="col-sm-6 col-md-5">
                                           <img src="/static/images/expansion1.png" alt="">
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>1
                       <div class="panel panel-success">
                           <div class="panel-heading">
                               <h4 class="panel-title">
                                   <a data-toggle="collapse" data-parent="#accordion"
                                      href="#collapseTwo">
                                       新伙伴融入
                                   </a>
                               </h4>
                           </div>
                           <div id="collapseTwo" class="panel-collapse collapse">
                               <div class="panel-body">
                                   <div class="row">
                                       <div class="col-sm-6 col-md-6">
                                           全面而及时的入职与融入培训，人性化的回访机制，帮助新员工了解公司发展状况和企业文化，更好更快地融入新城，成为真正的新城人。
                                           <img src="/static/images/expansion2.png" alt="">
                                       </div>
                                       <div class="col-sm-6 col-md-1"></div>
                                       <div class="col-sm-6 col-md-5">
                                           <img src="/static/images/expansion2-1.png" alt="">
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>2
                       <div class="panel panel-info">
                           <div class="panel-heading">
                               <h4 class="panel-title">
                                   <a data-toggle="collapse" data-parent="#accordion"
                                      href="#collapseThree">
                                       人才培养项目
                                   </a>
                               </h4>
                           </div>
                           <div id="collapseThree" class="panel-collapse collapse">
                               <div class="panel-body" style="padding-top: 50px;">
                                   <div class="row">
                                       <div class="col-sm-6 col-md-12">
                                           人才培养项目是新城结合不同发展阶段的战略目标，通过人才培养满足企业在不同发展阶段对人才的需求。每个项目都对培训对象、讲师资源、课程设计、项目安排进行了严格的划分和设计。新城向员工提供管理和专业发展通道。管理方面，通过针对不同层级的管理和领导力培养项目，全面覆盖基层、中层、高层员工，制定了个性化项目—“新城之星”、“新城之光”、“项目总经理“研习班、EMBA工程等项目。专业能力提升方面，除了通过专业的内部讲师实现专业课程开发和传授，同时开展项目PM岗位认证培训。
                                           <img src="/static/images/expansion3.png" alt="" style="padding-top: 50px;">
                                       </div>

                                   </div>
                               </div>
                           </div>
                       </div>3
                       <div class="panel panel-default">
                           <div class="panel-heading">
                               <h4 class="panel-title">
                                   <a data-toggle="collapse" data-parent="#accordion"
                                      href="#collapsefour">
                                       内部讲师培养
                                   </a>
                               </h4>
                           </div>
                           <div id="collapsefour" class="panel-collapse collapse">
                               <div class="panel-body" style="padding-top: 50px;">
                                   <div class="row">
                                       <div class="col-sm-6 col-md-6">
                                           通过培养和认证，打造属于新城自己的讲师队伍，实现组织经验和个人经验的沉淀和传播。
                                       </div>
                                       <div class="col-sm-6 col-md-1"></div>
                                       <div class="col-sm-6 col-md-5">
                                           <img src="/static/images/expansion4.png" alt="">
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>4
                       <div class="panel panel-danger">
                           <div class="panel-heading">
                               <h4 class="panel-title">
                                   <a data-toggle="collapse" data-parent="#accordion"
                                      href="#collapsefive">
                                       晋升与发展
                                   </a>
                               </h4>
                           </div>
                           <div id="collapsefive" class="panel-collapse collapse">
                               <div class="panel-body" style="padding-top: 50px;">
                                   <div class="row">
                                       <div class="col-sm-6 col-md-6">
                                           新城每半年都会进行一次人才盘点，对员工的表现和能力进行评估并给予相关晋升机会。
                                           同时直接领导也会结合半年度、年度绩效面谈给予员工反馈，帮助员工更好地总结工作，了解自身的优势和需改进方面。
                                       </div>
                                       <div class="col-sm-6 col-md-1"></div>
                                       <div class="col-sm-6 col-md-5">
                                           <img src="/static/images/expansion5.png" alt="">
                                       </div>

                                   </div>
                               </div>
                           </div>
                       </div>5
                   </div>
               </div>
               <div class="col-sm-6 col-md-2"></div>
           </div>row1
       </div>  -->
        <div class="wrapper">
            <div class="row">
                <div class="col-xs-12 col-sm-6">
                    <!--<a href="#" class="media">
                        &lt;!&ndash;<div class="media-left">
                            <div class="pc-text45 mobile-title30 text-shadow">团队伙伴</div>
                            <div class="pc-text24 mobile-text14 text-shadow">齐心协力，助你全力以赴</div>
                        </div>&ndash;&gt;
                        <div class="media-body">
                            <img class="icon-arrow" src="/static/images/pxfz/pxfz_2.jpg" alt="">
                        </div>
                    </a>-->
                    <router-link to="/Elite"  class="c-preview">
                        <div class="c-preview__img">
                            <img  src="/static/images/pxfz/pxfz_1.jpg" alt="">
                        </div>
                       <!-- <h2 class="c-preview__title">Gradient Hover Effect</h2>-->
                    </router-link>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <!--<a href="#" class="media">
                        &lt;!&ndash;<div class="media-left">
                            <div class="pc-text45 mobile-title30 text-shadow">团队伙伴</div>
                            <div class="pc-text24 mobile-text14 text-shadow">齐心协力，助你全力以赴</div>
                        </div>&ndash;&gt;
                        <div class="media-body">
                            <img class="icon-arrow" src="/static/images/pxfz/pxfz_2.jpg" alt="">
                        </div>
                    </a>-->
                    <a href="#"  class="c-preview">
                        <div class="c-preview__img">
                            <img  src="/static/images/pxfz/pxfz_2.jpg" alt="">
                        </div>
                        <!-- <h2 class="c-preview__title">Gradient Hover Effect</h2>-->
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <!--<a href="#" class="media">
                        &lt;!&ndash;<div class="media-left">
                            <div class="pc-text45 mobile-title30 text-shadow">团队伙伴</div>
                            <div class="pc-text24 mobile-text14 text-shadow">齐心协力，助你全力以赴</div>
                        </div>&ndash;&gt;
                        <div class="media-body">
                            <img class="icon-arrow" src="/static/images/pxfz/pxfz_2.jpg" alt="">
                        </div>
                    </a>-->
                    <a href="#"  class="c-preview">
                        <div class="c-preview__img">
                            <img  src="/static/images/pxfz/pxfz_3.jpg" alt="">
                        </div>
                        <!-- <h2 class="c-preview__title">Gradient Hover Effect</h2>-->
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <!--<a href="#" class="media">
                        &lt;!&ndash;<div class="media-left">
                            <div class="pc-text45 mobile-title30 text-shadow">团队伙伴</div>
                            <div class="pc-text24 mobile-text14 text-shadow">齐心协力，助你全力以赴</div>
                        </div>&ndash;&gt;
                        <div class="media-body">
                            <img class="icon-arrow" src="/static/images/pxfz/pxfz_2.jpg" alt="">
                        </div>
                    </a>-->
                    <a href="#"  class="c-preview">
                        <div class="c-preview__img">
                            <img  src="/static/images/pxfz/pxfz_4.jpg" alt="">
                        </div>
                        <!-- <h2 class="c-preview__title">Gradient Hover Effect</h2>-->
                    </a>
                </div>

            </div>
        </div>


        <!--end 折叠-->

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
        name: 'Expansion',
        data() {
            return {}/*return*/
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

<!--添加“scoped”属性，仅将CSS限制为该组件-->
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

    /*expansion*/
    .expansion{
        margin: 50px auto 0;
    }
    .expansion h2{
        font-size: 32px;
        line-height: 1em;
        font-weight: bold;
    }
    .expansion p{
        margin: 20px auto 0;
        font-size: 16px;
        line-height: 1.8em;
    }

    /*end expansion*/

    /*expansion_1*/
    .expansion_1{
        margin: 50px auto 0;
    }
    .panel-heading h4 a{
        line-height: 2em;
        font-size: 20px;
        padding: 10px 20px;
        text-decoration: none;
    }
    .panel-body{
        padding: 10px 20px;
        line-height: 2em;
        font-size: 14px;
    }
    .panel-body img{
        width: 100%;
    }
    /*end expansion_1*/


    /*pxfz*/
    .wrapper{
        width: 80%;
        height: 100%;
    }
    .wrapper .c-preview {
        background-color: #fff;
       /* background: #000;*/
        background: -moz-linear-gradient(-45deg, #000000 0%, #000000 25%, #1e539e 50%, #ffc94c 75%, #7800a8 100%);
        /* FF3.6-15 */
        background: -webkit-linear-gradient(-45deg, #000000 0%, #000000 25%, #1e539e 50%, #ffc94c 75%, #7800a8 100%);
        /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(135deg, #000000 0%, #000000 25%, #1e539e 50%, #ffc94c 75%, #7800a8 100%);
        /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        background-size: 400% 400%;
        background-repeat: no-repeat;
        display: flex;
        width: 480px;
        height: 480px;
        max-width: 100vw;
        max-height: 100vh;
        justify-content: center;
        align-items: center;
        color: #fff;
        position: relative;
        cursor: pointer;
        left: 30%;
        transition: .5s all;
        margin:20px auto;
    }
    .wrapper .c-preview .c-preview__img {
        width: 480px;
        height: 480px;
        position: absolute;
        left: 0;
        top: 0;
      /*  background: #000;*/
        background-size: cover;
        z-index: 0;
        opacity: .8;
        mix-blend-mode: screen;

    }
    .wrapper .c-preview .c-preview__img img{
        width: 100%;
        height: 480px;



    }
    /*.wrapper .c-preview__title {
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        letter-spacing: .05em;

    }*/
    .wrapper .c-preview:hover {
        background-position: 100% 100%;

    }

    /*end pxfz*/

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
</style>
