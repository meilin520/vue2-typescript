import Vue from 'vue';
import Vuex from 'vuex';
import { AddressInfo } from '../interface/order';

Vue.use(Vuex);
interface InterState {
  currPageTitle?: string;
  currAddressInfo?: AddressInfo;
}

const state: InterState = {
  currPageTitle: '首页',
  currAddressInfo: {},
};

const getters = {
  currPageTitle: (titleState: InterState) => titleState.currPageTitle,
  currAddressInfo: (addressState: InterState) => addressState.currAddressInfo,
};

const mutations = {
  SAVA_CURR_PAGE_TITLE(titleState: InterState, value: string): void {
    titleState.currPageTitle = value;
  },
  SAVA_CURR_ADDRESS_INFO(addressState: InterState, value: AddressInfo): void {
    addressState.currAddressInfo = value;
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
});
