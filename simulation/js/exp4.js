// VARIABLES

// DROPMENUS, PENCILS, COMPASS AND INSTRUCTIONS
const assemblyBox = document.querySelector("#assembly");
const statementBox = document.querySelector("#exp1-statement");
const instruction1Step3 = document.querySelector("#instructions-step3");
const stepNumber = document.querySelector(".step-number");

const comp1Step3 = document.querySelector("#compass1-step3");
const comp2Step3 = document.querySelector("#compass2-step3");
const comp3Step3 = document.querySelector("#compass3-step3");
const comp4Step3 = document.querySelector("#compass4-step3");

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
const pencil13Step3 = document.querySelector("#pencil13-step3");
const pencil14Step3 = document.querySelector("#pencil14-step3");
const pencil15Step3 = document.querySelector("#pencil15-step3");
const pencil16Step3 = document.querySelector("#pencil16-step3");
const pencil17Step3 = document.querySelector("#pencil17-step3");
const pencil18Step3 = document.querySelector("#pencil18-step3");
const pencil19Step3 = document.querySelector("#pencil19-step3");
const pencil20Step3 = document.querySelector("#pencil20-step3");
const pencil21Step3 = document.querySelector("#pencil21-step3");

const dropMenu1Step3 = document.querySelector("#dropMenu1-step3");
const dropMenu2Step3 = document.querySelector("#dropMenu2-step3");
const dropMenu3Step3 = document.querySelector("#dropMenu3-step3");
const dropMenu4Step3 = document.querySelector("#dropMenu4-step3");
const dropMenu5Step3 = document.querySelector("#dropMenu5-step3");
const dropMenu6Step3 = document.querySelector("#dropMenu6-step3");
const dropMenu7Step3 = document.querySelector("#dropMenu7-step3");
const dropMenu8Step3 = document.querySelector("#dropMenu8-step3");
const dropMenu9Step3 = document.querySelector("#dropMenu9-step3");
const dropMenu10Step3 = document.querySelector("#dropMenu10-step3");
const dropMenu11Step3 = document.querySelector("#dropMenu11-step3");
const dropMenu12Step3 = document.querySelector("#dropMenu12-step3");
const dropMenu13Step3 = document.querySelector("#dropMenu13-step3");
const dropMenu14Step3 = document.querySelector("#dropMenu14-step3");
const dropMenu15Step3 = document.querySelector("#dropMenu15-step3");
const dropMenu16Step3 = document.querySelector("#dropMenu16-step3");

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
const png16Step3 = document.querySelector("#png16-step3");
const png17Step3 = document.querySelector("#png17-step3");
const png18Step3 = document.querySelector("#png18-step3");
const png19Step3 = document.querySelector("#png19-step3");
const png20Step3 = document.querySelector("#png20-step3");
const png21Step3 = document.querySelector("#png21-step3");
const png22Step3 = document.querySelector("#png22-step3");
const png23Step3 = document.querySelector("#png23-step3");
const png24Step3 = document.querySelector("#png24-step3");
const png25Step3 = document.querySelector("#png25-step3");
const png26Step3 = document.querySelector("#png26-step3");
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
const gif14Step3 = document.querySelector("#gif14-step3");
const gif15Step3 = document.querySelector("#gif15-step3");
const gif16Step3 = document.querySelector("#gif16-step3");
const gif17Step3 = document.querySelector("#gif17-step3");
const gif18Step3 = document.querySelector("#gif18-step3");
const gif19Step3 = document.querySelector("#gif19-step3");
const gif20Step3 = document.querySelector("#gif20-step3");
const gif21Step3 = document.querySelector("#gif21-step3");
const gif22Step3 = document.querySelector("#gif22-step3");
const gif23Step3 = document.querySelector("#gif23-step3");
const gif24Step3 = document.querySelector("#gif24-step3");

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
const trans11Step3 = document.querySelector("#trans11-step3");
const trans12Step3 = document.querySelector("#trans12-step3");
const trans13Step3 = document.querySelector("#trans13-step3");
const trans14Step3 = document.querySelector("#trans14-step3");
const trans15Step3 = document.querySelector("#trans15-step3");
const trans16Step3 = document.querySelector("#trans16-step3");
const trans17Step3 = document.querySelector("#trans17-step3");
const trans18Step3 = document.querySelector("#trans18-step3");
const trans19Step3 = document.querySelector("#trans19-step3");
const trans20Step3 = document.querySelector("#trans20-step3");

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

// when first 3H Pencil was clicked 

pencil1Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png1Step3.style.visibility = "hidden";
    arr2Step3.style.visibility = "hidden";

    gif1Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif1Step3.style.visibility = "hidden";
        png2Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Select the compass and draw circle of given diameter (80mm).";
        stepNumber.innerText = "4";

        arr4Step3.style.visibility = "visible";
        trans3Step3.style.visibility = "visible";
    }, 13230)
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
        instruction1Step3.innerText = "Select 3H pencil and divide the circle into 8 equal parts and name them as a, b, c, e, f, g, h and i. ";
        stepNumber.innerText = "5";
        trans4Step3.style.visibility = "visible";
    }, 11340);
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

        instruction1Step3.innerText = "Project the front view by taking perpendicular from these corner points on the XY line and join them.";
        stepNumber.innerText = "6";

        arr3Step3.style.visibility = "visible";
        pencil4Step3.style.visibility = "visible";
    }, 22240)
});

pencil4Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png4Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif4Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif4Step3.style.visibility = "hidden";
        png5Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Select H pencil and join the points a',b',h',c',g',d',f',e' ";
        stepNumber.innerText = "7";

        arr1Step3.style.visibility = "visible";
        trans6Step3.style.visibility = "visible";
    }, 27730)
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
        pencil5Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    } else {
        alert("Please select H Pencil");
    }
});

pencil5Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png5Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif5Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif5Step3.style.visibility = "hidden";
        png6Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Select 3H pencil and draw the axis equal to 100mm length";
        stepNumber.innerText = "8";

        arr1Step3.style.visibility = "visible";
        trans7Step3.style.visibility = "visible";
    }, 6090)
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
        pencil6Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    } else {
        alert("Please select 3H Pencil");
    }
});

pencil6Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png6Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif6Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif6Step3.style.visibility = "hidden";
        png7Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Select H pencil and join the slant heights and name the apex of the cone o'.";
        stepNumber.innerText = "9";

        arr1Step3.style.visibility = "visible";
        trans8Step3.style.visibility = "visible";
    }, 5770)
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
        pencil7Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    } else {
        alert("Please select H Pencil");
    }
});

pencil7Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png7Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif7Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif7Step3.style.visibility = "hidden";
        png8Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Select 3H pencil and join the remaining point with the apex of the front view of the cone.";
        stepNumber.innerText = "10";

        arr1Step3.style.visibility = "visible";
        trans9Step3.style.visibility = "visible";
    }, 17550)
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
        pencil8Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    } else {
        alert("Please select 3H Pencil");
    }
});

pencil8Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png8Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif8Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif8Step3.style.visibility = "hidden";
        png9Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Select compass Draw the second front view by drawing the slant height o’e’ on XY line. Make an arc from e’ equal to the length on o’e’ and make an arc from o’ equal to the length of o’a’.";
        stepNumber.innerText = "11";

        arr4Step3.style.visibility = "visible";
        trans5Step3.style.visibility = "visible";
    }, 15770)
});

trans5Step3.addEventListener("click", () => {
    trans3Step3.style.visibility = "hidden";
    arr4Step3.style.visibility = "hidden";
    arr5Step3.style.visibility = "visible";
    comp2Step3.style.visibility = "visible";
});

comp2Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr5Step3.style.visibility = "hidden";
    png9Step3.style.visibility = "hidden";

    gif9Step3.style.visibility = "visible";

    setTimeout(() => {
        gif9Step3.style.visibility = "hidden";
        png10Step3.style.visibility = "visible";
        arr1Step3.style.visibility = "visible";
        instruction1Step3.innerText = " Select H pencil join the intersecting point to o’ and e’ and name all the points.";
        stepNumber.innerText = "12";
        trans10Step3.style.visibility = "visible";
    }, 25520);
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

        instruction1Step3.innerText = "Select 3H pencil locate the pooints b', c', d' on the length a'e'";
        stepNumber.innerText = "13";

        arr1Step3.style.visibility = "visible";
        trans11Step3.style.visibility = "visible";
    }, 27640)
});

trans11Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    dropMenu9Step3.style.visibility = "visible";
    dropMenu9Step3.value = "default";
});

dropMenu9Step3.addEventListener("change", () => {
    let selectedValue = dropMenu9Step3.value;
    if (selectedValue === "3hPencil") {
        dropMenu9Step3.style.visibility = "hidden";
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

        instruction1Step3.innerText = "Now join these points with o'";
        stepNumber.innerText = "14";

        arr3Step3.style.visibility = "visible";
        pencil11Step3.style.visibility = "visible";
    }, 13490)
});

pencil11Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png12Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif12Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif12Step3.style.visibility = "hidden";
        png13Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Project the second top view by drawing horizontal projector from the first top view";
        stepNumber.innerText = "15";

        arr3Step3.style.visibility = "visible";
        pencil12Step3.style.visibility = "visible";
    }, 17680)
});

pencil12Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png13Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif13Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif13Step3.style.visibility = "hidden";
        png14Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Now draw vertical projector from the second front view";
        stepNumber.innerText = "16";

        arr3Step3.style.visibility = "visible";
        pencil13Step3.style.visibility = "visible";
    }, 29570)
});

pencil13Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png14Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif14Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif14Step3.style.visibility = "hidden";
        png15Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Select H pencil and join the corresponding intersection points";
        stepNumber.innerText = "17";

        arr1Step3.style.visibility = "visible";
        trans12Step3.style.visibility = "visible";
    }, 35720)
});

trans12Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    dropMenu10Step3.style.visibility = "visible";
    dropMenu10Step3.value = "default";
});

dropMenu10Step3.addEventListener("change", () => {
    let selectedValue = dropMenu10Step3.value;
    if (selectedValue === "hPencil") {
        dropMenu10Step3.style.visibility = "hidden";
        pencil14Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    } else {
        alert("Please select H Pencil");
    }
});

pencil14Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png15Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif15Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif15Step3.style.visibility = "hidden";
        png16Step3.style.visibility = "visible";

        instruction1Step3.innerText = "select 3H pencil and as the axis making 30 degree inclination with the VP, make the generator oa 30 degree inclined to the XY axis";
        stepNumber.innerText = "18";

        arr1Step3.style.visibility = "visible";
        trans13Step3.style.visibility = "visible";
    }, 18910)
});

trans13Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    dropMenu11Step3.style.visibility = "visible";
    dropMenu11Step3.value = "default";
});

dropMenu11Step3.addEventListener("change", () => {
    let selectedValue = dropMenu11Step3.value;
    if (selectedValue === "3hPencil") {
        dropMenu11Step3.style.visibility = "hidden";
        pencil15Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    } else {
        alert("Please select 3H Pencil");
    }
});

pencil15Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png16Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif16Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif16Step3.style.visibility = "hidden";
        png17Step3.style.visibility = "visible";

        instruction1Step3.innerText = "select compass and mark the points n, p, m and e by taking arc equal to the length of on, op, om and oe from the second top view. Make arcs of equal length of og and oh from point o (in 3rd top view). Also make arc from point p equal to the length of pg and pc";
        stepNumber.innerText = "19";

        arr4Step3.style.visibility = "visible";
        trans14Step3.style.visibility = "visible";
    }, 13810)
});

trans14Step3.addEventListener("click", () => {
    trans14Step3.style.visibility = "hidden";
    arr4Step3.style.visibility = "hidden";
    arr5Step3.style.visibility = "visible";
    comp3Step3.style.visibility = "visible";
});

comp3Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr5Step3.style.visibility = "hidden";
    png17Step3.style.visibility = "hidden";

    gif17Step3.style.visibility = "visible";

    setTimeout(() => {
        gif17Step3.style.visibility = "hidden";
        png18Step3.style.visibility = "visible";
        arr1Step3.style.visibility = "visible";
        instruction1Step3.innerText = " Select 3H pencil and join the intersection points";
        stepNumber.innerText = "20";
        trans15Step3.style.visibility = "visible";
    }, 58000);
});

trans15Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    dropMenu12Step3.style.visibility = "visible";
    dropMenu12Step3.value = "default";
});

dropMenu12Step3.addEventListener("change", () => {
    let selectedValue = dropMenu12Step3.value;
    if (selectedValue === "3hPencil") {
        dropMenu12Step3.style.visibility = "hidden";
        pencil16Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    } else {
        alert("Please select 3H Pencil");
    }
});

pencil16Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png18Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif18Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif18Step3.style.visibility = "hidden";
        png19Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Select compass and make the arcs equal to the length of mf from m and n. Now take the length equal to length of of and intersect the previous arcs";
        stepNumber.innerText = "21";

        arr4Step3.style.visibility = "visible";
        trans16Step3.style.visibility = "visible";
    }, 9750)
});

trans16Step3.addEventListener("click", () => {
    trans16Step3.style.visibility = "hidden";
    arr4Step3.style.visibility = "hidden";
    arr5Step3.style.visibility = "visible";
    comp4Step3.style.visibility = "visible";
});

comp4Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr5Step3.style.visibility = "hidden";
    png19Step3.style.visibility = "hidden";

    gif19Step3.style.visibility = "visible";

    setTimeout(() => {
        gif19Step3.style.visibility = "hidden";
        png20Step3.style.visibility = "visible";
        arr1Step3.style.visibility = "visible";
        instruction1Step3.innerText = "Select 3H pencil and locate these points.";
        stepNumber.innerText = "22";
        trans17Step3.style.visibility = "visible";
    }, 31430);
});

trans17Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    dropMenu13Step3.style.visibility = "visible";
    dropMenu13Step3.value = "default";
});

dropMenu13Step3.addEventListener("change", () => {
    let selectedValue = dropMenu13Step3.value;
    if (selectedValue === "3hPencil") {
        dropMenu13Step3.style.visibility = "hidden";
        pencil17Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    } else {
        alert("Please select 3H Pencil");
    }
});

pencil17Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png20Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif20Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif20Step3.style.visibility = "hidden";
        png21Step3.style.visibility = "visible";

        instruction1Step3.innerText = "select H pencil and join these points.";
        stepNumber.innerText = "23";

        arr1Step3.style.visibility = "visible";
        trans18Step3.style.visibility = "visible";
    }, 13270)
});

trans18Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    dropMenu14Step3.style.visibility = "visible";
    dropMenu14Step3.value = "default";
});

dropMenu14Step3.addEventListener("change", () => {
    let selectedValue = dropMenu14Step3.value;
    if (selectedValue === "hPencil") {
        dropMenu14Step3.style.visibility = "hidden";
        pencil18Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    } else {
        alert("Please select H Pencil");
    }
});

pencil18Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png21Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif21Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif21Step3.style.visibility = "hidden";
        png22Step3.style.visibility = "visible";

        instruction1Step3.innerText = "select 3H pencil and Project the third front view by drawing vertical projector from the corner from the third top view ";
        stepNumber.innerText = "24";

        arr1Step3.style.visibility = "visible";
        trans19Step3.style.visibility = "visible";
    }, 27410)
});

trans19Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    dropMenu15Step3.style.visibility = "visible";
    dropMenu15Step3.value = "default";
});

dropMenu15Step3.addEventListener("change", () => {
    let selectedValue = dropMenu15Step3.value;
    if (selectedValue === "3hPencil") {
        dropMenu15Step3.style.visibility = "hidden";
        pencil19Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    } else {
        alert("Please select 3H Pencil");
    }
});

pencil19Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png22Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif22Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif22Step3.style.visibility = "hidden";
        png23Step3.style.visibility = "visible";

        instruction1Step3.innerText = "now draw horizontal projectors from the second front view";
        stepNumber.innerText = "25";

        arr3Step3.style.visibility = "visible";
        pencil20Step3.style.visibility = "visible";
    }, 75150)
});

pencil20Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png23Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif23Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif23Step3.style.visibility = "hidden";
        png24Step3.style.visibility = "visible";

        instruction1Step3.innerText = "select H pencil and join these points.";
        stepNumber.innerText = "26";

        arr1Step3.style.visibility = "visible";
        trans20Step3.style.visibility = "visible";
    }, 50180)
});

trans20Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    dropMenu16Step3.style.visibility = "visible";
    dropMenu16Step3.value = "default";
});

dropMenu16Step3.addEventListener("change", () => {
    let selectedValue = dropMenu16Step3.value;
    if (selectedValue === "hPencil") {
        dropMenu16Step3.style.visibility = "hidden";
        pencil21Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    } else {
        alert("Please select H Pencil");
    }
});

pencil21Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";
    png24Step3.style.visibility = "hidden";

    gif24Step3.style.visibility = "visible";

    setTimeout(() => {
        gif24Step3.style.visibility = "hidden";
        png25Step3.style.visibility = "visible";
    }, 28430);

    setTimeout(() => {
        png25Step3.style.visibility = "hidden";
        png26Step3.style.visibility = "visible";
    }, 30430);

    setTimeout(() => {
        nextToFinalPng.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 32930)
});

nextToFinalPng.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arrNext.style.visibility = "hidden";
    png26Step3.style.visibility = "hidden";
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