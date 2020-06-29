//JQuery Initialized
$(document).ready(function () {

  // Global scope initialized
  $container = $("#container");
  $liList = $("li");
 document.getElementById("Author").innerHTML = "Shuffle & Sort By Nihal Khan";

  // Shuffling Starts here
  $("#shuffle").on("click", function () {
    //copy and remove all divs
    $liCopy = $liList.clone(true);
    $("li").remove();

    while ($liCopy.length > 0) {
      //chose random index of div array
      var randomIndex = Math.floor(Math.random() * $liList.length);
      $container.append($liCopy.splice(randomIndex, 1));
    }
  });

  // Sorting Starts Here
  $("#sort").on("click", function () {
    var toSort = document.getElementById('container').children;
    toSort = Array.prototype.slice.call(toSort, 0);
    toSort.sort(function (a, b) {
      var aord = +a.id.split('-')[1];
      var bord = +b.id.split('-')[1];
      // two elements never have the same ID hence this is sufficient:
      return (aord > bord) ? 1 : -1;
    });
    var parent = document.getElementById('container');
    parent.innerHTML = "";
    for (var i = 0, l = toSort.length; i < l; i++) {
      parent.appendChild(toSort[i]);
    }
  });

});