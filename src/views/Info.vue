<template>
  <b-card>
    <VueShowdown
      :markdown="fileContent"
      flavor="github"
      :options="{ emoji: true }"
    />
  </b-card>
</template>

<script>
export default {
  name: "Info",
  props: ["fileContent"]
};
</script>
