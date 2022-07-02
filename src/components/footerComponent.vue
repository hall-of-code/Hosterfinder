<template>
  <div class="container-fluid hf-bg-dark-l p-3">
    <div class="row p-4 d-flex align-items-center justify-content-xl-between justify-content-center">
      <div class="col-md-3 col-12 d-flex m-3 m-xl-2 justify-content-center align-items-center align-text-center">
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
          <label  @click="$i18n.locale = 'de'" v-wave="{color: 'var(--hf-grey-light)', initialOpacity: 0.5,easing: 'ease-in',}" class="btn btn-outline-light" for="btnradio1">🇩🇪 Deutsch</label>

          <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
          <label @click="$i18n.locale = 'en'" v-wave="{color: 'var(--hf-grey-light)', initialOpacity: 0.5,easing: 'ease-in',}" class="btn btn-outline-light" for="btnradio2">🇬🇧 English</label>
        </div>
      </div>
      <div
        class="col-md-4 col-12 d-flex m-3 m-xl-2 justify-content-center align-items-center align-text-center flex-wrap">
        <a href="" class="hf-txt-light m-2 anima-trans">{{ $t('Für Anbieter')}}</a>
        <a href="" class="hf-txt-light m-2 anima-trans">{{ $t('API Docs')}}</a>
        <a href="" class="hf-txt-light m-2 anima-trans">{{ $t('Uptime')}}</a>
        <a href="" class="hf-txt-light m-2 anima-trans">{{ $t('Die Geschichte')}}</a>
        <a href="" class="hf-txt-light m-2 anima-trans">{{ $t('Impressum')}}</a>
      </div>
      <div class="col-md-3 col-12 d-flex m-3 m-xl-2 justify-content-center align-items-center align-text-center">
        <p class="hf-txt-light p-0 m-0 me-1">Made with </p> <span
          class="material-symbols-outlined hf-txt-light hf-txt-redpink px-2 pulse"
          style="font-size: 1.2rem;">favorite</span>
        <p class="hf-txt-light p-0 m-0 ms-1"> in Germany</p>
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