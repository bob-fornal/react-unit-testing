
import React from 'react';

export default function Hello(props) {
  const name = (props.name) ? props.name : 'stranger';
  return (<h1>Hello, { name }!</h1>);
}