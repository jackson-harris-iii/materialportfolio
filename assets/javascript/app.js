$(document).ready( function(){
    console.log('lit')
    
    function svgToBase64Image(svgElement) {
        var div = document.createElement('div');
        div.appendChild(svgElement.cloneNode(true));
        var b64 = window.btoa(div.innerHTML);
        return 'data:image/svg+xml;base64,' + b64;
    }
    var svgs = document.getElementsByTagName('svg');
    var urls = [];
    for (var i = 0; i < svgs.length; i++)
        urls.push('url("' + svgToBase64Image(svgs[i]) + '")');
    var url = urls.join(',');
    var msg = 'Base64 CSS image (for cross-browser support):' +
        '<br><br>background: ' + url + ';';
    // document.getElementById('code').innerHTML = msg;
    document.body.style.background = url;

    //initialize scrollfire
    var options = [
        {
            selector: '#home', offset: 50, callback: function (el) {
                Materialize.toast("Welcome to my Portfolio!", 4500);
            }
        },
        {
            selector: '#portfolio-items', offset: 400, callback: function (el) {
                Materialize.showStaggeredList($(el));
            }
        },
    ];
    

    Materialize.scrollFire(options);

    // trigger modal
    $('.modal').modal();

    //trigger side nav
    $(".button-collapse").sideNav();

    //trigger slider
    $('.slider').slider();
    // Pause slider
    $('.slider').slider('pause');
    // Start slider
    $('.slider').slider('start');
    // Next slide
    $('.slider').slider('next');
    // Previous slide
    $('.slider').slider('prev');


})