window.onload = function(){
    const tag1 = document.getElementById("tag1");
    const tag2 = document.getElementById("tag2");
    const tag3 = document.getElementById("tag3");
    const tag4 = document.getElementById("tag4");
    const tag5 = document.getElementById("tag5");



    if (tag1) {
      let isClicked = false;
    
      tag1.addEventListener("click", function() {
        if (isClicked) {
            tag1.style.backgroundColor = "white";
            tag1.style.color = "green";

          isClicked = false;
        } else {
            tag1.style.backgroundColor = "green";
            tag1.style.color = "white";
          isClicked = true;
        }
      });
    } else {
      console.error("Could not find element with ID 'tag1'");
    }


    

    if (tag2) {
    let isClicked = false;

    tag2.addEventListener("click", function() {
        if (isClicked) {
        tag2.style.backgroundColor = "white";
        tag2.style.color = "green";

        isClicked = false;
        } else {
        tag2.style.backgroundColor = "green";
        tag2.style.color = "white";
        isClicked = true;
        }
    });
    } else {
    console.error("Could not find element with ID 'tag2'");
    }


    if (tag3) {
    let isClicked = false;

    tag3.addEventListener("click", function() {
        if (isClicked) {
        tag3.style.backgroundColor = "white";
        tag3.style.color = "green";

        isClicked = false;
        } else {
        tag3.style.backgroundColor = "green";
        tag3.style.color = "white";
        isClicked = true;
        }
    });
    } else {
    console.error("Could not find element with ID 'tag3'");
    }


    if (tag4) {
    let isClicked = false;

    tag4.addEventListener("click", function() {
        if (isClicked) {
        tag4.style.backgroundColor = "white";
        tag4.style.color = "green";

        isClicked = false;
        } else {
        tag4.style.backgroundColor = "green";
        tag4.style.color = "white";
        isClicked = true;
        }
    });
    } else {
    console.error("Could not find element with ID 'tag4'");
    }


    if (tag5) {
    let isClicked = false;

    tag5.addEventListener("click", function() {
        if (isClicked) {
        tag5.style.backgroundColor = "white";
        tag5.style.color = "green";

        isClicked = false;
        } else {
        tag5.style.backgroundColor = "green";
        tag5.style.color = "white";
        isClicked = true;
        }
    });
    } else {
    console.error("Could not find element with ID 'tag5'");
    }

};
