/* Two small jobs: show the portrait once it exists, and mark the nav item
   for whichever section is currently in view. No dependencies. */

(function () {
  "use strict";

  // Portrait: assets/portrait.jpg replaces the monogram when it loads.
  var portrait = document.getElementById("portrait");
  var monogram = document.getElementById("monogram");
  if (portrait && monogram) {
    portrait.addEventListener("load", function () {
      portrait.hidden = false;
      monogram.hidden = true;
    });
    if (portrait.complete && portrait.naturalWidth > 0) {
      portrait.hidden = false;
      monogram.hidden = true;
    }
  }

  // Scroll-spy: the last section whose top has passed under the header wins.
  // Several sections can share one nav item through data-nav.
  var links = Array.prototype.slice.call(document.querySelectorAll(".pf-nav a[data-nav]"));
  var sections = Array.prototype.slice.call(document.querySelectorAll("main [data-nav][id], footer[data-nav][id]"));
  if (!links.length || !sections.length) return;

  var HEADER = 96; // header height plus a little breathing room
  var current = null;
  var queued = false;

  function mark() {
    queued = false;
    var found = null;
    var docHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    var atBottom = window.innerHeight + window.pageYOffset >= docHeight - 4;

    for (var i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top <= HEADER) {
        found = sections[i].getAttribute("data-nav");
      }
    }
    if (atBottom) found = sections[sections.length - 1].getAttribute("data-nav");
    if (found === current) return;

    current = found;
    links.forEach(function (link) {
      if (current && link.getAttribute("data-nav") === current) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function onScroll() {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(mark);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  mark();
})();
