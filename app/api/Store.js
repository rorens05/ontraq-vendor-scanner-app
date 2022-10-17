import Base from './Base';

export default class Store extends Base {
  getStore = async code => {
    return this.sendRequest({
      path: `/devices/transactions?device_code=${code}`,
    });
  };
}
