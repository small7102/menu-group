<template>
  <div class="h100">
    <Layout class="h100">
      <Header></Header>
      <Content class="flex-item content">
        <Layout class="h100">
          <Sider class="h100 sider">
            <sider-group/>
          </Sider>
          <Content>
            <Layout class="h100">
              <Header class="block-group-wrap">
                <div class="block-group">
                <div class="group-item" v-for="group in groupList" :key="group.gid" @click="handleSelectGroup(group)">
                  <div class="name">
                    {{group.name}}
                  </div>
                </div>
                </div>
              </Header>

            </Layout>
          </Content>
        </Layout>
      </Content>
    </Layout>
  </div>
</template>

<script>
import SiderGroup from './SiderGroup'
import { filterArr, getTreeList } from '@/libs/utils'
export default {
  name: 'HelloWorld',
  components: {
    SiderGroup
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      openedGroup: []
    }
  },
  computed: {
    groupList () {
      return this.$store.getters.groupList
    },
    openGroup () {
      return this.$store.getters.openGroup
    }
  },
  mounted () {
    this.$store.dispatch('getMembersObj')
    this.$store.dispatch('GetGroupList')
  },
  methods: {
    handleSelectGroup (item) {
      let opened = item.gid
      let list = this.$store.getters.groupList
      console.log('上次打开的group:'+this.openedGroup)
      console.log('这次要打开的group:'+opened)

      let isOpen = this.openedGroup.some((openitem) => {
        openitem === opened
      })
      if (isOpen) return
      this.openedGroup = []
      this.openedGroup.push(opened)
      getTreeList(list, item.fid, this.openedGroup)
      this.$store.commit('setOpenGroup', this.openedGroup)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  padding-top: 12px
}
.sider {
  background: #ffffff;
  width: 300px
}
.flex-item {
  flex: 1
}
.block-group-wrap {
  height: 300px;
  background: #ffffff;
  width: 100%;
  overflow-x: auto
}
.block-group{
  width: 2000px;
}
.group-item {
  width: 200px;
  padding: 20px;
  height: 150px;
  float: left;
  background: lightpink;
  margin: 10px 20px;
  cursor: pointer;
}
</style>
