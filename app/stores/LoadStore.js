import alt from '../alt';
import LoadActions from '../actions/loadActions';

class LoadStore {
  constructor() {
    this.bindActions(LoadActions);
    this.loads = [];

  }
  
  onLoadUpdate(data){
    this.loads.push(data.load);
  }

}

export default alt.createStore(LoadStore);
