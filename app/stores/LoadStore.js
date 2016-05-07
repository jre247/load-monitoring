import alt from '../alt';
import LoadActions from '../actions/loadActions';

class LoadStore {
  constructor() {
    this.bindActions(LoadActions);
    this.data = {
      history: [],
      isInitialized: false
    }
  }
  getLoadSuccess(load){
    this.data.history.push(load);
    this.data.isInitialized = true;
  }

  getLoadFail(jqXhr){
    onsole.log('Load failed.');
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(LoadStore);
