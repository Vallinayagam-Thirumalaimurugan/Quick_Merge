export default function sendRequest(url, type, args, postData, headers) {
  let reqHeaders = typeof headers == 'undefined' ? {} : headers;
  return new Promise((resolve, reject) => {
    ZOHODESK.get("portal.id").then((portalIdObj) => {
      if(typeof args != 'undefined') {
        args.orgId=portalIdObj['portal.id']
      } else {
        args = {orgId : portalIdObj['portal.id']};
      }
      postData = typeof postData != 'undefined' ? postData : {};
      let reqObj = {
        url,
        headers : reqHeaders,
        type,
        data : args,
        postBody : postData,
        connectionLinkName : 'mergeconnection'
      }
      ZOHODESK.request(reqObj).then((response) => {
         resolve(JSON.parse(JSON.parse(response).response));
      }).catch((errorResponse) => {
        console.log('The error response is -->', errorResponse);
        reject();
      });
    });
  });
}
