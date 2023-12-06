<script lang="ts">
  let classes = ''
export { classes as class }
  export let pin: boolean = false
  export let strongMask: boolean = false
</script>

<div class="section-footer {classes}" class:pin-footer={pin}>
  <slot />
</div>
