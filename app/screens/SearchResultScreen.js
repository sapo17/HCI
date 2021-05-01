import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as GlobalVariables from '../GlobalVariables';
import ArtistInfoScreen from "./ArtistInfoScreen";
import DescriptionScreen from "./DescriptionScreen";
import ItemsScreen from "./ItemsScreen";
import AbstractItemView from "../components/AbstractItemView";
import DetailedAlbumView from "../components/DetailedAlbumView";
import ListAlbumItem from "../components/ListAlbumItem";
import LoadingView from "../components/LoadingView";
import { Icon } from 'react-native-elements';
import SearchResultScreenStyle from "../styles/SearchResultScreenStyle";
export default class SearchResultScreen extends Component {

  // initializes SearchResultScreen object with
  // received artist( Object )
  constructor(props) {
    super( props );
    this.artist = this.props.route.params.artist;
    this.state = {
      isLoading: true,
      albums: {}
    }
  }

  // fetches artist albums( Array ) using 
  // received artist object
  // sets isLoading to true if albums
  // are fatched w/o any errors
  fetchArtistAlbum() {
    fetch( 
      GlobalVariables.baseUrl + GlobalVariables.endPoints.albumSearch 
      + this.artist.idArtist
    )
      .then( body => body.json() )
      .then( result => {
        if ( result.album instanceof Array ) {
          this.setState( {
            albums: result.album,
            isLoading: false
          });
        }
      })
      .catch( err => {
        alert("Could not retrieve albums.");
        console.error(err);
      });
  }

  // fetches artist albums
  // if received artist object is not undefined
  componentDidMount() {
    if ( this.artist !== undefined ) {
      this.fetchArtistAlbum();
    }
  }

  // sets tab bar info such as icon type and color
  getScreenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      if (route.name === 'Info') {
        return (
          <Icon
            name= 'info'
            type= 'font-awesome'
            color= {(focused) ? SearchResultScreenStyle.iconFocusedColor 
                              : SearchResultScreenStyle.iconUnfocusedColor
            }
          />
        );
      } else if (route.name === 'Description') {
        return (
          <Icon
            name= 'description'
            type= 'material'
            color= {(focused) ? SearchResultScreenStyle.iconFocusedColor 
                              : SearchResultScreenStyle.iconUnfocusedColor
            }
          />
        );
      } else if (route.name === 'Albums') {
        return (
          <Icon
            name= 'album'
            type= 'material'
            color= {(focused) ? SearchResultScreenStyle.iconFocusedColor 
                              : SearchResultScreenStyle.iconUnfocusedColor
            }
          />
        );
      }
    },
  })

  // isLoading === True: displays ActivityIndicator
  // otherwise: 
  // Default Display: ArtistInfoScreen
  // DescriptionScreen( artist description )
  // ItemsScreen( List of albums )
  render() {
    const Tab = createBottomTabNavigator();
    if ( this.state.isLoading ) {
      return ( <LoadingView /> );
    } else {
      return(
          <Tab.Navigator
            screenOptions={ this.getScreenOptions }
            tabBarOptions={{
              style: SearchResultScreenStyle.tabStyle,
              activeTintColor: SearchResultScreenStyle.tabActiveTintColor,
              inactiveTintColor: SearchResultScreenStyle.tabInactiveTintColor,
            }}
          >
            <Tab.Screen 
              name="Info"
              children={()=><ArtistInfoScreen artist={this.artist}/>} 
            />
            <Tab.Screen 
              name="Description" 
              children={()=><DescriptionScreen artist={this.artist}/>} 
            />
            <Tab.Screen 
              name="Albums"
              children={ () => 
                <ItemsScreen 
                  items={this.state.albums}
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

}