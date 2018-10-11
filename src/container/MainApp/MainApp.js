import React from 'react';
import ReactDOM from 'react-dom';

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
  componentDidMount() {
      ZOHODESK.get('portal.id').then((response) => {
        this.setState({page : "final"});
        console.log('the response is :',response);
      }).catch((error) => {
        console.log('the error response is :', error);
      });
  }

  render() {
    let {page} = this.setState;
    return (
      <div>
        {page == 'initial' ? <div>Load the initial page</div> : <div>Load the final page</div>}
      </div>
    )
  }
}
