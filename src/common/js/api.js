import axios from 'axios'
let API
switch (process.env.NODE_ENV) {
  case 'development':
    // API = 'http://localhost:3003/'
    API = 'http://www.shenshou.shop:3003/'
    break;
  case 'production':
    API = 'http://www.shenshou.shop:3003/'
    break;
  default:
    API = 'http://www.shenshou.shop:3003/'
}

export function deleteObjEmpty(search = {}) {
  for (let i in search) {
    (search[i] === undefined || search[i] === 'none') && delete search[i];
  }
}

export function apiPost(url, params) {
  return callApi(url, params, 'post')
}

function callApi(url, params = {}, method = 'post') {
  return axios({
    method,
    url: `${API}${url}`,
    data: params,
    headers: {'Content-Type': 'text/plain'}
  })
  .then(response => {   
    if (response.status >= 200 && response.status < 300) {
      return response.data
    } else {
      console.log(response.statusText)
    }
  })
  .then(response => {
    if (response.code === 200) {
      return response.data || 200
    } else {
      console.log(response.msg)
    }
  })
  .catch(err => {
    console.log(err)
  })
}
