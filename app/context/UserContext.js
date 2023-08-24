import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
// import Auth from '../api/Auth';
// import Modal from '../../app/components/Modal.js'
export const UserContext = React.createContext();
export class UserContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      loading: true,
      // modalVisible: false,
      // navigation: null,
      // latitude: 14.6760,
      // longitude: 121.0437,
      // positionLoading: false
    };
  }

  componentDidMount = async () => {
  };

  // getCurrentPosition = async () => new Promise((resolve, reject) => {
  //   {
  //     this.setState({positionLoading: true})
  //     Geolocation.getCurrentPosition(
  //       position => {
  //         console.log({position});
  //         const {latitude, longitude} = position.coords;
  //         this.setState({latitude: latitude});
  //         this.setState({longitude: longitude})
  //         this.setState({positionLoading: false})
  //         resolve();
  //       },
  //       error => {
  //         console.log({error});
  //         this.setState({positionLoading: false})
  //         resolve();
  //       },
  //       {enableHighAccuracy: false, timeout: 50000},
  //     );
  //   }
  // });

  setUser = user => {
    // this.setState({user});
  };

  refreshUser = async () => {
    // console.log('Refreshing user');
    // await this.setState({loading: true});
    // let ID = JSON.parse(await AsyncStorage.getItem('userID'))
    // let response = await new Auth().profile(ID);
    // if (response.ok) {
    //   await this.setState({user: response.data});
    // } else {
    //   await this.setState({user: null});
    // }
    // await this.setState({loading: false});
    // return response;
  };

  // showModal = () => {
  //   this.setState({modalVisible: true})
  // }

  // hideModal = () => {
  //   this.setState({modalVisible: false})
  // }

  // setNavigation = (navigation) => {
  //   this.setState({navigation})
  //   console.log('Setting Navigation')
  //   console.log(navigation)
  // }

  render() {
    const {children} = this.props;
    const {user, loading, modalVisible, longitude, latitude, positionLoading} = this.state;
    return (
      <UserContext.Provider
        value={{
          data: {
            user: user,
            setUser: this.setUser,
            refreshUser: this.refreshUser,
            // latitude: latitude,
            // longitude: longitude,
            // positionLoading: positionLoading,
            // modalVisible: modalVisible,
            // showModal: this.showModal,
            // hideModal: this.hideModal,
            // setNavigation: this.setNavigation
          },
        }}>
        {/* {modalVisible && <Modal navigation={this.state.navigation} modalVisible={modalVisible} hideModal={() => this.hideModal()} />} */}
        {/* {children} */}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider;
