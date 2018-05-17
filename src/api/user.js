import Http from 'utils/http'

const getUserInfo = (that) => {
  Http({
    method: 'get',
    url: 'user/logout',
    // params: {
    //   uniqid: '58f9deaeea4c1'
    // }
  }, (response) => {
    that.items = response.data;
  }, (error) => {
    console.log(error);
  });
};

export {
  getUserInfo
}
