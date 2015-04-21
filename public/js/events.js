  window.$userName;

    $('#namebutton').on('click', function() {
      event.preventDefault();
      if ($userName === '') {
        $('footer').html('<p>We can\'t eat your feeelings if we don\'t know who you are!</p>')
      } else {
      $userName = $('#username').val();
      window.localStorage.setItem('name', $userName);
      $('footer').html('<p>Welcome ' + $userName + ' !</p>');
      }
    });

