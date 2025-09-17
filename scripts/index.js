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

const restsFunc = () => {
  const container = document.querySelector("#rests-container");

  const restArray = [
    {
      id: 0,
      title: "Пицца плюс",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "pizza-plus.jpg",
    },
    {
      id: 1,
      title: "Тануки",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "tanuki.jpg",
    },
    {
      id: 2,
      title: "FoodBand",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "foodband.jpg",
    },
    {
      id: 3,
      title: "Жадина-пицца",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "leulos-pizza.jpg",
    },
    {
      id: 4,
      title: "Точка еды",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "tochka-eda.jpg",
    },
    {
      id: 5,
      title: "PizzaBurger",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "pizzaburger.jpg",
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
        <a class="products-card" href="./goods.html?id=${card.id}">
            <div class="products-card__image">
                <img src="./images/rests/${card.image}" alt="${card.image}" />
            </div>
            <div class="products-card__decription">
                <div class="products-card__decription-row">
                    <h4 class="products-card__decription--title">${card.title}</h4>
                    <div class="products-card__decription--badge">${card.time} мин</div>
                </div>
                <div class="products-card__decription-row">
                    <div class="products-card__decription-info">
                        <div class="products-card__decription-info--raiting">
                            <img src="./images/items/star.svg" alt="star" />
                            ${card.rating}
                        </div>
                        <div class="products-card__decription-info--price">
                            От ${card.price} ₽
                        </div>
                        <div class="products-card__decription-info--group">
                            ${card.type}
                        </div>
                    </div>
                </div>
            </div>
        </a>`
      );
    });
  };

  if (container) {
    loading();
    setTimeout(() => {
      randerRests(restArray);
    }, 1000);
  }
};

modalFunc();
restsFunc();
