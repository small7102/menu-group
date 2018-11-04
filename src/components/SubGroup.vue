<template>
  <div class="sider-group">
    <template v-for="item in groupList">
      <Submenu :key="item.gid" :name="item.gid">
        <template slot="title">
          <Icon type="ios-people" />
          {{item.name}}
        </template>
        <template v-if="item.children && item.children.length > 0">
          <sub-group :groupList="item.children"></sub-group>
        </template>
        <member-list :memberList="membersObj[item.gid]"/>
      </Submenu>
    </template>
  </div>
</template>

<script>
import MemberList from './MemberList'

export default {
  name: 'SubGroup',
  props: {
    groupList: Array
  },
  components: {
    MemberList
  },
  computed: {
    membersObj () {
      let membersObj = this.$store.getters.membersObj
      return membersObj
    }
  },
  mounted () {
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
