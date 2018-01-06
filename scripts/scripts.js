$(function () {
    $("#newQuote").on("click", function () {
        //sets the browser cache to false so app doesn't freeze
        $.ajaxSetup({ cache: false });
        //grabs quote with  API
        $.getJSON(
          "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
          function (a) {
              //displays the text
              $("#text").html(a[0].content);
              //displays the author/speaker
              $("#speaker").html(a[0].title);
          });

        var bkgColors = ["#D7263D", "#F46036", "#2E294E", "#1B998B", "#C5D86D", "#578fb0", "#29a65a", "#161f3e", "#88d693", "#d91153", "#503bd7", "#a6daae", "#86e881", "#e701aa", "#8fb473", "#c3e02d", "#d32ca9", "#e8202b"];

        var color = Math.floor(Math.random() * bkgColors.length);
        //changes background color, quote text color and button background color
        $("body").animate({
            backgroundColor: bkgColors[color],
            color: bkgColors[color]
        }, 1500);

        $(".button").animate({
            backgroundColor: bkgColors[color]
        }, 1500);
    });
});
