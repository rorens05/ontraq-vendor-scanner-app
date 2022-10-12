import {StyleSheet, Dimensions} from 'react-native';
import {ARROW_COLOR, BLUE, INPUT_TEXT_BACKGROUND_COLOR, PLACEHOLDER_COLOR, WHITE} from '../colors';
const { width, height } = Dimensions.get('screen');

export default layoutStyles = {
  bg_white: {
    backgroundColor: WHITE,
  },
  bg_blue: {
    backgroundColor: BLUE,
  },
  flex_1: {
    flex: 1,
  },
  flex_center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex_row: {
    flexDirection: 'row'
  },
  justify_content_space_evenly: {
    justifyContent: 'space-evenly'
  },
  justify_content_space_between: {
    justifyContent: 'space-between'
  },
  justify_content_center: {
    justifyContent: 'center'
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
  },
  profile_container: {
    position: 'absolute', 
    zIndex: 1,
  },
  upcoming_event_profile_image_container: {
    position: 'absolute', 
    zIndex: 1, 
    alignSelf: 'center',
  },
  upcoming_event_profile_info_container: {
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
    marginTop: -20, 
    backgroundColor: WHITE
  },
  attendess_container: {
    width: width * 0.8,
    backgroundColor: '#002E8A24',
    borderRadius: 10,
  },
  attendess_progrees: {
    backgroundColor: '#002E8A',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#103E78', 
    width: 150, 
    alignItems: 'center', 
    borderRadius: 10,
  },
  filter: {
    backgroundColor: '#103E78', 
    width: 120, 
    alignItems: 'center', 
    borderRadius: 10,
  },
  modal_button: {
    backgroundColor: '#103E78', 
    width: 260, 
    alignItems: 'center', 
    borderRadius: 10,
  },
  align_center_justify_space_evenly: {
    justifyContent: 'space-evenly', 
    alignItems: 'center',
  },
  align_items_center: {
    alignItems: 'center',
  },
  hr_line: {
    height: 2, 
    width: 100, 
    backgroundColor: ARROW_COLOR,
  },
  bottom_navigation: {
    position: 'absolute',
    height: 70,
  },
  announcement_item: { 
    backgroundColor: '#000000ae', 
    width: 230, 
    height: 173, 
    borderRadius: 15,
  },
  bottom: {
    position: 'absolute', 
    bottom: 0,
  },
  border_gray: {
    borderColor: '#9A9A9A',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  border_10:{
    borderRadius: 10,
  },
  qr_container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  today_date: {
    position: 'absolute', 
    top: 8,
    left: 8,
  },
  transaction: {
    marginBottom: 50
  }
};
