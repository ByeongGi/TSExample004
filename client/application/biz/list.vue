<template>
  <div>
    <h2>List</h2>
    <listImp></listImp> 
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import listImp from './listImp.vue';

@Component({
  props: ['product'],
  components : {
    listImp
  }
})
export default class List extends Vue {

}
</script>
<style lang="scss">     


  
</style>