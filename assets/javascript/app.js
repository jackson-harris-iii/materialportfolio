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

    // anime({
    //     targets: 'path',
    //     translateX: [
    //         { value: 100, duration: 1200 },
    //         { value: 0, duration: 800 }
    //     ],
    //     rotate: '1turn',
    //     backgroundColor: '#FFF',
    //     duration: 2000,
    //     loop: true
    // });

    var easing = anime({
        targets: '#easing .el',
        translateX: 250,
        easing: 'easeInOutQuart'
    });

    anime({
        targets: '#svgAttributes path',
        points: 'M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34'
    });

    // Initialize collapse button
    $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();

    $(".dropdown-trigger").dropdown();
    // $('.fixed-action-btn').floatingActionButton(open())

    // <svg xmlns='http://www.w3.org/2000/svg' width='56' height='100'>
    //     <rect width='56' height='100' fill='#000000' />
    //     <path d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='#fff629' stroke-width='2' />
    //     <path d='M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34' fill='none' stroke='#ffe503' stroke-width='2' />
    // </svg>



})