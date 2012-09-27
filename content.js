
$('#secondsidebar').remove();
$('#sidebar').remove();
var w = $('#mainwrapper').width();
$('#leftcontent').css({width: w + "px"})

twocol = $('#twocol')
if (twocol != undefined) {
    $('#twocol').width(w+'px');
}
