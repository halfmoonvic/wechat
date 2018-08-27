// 工具函数库

import config from './config'
export function get(url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      data,
      success: function(res) {
        if (res.data.code === 0) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
}

