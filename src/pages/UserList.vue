<template>
  <ul class="user-list">
    <li v-for="user in users" :key="user.id">
      <router-link class="user-link" :to="`/users/${user.name}`">{{
        user.name
      }}</router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: "list",
  setup() {
    const users = [
      {
        name: "Alex",
        id: 1,
      },
      {
        name: "Mary",
        id: 2,
      },
      {
        name: "Ziggy",
        id: 3,
      },
    ];
    return {
      users,
    };
  },
};
</script>
<style scoped>
.user-list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
}
.user-link {
  color: #000;
  font-weight: 700;
  font-size: 20px;
  text-decoration: none;
  border: 1px solid #000;
  padding: 16px;
}
</style>