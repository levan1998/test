const listItem = document.querySelectorAll(".list_item");
listItem.forEach((item) => {
  item.addEventListener("click", () => {
    alert(item.textContent);
  });
});
