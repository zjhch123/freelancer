class Wechat {
  constructor() {
    this.wxLoading = true
    this.shareConfig = null

    window.shareConfig = this.resetShareConfig.bind(this)
    window.setNormalShare = this.setNormalShare.bind(this)
    window.setUserShare = this.setUserShare.bind(this)
  }

  resetShareConfig({
    title,
    content,
    url,
    timeline_title,
    imagePath,
    successCb = () => {}
  }) {
    wx.onMenuShareTimeline({
      title: timeline_title,
      link: url,
      imgUrl: imagePath,
      success: successCb,
    });
    wx.onMenuShareAppMessage({
      title: title,
      desc: content,
      link: url,
      imgUrl: imagePath,
      type: 'link',
      dataUrl: '',
      success: successCb,
    });
  }

  setNormalShare() {
    document.getElementById('share').src = require('../assets/share.jpg');
    const src = document.getElementById('share').src
    const config = {
      title: 'FREELANCER-中传电影创作人平台',
      content: '欢迎加入中传电影创作人资料库！',
      timeline_title: 'FREELANCER-中传电影创作人平台，欢迎加入中传电影创作人资料库！',
      url: window.location.href.split('#')[0],
      imagePath: src,
    }

    if (this.wxLoading) {
      this.shareConfig = config
    } else {
      this.resetShareConfig(config);
    }
  }

  setUserShare(person) {
    document.getElementById('share2').src = require('../assets/demo_person.png');
    const src = document.getElementById('share2').src
    const config = {
      title: `${person.name} 中传电影创作人名片`,
      content: '这是我的名片，期待合作！',
      timeline_title: `${person.name} 中传电影创作人名片`,
      url: window.location.href.split('#')[0] + `#/user/${person.id}`,
      imagePath: person.header === null ? src : person.header.startsWith('http') ? person.header.replace('https', 'http') : `http://${window.location.host}${person.header}`,
    }

    if (this.wxLoading) {
      this.shareConfig = config
    } else {
      this.resetShareConfig(config);
    }
  }

  launch() {
    fetch(`/api/wechat/getWebSign?url=${encodeURIComponent(window.location.href.split('#')[0])}`)
      .then(res => res.json())
      .then(res => {
        if (res.code === 200) {
          this.wxconfig(res.content)
        } else {
          console.error(res)
        }
      })
  }

  wxconfig({
    timestamp,
    nonceStr,
    appId,
    signature,
  }) {
    wx.config({
      debug: false,
      appId,
      timestamp,
      nonceStr,
      signature,
      jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'hideMenuItems'] // 必填，需要使用的JS接口列表
    });
    wx.ready(() => {
      this.wxLoading = false
      wx.hideMenuItems({
        menuList: [
          "menuItem:share:qq",
          "menuItem:share:weiboApp",
          "menuItem:share:facebook",
          "menuItem:share:QZone",
          "menuItem:copyUrl",
          "menuItem:originPage",
          "menuItem:readMode",
          "menuItem:share:email"
        ]
      });
      if (this.shareConfig !== null) {
        this.resetShareConfig(this.shareConfig)
      }
    })
  }
}

export default new Wechat();