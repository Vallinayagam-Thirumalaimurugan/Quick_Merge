import React from 'react';
import './MergePage.css';
import sendRequest from '../../Request';

export default class MergePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString : '',
      isRequestSent : 0,
      from : 0,
      searchResults : []
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
          let {isRequestSent, from} = this.state;
          let {statusMessage} = response;
          let searchResults = [];
          if(typeof statusMessage != 'undefined' && typeof statusMessage.data != 'undefined' && typeof statusMessage.data == 'object' && statusMessage.data.length) {
              statusMessage.data.map((ticketEntry) => {
                let ticketObject = {};
                ticketObject.subject = ticketEntry.subject;
                ticketObject.ticketNumber = ticketEntry.ticketNumber;
                let contactFirstName = ticketEntry.contact.firstName, contactLastName = ticketEntry.contact.lastName;
                ticketObject.contactName = '';
                if(typeof contactFirstName != 'undefined' && contactFirstName != null) {
                  ticketObject.contactName = contactFirstName;
                }
                if(typeof contactLastName != 'undefined' && contactLastName != null) {
                  ticketObject.contactName = `${ticketObject.contactName} ${contactLastName}`;
                }
                searchResults.push(ticketObject);
              });
          }
          this.setState({searchResults, isRequestSent : isRequestSent -1, from : from+20});
        });
      });
    } else {
      this.setState({searchString : value});
    }
  }

  render() {
    let {searchString, isRequestSent, searchResults} = this.state;
    return (
      <div className="fullPage">
        <div className="mergeHeading">QUICK MERGE</div>
        <input value={searchString} className={`gap inputLine`} autoFocus={true} onChange={this.onSearchStringChange}  />
        {searchResults.map((result) => {
          return (
            <div key={result.ticketNumber} className="resultHead">
              <div className="resultContent">
                <div className="contentHead">{`#${result.ticketNumber} ${result.subject}`}</div>
                <div className="clboth"></div>
                <div className="contactHead">
                  <div className="contactContent">{`${result.contactName}`}</div>
                </div>
              </div>
              <div className="clboth"></div>
            </div>
          )
        })}
      </div>
    )
  }
}
