import Vuex from 'vuex'
import Vue from 'vue'
import { getGroupList, getMembers } from '../api/server'
import { getTrees } from '../libs/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    groupList: [],
    structedGroupList: [],
    membersObj: {},
    openGroup: []
  },
  getters: {
    groupList: state => state.groupList,
    structedGroupList: state => state.structedGroupList,
    membersObj: state => state.membersObj,
    openGroup: state => state.openGroup
  },
  mutations: {
    setGroupList (state, list) {
      state.groupList = list
    },
    setStructedGroupList (state, list) {
      state.structedGroupList = list
    },
    setMembersObj (state, obj) {
      state.membersObj = obj
    },
    setOpenGroup (state, arr) {
      state.openGroup = arr
    }
  },
  actions: {
    async GetGroupList ({commit}) {
      let result = await getGroupList()
      if (result) {
        let groupList = result
        let structedGroupList = getTrees(groupList, 0)

        commit('setGroupList', groupList)
        commit('setStructedGroupList', structedGroupList)
      }
    },
    getMembersObj ({commit}) {
      getMembers().then(res => {
        commit('setMembersObj', res)
      })
    }
  }
})
