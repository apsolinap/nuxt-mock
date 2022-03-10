<template>
  <div>
    <div class="container">
      <Hero/>
    </div>
  </div>
</template>

<script>
import { largeCardSections, smallCardSections } from "@/static/data.js"
export default {
  data () {
    return {
      largeCardInfo: largeCardSections,
      smallCardSections
    }
  }
}
</script>

