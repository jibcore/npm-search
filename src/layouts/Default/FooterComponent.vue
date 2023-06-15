<template>
  <v-footer class="footer-wrp">
    <v-container fluid class="footer-container">
      <div>
        <span>Ruslan Yefimov, Full-Stack Software Engineer</span>
      </div>
      <div>
        <v-btn
          icon="mdi-linkedin"
          variant="plain"
          :ripple="false"
          href="https://www.linkedin.com/in/ruslan-yefimov/"
          target="_blank"
        />
        <v-btn icon="mdi-gmail" variant="plain" :ripple="false" href="mailto:r.effimov@gmail.com" />
      </div>
    </v-container>
  </v-footer>
</template>

<style lang="postcss" scoped>
.footer-wrp {
  max-height: var(--footer-max-height);
  .footer-container {
    max-width: var(--content-max-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px 0 16px;
  }
}
</style>
