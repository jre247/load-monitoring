import alt from '../alt';
import {assign} from 'underscore';

class LoadActions {
  constructor() {
    this.generateActions(
      'loadUpdate'
    );
  }

}

export default alt.createActions(LoadActions);
