<template>
    <ul>
    <li>蔬菜
      <router-link to="/vegetables"></router-link>
    </li>
    <li>肉食
      <router-link to="/meat"></router-link>
    </li>
    <li>服装
      <router-link to="/clothes"></router-link>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      content: ''
    }
  },
  mounted () {
    if(this.$router.params.categ==='111') {
      this.content = '白菜白菜白菜白菜白菜白菜白菜白菜'
    }
  }
}
</script>
