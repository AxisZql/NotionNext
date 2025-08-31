/**
 * 悬浮在网页上的挂件
 */
module.exports = {
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // 是否显示切换主题按钮
  // Chatbase 是否显示chatbase机器人 https://www.chatbase.co/
  CHATBASE_ID: process.env.NEXT_PUBLIC_CHATBASE_ID || null,
  // WebwhizAI 机器人 @see https://github.com/webwhiz-ai/webwhiz
  WEB_WHIZ_ENABLED: process.env.NEXT_PUBLIC_WEB_WHIZ_ENABLED || false, // 是否显示
  WEB_WHIZ_BASE_URL:
    process.env.NEXT_PUBLIC_WEB_WHIZ_BASE_URL || 'https://api.webwhiz.ai', // 可以自建服务器
  WEB_WHIZ_CHAT_BOT_ID: process.env.NEXT_PUBLIC_WEB_WHIZ_CHAT_BOT_ID || null, // 在后台获取ID
  DIFY_CHATBOT_ENABLED: process.env.NEXT_PUBLIC_DIFY_CHATBOT_ENABLED || false,
  DIFY_CHATBOT_BASE_URL: process.env.NEXT_PUBLIC_DIFY_CHATBOT_BASE_URL || '',
  DIFY_CHATBOT_TOKEN: process.env.NEXT_PUBLIC_DIFY_CHATBOT_TOKEN || '',

  // 悬浮挂件
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || true, // 是否显示宠物挂件
  WIDGET_PET_LINK:
    process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
    'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json', // 挂件模型地址 @see https://github.com/xiazeyu/live2d-widget-models
  WIDGET_PET_SWITCH_THEME:
    process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || false, // 点击宠物挂件切换博客主题

  SPOILER_TEXT_TAG: process.env.NEXT_PUBLIC_SPOILER_TEXT_TAG || '', // Spoiler文本隐藏功能，如Notion中 [sp]希望被spoiler的文字[sp]，填入[sp] 即可

  // 音乐播放插件
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || true, // 是否使用音乐播放插件
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // 是否在左下角显示播放和切换，如果使用播放器，打开自动播放再隐藏，就会以类似背景音乐的方式播放，无法取消和暂停
  MUSIC_PLAYER_AUTO_PLAY:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || true, // 是否自动播放，不过自动播放时常不生效（移动设备不支持自动播放）
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0', // 歌词显示类型，可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）（前提是有配置歌词路径，对 meting 无效）
  MUSIC_PLAYER_CDN_URL:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL ||
    'https://cdn.jsdelivr.net/npm/aplayer@1.10.0/dist/APlayer.min.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'random', // 默认播放方式，顺序 list，随机 random
  MUSIC_PLAYER_AUDIO_LIST:[
    // 示例音乐列表。除了以下配置外，还可配置歌词，具体配置项看此文档 https://aplayer.js.org/#/zh-Hans/
     {
      name: '走走',
      artist: '李荣浩',
      url: 'https://my.microsoftpersonalcontent.com/personal/1a320324036c1c26/_layouts/15/download.aspx?UniqueId=2560582e-a4b6-492e-a820-bb6191aeb010&Translate=false&tempauth=v1e.eyJzaXRlaWQiOiI0YTAwNjU5NS0wYWE5LTQxOGItOWFiYS0xYmIzZjRkNzE1ZmYiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzU2NjMyMTkxIn0.QSj4FJJLs6Okn4hnYDZ7FOK09JYd8jBbLCIDSUiC_YDLT_JC9-3kfaVU_ts__uccU7egZCkrWo_D8IoKKGilcm44XJ7IA0k5Uy-CBk3u--LIzehbDp2S3R6FENhfDrDS_oTfAFvdKUFXYxFstZCWTsJ4J26LLBxW4d9EyJIixBItG-Y-ba-7YhLNzNMcjF0fMQQC3I1uVrsiEaavmvUnlSf3fKPlD2XWnNe9JgnmPQXPsZofdTaGnvrPJXm_I7sKj6wMzWJ5YbwZtkZaXIxPrHCYXzbM7WDyy_9dLEGXo30SpRPQjcXio5pU-or6gLTpeoCFccbpWLI1VaYWzs8qRQQOzecTQnT9BwiDw46_ywTR0dtCQVeg82tj5hk3LuL6rB0aIaETWgl-0YqjdOprFgZZTjnJu7_XuBybHqj2GUM442FNkDfIBf5zK4pWKQPDuHzpcNGE56uuao2W6tVxSisBVc4FIPqw4GbU8FfMDO4eomvhWn2rGS86tsL1fqwo5-or4kByRo-4MXhz9PDKmA.38GQpPsGmKcmrnowtU5VcWxkj0L3hNKHG_T-xnFjIoo&ApiVersion=2.0',
      cover:
        'https://p2.music.126.net/nmwibhFvFkTlakVoqwO0mA==/109951169786882253.jpg'
    },
    {
      name: '任我行',
      artist: '陈奕迅',
      url: 'https://my.microsoftpersonalcontent.com/personal/1a320324036c1c26/_layouts/15/download.aspx?UniqueId=9a15f2e9-e393-4cd0-aa54-fbf2f15f280d&Translate=false&tempauth=v1e.eyJzaXRlaWQiOiI0YTAwNjU5NS0wYWE5LTQxOGItOWFiYS0xYmIzZjRkNzE1ZmYiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzU2NjMxMzI0In0.Rok5yvB8m4EAQAwIOC8eQCFoyBlI4HPsuNcnw7DNMLKjKjpDe9VEIBHRqq3BXQ_0SU_Ap22jHa134zsi-1vovNBoDtEK1ZYOxkm3-xgFcgxB3HhGznwxyZTKABpcehHsZkk8owNY_cKBwSOF9VvAEKWiqW_IZ4TBOHpfwp1vPXPmLnCi2jF9yGByNQqwFA5qdVUigJzW20hmOxTPLg1s50i6A6vbVCos8MvFhCXwyyALzSc2Qot1czqHgvyd4N-l6qEQfd0DzoCIYtU08JIvkx4fjKYCIbKFBZNKRdJbHmAS7XwBXShfv5Oi4DCrdN_eV23QRdiCB2xMSVMSz-UCsoPSEQ2Js2kmrAKDWzbSS3piUHZvsD160P5dQqwRTVx0QlwP3pjmcJmltdYw_k-w2oZhl9bWo-sGENRGtaKJogWfLMrfBr55FsaZP9D6sePw2Rr-xq4Mvvi4u-nJSbTuhbKbH81QL-TfLd__36h2Q57NJ25m2wspQY0f1rUy1Ko3MnsAhVVx1QN9_1Tx-OEzcw.GZf7-t2sjDK_wZj7KBFLHFVopCer-B1qRPDAxu5Lbz8&ApiVersion=2',
      cover:
        'https://p1.music.126.net/1itDj9ETx-njdPKTuptrwQ==/19057835044482433.jpg'
    },
    {
      name: '美梦',
      artist: '温舒娴',
      url: 'https://music.163.com/song/media/outer/url?id=2034521190.mp3',
      cover:
        'https://p2.music.126.net/7w5IL2w8cIKSSU-FGqCSig==/109951168507418251.jpg'
    },
    {
      name: '花语（Flower Words）',
      artist: '杨楚骁',
      url: 'https://music.163.com/song/media/outer/url?id=1856385406.mp3',
      cover:
        'https://p1.music.126.net/d0OXADs3KDjNkbgQ_Oa-rA==/109951166120950938.jpg'
    },
    {
      name: 'Wherever you are',
      artist: 'ONE OK ROCK',
      url: 'https://my.microsoftpersonalcontent.com/personal/1a320324036c1c26/_layouts/15/download.aspx?UniqueId=b2f72afa-a234-4d69-8830-7308422cedb6&Translate=false&tempauth=v1e.eyJzaXRlaWQiOiI0YTAwNjU5NS0wYWE5LTQxOGItOWFiYS0xYmIzZjRkNzE1ZmYiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzU2NjMyMTkxIn0.35C0Sx-Os-VR6M57Xo1FgwHLFyfu-i9Tz9Fa_N5njk3JcnASngdTjPvB0NxSnnDUdaco7VQHXE852M5pkAOejCbRfGKc2h52YeVCgFhCYr5NnW8I2CfgGq8jTUClI_MESZCFaVENZk1L_8Gt-SKKYaG1H6IaaQMs7azN7lfoGpAZUrqyX9CFQFBhWZcpEwnyXNmmCRg-g23s-OKoJe8DuW_IHT64ECHpa_2EnM888dmU6UZ3kXAGNH8USK1ePQq_IHFFwU0CkKoNFo_zUZezH6VIYeagXDvRkrDSGN_3_hVVTwTPL47sOJBBurAESvMzvBY_9LyKyuUYqGkVOx5To9s3JtizXrwEzApsokh-7G08UwmxuOErbNVMExOG0SVt4R_n8Nn_suzGnvnitZ1fu90irVzrnHwkDQgu3xUYY300EZo9uncBJXbpLqa5HIl5q_GMuYxf5LZ1SB62FilrkwHWhethD3LVEAEOqcIdDbzRcI5TU235_Z9pIfbaPhca5I6quLpTsXIjFB5--7bVFQ.8S_NZIfGrjnmuEO5A2ah4yaB3z4OicQmuO7vKVmuf3o&ApiVersion=2.0',
      cover:
        'https://p2.music.126.net/OusrP6b6F3Kkn3rGEP9mFg==/109951169487843251.jpg'
    },
    {
      name: 'First Love',
      artist: '宇多田ヒカル',
      url: 'https://my.microsoftpersonalcontent.com/personal/1a320324036c1c26/_layouts/15/download.aspx?UniqueId=99282bdb-c36d-4cd5-b4cf-61a07e4a719d&Translate=false&tempauth=v1e.eyJzaXRlaWQiOiI0YTAwNjU5NS0wYWE5LTQxOGItOWFiYS0xYmIzZjRkNzE1ZmYiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzU2NjMyMTkxIn0.1Bm4fQj5Ow22F1eJtPkzb3uwXeRenwK8v6FmemyGKXfwnWqsu63q6YMdKWKtKvSWH2eFmG2V2MRapphAdgX1NroVhJoGakRdjVQdaiwZpo7lkfQGDKZqWpsMn49qSOL_CfuKKuujplqvcXPWPmC0RHcibN85HIylTcT93h7I1VgLvZU23f0ReXigA9HyQPCCBls9HmghbkJh6yuNjNR2ghVC2yP1ekbJVv3ErzSxGO5Hb38C-qww13fvb-NHbMmFNI3zzULMePuu9kyVmTGiNqdTD-JuqhpB2UjusxlA151vCjC6EJ-j8J7VjlOKWoYUaNny5igmS9tvzk9rB-ptpQJXyJUdoBzRyy2wGhi-ZCuVd19yvAK06UszwIeYQYWGHNxuMFGlCr-CqZpMM2PeD15ivYjh_5a2DBVRPz6T4v8jZTdebMO6-EPXEXHHuWFnyHrsovD_ZKGnnlM4aOEMFP9ef8bUg8TfbnySdHlzHdof43j6LSspDeB5f_TD6GGA2QBspWBiBDbX7vYych8pvA.xuG59YK-ghB4J6WwwdBTXxSWyQms8h_1ivBGoFwvxMg&ApiVersion=2.0',
      cover:
        'https://p2.music.126.net/qoZkuf7BYl4hRi2vSSEXWQ==/109951165561290057.jpg'
    },
  ],
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // 是否要开启 MetingJS，从平台获取歌单。会覆盖自定义的 MUSIC_PLAYER_AUDIO_LIST，更多配置信息：https://github.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // 音乐平台，[netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // 对应歌单的 id
  MUSIC_PLAYER_METING_LRC_TYPE:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // 已废弃！！！可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）

  // 一个小插件展示你的facebook fan page~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // 邊欄 Facebook Page widget 的標題欄，填''則無標題欄 e.g FACEBOOK 粉絲團'
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page 的連結 e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID 來啟用 messenger 聊天功能
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '' // Facebook App ID 來啟用 messenger 聊天功能 获取: https://developers.facebook.com/
}
