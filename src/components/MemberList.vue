<template>
  <div class="member-wrap">
    <div v-for="(item, index) in memberList" :key="index" class="item">
      <span></span><span>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberList',
  props: {
    memberList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
  .member-wrap {
    padding: 0 44px;
    line-height: 40px
  }
  .item {
    text-align: left
  }
</style>

