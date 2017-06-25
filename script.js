jQuery(document).ready(function() {
    jQuery('.toggle-menu').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.menu ul').toggleClass('active');
        e.preventDefault();
    });
});
