import * as request from '@/utils/request'

/**
 * 接口封装
 */
export default {
  getOverall() {
    // let url = `/api/covid-19/overall?_=${Math.random()}`
    let url = `/covid-info?_=${Math.random()}`
    return request.get(url)
  },
  // getProvinceDataList() {
  //   let url = `/api/covid-19/area/latest/list?_=${Math.random()}`
  //   return request.get(url)
  // },
  getDailyList() {
    let url = `/covid-info/list?t=${Math.random()}`
    return request.get(url)
  },
  getMockData() {
    let url = '/covid-mock'
    return request.post(url)
  }
}