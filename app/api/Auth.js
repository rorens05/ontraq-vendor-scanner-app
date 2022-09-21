import Base from './Base';

export default class Auth extends Base {
  login = async data => {
    return this.sendRequest({
      path: `/api/Account/login`,
      method: 'POST',
      data,
    });
  };

  profile = async id => {
    return this.sendRequest({
      path: `/api/User/${id}`,
    });
  };

}
