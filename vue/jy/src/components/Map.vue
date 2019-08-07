<template>
    <!--地图与联系-->
    <div class="map">

        <div class="row">

            <div class="col-sm-6 col-md-12">
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

        </div>

    </div>
    <!--end 地图与联系-->
</template>

<script>
    export default {
        name: "Map",
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
    }
</script>




<style scoped>
    .amap-page-container{
        height: 300px;
    }
</style>