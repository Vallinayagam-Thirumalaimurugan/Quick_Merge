import React from 'react';
import ReactDOM from 'react-dom';
import IntroPage from '../../components/IntroPage/IntroPage';

export default class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page : "initial"
    }
    this.onPageChange = this.onPageChange.bind(this);
  }
  onPageChange() {
    let {page} = this.state;
    if(page == 'initial') {
      this.setState({page : "final"});
    } else {
      this.setState({page : 'initial'});
    }
  }

  render() {
    let {page} = this.state;
    console.log('value of state', page);
    return (
      <div>
        {page == 'initial' ? <IntroPage onChange={this.onPageChange} /> : <div>Load the final page</div>}
      </div>
    )
  }
}
