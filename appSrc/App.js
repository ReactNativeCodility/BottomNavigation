import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createTabBarBottom } from 'react-navigation';
import HomeActivity from './activities/HomeActivity';
import ChartsActivity from './activities/ChartsActivity';
import MoreActivity from './activities/MoreActivity';

export default class App extends React.Component {

  render() {
    const MainNavigator = createBottomTabNavigator({

      main: { screen: createBottomTabNavigator({
        Home: { screen: createStackNavigator({
          home: { screen: HomeActivity,
            navigationOptions: ({ navigation }) => ({
              title: 'Home',
              headerStyle: {
                backgroundColor: 'red'
              },
              headerTintColor: '#fff',
            })
          }
        }) },
        Charts: { screen: createStackNavigator({
          charts: { screen: ChartsActivity,
            navigationOptions: ({ navigation }) => ({
              title: 'Charts',
              headerStyle: {
                backgroundColor: 'red'
              },
              headerTintColor: '#fff',
            })
          }
        }) },
        More: { screen: createStackNavigator({
            more: { screen: MoreActivity,
              navigationOptions: ({ navigation }) => ({
                title: 'More',
                headerStyle: {
                  backgroundColor: 'red'
                },
                headerTintColor: '#fff',
              })
            }
        }) },
      },
        {
          activeTintColor: '#00ffff',
          tabBarPosition: 'bottom',
          tabBarComponent:  createTabBarBottom,
          swipeEnabled: false,
          lazyLoad: true,
          animationEnabled: false
        })
      },
    },
    {
      navigationOptions: {
        tabBarVisible: false
      },
    },
  );


    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});