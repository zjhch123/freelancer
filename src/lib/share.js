class Wechat {
  constructor() {
    window.shareConfig = ({
      title,
      content,
      url,
      timeline_title,
      imagePath,
      successCb = () => {}
    }) => {
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

    window.setNormalShare = () => {
      window.shareConfig({
        title: 'FREELANCER-中传电影创作人平台',
        content: '欢迎加入中传电影创作人资料库！',
        timeline_title: 'FREELANCER-中传电影创作人平台，欢迎加入中传电影创作人资料库！',
        url: window.location.href.split('#')[0],
        imagePath: document.getElementById('share').src.replace('https:', 'http:'),
      });
    }
    window.setUserShare = (person) => {
      window.shareConfig({
        title: `${person.name} 中传电影创作人名片`,
        content: '这是我的名片，期待合作！',
        timeline_title: `${person.name} 中传电影创作人名片`,
        url: window.location.href.split('#')[0] + `#/user/${person.id}`,
        imagePath: person.header === null ? document.querySelector('.u-header').src : person.header.startsWith('http') ? person.header : `http://${window.location.host}${person.header}`,
      });
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
      window.shareConfig({
        title: 'FREELANCER-中传电影创作人平台',
        content: '欢迎加入中传电影创作人资料库！',
        timeline_title: 'FREELANCER-中传电影创作人平台，欢迎加入中传电影创作人资料库！',
        url: window.location.href.split('#')[0],
        imagePath: require('../assets/share.jpg'),
      });
    })
  }
}

export default new Wechat();