<template>
    <header class="header">
      <div class="container">
        <div class="header-box">
          <router-link class="header-logo logo" to="/">
            <img src="../assets/images/logo.jpg" alt="logo" />
          </router-link>
          <div class="headder-controls">
            <button class="btn btn-primary">
              <img src="../assets/images/items/user.png" alt="user" />
              Войти
            </button>
            <button class="btn btn-outline" @click="openModal()">
              <img src="../assets/images/items/shopping-cart.png" alt="card" />
              Корзина
            </button>
          </div>
        </div>
      </div>
    </header>
</template>

<script setup>
    const emit = defineEmits(['toggleModal'])
    const openModal = () => emit('toggleModal')
</script>

<style scoped>
.header {
  min-height: 124px;
  display: flex;
  align-items: center;
}

.header-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.headder-controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}
</style>