(function (window) {
  'use strict';

  function copyHtml(from, to) {
    to.innerHTML = from.innerHTML;
  }

  function id(elemId) {
    return document.getElementById(elemId);
  }

  function $(selector) {
    document.querySelectorAll(selector);
  }

  window.app = {
    id: id,
    copyHtml: copyHtml,
    $: $
  };

}(window));