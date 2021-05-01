import React, { Component } from "react";
import { ListItem, Avatar, Icon } from 'react-native-elements';
import * as GlobalVariables from '../GlobalVariables';
import * as GlobalFunctions from '../GlobalFunctions';
import ListAlbumItemStyle from "../styles/ListAlbumItemStyle";

class ListAlbumItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      heartReverse: false
    };
  }

  // sets heartIcon as reverse depending
  // whether album is already in the favourite list
  componentDidMount() {
    this.setState({ heartReverse: GlobalFunctions.contains( 
        GlobalVariables.favouriteAlbums, this.props.object,
        GlobalVariables.strAlbum
    ) });
  }

  setHeartReverse = (isReverse) => {
    this.setState({ heartReverse: isReverse });
  }

  // displays album information using received album object
  render() {
    const { heartReverse } = this.state;
      return (
        <ListItem 
          bottomDivider 
          containerStyle={ListAlbumItemStyle.containerStyle}
        >
          <Avatar
            source={{ uri: GlobalFunctions
              .getNonEmptyUri(this.props.object.strAlbumThumb) 
            }}
          />
          <ListItem.Content>
            <ListItem.Title style={ListAlbumItemStyle.listItemTitleStyle}>
              {this.props.object.strAlbum}
            </ListItem.Title>
            <ListItem.Subtitle style={ListAlbumItemStyle.listItemTitleStyle}>
              {this.props.object.intYearReleased}
            </ListItem.Subtitle>
          </ListItem.Content>
          <Icon
            raised = {false}
            reverse={heartReverse}
            name='heart'
            type='font-awesome'
            color= {ListAlbumItemStyle.iconColor}
            reverseColor = {ListAlbumItemStyle.reverseIconColor}
            onPress={() => {
              this.setHeartReverse(!heartReverse);
              GlobalVariables.favouriteAlbums = GlobalFunctions.modifyList( 
                GlobalVariables.favouriteAlbums, heartReverse, 
                this.props.object, GlobalVariables.strAlbum
              );
            }} 
          />
        </ListItem>
      );
  }
}

export default ListAlbumItem;