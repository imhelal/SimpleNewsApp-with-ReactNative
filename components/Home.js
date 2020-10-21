import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import TabeOne from './tabs/TabeOne';
import TabTwo from './tabs/TabeTwo';
import TabThree from './tabs/TabeThree';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="Technology">
            <TabeOne />
          </Tab>
          <Tab heading="Business">
            <TabTwo />
          </Tab>
          <Tab heading="Entertainment">
            <TabThree />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}