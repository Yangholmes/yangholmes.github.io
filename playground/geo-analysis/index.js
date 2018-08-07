/**
 * 地理信息查询
 * 支持
 * 地点 -> 坐标
 * 坐标 -> 地点
 * 查询
 * 使用 百度地图 数据
 * @file index.js
 * @author Yangholmes
 */

// 地图模块
let bdmap = {
    template: '#bd-map',
    data() {
        return {
            id: 'bd-map-' + (Math.random() * 10000).toFixed(0),
            map: {}
        };
    },
    mounted() {
        this.init();
        this.jet();
    },
    methods: {
        init() {
            let map = new BMap.Map(this.id);
            map.centerAndZoom(new BMap.Point(116.630076, 23.661812), 9);
            map.enableScrollWheelZoom(true);
            this.map = map;
        },
        jet() {
            this.$emit('map-init', this.map);
        }
    }
};

// 地址-位置模块
let addrcor = {
    template: '#addr-cor',
    props: ['map'],
    computed: {
        geo() {
            return new BMap.Geocoder();
        }
    },
    data() {
        return {
            addrs: '梅州市\n潮州市\n揭阳市\n汕头市\n汕尾市',
            cors: []
        };
    },
    methods: {
        onAddr2Cor() {
            let addrArr = this.addrs.split('\n');
            this.cors = [];
            this.map.clearOverlays(); // 清空覆盖物
            addrArr.forEach(e => {
                this.geo.getPoint(e, point => {
                    point && this.cors.push(point.lng + ', ' + point.lat);
                    this.$emit('add-marker', point);
                });
            });
        }
    }
};

// 位置-地址模块
let coraddr = {
    template: '#cor-addr',
    props: ['map'],
    computed: {
        geo() {
            return new BMap.Geocoder();
        }
    },
    data() {
        return {
            cors: '',
            addrs: []
        };
    },
    methods: {
        onCor2Addr() {
            let corArr = this.cors.split('\n');
            this.addrs = [];
            this.map.clearOverlays(); // 清空覆盖物
            corArr.forEach(e => {
                let point = e.split(',');
                this.geo.getLocation(new BMap.Point(point[0], point[1]), location => {
                    console.log(location);
                    location && this.addrs.push(location.address);
                    this.$emit('add-marker', {lng: point[0], lat: point[1]});
                });
            });
        }
    }
};

const geo = new Vue({
    el: '#geo',
    components: {
        bdmap,
        addrcor,
        coraddr
    },
    data() {
        return {
            map: {}
        };
    },
    mounted() {

    },
    methods: {
        onMapInit(map) {
            this.map = map;
            console.log(map);
        },
        addMarker(point) {
            let marker = new BMap.Marker(point);
            this.map.addOverlay(marker);
        }
    }
});
