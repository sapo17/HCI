import React, { Component } from "react";
import { ListItem, Avatar, Icon } from 'react-native-elements';
import * as GlobalVariables from '../GlobalVariables';
import * as GlobalFunctions from '../GlobalFunctions';
import ListArtistItemStyle from "../styles/ListArtistItemStyle";

class ListArtistItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      heartReverse: false
    };
  }

  // sets heartIcon as reverse depending
  // whether artist is already in the favourite list
  componentDidMount() {
    this.setState({ heartReverse: GlobalFunctions.contains( 
        GlobalVariables.favouriteArtists, this.props.object,
        GlobalVariables.strArtist
    ) });
  }

  setHeartReverse = (isReverse) => {
    this.setState({ heartReverse: isReverse });
  }

  // displays artist information using received artist object
  render() {
    const { heartReverse } = this.state;
      return (
        <ListItem 
          bottomDivider
          containerStyle={ListArtistItemStyle.containerStyle}
        >
          <Avatar
            title={'test'}
            source={{ uri: GlobalFunctions
              .getNonEmptyUri(this.props.object.strArtistThumb) 
            }}
          />
          <ListItem.Content>
            <ListItem.Title style={ListArtistItemStyle.listItemTitleStyle}>
              {this.props.object.strArtist}
            </ListItem.Title>
            <ListItem.Subtitle style={ListArtistItemStyle.listItemTitleStyle}>
              {this.props.object.strGenre}
            </ListItem.Subtitle>
          </ListItem.Content>
          <Icon
            raised = {false}
            reverse={heartReverse}
            name='heart'
            type='font-awesome'
            color= {ListArtistItemStyle.iconColor}
            reverseColor = {ListArtistItemStyle.reverseIconColor}
            onPress={() => {
              this.setHeartReverse(!heartReverse);
              GlobalVariables.favouriteArtists = GlobalFunctions.modifyList( 
                GlobalVariables.favouriteArtists, heartReverse, 
                this.props.object, GlobalVariables.strArtist
              );
            }} 
          />
        </ListItem>
      );
  }
}

export default ListArtistItem;