<template>
  <v-app>
    <v-main>
      <div v-if="$store.state.page == 1">
      <Register/>
      </div>
      <div v-if="$store.state.page == 2"><tableshow/></div>
      
    </v-main>
  </v-app>
</template>

<script>
import { store } from "./store/index";
import Register from './components/Register';
import tableshow from './components/table';
export default {
  components:{
    Register,
   tableshow
  },
  store
};
</script>
