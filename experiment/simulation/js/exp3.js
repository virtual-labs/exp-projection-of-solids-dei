// VARIABLES

// DROPMENUS, PENCILS, COMPASS AND INSTRUCTIONS
const assemblyBox = document.querySelector("#assembly");
const statementBox = document.querySelector("#exp1-statement");
const instruction1Step3 = document.querySelector("#instructions-step3");
const stepNumber = document.querySelector(".step-number");

const comp1Step3 = document.querySelector("#compass1-step3");
const comp2Step3 = document.querySelector("#compass2-step3");

const pencil1Step3 = document.querySelector("#pencil1-step3");
const pencil2Step3 = document.querySelector("#pencil2-step3");
const pencil3Step3 = document.querySelector("#pencil3-step3");
const pencil4Step3 = document.querySelector("#pencil4-step3");
const pencil5Step3 = document.querySelector("#pencil5-step3");
const pencil6Step3 = document.querySelector("#pencil6-step3");
const pencil7Step3 = document.querySelector("#pencil7-step3");
const pencil8Step3 = document.querySelector("#pencil8-step3");
const pencil9Step3 = document.querySelector("#pencil9-step3");
const pencil10Step3 = document.querySelector("#pencil10-step3");
const pencil11Step3 = document.querySelector("#pencil11-step3");
const pencil12Step3 = document.querySelector("#pencil12-step3");

const dropMenu1Step3 = document.querySelector("#dropMenu1-step3");
const dropMenu2Step3 = document.querySelector("#dropMenu2-step3");
const dropMenu3Step3 = document.querySelector("#dropMenu3-step3");
const dropMenu4Step3 = document.querySelector("#dropMenu4-step3");
const dropMenu5Step3 = document.querySelector("#dropMenu5-step3");
const dropMenu6Step3 = document.querySelector("#dropMenu6-step3");
const dropMenu7Step3 = document.querySelector("#dropMenu7-step3");
const dropMenu8Step3 = document.querySelector("#dropMenu8-step3");

// IMAGES
const png1Step3 = document.querySelector("#png1-step3");
const png2Step3 = document.querySelector("#png2-step3");
const png3Step3 = document.querySelector("#png3-step3");
const png4Step3 = document.querySelector("#png4-step3");
const png5Step3 = document.querySelector("#png5-step3");
const png6Step3 = document.querySelector("#png6-step3");
const png7Step3 = document.querySelector("#png7-step3");
const png8Step3 = document.querySelector("#png8-step3");
const png9Step3 = document.querySelector("#png9-step3");
const png10Step3 = document.querySelector("#png10-step3");
const png11Step3 = document.querySelector("#png11-step3");
const png12Step3 = document.querySelector("#png12-step3");
const png13Step3 = document.querySelector("#png13-step3");
const png14Step3 = document.querySelector("#png14-step3");
const png15Step3 = document.querySelector("#png15-step3");
const finalPng = document.querySelector("#finalPng-step3");


// GIFS
const gif1Step3 = document.querySelector("#gif1-step3");
const gif2Step3 = document.querySelector("#gif2-step3");
const gif3Step3 = document.querySelector("#gif3-step3");
const gif4Step3 = document.querySelector("#gif4-step3");
const gif5Step3 = document.querySelector("#gif5-step3");
const gif6Step3 = document.querySelector("#gif6-step3");
const gif7Step3 = document.querySelector("#gif7-step3");
const gif8Step3 = document.querySelector("#gif8-step3");
const gif9Step3 = document.querySelector("#gif9-step3");
const gif10Step3 = document.querySelector("#gif10-step3");
const gif11Step3 = document.querySelector("#gif11-step3");
const gif12Step3 = document.querySelector("#gif12-step3");
const gif13Step3 = document.querySelector("#gif13-step3");

// TRANSBOXES
const trans1Step3 = document.querySelector("#trans1-step3");
const trans2Step3 = document.querySelector("#trans2-step3");
const trans3Step3 = document.querySelector("#trans3-step3");
const trans4Step3 = document.querySelector("#trans4-step3");
const trans5Step3 = document.querySelector("#trans5-step3");
const trans6Step3 = document.querySelector("#trans6-step3");
const trans7Step3 = document.querySelector("#trans7-step3");
const trans8Step3 = document.querySelector("#trans8-step3");
const trans9Step3 = document.querySelector("#trans9-step3");
const trans10Step3 = document.querySelector("#trans10-step3");

// ARROWS
const arr1Step3 = document.querySelector("#arr1-step3");
const arr2Step3 = document.querySelector("#arr2-step3");
const arr3Step3 = document.querySelector("#arr3-step3");
const arr4Step3 = document.querySelector("#arr4-step3");
const arr5Step3 = document.querySelector("#arr5-step3");

// NEXT BUTTONS 
const arrNext = document.querySelector(".arr-next");
const nextToFinalPng = document.querySelector("#nextToFinalPng");
const nextBtnExp1 = document.querySelector("#nextToExpListFromExp1");



// once dom loaded then trans1Step3 will get activated.

addEventListener("DOMContentLoaded", () => {
    trans1Step3.style.visibility = "visible";
    arr1Step3.style.visibility = "visible";
    png1Step3.style.visibility = "visible";
});

trans1Step3.addEventListener("click", () => {
    trans1Step3.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    dropMenu1Step3.style.visibility = "visible";
});


// dropmenu 1 changes

dropMenu1Step3.addEventListener("change", (evt) => {
    let selectedValue = dropMenu1Step3.value;
    if (selectedValue === "3hPencil") {
        dropMenu1Step3.style.visibility = "hidden";
        pencil1Step3.style.visibility = "visible";
        arr2Step3.style.visibility = "visible";
    } else {
        alert("Please select 3H Pencil");
    }
});

// when first H Pencil was clicked 

pencil1Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png1Step3.style.visibility = "hidden";
    arr2Step3.style.visibility = "hidden";

    gif1Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif1Step3.style.visibility = "hidden";
        png2Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Select the compass and construct the circle such having a radius equal to the base of the given hexagonal prism.";
        stepNumber.innerText = "4";

        arr4Step3.style.visibility = "visible";
        trans3Step3.style.visibility = "visible";
    }, 13550)
});

trans3Step3.addEventListener("click", () => {
    trans3Step3.style.visibility = "hidden";
    arr4Step3.style.visibility = "hidden";
    arr5Step3.style.visibility = "visible";
    comp1Step3.style.visibility = "visible";
});

comp1Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr5Step3.style.visibility = "hidden";
    png2Step3.style.visibility = "hidden";

    gif2Step3.style.visibility = "visible";

    setTimeout(() => {
        gif2Step3.style.visibility = "hidden";
        png3Step3.style.visibility = "visible";
        arr1Step3.style.visibility = "visible";
        instruction1Step3.innerText = "Select 3H pencil and draw the circle's diameter.";
        stepNumber.innerText = "5";
        trans4Step3.style.visibility = "visible";
    }, 9690);
});

trans4Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    dropMenu3Step3.style.visibility = "visible";
    dropMenu3Step3.value = "default";
});

dropMenu3Step3.addEventListener("change", () => {
    let selectedValue = dropMenu3Step3.value;
    if (selectedValue === "3hPencil") {
        dropMenu3Step3.style.visibility = "hidden";
        pencil3Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    } else {
        alert("Please select 3H Pencil");
    }
});

pencil3Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png3Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif3Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif3Step3.style.visibility = "hidden";
        png4Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Select the compass, and mark off arcs equal to the radius of the circle.";
        stepNumber.innerText = "6";

        arr4Step3.style.visibility = "visible";
        trans5Step3.style.visibility = "visible";
    }, 9870)
});

trans5Step3.addEventListener("click", () => {
    trans5Step3.style.visibility = "hidden";
    arr4Step3.style.visibility = "hidden";
    arr5Step3.style.visibility = "visible";
    comp2Step3.style.visibility = "visible";
});

comp2Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr5Step3.style.visibility = "hidden";
    png4Step3.style.visibility = "hidden";

    gif4Step3.style.visibility = "visible";

    setTimeout(() => {
        gif4Step3.style.visibility = "hidden";
        png5Step3.style.visibility = "visible";
        arr1Step3.style.visibility = "visible";
        instruction1Step3.innerText = " Select H pencil, and join all the arcs to obtain the desired hexagon. Label its points in top view as a,b,c,d,e,f and 1,2,3,4,5,6";
        stepNumber.innerText = "7";
        trans6Step3.style.visibility = "visible";
    }, 19460);
});

trans6Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    dropMenu4Step3.style.visibility = "visible";
    dropMenu4Step3.value = "default";
});

dropMenu4Step3.addEventListener("change", () => {
    let selectedValue = dropMenu4Step3.value;
    if (selectedValue === "hPencil") {
        dropMenu4Step3.style.visibility = "hidden";
        pencil4Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    } else {
        alert("Please select H Pencil");
    }
});

pencil4Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png5Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif5Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif5Step3.style.visibility = "hidden";
        png6Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Select 3H pencil and project all the points in front view.";
        stepNumber.innerText = "8";

        arr1Step3.style.visibility = "visible";
        trans7Step3.style.visibility = "visible";
    }, 62630)
});

trans7Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    dropMenu5Step3.style.visibility = "visible";
    dropMenu5Step3.value = "default";
});

dropMenu5Step3.addEventListener("change", () => {
    let selectedValue = dropMenu5Step3.value;
    if (selectedValue === "3hPencil") {
        dropMenu5Step3.style.visibility = "hidden";
        pencil5Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    } else {
        alert("Please select 3H Pencil");
    }
});

pencil5Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png6Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif6Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif6Step3.style.visibility = "hidden";
        png7Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Now, join these projections and further project parallel lines from these points to form the axis of the hexagonal prism ( parallel to VP). Join all the points on the axis and label them as 1',2',3', a',b',c' and so on.";
        stepNumber.innerText = "9";
        arr3Step3.style.visibility = "visible";
        pencil6Step3.style.visibility = "visible";
    }, 23700)
});

pencil6Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png7Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif7Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif7Step3.style.visibility = "hidden";
        png8Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Now, draw a line inclined at 45° to the HP.";
        stepNumber.innerText = "10";
        arr3Step3.style.visibility = "visible";
        pencil7Step3.style.visibility = "visible";
    }, 37060)
});

pencil7Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png8Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif8Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif8Step3.style.visibility = "hidden";
        png9Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Draw another line perpendicular to the line inclined at 45° having the hexagonal prism's base dimension.";
        stepNumber.innerText = "11";
        arr3Step3.style.visibility = "visible";
        pencil8Step3.style.visibility = "visible";
    }, 17300)
});

pencil8Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png9Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif9Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif9Step3.style.visibility = "hidden";
        png10Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Select H pencil and draw the sides of hexagonal prism inclined at 45° to HP. Label its corners.";
        stepNumber.innerText = "12";
        arr1Step3.style.visibility = "visible";
        trans8Step3.style.visibility = "visible";
    }, 15330)
});

trans8Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    dropMenu6Step3.style.visibility = "visible";
    dropMenu6Step3.value = "default";
});

dropMenu6Step3.addEventListener("change", () => {
    let selectedValue = dropMenu6Step3.value;
    if (selectedValue === "hPencil") {
        dropMenu6Step3.style.visibility = "hidden";
        pencil9Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    } else {
        alert("Please select H Pencil");
    }
});

pencil9Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png10Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif10Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif10Step3.style.visibility = "hidden";
        png11Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Select 3h pencil and Project the points of the prism which is inclined at 45° in the top view.";
        stepNumber.innerText = "13";
        arr1Step3.style.visibility = "visible";
        trans9Step3.style.visibility = "visible";
    }, 54670)
});

trans9Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    dropMenu7Step3.style.visibility = "visible";
    dropMenu7Step3.value = "default";
});

dropMenu7Step3.addEventListener("change", () => {
    let selectedValue = dropMenu7Step3.value;
    if (selectedValue === "3hPencil") {
        dropMenu7Step3.style.visibility = "hidden";
        pencil10Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    } else {
        alert("Please select 3H Pencil");
    }
});

pencil10Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png11Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif11Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif11Step3.style.visibility = "hidden";
        png12Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Similarly, project the points of the prism's base in top view.";
        stepNumber.innerText = "14";
        arr3Step3.style.visibility = "visible";
        pencil11Step3.style.visibility = "visible";
    }, 62550)
});

pencil11Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png12Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif12Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif12Step3.style.visibility = "hidden";
        png13Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Select H pencil and join the points in the top view and label them as a,b,c,1,2,3 and so on.";
        stepNumber.innerText = "15";
        arr1Step3.style.visibility = "visible";
        trans10Step3.style.visibility = "visible";
    }, 48840)
});

trans10Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    dropMenu8Step3.style.visibility = "visible";
    dropMenu8Step3.value = "default";
});

dropMenu8Step3.addEventListener("change", () => {
    let selectedValue = dropMenu8Step3.value;
    if (selectedValue === "hPencil") {
        dropMenu8Step3.style.visibility = "hidden";
        pencil12Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    } else {
        alert("Please select H Pencil");
    }
});

pencil12Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";
    png13Step3.style.visibility = "hidden";

    gif13Step3.style.visibility = "visible";

    setTimeout(() => {
        gif13Step3.style.visibility = "hidden";
        png14Step3.style.visibility = "visible";
    }, 162860);

    setTimeout(() => {
        png14Step3.style.visibility = "hidden";
        png15Step3.style.visibility = "visible";
    }, 164860);

    setTimeout(() => {
        nextToFinalPng.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 167360)
});

nextToFinalPng.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arrNext.style.visibility = "hidden";
    png14Step3.style.visibility = "hidden";
    assemblyBox.style.visibility = "hidden";
    statementBox.style.visibility = "hidden";

    finalPng.style.visibility = "visible";
    finalPng.style.top = "80px";

    setTimeout(() => {
        nextBtnExp1.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 1500);
})

nextBtnExp1.addEventListener("click", () => {
    parent.location = `../exp-list.html`;   // both of these addresses will work.
})