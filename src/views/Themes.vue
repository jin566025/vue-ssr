<template>
  <div class="themes">
    <ol class="breadcrumb">
      <li class="active">Themes</li>
    </ol>
    <div class="media" v-for="item in themes">

      <div class="media-body">
        <h4 class="media-heading">{{item.product_name}}</h4>
        <p>{{item.product_desc}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import store from '../store'
export default {
  name: 'Theme',
  title() {
    return {
      title: 'Themes页面',
      keywords: '这里是Themes页面',
      description: 'vue-ssr-template, vue-server-renderer, themes'
    }
  },
  computed: {
    ...mapGetters({
      themes: 'getThemes'
    })
  },

	created(){
		store.dispatch('getThemes')
	},
  methods: {
    themeView(id) {
     // this.$router.push({ path: '/theme/' + id, params: { id } })
    }
  },
  asyncData({ store }) {
    return store.dispatch('getThemes')
  }
}

</script>
