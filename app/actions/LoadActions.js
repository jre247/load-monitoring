import alt from '../alt';
import {assign} from 'underscore';

class LoadActions {
  constructor() {
    this.generateActions(
      'getLoadSuccess'
    );
  }

  getLoad() {
    $.ajax({
      url: '/api/load'
    })
      .done((data) => {
        this.actions.getLoadSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getLoadFail(jqXhr);
      });
  }
}

export default alt.createActions(LoadActions);
