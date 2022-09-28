# vue + lealeft + esri-lealeft + leaflet.markercluster 实现聚合
![](/images/lealeft1.png)
## 一、安装vue环境（vue-cli）

## 二、安装leaflet包
- 1.npm install leaflet
- 2.npm install esri-leaflet --save
- 3.npm install proj4 --save
- 4.npm  install proj4leaflet --save
- 5.npm install leaflet.markercluster --save （聚合包）

## 三、加载地图数据
1.打开需要加载的服务，记下红线中的数据

![](/images/lealeft2.png)

2.将不同等级的Resolution拷下来放进数组里面
``` json
var res=[
	0.703125, // Level 0
	0.3515625, // Level 1
	0.17578125, // Level 2
	0.087890625, // Level 3
	0.0439453125, // Level 4
	0.02197265625,
	0.010986328125,
	0.0054931640625,
	0.00274658203125,
	0.001373291015625,
	6.866455078125E-4,
	3.4332275390625E-4,
	1.71661376953125E-4,
	8.58306884765625E-5,
	4.291534423828125E-5,
	2.1457672119140625E-5,
	1.0728836059570312E-5,
	5.364418029785156E-6,
	2.682209014892578E-6,
	1.341104507446289E-6
];
```

3.进入http://spatialreference.org/ref/sr-org/ || https://epsg.io/4490搜索你的空间参考系，找到相应的参考系，点击去，点击Proj4得到字符串

![](/images/lealeft3.png)
## 四、完整代码
```js
	import L from "leaflet"
	import 'leaflet/dist/leaflet.css'
	require('proj4')
	require('proj4leaflet')
	let esri = require('esri-leaflet')
	import "leaflet.markercluster/dist/MarkerCluster.css"
	import "leaflet.markercluster/dist/MarkerCluster.Default.css"
	import "leaflet.markercluster"
	//解决默认图标加载不出来问题
	import icon from "@/views/image/camera1.png";
	import iconShadow from "leaflet/dist/images/marker-shadow.png";
	let DefaultIcon = L.icon({
	  iconUrl: icon,
	  shadowUrl: iconShadow,
	  iconSize:[32, 52],
	});
	L.Marker.prototype.options.icon = DefaultIcon;
	
	export default {
	    name: 'lealeft',
	    data() {
	        return {
	            LineLayer:""
	        }
	    },
	    mounted() {
	        this.initLeaflet()
	    },
	    methods:{
	        initLeaflet() {
	            let res=[
	                1.4078260157100582, // Level 0
	                0.7031250000000002, // Level 1
	                0.3515625000000001, // Level 2
	                0.17578125000000006, // Level 3
	                0.08789062500000003, // Level 4
	                0.043945312500000014,
	                0.021972656250000007,
	                0.010986328125000003,
	                0.005493164062500002,
	                0.002746582031250001,
	                0.0013732910156250004,
	                6.866455078125002E-4,
	                3.433227539062501E-4,
	                1.7166137695312505E-4,
	                8.583068847656253E-5,
	                4.2915344238281264E-5,
	                2.1457672119140632E-5,
	                1.0728836059570316E-5,
	                5.364418029785158E-6,
	                2.682209014892579E-6,
	                1.3411045074462895E-6
	            ];
	            let crs = new L.Proj.CRS("EPSG:4490","+proj=longlat +ellps=GRS80 +no_defs",
	            {
	                resolutions: res,
	                origin: [-180,90],
	            });
	
	            let baselayer = esri.tiledMapLayer({url: "http://2.82.6.24:6080/arcgis/rest/services/SYZLXDH/DT_LH5/MapServer"});
	//http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer
	            let map = L.map('map', {
	                center: new L.LatLng(32,121),
	                zoom: 10,
	                minZoom:9,
	                crs: crs,
	                layers: [baselayer]
	            });
	  //加载聚合点位
	            let markers = L.markerClusterGroup();
	            let addressPoints = [
	                [31.985961, 120.901223, "9"],
	                [32.01962665, 121.0216431667, "22A"],
	                [31.9192782833, 121.2209942, "28"],
	                [31.9208129833, 121.2209176833, "83A"],
	                [31.9206351167, 121.2209705667, "83"],
	                [32.1203109333, 121.2212402667, "84"],
	                [32.11909575, 121.22139795, "23"],
	                [32.1197787167, 121.2228814, "12"],
	                [32.3195628333, 121.21791605, "57A"],
	                [32.4, 121, "8"],
	                [31.985961, 120.901223, "9"],
	            ];
	            for (var i = 0; i < addressPoints.length; i++) {
	                var a = addressPoints[i];
	                var title = a[2];
	                var marker = L.marker(new L.LatLng(a[0], a[1]), { data: a});
	                marker.bindPopup(title);
	                markers.addLayer(marker);
	            }
	            map.addLayer(markers);
	            //加载特殊图层，我这边加载的是网格图层               
	            let LineLayer = esri.featureLayer({
	                url: 'http://2.82.6.24:6080/arcgis/rest/services/SYZLXDH/ZFW_ZZWG/MapServer/0',
	                style: (feature)=> {
	                    let fill = false
	                    if(feature.properties.wgbm === "682101025003") {
	                        fill = true
	                    }
	                    return { color: '#0cd2dd', opacity: 1, weight: 0.5,fill:fill,fillColor:"#ff0000",fillOpacity:0.7};
	                }
	            }).addTo(map);
	  //点点击事件
	            markers.on("click",(e)=>{
	                console.log(LineLayer)
	                LineLayer.remove()
	                // map.setView([32.1197787167, 121.2228814], 15);
	            })              
	        }
	    }
	}
```