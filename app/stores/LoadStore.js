import alt from '../alt';
import LoadActions from '../actions/loadActions';

class LoadStore {
  constructor() {
    this.bindActions(LoadActions);
    this.loads = [];

  }
  getLoadSuccess(load){
    this.loads.push(load);
  }

  getLoadFail(jqXhr){
    onsole.log('Load failed.');
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(LoadStore);
