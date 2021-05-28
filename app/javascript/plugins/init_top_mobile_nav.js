const initTopMobileNav = () => {

  const schools = document.querySelectorAll(".school_nav");
  const mobile_nav = document.getElementById('mobile_nav');
  const mobile_nav_dd = document.getElementById("mobile_nav_dd");
  const currentSchool = window.location.pathname.split("/")[2];

  if (schools) {
    schools.forEach((school) => {
      if (school.dataset.index === currentSchool) {
        mobile_nav.insertAdjacentHTML(
          "afterbegin",
          `<a href="/schools/${school.dataset.index}" class="text-indigo-600 whitespace-normal font-medium text-s" aria-current="page">${school.dataset.name}</a>`
        );
      } else {
        mobile_nav_dd.insertAdjacentHTML(
          "afterbegin",
          `<a href="/schools/${school.dataset.index}" class="block text-indigo-300 hover:text-indigo-400 px-4 py-2 rounded-md font-medium whitespace-nowrap">${school.dataset.name}</a>`
        );
      }
    })
  }
};

export { initTopMobileNav };
