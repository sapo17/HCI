import Color from '../config/Color';
import GlobalStyles from './GlobalStyles';

export default {
  viewStyle: [
    GlobalStyles.Flex, GlobalStyles.BackgroundColor,
    GlobalStyles.AlignItems, GlobalStyles.JustifyContentSpaceEvenly
  ],
  textStyle: [
    GlobalStyles.ForegroundColor
  ],
  textLinkStyle: [
    GlobalStyles.SecondaryForeground
  ],
  iconColor: Color.FOREGROUND,
  reverseIconColor: Color.SECONDARY_FOREGROUND,
  avatarContainerStyle: [
    GlobalStyles.MarginBottom
  ],
  iconContainerStyle: [
    GlobalStyles.MarginBottom
  ]
}