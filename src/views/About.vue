<template>
  <div class="about">
    <p>{{ count }}</p>
    <p>{{ cut }}</p>
    <Button type="primary" @click="onAdd">add</Button>
    <p>{{ data[0] }}</p>
    <Spin size="large" fix v-if="loading">
    </Spin>
  </div>
</template>

<script>
  import { mapActions, mapState, mapGetters } from 'vuex';
  import { ADD, INIT } from '../store/about';

  export default {
      mounted() {
          this.$store.commit('about/' + INIT);
      },
      computed: {
          ...mapState('about', ['count', 'data', 'loading']),
          ...mapGetters('about', ['cut']),
      },
      methods: {
          ...mapActions('about', [ADD]),
          onAdd() {
              this.add(10)
          },
      }
  }
</script>
