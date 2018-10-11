import React from 'react';

export default class IntroPage extends React.Component {
  render(){
    var {onChange} = this.props;
    console.log('inside intro page');
    return (
      <div>
          <h1>Quick Merge</h1>
          <img src="/app/img/ticketMerge.png" onClick={onChange} />
      </div>
    )
  }

}
