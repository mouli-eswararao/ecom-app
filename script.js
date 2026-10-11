const products = [
  {
    id: "oak-lounge",
    name: "Oak lounge chair",
    category: "Seating",
    price: 640,
    compareAt: 720,
    badge: "Sale",
    material: "White oak, linen",
    origin: "Oregon",
    rating: 4.9,
    reviews: 38,
    featured: 1,
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80",
    description:
      "A low, generous chair with a steam-bent oak frame and a removable linen cushion. Built to be reupholstered, not replaced.",
  },
  {
    id: "linen-throw",
    name: "Stonewashed linen throw",
    category: "Textiles",
    price: 128,
    material: "European linen",
    origin: "Portugal",
    rating: 4.8,
    reviews: 64,
    featured: 2,
    image:
      "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?auto=format&fit=crop&w=1200&q=80",
    description:
      "A heavyweight throw in undyed flax. It wrinkles on purpose and gets softer every season.",
  },
  {
    id: "pourer",
    name: "Speckled clay pourer",
    category: "Ceramics",
    price: 74,
    material: "Stoneware",
    origin: "Oaxaca",
    rating: 4.7,
    reviews: 51,
    featured: 3,
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=80",
    description:
      "A one-liter pourer with a pulled spout and a satin glaze that shows the clay body underneath.",
  },
  {
    id: "brass-lamp",
    name: "Brass table lamp",
    category: "Lighting",
    price: 286,
    material: "Cast brass, linen shade",
    origin: "Jaipur",
    rating: 4.9,
    reviews: 22,
    featured: 4,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80",
    description:
      "A small lamp with a warm, downward pool of light. The brass is left unlacquered so it will darken with touch.",
  },
  {
    id: "bowl-set",
    name: "Everyday bowl set",
    category: "Ceramics",
    price: 96,
    material: "Speckled stoneware",
    origin: "Oaxaca",
    rating: 4.6,
    reviews: 80,
    featured: 5,
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80",
    description:
      "Four bowls sized for soup, grain, or fruit. Dishwasher safe, and stacked they take almost no shelf.",
  },
  {
    id: "wool-rug",
    name: "Hand-knotted wool rug",
    category: "Textiles",
    price: 890,
    badge: "Limited",
    material: "New Zealand wool",
    origin: "Kathmandu",
    rating: 5,
    reviews: 14,
    featured: 6,
    image:
      "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=1200&q=80",
    description:
      "A 5 by 8 foot rug in oat and charcoal. Each one takes a workshop about six weeks to knot.",
  },
  {
    id: "marble-tray",
    name: "Honored marble tray",
    category: "Accessories",
    price: 84,
    material: "Bardiglio marble",
    origin: "Carrara",
    rating: 4.5,
    reviews: 29,
    featured: 8,
    image:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80",
    description:
      "A low tray for keys, fruit, or a morning cup. The grey veining is different on every piece.",
  },
  {
    id: "side-table",
    name: "Walnut side table",
    category: "Tables",
    price: 420,
    material: "Black walnut",
    origin: "Michigan",
    rating: 4.8,
    reviews: 17,
    featured: 7,
    image:
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1200&q=80",
    description:
      "A round table with a slight overhang and a single turned leg. Oil finished, so water rings can be sanded out.",
  },
  {
    id: "bedding",
    name: "Percale bedding set",
    category: "Textiles",
    price: 248,
    compareAt: 290,
    badge: "Sale",
    material: "Organic cotton",
    origin: "Portugal",
    rating: 4.7,
    reviews: 103,
    featured: 9,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
    description:
      "A crisp queen set: duvet cover and two shams in undyed percale. Cool in summer, substantial in winter.",
  },
  {
    id: "glass-vase",
    name: "Smoke glass vase",
    category: "Accessories",
    price: 62,
    material: "Hand-blown glass",
    origin: "Czech Republic",
    rating: 4.4,
    reviews: 41,
    featured: 10,
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1200&q=80",
    description:
      "A short cylinder in grey smoke glass. Wide enough for branches, narrow enough for a single stem.",
  },
  {
    id: "leather-tote",
    name: "Vegetable-tan tote",
    category: "Accessories",
    price: 310,
    material: "Full-grain leather",
    origin: "Florence",
    rating: 4.9,
    reviews: 26,
    featured: 11,
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=80",
    description:
      "An unstructured tote that stands on its own. The leather is unfinished and will mark with rain and sunlight.",
  },
  {
    id: "candle",
    name: "Fig and cedar candle",
    category: "Lighting",
    price: 42,
    material: "Soy wax, cotton wick",
    origin: "Portland",
    rating: 4.6,
    reviews: 120,
    featured: 12,
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=80",
    description:
      "A 50-hour candle poured in a reusable ceramic cup. Green fig, cedar shavings, and a little smoke.",
  },
];

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const state = {
  category: "all",
  query: "",
  sort: "featured",
  cart: loadCart(),
};

const grid = document.querySelector("#product-grid");
const emptyState = document.querySelector("#empty-state");
const resultCount = document.querySelector("#result-count");
const cartCount = document.querySelector("#cart-count");
const cartItems = document.querySelector("#cart-items");
const cartFoot = document.querySelector("#cart-foot");
const cartDrawer = document.querySelector("#cart-drawer");
const productModal = document.querySelector("#product-modal");
const productDetail = document.querySelector("#product-detail");
const checkoutModal = document.querySelector("#checkout-modal");
const checkoutForm = document.querySelector("#checkout-form");
const checkoutSummary = document.querySelector("#checkout-summary");
const orderSuccess = document.querySelector("#order-success");
const formError = document.querySelector("#form-error");
const toast = document.querySelector("#toast");

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("mira-cart") || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem("mira-cart", JSON.stringify(state.cart));
}

function formatPrice(amount) {
  return money.format(amount);
}

function cartCountTotal() {
  return state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function cartSubtotal() {
  return state.cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}

function shippingCost(subtotal) {
  if (subtotal === 0) return 0;
  return subtotal >= 150 ? 0 : 18;
}

function visibleProducts() {
  const query = state.query.trim().toLowerCase();
  let list = products.filter((product) => {
    const inCategory = state.category === "all" || product.category === state.category;
    const haystack = `${product.name} ${product.category} ${product.material} ${product.description}`.toLowerCase();
    return inCategory && (!query || haystack.includes(query));
  });

  const sorters = {
    featured: (a, b) => a.featured - b.featured,
    "price-asc": (a, b) => a.price - b.price,
    "price-desc": (a, b) => b.price - a.price,
    name: (a, b) => a.name.localeCompare(b.name),
  };
  return list.sort(sorters[state.sort]);
}

function priceMarkup(product) {
  if (!product.compareAt) return `<span class="price">${formatPrice(product.price)}</span>`;
  return `<span class="price"><s>${formatPrice(product.compareAt)}</s>${formatPrice(product.price)}</span>`;
}

function renderProducts() {
  const list = visibleProducts();
  resultCount.textContent =
    list.length === 1 ? "1 piece" : `${list.length} pieces`;
  emptyState.hidden = list.length !== 0;
  grid.hidden = list.length === 0;

  grid.innerHTML = list
    .map(
      (product) => `
      <article class="product-card">
        <button class="card-media" type="button" data-open="${product.id}" aria-label="View ${product.name}">
          <img src="${product.image}" alt="${product.name}" />
          ${product.badge ? `<span class="badge ${product.badge === "Sale" ? "sale" : ""}">${product.badge}</span>` : ""}
        </button>
        <div class="card-body">
          <div class="card-meta">
            <span>${product.category}</span>
            <span>${product.rating} · ${product.reviews}</span>
          </div>
          <h3>${product.name}</h3>
          <div class="price-row">${priceMarkup(product)}</div>
          <div class="card-actions">
            <button class="btn btn-ghost" type="button" data-open="${product.id}">Details</button>
            <button class="btn btn-primary" type="button" data-add="${product.id}">Add</button>
          </div>
        </div>
      </article>`
    )
    .join("");
}

function renderCart() {
  const count = cartCountTotal();
  cartCount.hidden = count === 0;
  cartCount.textContent = String(count);
  const subtotal = cartSubtotal();
  const shipping = shippingCost(subtotal);

  if (state.cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <h3>Your cart is empty</h3>
        <p>Add a chair, a bowl, or something small for the table.</p>
      </div>`;
    cartFoot.hidden = true;
    return;
  }

  cartFoot.hidden = false;
  cartItems.innerHTML = state.cart
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      if (!product) return "";
      return `
        <article class="cart-line">
          <img src="${product.image}" alt="" />
          <div>
            <div class="line-top">
              <h3>${product.name}</h3>
              <button class="remove-btn" type="button" data-remove="${product.id}">Remove</button>
            </div>
            <div>${formatPrice(product.price * item.qty)}</div>
            <div class="qty" aria-label="Quantity for ${product.name}">
              <button type="button" data-qty="${product.id}" data-delta="-1" aria-label="Decrease quantity">−</button>
              <span>${item.qty}</span>
              <button type="button" data-qty="${product.id}" data-delta="1" aria-label="Increase quantity">+</button>
            </div>
          </div>
        </article>`;
    })
    .join("");

  document.querySelector("#cart-subtotal").textContent = formatPrice(subtotal);
  document.querySelector("#cart-shipping").textContent =
    shipping === 0 ? "Free" : formatPrice(shipping);
}

function addToCart(id) {
  const existing = state.cart.find((item) => item.id === id);
  if (existing) existing.qty += 1;
  else state.cart.push({ id, qty: 1 });
  saveCart();
  renderCart();
  const product = products.find((entry) => entry.id === id);
  showToast(`${product.name} added to cart`);
}

function setQty(id, delta) {
  const item = state.cart.find((entry) => entry.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.cart = state.cart.filter((entry) => entry.id !== id);
  saveCart();
  renderCart();
}

function showToast(message) {
  toast.hidden = false;
  toast.textContent = message;
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.hidden = true;
  }, 2200);
}

function openCart() {
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  if (productModal.hidden && checkoutModal.hidden) document.body.classList.remove("locked");
}

function openProduct(id) {
  const product = products.find((entry) => entry.id === id);
  if (!product) return;
  productDetail.innerHTML = `
    <div class="product-layout">
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-info">
        <p class="eyebrow">${product.category}</p>
        <h2 id="product-title">${product.name}</h2>
        ${priceMarkup(product)}
        <p class="desc">${product.description}</p>
        <ul class="detail-list">
          <li><span>Material</span><strong>${product.material}</strong></li>
          <li><span>Made in</span><strong>${product.origin}</strong></li>
          <li><span>Rating</span><strong>${product.rating} from ${product.reviews} notes</strong></li>
        </ul>
        <button class="btn btn-primary btn-block" type="button" data-add="${product.id}">Add to cart</button>
      </div>
    </div>`;
  productModal.hidden = false;
  document.body.classList.add("locked");
}

function closeProduct() {
  productModal.hidden = true;
  if (!cartDrawer.classList.contains("is-open") && checkoutModal.hidden) {
    document.body.classList.remove("locked");
  }
}

function openCheckout() {
  if (state.cart.length === 0) return;
  const subtotal = cartSubtotal();
  const shipping = shippingCost(subtotal);
  checkoutForm.hidden = false;
  orderSuccess.hidden = true;
  formError.hidden = true;
  checkoutSummary.innerHTML = `
    <p><span>${cartCountTotal()} items</span><strong>${formatPrice(subtotal)}</strong></p>
    <p><span>Shipping</span><strong>${shipping === 0 ? "Free" : formatPrice(shipping)}</strong></p>
    <p><span>Total</span><strong>${formatPrice(subtotal + shipping)}</strong></p>`;
  checkoutModal.hidden = false;
  closeCart();
  document.body.classList.add("locked");
}

function closeCheckout() {
  checkoutModal.hidden = true;
  document.body.classList.remove("locked");
}

function setCategory(category) {
  state.category = category;
  document.querySelectorAll(".chip").forEach((chip) => {
    const active = chip.dataset.category === category;
    chip.classList.toggle("is-active", active);
    chip.setAttribute("aria-selected", String(active));
  });
  renderProducts();
}

document.querySelector("#filters").addEventListener("click", (event) => {
  const chip = event.target.closest("[data-category]");
  if (!chip) return;
  setCategory(chip.dataset.category);
});

document.querySelector(".collection-grid").addEventListener("click", (event) => {
  const card = event.target.closest("[data-category]");
  if (!card) return;
  setCategory(card.dataset.category);
  document.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#sort").addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts();
});

document.querySelector("#search").addEventListener("input", (event) => {
  state.query = event.target.value;
  renderProducts();
});

document.querySelector("#clear-filters").addEventListener("click", () => {
  state.query = "";
  document.querySelector("#search").value = "";
  document.querySelector("#sort").value = "featured";
  state.sort = "featured";
  setCategory("all");
});

grid.addEventListener("click", (event) => {
  const open = event.target.closest("[data-open]");
  const add = event.target.closest("[data-add]");
  if (open) openProduct(open.dataset.open);
  if (add) addToCart(add.dataset.add);
});

productDetail.addEventListener("click", (event) => {
  const add = event.target.closest("[data-add]");
  if (!add) return;
  addToCart(add.dataset.add);
  closeProduct();
  openCart();
});

cartItems.addEventListener("click", (event) => {
  const remove = event.target.closest("[data-remove]");
  const qty = event.target.closest("[data-qty]");
  if (remove) setQty(remove.dataset.remove, -999);
  if (qty) setQty(qty.dataset.qty, Number(qty.dataset.delta));
});

document.querySelector("#open-cart").addEventListener("click", openCart);
document.querySelectorAll("[data-close-cart]").forEach((node) => {
  node.addEventListener("click", closeCart);
});
document.querySelectorAll("[data-close-product]").forEach((node) => {
  node.addEventListener("click", closeProduct);
});
document.querySelectorAll("[data-close-checkout]").forEach((node) => {
  node.addEventListener("click", closeCheckout);
});

document.querySelector("#checkout-btn").addEventListener("click", openCheckout);

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!checkoutForm.reportValidity()) return;
  if (state.cart.length === 0) {
    formError.hidden = false;
    formError.textContent = "Your cart is empty.";
    return;
  }
  const data = new FormData(checkoutForm);
  const orderNo = `MR-${Math.floor(1000 + Math.random() * 9000)}`;
  const total = cartSubtotal() + shippingCost(cartSubtotal());
  document.querySelector("#order-message").textContent =
    `${data.get("name").trim()}, order ${orderNo} for ${formatPrice(total)} will be prepared for ${data.get("city").trim()}. A note was sent to ${data.get("email").trim()}.`;
  state.cart = [];
  saveCart();
  renderCart();
  checkoutForm.reset();
  checkoutForm.hidden = true;
  orderSuccess.hidden = false;
});

document.querySelector("#continue-shopping").addEventListener("click", () => {
  closeCheckout();
  document.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
});

const searchLabel = document.querySelector(".search");
searchLabel.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 680px)").matches) {
    searchLabel.classList.add("is-open");
    document.querySelector("#search").focus();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!productModal.hidden) closeProduct();
  else if (!checkoutModal.hidden) closeCheckout();
  else closeCart();
});

renderProducts();
renderCart();


