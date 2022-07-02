<script>
export default
{
    props: ['route']
}
</script>

<template>
 <RouterLink :to=route>
     <button class="button-op transition m-2 m-md-0">
         <slot />
     </button>
 </RouterLink>
</template>

<style>
.button-op
{
  border-radius: 6px;
  background-color: transparent;
  border: none;
  padding: 4px 30px 4px 30px;
  color:#B2B6D4;
  font-size: 20px;
}
.button-op:hover
{
  border-radius: 6px;
  background-color: var(--hf-dark-l);
}
</style>