import Vue from "vue";
import Vuex from "vuex";
import { Store ,mapGetters } from "vuex";

// Vuex 사용 명시 
Vue.use(Vuex); 


const store = new Store({
  state: {
    list:[1,2]        
  },
  // vuex의 mutation은 이벤트들과 유사하다.
  // 실제 상태를 수정하고 , 다시 수정한 데이터를 받는 역할 
  mutations: {
    inputList (state, inputValue) {
    console.log('mutations :::::::::::::::::::');
    console.log(state);
    console.log(inputValue);
    
    // 데이터 베이스로 실제 데이터를 먼저 업데이트 치고 나서 상태 전환
    // 여기서 스토어 상태 업데이트 해주고 이전에
      state.list.push(inputValue);
    },
    allList (state, allList){
       state.list = allList;
    }
  },
  actions: { 
    inputList ({ commit }, inputList) {
      console.log(commit  +" : ");
      console.log("commit : "+inputList);
      store.commit('inputList',inputList);
    },
    getAllProducts (store){
      // 저장된 List를 DB 에서 조회하여 가져온다 (데이터 초기화)
     store.commit('allList', store.state.list);
    }
  },
  // store에 있는 데이터를 가공하여 가져와야 할때
  getters : {
    allProducts: state => state.list
  }
})


export default store;