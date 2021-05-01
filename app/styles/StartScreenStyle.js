import Color from '../config/Color';
import GlobalStyles from './GlobalStyles';

export default {
  viewStyle: [
    GlobalStyles.Flex, GlobalStyles.BackgroundColor
  ],
  iconColor: Color.FOREGROUND,
  iconReversedColor: Color.SECONDARY_FOREGROUND,
  iconContainerStyle: [
    GlobalStyles.AlignSelf, 
    GlobalStyles.MarginTop65Percent
  ],
  iconSize: 35,
}
