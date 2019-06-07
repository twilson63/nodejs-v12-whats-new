<script>
  import { setContext } from 'svelte'
  import { action, store } from './store'
  import navHelper from './lib/nav-helper'
  import Start from './pages/Start.html'
  
  setContext('store', store)
  setContext('action', action)

  $: page = $store.route
</script>
<div on:click={navHelper(action('doUpdateUrl'))}>
  <svelte:component this={page} />
</div>
<style>
  :global(body) {
    height: 100vh;
  }
  div {
    height: 100%;
  }
</style>
