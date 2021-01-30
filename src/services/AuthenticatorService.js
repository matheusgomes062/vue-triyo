import Api from '@/services/Api';

export default {
  registerClient(clientInfo) {
    return Api().post('registerClient', clientInfo);
  }
};
