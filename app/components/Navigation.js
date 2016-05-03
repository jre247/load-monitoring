import React from 'react';
import {Link} from 'react-router';
import PageStore from '../stores/PageStore';
import {_} from 'underscore';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = PageStore.getState();
    this.pagesActive = [];
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    PageStore.listen(this.onChange);
  }

  componentWillUnmount() {
    PageStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);

    if(state.pages.length > 0){
      this.pagesActive = _.where(this.state.pages, {is_active: true});
    }
  }

  handleSubmit(event) {

  }

  render() {
    if(_.isEmpty(this.pagesActive)){
      return (
        <div>
          <div className='Navigation' role="navigation">
              <Link className="Navigation-link" to="/">Home</Link>
          </div>
        </div>
      );
    }
    else{
      let nodes = this.pagesActive.map((page, index) => {
        return (
          <Link key={index} className="Navigation-link" to={'/' + page.url}>{page.name}</Link>
        );
      });

      return (
        <div>
          <div className='Navigation' role="navigation">
              <Link className="Navigation-link" to="/">Home</Link>
              {nodes}
          </div>
        </div>
      );
    }

  }
}

export default Navbar;
