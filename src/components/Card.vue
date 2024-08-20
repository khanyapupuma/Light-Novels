<template>
    <div class="card" >
    <div class="card-header">
      <slot name="cardHeader"></slot>
    </div>
    <div class="card-body">
      <slot name="cardBody"></slot>
    </div>
  </div>
</template>

<script>
export default {
name:"Card"
}
</script>

<style scoped>
.card{
    width: 18rems;
    }
</style>