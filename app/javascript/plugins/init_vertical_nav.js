const initVerticalNav = () => {
  const schools = document.querySelectorAll(".school_nav");
  const currentSchool = window.location.pathname.split("/")[2];

  if (schools) {
    schools.forEach((school) => {
      if (school.dataset.index === currentSchool) {
        school.firstElementChild.classList.add(
          "border-indigo-500",
          "text-indigo-600"
        );
        school.firstElementChild.classList.remove(
          "border-transparent",
          "text-gray-500",
          "hover:text-gray-700",
          "hover:border-gray-300"
        );
      } else {
        school.firstElementChild.classList.add(
          "border-transparent",
          "text-gray-500",
          "hover:text-gray-700",
          "hover:border-gray-300"
        );
        school.firstElementChild.classList.remove(
          "border-indigo-500",
          "text-indigo-600"
        );
      }
    });
  }
};

export { initVerticalNav };
