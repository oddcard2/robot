import Vuex from 'vuex';
// import axios from 'axios'
import axios from '../mock/MockData'

const state = {
  isloadingComplete: false,
  busy: false,
  status: null,
  statusError: false,

  modeChanging: false,
  modeError: false,

  speedChanging: false,
  speedError: false
};

const getters = {
    status(state: any) {
        return state.status
    },
    statusLoaded(state: any) {
        return state.isloadingComplete
    },
    isModeChanging(state: any) {
      return state.modeChanging
    },
    hasModeError(state: any) {
      return state.modeError
    },
    isSpeedChanging(state: any) {
      return state.speedChanging
    },
    hasSpeedError(state: any) {
      return state.speedError
    }
};

const mutations = {
  updateLoadingState(state: any, data: any) {
    state.isloadingComplete = data;
  },
  updateBusyState(state: any, data: any) {
    state.busy = data;
  },
  updateStatus(state: any, data: any) {
    state.status = data
  },
  updateStatusError(state: any, data: any) {
    state.statusError = data
  },

  updateModeChanging(state: any, data: any) {
    state.modeChanging = data
  },
  updateModeError(state: any, data: any) {
    state.modeError = data
  },

  updateSpeedChanging(state: any, data: any) {
    state.speedChanging = data
  },
  updateSpeedError(state: any, data: any) {
    state.speedError = data
  },
};

const actions = {
  getStatus(context: any) {
    context.commit('updateLoadingState', false);
    context.commit('updateBusyState', true);
    context.commit('updateStatusError', false);
    axios.get("/status").then((response: any) => {
        const data = response.data
        context.commit('updateLoadingState', true);
        context.commit('updateBusyState', false);
        context.commit('updateStatus', data);
    }, () => {
      context.commit('updateBusyState', false);
      context.commit('updateStatusError', true);
    });
  },
  forward(context: any) {
    context.commit('updateModeChanging', true);
    axios.post("/ab/mode/forward").then((response: any) => {
      context.commit('updateModeChanging', false);
    }, () => {
      context.commit('updateModeChanging', false);
      context.commit('updateModeError', true);
    });
  },
  backward(context: any) {
    context.commit('updateModeChanging', true);
    axios.post("/ab/mode/backward").then((response: any) => {
      context.commit('updateModeChanging', false);
    }, () => {
      context.commit('updateModeChanging', false);
      context.commit('updateModeError', true);
    });
  },
  stop(context: any) {
    context.commit('updateModeChanging', true);
    axios.post("/ab/mode/off").then((response: any) => {
      context.commit('updateModeChanging', false);
    }, () => {
      context.commit('updateModeChanging', false);
      context.commit('updateModeError', true);
    });
  },
  left(context: any) {
    context.commit('updateModeChanging', true);
    axios.post("/ab/rotation/left").then((response: any) => {
      context.commit('updateModeChanging', false);
    }, () => {
      context.commit('updateModeChanging', false);
      context.commit('updateModeError', true);
    });
  },
  right(context: any) {
    context.commit('updateModeChanging', true);
    axios.post("/ab/rotation/right").then((response: any) => {
      context.commit('updateModeChanging', false);
    }, () => {
      context.commit('updateModeChanging', false);
      context.commit('updateModeError', true);
    });
  },
  setSpeed(context: any, value: number) {
    context.commit('updateSpeedChanging', true);
    console.log("/ab/speed/" + value)
    axios.post("/ab/speed/" + value).then((response: any) => {
      context.commit('updateSpeedChanging', false);
    }, () => {
      context.commit('updateSpeedChanging', false);
      context.commit('updateSpeedError', true);
    });
  }
};

const store = new Vuex.Store({
 state,
 getters,
 mutations,
 actions,
});

export default store;

