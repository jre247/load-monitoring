import {_} from 'underscore';

class API {
  constructor() {

  }

  onFail(jqXhr) {
    onsole.log('onGetUptimeFail');
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default API;
