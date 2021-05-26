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


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// require("@rails/ujs").start();
// require("turbolinks").start();

require("stylesheets/application.scss");

// External imports
// import "bootstrap";
require("@nathanvda/cocoon");

import "alpinejs";
// import EditorJS from "@editorjs/editorjs";
// Internal imports, e.g:
import FroalaEditor from "froala-editor";
// Load a plugin.
document.addEventListener('turbolinks:load', () => {
  new FroalaEditor("#editor", {
    language: "fr"
  });
  
 
});
