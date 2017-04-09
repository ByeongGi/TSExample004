<template>
  <table class="table table-hover product-table">
    <thead>
      <tr>
        <th>Name</th>

      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" track-by="id">
        <td>{{product}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
 name :'row', 
 props  :['products']
}
</script>