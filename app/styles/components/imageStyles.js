import {BLUE, ICON_TINT_COLOR, PLACEHOLDER_COLOR, WHITE} from '../colors';
import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('screen');


export default imageStyle = {
  variant_300_300: {
    width: 300,
    height: 300,
  },
  mainLogo: {
    width: 200,
    height: 200,
  },
  thumbnailIcon: {
    width: 50,
    height: 50,
  },
  variant_144_144: {
    width: 144,
    height: 144,
  },
  variant_70_70: {
    width: 70,
    height: 70,
  },
  variant_50_50: {
    width: 50,
    height: 50,
  },
  variant_30_30: {
    width: 30,
    height: 30,
  },
  variant_25_25: {
    height: 25, 
    width: 25
  },
  variant_30_20: {
    width: 30,
    height: 20,
  },
  variant_200_200: {
    width: 200,
    height: 200,
  },
  variant_width_250: {
    width, 
    height: 250
  },
  variant_width_height_by_percent: {
    width: '100%', 
    height: '100%'
  },
  icon_tint: {
    tintColor: WHITE,
  },
  back_icon_tint: {
    tintColor: BLUE,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: PLACEHOLDER_COLOR,
  },
  event_image: {
    width: '100%',
    height: 174,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  upcoming_event_image: {
    width: 160, 
    height: 200, 
    borderRadius: 15,
  },
  arrow_color: {
    tintColor: BLUE,
  },
  announcement_image_item: { 
    width: 230, 
    height: 173, 
    borderRadius: 15,
  },
};
