import {_} from 'underscore';

class API {
  constructor() {

  }

  static getUptime(history) {
    var promise = $.Deferred();

    $.ajax({
        type: 'GET',
        url: '/api/uptime'
      })
        .done((data) => {
          promise.resolve(data);
        })
        .fail((jqXhr) => {
          promise.reject(this.onFail(jqXhr.responseJSON.message));
        });

    return promise.promise();
  }

  onFail(jqXhr) {
    onsole.log('onGetUptimeFail');
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default API;
