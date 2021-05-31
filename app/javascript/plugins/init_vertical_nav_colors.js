const initVerticalNavColors = () => {

  const currentLocation = location.href;
  const menuItem = document.querySelectorAll(".menu-item");
  const menuLength = menuItem.length;

  if (menuItem) {
    for (let i = 0; i<menuLength; i++) {
        if (menuItem[i].href === currentLocation){
            menuItem[i].classList.add("bg-indigo-800", "text-white");
            menuItem[i].classList.remove("text-indigo-100", "hover:bg-indigo-600");
        } else {
            menuItem[i].classList.add("text-indigo-100", "hover:bg-indigo-600");
            menuItem[i].classList.remove("bg-indigo-800", "text-white");
        }
    }
  }
};

export { initVerticalNavColors };
