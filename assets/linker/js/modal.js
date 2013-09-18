$(document).ready(function() {
	$('#loginModal').on('shown', function() {
        $("#loginModalUsername").focus();
    })
	$('#registerModal').on('shown', function() {
        $("#registerModalUsername").focus();
    })
});