<template>
  <button class="btn-go" @click="goToUserList">Go to user list</button>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  name: "HomePage",
  setup() {
    const router = useRouter();
    const goToUserList = () => {
      router.push("/users");
    };
    return {
      goToUserList,
    };
  },
};
</script>
<style scoped>
.btn-go {
  background-color: rgb(47, 34, 230);
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  padding: 16px;
}
</style>