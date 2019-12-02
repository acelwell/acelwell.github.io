

function clicky(e)
{
  console.log("we be clicking");
  // getElementsByName("pokemon").value = 0;
  console.log(document.getElementsByName('pokemon'));
  console.log(document.getElementsByName('pokemon')[0].value);
  document.getElementsByName('pokemon')[0].value = "";
}

// function searchDB(event e) {
//   console.log(e)
// }
