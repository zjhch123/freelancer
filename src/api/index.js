export function getHotUser(count = 3) {
  return fetch(`/api/user/getHotUser?count=${count}`).then(res => res.json())
}

export function getUserCount() {
  return fetch('/api/user/getCount').then(res => res.json())
}

export function getUserDetail(id) {
  return fetch(`/api/user/getUserDetail?id=${id}`).then(res => res.json())
}

export function getRecommendUser(page, count = 10) {
  return fetch(`/api/user/getRecommendUser?page=${page}&count=${count}`).then(res => res.json())
}

export function search(condition, page, count = 10) {
  return fetch(`/api/user/search?condition=${window.encodeURIComponent(condition)}&page=${page}&count=${count}`).then(res => res.json())
}