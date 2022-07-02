<script>
export default
{
    props: ['route']
}
</script>

<template>
 <RouterLink :to=route>
     <button v-wave="{color: 'var(--hf-grey-light)', initialOpacity: 0.5,easing: 'ease-in',}" class="button-lila transition m-2 m-md-2">
         <slot />
     </button>
 </RouterLink>
</template>

<style>
.button-lila
{
  border-radius: 6px;
  background-color: var(--hf-lila-s);
  border: 2px solid var(--hf-lila-s);
  padding: 4px 30px 4px 30px;
  color:#B2B6D4;
  font-size: 20px;
}
.button-lila:hover
{
  border-radius: 6px;
  background-color: var(--hf-lila-op);
  border: 2px solid var(--hf-lila-s);
}
</style>