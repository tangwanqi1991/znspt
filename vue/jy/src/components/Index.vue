<template>
    <div class="container-fluid">

        <!--header-->
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link active" href="#">
                    <img src="/static/images/tit.png" class="img-responsive center-block" style="margin-bottom: -20px;">
                </a>
            </li>
        </ul>
        <!--end header-->

        <!--body-->
        <div class="content">
            <div class="row">
                <img class="col-xl-12 img-responsive center-block" src="/static/images/top_xg.png" style=" height: 80px;
        margin: -40px 0 0 0px;">
            </div>
            <!--导航-->
            <div class="row">
                <div class="col-xl-5">
                    <ul class="nav rait_l">
                        <li class="nav-item ">
                            <a class="nav-link active " href="#">
                                <img src="/static/images/1.png" alt="" class="rounded-circle "
                                     style="margin:0 auto;width: 40px;height: 40px;">
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style="margin: 10px -10px; color: white;">您好，设计的明天</a>
                        </li>

                        <!--信息-->
                        <div class="por_sis">

                            <li class="nav-item sis01">
                                <a class="nav-link" href="#">
                                    <img src="/static/images/wt01.png" alt=""><span></span>
                                </a>
                            </li>
                            <li class="nav-item sis02">
                                <a class="nav-link" href="#">
                                    <img src="/static/images/wt02.png" alt=""><span></span>
                                </a>
                            </li>
                        </div>

                        <!--end信息-->

                    </ul>
                </div>
                <div class="col-xl-2"></div>

                <div class="col-xl-5 ">
                    <ul class="nav rait_r justify-content-end ">
                        <li class="nav-item">
                            <a class="nav-link " href="#">2018年4月22日</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">周四 14:30</a>
                        </li>

                    </ul>
                </div>
            </div>
            <!--end 导航-->

            <!--中间-->
            <div class="zj">
                <div class="content">
                    <div class="row No gutters">
                        <div class="col-sm-3">
                            <div class="box1">
                                <!--教师 header-->
                                <div class="header" style="padding: 0 25px;">
                                    <div class="title">
                                        教师信息
                                    </div>
                                    <div class="row align-items-start">

                                        <div class="col">
                                            教师
                                            <p><span class="number_01">465</span> 人</p>

                                        </div>
                                        <div class="col">
                                            教学团队
                                            <p><span class="number_01">203</span> 人</p>
                                        </div>
                                        <div class="col">
                                            校住教师
                                            <p><span class="number_01">203</span> 人</p>
                                        </div>
                                        <div class="col">
                                            自住教师
                                            <p><span class="number_01">203</span> 人</p>
                                        </div>
                                    </div>
                                </div>
                                <!--end 教师header-->

                                <div class="col-12" style="padding: 10px 25px">
                                    <!--swiper-->
                                    <swiper :options="swiperOption">
                                        <swiper-slide>
                                            <router-link to="#">
                                                <figure class="figure">
                                                    <img src="/static/images/5.png" class="figure-img img-fluid rounded"
                                                         alt="...">
                                                    <figcaption class="figure-caption">辅导教师</figcaption>
                                                </figure>
                                            </router-link>
                                        </swiper-slide>

                                        <swiper-slide>
                                            <router-link to="#">
                                                <figure class="figure">
                                                    <img src="/static/images/4.png" class="figure-img img-fluid rounded"
                                                         alt="...">
                                                    <figcaption class="figure-caption">体育教师</figcaption>
                                                </figure>
                                            </router-link>
                                        </swiper-slide>
                                        <swiper-slide>
                                            <router-link to="#">
                                                <figure class="figure">
                                                    <img src="/static/images/3.png" class="figure-img img-fluid rounded"
                                                         alt="...">
                                                    <figcaption class="figure-caption">教导主任</figcaption>
                                                </figure>
                                            </router-link>
                                        </swiper-slide>
                                        <swiper-slide>
                                            <router-link to="#">
                                                <figure class="figure">
                                                    <img src="/static/images/2.png" class="figure-img img-fluid rounded"
                                                         alt="...">
                                                    <figcaption class="figure-caption">生活老师</figcaption>
                                                </figure>
                                            </router-link>
                                        </swiper-slide>

                                    </swiper>
                                    <!-- 光影线条 -->
                                    <div class="line_xg00">
                                        <div class="line_xg"></div>
                                    </div>
                                    <!--end 光影线条-->

                                    <!--班级教师-->
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="bjjs">
                                                <h3><span></span>&nbsp&nbsp班级教师</h3>
                                            </div>
                                            <div class="js">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="bg-info" style="padding: 0 18px;">
                                                            <p class=" float-left">宁波效实中学教师：<span>856</span>人</p>
                                                            <router-link to="#">
                                                                <span class=" float-right">查看教师</span>
                                                            </router-link>

                                                        </div>
                                                    </div>
                                                    <!--圆形百份比-->
                                                    <div class="bfb">
                                                        <div class="row">
                                                            <div class="col col-md">
                                                                <vue-circle
                                                                        :progress="76"
                                                                        :size="80"
                                                                        :reverse="false"
                                                                        line-cap="round"
                                                                        :fill="fill"
                                                                        empty-fill="rgb(10, 43, 91)"
                                                                        :animation-start-value="0.0"
                                                                        :start-angle="0"
                                                                        insert-mode="append"
                                                                        :thickness="10"
                                                                        :show-percent="true"
                                                                        @vue-circle-progress="progress"
                                                                        @vue-circle-end="progress_end">
                                                                </vue-circle>
                                                                <div class="card-body">
                                                                    <p class="card-title">初一教师</p>
                                                                </div>
                                                            </div>
                                                            <div class="col col-md">
                                                                <vue-circle
                                                                        :progress="66"
                                                                        :size="80"
                                                                        :reverse="false"
                                                                        line-cap="round"
                                                                        :fill="fill1"
                                                                        empty-fill="rgb(10, 43, 91)"
                                                                        :animation-start-value="0.0"
                                                                        :start-angle="0"
                                                                        insert-mode="append"
                                                                        :thickness="10"
                                                                        :show-percent="true"
                                                                        @vue-circle-progress="progress"
                                                                        @vue-circle-end="progress_end">
                                                                </vue-circle>
                                                                <div class="card-body">
                                                                    <p class="card-title">初一教师</p>
                                                                </div>
                                                            </div>
                                                            <div class="col col-md">
                                                                <vue-circle
                                                                        :progress="56"
                                                                        :size="80"
                                                                        :reverse="false"
                                                                        line-cap="round"
                                                                        :fill="fill2"
                                                                        empty-fill="rgb(10, 43, 91)"
                                                                        :animation-start-value="0.0"
                                                                        :start-angle="0"
                                                                        insert-mode="append"
                                                                        :thickness="10"
                                                                        :show-percent="true"
                                                                        @vue-circle-progress="progress"
                                                                        @vue-circle-end="progress_end">
                                                                </vue-circle>
                                                                <div class="card-body">
                                                                    <p class="card-title">初一教师</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!--end 圆形百份比-->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end 班级教师-->
                                </div>

                            </div>
                        </div>
                        <div class="col-sm-6">
                            <!--地图-->
                            <div class="box2">
                                <div class="map ">
                                    <!--<el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">

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


                                    </el-amap>-->


                                        <div id="div2">
                                            <div class="row">
                                                <div class="col">考勤类型</div>
                                                <div class="col">旷课23人</div>
                                                <div class="col">旷课23人</div>
                                                <div class="col">旷课23人</div>
                                                <div class="col">旷课23人</div>
                                                <div class="col">旷课23人</div>
                                            </div>
                                        </div>


                                </div>



                            </div>
                            <!--end 地图-->

                        </div>
                        <div class="col-sm-3">

                            <!--学生信息-->
                            <div class="box3">

                                <!--header-->
                                <div class="header" style="padding: 0 25px;">
                                    <div class="title">
                                        学生信息
                                    </div>

                                    <div class="row">
                                        <div class="col-12">
                                            <div class="bjjs">
                                                <h3><span></span>&nbsp&nbsp男女比例</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <!--男性-->
                                    <div class="row" style="margin-top: 40px;margin-bottom: 10px;">
                                        <div class="col-sm-5">
                                            <div class="nx">
                                                男性:（23333）
                                            </div>
                                        </div>

                                        <div class="col-sm-5">
                                            <img src="/static/images/lw1.png" alt="">
                                            <img src="/static/images/lw1.png" alt="">
                                            <img src="/static/images/lw1.png" alt="">
                                            <img src="/static/images/lw1_1.png" alt="">
                                            <img src="/static/images/lw1_1.png" alt="">
                                        </div>
                                        <div class="col-sm-2 nxbl">46%</div>
                                    </div>
                                    <!--End 男性-->

                                    <!--女性-->
                                    <div class="row">
                                        <div class="col-sm-5">
                                            <div class="nx">
                                                女性:（23333）
                                            </div>
                                        </div>

                                        <div class="col-sm-5">
                                            <img src="/static/images/vv1.png" alt="">
                                            <img src="/static/images/vv1.png" alt="">
                                            <img src="/static/images/vv1.png" alt="">
                                            <img src="/static/images/lw1_1.png" alt="">
                                            <img src="/static/images/lw1_1.png" alt="">
                                        </div>


                                        <div class="col-sm-2 nxbl">36%</div>
                                    </div>
                                    <!--End 女性-->


                                </div>
                                <!--end header-->

                                <div class="col-12" style="padding: 10px 25px">

                                    <!-- 光影线条 -->
                                    <div class="line_xg00">
                                        <div class="line_xg"></div>
                                    </div>
                                    <!--end 光影线条-->

                                    <!--U圆形百分比-->
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="bjjs">
                                                <h3><span></span>&nbsp&nbsp学生信息</h3>
                                            </div>
                                            <div class="js">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="bg-info" style="padding: 0 18px;">
                                                            <p class=" float-left">宁波效实中学学生：<span>20149</span>人</p>
                                                            <router-link to="#">
                                                                <span class=" float-right">查看学生</span>
                                                            </router-link>

                                                        </div>
                                                    </div>
                                                    <!--U圆形百分比-->
                                                    <div class="bfb">
                                                        <div class="row">
                                                            <div class="col col-md">
                                                                <knob-control
                                                                        :min="0"
                                                                        :max="20149"
                                                                        :size="90"
                                                                        primary-color="#ff990c"
                                                                        secondary-color="#486184"
                                                                        text-color="#fff"
                                                                        v-model="detune"
                                                                ></knob-control>
                                                                <div class="card-body">
                                                                    <p class="card-title">初一学生</p>
                                                                </div>
                                                            </div>

                                                            <div class="col col-md">
                                                                <knob-control
                                                                        :min="0"
                                                                        :max="20149"
                                                                        :size="90"
                                                                        primary-color="#029fec"
                                                                        secondary-color="#486184"
                                                                        text-color="#fff"
                                                                        v-model="detune1"
                                                                ></knob-control>
                                                                <div class="card-body">
                                                                    <p class="card-title">初二学生</p>
                                                                </div>
                                                            </div>

                                                            <div class="col col-md">
                                                                <knob-control
                                                                        :min="0"
                                                                        :max="20149"
                                                                        :size="90"
                                                                        primary-color="#57ca4a"
                                                                        secondary-color="#486184"
                                                                        text-color="#fff"
                                                                        v-model="detune2"
                                                                ></knob-control>
                                                                <div class="card-body">
                                                                    <p class="card-title">初三学生</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <!--end U圆形百分比-->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end U圆形百分比-->
                                </div>


                            </div>
                            <!--End 学生信息-->

                        </div>
                    </div>
                </div>

            </div>
            <!--end 中间-->

            <!--中间2-->
            <div class="zj2">
                <div class="content">
                    <div class="row ">
                        <div class="col-sm-3">
                            <!--学生消费-->
                            <div class="box_1">
                                <div class="header" style="padding: 0 25px;">
                                    <div class="title">
                                        学生消费
                                    </div>
                                </div>
                                <div class="xsxf">
                                    <div class="col-12" style="padding: 10px 25px">
                                        <!--swiper-->
                                        <swiper :options="swiperOption1">
                                            <swiper-slide>
                                                <router-link to="#">
                                                    <figure class="figure">
                                                        <img src="/static/images/ic1.png"
                                                             class="figure-img img-fluid rounded" alt="...">
                                                        <figcaption class="figure-caption">住宿费用</figcaption>
                                                    </figure>
                                                </router-link>
                                            </swiper-slide>

                                            <swiper-slide>
                                                <router-link to="#">
                                                    <figure class="figure">
                                                        <img src="/static/images/ic2.png"
                                                             class="figure-img img-fluid rounded" alt="...">
                                                        <figcaption class="figure-caption">住宿费用</figcaption>
                                                    </figure>
                                                </router-link>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <router-link to="#">
                                                    <figure class="figure">
                                                        <img src="/static/images/ic3.png"
                                                             class="figure-img img-fluid rounded" alt="...">
                                                        <figcaption class="figure-caption">住宿费用</figcaption>
                                                    </figure>
                                                </router-link>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <router-link to="#">
                                                    <figure class="figure">
                                                        <img src="/static/images/ic4.png"
                                                             class="figure-img img-fluid rounded" alt="...">
                                                        <figcaption class="figure-caption">住宿费用</figcaption>
                                                    </figure>
                                                </router-link>
                                            </swiper-slide>


                                        </swiper>
                                        <!--end swiper-->

                                        <!-- 光影线条 -->
                                        <div class="line_xg00">
                                            <div class="line_xg"></div>
                                        </div>
                                        <!--end 光影线条-->

                                    </div>
                                </div>

                            </div>
                            <!--End 学生消费-->

                        </div>

                        <div class="col-sm-3">

                            <!--学生选课-->
                            <div class="box_2">
                                <div class="header" style="padding: 0 25px;">
                                    <div class="title">
                                        学生选课
                                    </div>
                                </div>
                                <div class="kc" style="color: #fff;margin-top: 10px;padding: 10px 20px">
                                    <div class="kc2">
                                        <div class="row">
                                            <div class="col-1"></div>
                                            <div class="col-2">
                                                <div class="kc21">
                                                    <router-link to="#">语文&nbsp&nbsp&nbsp</router-link>
                                                </div>
                                            </div>
                                            <div class="col-2">
                                                <div class="kc21">
                                                    <router-link to="#">数学&nbsp&nbsp&nbsp</router-link>
                                                </div>
                                            </div>
                                            <div class="col-2">
                                                <div class="kc21">
                                                    <router-link to="#">英语&nbsp&nbsp&nbsp</router-link>
                                                </div>
                                            </div>
                                            <div class="col-2">
                                                <div class="kc21">
                                                    <router-link to="#">历史&nbsp&nbsp&nbsp</router-link>
                                                </div>
                                            </div>
                                            <div class="col-2">
                                                <router-link to="#">地理</router-link>
                                            </div>
                                            <div class="col-1"></div>
                                        </div>
                                        <div class="row">
                                            <div class="col-1"></div>
                                            <div class="col-2">
                                                <div class="kc21">
                                                    <router-link to="#">化学&nbsp&nbsp&nbsp</router-link>
                                                </div>
                                            </div>
                                            <div class="col-2">
                                                <div class="kc21">
                                                    <router-link to="#">科技&nbsp&nbsp&nbsp</router-link>
                                                </div>
                                            </div>
                                            <div class="col-2">
                                                <div class="kc21">
                                                    <router-link to="#">生物&nbsp&nbsp&nbsp</router-link>
                                                </div>
                                            </div>
                                            <div class="col-2">
                                                <div class="kc21">
                                                    <router-link to="#">物理&nbsp&nbsp&nbsp</router-link>
                                                </div>
                                            </div>
                                            <div class="col-2">
                                                <router-link to="#">政治</router-link>
                                            </div>
                                            <div class="col-1"></div>
                                        </div>

                                    </div>

                                    <!-- 光影线条 -->
                                    <div class="line_xg00">
                                        <div class="line_xg"></div>
                                    </div>
                                    <!--end 光影线条-->


                                </div>


                            </div>
                            <!--End 学生选课-->

                        </div>
                        <div class="col-sm-3">
                            <!--热门课程-->
                            <div class="box_3">
                                <div class="header" style="padding: 0 25px;">
                                    <div class="title">
                                        热门课程
                                    </div>
                                </div>

                                <div class="rmkc">

                                    <div class="row">
                                        <div class="col">
                                            <li style="list-style: none">
                                                <router-link class="no1" to="#">NO:1</router-link>
                                                <span>科技 ( 998人 )</span></li>
                                        </div>
                                        <div class="col">
                                            <li style="list-style: none">
                                                <router-link class="no2" to="#">NO:2</router-link>
                                                <span>科技 ( 998人 )</span></li>
                                        </div>
                                        <div class="w-100"></div>

                                        <div class="col" style="margin-top: 20px;">
                                            <li style="list-style: none">
                                                <router-link class="no3" to="#">NO:3</router-link>
                                                <span>科技 ( 998人 )</span></li>
                                        </div>
                                        <div class="col" style="margin-top: 20px; margin-bottom: 10px;">
                                            <li style="list-style: none">
                                                <router-link class="no4" to="#">NO:4</router-link>
                                                <span>科技 ( 998人 )</span></li>
                                        </div>
                                    </div>

                                    <!-- 光影线条 -->
                                    <div class="line_xg00">
                                        <div class="line_xg"></div>
                                    </div>
                                    <!--end 光影线条-->

                                </div>


                            </div>
                            <!--End 热门课程-->

                        </div>
                        <div class="col-sm-3">

                            <!--学生考试类型-->
                            <div class="box_4">
                                <div class="header" style="padding: 0 25px;">
                                    <div class="title">
                                        考试类型
                                    </div>
                                </div>
                                <div class="xskslx">
                                    <div class="col-12" style="padding: 10px 25px">
                                        <!--swiper-->
                                        <swiper :options="swiperOption1">
                                            <swiper-slide>
                                                <router-link to="#">
                                                    <figure class="figure">
                                                        <img src="/static/images/ib1.png"
                                                             class="figure-img img-fluid rounded" alt="...">
                                                        <figcaption class="figure-caption">月考</figcaption>
                                                    </figure>
                                                </router-link>
                                            </swiper-slide>

                                            <swiper-slide>
                                                <router-link to="#">
                                                    <figure class="figure">
                                                        <img src="/static/images/ib3.png"
                                                             class="figure-img img-fluid rounded" alt="...">
                                                        <figcaption class="figure-caption">期中考试</figcaption>
                                                    </figure>
                                                </router-link>
                                            </swiper-slide>

                                            <swiper-slide>
                                                <router-link to="#">
                                                    <figure class="figure">
                                                        <img src="/static/images/ib5.png"
                                                             class="figure-img img-fluid rounded" alt="...">
                                                        <figcaption class="figure-caption">期末考试</figcaption>
                                                    </figure>
                                                </router-link>
                                            </swiper-slide>

                                            <swiper-slide>
                                                <router-link to="#">
                                                    <figure class="figure">
                                                        <img src="/static/images/ib5.png"
                                                             class="figure-img img-fluid rounded" alt="...">
                                                        <figcaption class="figure-caption">模拟考试</figcaption>
                                                    </figure>
                                                </router-link>
                                            </swiper-slide>


                                        </swiper>
                                        <!--end swiper-->
                                        <!-- 光影线条 -->
                                        <div class="line_xg00">
                                            <div class="line_xg"></div>
                                        </div>
                                        <!--end 光影线条-->

                                    </div>
                                </div>

                            </div>
                            <!--End 学生考试类型-->

                        </div>
                    </div>
                </div>
            </div>
            <!--end中间2-->

            <!--底部-->
            <div class="footer">
                <div class="content">
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="box_footer_1">
                                <!--名人榜header-->
                                <div class="header" style="padding: 10px 25px;">
                                    <div class="title">
                                        名人榜
                                    </div>
                                    <div class="row align-items-start">

                                        <div class="col">
                                            教师最爱
                                            <p><span class="number_01">465</span> 人</p>

                                        </div>
                                        <div class="col">
                                            人气学生
                                            <p><span class="number_01">203</span> 人</p>
                                        </div>
                                        <div class="col">
                                            班级学霸
                                            <p><span class="number_01">203</span> 人</p>
                                        </div>
                                        <div class="col">
                                            三好学生
                                            <p><span class="number_01">203</span> 人</p>
                                        </div>
                                    </div>
                                </div>
                                <!--end 名人榜header-->

                                <div class="col-12" style="padding: 0 25px">
                                    <!--swiper-->
                                    <swiper :options="swiperOption">
                                        <swiper-slide>
                                            <router-link to="#">
                                                <figure class="figure">
                                                    <img src="/static/images/8.png" class="figure-img img-fluid rounded"
                                                         alt="...">
                                                    <figcaption class="figure-caption">张三</figcaption>
                                                </figure>
                                            </router-link>
                                        </swiper-slide>
                                        <swiper-slide>
                                            <router-link to="#">
                                                <figure class="figure">
                                                    <img src="/static/images/9.png" class="figure-img img-fluid rounded"
                                                         alt="...">
                                                    <figcaption class="figure-caption">李四</figcaption>
                                                </figure>
                                            </router-link>
                                        </swiper-slide>
                                        <swiper-slide>
                                            <router-link to="#">
                                                <figure class="figure">
                                                    <img src="/static/images/6.png" class="figure-img img-fluid rounded"
                                                         alt="...">
                                                    <figcaption class="figure-caption">王二</figcaption>
                                                </figure>
                                            </router-link>
                                        </swiper-slide>
                                        <swiper-slide>
                                            <router-link to="#">
                                                <figure class="figure">
                                                    <img src="/static/images/7.png" class="figure-img img-fluid rounded"
                                                         alt="...">
                                                    <figcaption class="figure-caption">赵後</figcaption>
                                                </figure>
                                            </router-link>
                                        </swiper-slide>

                                    </swiper>


                                    <div class="row">
                                        <div class="col-12">
                                            <div class="ckxx">
                                                <router-link to="#">
                                                    点击查看学校名人
                                                </router-link>

                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="box_footer_2">
                                <div class="header" style="padding: 10px 25px;">
                                    <div class="title">
                                        考勤类型
                                    </div>

                                    <!--考勤排版-->
                                    <div class="row">
                                        <div class="col">
                                            <div class="kk">旷课</div>
                                            <div class="red"></div>
                                            <div class="bj">4个班</div>
                                            <div class="bfbl">30%</div>
                                        </div>
                                        <div class="col">
                                            <div class="cd">迟到</div>
                                            <div class="yellow"></div>
                                            <div class="bj">5个班</div>
                                            <div class="bfbl">20%</div>
                                        </div>
                                        <div class="col">
                                            <div class="zt">早退</div>
                                            <div class="blue"></div>
                                            <div class="bj">2个班</div>
                                            <div class="bfbl">10%</div>
                                        </div>
                                        <div class="col">
                                            <div class="qj">请假</div>
                                            <div class="green"></div>
                                            <div class="bj">1个班</div>
                                            <div class="bfbl">20%</div>
                                        </div>

                                    </div>
                                    <!--End 考勤排版-->
                                    <!-- swiper -->
                                    <div class="jdt">
                                        <swiper :options="swiperOptionkq">
                                            <swiper-slide>
                                                <div class="row">
                                                    <div class="nj" style="padding: 0 15px;">初一</div>
                                                    <div class="col">
                                                        <div class="progress">
                                                            <div class="progress-bar aa" role="progressbar"
                                                                 style="width: 50%;background-color: #FC4740;"
                                                                 aria-valuenow="50" aria-valuemin="0"
                                                                 aria-valuemax="100"></div>
                                                            <div class="progress-bar bb" role="progressbar"
                                                                 style="width: 10%;background-color: #FFC200;"
                                                                 aria-valuenow="10" aria-valuemin="0"
                                                                 aria-valuemax="100"></div>
                                                            <div class="progress-bar" role="progressbar"
                                                                 style="width: 15%;background-color: #009FEC;"
                                                                 aria-valuenow="15" aria-valuemin="0"
                                                                 aria-valuemax="100"></div>
                                                            <div class="progress-bar" role="progressbar"
                                                                 style="width: 15%;background-color: #57CA4A;"
                                                                 aria-valuenow="15" aria-valuemin="0"
                                                                 aria-valuemax="100"></div>
                                                        </div>
                                                        <div class="qjrs">
                                                            <div class="row">
                                                                <div class="col-3">
                                                                    <p class="kkrs">旷课<span class="sl">30人</span></p>
                                                                </div>
                                                                <div class="col-3">
                                                                    <p class="cdrs">迟到<span>26人</span></p>
                                                                </div>
                                                                <div class="col-3 ztrs">
                                                                    <p class="ztrs">早退<span>23人</span></p>
                                                                </div>
                                                                <div class="col-3">
                                                                    <p class="qjrs1">请假<span>24人</span></p>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>

                                                </div>

                                            </swiper-slide>
                                            <swiper-slide>
                                                <div class="row">
                                                    <div class="nj" style="padding: 0 15px;">初二</div>
                                                    <div class="col">
                                                        <div class="progress">
                                                            <div class="progress-bar aa" role="progressbar"
                                                                 style="width: 50%;background-color: #FC4740;"
                                                                 aria-valuenow="50" aria-valuemin="0"
                                                                 aria-valuemax="100"></div>
                                                            <div class="progress-bar bb" role="progressbar"
                                                                 style="width: 10%;background-color: #FFC200;"
                                                                 aria-valuenow="10" aria-valuemin="0"
                                                                 aria-valuemax="100"></div>
                                                            <div class="progress-bar" role="progressbar"
                                                                 style="width: 15%;background-color: #009FEC;"
                                                                 aria-valuenow="15" aria-valuemin="0"
                                                                 aria-valuemax="100"></div>
                                                            <div class="progress-bar" role="progressbar"
                                                                 style="width: 15%;background-color: #57CA4A;"
                                                                 aria-valuenow="15" aria-valuemin="0"
                                                                 aria-valuemax="100"></div>
                                                        </div>
                                                        <div class="qjrs">
                                                            <div class="row">
                                                                <div class="col-3">
                                                                    <p class="kkrs">旷课<span class="sl">30人</span></p>
                                                                </div>
                                                                <div class="col-3">
                                                                    <p class="cdrs">迟到<span>26人</span></p>
                                                                </div>
                                                                <div class="col-3 ztrs">
                                                                    <p class="ztrs">早退<span>23人</span></p>
                                                                </div>
                                                                <div class="col-3">
                                                                    <p class="qjrs1">请假<span>24人</span></p>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>

                                                </div>

                                            </swiper-slide>
                                        </swiper>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="box_footer_3">
                                <div class="header" style="padding: 10px 25px;">
                                    <div class="title">
                                        学生成绩
                                    </div>
                                    <!--学生成绩柱状图-->
                                    <div class="row">
                                        <div class="col">
                                            <div class="xscj">
                                                <ve-histogram :data="chartData" width="auto"
                                                              height="280px"></ve-histogram>
                                            </div>
                                        </div>
                                    </div>
                                    <!--End 学生成绩柱状图-->
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <!--班级排名-->
                            <div class="box_footer_4">
                                <div class="header" style="padding: 10px 25px;">
                                    <div class="title">
                                        班级排名
                                    </div>
                                </div>

                                <div class="bjpm">
                                    <div class="row">
                                        <div class="col">
                                            <li style="list-style: none">
                                                <router-link class="no1" to="#">NO:1</router-link>
                                                <span>白一高三(5)班</span></li>
                                        </div>
                                        <div class="col">
                                            <li style="list-style: none">
                                                <router-link class="no2" to="#">NO:2</router-link>
                                                <span>白一高三(5)班</span></li>
                                        </div>
                                        <div class="w-100"></div>
                                        <div class="col" style="margin-top: 28px;">
                                            <li style="list-style: none">
                                                <router-link class="no3" to="#">NO:3</router-link>
                                                <span>白一高三(5)班</span></li>
                                        </div>
                                        <div class="col" style="margin-top: 28px; margin-bottom: 10px;">
                                            <li style="list-style: none">
                                                <router-link class="no4" to="#">NO:4</router-link>
                                                <span>白一高三(5)班</span></li>
                                        </div>
                                        <div class="w-100"></div>
                                        <div class="col" style="margin-top: 28px;">
                                            <li style="list-style: none">
                                                <router-link class="no5" to="#">NO:5</router-link>
                                                <span>白一高三(5)班</span></li>
                                        </div>
                                        <div class="col" style="margin-top: 28px; margin-bottom: 10px;">
                                            <li style="list-style: none">
                                                <router-link class="no6" to="#">NO:6</router-link>
                                                <span>白一高三(5)班</span></li>
                                        </div>
                                    </div>

                                </div>


                                <div class="row">
                                    <div class="col">
                                        <div class="ckxx">
                                            <router-link to="#">
                                                点击查看班级排名
                                            </router-link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--End 班级排名-->

                        </div>
                    </div>
                </div>
            </div>
            <!--end底部-->

        </div>
        <!--end body-->
    </div>
</template>

<script>
    /*圆形百分比*/
    import VueCircle from 'vue2-circle-progress'
    /*圆形百分比*/

    /*柱状图*/
    import VeHistogram from 'v-charts/lib/histogram.common'

    export default {

        name: "Index",
        data() {
            return {
                /*学生信息U圆形百分比*/
                detune: '14721',
                detune1: '15721',
                detune2: '16721',
                /*学生信息U圆形百分比*/

                /*学生成绩柱状图*/
                chartData: {
                    columns: ['班级', '初一年级', '初二年级', '初三年级'],
                    rows: [
                        {'班级': '白杨(1)班', '初一年级': 1393, '初二年级': 1093, '初三年级': 2500},
                        {'班级': '白杨(2)班', '初一年级': 3530, '初二年级': 3230, '初三年级': 2500},
                        {'班级': '白杨(3)班', '初一年级': 2923, '初二年级': 2623, '初三年级': 2500},


                    ]
                },
                /*End 学生成绩柱状图*/


                /*圆形百分比*/
                fill: {gradient: ["#57ca4a", "#56b26c", "#5486ac"]},
                fill1: {gradient: ["#ff970e", "#ff6339", "#ff375d"]},
                fill2: {gradient: ["#05c8f4", "#2385d0", "#208fd5"]},
                /*圆形百分比*/


                /*教师信息头像*/
                swiperOption: {
                    slidesPerView: 4,
                    spaceBetween: 0,

                    slidesPerGroup: 1,
                    loop: true,
                    loopFillGroupWithBlank: true,

                    /* centeredSlides: true,*/
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
                },
                /*教师信息头像*/


                /*学生消费*/
                swiperOption1: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                    slidesPerGroup: 1,
                    loop: true,
                    loopFillGroupWithBlank: true,


                    autoplay: {
                        delay: 3000,
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
                },
                /*学生消费*/


                /*地图*/
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
                },
                /*end 地图*/


                /*考勤类型--进度条*/
                swiperOptionkq: {

                    direction: 'vertical',

                    autoplay: {
                        delay: 6500,
                        disableOnInteraction: false
                    },

                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                }
                /*end 考勤类型--进度条*/

            }
        },
        /*圆形百分比*/
        methods: {
            progress(event, progress, stepValue) {
                console.log(stepValue);
            },
            progress_end(event) {
                console.log("Circle progress end");
            }
        },
        /*圆形百分比*/

        /*圆形百分比*/
        components: {
            VueCircle, VeHistogram
        },
        /*圆形百分比*/
    }
</script>

<style scoped>

    /*---- Header -----*/
    .container-fluid {
        margin: 0;
        padding: 0;
        font-size: 14px;
        overflow: hidden;
        background: #0A0E27;


    }

    .nav.rait_l {
        height: 66px;
        width: auto;
        margin: -66px 0 0 40px;
        padding: 5px 10px;
        /* background: url("/static/images/top_ts_l.png") no-repeat;*/

    }

    .sis01 {
        width: 40px;
        height: 20px;
        margin-top: 15px;
        margin-right: 10px;
        float: left;
        /* border-right: 1px solid #222B60;*/
    }

    .sis01 img {
        float: left;
        position: relative;
        z-index: 8;

    }

    .sis01 span {
        position: relative;
        z-index: 9;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #f00;
        display: block;
        margin-left: 16px;
    }

    .sis02 {
        width: 40px;
        height: 20px;
        margin-top: 15px;
        margin-right: 10px;
        float: left;
        /* border-right: 1px solid #222B60;*/
    }

    .sis02 img {
        float: left;
        position: relative;
        z-index: 8;

    }

    .sis02 span {
        position: relative;
        z-index: 9;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #f00;
        display: block;
        margin-left: 16px;
    }

    .rait_r {
        width: 660px;
        height: 66px;
        position: relative;
        right: 70px;
        top: -66px;
        float: right;
        /*background: url("/static/images/top_ts_r.png") no-repeat;*/
        padding: 10px;
    }

    .rait_r li a {
        color: white;
    }

    /*----End  Header -----*/


    /*---- 整体左右间距 -----*/

    [class*="col-"] {
        padding: 6px;
    }

    /*----End 整体左右间距 -----*/


    /*---- 中间1 -----*/
    .zj {
        text-align: center;
        margin: -60px 40px;

    }

    .box1 {
        background-color: #0D1338;
        height: 485px;

    }

    .box2 {
        background-color: #ffeb59;
        height: 485px;

    }

    .box3 {
        background-color: #0D1338;
        height: 485px;

    }

    /*----教师信息------*/
    .zj .box1 .title {
        padding-top: 18px;
        text-align: center;
        line-height: 22px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 18px;
    }

    /*----End 教师信息---*/

    /*----学生信息------*/
    .zj .box3 .title {
        padding-top: 18px;
        text-align: center;
        line-height: 22px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 18px;
    }

    .zj .box3 .nx {
        color: #fff;
    }

    .zj .box3 img {
        padding: 0 3px 0 4px;
    }

    .zj .box3 .nxbl {
        color: #fff;
    }

    /*-----End 学生信息----*/
    .align-items-start .col {
        padding: 0 10px 0 5px;
        margin-top: 10px;
        font-size: 12px;
        line-height: 18px;
        color: #fff;
        margin-bottom: 5px;

        border-right: 1px solid #222B60;

    }

    /*div最后一个*/
    .align-items-start .col:last-child {
        border-right: none;
    }

    .align-items-start .col p span {
        font-size: 16px !important;
        color: #FFC200;
        font-weight: bold;
    }

    /*----End 中间1 -----*/


    /*---- 中间2 -----*/
    .zj2 {
        text-align: center;
        margin: 60px 40px;
    }

    .box_1 {
        background-color: #0D1338;
        height: 170px;

    }

    .box_2 {
        background-color: #0D1338;
        height: 170px;


    }

    .box_3 {
        background-color: #0D1338;
        height: 170px;


    }

    .box_4 {
        background-color: #0D1338;
        height: 170px;

    }

    .zj2 .line_xg00 {
        margin-top: 8px;
    }

    .zj2 .box_2 .line_xg00 {
        margin-top: 14px;
    }

    /*----End 中间2 -----*/


    /*----学生选课-----*/
    .box_2 .title {
        padding-top: 18px;
        text-align: center;
        line-height: 22px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;

    }

    .box_2 .kc .kc2 a {
        text-decoration: none;
        color: #fff;
    }

    .box_2 .kc .kc2 a:hover {
        color: #FFC200;
    }

    .box_2 .kc .kc2 .col-2 .kc21 {
        border-right: 1px solid #222B60;
    }

    /*-----End 学生选课---*/


    /*----热门课程-----*/
    .box_3 .title {
        padding-top: 18px;
        text-align: center;
        line-height: 22px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
    }

    .box_3 .rmkc {
        margin-top: 22px;
        padding: 0 20px;


    }

    .box_3 .rmkc li a:hover {
        color: #FFC200;
        text-decoration: none;
    }

    .box_3 .rmkc li span:hover {
        color: #FFC200;
        text-decoration: none;
    }

    .box_3 .rmkc .no1 {
        color: #ffff;
        font-size: 10px;
        background: url(/static/images/no1.png) no-repeat !important;
    }

    .box_3 .rmkc span {
        margin: 0 0 0 5px;
        font-size: 14px;
        color: #fff;
    }

    .box_3 .rmkc .no2 {
        color: #ffff;
        font-size: 10px;
        background: url(/static/images/no2.png) no-repeat !important;
    }

    .box_3 .rmkc .no3 {
        color: #ffff;
        font-size: 10px;
        background: url(/static/images/no3.png) no-repeat !important;
    }

    .box_3 .rmkc .no4 {
        color: #ffff;
        font-size: 10px;
        background: url(/static/images/no4.png) no-repeat !important;
    }

    /*-----End 热门课程---*/


    /*---- 底部footer-----*/
    .footer {
        text-align: center;
        margin: -60px 40px;

    }

    /*---- 名人榜 ----*/
    .box_footer_1 {
        background-color: #0D1338;
        height: 320px;


    }

    .box_footer_1 .title {
        text-align: center;
        line-height: 22px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 5px;

    }

    .box_footer_1 .ckxx a {

        color: #929292;
        font-size: 14px;
        line-height: 40px;
        text-decoration: none
    }

    .box_footer_1 .ckxx a:hover {
        color: #FFC200;

    }

    /*----End 名人榜 ----*/


    /*---- 考勤类型 ----*/
    .box_footer_2 {
        background-color: #0D1338;
        height: 320px;

    }

    .box_footer_2 .title {
        text-align: center;
        line-height: 22px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 5px;

    }

    .box_footer_2 .row {
        margin-top: 16px;
        color: #fff;
    }

    .box_footer_2 .row .bj {
        margin-top: 10px;
    }

    .box_footer_2 .row .bfbl {
        margin-top: 10px;


    }

    .box_footer_2 .nj {
        margin-top: 30px;
        line-height: 10px;
    }

    .box_footer_2 .progress {
        margin-top: 30px;
        height: 10px;

    }

    .box_footer_2 .row .red {
        margin-top: 5px;
        width: 100%;
        height: 10px;
        border-radius: 5px;
        background: #FC4740;
    }

    .box_footer_2 .row .yellow {
        margin-top: 5px;
        width: 100%;
        height: 10px;
        border-radius: 5px;
        background: #FFC200;
    }

    .box_footer_2 .row .blue {
        margin-top: 5px;
        width: 100%;
        height: 10px;
        border-radius: 5px;
        background: #009FEC;
    }

    .box_footer_2 .row .green {
        margin-top: 5px;
        width: 100%;
        height: 10px;
        border-radius: 5px;
        background: #57CA4A;
    }

    .box_footer_2 .progress .aa {
        animation: progress 5s;
    }

    @keyframes progress {
        from {
            width: 0%;
        }
        to {
            width: 50%;
        }
    }

    .box_footer_2 .qjrs {
        font-size: 10px;
    }

    .box_footer_2 .qjrs .kkrs {
        color: #FC4740;
    }

    .box_footer_2 .qjrs .cdrs {
        color: #FFC200;
    }

    .box_footer_2 .qjrs .ztrs {
        color: #009FEC;
    }

    .box_footer_2 .qjrs .qjrs1 {
        color: #57CA4A;
    }

    .box_footer_2 .qjrs span {
        color: #fff;
    }


    /*----End 考勤类型 ----*/


    /*---- 学生成绩 ----*/
    .box_footer_3 {
        background-color: #0D1338;
        height: 320px;

    }

    .box_footer_3 .title {
        text-align: center;
        line-height: 22px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 5px;
    }

    /*----End 学生成绩 ----*/


    /*---- 班级排名 ----*/
    .box_footer_4 {
        background-color: #0D1338;
        height: 320px;

    }

    .box_footer_4 .title {
        text-align: center;
        line-height: 22px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;

    }

    .box_footer_4 .bjpm {
        margin-top: 22px;
        padding: 0 20px;

    }

    .box_footer_4 .bjpm li a:hover {
        color: #FFC200;
        text-decoration: none;
    }

    .box_footer_4 .bjpmli span:hover {
        color: #FFC200;
        text-decoration: none;
    }

    .box_footer_4 .bjpm .no1 {
        color: #ffff;
        font-size: 10px;
        background: url(/static/images/no1.png) no-repeat !important;
    }

    .box_footer_4 .bjpm span {
        margin: 0 0 0 5px;
        font-size: 14px;
        color: #fff;
    }

    .box_footer_4 .bjpm .no2 {
        color: #ffff;
        font-size: 10px;
        background: url(/static/images/no2.png) no-repeat !important;
    }

    .box_footer_4 .bjpm .no3 {
        color: #ffff;
        font-size: 10px;
        background: url(/static/images/no3.png) no-repeat !important;
    }

    .box_footer_4 .bjpm .no4 {
        color: #ffff;
        font-size: 10px;
        background: url(/static/images/no4.png) no-repeat !important;
    }

    .box_footer_4 .bjpm .no5 {
        color: #ffff;
        font-size: 10px;
        background: url(/static/images/no4.png) no-repeat !important;
    }

    .box_footer_4 .bjpm .no6 {
        color: #ffff;
        font-size: 10px;
        background: url(/static/images/no4.png) no-repeat !important;
    }

    .box_footer_4 .ckxx a {
        color: #929292;
        font-size: 14px;
        line-height: 60px;
        text-decoration: none
    }

    .box_footer_4 .ckxx a:hover {
        color: #FFC200;

    }

    .box_footer_4 .bjpm li a:hover {
        color: #FFC200;
        text-decoration: none;
    }

    .box_footer_4 .bjpm li span:hover {
        color: #FFC200;
        text-decoration: none;
    }

    /*----End 班级排名 ----*/


    /*----End 底部footer-----*/


    /*----光影线条-----*/
    .line_xg00 {
        width: auto;
        height: 2px;
        margin-top: -10px;
        margin-bottom: 25px;
        background: #192152;
        overflow: hidden;
        align-content: center;
    }

    /*----End 光影线条---*/


    /*----班级教师-----=*/
    .bjjs h3 {
        color: #3F9BFD;
        font-size: 16px;
        text-align: left;
        margin: -10px 0;
    }

    .bjjs span {
        width: 4px;
        height: 14px;
        float: left;
        background: #3F9BFD;
        margin: 0 0 0 10px;
    }

    .js {
        line-height: 22px;
        font-size: 14px;
        color: #fff;
        margin-top: 15px;

    }

    .js p span {
        font-size: 16px;
        color: #FFC200;
        font-weight: 600;
    }

    .js a {

        color: #ffffff;
        font-size: 14px;
        text-decoration: none;
    }

    .js a:hover {
        color: #FFC200;
    }

    /*----End 班级教师-----=*/

    /*---百分比----*/
    .bfb {
        margin: auto;
    }

    /*---End 百分比----*/


    /*----学生消费------*/
    .zj2 .box_1 .title {
        padding-top: 18px;
        text-align: center;
        line-height: 22px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;

    }

    .zj2 .box_1 .xsxf {
        margin-top: 10px;
        height: 103px;
        text-align: center;

    }

    .zj2 .box_1 .xsxf img {
        height: 30px;
        width: 28px;
    }

    /*----End 学生消费---*/


    /*----学生考试类型---*/
    .zj2 .box_4 .title {
        padding-top: 18px;
        text-align: center;
        line-height: 22px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;

    }

    .zj2 .box_4 .xskslx {
        margin-top: 10px;
        height: 103px;
        text-align: center;

    }

    .zj2 .box_4 .xskslx img {
        height: 30px;
        width: 28px;
    }

    /*----End 学生考试类型---*/

    /*---详细信息----*/
    .map{
        margin:0px auto;
        width:auto;
        height:485px ;
        padding: 40px;
        background-color: #fff;

    }

    #div2 {
        padding: 30px 20px;
        height:410px;
        background-color: #192152;
        color: #fff;
    }

    /*---end 详细信息------*/


    /*----min是>=   max是<等于  高级的混合应用 ----*/
    /*大于1200px*/
    @media screen and (max-width: 768px) {
        .zj {
            text-align: center;
            margin: 0 auto;

        }

        .zj2 {
            text-align: center;
            margin: 0 auto;
        }

        .footer {
            text-align: center;
            margin: 0 auto;
        }

        .box_3 .noe .ruyt {
            width: 350px;
            height: 63px;
            margin: 0 0 0 -20px;


        }

        .box_footer_4 .noe .ruyt {
            width: 350px;
            height: 63px;
            margin: 0 0 0 -20px;


        }
        .box_footer_1{
            margin: 0 auto;
        }


        /*---详细信息----*/
        .map{
            margin:0px auto;
            width:auto;
            height:485px ;
            padding: 0;
            background-color: #fff;
        }

        #div2 {
            padding: 10px 20px;
            height:485px;
            background-color: #0A0E27;
            color: #fff;
            border-right: 1px solid #222B60;
        }

        /*---end 详细信息------*/

    }


</style>
