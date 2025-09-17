const modalFunc = () => {
  const modal = document.querySelector(".cart-modal__overlay");
  const cartBtn = document.querySelector("#cart-btn");

  const openModal = () => {
    modal.classList.add("open");
  };

  const closeModal = () => {
    modal.classList.remove("open");
  };

  cartBtn.addEventListener("click", () => {
    openModal();
  });

  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("cart-modal__overlay") ||
      event.target.closest(".cart-modal__header--close")
    ) {
      closeModal();
    }
  });
};

const goodsFunc = () => {
  const container = document.querySelector("#goods-container");

  const goodsArray = [
    {
      id: 0,
      title: "Ролл угорь стандарт",
      description: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      price: 250,
      image: "roll-ugor.jpg",
    },
    {
      id: 1,
      title: "Калифорния лосось стандарт",
      description:
        "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.",
      price: 395,
      image: "california.jpg",
    },
    {
      id: 2,
      title: "Окинава стандарт",
      description:
        "Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...",
      price: 250,
      image: "okinava.jpg",
    },
    {
      id: 3,
      title: "Цезарь маки xl",
      description:
        "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...",
      price: 250,
      image: "cezar.jpg",
    },
    {
      id: 4,
      title: "Ясай маки стандарт 185г",
      description:
        "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг",
      price: 250,
      image: "yasai.jpg",
    },
    {
      id: 5,
      title: "Ролл с креветкой стандарт",
      description:
        "Рис, водоросли нори, креветки отварные сыр сливочный, огурцы",
      price: 250,
      image: "shrimproll.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      "<p style='width: 100%; text-align:center'>Loading</p>";
  };

  const randerRests = (array) => {
    container.innerHTML = "";

    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
        <div class="products-card">
              <div class="products-card__image">
                <img src="./images/goods/${card.image}" alt="${card.image}" />
              </div>
              <div class="products-card__decription">
                <div class="products-card__decription-row">
                  <h5 class="products-card__decription--name">
                    ${card.title}
                  </h5>
                </div>
                <div class="products-card__decription-row">
                  <p class="products-card__decription--text">
                    ${card.description}
                  </p>
                </div>
                <div class="products-card__decription-row">
                  <div class="products-card__decription-controls">
                    <button class="btn btn-primary">
                      В корзину
                      <img
                        src="/images/items/shopping-cart-white.svg"
                        alt="shopping-cart"
                      />
                    </button>
                    <span class="products-card__decription-controls--price">
                      ${card.price} ₽
                    </span>
                  </div>
                </div>
              </div>
            </div>`
      );
    });
  };

  if (container) {
    loading();
    setTimeout(() => {
      randerRests(goodsArray);
    }, 1000);
  }
};

modalFunc();
goodsFunc();
