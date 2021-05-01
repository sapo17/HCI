import Color from '../config/Color';
import GlobalStyles from './GlobalStyles';

export default {
  iconColor: Color.FOREGROUND,
  iconReverseColor: Color.SECONDARY_FOREGROUND,
  musicIconSize: 75,
  viewStyle: [
    GlobalStyles.MarginTop15Percent
  ],
  searchBarStyle: {
    containerStyle: [
      GlobalStyles.BackgroundColor,
      GlobalStyles.BorderTopColorTransparent,
      GlobalStyles.BorderBottomColorTransparent
    ],
    inputStyle: [
      GlobalStyles.SecondaryBackground, 
      GlobalStyles.ForegroundColor
    ],
    inputContainerStyle: [
      GlobalStyles.SecondaryBackground,
      GlobalStyles.BorderRadius
    ],
    leftIconContainerStyle: [
      GlobalStyles.SecondaryForeground
    ],
    placeHolderColor: Color.FOREGROUND,
    searchIconColor: Color.SECONDARY_FOREGROUND,
    clearIconColor: Color.SECONDARY_FOREGROUND
  }
}