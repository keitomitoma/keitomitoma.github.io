const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

// すべての画像にクリックイベント
document.querySelectorAll(".gallery img").forEach((img) => {
  img.onclick = function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
  };
});

// 閉じる
document.querySelector(".close").onclick = function () {
  modal.style.display = "none";
};

// 背景クリックでも閉じる
modal.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
const caption = document.getElementById("caption");

document.querySelectorAll(".gallery img").forEach((img) => {
  img.onclick = function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
    caption.textContent = this.dataset.caption; // ←これ追加
  };
});
