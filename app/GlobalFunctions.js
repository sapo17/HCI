// returns a modified list depending on a predicate
// if predicate is true, the given item will be removed

import Color from "./config/Color";
import GlobalStyles from "./styles/GlobalStyles";
import { StyleSheet } from 'react-native';

// otherwise the item will be added to the list
export function modifyList( list, predicate, item, attr ) {
  if ( predicate ) {
    list = removeItem( list, item, attr )
  } else {
    list.push( item );
  }

  return list;

}

// filters out the item with the given attribute 
// from the given list
export function removeItem( list, item, attr ) {
  return list.filter( elem => elem[attr] !== item[attr] );
}

// returns true if the item with the given attr
// is contained in the list, otherwise false
export function contains( list, item, attr ) {
  let result = list.find( elem => elem[attr] === item[attr] );
  return result !== undefined; 
}

// returns the given string if non empty 
// otherwise a default string
export function getNonEmptyUri( uri ) {
  // No-Photo image can be also found 
  // @ https://www.pinterest.at/pin/396598310917406183/
  return uri === "" ? 
    'https://cdn.dribbble.com/users/55871/screenshots/2158022/no_photo.jpg' :
    uri;
}