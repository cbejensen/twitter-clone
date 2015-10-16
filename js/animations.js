$(document).ready(function() {
  $('#tweet-controls, .tweet-actions, .stats, .reply').hide();
  
  $('.tweet-compose').on('click', function() {
    $(this).css('height', '5em');
    $('#tweet-controls').show();
  })
  
  function tweet() {
    return $('.tweet-compose').val();
  }
  
  function tweetLength() {
    return $('.tweet-compose').val().length;
  }
  
  $('.tweet-compose').keyup(function() {
    var charCount = 140 - tweetLength();
    $('#char-count').html(charCount);
    if (charCount > 10) {
      $('#char-count').css('color', '#999');
    }
    if(charCount <= 10 && charCount >= 0) {
      $('#char-count').css('color', 'orange');
      $('#tweet-submit').addClass('button');
    }
    if(charCount < 0) {
      $('#char-count').css('color', 'red');
      $('#tweet-submit').removeClass().addClass('button:disabled');
    }
  })
  
  $('#tweet-submit').click(function() {
    var el = $('.tweet:first').clone(true);
    var avatar = $('#profile-summary .avatar').prop('src');
    el.find('.avatar').prop('src', avatar);
    el.find('.fullname').html('Christian');
    el.find('.tweet-text').html(tweet());
    if (tweetLength() >= 0 && tweetLength() < 140) {
      $('#stream').prepend(el);
    }
  })
  
  $('.tweet').hover(
    function() {
      $(this).find('.tweet-actions').show();
    },
    function() {
      $(this).find('.tweet-actions').hide();
    }
  )
  
  $('.tweet').click(function() {
    $(this).find('.stats, .reply').slideToggle().show();
  })
})