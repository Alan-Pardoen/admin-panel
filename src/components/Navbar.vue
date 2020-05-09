<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#" class="padding-remove"><img src="../assets/SUPTELECOM_CLAIR.png" style=" max-height: 40px;"/></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-on:click="HomeClick" active>Home</b-nav-item>
          <template v-if="GetConnect">
          <b-nav-item v-on:click="InfraViewClick" active>Infra View</b-nav-item>
          <b-nav-item v-on:click="InfraCommandClick" active>Infra Command</b-nav-item>
          <b-nav-item v-on:click="BlackListClick" active>Black List</b-nav-item>
          </template>
          <template v-else>
          <b-nav-item >Infra View</b-nav-item>
          <b-nav-item >Infra Command</b-nav-item>
          <b-nav-item >Black List</b-nav-item>
          </template>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          
          <b-nav-item-dropdown v-if="GetConnect" right>
            <!-- Using 'button-content' slot -->
            <template  v-slot:button-content>
              <em >User</em>
            </template>
            <b-dropdown-item >Profile</b-dropdown-item>
            <b-dropdown-item >Disconection</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item v-else v-on:click="LoginClick">Connect</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
    name: 'Navbar',
    computed:{
        GetConnect () { return this.$store.getters.GetConnect }
    },
    methods:{
      HomeClick(){
        this.$router.push('/home')
      },
      BlackListClick(){
        this.$router.push('/blacklist')
      },
      InfraCommandClick(){
        this.$router.push('/infracommand')
      },
      InfraViewClick(){
        this.$router.push('/infraview')
      },
      LoginClick(){
        this.$router.push('/login')
      }
    }
}
</script>
<style lang="scss">
.navbar-brand.padding-remove{
  padding: 0;
  margin-right: 0.2rem;
}
</style>