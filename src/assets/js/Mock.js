const express = require('express');   //引入express
const Mock = require('mockjs');       //引入mock

const port = '3001'
let app = express();
const Random = Mock.Random;
//取随机数值
function randomData() {  
    return Math.round(Math.random()*500);  
} 
//允许所有的请求方式
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//中国地图数据接口
// Mock.mock('/api/MapData',
//     {status:200,msg:[  
//         {name: '北京',value: '100' },{name: '天津',value: randomData() },  
//         {name: '上海',value: randomData() },{name: '重庆',value: randomData() },  
//         {name: '河北',value: randomData() },{name: '河南',value: randomData() },  
//         {name: '云南',value: randomData() },{name: '辽宁',value: randomData() },  
//         {name: '黑龙江',value: randomData() },{name: '湖南',value: randomData() },  
//         {name: '安徽',value: randomData() },{name: '山东',value: randomData() },  
//         {name: '新疆',value: randomData() },{name: '江苏',value: randomData() },  
//         {name: '浙江',value: randomData() },{name: '江西',value: randomData() },  
//         {name: '湖北',value: randomData() },{name: '广西',value: randomData() },  
//         {name: '甘肃',value: randomData() },{name: '山西',value: randomData() },  
//         {name: '内蒙古',value: randomData() },{name: '陕西',value: randomData() },  
//         {name: '吉林',value: randomData() },{name: '福建',value: randomData() },  
//         {name: '贵州',value: randomData() },{name: '广东',value: randomData() },  
//         {name: '青海',value: randomData() },{name: '西藏',value: randomData() },  
//         {name: '四川',value: randomData() },{name: '宁夏',value: randomData() },  
//         {name: '海南',value: randomData() },{name: '台湾',value: randomData() },  
//         {name: '香港',value: randomData() },{name: '澳门',value: randomData() }  
//     ]}
// )
app.post("/api/MapData",function(req,res){
    console.log(req)
    debugger
    res.send({status:200,msg:[  
        {name: '北京',value: '100' },{name: '天津',value: randomData() },  
        {name: '上海',value: randomData() },{name: '重庆',value: randomData() },  
        {name: '河北',value: randomData() },{name: '河南',value: randomData() },  
        {name: '云南',value: randomData() },{name: '辽宁',value: randomData() },  
        {name: '黑龙江',value: randomData() },{name: '湖南',value: randomData() },  
        {name: '安徽',value: randomData() },{name: '山东',value: randomData() },  
        {name: '新疆',value: randomData() },{name: '江苏',value: randomData() },  
        {name: '浙江',value: randomData() },{name: '江西',value: randomData() },  
        {name: '湖北',value: randomData() },{name: '广西',value: randomData() },  
        {name: '甘肃',value: randomData() },{name: '山西',value: randomData() },  
        {name: '内蒙古',value: randomData() },{name: '陕西',value: randomData() },  
        {name: '吉林',value: randomData() },{name: '福建',value: randomData() },  
        {name: '贵州',value: randomData() },{name: '广东',value: randomData() },  
        {name: '青海',value: randomData() },{name: '西藏',value: randomData() },  
        {name: '四川',value: randomData() },{name: '宁夏',value: randomData() },  
        {name: '海南',value: randomData() },{name: '台湾',value: randomData() },  
        {name: '香港',value: randomData() },{name: '澳门',value: randomData() }  
    ]})
})

app.listen(port, () => {
    console.log('监听端口 ' + port)
})
