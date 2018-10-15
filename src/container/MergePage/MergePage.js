import React from 'react';
import './MergePage.css';
import sendRequest from '../../Request';

export default class MergePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString : '',
      isRequestSent : 0,
      from : 0
    }
    this.onSearchStringChange = this.onSearchStringChange.bind(this);
  }

  onSearchStringChange(event) {
    let value = event.target.value;
    let {isRequestSent, from} = this.state;
    if(value.length > 3) {
      this.setState({searchString : value, isRequestSent : isRequestSent + 1}, () => {
        let url = 'https://desk.zoho.com/api/v1/tickets/search';
        let args = {};
        args.limit = 20;
        args.from = from;
        args['_all'] = value;
        let type = 'GET';
        sendRequest(url, type, args).then((response) => {
          let {isRequestSent} = this.state;
          let {statusMessage} = response;
          if(typeof statusMessage != 'undefined' && typeof statusMessage.data != 'undefined') {
            
          }
        });
      });
    } else {
      this.setState({searchString : value});
    }
  }

  render() {
    let {searchString, isRequestSent} = this.state;
    return (
      <div className="fullPage">
        <div className="mergeHeading">QUICK MERGE</div>
        <input value={searchString} className={`gap inputLine`} autoFocus={true} onChange={this.onSearchStringChange}  />
        {isRequestSent ? (
          <div className="loadOption">
            <div className="loadBox">
              <div className={`loadBall loadBall1`}>
                <div className="innerBall"></div>
              </div>
              <div className={`loadBall loadBall2`}>
                <div className="innerBall"></div>
              </div>
              <div className={`loadBall loadBall3`}>
                <div className="innerBall"></div>
              </div>
              <div className={`loadBall loadBall4`}>
                <div className="innerBall"></div>
              </div>
              <div className={`loadBall loadBall5`}>
                <div className="innerBall"></div>
              </div>
            </div>
          </div>) : null}
      </div>
    )
  }
}
