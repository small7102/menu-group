<template>
  <div class="sider-group">
    <Menu width="auto" :open-names="openGroup" ref="menu" @on-open-change="handleOpenChange">
      <template v-for="(item) in groupList">
        <Submenu :name="item.gid" :key="`menu-${item.gid}`">
          <template slot="title">
            <Icon type="ios-people" />
            {{item.name}}
          </template>
          <template v-if="item.children && item.children.length > 0">
            <sub-group :groupList=" item.children"/>
          </template>
          <member-list :memberList="membersObj[item.gid]"></member-list>
        </Submenu>
      </template>
    </Menu>
  </div>
</template>

<script>
import SubGroup from './SubGroup'
import MemberList from './MemberList'
import Emitter from 'iview/src/mixins/emitter'
import { filterArr, getTreeList } from '@/libs/utils'

export default {
  name: 'SiderGroup',
  components: {
    SubGroup,
    MemberList
  },
  mixins: [ Emitter ],
  computed: {
    groupList () {
      let list = this.$store.getters.structedGroupList
      return list
    },
    membersObj () {
      let membersObj = this.$store.getters.membersObj
      console.log(membersObj)
      return membersObj
    },
    openGroup () {
      return this.$store.getters.openGroup
    }
  },
  data () {
    return {
      openedGroup: []
    }
  },
  methods: {
    handleOpenChange (arr) {
      let list = this.$store.getters.groupList
      let opened = filterArr(this.openedGroup, arr)
      if (arr.length < this.openedGroup.length) return

      this.openedGroup = []
      let fid = ''
      for (let value of list) {
        if (value.gid === opened[0]) fid = value.fid
      }
      this.openedGroup.push(opened[0])
      getTreeList(list, fid, this.openedGroup)
      this.$store.commit('setOpenGroup', this.openedGroup)

      // this.openedGroup = arr
      // // this.$store.commit('setOpenGroup', opened)
      // // if (opened.length === 0)
      // let selectedGroup = {}
      // for (let value of list) {
      //   if (value.gid === opened[0]) selectedGroup = value
      // }

      // let deep = selectedGroup.deep
      // console.log('层级：'+deep)

      // const a = []
      // list.forEach(item => { // 筛选层级为deep选项的gid
      //   if (item.deep === deep) a.push(item.gid)
      // })
      // console.log('层级为'+deep+'的group:'+a)
      // let b = filterArr(arr, a)
      // console.log('过滤层级为'+deep+'后的group:'+b)
      // b = b.concat(opened)
      // console.log('要展开后的group:'+b)
      // this.$store.commit('setOpenGroup', b)
    }
  },
  watch: {
    groupList (val) {
      let arr = []
      arr.push(val[0].gid)
      this.$store.commit('setOpenGroup', arr)
    },
    openGroup (val) {
      this.openedGroup = val
      this.$nextTick(() => {
        this.$refs.menu.updateOpened()
      })
    }
  }
}
</script>

<style>
  .ivu-menu-vertical .ivu-menu-submenu-title-icon {
    float: left;
    transform: rotate(-90deg);
  }
  .ivu-menu-opened>*>.ivu-menu-submenu-title-icon {
    transform: rotate(0deg);
  }
</style>

