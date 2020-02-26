var year = new Date().getFullYear();
var date = `Copyright &copy; ${year} | UpwardCode.`;
document.getElementsByClassName("footerContainer")[0].innerHTML = date;

var flipcard = document.getElementsByClassName(".flip-card");
flipcard.addEventListener("click", toggle);

// $(".flip-card").on("click", function(event) {
//     $(".flip-card").toggle();
//   });

function toggle() {}
