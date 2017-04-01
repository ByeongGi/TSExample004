<template>      
  <div>
    
    <app-header id="app-header" />
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link> 
    <router-link to="/List">Go to LIST</router-link>   
    <router-view></router-view>
    <app-footer id="app-footer"/>
    
    </div>
  </div>
</template>  
<style lang="scss">     
$icon-font-path: '~bootstrap-sass/assets/fonts/bootstrap/';
@import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap";
@import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/theme";



</style>