let psl = document.getElementById("psl");
let mvne = document.getElementById("mvn");
let imb = document.getElementById("imd");
let dsp = document.getElementById("dsc");
let pstr = document.getElementById("poster");
let db = firebase.firestore();

db.collection('movies').onSnapshot(list => {
    psl.value = "";
    mvne.value = "";
    dsp.value = "";
    imb.value = "";
    pstr.innerHTML = "";

    // console.log(doc.data())
    list.forEach((doc) => {
        console.log(doc.data())
        let postcontainer = document.createElement("div");
        let posterlink = document.createElement("img");
        let imdb = document.createElement("button");
        let desc = document.createElement("div");
        let infos = document.createElement("p");
        infos.classList.add("para");
        desc.appendChild(infos);
        postcontainer.classList.add("poster-container")
        posterlink.src = psl.value.trim();

        posterlink.classList.add("poster")
        imdb.classList.add("imbdlink")
        imdb.innerHTML = "Link";
        imdb.onclick = function() {
            window.location.href = imb.value.trim();
        }
        desc.classList.add("movieinfo");
        postcontainer.appendChild(posterlink);
        postcontainer.appendChild(desc);
        postcontainer.appendChild(imdb);
        list.innerHTML = doc.data().list;
        pstr.appendChild(postcontainer);
    })
})

function res() {
    if (psl.value.trim() == "" && mvne.value.trim() == "" && imb.value.trim() == "") {
        return 0;
    }

    db.collection('movies').add({
        Postlink: psl.value.trim(),
        MovieName: mvne.value.trim(),
        Description: mvne.value.trim(),
        IMDBLink: imb.value.trim(),
    })
}

// inp -> poster link , mname -> inp , imdb link -> inp , des -> inp , addls -> btn -> MAIN  , 

// Under the my list 

// Needed codes: Document.createElement("img") , Document.createElement("button") , Document.createElement("div") , "div" -> appendChild ,