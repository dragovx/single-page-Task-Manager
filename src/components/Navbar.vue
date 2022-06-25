<template>
  <nav class="green darken-1">
    <div class="nav-wrapper" >
      <router-link to="/list" class="brand-logo">Tasks</router-link>
      <ul class="right hide-on-med-and-down row">
        <li><router-link tag="a" to="/" class="active">Create</router-link></li>
        <li><router-link tag="a" to="/list" class="active">List</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  nav {
      padding: 0 2rem;
  }
</style>