/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '我可爱的佳宏宝~',
    desc: `
      今天是{{date.DATA}}
      {{holidaytts.DATA}}
      你现在在{{city.DATA}}
      今天的天气 {{weather.DATA}}
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      {{comprehensive_horoscope.DATA}}
      今天是我们相识的第{{meet_day.DATA}}天
      我们已经在一起{{love_day.DATA}}天啦
      {{birthday_message.DATA}}
      {{moment_copyrighting.DATA}}
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
