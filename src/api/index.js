import Cookie from 'js-cookie'

export function getHotUser(count = 3) {
  return fetch(`/api/user/getHotUser?count=${count}`, {credentials: 'include'}).then(res => res.json())
}

export function getUserCount() {
  return fetch(`/api/user/getCount`, {credentials: 'include'}).then(res => res.json())
}

export function getUserDetail(id) {
  return fetch(`/api/user/getUserDetail?id=${id}`, {credentials: 'include'}).then(res => res.json())
}

export function getRecommendUser(page, count = 10) {
  return fetch(`/api/user/getRecommendUser?page=${page}&count=${count}`, {
    credentials: 'include',
    headers: {
      'openid': window.openId
    }
  }).then(res => res.json())
}

export function search(condition, page, count = 10) {
  return fetch(`/api/user/search?condition=${window.encodeURIComponent(condition)}&page=${page}&count=${count}`, {credentials: 'include'}).then(res => res.json())
}

export function getMyInfo() {
  return fetch(`/api/user/me`, {
    credentials: 'include',
    headers: {
      'openid': window.openId
    }
  }).then(res => res.json())
}

export function uploadImage(blob) {
  return fetch('/api/util/upload', {
    method: 'POST',
    headers: {
      'x-csrf-token': Cookie.get('csrfToken')
    },
    body: blob,
    credentials: 'include',
  }).then(res => res.json())
}

export function updateUserInfo(data) {
  return fetch('/api/user/update', {
    method: 'POST',
    headers: {
      'x-csrf-token': Cookie.get('csrfToken'),
      'content-type': 'application/json; charset=utf-8',
      'openid': window.openId
    },
    body: JSON.stringify(data),
    credentials: 'include',
  }).then(res => res.json())
}

export function getUnreadMsgCount() {
  return fetch('/api/user/me/unreadMsgCount', { credentials: 'include' }).then(res => res.json())
}

export function getMessages(page) {
  return fetch(`/api/user/me/getMessages?page=${page}`, { credentials: 'include' }).then(res => res.json())
}

export function readMessage(id) {
  return fetch(`/api/user/me/readMessage?id=${id}`, { credentials: 'include' }).then(res => res.json())
}
