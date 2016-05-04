import alt from '../alt';
import LoadActions from '../actions/LoadActions';

class LoadStore {
  constructor() {
    this.bindActions(LoadActions);
    this.loadHistory = [];
  }
  getLoadSuccess(load){
    this.loadHistory.push(load);
  }

  getLoadFail(jqXhr){
    onsole.log('Load failed.');
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(LoadStore);
