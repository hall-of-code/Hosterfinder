<script>
import topNavComponent from "./topNavComponent.vue";
import footerComponent from "./footerComponent.vue";
import FooterComponent from "./footerComponent.vue";
export default {
  components: {
    topNavComponent,
    FooterComponent
  }
}
</script>

<template>
    <div class="col-12 col-xl d-flex hf-bg-dark-m overflow-auto flex-wrap p-0 vh-100">
        <topNavComponent  data-aos="fade-right" />
        <router-view></router-view>
        <FooterComponent style="margin-top: 100vh;"/>
    </div>
</template>