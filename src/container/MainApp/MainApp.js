import React from 'react';
import ReactDOM from 'react-dom';
import IntroPage from '../../components/IntroPage/IntroPage';
import MergePage from '../MergePage/MergePage';

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
    return (
      <div>
        {page == 'initial' ? <IntroPage onChange={this.onPageChange} /> : <MergePage />}
      </div>
    )
  }
}
