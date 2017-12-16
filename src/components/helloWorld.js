import React from 'react';


export default class Hello extends React.Component {
    render() {
      return <h1 onClick={()=>this.props.testAction()}>{this.props.test}</h1>
    }
}