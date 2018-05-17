import Store from 'store'
import Axios from 'axios'
import {apiUrl} from 'config/index'

const qs = require('qs');
const instance = Axios.create({
  baseURL: apiUrl,
  headers: {
    'Authorization': 'Basic ' + Store.state.user.token
  },
  paramsSerializer: function (params) {
    return qs.stringify(params)
  }
});

export default (data = {}, success = response => {}, error = error => {}) => {
  instance(data).then(success).catch(error);
}
