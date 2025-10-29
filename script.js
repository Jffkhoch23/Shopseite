const products = document.querySelectorAll(".product");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalPrice = document.getElementById("modal-price");
const modalColors = document.getElementById("modal-colors");
const modalSizes = document.getElementById("modal-sizes");
const closeBtn = document.querySelector(".close");
const sideMenu = document.getElementById("sideMenu");
const cartPanel = document.getElementById("cartPanel");
const settingsPopup = document.getElementById("settingsPopup");
const darkToggle = document.getElementById("darkModeToggle");
const addedPopup = document.getElementById("addedPopup");

// Produkt Modal
products.forEach(product => {
  product.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = product.dataset.img;
    modalName.textContent = product.dataset.name;
    modalPrice.textContent = "Preis: " + product.dataset.price;
    modalColors.textContent = "Farben: " + product.dataset.colors;
    modalSizes.textContent = "Größen: " + product.dataset.sizes;
  });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; };

// Menü
document.querySelector(".menu").onclick = () => {
  sideMenu.classList.toggle("active");
};

// Cart
document.querySelector(".cart").onclick = () => {
  cartPanel.classList.toggle("active");
};

// Settings
document.querySelector(".settings").onclick = () => {
  settingsPopup.classList.toggle("active");
};

// Dark Mode Toggle
darkToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", darkToggle.checked);
});

// Buy Button (Demo)
document.querySelector(".buy-btn").addEventListener("click", () => {
  addedPopup.style.display = "block";
  setTimeout(() => addedPopup.style.display = "none", 2000);
});
