<script>
import authButtonComponent from "./elements/buttons/authButtonComponent.vue";
import topButtonComponent from "./elements/buttons/topButtonComponent.vue";
import AccDropdownComponent from "./elements/buttons/accDropdownComponent.vue";

export default
{
  components: {
    authButtonComponent,
    topButtonComponent,
    AccDropdownComponent
  },
  data() {
    let r = Math.random(0,1);
    let x = false;
    console.log(r, x);
    if(r >= 0.5)
    {
      x = true;
    }
    return {
      r: r,
      x: x
    }
  }
}
</script>

<template>
    <div class="container-fluid">
        <div class="row p-4 d-flex align-items-center justify-content-xl-end justify-content-center">
             <div class="col-md-12 col-7 d-flex m-3 m-xl-2 justify-content-center justify-content-md-end align-items-center flex-wrap">
                <topButtonComponent route="/about">{{ $t("Anbieterliste") }}</topButtonComponent>
                <topButtonComponent route="/about" class="pb-3 pb-md-0">{{$t('Ankündigungen')}}</topButtonComponent>
                <authButtonComponent v-if="x == false" route="/about">{{$t('Einloggen')}}</authButtonComponent>
                <authButtonComponent v-if="x == false" route="/about">{{$t('Registrieren')}}</authButtonComponent>
                <AccDropdownComponent v-if="x == true"></AccDropdownComponent>
            </div>
        </div>
    </div>
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