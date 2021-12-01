<template>
  <div>
    <h1>This is page of user: {{ $route.params.name }}</h1>
  </div>
</template>
<script>
export default {
  name: "User",
};
</script>