let psl = document.getElementById("psl");
let mvne = document.getElementById("mvn");
let imb = document.getElementById("imb");
let dsp = document.getElementById("dsc");


function res() {
    let postcontainer = document.createElement("div");
    let posterlink = document.createElement("img");
    let imdb = document.createElement("button");
    let desc = document.createElement("div");
    let pstr = document.getElementById("poster");
    postcontainer.classList.add("poster-container")
    posterlink.src = psl.value.trim();

    posterlink.classList.add("poster")
    imdb.classList.add("imbdlink")
    imdb.innerHTML = "Link";
    imdb.onclick = function() {
        window.location.href = imb.value.trim();
    }
    desc.classList.add("movieinfo")
    postcontainer.appendChild(posterlink)
    postcontainer.appendChild(desc)
    postcontainer.appendChild(imdb)
    pstr.appendChild(postcontainer)
}

// function res() {

//     let cont = document.createElement("div");
//     let plink = document.createElement("img");
//     let imdb = document.createElement("button");
//     let hrd = document.createElement("div");
//     hrd.classList.add("hold");
//     let hr = document.createElement("hr");
//     hr.classList.add("grn");
//     let mvn = document.createElement("h3");
//     mvn.classList.add("h3");
//     mvn.innerHTML = mvne.value.trim();
//     let desc = document.createElement("p");
//     desc.classList.add("para");
//     desc.innerHTML = dsp.value.trim();

//     let cn = document.createElement("div");
//     cn.classList.add("cn");
//     cn.appendChild(mvn);
//     cn.appendChild(desc);
//     hrd.appendChild(hr);

//     plink.classList.add("plk");
//     plink.src = psl.value.trim();
//     imdb.innerHTML = "Link";
//     imdb.classList.add("imdb");
//     imdb.onclick = async function() {
//         await console.log(imb.value.trim());
//     }
//     cont.appendChild(hrd);
//     cont.appendChild(plink);
//     cont.appendChild(cn);
//     cont.appendChild(imdb);
//     cont.classList.add("cnt");

//     hd1.appendChild(cont);

//     if (psl.value != "" && mvne.value != "" && imb.value != "" && dsp.value != "") {
//         psl.value = "";
//         mvne.value = "";
//         imb.value = "";
//         dsp.value = "";
//     };

// };