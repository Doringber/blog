function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }

function openNav() {
    document.getElementById("mySidebar").style.width = "28%";
    document.getElementById("mySidebar").style.display = "block";
}
function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
}

// $(document).ready(function () {
//     $.getJSON('https://api.chucknorris.io/jokes/random', function (response) {
//         console.log(response);
//     // $.each(response, function(index,value){
//     //     console.log(value);
    
//     var joke = response.value;
//     console.log(joke);

//     $('.output').append('<h1 class="jokeVal">'+ joke  + '</h1>')

//     })
//     });
