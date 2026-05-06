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
      url: 'https://github.com/AxisZql/python-crawler/raw/refs/heads/main/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E8%B5%B0%E8%B5%B0.mp3',
      cover:
        'https://p2.music.126.net/nmwibhFvFkTlakVoqwO0mA==/109951169786882253.jpg'
    },
    {
      name: '任我行',
      artist: '陈奕迅',
      url: 'https://github.com/AxisZql/python-crawler/raw/refs/heads/main/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E4%BB%BB%E6%88%91%E8%A1%8C.mp3',
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
      url: 'https://github.com/AxisZql/python-crawler/raw/refs/heads/main/ONE%20OK%20ROCK%20-%20Wherever%20you%20are.mp3',
      cover:
        'https://p2.music.126.net/OusrP6b6F3Kkn3rGEP9mFg==/109951169487843251.jpg'
    },
    {
      name: 'First Love',
      artist: '宇多田ヒカル',
      url: 'https://github.com/AxisZql/python-crawler/raw/refs/heads/main/%E5%AE%87%E5%A4%9A%E7%94%B0%E3%83%92%E3%82%AB%E3%83%AB%20-%20First%20Love.mp3',
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
