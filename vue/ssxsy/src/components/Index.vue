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
                    <li><router-link to="/">首页</router-link></li>
                    <li class="dropdown">
                        <router-link to="/Group">走进上尚</router-link><!--data-toggle="dropdown"-->
                        <ul class="dropdown-menu">
                            <li><router-link to="/Group">集团介绍</router-link></li>
                            <li><router-link to="/Sswh">企业文化</router-link></li>
                        </ul>
                    </li>
                    <li><router-link to="/News">新闻资讯</router-link></li>
                    <li><img src="static/images/logo/logo.png" alt=""></li>
                    <li><router-link to="/Recruit">人才发展</router-link></li>
                    <li><router-link to="/Project">项目欣赏</router-link></li>
                    <li><router-link to="/Contact">联系我们</router-link></li>
                </ul>
            </div>

        </nav>
        <!--end nav-->

        <!--轮播图片-->
        <div class="slideshow">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6 col-md-12">
                        <swiper :options="swiperOption">
                            <swiper-slide v-for="v in slideshow" :key="v.id">
                                <router-link :to="v.url">
                                    <img :src="v.preview"/>
                                    <h1>{{v.title}}</h1>
                                    <p>{{v.alias}}</p>
                                    <dl>{{v.introduce}}</dl>
                                </router-link>
                            </swiper-slide>

                        </swiper>
                    </div>
                </div>
            </div>

        </div>
        <!--end 轮播图片-->

        <!--集团子公司-->
        <div id="Group-subsidiary">
            <!--背景图片-->
            <div id="myParallax" class="paralasic" data-paralasic="0.1"><!--视觉差效果-->
                <div class="row">
                    <div class="col-sm-12 col-md-12">
                        <h2 class="title ">集团子公司</h2>
                        <p class="tag">Group subsidiary</p>
                    </div>
                </div>
                <!--子公司缩略图-->
                <!-- <div class="row">
                     <div class="col-sm-6 col-md-1"></div>
                     <div class="col-sm-6 col-md-3">
                         <div class="thumbnail">
                             <img src="/static/images/zgs1.png"
                                  alt="通用的占位符缩略图">
                             <div class="caption">
                                 <h3>荣尚物业</h3>
                                 <p>保安及服务人员管理</p>
                             </div>
                         </div>
                     </div>
                     <div class="col-sm-6 col-md-3">
                         <div class="thumbnail">
                             <img src="/static/images/zgs2.png"
                                  alt="通用的占位符缩略图">
                             <div class="caption">
                                 <h3>上柜科技</h3>
                                 <p>未来科技城智慧城市建设</p>
                             </div>
                         </div>

                     </div>
                     <div class="col-sm-6 col-md-3">
                         <div class="zgs3">
                             <div class="thumbnail">
                                 <img src="/static/images/zgs3.png" alt="">
                                 <div class="caption">
                                     <h3>尚驿餐饮</h3>
                                     <p>餐饮及连锁加盟管理</p>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div class="col-sm-6 col-md-1"></div>
                 </div>
                 <div class="row ">
                     <div class="aa">
                         <div class="col-sm-6 col-md-1"></div>
                         <div class="col-md-6 col-md-6">
                             <div class="thumbnail">
                                 <img src="/static/images/zgs4.png" alt="">
                                 <div class="caption">
                                     <h3>昂杨实业</h3>
                                     <p>负责政府房产项目招标，国际会议中心运营</p>
                                 </div>
                             </div>
                         </div>

                         <div class="col-md-6 col-md-1"></div>
                     </div>
                     <div class="row">
                         <div class="col-sm-6 col-md-12 group" style="text-align: center;margin-top: -220px;">
                             <div class="btn-group" role="group">
                                 <a href="#" type="button" class="btn btn-primary">了解更多...</a>
                             </div>
                         </div>
                     </div>
                 </div>-->
                <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-6 col-md-10">
                        <div class="today">
                            <div class="pic">
                                <router-link :to="v.url"  v-for="v in commendSubsidiary" :key="v.id">
                                    <img :src="v.preview"/>
                                    <div class="txt">
                                        <h3>{{v.title}}</h3>
                                        <p>{{v.introduce}}</p>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-1"></div>
                </div>
            </div>
            <!--end 子公司缩略图-->

            <!--背景图片 ... -->

        </div><!--Group-subsidiary-->
        <!--end 集团子公司-->

        <!--上尚文化-->
        <div class="sswh">
            <div class="row">
                <div class="col-sm-6 col-md-12" v-for="v in sswh" :key="v.id" >
                    <h2 class="title">{{v.title}}</h2>
                    <p class="tag " >{{v.alias}}</p>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-md-2"></div>
                    <div class="col-sm-6 col-md-8">
                        <div class="describe">
                            <router-link :to="v.url" v-for="v in sswh" :key="v.id" class="wow bounceInRight">
                                <p>{{v.introduce}}</p>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-2"></div>
                </div>
            </div>

        </div>
        <!--end 上尚文化-->

        <!--创新发展-->
        <div class="cxfz">
            <div class="row">
                <div class="col-sm-6 col-md-12">
                    <h2 class="title">创新发展</h2>
                    <p class="tag">innovative development</p>
                </div>
            </div><!--1row-->
            <div class="row"><!--2row-->
                <div class="col-sm-6 col-md-1"></div>
                <div class="col-col-sm-6 col-md-10 cxfzbj">
                    <div class="row">
                        <div class="col-sm-6 col-md-6">
                            <!--视频-->
                            <div class="slider-pro">
                                <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
                                    <swiper-slide v-for="v in videos" :key="v.id">
                                        <video :src="v.path"
                                               controls="controls"
                                               :poster="v.poster">
                                        </video>
                                    </swiper-slide>


                                </swiper>
                            </div>
                            <!--视频结束-->
                        </div>
                        <div class="col-sm-6 col-md-1"></div>
                        <div class="col-sm-6 col-md-4">
                            <div class="header" >
                                <swiper :options="swiperOptionTop1" class="gallery-top1" ref="swiperTop1">
                                    <swiper-slide v-for="v in getflv" :key="v.id">
                                        <h3>{{v.title}}</h3>
                                        <router-link class="introduce" :to="''">
                                            {{v.introduce}}
                                        </router-link>
                                    </swiper-slide>

                                </swiper>
                            </div>

                            <!--缩略图控制-->
                            <div class="xny">
                                <div class="row">
                                    <div class="col-sm-6 col-md-3"></div>
                                    <div class="col-sm-6 col-md-6">
                                        <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
                                            <swiper-slide v-for="v in getflv" :key="v.id">
                                                <img :src="v.preview" >
                                            </swiper-slide>

                                            <div class="swiper-button-next swiper-button-white" style="padding-left:200px;" slot="button-next"></div>
                                            <div class="swiper-button-prev swiper-button-white" style="padding-right:200px;" slot="button-prev"></div>
                                        </swiper>
                                    </div>
                                    <div class="col-sm-6 col-md-3"></div>
                                </div>

                            </div>
                            <!--end 缩略图控制-->
                        </div>
                        <div class="col-sm-6 col-md-1"></div>
                    </div>
                </div>

                <!--cxfzbj-->
                <div class="col-sm-6 col-md-1"></div>
            </div><!--2row-->

        </div><!--cxfz-->
        <!--end 创新发展-->

        <!--地图-->
        <div class="amap">
            <div class="row">
                <div class="col-sm-6 col-md-4"></div>
                <div class="col-sm-6 col-md-4">
                    <div class="jtgs">
                        <h1 class="aa">上尚新商业集团</h1>
                        <p><img src="/static/images/amap.gif" alt=""> 杭州市余杭区余杭墉路2301号海智中心3号楼</p>
                        <p><img src="/static/images/tel.gif" alt=""> tang513184923outlook.com</p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4"></div>
            </div>
        </div>
        <br/><br/><br/><br/>
        <!--end 地图-->

        <!--footer-->
        <div class="footer">
            <div class="row">
                <div class="col-sm-6 clo-md-8">
                    <div class="ba">
                        <dl>
                            <dt class="strong">网站备案号：浙ICP备16028135号</dt>
                            <dt class="copyright">Copyright @ 2016-2020 上尚新商业集团版权所有</dt>
                        </dl>
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
        name: "Index",
        mounted() {
            //引入vue-axios插件

            //轮播图片
             this.axios.get('http://huifw.vip/api/slideshow').then((response) => {
                 this.slideshow = response.data.data;
             });
            //集团子公司
            this.axios.get('http://huifw.vip/api/commendSubsidiary/5').then((response) => {
                this.commendSubsidiary = response.data.data;
            });
            //上尚文化
            this.axios.get('http://huifw.vip/api/sswh').then((response)  => {
                this.sswh = response.data.data;
            });
            //标题与缩略图（创新发展）
            this.axios.get('http://huifw.vip/api/getflv').then((response) => {
                this.getflv = response.data.data;
            });
            //视频（创新发展）
            this.axios.get('http://huifw.vip/api/videos').then((response) => {
                this.videos = response.data.data;
            });

            this.$nextTick(() => {
                const swiperTop = this.$refs.swiperTop.swiper
                const swiperTop1 = this.$refs.swiperTop1.swiper
                const swiperThumbs = this.$refs.swiperThumbs.swiper

                swiperTop.controller.control = swiperThumbs
                swiperTop.controller.control = swiperTop1

                swiperThumbs.controller.control = swiperTop


            })

            /*go_top*/
            document.querySelector('.scrollTop').style.bottom = this.toBottom;
            $(".scrollTop").scrollToTop(1000);
            /*end go_top*/

        },
        data() {
            return {
                //nav标签
              /*  tags: [],*/
                slideshow: [
                     /* {
                          id: 1,
                          preview: 'static/images/banner_1.jpg',
                          title: '上尚新商业集团有限公司',
                          alias: 'Shang shang new business group co. LTD',
                          introduce: '上尚集团专注于未来科技城智慧生活建设和商业拓展。有梦想的人们，都期盼坚实的依托，而作为以打造中国的HOPSCA为目标的---上尚资产，我们本着“利益共享、分工合作、联盟共赢”的理念，发挥物业管理和项目运营方面的能力，产业涉足未来科技城国际会议中心、创客公寓、E魔方快递柜、连锁餐饮、配套媒体宣传路径、商业规划租赁等。并结合客户的需求进行自我的更新。在物业运营的核心概念与指导思想上，我们已经跳出常规的枷锁，坚信不断追求美好境界的客户在前行道路上早已有了更高、更新及具个性化的需求。\n' +
                          '                                                是杭州未来科技城最有影响力的商业圈缔造者。'
                      },
                      {
                        id: 2,
                        preview: 'static/images/hzzx.png',
                        title: '海智·创业茂',
                        alias: 'Hai zhi is an entrepreneur',
                        introduce: '园区以智能物流创业园为核心，年轻、创意为概念，本项目拥享便捷顺畅的交通，同时还有阿里巴巴淘宝城、海港城等商务生活配套，该项目拟打造成互联网智能物流的示范基地。以统一、创新、年轻化的理念，满足未来科技城技术男、宅女、学生的需求。'
                    },*/
                ],
                commendSubsidiary:[],
                getflv:[],
                videos:[],
        

                swiperOption: {
                    spaceBetween: 10,
                    effect: 'fade',
                    /*centeredSlides: true,*/
                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                },

                swiperOptionTop: {
                    spaceBetween: 10,
                },
                swiperOptionTop1: {
                    spaceBetween: 10,
                },


                swiperOptionThumbs: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    spaceBetween: 10,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    touchRatio: 0.2,
                    slideToClickedSlide: true
                }
            }
            /*return */
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


    /*roll*/
    #scroll{
        position:fixed;
        top:300px;
        right:20px;
    }
    .scrollItem {
        width:30px;
        height:30px;
        cursor:pointer;
        padding-top:4px;
        margin: 30px 0;

        background: #3c763d;
        color: #ffffff;
        border-radius: 50%;
        text-align: center;
        line-height: 20px;
    }
    /*roll*/
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

    /*slideshow*/
    .swiper-container .swiper-slide row {
        height: 100%;
        width: 100%;
    }
    .swiper-container .swiper-slide img {
        height: 1118px;
        width: 100%;
        -o-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;
        background-color: #000;
        cursor: default; /*光标指针*/
    }
    .swiper-container .swiper-slide h1 {
        width: 100%;
        color: #fff;
        margin-top: -700px;
        line-height: 1em;
        text-align: center;
        position: absolute;
        word-spacing: 10px;
        letter-spacing: 10px;
        font-weight: bold;
    }
    .swiper-container .swiper-slide p {
        width: 100%;
        color: #fff;
        margin-top: -650px;
        line-height: 1em;
        text-align: center;
        position: absolute;
        font-size: 14px;
        word-spacing: 2px;
        letter-spacing: 2px;
        text-transform: Uppercase;
    }
    .swiper-container .swiper-slide dl {
        position: absolute;
        width: 100%;
        color: #fff;
        margin: -140px 0 0 0;
        line-height: 2em;
        font-size: 10px;
        text-align: center;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;

    }

    /*slideshow*/

    /*Group-subsidiary*/
    .title {
        margin: 100px auto 0;
        text-align: center;
        word-spacing: 3px;
        letter-spacing: 3px;
    }

    .tag {
        margin: 15px auto 0;
        text-align: center;
        text-transform: Uppercase;
        word-spacing: 3px;
        letter-spacing: 3px;
    }



    /*视觉差*/
    .paralasic {
        background-image: url('../../static/images/banner_2.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center top;

    }
    /*end 视觉差*/

    /*end  Group-subsidiary*/

    /*上尚文化*/
    .sswh {
        text-align: center;
        margin: 0 auto 0;
        background: linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
        ), url('../../static/images/banner_3.jpg') no-repeat fixed;

        width: 100%;
        height: 600px;
        -o-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;
        color: #fff;

    }
    .describe {
        margin-top: 100px;
    }
    .describe a {
        line-height: 2;
        word-spacing: 3px;
        letter-spacing: 3px;
        font-family: 方正兰亭超细黑简体;
        font-size: 16px;
        color: #b2b2b2;
        text-decoration: none;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 6;

    }
    .describe a:hover {
        color: #fff;
        cursor: default; /*光标指针*/
        -webkit-transition: all 0.6s;
        -moz-transition: all 0.6s;
        -ms-transition: all 0.6s;
        -o-transition: all 0.6s;
        transition: all 0.6s;
    }

    /*end上尚文化*/


    /*创新发展*/

    /*end 创新发展*/

    /*地图*/
    .amap {
        /* text-align: center;*/
        margin: 10px auto 0;
        background: linear-gradient(
                rgba(0, 0, 0, 0.2),
                rgba(0, 0, 0, 0.2)
        ), url('../../static/images/ssxys_amap.png') no-repeat fixed;
        width: 100%;
        height: 514px;
        -o-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;

    }

    .jtgs {
        background-color: #1b1b1b;
        color: #fff;
        margin: 0 auto;
        width: 492px;
        height: 514px;
        text-align: center;
        position: relative;
        font-family: 方正兰亭中黑_GBK;
    }

    .jtgs .aa {
        font-size: 32px;
        word-spacing: 4px;
        letter-spacing: 4px;
        display: inline-block;
        margin: 183px auto 0;
    }

    .jtgs p {
        font-size: 16px;
        word-spacing: 3px;
        letter-spacing: 3px;
        margin-top: 49px;
    }


    /*end 地图*/

    /*footer*/

    .footer {
        font-family: 方正兰亭黑简体;
        margin: -70px auto 0;
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


    @media screen and (min-width: 1200px) {
        .swiper-container .swiper-slide img {
            height: 1118px;
            width: 100%;
            -o-background-size: cover;
            -moz-background-size: cover;
            background-size: cover;
            background-color: #000;
            cursor: default; /*光标指针*/
        }
        .cxfzbj {
            margin: 200px 0;
            background-color: #1c1c1c;
            height: 400px;
        }
        .slider-pro {
            margin: -40px 0 0 20px;
        }
        .slider-pro video{
            display: block;
            width: 100%;
            height: 100%;
        }

        .cxfz .header {
            color: white;
            margin: 50px auto 0;
            line-height: 2;
            word-spacing: 3px;
            letter-spacing: 3px;
        }

        .cxfz .introduce {
            color: #b2b2b2;
            margin: 20px auto 0;
            line-height: 2;
            word-spacing: 3px;
            letter-spacing: 3px;
            font-family: 方正兰亭超细黑简体;
            text-decoration: none;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6;
        }

        .cxfz .introduce:hover {
            color: #fff;
            cursor: default; /*光标指针*/
            -webkit-transition: all 0.6s;
            -moz-transition: all 0.6s;
            -ms-transition: all 0.6s;
            -o-transition: all 0.6s;
            transition: all 0.6s;
        }

        .xny{
            margin-top: 30px;
            text-align: center;
            width: 10%;

        }
        .xny .gallery-thumbs  {
            width: 500px;
            height: 100%;
            margin: -10px -50px 0 -20px;
        }
        .xny  .gallery-thumbs img{
            width: 150px;
            height: 100px;

        }

        .today .pic{
            height: 800px;
            float: left;
            width: 100%;
            margin: 100px 0 80px 0;
        }
        .today .pic a{
            display: block;
            float: left;
            overflow: hidden;
            position: relative;
            box-sizing: border-box;



        }
        .today .pic a img{

            cursor: pointer;
            transition: all 0.6s;

            min-height: 100%;
            max-height:500px;
            width: 100%;
            position: absolute;


        }
        .today .pic a img:hover{
            transform: scale(1.4);
        }
        .today .pic a:nth-child(1){
            width: 40%;
            height: 100%;
            border-right: 10px solid white;
        }
        .today .pic a:nth-child(2){
            width:30%;
            height: 50%;
            border-bottom: 8px solid white;
            border-right: 10px solid white;


        }
        .today .pic a:nth-child(3){
            width:30%;
            height: 50%;
            border-bottom: 8px solid white;

        }
        .today .pic a:nth-child(4){
            width:30%;
            height: 50%;
            border-right: 10px solid white;


        }
        .today .pic a:nth-child(5){
            width:30%;
            height: 50%;

        }

        .txt {
            width: 100%;
            height: 45px;
            background: rgba(0, 0, 0, 0.8); /*透明背景色，不透明其文字内容*/
            position: absolute;
            left: 0;
            bottom: 0;
            color: #fff;
            font-family: "微软雅黑";
        }
        .txt h3 {
            font-size: 20px;
            font-weight: 100;
            height: 45px;
            text-align: center;
            line-height: 45px;
        }
        .txt p {
            font-size: 14px;
            text-align: center;
            overflow: hidden;/*//超出隐藏*/
            text-overflow: ellipsis;/*//超出为省略号*/
            white-space: nowrap;/*//内容不换行*/
        }

        #Group-subsidiary .thumbnail {
            text-align: center;
            margin: 100px 11px 0 11px;
            background-color: #000;
            height: 570px;

        }

        #Group-subsidiary .thumbnail img {
            width: 100%;
            height: 100%;
            transition: all 0.6s;

        }

        #Group-subsidiary .thumbnail img:hover {
            cursor: default; /*光标指针*/
            transform: scale(1.1);
        }

        #Group-subsidiary .caption {
            color: #fff;
            position: relative;
            margin-top: -180px;
            word-spacing: 4px;
            letter-spacing: 4px;
        }

        #Group-subsidiary .caption > h3 {
            margin: 10px auto 0;
            font-size: 20px;
        }

        #Group-subsidiary .caption > p {
            margin: 15px auto 0;
            font-size: 14px;
            width: 200px;

        }
        .swiper-container .swiper-slide dl {
            position: absolute;
            width: 100%;
            color: #fff;
            margin: -140px 0 0 0;
            line-height: 2em;
            font-size: 10px;
            text-align: center;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;

        }


        #Group-subsidiary .zgs3 .thumbnail {
            width: 453px;
            height: 892px;

        }

        #Group-subsidiary . zgs3 img {
            width: 453px;
            height: 892px;
        }

        #Group-subsidiary .aa {
            margin-top: -410px;
        }

        #Group-subsidiary .aa .caption {
            margin-left: 500px;
            margin-top: -170px;
        }

        #Group-subsidiary .aa .thumbnail {
            margin-top: 115px;
            max-width: 930px;
            margin-left: 12px;
            max-height: 295px;
            margin-bottom: 300px;

        }

        #Group-subsidiary .aa img {
            /*position: relative;*/
            width: 100%;
            height: 295px;
        }

        .swiper-container .swiper-slide dl {
            position: absolute;
            width: 1300px;
            color: #fff;
            margin: -500px 0 0 300px;
            line-height: 2em;
            font-size: 16px;
            text-align: center;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
        }
    }
    @media screen and (max-width: 1500px) {
        .cxfzbj {
            margin: 200px 0;
            background-color: #1c1c1c;
            height: 400px;
        }
        .slider-pro {
            margin: -100px 0 0 20px;

        }
        .slider-pro video{
            display: block;
            width: 100%;
            min-height: 480px;
        }

        .swiper-container .swiper-slide dl {
            position: absolute;
            width: 1300px;
            color: #fff;
            margin: -500px 0 0 80px;
            line-height: 2em;
            font-size: 16px;
            text-align: center;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
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
        .cxfzbj {
            margin: 200px 0;
            background-color: #1c1c1c;
            height: 400px;
        }

        .slider-pro {
            margin: -110px 0 0 20px;
        }
        .slider-pro video{
            display: block;
            width: 100%;
            height: 100%;
        }

        .cxfz .header {
            color: white;
            margin: 30px auto 0;
            line-height: 2;
            word-spacing: 3px;
            letter-spacing: 3px;
        }

        .cxfz .introduce {
            color: #b2b2b2;
            margin: 20px auto 0;
            line-height: 2;
            word-spacing: 3px;
            letter-spacing: 3px;
            font-family: 方正兰亭超细黑简体;
            text-decoration: none;
            font-size: 14px;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
        }

        .cxfz .introduce:hover {
            color: #fff;
            cursor: default; /*光标指针*/
            -webkit-transition: all 0.6s;
            -moz-transition: all 0.6s;
            -ms-transition: all 0.6s;
            -o-transition: all 0.6s;
            transition: all 0.6s;
        }
        .xny{
            margin-top: 40px;
            text-align: center;
            width: 10%;
        }
        .xny .gallery-thumbs  {
            width: 500px;
            height: 100%;
            margin: -10px -60px 0 -100px;
        }
        .xny  .gallery-thumbs img{
            width: 150px;
            height: 100px;
        }


        .today .pic{
            height: 800px;
            float: left;
            width: 100%;
            margin: 100px 0 80px 0;
        }
        .today .pic a{
            display: block;
            float: left;
            overflow: hidden;
            position: relative;
            box-sizing: border-box;
        }

        .today .pic a img{

            cursor: pointer;
            transition: all 0.6s;

            min-height: 100%;
            max-height:500px;
            width: 100%;
            position: absolute;
            /* left: 50%;
             top: 50%;
             transform: translate(-50%,-50%);*/

        }
        .today .pic a img:hover{
            transform: scale(1.4);
        }

        .today .pic a:nth-child(1){
            width: 40%;
            height: 100%;
            border-right: 10px solid white;
        }

        .today .pic a:nth-child(2){
            width:30%;
            height: 50%;
            border-bottom: 8px solid white;
            border-right: 10px solid white;


        }
        .today .pic a:nth-child(3){
            width:30%;
            height: 50%;
            border-bottom: 8px solid white;

        }
        .today .pic a:nth-child(4){
            width:30%;
            height: 50%;
            border-right: 10px solid white;


        }
        .today .pic a:nth-child(5){
            width:30%;
            height: 50%;

        }

        .txt {
            width: 100%;
            height: 45px;
            background: rgba(0, 0, 0, 0.8); /*透明背景色，不透明其文字内容*/
            position: absolute;
            left: 0;
            bottom: 0;
            color: #fff;
            font-family: "微软雅黑";
        }
        .txt h3 {
            font-size: 20px;
            font-weight: 100;
            height: 45px;
            text-align: center;
            line-height: 45px;
        }
        .txt p {
            font-size: 14px;
            text-align: center;
            overflow: hidden;/*//超出隐藏*/
            text-overflow: ellipsis;/*//超出为省略号*/
            white-space: nowrap;/*//内容不换行*/
        }
        .today .pic a img {

            cursor: pointer;
            transition: all 0.6s;

            min-height: 100%;
            max-height: 300px;
            width: 100%;
            position: absolute;
        }
        .describe a {
            line-height: 2;
            word-spacing: 3px;
            letter-spacing: 3px;
            font-family: 方正兰亭超细黑简体;
            font-size: 14px;
            color: #b2b2b2;
            text-decoration: none;
        }

        #Group-subsidiary .thumbnail {
            text-align: center;
            margin: 100px 8px 0 8px;
            /*border: solid 5px #fff;*/
            border: none;
            /* height: 570px;*/
        }

        #Group-subsidiary .thumbnail img {
            height: 100%;
            transition: all 0.6s;
        }

        #Group-subsidiary .thumbnail img:hover {
            cursor: default; /*光标指针*/
            transform: scale(1.1);
        }

        #Group-subsidiary .caption {
            color: #fff;
            position: relative;
            margin-top: -170px;
            word-spacing: 4px;
            letter-spacing: 4px;

        }

        #Group-subsidiary .caption > h3 {
            margin: 10px auto 0;
            font-size: 20px;
        }

        #Group-subsidiary .caption > p {
            margin: 10px auto 0;
            font-size: 14px;
            width: 200px;
            /* overflow: hidden;
             white-space: nowrap;
             text-overflow: ellipsis; !* IE/Safari *!
             -ms-text-overflow: ellipsis;
             -o-text-overflow: ellipsis; !* Opera *!*/
        }

        /* #Group-subsidiary . zgs3 .thumbnail {
             width: 100%;

         }*/
        /* #Group-subsidiary . zgs3 img {
             width: 100%;
         }*/
        #Group-subsidiary .aa {
            margin-top: 40px;
        }

        #Group-subsidiary .aa .caption {
            margin-left: 300px;
            margin-top: -170px;
        }

        #Group-subsidiary .aa .thumbnail {
            width: 617px;
            margin-top: -344px;
            margin-left: 7px;
        }

        #Group-subsidiary .aa img {
            position: relative;
            width: 100%;
            height: 305px;
        }


        .swiper-container .swiper-slide h1 {
            width: 100%;
            color: #fff;
            font-size: 30px;
            margin-top: -630px;
            line-height: 1em;
            text-align: center;
            position: absolute;
            word-spacing: 8px;
            letter-spacing: 8px;
            font-weight: bold;
        }

        .swiper-container .swiper-slide p {
            width: 100%;
            color: #fff;
            margin-top: -580px;
            line-height: 1rem;
            text-align: center;
            position: absolute;
            font-size: 14px;
            word-spacing: 2px;
            letter-spacing: 2px;
            text-transform: Uppercase;
        }

        .swiper-container .swiper-slide dl {
            position: absolute;
            width: 1000px;
            color: #fff;
            margin: -440px 0 0 120px;
            line-height: 2em;
            font-size: 14px;
            text-align: center;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
        }

        .amap {
            /* text-align: center;*/
            margin: 10px auto 0;
            background: linear-gradient(
                    rgba(0, 0, 0, 0.2),
                    rgba(0, 0, 0, 0.2)
            ), url('../../static/images/ssxys_amap.png') no-repeat fixed;
            width: 100%;
            height: 514px;
            -o-background-size: cover;
            -moz-background-size: cover;
            background-size: cover;

        }
        .jtgs {
            background-color: #1b1b1b;
            color: #fff;
            margin: 0 auto;
            width: 430px;
            height: 514px;
            text-align: center;
            position: relative;
            font-family: 方正兰亭中黑_GBK;
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
    @media screen and (max-width: 768px)  {

        .navbar-fixed-top .navbar-toggle img {
            width: 40px;
            height: 40px;
            margin-right: 60px;
        }

        .describe a {
            text-indent: 2em;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10;

        }

        #Group-subsidiary .aa {
            margin-top: 40px;
            width: 100%;
            height: 100%;
        }

        #Group-subsidiary .aa .caption {
            margin-left: 180px;
            margin-top: -150px;
        }

        #Group-subsidiary .aa .thumbnail {
            margin-top: 60px;
            width: 100%;
            height: 100%;
        }

        /*  #Group-subsidiary .aa img {
              !*position: relative;*!
              width: 100%;
              height: 80%;
             !* height: 180px;*!
          }*/
        .btn-group > .btn:first-child {
            margin: 350px 0 20px 0;
        }

        #Group-subsidiary .caption > p {
            margin: 10px auto 0;
            font-size: 14px;
            width: 200px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis; /* IE/Safari */
            -ms-text-overflow: ellipsis;
            -o-text-overflow: ellipsis; /* Opera */
        }

        .swiper-container .swiper-slide img {
            height: 300px;
            width: 100%;
            -o-background-size: cover;
            -moz-background-size: cover;
            background-size: cover;
            cursor: default; /*光标指针*/
        }

        .swiper-container .swiper-slide h1 {
            width: 100%;
            color: #fff;
            font-size: 14px;
            margin-top: -200px;
            line-height: 1em;
            text-align: center;
            position: absolute;
            word-spacing: 2px;
            letter-spacing: 2px;
        }

        .swiper-container .swiper-slide p {
            width: 100%;
            color: #fff;
            margin-top: -180px;
            line-height: 1em;
            text-align: center;
            position: absolute;
            font-size: 1rem;
            word-spacing: 1px;
            letter-spacing: 1px;
            text-transform: Uppercase;
        }

        .swiper-container .swiper-slide dl {
            position: absolute;
            width: 100%;
            color: #fff;
            margin: -140px 0 0 0;
            line-height: 2em;
            font-size: 10px;
            text-align: center;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;

        }

        .slider-pro {
            margin: -80px 0;
        }

        .slider-pro video {
            display: block;
            width: 100%;
            height: 100%;
        }

        .cxfzbj {
            margin: 50px 0;
            background-color: #1c1c1c;
            height: 700px;
        }

        .cxfz .header {
            color: white;
            margin: 100px auto 0;
            text-align: center;
            line-height: 2;
            word-spacing: 3px;
            letter-spacing: 3px;
        }

        .cxfz .introduce {
            background-color: #1c1c1c;
            text-indent: 2em;
            color: #fff;
            line-height: 2;
            word-spacing: 3px;
            letter-spacing: 3px;
            font-family: 方正兰亭超细黑简体;
            font-size: 16px;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }

        .xny {
            margin-top: 40px;
            text-align: center;
        }

        .xny .gallery-thumbs {
            position: relative;
            width: 400px;
            height: 100%;
            margin: 10px -10px 0 -10px;
        }

        .xny .gallery-thumbs img {
            display: inline;
            width: 100px;
            height: 80px;

        }

        .today .pic {
            height: 55vw;
            float: left;
            width: 100%;
            margin: 100px 0 80px 0;
        }

        .today .pic a {
            display: block;
            float: left;
            overflow: hidden;
            position: relative;
            box-sizing: border-box;
        }

        .today .pic a img {

            cursor: pointer;
            transition: all 0.6s;

            min-height: 100%;
            max-height: 500px;
            width: 100%;
            position: absolute;
            /* left: 50%;
             top: 50%;
             transform: translate(-50%,-50%);*/

        }

        .today .pic a img:hover {
            transform: scale(1.4);
        }

        .today .pic a:nth-child(1) {
            width: 40%;
            height: 100%;
            border-right: 5px solid white;
        }

        .today .pic a:nth-child(2) {
            width: 30%;
            height: 50%;
            border-bottom: 5px solid white;
            border-right: 5px solid white;

        }

        .today .pic a:nth-child(3) {
            width: 30%;
            height: 50%;
            border-bottom: 5px solid white;

        }

        .today .pic a:nth-child(4) {
            width: 30%;
            height: 50%;
            border-right: 5px solid white;

        }

        .today .pic a:nth-child(5) {
            width: 30%;
            height: 50%;

        }

        .txt {
            width: 100%;
            height: 20px;
            background: rgba(0, 0, 0, 0.8); /*透明背景色，不透明其文字内容*/
            position: absolute;
            left: 0;
            bottom: 0;
            color: #fff;
            font-family: "微软雅黑";
        }

        .txt h3 {
            font-size: 14px;
            font-weight: 100;
            height: 20px;
            text-align: center;
            line-height: 20px;
        }

        .txt p {
            font-size: 14px;
            text-align: center;
            overflow: hidden; /*//超出隐藏*/
            text-overflow: ellipsis; /*//超出为省略号*/
            white-space: nowrap; /*//内容不换行*/
        }

        .jtgs {
            max-width: 100%;
        }

        .jtgs .aa {
            font-size: 25px;

        }

        .jtgs p {
            font-size: 14px;
            white-space: nowrap;
            text-overflow: ellipsis;
            -ms-text-overflow: ellipsis;
            -o-text-overflow: ellipsis;
        }

        .amap {
            /* text-align: center;*/
            margin: -40px auto;
            background: linear-gradient(
                    rgba(0, 0, 0, 0.2),
                    rgba(0, 0, 0, 0.2)
            ), url('../../static/images/ssxys_amap.png') no-repeat fixed;
            width: 100%;
            height: 100%;
            -o-background-size: cover;
            -moz-background-size: cover;
            background-size: cover;

        }

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
            /*text-indent: 4em;*/
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
    }
</style>