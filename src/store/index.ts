import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
interface InterState {
  currPageTitle: string;
}

const state: InterState = {
  currPageTitle: '首页',
};

const getters = {
  currPageTitle: (titleState: InterState) => titleState.currPageTitle,
};

const mutations = {
  SAVA_CURR_PAGE_TITLE(titleState: InterState, value: string): void {
    titleState.currPageTitle = value;
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
});
