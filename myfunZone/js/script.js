$(document).ready(function () {
  // Smooth scroll to sections
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Tab Content Toggling
  $(".btn-tab").click(function () {
    const tabId = $(this).data("tab");
    const $tabContent = $("#tab-" + tabId);

    // Toggle active class for the clicked tab
    $tabContent.toggleClass("active");

    // Hide all other tab contents except the clicked one
    $(".tab-content").not($tabContent).removeClass("active");
  });

  //PARK CHARACTERS

  // Add more jQuery functions as needed
});
