<template>
  <div>
    <h2>List{{test}} ::::::::: </h2> 
    입력 데스트 <input @keyup.enter="inputList" v-model="inPutText" type="text"/> 
    <listImp v-bind:products="products"></listImp> 
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import {mapGetters} from 'vuex';
import Component from 'vue-class-component';
import listImp from './listImp.vue';

@Component({
  components : {
    listImp
  },  
  // 데이터의 변화가 있으면 동작하는 속성
  computed :mapGetters({
    products: 'allProducts'
  })
}) 
export default class List extends Vue {

 private inPutText :string;
 
 created () {
 // 컴포넌트가 생성될때 호출되는 메소드 
    this.$store.dispatch('getAllProducts')
 }
 // 컴포넌트 커스텀 메서드 
 inputList (event :KeyboardEvent) :void {
    if(this.inPutText !== ""){
    console.log(this.inPutText);  
    this.$store.dispatch("inputList",this.inPutText);
    
      console.log(this.inPutText = "");
    }
    
 }

}
</script>
<style lang="scss">     


  
</style>