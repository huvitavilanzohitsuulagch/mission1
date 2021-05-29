let psl = document.getElementById("psl");
let mvne = document.getElementById("mvn");
let imb = document.getElementById("imd");
let dsp = document.getElementById("dsc");
let pstr = document.getElementById("poster");
let db = firebase.firestore();
alert("Write with space properly down below the description input");

db.collection('movies').onSnapshot(list => {
    psl.value = "";
    mvne.value = "";
    dsp.value = "";
    imb.value = "";
    pstr.innerHTML = "";

    list.forEach((doc) => {

        let postcontainer = document.createElement("div");
        let posterlink = document.createElement("img");
        let imdb = document.createElement("button");
        let desc = document.createElement("div");
        let div1 = document.createElement("div");
        let mname = document.createElement("p");
        mname.classList.add("movie");
        mname.innerHTML = doc.data().MovieName;
        div1.classList.add("div1");
        div1.appendChild(mname);
        let div2 = document.createElement("div");
        div2.classList.add("div2");
        let info = document.createElement("p");
        info.classList.add("para");
        info.innerHTML = doc.data().Description;
        div2.appendChild(info);
        desc.classList.add("movieinfo");
        desc.appendChild(div1);
        desc.appendChild(div2);
        posterlink.classList.add("poster");
        posterlink.src = doc.data().Postlink;
        postcontainer.classList.add("poster-container");
        imdb.classList.add("imbdlink");

        let trg = document.createElement("a");
        trg.classList.add("trg");
        trg.href = doc.data().IMDBLink;
        trg.target = "_blank";
        imdb.innerHTML = "List";
        trg.appendChild(imdb);
        postcontainer.appendChild(posterlink);
        postcontainer.appendChild(desc);
        postcontainer.appendChild(trg);
        list.innerHTML = doc.data().list;
        pstr.appendChild(postcontainer);
    });
});

function res() {

    if (psl.value.trim() == "" && mvne.value.trim() == "" && imb.value.trim() == "" && dsp.value.trim() == "") {
        return 0;
    }

    db.collection('movies').add({
        Postlink: psl.value.trim(),
        MovieName: mvne.value.trim(),
        Description: dsp.value.trim(),
        IMDBLink: imb.value.trim(),
    });
};

document.onkeyup = (e) => {
    if (e.key == "Enter") {
        res();
    }
}
