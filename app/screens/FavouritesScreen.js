import React, { Component } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as GlobalVariables from '../GlobalVariables';
import ItemsScreen from "./ItemsScreen";
import AbstractItemView from "../components/AbstractItemView";
import DetailedAlbumView from "../components/DetailedAlbumView";
import ListAlbumItem from "../components/ListAlbumItem";
import ListArtistItem from '../components/ListArtistItem';
import DetailedArtistView from "../components/DetailedArtistView";
import FavouritesScreenStyle from "../styles/FavouritesScreenStyle";
import { Icon } from 'react-native-elements';

export default class FavouritesScreen extends Component {

  constructor(props) {
    super( props );
  }

  // sets tab bar info such as icon type and color
  getScreenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      if (route.name === 'Artists') {
        return (
          <Icon
            name= 'info'
            type= 'account-music'
            color= {(focused) ? FavouritesScreenStyle.iconFocusedColor 
                              : FavouritesScreenStyle.iconUnfocusedColor
            }
          />
        );
      } else if (route.name === 'Albums') {
        return (
          <Icon
            name= 'album'
            type= 'material'
            color= {(focused) ? FavouritesScreenStyle.iconFocusedColor 
                              : FavouritesScreenStyle.iconUnfocusedColor
            }
          />
        );
      }
    },
  })

  // displays favourites( Artists & Albums ) using tabs and ItemsScreen
  // see ItemsScreen.js for more info
  render() {
    const Tab = createBottomTabNavigator();
    return(
      <Tab.Navigator
        screenOptions={ this.getScreenOptions }
        tabBarOptions={{
          style: FavouritesScreenStyle.tabStyle,
          activeTintColor: FavouritesScreenStyle.tabActiveTintColor,
          inactiveTintColor: FavouritesScreenStyle.tabInactiveTintColor,
        }}
      >
        <Tab.Screen 
          name="Artists"
          children={ () => 
            <ItemsScreen 
              items={GlobalVariables.favouriteArtists}
              ItemView = {
                ({item}) => <AbstractItemView 
                  OverlayComponent={ () => 
                    <DetailedArtistView object={item} /> 
                  }
                  ListItemComponent={ () => 
                    <ListArtistItem object={item} /> 
                  }
                /> 
              }
            /> 
          } 
        />
        <Tab.Screen 
          name="Albums"
          children={ () => 
            <ItemsScreen 
              items={GlobalVariables.favouriteAlbums}
              ItemView = {
                ({item}) => <AbstractItemView 
                  OverlayComponent={ () => 
                    <DetailedAlbumView object={item} /> 
                  }
                  ListItemComponent={ () => 
                    <ListAlbumItem object={item} /> 
                  }
                /> 
              }
            /> 
          } 
        />
      </Tab.Navigator>
    );
  }

}