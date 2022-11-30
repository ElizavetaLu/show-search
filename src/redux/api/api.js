import axios from "axios";

export function requestGetData(pattern){
  return axios.request({
    method: 'get',
    url: `https://api.tvmaze.com/${pattern}`
  })
}
