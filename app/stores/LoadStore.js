import alt from '../alt';
import LoadActions from '../actions/LoadActions';

class LoadStore {
  constructor() {
    this.bindActions(LoadActions);
    this.load = {};
  }
  getLoadSuccess(load){
    this.load = load;
  }

  getLoadFail(jqXhr){
    onsole.log('onGetLoadFail');
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(LoadStore);
