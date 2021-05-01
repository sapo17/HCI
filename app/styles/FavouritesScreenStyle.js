import Color from '../config/Color';
import GlobalStyles from './GlobalStyles';

export default {
  tabStyle: [
    GlobalStyles.BackgroundColor,
    GlobalStyles.BorderTopColor
  ],
  iconFocusedColor: Color.FOREGROUND,
  iconUnfocusedColor: Color.SECONDARY_FOREGROUND,
  tabActiveTintColor: Color.FOREGROUND,
  tabInactiveTintColor: Color.SECONDARY_FOREGROUND
}
