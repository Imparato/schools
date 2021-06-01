
const closeModal = () => {
  const notice = document.querySelector(".notice");
  const alert = document.querySelector(".alert");
  if (notice) displayNone(notice);
  if (alert) displayNone(alert);
}

const displayNone = (item) => {
  setTimeout(() => {
    item.style.display = "none";
  }, 2000);
}

export {closeModal}