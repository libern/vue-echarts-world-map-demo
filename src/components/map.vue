<template>

  <div>
    <h2 id="map">
      <a href="#map">Map <small>(with GeoJSON &amp; image converter)</small></a>
      <button :class="{
        round: true,
        expand: expand.map
      }" @click="expand.map = !expand.map" aria-label="toggle"></button>
    </h2>
    <section v-if="expand.map">
      <figure style="background-color: #404a59;">
        <v-chart
          :options="dMap"
          :init-options="initOptions"
          ref="map"
          autoresize
        />
      </figure>
    </section>
  </div>

</template>

<script>

    import dMap from './data/map'


    export default {
        name: "mMap",
        data() {
            return {
                dMap,
                expand: {
                    map: true,
                },
                initOptions: {
                    renderer: 'canvas'
                },
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>
