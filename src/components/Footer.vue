<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-box">
        <router-link class="footer-logo logo" to="/">
          <img src="../assets/images/logo.jpg" alt="logo" />
        </router-link>
        <div class="footer-nav">
          <ul>
            <li><a href="./goods.html">Ресторан</a></li>
            <li><a href="./goods.html">Курьерам</a></li>
            <li><a href="./goods.html">Пресс-центр</a></li>
            <li><a href="./goods.html">Контакты</a></li>
          </ul>
        </div>
        <div class="footer-social">
          <img src="../assets/images/social/inst.png" alt="inst" />
          <img src="../assets/images/social/fb.png" alt="fb" />
          <img src="../assets/images/social/vk.png" alt="vk" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  min-height: 156px;
  display: flex;
  align-items: center;
  padding: 60px 0;
}

.footer-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  flex-wrap: wrap;
}

.footer-nav {
  flex-grow: 1;
}

.footer-nav ul li {
  color: #595959;
  font-size: 18px;
  font-weight: 400;
}

.footer-nav ul {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 15px;
  flex-wrap: wrap;
}

.footer-social {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20;
}
</style>
