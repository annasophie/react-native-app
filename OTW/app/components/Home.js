import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Button from './Button.js';

const route = {
  type: 'push',
  route: {
    key: 'signIn',
    title: 'signIn'
  }
}

const chat = {
  type: 'push',
  route: {
    key: 'groupchat',
    title: 'Group Chat'
  }
}

const Home = ({_handleNavigate}) => {
  return (
    <View style={styles.container}>
      <Text>
        Hello World!
        This is the Home Screen
      </Text>
      <Button
        onPress={() => _handleNavigate(route)}
        label='Go To SignIn'
      />
      <Button
        onPress={() => _handleNavigate(chat)}
        label="Group Chat"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default Home;