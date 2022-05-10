let mostPopularPhotos = ["https://static01.nyt.com/images/2021/05/17/dining/kc-korean-bulgogi-burger/kc-korean-bulgogi-burger-mobileMasterAt3x.jpg", "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg", "https://img.traveltriangle.com/blog/wp-content/uploads/2018/10/beaches-near-nyc-cover.jpg"];

//*Task 1- Make a new  empty array like the one above, and name it photos
let photos = [];





//*Task 2- Create a click hander that makes it so when you click the add photo button the user input is saved to a new varible.
//*add the class name for the "Add Photos button" (look in the html)
//*create a new variable name to store the userinputs to
//*uncomment the code wihtout a * in front of it

$(".submit").click(function() {
    $(".posts").empty();
    let leastPopularphoto = $("input").val();





    //*Task 3- use .push to save all the user inputs to your photos array
    photos.push(leastPopularphoto);


    //*Uncomment to check the console to make sure the user inputs are saving to the array
    console.log(photos);



    //*Task 4-Make it so each image the user submits has the same stylying by using for of loops and concatenation
    //* add a new variable to the blanks

    for (let sosoPopularphoto of photos) {
        $(".posts").append("<img src=" + sosoPopularphoto + ">");
    }
    $("input").val(" ");




    //* Task 5- reward users for adding multiple images by using conditionals    
    //*Add the variable from your empty array to the if (______) blanks
    //* if length === 3 have the text say "Congrats, you are a Silver Level user!"
    //* if length===5 have text say "Congrats, you are a Gold Level user!"
    //*If the length > 5 have the text say "Congrats, you are a Platinum Level user!"
    //*ex: if (variable.length===8){ $(".message").text( you are a the greatest user);
    //*uncomment all the code without a *


    if (photos.length === 3) {
        $(".message").text("Congrats, you are a Silver Level user!");
    }
    if (photos.length === 5) {
        $(".message").text("Congrats, you are a Gold Level user!");
    }
    if (photos.length > 5) {
        $(".message").text("Congrats, you are a Platinum Level user!");
    }

});




//*Tasks 6- use the array index for the mostPopularphotos array to display our favorite photo between the cheeseburger, cat, and beach in the liked photos section 

//*fill in the blank with the index number for your favorite photo
//ex: if I want he hamburger I would put number 0 in the blank
//*uncomment all the code without a *

$(".liked-photo").append(`<img src=${mostPopularPhotos[1]}>`);

$(".ABC").click(function() {
    let comment = $(".comment").val();
    $(".ZZ").append(comment + ", ");
});


//*All Done? Try the app- add image urls to and see if they appear on your webpage (try adding 3 to 5 at a time and see if you get a reward message).