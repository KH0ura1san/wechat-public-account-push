/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
    USE_PASSAGE: 'push-deer',
    "IS_SHOW_COLOR":true,
    "USERS":[
      {
        "name":"佳宏宝儿","id":"85f709eedc7c84bbd7cc112c95e576ff",
        "useTemplateId":"0001",
        "province":"浙江",
        "city":"湖州",
        "horoscopeDate":"01-10",
        "horoscopeDateType":"今日",
        "openUrl":"https://shuangxunian.github.io/",
        "festivals":[
          {"type":"生日","name":"宝儿的生日","date":"01-10","year":"2001"},
          {"type":"节日","name":"恋爱纪念日","date":"02-28","year":"2021"},
          {"type":"节日","name":"相识纪念日","date":"11-03","year":"2020"}
        ],
        customizedDateList: [
          // 在一起的日子
          { keyword: 'love_day', date: '2021-02-28' },
        ],
      "SWITCH":
        {"weather":true,
         "holidaytts":true,
         "CIBA":false,
         "oneTalk":false,
         "earthyLoveWords":true,
         "momentCopyrighting":false,
         "poisonChickenSoup":false,
         "poetry":false,
         "horoscope":true,
         "birthdayMessage":true}
      }]}


module.exports = USER_CONFIG

