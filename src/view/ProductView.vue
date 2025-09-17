<template>
  <section class="products">
    <div class="container"></div>
    <div class="products-wrapper" id="goods-container">
      <div class="products-card" v-for="goods in goodsArray" :key="goods.id">
        <div class="products-card__image">
          <img :src="getUrl(goods.image)" alt="roll-ugor" />
        </div>
        <div class="products-card__decription">
          <div class="products-card__decription-row">
            <h5 class="products-card__decription--name">{{ goods.title }}</h5>
          </div>
          <div class="products-card__decription-row">
            <p class="products-card__decription--text">
              {{ goods.description }}
            </p>
          </div>
          <div class="products-card__decription-row">
            <div class="products-card__decription-controls">
              <button class="btn btn-primary">
                В корзину
                <img
                  src="../assets/images/items/shopping-cart-white.svg"
                  alt="shopping-cart"
                />
              </button>
              <span class="products-card__decription-controls--price">
                {{ goods.price }} ₽
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { goodsArray } from "@/constants/rests";

const getUrl = (name) => {
  return new URL(`../assets/images/goods/${name}`, import.meta.url);
};
</script>
