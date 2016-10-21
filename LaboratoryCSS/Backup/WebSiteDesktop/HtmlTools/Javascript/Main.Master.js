$(document).ready(function () {

    // Function to change the nav-bar on scroll
    $(window).scroll(function () {
        ($(window).scrollTop() >= 100) ? (
            $('.fixed-nav-bar').addClass('scrolled'),
            $('.the-bass').addClass('scrolled')
        ) : (
            $('.fixed-nav-bar').removeClass('scrolled'),
            $('.the-bass').removeClass('scrolled')
        );
    });

    // Drop Down Function
    $('#menuButton').on('change', function () {
        ($('#menuButton').is(':checked')) ? (
            $('.the-bass').addClass('dropped')
        ) : (
            $('.the-bass').removeClass('dropped')
        );
    });

    // Drop Down Function
    $('#ShareBtn').on('mouseenter', function () {
        if (!$('#ShareBtn').hasClass('droppedSocialNet')) {
            $('#ShareBtn').addClass('droppedSocialNet');
            $('.btnSharePanel').addClass('btnShare');

        }
    });

    $('#ShareBtn').on('mouseleave', function () {
        if ($('#ShareBtn').hasClass('droppedSocialNet')) {
            $('#ShareBtn').removeClass('droppedSocialNet');
            $('.btnSharePanel').removeClass('btnShare');
        }
    });

});