(function() {
  // Initialize for test page, with test images, and assign generated styles to page elements
  var images = ['images/maudit.resized.jpg',
    'images/logo1.png',
    'images/logo2.png',
    'images/logo3.png',
    'images/logo4.png',
    'images/logo5.png',
    'images/logo6.png',
    'images/logo7.jpg',
    'images/logo8.png',
    'images/logo9.png'
  ];

  var i = 0;
  var url = images[i];
  makeStyle(url);

  //swap logo when clicking 'Do It!', and re-process
  $(document).ready(function() { 
    $('.changer').click(function() {
      if (i === images.length -1) { i = 0; } else { i++; }
      url = images[i];
      makeStyle(url);
    });
  });

  //set first image, then process colors and set css for background, h1, h2, and p elements
  function makeStyle(url) {

    $('.logo').attr('src', url);
    var albumColors = new AlbumColors(url);

    albumColors.getColors(function(colors) {
      var bg = 'rgb(' + colors[0] + ')';
      var bg1 = 'rgba(' + colors[0] + ',' + '.8' + ')';
      var bg2 = 'rgba(' + colors[0] + ',' + '1' + ')';
      var h1 = 'rgb(' + colors[1] + ')';
      var h2 = 'rgb(' + colors[2] + ')';
      $('body').css('background', 'linear-gradient(to left' + ',' + bg1 + ',' + bg2 + ')');
      $('h1').css('color', h1);
      $('h2').css('color', h2);
      $('p').css('color', h1);
      $('ul').css('color', h1);
      $('a').css('color', h2);
      $('.btn').css('background', h2);
      $('.btn').css('color', bg);
      $('.btn').hover(function() {
        $(this).css('background', h2);
        $(this).css('color', bg);
        $(this).css('-webkit-backface-visibility', 'hidden');
      });
    });
  }
})();