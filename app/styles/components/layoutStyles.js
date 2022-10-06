import {StyleSheet} from 'react-native';
import {INPUT_TEXT_BACKGROUND_COLOR, PLACEHOLDER_COLOR, WHITE} from '../colors';

export default layoutStyles = {
  bg_white: {
    backgroundColor: WHITE,
  },
  flex_1: {
    flex: 1,
  },
  flex_center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  x_icon: {
    color: PLACEHOLDER_COLOR,
    fontSize: 24,
    textAlignVertical: 'center',
  },

  dashboard_header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  searchBarContainer: {
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: INPUT_TEXT_BACKGROUND_COLOR,
    height: 40,
  },
  event_container: {
    height: 284,
    width: '100%',
    borderRadius: 24,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#00000ae',
    alignItems: 'center',
  },
  upcoming_event_container: {
    position: 'absolute', 
    bottom: 0,
  }
};
