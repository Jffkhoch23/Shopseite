const products = document.querySelectorAll(".product");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalPrice = document.getElementById("modal-price");
const modalColors = document.getElementById("modal-colors");
const modalSizes = document.getElementById("modal-sizes");
const closeBtn = document.querySelector(".close");

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
