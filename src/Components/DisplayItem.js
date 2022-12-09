import React, { Component } from 'react';

export class DisplayItem extends Component {
  render() {
    const detail = this.props.item.map((item, index) => {
      return (
        <div key={index}>
          <div>{item.title}</div>
          {/* <div>{item.snippet}</div> */}
          <div dangerouslySetInnerHTML={{ __html: item.snippet }} />
        </div>
      );
    });
    return <div>{detail}</div>;
  }
}

export default DisplayItem;
