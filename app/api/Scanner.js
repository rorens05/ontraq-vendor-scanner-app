import Base from './Base';

export default class Scanner extends Base {
  deviceInfo = async code => {
    return this.sendRequest({
      path: `/scanners/${code}`,
    });
  };

  verifyToken = async (data) => {
    return this.sendRequest({
      path: `/transactions/verify_qr_code`,
      method: 'POST',
      data
    })
  }

  createTransaction = async (data) => {
    return this.sendRequest({
      path: `/transactions`,
      method: 'POST',
      data
    })
  }
}
