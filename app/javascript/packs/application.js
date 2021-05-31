// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


require("trix")
require("@rails/actiontext")

// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

//= require trix

require("stylesheets/application.scss");

// External imports
// import "bootstrap";

import "alpinejs";
// import EditorJS from "@editorjs/editorjs";
// Internal imports, e.g:

import { initSchoolNav } from "../plugins/init_school_nav";
import { initTopMobileNav } from "../plugins/init_top_mobile_nav";
import { initVerticalNavColors } from "../plugins/init_vertical_nav_colors";


// Load a plugin.
document.addEventListener('turbolinks:load', () => {
  initSchoolNav();
  initTopMobileNav();
  initVerticalNavColors();

  const btnTogglePublish = document.querySelector("#btnTogglePublish");
  const publishLabel = document.querySelector("#publishLabel");
  if (btnTogglePublish) {
    btnTogglePublish.addEventListener("click", (e) => {
      const text = publishLabel.innerText;
      if (text === "Non publié") {
        publishLabel.innerText = "publié";
        publishLabel.classList.remove("bg-red-300", "text-red-800");
        publishLabel.classList.add("bg-green-200", "text-green-800");
      } else {
        publishLabel.innerText = "Non publié";
        publishLabel.classList.remove("bg-green-200", "text-green-800");
        publishLabel.classList.add("bg-red-300", "text-red-800");
      }
    });
  }
 
});