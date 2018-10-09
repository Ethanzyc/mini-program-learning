const http = require('http');

http.createServer((req,res)=>{
  res.write(JSON.stringify({
    "merchantId": "305611750754488320",
    "merchantName": "瑜伽-权益专用1",
    "merchantLogo": "300000.jpg",
    "businessCategory": "瑜伽会所",
    "introduce": "瑜伽（Yoga）是一个通过提升意识，帮助人类充分发挥潜能的体系。瑜伽姿势运用古老而易于掌握的技巧，改善人们生理、心理、情感和精神方面的能力，是一种达到身体、心灵与精神和谐统一的运动方式。",
    "servicePhone": "132111111111111",
    "merchantImages": [
      "http://resfco.raiyee.cn/fco-images/prod/merchant_img/304558083886075904.jpeg",
      "http://resfco.raiyee.cn/fco-images/prod/merchant_img/304558083886075904.jpeg",
      "http://resfco.raiyee.cn/fco-images/prod/merchant_img/304558083886075904.jpeg",
      "http://resfco.raiyee.cn/fco-images/prod/merchant_img/304558083886075904.jpeg"
    ],
    "shops": [
      {
        "shopId": "305611790384369664",
        "shopName": "瑜伽门店",
        "provinceCode": "530000",
        "cityCode": "530100",
        "districtCode": "530102",
        "address": "云南省昆明市五华区集庆门大街",
        "longitude": 102.84288883209229,
        "latitude": 24.892693954371616
      }
    ],
    "officialName": "瑜伽SaaS",
    "officialPropagation": "公众号宣传语",
    "qrCodeImg": "307283631074758656.png"
  }));
  res.end();
}).listen(8081);