import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class HeaderExample extends Component {
  render() {
    return (

        <Header>
          <Body>
            <Title style={{ alignSelf:'center'}}>News App</Title>
          </Body>
        </Header>

    );
  }
}