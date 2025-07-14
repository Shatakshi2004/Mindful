/**/
window.onload = function () {
  // start variables
  var book = document.getElementsByClassName("book")[0],
      pages = ["page-one","page-two","page-three","page-four"],
      inputs = document.querySelectorAll("input");
  // end variables
  // get page functuion
  function get_page(page_num_par) {
    return document.getElementsByClassName(page_num_par);
  }
  // end get page fucntion
  // page one sent btn
  get_page(pages[0])[0].querySelectorAll("form .btn")[0].onclick = function (e) {
    e.preventDefault();
    book.classList.add("move-right");//return book to right
    //return all to default
    get_page(pages[3])[0].classList.remove("open","z-index-next");
    get_page(pages[2])[0].classList.remove("open","z-index-next","z-index-prev");
    get_page(pages[1])[0].classList.remove("open","z-index-next");
  }
  // page two next btn
  get_page(pages[1])[0].querySelectorAll("form .btn")[0].onclick = function (e) {
    e.preventDefault();
    get_page(pages[1])[0].classList.add("open","z-index-next");//open this page and make it above all
    get_page(pages[2])[0].classList.add("z-index-prev");//make prev page under
    get_page(pages[3])[0].classList.remove("z-index-prev","z-index-next");//return prev pages to its odrer
  }
  // page three next btn
  get_page(pages[2])[0].querySelectorAll("form .btn")[0].onclick = function (e) {
    e.preventDefault();
    get_page(pages[2])[0].classList.add("open","z-index-next");
    get_page(pages[3])[0].classList.add("z-index-prev");
  }
  // page four sign up
  get_page(pages[3])[0].querySelectorAll("form a")[0].onclick = function (e) {
    e.preventDefault();
    get_page("page-four")[0].classList.add("open","z-index-next");
    book.classList.add("move-left");//move book to left -250
    book.classList.remove("move-right");
  }
  }
