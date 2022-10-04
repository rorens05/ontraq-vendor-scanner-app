import {INPUT_TEXT_BACKGROUND_COLOR, PLACEHOLDER_COLOR} from '../colors';

export default layoutStyles = {
  flex_1: {
    flex: 1,
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
};
