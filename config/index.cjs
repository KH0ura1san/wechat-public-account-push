/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
    USE_PASSAGE: 'server-chan',
    "IS_SHOW_COLOR":true,
    "USERS":[
      {
        "name":"佳宏宝儿",
        "id":"SCT239231TIajSF6A5XhC1bOoeKDfm66yL",
        "useTemplateId":"0001",
        "province":"浙江",
        "city":"湖州",
        "horoscopeDate":"01-10",
        "horoscopeDateType":"今日",
        "openUrl":"https://shuangxunian.github.io/",
        "festivals":[
          {"type":"生日","name":"佳宏宝","date":"01-10","year":"2001"},
          {"type":"生日","name":"威威宝","date":"06-06","year":"2002"},
        ],
        customizedDateList: [
          // 在一起的日子
          { keyword: 'love_day', date: '2021-02-28' },
          { keyword: 'meet_day', date: '2020-11-03' },
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
      },
      {
        "name":"佳宏宝儿",
        "id":"SCT239247TZj08yPlWRzEeP4gCkraPuksh",
        "useTemplateId":"0001",
        "province":"浙江",
        "city":"湖州",
        "horoscopeDate":"01-10",
        "horoscopeDateType":"今日",
        "openUrl":"https://shuangxunian.github.io/",
        "festivals":[
          {"type":"生日","name":"佳宏宝","date":"01-10","year":"2001"},
          {"type":"生日","name":"威威宝","date":"06-06","year":"2002"},
        ],
        customizedDateList: [
          // 在一起的日子
          { keyword: 'love_day', date: '2021-02-28' },
          { keyword: 'meet_day', date: '2020-11-03' },
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

