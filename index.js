// Event.path[0] deprecated lett, helyette Event.target !!!!!

let base = "A, Á, B, C, Cs, D, Dz, Dzs, E, É, F, G, Gy, H, I, Í, J, K, L, Ly, M, N, Ny, O, Ó, Ö, Ő, P, R, S, Sz, T, Ty, U, Ú, Ü, Ű, V, W, Z, Zs, X, Y";
let base2 = "A, Á, B, C, Cs, D, Dz, Dzs, E, É, F, G, Gy, H, I, Í, J, K, L, Ly, M, N, Ny, O, Ó, Ö, Ő, P, R, S, Sz, T, Ty, U, Ú, Ü, Ű, V, W, Z, Zs, X, Y";
let capLetters = base.split(", ");
base = base.toLowerCase();

let forLetters = base.split(", ");
let letters = Array();
forLetters.forEach(value => { if (value.length == 1) { letters.push(value) } })

let forLetters2 = base2.split(", ");
let letters2 = Array();
forLetters2.forEach(value => { if (value.length == 1) { letters2.push(value) } })

let lettersUpperAndLower = letters.concat(letters2)

let capBigrams = Array();
bigrams = Array();
let radius = 0;

const startProgramButtonFunction = function () {
    radius = parseInt(document.querySelector("#keyword-radius-input").value);
    keyWord = document.querySelector("#keywordInput").value
    mainFunction();
    document.querySelector("#keywordLocationNumber").innerHTML = keyWordNumber;
    intervallumFunction()
    trigramFunction();
    prepareAnomalies();
    checkAnomalies();
    fillAnomaliesDiv();

    analyseShortTexts(rangeArray);
    analyseShortTexts2(rangeArray);
    div4AnalysedShortText();
    coloringContent(rangeArray);
    displayFinalColoredResult();

    makeCheckboxFunction();


}
//meghatározza a kulcsszó előfordulásának radius sugarú környezetét


// let titleArray = ["OV21dec21", "OV21febr17", "OV21febr4", "OV21szept21", "OV20jun12",
//     "OV20febr28", "OV19szept19", "OV18jan3", "OV17jan7"]

// let textArray = [textOV21dec21, textOV21febr17, textOV21febr4, textOV21szept21, textOV20jun12,
//     textOV20febr28, textOV19szept19, textOV18jan3, textOV17jan7]

// let keyWord = "testtartás"

// let titleArray = ["Móricz:Rokonok"]
// let textArray = [rokonok]

// let titleArray = ["Orbán 2016 márc. 15."]
// let textArray = [ov16marc15]

// let titleArray = ["Orbán 2015 márc. 15."]
// let textArray = [ov15marc15]

// let titleArray = ["Orbán 2015 márc. 9."]
// let textArray = [OV15marc9]

// let titleArray = ["Orbán 2017 jan. 7."]
// let textArray = [OV17jan7]

// let titleArray = ["Orbán 2016 okt. 23."]
// let textArray = [ov16okt23]

// let titleArray = ["Orbán 2017 márc. 15."]
// let textArray = [OV17marc15]

// let titleArray = ["Orbán 2017 okt. 23."]
// let textArray = [OV17okt23]

// let titleArray = ["Konrád György: A látogató"]
// let textArray = [latogato]

// let titleArray = ["Gyurcsány Ferenc: Öszödi beszéd"]
// let textArray = [oszod]

// let titleArray = ["Marquez: Száz év magány"]
// let textArray = [szaz]

// let titleArray = ["Ottlik Géza: Iskola a határon"]
// let textArray = [iskola]

// let titleArray = ["Ottlik Géza: Buda"]
// let textArray = [buda]

// let titleArray = ["Márai Sándor: A gyertyák csonkig égnek"]
// let textArray = [gyertyak]

// let titleArray = ["Orbán 2018 márc. 15."]
// let textArray = [OV18marc15]

let titleArray = ["Csontváry: Önéletrajz"]
let textArray = [csontvary]

// let titleArray = ["Semjén Zsolt:Megsejteni a sejthetetlent"]
// let textArray = [semjen]

// let titleArray = ["Kádár János utolsó beszéde"]
// let textArray = [kadar]

// let titleArray = ["OV tusványosi beszéde 2022"]
// let textArray = [tusvanyos22]

// let titleArray = ["József Attila: Versek"]
// let textArray = [ja]

// let titleArray = ["Kosztolányi Dezső: Édes Anna"]
// let textArray = [anna]

// let titleArray = ["Kosztolányi Dezső: Pacsirta"]
// let textArray = [pacsirta]

// let titleArray = ["Kosztolányi Dezső: Összes versek"]
// let textArray = [Kosztolányi_versek]

// let titleArray = ["Kosztolányi Dezső: Nero, a véres költő"]
// let textArray = [nero]

// let titleArray = ["Kosztolányi Dezső: Esti Kornél"]
// let textArray = [kornel]

// let titleArray = ["Karinthy Frigyes: Utazás a koponyám körül"]
// let textArray = [utazás]

// let titleArray = ["Karinthy Frigyes: Capillária"]
// let textArray = [capillaria]

// let titleArray = ["Pálfi Balázs: Anya naplója"]
// let textArray = [anya]

// let titleArray = ["Rudas Jánois: Delfi örökösei"]
// let textArray = [rudas]

// let titleArray = ["Kemény Zsigmond Naplója"]
// let textArray = [naplo]

// let titleArray = ["Kemény Zsigmond: Özvegy és leánya"]
// let textArray = [ozvegy]

// let titleArray = ["Babits: Gólyakalifa, Elza"]
// let textArray = [golya]

// let titleArray = ["Babits: Halálfiai"]
// let textArray = [halalfiai]

// let titleArray = ["Kemény Zsigmond: A rajongók"]
// let textArray = [rajongok]

// let titleArray = ["Kemény Zsigmond: Zord idők"]
// let textArray = [zord]

// let titleArray = ["Kemény Zsigmond: Gyulai Pál"]
// let textArray = [gyulai]

// let titleArray = ["Kosztolányi Dezső: Aranysárkány"]
// let textArray = [aranysarkany]

// let titleArray = ["Fejes Endre: Jó estét nyár, jó estét szerelem"]
// let textArray = [jo_estet]

// let titleArray = ["Fejes Endre: Rozsdatemető"]
// let textArray = [rozsdatemető]

// let titleArray = ["Fejes Endre: Szerelemről bolond éjszakán"]
// let textArray = [szerelemről]

// let titleArray = ["Szállasi Ferenc: Út és cél - 1935"]
// let textArray = [szallasi]

// let titleArray = ["Orbán Viktor: 2023 - évértékelő beszéd"]
// let textArray = [evertekelo_2023]

// let titleArray = ["Ady Endre: Versek"]
// let textArray = [ady]

// let titleArray = ["Dian: Surigao"]
// let textArray = [surigao]



let myContent = ``;
let keyWordLocation = Array();
let keyWordLocation4radius = Array();
let keyWordNumber = 0;
let myTextWithKeyword = "";
let newText = "";
let shortTextArray = Array();
let shortTextArray4Analyse = Array();
let trigrams = Array();
let forShortTextArray = ""
let wordIncludes = Array();
let trigramIncludes = Array();
let trigramHere = Array();
let ennyiSzoveghelyVan = Number();
let szoveghelySorszamokArray = Array();
let shortAllTrigrams = Array();
let shortAllTrigramsInOrder = Array();
let teljesSzovegHossza = 0;
let reszletSzovegekHossza = 0;
let multiplicator = 0;
let textArrayAfterSplit = Array()
let newTextPartsArray = Array()
let coloredTextArray4Analyse = Array();
let coloredTextArray4AnalyseBottom = Array();
let rangeArray = Array();

let textORIGINAL = textArray[0].slice(0)
let allWordsORIGINAL = textORIGINAL.split(" ");

for (let i = 0; i < textArray.length; i++) {
    textArray[i] = textArray[i].toLowerCase();
}

for (let i = 0; i < textArray.length; i++) {
    teljesSzovegHossza = 0;
    teljesSzovegHossza += textArray[i].length;
}

let trigramFullTextOccurrance = Number();
const trigramFullTextOccurranceFunction = function (myTrigram) {
    trigramFullTextOccurrance = 0;
    for (let i = 0; i < textArray.length; i++) {
        for (let j = 0; j < textArray[i].length - 2; j++) {
            if (textArray[i][j] + textArray[i][j + 1] + textArray[i][j + 2] == myTrigram) {
                trigramFullTextOccurrance += 1;
            }
        }
    }

    if (DisplayTR) {
        document.querySelector("#trigram-Full-Text-Occurrance").innerHTML = trigramFullTextOccurrance;
    }
}

let myExTRonclick_Id = "TR0"
let myTRonclick_IdNOW = ""
const TRonclickFunction = function (ev) {

    //myTrigram_=ev.target.outerText.substring(0,3);
    document.querySelector(`#${myExTRonclick_Id}`).setAttribute("style", "color:black");
    let myID = "";
    if (ev[0] == "T" && ev[1] == "R") {
        myId = ev;
    } else {
        myId = ev.target.id;
    }
    myExTRonclick_Id = myId
    myTRonclick_IdNOW = myId;
    document.querySelector(`#${myId}`).setAttribute("style", "color:red");
    let myTrigram = document.querySelector(`#${myId}`).innerText.substring(0, 3)
    trigramFullTextOccurranceFunction(myTrigram)
    coloringTrigramsFunction(myTrigram);
    document.querySelector("#trgrm").innerHTML = myTrigram;
}

let myExTRonmouse_Id = "TR0"
let exColor = '';
const TRonmousemoveFunction = function (ev) {
    let myId = ev.target.id;
    if (myExTRonclick_Id != myExTRonmouse_Id) {
        document.querySelector(`#${myExTRonmouse_Id}`).setAttribute("style", `color:black`);
        if (myId == myExTRonclick_Id) {
            document.querySelector(`#${myId}`).setAttribute("style", "color:red");
        } else {
            document.querySelector(`#${myId}`).setAttribute("style", "color:blue");
        }
    }
    myExTRonmouse_Id = myId;
}

const trigramInputFunction = function () {
    document.querySelector("#nincs-trigram").innerHTML = ""
    let myTrigram = document.querySelector("#trigram-input").value;
    let myId = ""
    for (let i = 0; i < shortAllTrigramsInOrder.length; i++) {
        if (shortAllTrigramsInOrder[i][0] == myTrigram) {
            myId = `TR${i}`;
        }
    }
    if (!myId) {
        document.querySelector("#nincs-trigram").innerHTML = " Nincs találat!"
    } else {
        TRonclickFunction(myId);
    }
}

const ngramFullTextOccurranceFunction = function (myNgram) {
    ngramFullTextOccurrance = 0;
    let k = myNgram.length;
    for (let i = 0; i < textArray.length; i++) {
        for (let j = 0; j < textArray[i].length - k; j++) {
            let checkThis = "";
            for (let m = 0; m < k; m++) {
                checkThis += textArray[i][j + m]
            }
            if (checkThis == myNgram) {
                ngramFullTextOccurrance += 1;
            }
        }
    }

    if (DisplayTR) {
        document.querySelector("#trigram-Full-Text-Occurrance").innerHTML = ngramFullTextOccurrance;
    }
}

const ngramInputFunction = function () {
    document.querySelector("#nincs-trigram").innerHTML = ""
    let myNgram = document.querySelector("#ngram-input").value;
    let myId = ""
    let k = myNgram.length
    if (k + 1 > ngrams2.length) { ngramSearchFunction(k) }
    for (let i = 0; i < ngrams2[k].length; i++) {
        if (ngrams2[k][i][0] == myNgram) {
            myId = `TR${i}`;
        }
    }
    if (!myId) {
        document.querySelector("#nincs-trigram").innerHTML = " Nincs találat!"
    } else {
        ngramFullTextOccurranceFunction(myNgram);
    }
}

let newContent = "";
let TRwordsArray = Array();
let shortTRwordsArray = Array();
let myParts2 = Array();
let myParts3 = Array();
let trigramSplitArray = Array();
let brSplitArray = Array();
let trigramOccurranceInShortText = 0;




const coloringTrigramsFunction = function (myTrigram) {
    document.querySelector("#nincs-trigram").innerHTML = ""
    trigramOccurranceInShortText = 0
    trigramHere = Array();
    let sorszam = Number();
    newContent = "";
    TRwordsArray = [];
    let myTRword = "";
    let myParts = newText.split(myTrigram);

    if (DisplayTR) {
        for (let i = 0; i < myParts.length; i++) {
            if (i < myParts.length - 1) {
                newContent += `${myParts[i]}<span style='background-color:lightcoral'>${myTrigram}</span>`;
                trigramOccurranceInShortText += 1;
            } else {
                newContent += `${myParts[i]}`
            }
        };
        document.querySelector("#trigram-Occurrance-In-Short-Text").innerHTML = trigramOccurranceInShortText
    }



    trigramSplitArray = newContent.split(myTrigram);
    for (let i = 0; i < trigramSplitArray.length - 1; i++) {
        brSplitArray = trigramSplitArray[i].split("itt_a_br_sorszama");
        sorszam = parseInt(brSplitArray[brSplitArray.length - 1].substring(0, 10));
        //kiszedi a NaN-t is, a NaN type-ja number, de NaN==NaN false miatt nem ismeri fel
        if (!trigramHere.includes(sorszam) && szoveghelySorszamokArray.includes(sorszam)) {
            trigramHere.push(sorszam);
        }
    }

    if (DisplayTR) {
        document.querySelector("#szorzo1").innerHTML =
            `${(trigramOccurranceInShortText / trigramFullTextOccurrance * 100).toFixed(1)} %`
        document.querySelector("#div4results").innerHTML = `${newContent}`
    };

    let myParts4counting = myTextWithKeyword4Counting.split(myTrigram);
    TRwordsArray = Array();
    for (let i = 0; i < myParts4counting.length - 1; i++) {
        myParts2 = myParts4counting[i].split(" ")
        myParts3 = myParts4counting[i + 1].split(" ")
        if (myParts2[myParts.length] == " ") {
            myTRword = myTrigram + myParts3[0]
        }
        if (myParts3[0] == " ") {
            myTRword = myParts2[myParts2.length - 1] + myTrigram
        }
        if (myParts2[myParts.length] == " " && myParts3[0] == " ") {
            myTRword = myTrigram
        }
        if (myParts2[myParts.length] != " " && myParts3[0] != " ") {
            myTRword = myParts2[myParts2.length - 1] + myTrigram + myParts3[0];
        }
        if (!letters.includes(myTRword[myTRword.length - 1])) {
            myTRword = myTRword.substring(0, myTRword[myTRword.length - 1])
        }
        TRwordsArray.push(myTRword)
        TRwordsArray.sort();
    }

    shortTRwordsArray = Array();
    for (let i = 0; i < TRwordsArray.length - 1; i++) {
        if (TRwordsArray[i] != TRwordsArray[i + 1]) {
            shortTRwordsArray.push(TRwordsArray[i]);
        }
    }
    let myTRsignal = 1;
    for (let i = 0; i < TRwordsArray.length - 1; i++) {
        myTRsignal *= TRwordsArray[i] == TRwordsArray[i + 1]
    }
    if (myTRsignal == 1) {
        shortTRwordsArray.push(TRwordsArray[0]);

    }
    if (TRwordsArray.length == 1) {
        shortTRwordsArray.push(TRwordsArray[0])
    } else {
        if (!shortTRwordsArray.includes(TRwordsArray[TRwordsArray.length - 1])) {
            shortTRwordsArray.push(TRwordsArray[TRwordsArray.length - 1]);
        }
    }

    let shortTRcontent = ``;
    for (let i = 0; i < shortTRwordsArray.length; i++) {
        shortTRcontent += `${shortTRwordsArray[i]}; `
    }
    let ennyiszer = 0;
    for (let i = 0; i < shortTextArray.length; i++) {
        ennyiszer += shortTextArray[i].length;
    }
    if (DisplayTR) {
        document.querySelector("#div4TrigramOccurrance").innerHTML = shortTRcontent
        document.querySelector("#kulcsszo").innerHTML = keyWord;
        document.querySelector("#ennyiszov").innerHTML = ennyiszer;
        document.querySelector("#trigram").innerHTML = myTrigram;
        document.querySelector("#trigramennyi").innerHTML = trigramHere.length;
        let trigramHere_ = Array()
        for (let i = 0; i < trigramHere.length; i++) {
            trigramHere_[i] = trigramHere[i] + 1
        }
        document.querySelector("#ezekben").innerHTML = trigramHere_;
        forTartalmazasFunctionArray.push([keyWord, shortTRwordsArray]);
    };
}

let forTartalmazasFunctionArray = Array();

let DisplayTR = true
let tartalmazasArray = Array();
const tartalmazasFunction = function () {
    DisplayTR = false;
    for (let m = 0; m < shortAllTrigramsInOrder.length; m++) {
        let myTrigram = shortAllTrigramsInOrder[m][0]
        trigramFullTextOccurranceFunction(myTrigram)
        coloringTrigramsFunction(myTrigram)
        let counter = 0;
        for (let i = 0; i < shortTRwordsArray.length - 1; i++) {
            counter = 0;
            for (let j = 1; j < shortTRwordsArray[i].length - 1; j++) {
                if (shortTRwordsArray[i + 1].substring(1, shortTRwordsArray[i + 1].length - 1).includes(shortTRwordsArray[i][j])) {
                    counter += 1;
                }
            }
            if (counter >= 4) {
                let myArray = [shortTRwordsArray[i], shortTRwordsArray[i + 1]];
                if (!tartalmazasArray.includes(myArray) &&
                    myArray[0][0] != myArray[1][0] &&
                    myArray[0][1] != myArray[1][1] &&
                    myArray[0][2] != myArray[1][2] &&
                    myArray[0][3] != myArray[1][3] &&
                    myArray[0][myArray[0].length - 1] != myArray[1][myArray[1].length - 1] &&
                    myArray[0][myArray[0].length - 2] != myArray[1][myArray[1].length - 2] &&
                    myArray[0][myArray[0].length - 3] != myArray[1][myArray[1].length - 3]
                ) {
                    tartalmazasArray.push(myArray)
                }
            }
        }

    }
    DisplayTR = true;
}

const TRradioOninput = function () {
    if (document.querySelector("#TRabc").checked) {
        document.querySelector("#div4trigrams").innerHTML = `${TRcontent_abc}`;
    }
    if (document.querySelector("#TRnagysag").checked) {
        document.querySelector("#div4trigrams").innerHTML = `${TRcontent_size}`;
    }
}

const mainFunction = function () {
    for (let i = 0; i < textArray.length; i++) {
        textArray[i] = textArray[i].toLowerCase();
    }

    //megkeresi a kulcsszó előfordulásait
    keyWordLocation = Array()
    keyWordNumber = 0
    for (let i = 0; i < textArray.length; i++) {
        let myArray = Array();
        for (let j = 0; j < textArray[i].length; j++) {
            myWord = "";
            for (let k = 0; k < keyWord.length; k++) {
                myWord += textArray[i][j + k];
            }
            if (keyWord == myWord) {
                myArray.push(j)
                keyWordNumber += 1;
            }
        }
        keyWordLocation.push(myArray);
    }
}

const intervallumFunction = function () {
    let content = ``;
    shortTextArray = Array();

    //a kulcsszavak túl közel vannak, akkor a sugár szélességnyi környezetük átfedi egymást, így
    //ugyanazt többször is számolhatja a program: meg kell határozni a diszjunkt intervallumokat
    //keyWordLocation4Radius [start,finish]
    keyWordLocation4radius = Array();
    let i = 0;
    let h = 0;
    let myArray1 = Array();
    let start = 0;
    let finish = 0;
    let myNewStart = 0;
    //let noResult = true
    for (let j = 0; j < keyWordLocation[i].length; j++) {
        if (j == myNewStart && j < keyWordLocation[i].length - 1) {
            if (keyWordLocation[i][j + 1] - keyWordLocation[i][j] >= 2 * radius) {
                let myArray2 = Array();
                (keyWordLocation[i][j] - radius < 0) ? (start = 0) : (start = keyWordLocation[i][j] - radius);
                (keyWordLocation[i][j] + radius >= textArray[h].length) ? (finish = textArray[h].length - 1)
                    : (finish = keyWordLocation[i][j] + radius);
                myArray1.push([start, finish]);
                myNewStart += 1;
            } else {
                let myArray2 = Array();

                (keyWordLocation[i][j] - radius < 0) ? (start = 0) : (start = keyWordLocation[i][j] - radius);
                (keyWordLocation[i][keyWordLocation[i].length - 1] + radius > textArray[h].length - 1) ? (finish = textArray[h].length - 1)
                    : (finish = keyWordLocation[i][keyWordLocation[i].length - 1] + radius);
                for (let m = j; m < keyWordLocation[i].length - 1; m++) {
                    if (keyWordLocation[i][m + 1] - keyWordLocation[i][m] > 2 * radius) {
                        (keyWordLocation[i][m] + radius > textArray[h].length - 1) ? (finish = textArray[h].length - 1)
                            : (finish = keyWordLocation[i][m] + radius);
                        myNewStart = m + 1
                        break;
                    }
                }
                myArray1.push([start, finish]);
            }
        }
        //utolsó előfordulás, ill. ha a kulcsszó csak egyszer forful elő
        if (j == keyWordLocation[i].length - 1) {
            (keyWordLocation[i][j] - radius < 0) ? (start = 0) : (start = keyWordLocation[i][j] - radius);
            (keyWordLocation[i][j] + radius >= textArray[h].length) ? (finish = textArray[h].length - 1)
                : (finish = keyWordLocation[i][j] + radius);
            myArray1.push([start, finish]);
        }
    }
    keyWordLocation4radius.push(myArray1);

    reszletSzovegekHossza = 0;
    for (let i = 0; i < keyWordLocation4radius.length; i++) {
        for (let j = 0; j < keyWordLocation4radius[i].length; j++) {
            reszletSzovegekHossza += keyWordLocation4radius[i][j][1] - keyWordLocation4radius[i][j][0]
        }
    }
    if (keyWordLocation4radius.length == 1) {
        reszletSzovegekHossza = keyWordLocation4radius[0][1] - keyWordLocation4radius[0]
    }

    multiplicator = reszletSzovegekHossza / teljesSzovegHossza * 10000 * 3 / 4

    //document.querySelector("#index-min").value = Math.ceil(multiplicator);
    //document.querySelector("#ei-max").innerHTML = Math.ceil(multiplicator);

    ennyiSzoveghelyVan = 0;
    for (let i = 0; i < keyWordLocation4radius.length; i++) {
        ennyiSzoveghelyVan += keyWordLocation4radius[i].length;
    }
    szoveghelySorszamokArray = Array();
    for (let i = 0; i < ennyiSzoveghelyVan; i++) {
        szoveghelySorszamokArray[i] = i;
    }

    //összerakja a kulcsszavakat tartalmazó részeket
    myTextWithKeyword = ""
    myTextWithKeyword4Counting = ""
    forShortTextArray4Counting = Array();
    //nincsenek benne a formázáshoz tartozó karakterek:myTextWithKeyword4Counting, forShortTextArray4Counting
    for (let i = 0; i < textArray.length; i++) {
        forShortTextArray = ""
        shortTextArray4Analyse = Array();
        myTextWithKeyword += `<b>${titleArray[i]}</b>`;
        let myArray = Array();
        let myArray4counting = Array();
        for (let j = 0; j < keyWordLocation4radius[i].length; j++) {
            forShortTextArray += `<br class='itt_a_br_sorszama${j}'><br>` + textArray[i].substring(keyWordLocation4radius[i][j][0], keyWordLocation4radius[i][j][1])
            myTextWithKeyword += forShortTextArray;
            myTextWithKeyword4Counting += textArray[i].substring(keyWordLocation4radius[i][j][0], keyWordLocation4radius[i][j][1])
            myArray[j] = forShortTextArray;
            forShortTextArray = ""
            myArray4counting[j] = textArray[i].substring(keyWordLocation4radius[i][j][0], keyWordLocation4radius[i][j][1])
            shortTextArray4Analyse.push(textArray[i].substring(keyWordLocation4radius[i][j][0], keyWordLocation4radius[i][j][1]))
        }
        shortTextArray[i] = myArray;
        forShortTextArray4Counting[i] = myArray4counting;

    }
    document.querySelector("#div4results").innerHTML = myTextWithKeyword
    document.querySelector("#ennyireszlet").innerHTML = shortTextArray4Analyse.length

    rangeArray = Array()
    for (let i = 0; i < shortTextArray4Analyse.length; i++) {
        rangeArray.push(i);
    }


    //kiszínezi a kulcsszó előfordulásait

    newText = "";

    let array4Numbers = myTextWithKeyword.split('<br>')
    let myTextWithNumbers = ""

    for (let j = 0; j < array4Numbers.length; j++) {
        if (j != 0) {
            myTextWithNumbers += `<b>${j} -- </b> ${array4Numbers[j]}<br>`
        } else (
            myTextWithNumbers += `${array4Numbers[j]}`
        )
    }
    myTextWithKeyword = myTextWithNumbers

    textArrayAfterSplit = myTextWithKeyword.split(`${keyWord}`)
    for (let j = 0; j < textArrayAfterSplit.length - 1; j++) {
        newText += `${textArrayAfterSplit[j]}<span style='background-color:red'>
             ${keyWord}</span>`
    }

    newText += `${textArrayAfterSplit[textArrayAfterSplit.length - 1]}`

    document.querySelector("#div4results").innerHTML = `${newText}`

    //ezekben a környezetekben megszámolja a trigrammákat
    trigrams = Array();
    textArray.forEach(value => {
        let myArray = Array();
        trigrams.push(myArray);
    })
    let allTrigrams = Array()

    for (let i = 0; i < forShortTextArray4Counting.length; i++) {
        let myTrigram = "";
        for (let j = 0; j < forShortTextArray4Counting[i].length; j++) {
            for (let k = 0; k < forShortTextArray4Counting[i][j].length; k++) {
                let myArray = Array()
                if (letters.includes(forShortTextArray4Counting[i][j][k]) && letters.includes(forShortTextArray4Counting[i][j][k + 1])
                    && letters.includes(forShortTextArray4Counting[i][j][k + 2])) {
                    myTrigram = forShortTextArray4Counting[i][j][k] + forShortTextArray4Counting[i][j][k + 1]
                        + forShortTextArray4Counting[i][j][k + 2];
                    myArray.push(myTrigram);
                    allTrigrams.push(myTrigram);
                }
                if (myArray.length > 0) { trigrams[i].push(myArray) }
            }
        }
    }

    for (let i = 0; i < trigrams.length; i++) {
        trigrams[i].sort()
    }
    allTrigrams.sort();
    shortAllTrigrams = Array();
    let counter = 1
    allTrigrams.forEach((value, index) => {
        if (allTrigrams[index] == allTrigrams[index + 1]) {
            counter += 1;
        } else {
            let myArray = [value, counter];
            shortAllTrigrams.push(myArray);
            counter = 1;
        }
    })

    shortAllTrigramsInOrder = Array();
    let maxSAT = 0;
    shortAllTrigrams.forEach(value => {
        if (value[1] > maxSAT) { maxSAT = value[1] }
    })
    for (let i = maxSAT; i > 0; i--) {
        for (let j = 0; j < shortAllTrigrams.length; j++) {
            if (shortAllTrigrams[j][1] == i) {
                shortAllTrigramsInOrder.push(shortAllTrigrams[j])
            }
        }
    }



    let = TRcontent_size = ""
    const makeTRcontentFunctionSize = function () {
        TRcontent_size = "<p>"
        shortAllTrigramsInOrder.forEach((value, index) => {
            TRcontent_size += `<span style="" id="TR${index}" onmousemove="TRonmousemoveFunction(event)" 
            onclick="TRonclickFunction(event)">
            ${value[0]} (${value[1]}); </span>`
        })
        TRcontent_size += "</p>"
    }
    makeTRcontentFunctionSize();


    let = TRcontent_abc = ""
    const makeTRcontentFunctionAbc = function () {
        TRcontent_abc = "<p>"
        shortAllTrigrams.forEach((value, index) => {
            TRcontent_abc += `<span style="" id="TR${index}" onmousemove="TRonmousemoveFunction(event)" 
            onclick="TRonclickFunction(event)">
            ${value[0]} (${value[1]}); </span>`
        })
        TRcontent_abc += "</p>"
    }
    makeTRcontentFunctionAbc();

    document.querySelector("#div4trigrams").innerHTML = `${TRcontent_size}`;
    document.querySelector("#TRnagysag").checked = true;
    document.querySelector("#TRabc").checked = false;


    //mainFunction() blokk vége    
}


let shortAllTrigrams2 = Array();
let shortAllTrigrams3 = Array()

const trigramFunction = function () {
    //ez a szemelvényekre
    shortAllTrigrams2 = Array();
    for (let i = 0; i < shortAllTrigrams.length; i++) {
        if (shortAllTrigrams[i][1] >= 0) {
            let myTrigram = shortAllTrigrams[i][0];
            let myOccurrance = shortAllTrigrams[i][1];
            let myArray = [myTrigram, myOccurrance];
            if (myOccurrance > 0) { shortAllTrigrams2.push(myArray) }
        }
    }


    //ez a teljes szövegre, de csak a szemelvények trigrammjait nézi;
    shortAllTrigrams3 = Array();
    for (let i = 0; i < shortAllTrigrams2.length; i++) {
        let myTrigram = shortAllTrigrams2[i][0]
        for (let j = 0; j < textArray.length; j++) {
            let myOccurrance = 0;
            let myArray = Array();
            for (let k = 0; k < textArray[j].length - 2; k++) {
                if (textArray[j][k] + textArray[j][k + 1] + textArray[j][k + 2] == myTrigram) {
                    myOccurrance += 1;
                }
                myArray = [myTrigram, myOccurrance];
            }
            shortAllTrigrams3.push(myArray)
        }
    }
}


let shortAllTrigrams4 = Array();
let shortAllTrigrams5 = Array();
let shortAllTrigrams6 = Array();
const checkAnomalies1 = function () {
    let TRmultiplicator = parseFloat((teljesSzovegHossza / reszletSzovegekHossza).toFixed(5))
    //hányszor kellene előfordulni a trigamnak a teljes szövegben a szemelvényben való előfordulása alapján
    shortAllTrigrams4 = Array();

    for (let i = 0; i < shortAllTrigrams2.length; i++) {
        let optimalOccurrance = shortAllTrigrams2[i][1] * TRmultiplicator
        let myArray = [shortAllTrigrams2[i][0], optimalOccurrance]
        shortAllTrigrams4.push(myArray)
    }

    //melyek azok a trigrammok, melyek az optimálisan várt előfordulás értékénél többször fordulnak elő
    //a tényleges előfordulás a teljes szövegben / optimális előfordulás hányadosa
    //ennek a max értéke a TRmultiplikátor, s ekkor a trigram csak a kigyűjtött helyeken fordul elő

    shortAllTrigrams5 = Array();

    for (let i = 0; i < shortAllTrigrams4.length; i++) {
        if (shortAllTrigrams4[i][1] > shortAllTrigrams3[i][1]) {
            myAnomaly = parseFloat((shortAllTrigrams3[i][1] / shortAllTrigrams2[i][1]).toFixed(2))
            let myArray = [shortAllTrigrams4[i][0], myAnomaly]
            shortAllTrigrams5.push(myArray);
        }
    }

    //nagyság szerint rendezi
    shortAllTrigrams6 = Array()
    let SATmax = 0;
    for (let i = 0; i < shortAllTrigrams5.length; i++) {
        if (SATmax < shortAllTrigrams5[i][1]) { SATmax = shortAllTrigrams5[i][1] }
    }

    let SATmax2 = SATmax * 100;
    for (let i = 0; i < shortAllTrigrams5.length; i++) {
        shortAllTrigrams5[i][1] = shortAllTrigrams5[i][1] * 100;
    }

    for (let i = 0; i < SATmax2 + 1; i++) {
        for (let j = 0; j < shortAllTrigrams5.length; j++) {
            if (shortAllTrigrams5[j][1] == i) {
                shortAllTrigrams6.push(shortAllTrigrams5[j])
            }
        }
    }
}
//checkAnomalies1()


let shortAllTrigrams2Percentage = Array();
let shortAllTrigrams3Percentage = Array();
let trigramPercentagesDifference = Array();
let anomalies = Array();
let anomalies2 = Array();
let anomalies3 = Array();


const prepareAnomalies = function () {
    shortAllTrigrams2Percentage = Array();
    shortAllTrigrams3Percentage = Array();
    trigramPercentagesDifference = Array();
    for (let i = 0; i < shortAllTrigrams2.length; i++) {
        let myPercentage = parseFloat((shortAllTrigrams2[i][1] / reszletSzovegekHossza).toFixed(10))
        let myArray = [shortAllTrigrams2[i][0], myPercentage]
        shortAllTrigrams2Percentage.push(myArray)
    }

    for (let i = 0; i < shortAllTrigrams3.length; i++) {
        let myPercentage = parseFloat((shortAllTrigrams3[i][1] / teljesSzovegHossza).toFixed(10))
        let myArray = [shortAllTrigrams3[i][0], myPercentage]
        shortAllTrigrams3Percentage.push(myArray)
    }

    for (let i = 0; i < shortAllTrigrams2Percentage.length; i++) {
        let myDifference = parseFloat((shortAllTrigrams2Percentage[i][1] / shortAllTrigrams3Percentage[i][1]).toFixed(2));
        let myArray = [shortAllTrigrams2Percentage[i][0], myDifference];
        trigramPercentagesDifference.push(myArray);
    }
}

let myExTRF_id = "TRF_id0"
const TR_FILL_onclickFunction = function (ev) {
    document.querySelector(`#${myExTRF_id}`).setAttribute("style", "color:black");
    let myID = "";
    if (ev[0] == "T" && ev[1] == "R" && ev[2] == "F") {
        myId = ev;
    } else {
        myId = ev.target.id;
    }
    myExTRF_id = myId
    myTRF_idNOW = myId;
    document.querySelector(`#${myId}`).setAttribute("style", "color:red");
    let myTrigram = document.querySelector(`#${myId}`).innerText.substring(0, 3)
    document.querySelector("#trgrm2").innerHTML = myTrigram;
    trigramFullTextOccurranceFunction(myTrigram)
    coloringTrigramsFunction(myTrigram);
}

const fillAnomaliesDiv = function () {
    myContent = ``
    for (let i = 0; i < anomalies3.length; i++) {
        myContent += `<span id="TRF_id${i}" onclick="TR_FILL_onclickFunction(event)" style="">
        ${anomalies3[i][0]} (${anomalies3[i][1]});  </span>`
    }
    document.querySelector("#tr-anomalies").innerHTML = myContent;
}

let myNumber1 = 0;
let myNumber2 = 0;
document.querySelector("#occurrence-min").value = 3;
//const checkAnomalies = function () {
const checkAnomalies = function () {
    //myNumber1 = parseInt(document.querySelector("#index-min").value)
    myNumber1 = 1;
    myNumber2 = parseInt(document.querySelector("#occurrence-min").value)
    anomalies = Array();
    for (let i = 0; i < trigramPercentagesDifference.length; i++) {
        if (trigramPercentagesDifference[i][1] > myNumber1 / 100 &&
            shortAllTrigrams2[i][1] >= myNumber2 && trigramPercentagesDifference[i][1] != Infinity) {
            let myArray = [trigramPercentagesDifference[i][0], trigramPercentagesDifference[i][1]];
            anomalies.push(myArray);
        }
    }
    //nagyság szerint rendezi
    let Dmax = 0;
    for (let i = 0; i < anomalies.length; i++) {
        if (Dmax < anomalies[i][1]) { Dmax = anomalies[i][1] }
    }

    let Dmax2 = Dmax * 100;
    for (let i = 0; i < anomalies.length; i++) {
        anomalies[i][1] = parseInt(anomalies[i][1] * 100);
    }

    anomalies2 = Array()
    for (let i = 0; i < Dmax2 + 1; i++) {
        for (let j = 0; j < anomalies.length; j++) {
            if (anomalies[j][1] == i) {
                anomalies2.push([anomalies[j][0], anomalies[j][1]])
            }
        }
    }
    //anomalies3=Array();
    anomalies3 = anomalies2.reverse();
}




let textTrigrams = Array()
trProxyArray = Array()
for (let i = 0; i < textArray.length; i++) {
    for (let j = 0; j < textArray[i].length - 2; j++) {
        if (letters.includes(textArray[i][j]) && letters.includes(textArray[i][j + 1]) && letters.includes(textArray[i][j + 2])) {
            let myTrigram = textArray[i][j] + textArray[i][j + 1] + textArray[i][j + 2];
            if (trProxyArray.includes(myTrigram)) {
                for (let j = 0; j < textTrigrams.length; j++) {
                    if (textTrigrams[j][0] == myTrigram) {
                        textTrigrams[j][1] += 1;
                        break;
                    }
                }
            } else {
                textTrigrams.push([myTrigram, 1]);
                trProxyArray.push(myTrigram);
            }
        }

    }
}

let TTRmax = 0;
for (let i = 0; i < textTrigrams.length; i++) {
    if (TTRmax < textTrigrams[i][1]) { TTRmax = textTrigrams[i][1] }
}
let textTrigrams2 = Array()
for (let i = 0; i < TTRmax + 1; i++) {
    for (let j = 0; j < textTrigrams.length; j++) {
        if (textTrigrams[j][1] == i) {
            textTrigrams2.push(textTrigrams[j]);
        }
    }
}


function CNOABfunction() {
    let innerHeight = window.innerHeight;
    let innerWidth = window.innerWidth;
    innerHeight = Math.floor(innerHeight * 0.9);
    if (innerWidth >= 768) { innerWidth = Math.floor(innerWidth * 7 / 12) };
    let place = document.querySelector("#div-canvas-number-of-all-trigrams")
    let place2 = document.querySelector("#canvas-number-of-all-trigrams")
    place2.style.overflow = "auto"

    if (document.querySelector("#CNOAB-small").checked == true) {
        place.style.width = `${innerWidth}px`;
        place.style.height = '300px';
        place.style.overflow = "auto"
    }
    if (document.querySelector("#CNOAB-big").checked == true) {
        place.style.width = "30000px";
        place.style.height = `${innerHeight / 2}px`;
        place.style.overflow = "auto"
        //document.querySelector('#jumpToCanvas').scrollIntoView()
    }
    if (notNow == false) { graphOfNumbersOfALLBigrams() };
    notNow = false;
}
let notNow = true;
CNOABfunction();
let myChart = "";
let myData = Array();
let myLabels = Array();
function graphOfNumbersOfALLBigrams(myNgramsArray) {
    myData = Array();
    myLabels = Array();
    myNgramsArray.forEach(value => { myData.push(value[1]); myLabels.push(value[0]); });

    if (Boolean(myChart) == true) {
        myChart.destroy();
    }

    document.getElementById('canvas-number-of-all-trigrams').innerHTML = "";
    var ctx = document.getElementById('canvas-number-of-all-trigrams').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: myLabels,
            datasets: [{
                label: 'száma:',
                data: myData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                barThickness: 60,
                barPercentage: 1,
                barThickness: 'flex',
                scaleSteps: 1,
                scaleStepWidth: 100,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            maintainAspectRatio: false,
        }
    });
}



// let textQuagrams = Array()
// let quaProxyArray = Array()
// for (let i = 0; i < textArray.length; i++) {
//     for (let j = 0; j < textArray[i].length - 2; j++) {
//         if (letters.includes(textArray[i][j]) && letters.includes(textArray[i][j + 1]) && letters.includes(textArray[i][j + 2]) && letters.includes(textArray[i][j + 3])) {
//             let myQuagram = textArray[i][j] + textArray[i][j + 1] + textArray[i][j + 2] + textArray[i][j + 3];
//             if (quaProxyArray.includes(myQuagram)) {
//                 for (let j = 0; j < textQuagrams.length; j++) {
//                     if (textQuagrams[j][0] == myQuagram) {
//                         textQuagrams[j][1] += 1;
//                         break;
//                     }
//                 }
//             } else {
//                 textQuagrams.push([myQuagram, 1]);
//                 quaProxyArray.push(myQuagram);
//             }
//         }

//     }
// }

// let TQuaMax = 0;
// for (let i = 0; i < textQuagrams.length; i++) {
//     if (TQuaMax < textQuagrams[i][1]) { TQuaMax = textQuagrams[i][1] }
// }

// let textQuagrams2 = Array()
// for (let i = 0; i < TQuaMax + 1; i++) {
//     for (let j = 0; j < textQuagrams.length; j++) {
//         if (textQuagrams[j][1] == i) {
//             textQuagrams2.push(textQuagrams[j]);
//         }
//     }
// }

let ngrams = Array();
let ngrams2 = Array();

for (let m = 0; m < 20; m++) {
    let myArray = Array();
    let myArray2 = Array();
    ngrams.push(myArray);
    ngrams2.push(myArray2);
}

const ngramSearchFunction = function (numberOfLetters) {
    let m = numberOfLetters
    let proxyArray = Array();
    for (let i = 0; i < textArray.length; i++) {
        let myBoolean = true;
        let myNgram = ""
        for (let j = 0; j < (textArray[i].length - numberOfLetters); j++) {
            if (letters.includes(textArray[i][j])) {
                myBoolean = true;
                myNgram = ""
                for (let g = 0; g < m; g++) {
                    myBoolean *= letters.includes(textArray[i][j + g]);
                    myNgram += textArray[i][j + g]
                }
                if (!!myBoolean) {
                    if (proxyArray.includes(myNgram)) {
                        for (let k = 0; k < ngrams[m].length; k++) {
                            if (ngrams[m][k][0] == myNgram) {
                                ngrams[m][k][1] += 1;
                                break;
                            }
                        }
                    } else {
                        ngrams[m].push([myNgram, 1]);
                        proxyArray.push(myNgram);
                    }
                }
            }
        }
    }

    let nMax = 0;
    for (let f = 0; f < ngrams[m].length; f++) {
        if (nMax < ngrams[m][f][1]) { nMax = ngrams[m][f][1] }
    }

    for (let f = 0; f < nMax + 1; f++) {
        for (let j = 0; j < ngrams[m].length; j++) {
            if (ngrams[m][j][1] == f) {
                ngrams2[m].push(ngrams[m][j]);
            }
        }
    }
}

let myLength2 = ""
const ngramLengthSearchFunction = function () {
    myLength2 = parseInt(document.querySelector("#ngram-length").value);
    if (ngrams2[myLength2].length == 0) { ngramSearchFunction(myLength2); }
    myNgramsArray = ngrams2[myLength2];
    graphOfNumbersOfALLBigrams(myNgramsArray);
    document.querySelector("#ennyi-ngram").innerHTML = ngrams2[myLength2].length
    document.querySelector("#ennyi-ngram-min").innerHTML = ngrams2[myLength2][0][1]
    document.querySelector("#ennyi-ngram-max").innerHTML = ngrams2[myLength2][ngrams2[myLength2].length - 1][1]
    allNgramFunction(myLength2);
}

let allNgramList = ""
const allNgramFunction = function (myLength2) {
    allNgramList = ""
    for (let i = 0; i < ngrams2[myLength2].length; i++) {
        allNgramList += `${ngrams2[myLength2][i][0]} (${ngrams2[myLength2][i][1]}); `
    }
    document.querySelector("#all-n-gram").innerHTML = allNgramList;
}

let circleNumberList = "";
const circleNumberFunction = function () {
    let myNumber = parseInt(document.querySelector("#circleNumberInput").value);
    circleNumberList = '';
    ngrams2[myLength2].forEach(value => {
        if (value[1] == myNumber) {
            circleNumberList += `${value[0]}; `
        }
    })
    document.querySelector("#circle-div").innerHTML = circleNumberList
}


//az összegyűjtött szemelvényekben vizsgálja szemelvényenként a trigrammokat;
// analysedTrigrams = Array()
// let myTrigram = ""
// const analyseShortTexts = function (myRange) {
//     analysedTrigrams = Array();
//     for (let i = 0; i < shortTextArray4Analyse.length; i++) {
//         if (myRange.includes(i)) {
//             let myArray = Array();
//             let myArray2 = Array();
//             for (let j = 0; j < shortTextArray4Analyse[i].length - 1; j++) {
//                 if (letters.includes(shortTextArray4Analyse[i][j]) &&
//                     letters.includes(shortTextArray4Analyse[i][j + 1]) &&
//                     letters.includes(shortTextArray4Analyse[i][j + 2]) &&
//                     letters.includes(shortTextArray4Analyse[i][j + 3])
//                 ) {
//                     myTrigram = shortTextArray4Analyse[i][j] + shortTextArray4Analyse[i][j + 1]
//                         + shortTextArray4Analyse[i][j + 2] + shortTextArray4Analyse[i][j + 3];
//                     myArray.push(myTrigram);
//                 }
//             }
//             myArray.sort();
//             for (let j = 0; j < myArray.length - 1; j++) {
//                 if (myArray[j] != myArray[j + 1]) {
//                     myArray2.push(myArray[j]);
//                 }
//             }
//             myArray2.push(myArray[myArray.length - 1])
//             analysedTrigrams.push(myArray2);
//         } else {
//             analysedTrigrams.push("")
//         }
//     }
// }

let analysedTrigrams = Array()
let analysedTrigramsBottom = Array()
let myTrigram = ""
const analyseShortTexts = function (myRange) {
    if (where == "top") { analysedTrigrams = Array(); } else { analysedTrigramsBottom = Array() }
    for (let i = 0; i < shortTextArray4Analyse.length; i++) {
        if (myRange.includes(i)) {
            let myArray = Array();
            let myArray2 = Array();
            for (let j = 0; j < shortTextArray4Analyse[i].length - 1; j++) {
                if (letters.includes(shortTextArray4Analyse[i][j]) &&
                    letters.includes(shortTextArray4Analyse[i][j + 1]) &&
                    letters.includes(shortTextArray4Analyse[i][j + 2]) &&
                    letters.includes(shortTextArray4Analyse[i][j + 3])
                ) {
                    myTrigram = shortTextArray4Analyse[i][j] + shortTextArray4Analyse[i][j + 1]
                        + shortTextArray4Analyse[i][j + 2] + shortTextArray4Analyse[i][j + 3];
                    myArray.push(myTrigram);
                }
            }
            myArray.sort();
            for (let j = 0; j < myArray.length - 1; j++) {
                if (myArray[j] != myArray[j + 1]) {
                    myArray2.push(myArray[j]);
                }
            }
            myArray2.push(myArray[myArray.length - 1])
            if (where == "top") { analysedTrigrams.push(myArray2); } else { analysedTrigramsBottom.push(myArray2) }
        } else {
            if (where == "top") { analysedTrigrams.push(""); } else { analysedTrigramsBottom.push("") }
        }
    }
}

let resultOfAnalysing = Array();
const analyseShortTexts2 = function () {
    resultOfAnalysing = Array();
    let next = 0;
    for (let i = 0; i < analysedTrigrams.length; i++) {
        if (i == analysedTrigrams.length - 1) {
            next = 0
        } else {
            next = (i + 1)
        }
        let myArray = Array();
        for (let j = 0; j < analysedTrigrams[i].length; j++) {

            for (let g = 0; g < analysedTrigrams[next].length; g++) {
                if (analysedTrigrams[i][j] == analysedTrigrams[next][g]) {
                    myArray.push(analysedTrigrams[i][j])
                }
            }
        }
        resultOfAnalysing.push(myArray)
    }
}

let myBoolean = true;
const analyseShortTexts3 = function (myRange) {
    resultOfAnalysing = Array();
    for (let g = 0; g < (analysedTrigrams[myRange[0]]).length; g++) {
        myBoolean1 = true;
        let myNgram1 = analysedTrigrams[myRange[0]][g];
        for (let m = 1; m < myRange.length; m++) {
            myBoolean2 = false;
            for (let h = 0; h < analysedTrigrams[myRange[m]].length; h++) {
                let myNgram2 = analysedTrigrams[myRange[m]][h];
                if (myNgram1 == myNgram2) { myBoolean2 = true }
            }
            myBoolean1 = !!(myBoolean1 * myBoolean2)
        }
        if (myBoolean1) { resultOfAnalysing.push(myNgram1) }
    }
}

let coloredContent4A = "";
let textArrayAfterSplit2 = "";
const coloringContent = function (myRange) {
    if (where == "top") { coloredTextArray4Analyse = Array(); } else { coloredTextArray4AnalyseBottom = Array(); }
    coloredTextArray4Analyse = Array();
    for (let h = 0; h < shortTextArray4Analyse.length; h++) {
        if (myRange.includes(h)) {
            textArrayAfterSplit2 = shortTextArray4Analyse[h].split(`${keyWord}`)
            coloredContent4A = ""
            coloredContent4A += `<strong>${h + 1} -- </strong>`
            for (let i = 0; i < textArrayAfterSplit2.length; i++) {
                if (i < textArrayAfterSplit2.length - 1) {
                    coloredContent4A += `${textArrayAfterSplit2[i]}<span style="background-color:lightcoral">${keyWord}</span>`
                } else {
                    coloredContent4A += `${textArrayAfterSplit2[i]}`
                }
            }
            if (where == "top") {
                coloredTextArray4Analyse.push(coloredContent4A);
            } else {
                coloredTextArray4AnalyseBottom.push(coloredContent4A);
            }

        } else {
            if (where == "top") {
                coloredTextArray4Analyse.push("");
            } else {
                coloredTextArray4AnalyseBottom.push("");
            }
        }
    }
}

//let content4A = "";
coloredDivArray = Array()
let content4A = "";
const div4AnalysedShortText = function () {
    coloredDivArray = Array();
    for (let i = 0; i < resultOfAnalysing.length; i++) {
        content4A = ""
        content4A += `<div style="background-color:#dadada;padding:10px;
        border:1px solid grey">`
        for (let j = 0; j < resultOfAnalysing[i].length; j++) {
            content4A += `<span class="dadada" onclick="analyseClick(event)">${resultOfAnalysing[i][j]}, </span>`
        }
        content4A += `</div>`
        coloredDivArray.push(content4A)
    }
    //document.querySelector("#div4results").innerHTML = content4A;
}

let coloredDiv = "";
const div4AnalysedShortText2 = function () {
    coloredDiv = `<div style="background-color:#dadada;padding:10px;
    border:1px solid grey">`;
    for (let i = 0; i < resultOfAnalysing.length; i++) {
        coloredDiv += `<span class="dadada" onclick="analyseClick2(event)">${resultOfAnalysing[i]}, </span>`
    }
    coloredDiv += `</div>`
    //document.querySelector("#div4results").innerHTML = content4A;
}

let newColoredContent = "";
let newColoredContent2 = "";
let splitArray = Array()
let splitArray2 = Array();
let splitArray3 = Array();
let coloredTextArrayCoral = Array();
let exEv = ""
let counter = 0;
let coloredTextArray4Analyse2 = Array();
let coloredTextArray4AnalyseBottom2 = Array();

let myValue = ""

const analyseClick = function (ev) {
    counter += 1
    splitArray = Array();
    newColoredContent = ""
    newColoredContent2 = ""
    if (counter > 1) { exEv.target.className = "dadada" }
    ev.target.className = "white"
    exEv = ev
    let key = ev.target.innerText
    let key2 = ""
    if (key.length == 5) { key2 = key.substring(0, key.length - 1) };
    if (key.length == 6) { key2 = key.substring(0, key.length - 2) };

    coloredTextArray4Analyse2 = Array();
    for (let j = 0; j < coloredTextArray4Analyse.length; j++) {
        splitArray = (coloredTextArray4Analyse[j]).split(key2)
        let myNewContent = "";
        for (let i = 0; i < splitArray.length - 1; i++) {
            if (i % 2 == 0) {
                myNewContent += `${splitArray[i]}<b>${key2}</b>${splitArray[i + 1]}`
            }
        }
        coloredTextArray4Analyse2.push(myNewContent)
    }
    displayFinalColoredResult2();
}

const analyseClick2 = function (ev) {
    counter += 1
    splitArray = Array();
    newColoredContent = ""
    newColoredContent2 = ""
    if (counter > 1) { exEv.target.className = "dadada" }
    ev.target.className = "white"
    exEv = ev
    let key = ev.target.innerText
    let key2 = ""
    if (key.length == 5) { key2 = key.substring(0, key.length - 1) };
    if (key.length == 6) { key2 = key.substring(0, key.length - 2) };

    coloredTextArray4AnalyseBottom2 = Array();
    for (let j = 0; j < coloredTextArray4AnalyseBottom.length; j++) {
        splitArray = coloredTextArray4AnalyseBottom[j].split(key2)
        let myNewContent = "";
        for (let i = 0; i < splitArray.length - 1; i++) {
            if (i % 2 == 0) {
                myNewContent += `${splitArray[i]}<b>${key2}</b>${splitArray[i + 1]}`
            }
        }
        coloredTextArray4AnalyseBottom2.push(myNewContent)
    }
    displayFinalColoredResult4(myRange_)
}

let finalColoredText1 = ""
const displayFinalColoredResult = function () {
    finalColoredText1 = "";
    for (let i = 0; i < coloredTextArray4Analyse.length; i++) {
        finalColoredText1 += `${coloredTextArray4Analyse[i]}${coloredDivArray[i]}`
    }
    document.querySelector("#div4results").innerHTML = finalColoredText1;
}
let finalColoredText2 = "";
let finalColoredTextBottom2 = "";
const displayFinalColoredResult2 = function () {
    finalColoredText2 = "";
    for (let i = 0; i < coloredTextArray4Analyse2.length; i++) {
        if (coloredTextArray4Analyse2[i].length != 0) {
            finalColoredText2 += `${coloredTextArray4Analyse2[i]}${coloredDivArray[i]}`
        } else {
            finalColoredText2 += `${coloredTextArray4Analyse[i]}${coloredDivArray[i]}`
        }
    }
    document.querySelector("#div4results").innerHTML = finalColoredText2;
}

const displayFinalColoredResult3 = function (myRange) {
    finalColoredTextBottom2 = "";
    for (let i = 0; i < coloredTextArray4AnalyseBottom.length; i++) {
        if (myRange.includes(i)) {
            finalColoredTextBottom2 += `${coloredTextArray4AnalyseBottom[i]}<br>`
        }
    }
    finalColoredTextBottom2 += `${coloredDiv}`
    document.querySelector("#div4CBresults").innerHTML = finalColoredTextBottom2;
}

const displayFinalColoredResult4 = function (myRange) {
    finalColoredTextBottom3 = "";
    for (let i = 0; i < coloredTextArray4AnalyseBottom2.length; i++) {
        if (myRange.includes(i)) {
            finalColoredTextBottom3 += `${coloredTextArray4AnalyseBottom2[i]}<br>`
        }
    }
    finalColoredTextBottom3 += `${coloredDiv}`
    document.querySelector("#div4CBresults").innerHTML = finalColoredTextBottom3;
}

const makeCheckboxFunction = function () {
    let checkBoxContent = "";
    for (let i = 0; i < coloredTextArray4Analyse.length; i++) {
        checkBoxContent += `<label for='cb${i}'>${i + 1}</label>
     <input type='checkbox' id='cb${i}'>  -  `
    }
    document.querySelector("#checkbox-buttons4search").innerHTML = checkBoxContent;
}

let CBplaces = Array()
let where = "top"
let myRange_ = Array()
const cbFunction = function () {
    where = "bottom"
    CBplaces = Array(); myRange = Array();
    for (let i = 0; i < rangeArray.length; i++) {
        if (document.querySelector(`#cb${i}`).checked == true) {
            CBplaces.push(i); myRange_.push(i)
        }
    }
    analyseShortTexts(CBplaces);
    analyseShortTexts3(CBplaces);
    div4AnalysedShortText2(CBplaces)
    coloringContent(CBplaces);
    displayFinalColoredResult3(CBplaces);
    where = "top";
}

let modifiedTextString = ""
let indexes_for_modified_text = []
for (let i = 0; i < textArray[0].length; i++) {
    if (letters.includes(textArray[0][i])) {
        modifiedTextString += textArray[0][i];
        indexes_for_modified_text.push(i)
    }
}

let repetitions = [];
let length_of_the_alliteration = 6
let how_many_characters_in_the_line = 40
let testWord = ""
let quotation = ""
let myIndex = 0

// const findCharacterLineRepetition1 = function () {
//     repetitions = [];
//     for (let i = 0; i < modifiedTextString.length - length_of_the_alliteration; i++) {
//         testWord = modifiedTextString.substring(i, i + length_of_the_alliteration)
//         for (let j = i + 1; j < i + how_many_characters_in_the_line - length_of_the_alliteration; j++) {
//             if (testWord == modifiedTextString.substring(j, j + length_of_the_alliteration)) {
//                 myIndex = indexes_for_modified_text[i];
//                 quotation = textArray[0].substring(myIndex - 10, myIndex + 100);
//                 repetitions.push(testWord, quotation, j - i - 1)
//             }
//         }
//     }
// }


//kiszedi a szavak között lévő írásjeleket, csak szavak és szóközök vannak a szövegben => modifiedTextString2
let lettersWithSpace = letters.slice(0);
lettersWithSpace.push(" ");
let modifiedTextString2 = ""
for (let i = 0; i < textArray[0].length; i++) {
    if (lettersWithSpace.includes(textArray[0][i])) {
        modifiedTextString2 += textArray[0][i];
    }
}

let allWords = textArray[0].split(" ");
let allWordsHasOnlyLetters = []
let indexes4AllWordsHasOnlyLetters = [];
// indexes4AllWordsHasOnlyLetters - kiszedjük a szövegből a szavak között lévő (szóközzel körülvett) írásjeleket, pl. kötőjel,
// a program ui. ezeket is szónak tekinti; az indexes4... mutatja az kigyűjtött valódi szavak indexét az allWords tömbben)
//. ill. kiszedhetjük az 'a', 'az' névelőket is
let word_ = ""
const hyphen = "–"
for (let i = 0; i < allWords.length; i++) {
    word_ = ""
    for (let j = 0; j < allWords[i].length; j++) {
        if (letters.includes(allWords[i][j])) {
            word_ += allWords[i][j]
        }
    }
    // if (word_ != hyphen && word_!="a" && word_!="az") {
    allWordsHasOnlyLetters.push(word_)
    indexes4AllWordsHasOnlyLetters.push(i);
    // }
}





// const findCharacterLineRepetition2 = function () {
//     repetitions = []
//     let length_of_the_alliteration = 4;
//     let how_many_words = 3;
//     let myTestLine1 = "";
//     let myTestLine2 = "";
//     let quotation = ""
//     let myWord2 = ""

//     for (let i = 0; i < allWordsHasOnlyLetters.length - how_many_words; i++) {
//         testWord = "";
//         if (allWordsHasOnlyLetters[i].length >= length_of_the_alliteration) {
//             for (let j = 0; j < allWordsHasOnlyLetters[i].length; j++) {
//                 testWord = allWordsHasOnlyLetters[i].substring(j, j + length_of_the_alliteration)
//                 for (let k = 1; k < how_many_words; k++) {
//                     if (allWordsHasOnlyLetters[i + k].length >= length_of_the_alliteration) {
//                         for (let m = 0; m < allWordsHasOnlyLetters[i + k].length - length_of_the_alliteration; m++) {
//                             myWord2 = allWordsHasOnlyLetters[i + k].substring(m, m + length_of_the_alliteration);
//                             if (testWord == myWord2 && allWords[i] != allWords[i + k]) {
//                                 quotation = allWords[i] + " " + allWords[i + 1] + " " + allWords[i + 2] + " " + allWords[i + 3]
//                                 repetitions.push(testWord, quotation, k)
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

const double = ['cs', 'sz', 'zs', 'gy', 'ty', 'ny', 'ly']
const double_alter = ['#', '&', '@', '%', '{', '=', '+']
let allWordsHasNoDoubleLetter = []
let myWord = ''
dl_done = false
for (let i = 0; i < allWordsHasOnlyLetters.length; i++) {
    myWord = ''
    for (let j = 0; j < allWordsHasOnlyLetters[i].length; j++) {
        dl_done = false
        for (let k = 0; k < double.length; k++) {
            if (allWordsHasOnlyLetters[i][j] == double[k][0] && allWordsHasOnlyLetters[i][j + 1] == double[k][1] && dl_done == false) {
                myWord += double_alter[k];
                j += 1;
                dl_done = true;
            }
        }
        if (dl_done == false) {
            myWord += allWordsHasOnlyLetters[i][j]
        }
    }
    allWordsHasNoDoubleLetter.push(myWord)
}

const findCharacterLineRepetition3 = function (length_of_the_alliteration, how_many_words) {
    //csak a szókezdő hangsorokat vizsgálja, a szavak belsejében lévő hangsorokat nem!
    repetitions = []
    let myTestLine1 = "";
    let myTestLine2 = "";
    let quotation = ""
    let myWord2 = ""

    for (let i = 0; i < allWordsHasNoDoubleLetter.length - how_many_words; i++) {
        testWord = "";
        if (allWordsHasNoDoubleLetter[i].length >= length_of_the_alliteration) {
            testWord = allWordsHasNoDoubleLetter[i].substring(0, length_of_the_alliteration)
            for (let k = 1; k < how_many_words; k++) {
                if (allWordsHasNoDoubleLetter[i + k].length >= length_of_the_alliteration) {
                    myWord2 = allWordsHasNoDoubleLetter[i + k].substring(0, length_of_the_alliteration)
                    if (testWord == myWord2
                        //ha az első öt hang azonos, azt szóismétlésnek tekinti és kiszűri
                        && allWordsHasNoDoubleLetter[i].substring(0, 6) != allWordsHasNoDoubleLetter[i + k].substring(0, 6)) {
                        quotation = allWords[indexes4AllWordsHasOnlyLetters[i]] + " "
                            + allWords[indexes4AllWordsHasOnlyLetters[i] + 1] + " "
                            + allWords[indexes4AllWordsHasOnlyLetters[i] + 2] + " "
                            + allWords[indexes4AllWordsHasOnlyLetters[i] + 3] + " "
                            + allWords[indexes4AllWordsHasOnlyLetters[i] + 4] + " "
                            + allWords[indexes4AllWordsHasOnlyLetters[i] + 5]
                        repetitions.push([testWord, quotation, i])
                        repetitions4Chart.push(1)
                    }
                }
            }
        }
    }
    repetition3DistancesFunction();
}

repetitions4Chart = []

//A listán ki lehet húzni alliterációkat
const modify_allit_2_2 = function (myNumber) {
    if (repetitions4Chart[myNumber] == 0) {
        repetitions4Chart[myNumber] = 1
    } else {
        repetitions4Chart[myNumber] = 0
    }

    let content = ``
    content += `<table>`
    let myElement1 = ``
    let myElement2 = ``
    for (let i = 0; i < repetitions.length; i++) {
        content += `<tr onclick='modify_allit_2_2(${i})'>
        <td>${repetitions[i][2]} -- </td>
        <td>${repetitions[i][0]} -- </td><td>
        ${repetitions4Chart[i] == 1 ? '<b>' : '<s>'}
        ${repetitions[i][1]}
        ${[i] == 1 ? '</b>' : '</s>'}
        </td></tr>`
    }
    content += `</table>`
    document.querySelector('#allit_2_2_div').innerHTML = content
}

const make_allit_2_2 = function () {
    repetitions = []
    findCharacterLineRepetition3(2, 2)
    let content = ``
    content += `<table>`
    for (let i = 0; i < repetitions.length; i++) {
        content += `<tr id='${i}_allit_1' onclick='modify_allit_2_2(${i})'>
        <td>${repetitions[i][2]} -- </td>
        <td>${repetitions[i][0]}
         -- </td>
        <td>
        <b>${repetitions[i][1]}</b></td></tr>`
    }
    content += `</table>`
    document.querySelector('#allit_2_2_div').innerHTML = content


    // intervallumFunction()
    // trigramFunction();
    // prepareAnomalies();
    // checkAnomalies();
    // fillAnomaliesDiv();

    // analyseShortTexts(rangeArray);
    // analyseShortTexts2(rangeArray);
    // div4AnalysedShortText();
    // coloringContent(rangeArray);
    // displayFinalColoredResult();

    // makeCheckboxFunction();
}

const repetition3DistancesFunction = function () {
    for (let i = 1; i < repetitions.length; i++) {
        repetitions[i].push(repetitions[i][2] - repetitions[i - 1][2])
    }
}

//kiszedi a repetitions közül azokat, amiket kihúztunk =>
let final_repetitions = []
const final_repetitions_function = function () {
    final_repetitions = []
    for (let i = 0; i < repetitions4Chart.length; i++) {
        if (repetitions4Chart[i] != 0) {
            final_repetitions.push(repetitions[i])
        }
    }
}

let allit22Distances = []
let allit22Sentences = []
let allit22Colors = []
const allit22DistancesFunction = function () {
    allit22Distances = []
    allit22Sentences = [];
    allit22Colors = [];
    for (let i = 1; i < final_repetitions.length; i++) {
        allit22Distances.push(final_repetitions[i][3])
        allit22Sentences.push(final_repetitions[i - 1][1])
        allit22Colors.push('rgba(0,0,0,1)')

    }
}

//a grafikon méretét beállító rádiógombok lelovasása
function ALLIT22function() {
    let innerHeight = window.innerHeight;
    let innerWidth = window.innerWidth;
    innerHeight = Math.floor(innerHeight * 0.9);
    if (innerWidth >= 768) { innerWidth = Math.floor(innerWidth * 7 / 12) };
    let place = document.querySelector("#div-canvas-allit22")
    let place2 = document.querySelector("#canvas-allit22")
    place2.style.overflow = "auto"

    if (document.querySelector("#allit22-small").checked == true) {
        place.style.width = `${innerWidth}px`;
        place.style.height = '300px';
        place.style.overflow = "auto"
    }
    if (document.querySelector("#allit22-big").checked == true) {
        place.style.width = "1000px";
        place.style.height = `${innerHeight / 2}px`;
        place.style.overflow = "auto"
        //document.querySelector('#jumpToCanvas').scrollIntoView()
    }
    if (notNowAllit22 == false) { graphOfAllit22Function() };
    notNowAllit22 = false;
}

let notNowAllit22 = true;
ALLIT22function();
let myChartAllit22 = "";
let myDataAllit22 = Array();
let myLabelsAllit22 = Array();


let withRedColumns = false
function graphOfAllit22Function() {
    let colors = []
    if (redColumns == false) {
        final_repetitions_function();
        allit22DistancesFunction();
        colors = allit22Colors.slice(0)
    } else { colors = selectedAllit22Colors.slice(0) }


    if (Boolean(myChartAllit22) == true) {
        myChartAllit22.destroy();
    }

    document.getElementById('canvas-allit22').innerHTML = "";
    var ctx = document.getElementById('canvas-allit22').getContext('2d');
    myChartAllit22 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: allit22Sentences,
            datasets: [{
                label: 'magasság',
                data: allit22Distances,
                backgroundColor: colors,
                borderColor: colors,
                // backgroundColor: [
                //     'rgba(0,0,0,0.2)'
                // ],
                // borderColor: [
                //     'rgba(0,0,0,0.2)'
                // ],
                borderWidth: 1,
                barThickness: 60,
                barPercentage: 1,
                barThickness: 'flex',
                scaleSteps: 1,
                scaleStepWidth: 100,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            maintainAspectRatio: false,
        }
    });
    redColumns = false;
}

//leolvassa a rádiógombokat
let columnHeight = 0
let allitRadius = 0
let redColumns = false
let redRepetitions = []
let selectedAllit22Distances = []
let selectedAllit22Colors = []

//a kiválogatott oszlopokat színezi pirosra
const allitTextFunction = function () {
    columnHeight = parseInt(document.querySelector('#column-height-input').value)
    allitRadius = parseInt(document.querySelector('#alliteratio-radius-input').value)
    console.log(columnHeight, allitRadius);
    redColumns = true
    redRepetitions = [];
    selectedAllit22Colors = allit22Colors.slice(0);
    for (let i = 1; i < final_repetitions.length; i++) {
        if (final_repetitions[i][3] >= columnHeight) {
            //első helye, második helye, távolság köztük
            redRepetitions.push([final_repetitions[i - 1][2], final_repetitions[i][2], final_repetitions[i][3],
            final_repetitions[i - 1][0], final_repetitions[i][0]]);
            selectedAllit22Distances.push(final_repetitions[i][3]);
            selectedAllit22Colors[i - 1] = 'rgba(255,0,0,1)'
        } else {
            selectedAllit22Colors[i - 1] = 'rgba(0,0,0,0.5)'
        }
    }
    graphOfAllit22Function()
    allitTextFunction2()

}

const allitTextFunction2 = function () {
    console.log(redRepetitions)
    let content = ``;
    let myString = ``
    myArray = []
    for (let i = 0; i < redRepetitions.length; i++) {
        content += `<div><b>${i + 1}. --- oszlop magassága: ${redRepetitions[i][2]}</b>
        <br>KEZDŐ alliteráció --- hangsor: ${redRepetitions[i][3]}
        <br></div>`
        myString = ``
        myArray = allWordsORIGINAL.slice(redRepetitions[i][0] - allitRadius, redRepetitions[i][0])
        myString = ``
        myArray.forEach(value => { myString += value; myString += ' ' })
        content += `<div style="padding-left:20px; background-color:#DCDCDC">${myString}`
        myArray = allWordsORIGINAL.slice(redRepetitions[i][0], redRepetitions[i][0] + 2)
        myString = ``
        myArray.forEach(value => { myString += value; myString += ' ' })
        content += `<b>${myString}</b > `
        myArray = allWordsORIGINAL.slice(redRepetitions[i][0] + 2, redRepetitions[i][0] + allitRadius);
        myString = ``
        myArray.forEach(value => { myString += value; myString += ' ' })
        content += `${myString} </div > `;

        content += `<div>KÖVETŐ alliteráció --- hangsor: ${redRepetitions[i][4]}
            </div>`
        myString = ``
        myArray = allWordsORIGINAL.slice(redRepetitions[i][1] - allitRadius, redRepetitions[i][1])
        myArray.forEach(value => { myString += value; myString += ' ' })
        content += `<div style = "padding-left:20px; background-color:#DCDCDC"> ${myString}`
        myArray = allWordsORIGINAL.slice(redRepetitions[i][1], redRepetitions[i][1] + 2)
        myString = ``
        myArray.forEach(value => { myString += value; myString += ' ' })
        content += `<b>${myString}</b > `
        myArray = allWordsORIGINAL.slice(redRepetitions[i][1] + 2, redRepetitions[i][1] + allitRadius);
        myString = ``
        myArray.forEach(value => { myString += value; myString += ' ' })
        content += `${myString} </div ><br> `;







    }
    document.querySelector('#selected-alliterations-texts').innerHTML = content;
    document.querySelector('#kosz').innerHTML = redRepetitions.length;
}






























keyWordDistances = [];
keyWordsPlaces = []
let words4distances = ["érv", "mond", " szó ", "szav", "szól", "előad", "mese", "mesék", "mesét", "cseveg", "tárgyal", "értesít", "bevall", "beszél",
    "vitatkoz", "köszön", "nevez", "povedál", "pletyka", "pletyká", "hivatkoz", "jegyzem", "nyelv", "referál", "elárul", "magyaráz", "információ"];
//words4distances=["mond"]
const keyWordPlacesFunction = function () {
    keyWordsPlaces = []
    keyWordDistances = [];
    words4distances.forEach(item1 => {
        allWordsHasOnlyLetters.forEach((item2, index2) => {
            if (item2.match(item1) != null) {
                keyWordsPlaces.push(indexes4AllWordsHasOnlyLetters[index2])
            }
        })
    })
    //keyWordPlacesSorbaRendezveFunction();
}

let keyWordPlacesSorbaRendezve = []
const keyWordPlacesSorbaRendezveFunction = function () {
    keyWordPlacesSorbaRendezve = []
    let myValue = textArray[0].length
    myIndex = -1000
    let myArray = keyWordsPlaces.slice(0);
    while (myArray.length != 0) {
        myValue = textArray[0].length;
        myIndex = -1000;
        myArray.forEach((value, index) => {
            if (value <= myValue) {
                myValue = value;
                myIndex = index;
            }
        })
        myArray.splice(myIndex, 1);
        keyWordPlacesSorbaRendezve.push(myValue)
    }
    //distancesFunction();
}

const distancesFunction = function () {
    for (let i = 0; i < keyWordPlacesSorbaRendezve.length - 1; i++) {
        keyWordDistances.push(keyWordPlacesSorbaRendezve[i + 1] - keyWordPlacesSorbaRendezve[i])
    }
    //keyWordDistancesSorbaRendezveFunction()
}

let keyWordDistancesSorbaRendezve = []
const keyWordDistancesSorbaRendezveFunction = function () {
    keyWordDistancesSorbaRendezve = []
    let myValue = textArray[0].length
    myIndex = -1000
    let myArray = keyWordDistances.slice(0);
    while (myArray.length != 0) {
        myValue = textArray[0].length;
        myIndex = -1000;
        myArray.forEach((value, index) => {
            if (value <= myValue) {
                myValue = value;
                myIndex = index;
            }
        })
        myArray.splice(myIndex, 1);
        keyWordDistancesSorbaRendezve.push(myValue)
    }
    // myDatasArray = keyWordDistances.slice(0);
    // myDatasArray = keyWordDistancesSorbaRendezve.slice(0);
    // graphOfDistributionOfKeywords1()
}

let myGapLengthD3 = 1000;
let howManyGapD3 = 0
let keyWordDistances3 = []
let myLabelsKWD3 = []
const keyWordDistances3function = function () {
    keyWordDistances3 = [];
    myLabelsKWD3 = [];
    howManyGapD3 = Math.floor(textArray[0].length / myGapLengthD3)
    for (let i = 0; i < howManyGapD3; i++) {
        myLabelsKWD3[i] = i;
        keyWordDistances3[i] = 0;
        for (let j = 0; j < keyWordPlacesSorbaRendezve.length; j++) {
            if (i * myGapLength4 <= keyWordPlacesSorbaRendezve[j] && keyWordPlacesSorbaRendezve[j] < ((i + 1) * myGapLength4 - 1)) {
                keyWordDistances3[i] += 1
            }
        }
    }
}



let distributionDistances = [];
const distributionDistancesFunction = function () {
    distributionDistances = [];
    for (let i = 0; i < keyWordDistancesSorbaRendezve[keyWordDistancesSorbaRendezve.length - 1]; i++) {
        distributionDistances[i] = 0
    }
    myGap = 10;
    for (let i = 0; i < keyWordDistancesSorbaRendezve.length; i++) {
        distributionDistances[Math.floor(keyWordDistancesSorbaRendezve[i] / myGap)] += 1;
    }

    while (distributionDistances[distributionDistances.length - 1] == 0) {
        distributionDistances.pop();
    }
}

//let words4distances = []
let specialGapLength = 0
let myDatas1 = []
let myDatas2 = []
const myProgramm = function () {
    specialGapLength = 200
    //words4distances = ["mond"]
    myGapLength4 = specialGapLength;
    myGapLengthD3 = specialGapLength;

    keyWordPlacesFunction();

    keyWordPlacesSorbaRendezveFunction();
    indexesOfHangsorismetlesek3Function();
    distancesFunction();
    keyWordDistancesSorbaRendezveFunction();
    distributionDistancesFunction();
    distancesHangsorokKozottFunction();
    distancesHangsorKulcsszoKozottFunction();
    distancesHangsorKulcsszoKozottSorbaRendezveFunction();
    keyWordDistances3function()
    indexesOfHangsorismetlesek4Function()


    //myDatasArray = keyWordDistances.slice(0);
    //myDatasArray = keyWordDistancesSorbaRendezve.slice(0);
    //myDatasArray = distributionDistances.slice(0);

    myDatasArray = keyWordDistances3.slice(0);
    myLabels_ = myLabelsKWD3.slice(0)

    //myDatasArray2 = distancesHangsorokKozott.slice(0);
    myDatasArray2 = indexesOfHangsorismetlesek4.slice(0);
    myLabels2_ = myLabels4.slice(0)
    //graphOfDistributionOfKeywords2()

    myDatas1 = keyWordDistances3.slice(0)
    myDatas2 = indexesOfHangsorismetlesek4.slice(0);
    //graph();

    graphOfDistributionOfKeywords1()

}


// if ((allWordsHasOnlyLetters[i].match("nemzet") != null)==false &&
//     (allWordsHasOnlyLetters[i].match("szoci") != null)==false &&
//     (allWordsHasOnlyLetters[i].match("nacio") != null)==false &&
//     (allWordsHasOnlyLetters[i].match("anti") != null)==false &&
//     (allWordsHasOnlyLetters[i].match("szemit") != null)==false &&
//     (allWordsHasOnlyLetters[i].match("hungar") != null)==false) {


// let hangsorismetlesek = ["kellene mellette", "mondott és gondolt", "hűbelebalázs módjára belerohanni", "ügyosztály beosztásával",
//     "beleavatkozott a nyilatkozatába", "elragadtatással fogadta", "tisztviselővel, ahogy ővele", "belügyminiszterhez tisztelegni",
//     "szakadatlanul szakadó", "természetesen veszett", "annak olyannak", "benne felkavarta ennek", "hivatali hatalmasság",
//     "igyekezett kezelni a kezeit", "kedve beszélni. kedves", "villa a villasoron, azt", "csókokkal csókolva", "villa a villasoron, igen",
//     "szerencsétlen házasság. beleszeretett"]

// let hangsorismetlesek = ["kellene mellette", "mondott és gondolt", "hűbelebalázs módjára belerohanni", "ügyosztály beosztásával",
//     "beleavatkozott a nyilatkozatába", "elragadtatással fogadta", "tisztviselővel, ahogy ővele", "belügyminiszterhez tisztelegni",
//     "annak olyannak", "benne felkavarta ennek", "hivatali hatalmasság", "villa a villasoron, azt", "csókokkal csókolva",
//     "villa a villasoron, igen", "szerencsétlen házasság. beleszeretett", "hirtelen oly reménytelennek", "olyan halálos komolyan",
//     "villódzott a villanyfényben", "valamit, amitől", "szerelem nem szégyen, hanem szerencsétlenség", "szerencsém. - szervusz",
//     "emberrel. egész életemben", "elmondom a gondolataimat", "legnagyobb rémületben vagyok", "vagyonközösségben vagyok",
//     "kikísérte menyhértet", "ellenzéknek nincs ellenkező", "sertéstenyésztő mindent felemésztett", "megszervezzék érdekei szerint",
//     "ellen kellene", "erről a rendszerről", "rendszert, akkor rendben", "becsület születni", "hideg idegenség"]

let hangsorismetlesek = ["kellene mellette", "népszerűséget kell szerezni", "mondott és gondolt", "hűbelebalázs módjára belerohanni",
    "ügyosztály beosztásával", "számlálni, külön számoló emberek", "beleavatkozott a nyilatkozatába", "elragadtatással fogadta",
    "nehéz lesz beleszoknia", "tisztviselővel, ahogy ővele", "belügyminiszterhez tisztelegni", "szakadatlanul szakadó",
    "természetesen veszett", "annak olyannak", "benne felkavarta ennek", "hivatali hatalmasság", "igyekezett kezelni a kezeit",
    "villa a villasoron, azt", "nem volt kedve beszélni. kedves", "csókokkal csókolva", "villa a villasoron, igen",
    "szerencsétlen házasság. beleszeretett", "pillanatban már hallani", "lumpoltak. ezért voltak", "emberekkel szemben",
    "hirtelen oly reménytelennek", "egyszer egy szerencsétlen", "villa kapuján. utánapillant",
    "hivatal adta hatalom", "legelemibb szükségleteknek eleget tudjon tenni", "olyan halálos komolyan mondta",
    "villódzott a villanyfényben", "valamit, amitől", "szerelem nem szégyen, hanem szerencsétlenség",
    "sertéstömegeket és kukoricarengetegeket", "szerencsém. - szervusz", "az emberrel. egész életemben",
    "akármelyik polgármester", "rettenetesen nem szerette", "egyszerű sémák szerint", "háztartást tartsak fen", "elmondom a gondolataimat",
    "volt tele. kardicsnak kétségtelenül", "legolcsóbb megoldásra", "legnagyobb rémületben vagyok", "vagyonközösségben vagyok",
    "emeletes épületeket. egyikben üzletek", "kikísérte menyhértet", "ellenzéknek nincs ellenkező", "felverték a sertés árát",
    "telepesek köteleztessenek", "építkezzenek... ezzel", "parasztok szénamezőket vízelárasztással", "szerződési pont szerint",
    "sertéstenyésztő mindent felemésztett", "ettől az élettől", "polgármester úr kerestet", "együtt megyünk", "szemben az emberek",
    "mert ismerte", "megszervezzék érdekei szerint", "hivatalos hatalommal", "ellen kellene", "erről a rendszerről", "csendőrje és rendőrje",
    "tanyabíró-rendszert, gazdasági ellenőr-módszert", "rendszert, akkor rendben", "becsület születni", "hideg idegenség"]


let indexesOfHangsorismetlesek = [];
let indexesOfHangsorismetlesek2 = [];
hangsorismetlesek.forEach(value => {
    if (textArray[0].match(value) != null) {
        indexesOfHangsorismetlesek.push([textArray[0].match(value)[0], textArray[0].match(value).index])
        indexesOfHangsorismetlesek2.push(textArray[0].match(value).index)
    } else {
        indexesOfHangsorismetlesek.push([value, "------------------"])
    }
})

let indexesOfHangsorismetlesek3 = [];
//indexesOfHangsorismetlesek3 - két kulcsszó között hány hangsorsimétlődés található
let myCounterIOH = 0
const indexesOfHangsorismetlesek3Function = function () {
    for (let i = 0; i < keyWordPlacesSorbaRendezve.length - 1; i++) {
        myCounterIOH = 0
        for (let j = 0; j < indexesOfHangsorismetlesek2.length; j++) {
            if (keyWordPlacesSorbaRendezve[i] <= indexesOfHangsorismetlesek2[j] &&
                indexesOfHangsorismetlesek2[j] < keyWordPlacesSorbaRendezve[i + 1]) {
                myCounterIOH += 1
            }
        }
        indexesOfHangsorismetlesek3.push(myCounterIOH)
    }
}

let myGapLength4 = 1000;
let howManyGap4 = 0
let indexesOfHangsorismetlesek4 = [];
let myLabels4 = [];
const indexesOfHangsorismetlesek4Function = function () {
    howManyGap4 = Math.floor(textArray[0].length / myGapLength4)
    myLabels4 = [];
    for (let i = 0; i < howManyGap4; i++) {
        myLabels4[i] = i;
        indexesOfHangsorismetlesek4[i] = 0;
        for (let j = 0; j < indexesOfHangsorismetlesek2.length; j++) {
            if (i * myGapLength4 <= indexesOfHangsorismetlesek2[j] && indexesOfHangsorismetlesek2[j] < ((i + 1) * myGapLength4 - 1)) {
                indexesOfHangsorismetlesek4[i] += 1
            }
        }
    }
}




// let minDist = 0
// let distances = []
// let distancesCounting = function (myArray) {
//     distances = [];
//     myArray.forEach(item1 => {
//         minDist = textArray[0].length
//         myArray.forEach((item2, index2) => {
//             if (Math.abs(item1[1] - item2) < minDist) {
//                 minDist = Math.abs(item1[1] - item2)
//             }
//         })
//         distances.push(minDist)
//     })
//     return distances;
//     
// }

// let distancesHangsorKulcsszoKozott = []
// const distancesHangsorKulcsszoKozottFunction = function () {
//     distancesHangsorKulcsszoKozott = distancesCounting(indexesOfHangsorismetlesek)
//}

let minDHKK = 0
let distancesHangsorKulcsszoKozott = []
let signChange = []
const distancesHangsorKulcsszoKozottFunction = function () {
    distancesHangsorKulcsszoKozott = [];
    indexesOfHangsorismetlesek.forEach(item1 => {
        minDHKK = textArray[0].length
        keyWordsPlaces.forEach((item2, index2) => {
            if (Math.abs(item2 - item1[1]) < minDHKK) {
                minDHKK = Math.abs(item2 - item1[1])
            }
        })
        distancesHangsorKulcsszoKozott.push(minDHKK)
    })
    //distancesHangsorKulcsszoKozottSorbaRendezveFunction();
}

let distancesHangsorKulcsszoKozott2 = []
const distancesHangsorKulcsszoKozottFunction2 = function () {
    let myArray = []
    indexesOfHangsorismetlesek.forEach(item1 => {
        myArray = [];
        keyWordsPlaces.forEach((item2, index2) => {

        })

    })
}


let minDHK = 0
let distancesHangsorokKozott = [];
const distancesHangsorokKozottFunction = function () {
    distancesHangsorokKozott = [];
    for (let i = 0; i < indexesOfHangsorismetlesek.length - 1; i++) {
        distancesHangsorokKozott.push(indexesOfHangsorismetlesek[i + 1][1] - indexesOfHangsorismetlesek[i][1])
    }
}

let distancesHangsorKulcsszoKozottSorbaRendezve = []
const distancesHangsorKulcsszoKozottSorbaRendezveFunction = function () {
    distancesHangsorKulcsszoKozottSorbaRendezve = []
    let myValue = textArray[0].length
    myIndex = -1000
    let myArray = distancesHangsorKulcsszoKozott.slice(0);
    while (myArray.length != 0) {
        myValue = textArray[0].length;
        myIndex = -1000;
        myArray.forEach((value, index) => {
            if (value <= myValue) {
                myValue = value;
                myIndex = index;
            }
        })
        myArray.splice(myIndex, 1);
        distancesHangsorKulcsszoKozottSorbaRendezve.push(myValue)
    }
}




function CDOKfunction() {
    let innerHeight = window.innerHeight;
    let innerWidth = window.innerWidth;
    innerHeight = Math.floor(innerHeight * 0.9);
    if (innerWidth >= 768) { innerWidth = Math.floor(innerWidth * 7 / 12) };
    let place = document.querySelector("#div-canvas-distribution-of-keywords1")
    let place2 = document.querySelector("#canvas-distribution-of-keywords1")
    place2.style.overflow = "auto"

    if (document.querySelector("#CDOK-small").checked == true) {
        place.style.width = `${innerWidth} px`;
        place.style.height = '300px';
        place.style.overflow = "auto"
    }
    if (document.querySelector("#CDOK-big").checked == true) {
        place.style.width = "30000px";
        place.style.height = `${innerHeight / 2} px`;
        place.style.overflow = "auto"
        //document.querySelector('#jumpToCanvas').scrollIntoView()
    }
    if (notNowCDOK == false) { graphOfDistributionOfKeywords1() };
    notNowCDOK = false;
}
let notNowCDOK = true;
CDOKfunction();
let myChartCDOK = "";
let myDataCDOK = Array();
let myLabelsCDOK = Array();
function graphOfDistributionOfKeywords1() {

    if (Boolean(myChartCDOK) == true) {
        myChartCDOK.destroy();
    }

    document.getElementById('canvas-distribution-of-keywords1').innerHTML = "";
    var ctx = document.getElementById('canvas-distribution-of-keywords1').getContext('2d');
    myChartCDOK2 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: myLabels2_,
            datasets: [{
                label: 'száma:',
                data: myDatasArray2,
                backgroundColor: [
                    'rgba(0,0,0,0.2)'
                    // 'rgba(255, 99, 132, 0.2)',
                    // 'rgba(54, 162, 235, 0.2)',
                    // 'rgba(255, 206, 86, 0.2)',
                    // 'rgba(75, 192, 192, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(0,0,0,0.2)'
                    // 'rgba(255, 99, 132, 1)',
                    // 'rgba(54, 162, 235, 1)',
                    // 'rgba(255, 206, 86, 1)',
                    // 'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                barThickness: 60,
                barPercentage: 1,
                barThickness: 'flex',
                scaleSteps: 1,
                scaleStepWidth: 100,
            },
            {
                label: 'száma:',
                data: myDatasArray,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)'
                    //'rgba(0,0,0,0.2)'
                    // 'rgba(255, 99, 132, 0.2)',
                    // 'rgba(54, 162, 235, 0.2)',
                    // 'rgba(255, 206, 86, 0.2)',
                    // 'rgba(75, 192, 192, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                    //'rgba(0,0,0,0.2)'
                    // 'rgba(255, 99, 132, 1)',
                    // 'rgba(54, 162, 235, 1)',
                    // 'rgba(255, 206, 86, 1)',
                    // 'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                barThickness: 60,
                barPercentage: 1,
                barThickness: 'flex',
                scaleSteps: 1,
                scaleStepWidth: 100,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            maintainAspectRatio: false,
        }
    });
}

// function graphOfDistributionOfKeywords1() {

//     if (Boolean(myChartCDOK) == true) {
//         myChartCDOK.destroy();
//     }

//     document.getElementById('canvas-distribution-of-keywords1').innerHTML = "";
//     var ctx = document.getElementById('canvas-distribution-of-keywords1').getContext('2d');
//     myChartCDOK = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: myLabels_,
//             datasets: [{
//                 label: 'száma:',
//                 data: myDatasArray,
//                 backgroundColor: [
//                     'rgba(0,0,0,0.2)'
//                     // 'rgba(255, 99, 132, 0.2)',
//                     // 'rgba(54, 162, 235, 0.2)',
//                     // 'rgba(255, 206, 86, 0.2)',
//                     // 'rgba(75, 192, 192, 0.2)',
//                     // 'rgba(153, 102, 255, 0.2)',
//                     // 'rgba(255, 159, 64, 0.2)'
//                 ],
//                 borderColor: [
//                     'rgba(0,0,0,0.2)'
//                     // 'rgba(255, 99, 132, 1)',
//                     // 'rgba(54, 162, 235, 1)',
//                     // 'rgba(255, 206, 86, 1)',
//                     // 'rgba(75, 192, 192, 1)',
//                     // 'rgba(153, 102, 255, 1)',
//                     // 'rgba(255, 159, 64, 1)'
//                 ],
//                 borderWidth: 1,
//                 barThickness: 60,
//                 barPercentage: 1,
//                 barThickness: 'flex',
//                 scaleSteps: 1,
//                 scaleStepWidth: 100,
//             }]
//         },
//         options: {
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             },
//             maintainAspectRatio: false,
//         }
//     });
// }

let myChartCDOK2 = "";
let myDataCDOK2 = Array();
let myLabels2_ = Array();
function CDOK2function() {
    let innerHeight = window.innerHeight;
    let innerWidth = window.innerWidth;
    innerHeight = Math.floor(innerHeight * 0.9);
    if (innerWidth >= 768) { innerWidth = Math.floor(innerWidth * 7 / 12) };
    let place = document.querySelector("#div-canvas-distribution-of-keywords2")
    let place2 = document.querySelector("#canvas-distribution-of-keywords2")
    place2.style.overflow = "auto"

    if (document.querySelector("#CDOK2-small").checked == true) {
        place.style.width = `${innerWidth} px`;
        place.style.height = '300px';
        place.style.overflow = "auto"
    }
    if (document.querySelector("#CDOK2-big").checked == true) {
        place.style.width = "30000px";
        place.style.height = `${innerHeight / 2} px`;
        place.style.overflow = "auto"
        //document.querySelector('#jumpToCanvas').scrollIntoView()
    }
    if (notNowCDOK == false) { graphOfDistributionOfKeywords2() };
    notNowCDOK = false;
}

let myLabel1 = []
let myLabel2 = []
let myLabel3 = []
let myLabel4 = []
let myLabel5 = []
let myDatasArray1 = []
let myDatasArray2 = []
let myDatasArray3 = []
let myDatasArray4 = []
let myDatasArray5 = []
let notNowCDOK2 = true;
CDOK2function();
function graphOfDistributionOfKeywords2() {

    if (Boolean(myChartCDOK2) == true) {
        myChartCDOK2.destroy();
    }

    document.getElementById('canvas-distribution-of-keywords2').innerHTML = "";
    var ctx = document.getElementById('canvas-distribution-of-keywords2').getContext('2d');
    myChartCDOK2 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: myLabels,
            datasets: [{
                label: myLabel1,
                data: myDatasArray1,
                backgroundColor: [
                    'rgb(255,0,0)'
                ],
                borderColor: [
                    'rgb(255,255,255)'
                ],
                borderWidth: 1,
                barThickness: 60,
                barPercentage: 1,
                barThickness: 'flex',
                scaleSteps: 1,
                scaleStepWidth: 100,
            },
            {
                label: myLabel2,
                data: myDatasArray2,
                backgroundColor: [
                    'rgb(0, 0, 255)'
                ],
                borderColor: [
                    'rgb(255, 255, 255)'
                ],
                borderWidth: 1,
                barThickness: 60,
                barPercentage: 1,
                barThickness: 'flex',
                scaleSteps: 1,
                scaleStepWidth: 100,
            },
            {
                label: myLabel3,
                data: myDatasArray3,
                backgroundColor: [
                    'rgb(0,102, 0)'
                ],
                borderColor: [
                    'rgb(255,255, 255)'
                ],
                borderWidth: 1,
                barThickness: 60,
                barPercentage: 1,
                barThickness: 'flex',
                scaleSteps: 1,
                scaleStepWidth: 100,
            },
            {
                label: myLabel4,
                data: myDatasArray4,
                backgroundColor: [
                    'rgb(255, 255, 0)'
                ],
                borderColor: [
                    'rgb(255, 255, 255)'
                ],
                borderWidth: 1,
                barThickness: 60,
                barPercentage: 1,
                barThickness: 'flex',
                scaleSteps: 1,
                scaleStepWidth: 100,
            },
            {
                label: myLabel5,
                data: myDatasArray5,
                backgroundColor: [
                    'rgb(0, 0, 0)'
                ],
                borderColor: [
                    'rgb(255, 255, 255)'
                ],
                borderWidth: 1,
                barThickness: 60,
                barPercentage: 1,
                barThickness: 'flex',
                scaleSteps: 1,
                scaleStepWidth: 100,
            }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            maintainAspectRatio: false,
        }
    });
}

// const graph = function () {
//     var ctx = document.getElementById("canvas").getContext("2d");

//     var data = {
//         labels: ["egyik", "másik"],
//         datasets: [
//             {
//                 label: "Blue",
//                 fillColor: "blue",
//                 data: myDatas1
//             },
//             {
//                 label: "Red",
//                 fillColor: "red",
//                 data: myDatas2
//             }
//         ]
//     };

//     var myBarChart = new Chart(ctx).Bar(data, { barValueSpacing: 20 });

// }


function makeMyGraph() {
    let étel = [3, 6, 10, 13, 16, 17, 21, 22, 26, 27, 31, 33, 36, 37, 47, 49, 51, 57, 62, 68, 76, 77, 87, 92, 106, 109, 115, 117, 126, 131, 139, 143, 146, 157, 174, 182]
    let étel2 = []
    for (let i = 0; i < 187; i++) {
        if (étel.includes(i)) { étel2[i] = 1 } else { étel2[i] = 0 }
    }
    let kosz = [17, 22, 40, 51, 58, 102, 103, 109, 115, 121, 133, 146, 156, 157, 164, 175]
    let kosz2 = []
    for (let i = 0; i < 187; i++) {
        if (kosz.includes(i)) { kosz2[i] = 1 } else { kosz2[i] = 0 }
    }
    let nő = [19, 32, 50, 55, 61, 62, 166, 170]
    let nő2 = []
    for (let i = 0; i < 187; i++) {
        if (nő.includes(i)) { nő2[i] = 1 } else { nő2[i] = 0 }
    }
    let ide = [7, 185]
    let ide2 = []
    for (let i = 0; i < 187; i++) {
        if (ide.includes(i)) { ide2[i] = 1 } else { ide2[i] = 0 }
    }
    let all = [3, 6, 10, 13, 16, 17, 21, 22, 26, 27, 31, 33, 36, 37, 47, 49, 51, 57, 62, 68, 76, 77, 87, 92, 106, 109, 115,
        117, 126, 131, 139, 143, 146, 157, 174, 182, 17, 22, 40, 51, 58, 102, 103, 109, 115, 121, 133, 146, 156, 157, 164, 175,
        19, 32, 50, 55, 61, 62, 166, 170, 7, 185]
    let all2 = [];
    for (let i = 0; i < 187; i++) {
        if (all.includes(i)) { all2[i] = 1 } else { all2[i] = 0 }
    }
    myDatasArray1 = étel2.slice(0)
    myDatasArray2 = kosz2.slice(0)
    myDatasArray3 = nő2.slice(0)
    myDatasArray4 = ide2.slice(0)
    myDatasArray5 = all2.slice(0)
    myLabel1 = "étel"
    myLabel2 = "kosz"
    myLabel3 = "lány"
    myLabel4 = "ide"
    myLabel5 = "összes"
    myLabels = [];
    for (let i = 0; i < 187; i++) { myLabels[i] = i }
    graphOfDistributionOfKeywords2()
}


let repetitionHI1 = ""
let repetitionHI2 = ""

// const change_back_double_letters = function (repetitionHI1) {
//     for (let q = 0; q < repetitionHI1.length; q++) {
//         if (['#', '&', '@', '%', '{', '=', '+'].includes(repetitionHI1[q])) {
//             switch (repetitionHI1[q]) {
//                 case '#':
//                     letterHI = 'cs';
//                     break;
//                 case '&':
//                     letterHI = 'sz';
//                     break;
//                 case '@':
//                     letterHI = 'zs';
//                     break;
//                 case '%':
//                     letterHI = 'gy';
//                     break;
//                 case '{':
//                     letterHI = 'ty';
//                     break;
//                 case '=ny':
//                     letterHI = 'cs';
//                     break;
//                 case '+':
//                     letterHI = 'ly';
//                     break;
//             }
//             repetitionHI2 += letterHI;
//         } else {
//             repetitionHI2 += repetitionHI1[q]
//         }
//     }
//     return repetitionHI2
//     console.log(repetitionHI1,repetitionHI2)
// }

const hangsorismetlesek_change_back_double_letters = function (array, index) {
    //mi a tömb, a tömb adott elemének (szintén szömb) melyik indexű eleme tartalmazza a vizsgálandó 
    array.forEach(item => {
        for (let i = 0; i < item[index].length; i++) {
            if (double_alter.includes(item[index][i])) {
                item[index] = item[index].replace(item[index][i], double[double_alter.findIndex(element => element == item[index][i])])
            }
        }
    })
}



// let hangsor_hossz = 3 //karakter
// let ennyi_szo = 2 //szó
let hangSorIsmetlodes_Results = []
let hangSorIsmetlodes_Final_Results = ""
let hangSorIsmetlodes_Indexes
let myStart = 0
function hangSorIsmetlodesFunction(hangsor_hossz, ennyi_szo) {
    let testWord1 = ""
    let testWord2 = ""
    let result_text = ""
    hangSorIsmetlodes_Results = []
    hangSorIsmetlodes_Final_Results = ""
    hangSorIsmetlodes_Indexes = []
    for (let i = 0; i < allWordsHasNoDoubleLetter.length - ennyi_szo; i++) {
        for (let j = 0; j < allWordsHasNoDoubleLetter[i].length - hangsor_hossz; j++) {
            testWord1 = allWordsHasNoDoubleLetter[i].substring(j, j + hangsor_hossz)
            if (testWord1.length == hangsor_hossz) {
                for (let k = 1; k < ennyi_szo; k++) {
                    if (k == 0) { myStart = 0 } else { myStart = 0 }
                    for (let m = myStart; m < allWordsHasNoDoubleLetter[i + k].length; m++) {
                        testWord2 = allWordsHasNoDoubleLetter[i + k].substring(m, m + hangsor_hossz);
                        if (testWord2.length == hangsor_hossz && testWord1 == testWord2) {
                            result_text = ""
                            for (let g = 0; g < ennyi_szo; g++) {
                                result_text += allWords[indexes4AllWordsHasOnlyLetters[i + g]]
                                result_text += " "
                            }
                            hangSorIsmetlodes_Results.push([indexes4AllWordsHasOnlyLetters[i], testWord1, result_text, 1])
                            hangSorIsmetlodes_Indexes.push(indexes4AllWordsHasOnlyLetters[i])
                        }
                    }
                }

            }
        }
    }
    hangsorismetlesek_change_back_double_letters(hangSorIsmetlodes_Results, 1)


    hangsorismetlesek_coloring_function()


}

let myIndexHI = -1
let letterHI = ""

const hangsorismetlesek_coloring_function = function (ennyi_szo) {
    myIndexHI = -1
    letterHI = ""
    hangSorIsmetlodes_Final_Results = ''
    for (let i = 0; i < allWords.length; i++) {
        if (hangSorIsmetlodes_Indexes.includes(i)) {
            myIndexHI = hangSorIsmetlodes_Indexes.findIndex(item => item == i)
            hangSorIsmetlodes_Final_Results += allWordsORIGINAL[i - 1]
            hangSorIsmetlodes_Final_Results += " "
            hangSorIsmetlodes_Final_Results += `<span class=
            ${hangSorIsmetlodes_Results[myIndexHI][3] == 1 ? '"dark-olive"' : '"light-pink"'}>`
            for (let j = 0; j < ennyi_szo; j++) {

                hangSorIsmetlodes_Final_Results += allWordsORIGINAL[i + j]
                hangSorIsmetlodes_Final_Results += " "
            }
            i += ennyi_szo
            hangSorIsmetlodes_Final_Results += `</span>`
            hangSorIsmetlodes_Final_Results += " "
            hangSorIsmetlodes_Final_Results += ` <span class='dark-pink'>`

            hangSorIsmetlodes_Final_Results += `(${hangSorIsmetlodes_Results[myIndexHI][1]})</span> `
        } else {
            //i-1, különben kihagyná a következő rész első szavát
            hangSorIsmetlodes_Final_Results += allWordsORIGINAL[i - 1]
            hangSorIsmetlodes_Final_Results += " "
        }

    }
    document.querySelector('#hangsorismétlések-texts').innerHTML = hangSorIsmetlodes_Final_Results


}



const strikeOutHI = function (myIndex) {

    if (hangSorIsmetlodes_Results[myIndex][3] == 0) {
        hangSorIsmetlodes_Results[myIndex][3] = 1
    } else {
        hangSorIsmetlodes_Results[myIndex][3] = 0
    }
    make_hangsorismetlesek_table()
}

let hangsorismetlesek_table = ""
const make_hangsorismetlesek_table = function () {
    hangsorismetlesek_table = "";
    hangsorismetlesek_table += `<div>`
    hangSorIsmetlodes_Results.forEach((item, index) => {
        hangsorismetlesek_table += `<div id='${index}_hi' onclick='strikeOutHI(${index})'>
        ${hangSorIsmetlodes_Results[index][3] == 0 ? '<s>' : '<b>'}
        ${index + 1} --- ${hangSorIsmetlodes_Results[index][0]} --- 
        ${hangSorIsmetlodes_Results[index][1]} --- ${hangSorIsmetlodes_Results[index][2]}
        ${hangSorIsmetlodes_Results[index][3] == 0 ? '</s>' : '</b>'}
        </div>`
    })
    hangsorismetlesek_table += `</div>`
    document.querySelector("#hangsorismétlések-table").innerHTML = hangsorismetlesek_table
}

let my_characters = 0
let my_words_number = 0

const HI_data_function = function () {
    my_characters = parseInt(document.querySelector("#hangsor_hossza_HI").value)
    my_words_number = parseInt(document.querySelector("#ennyi_szo_HI").value)
}

const HI_function = function () {
    HI_data_function()
    hangSorIsmetlodesFunction(my_characters, my_words_number);
    make_hangsorismetlesek_table();
    HI_distributions_function();
    graphOfDistributionOfHI()
}

let HI_radius = 0
const HI_radius_function = function () {
    HI_radius = Math.floor(parseInt(document.querySelector('#HI-hossz').value) / 2)
}

HI_radius_function()

let HI_short_texts = []
let HI_text1 = []
let HI_text2 = []
let HI_content = ""
let HI_content_array = []
let HI_sub_content = ""
let HI_sub_content2 = ""
let HI_sub_content_ORIGINAL_array = []
let HI_sub_content_ORIGINAL = ''
let HI_start = 0
let HI_finish = 0
let HI_stop = false
let HI_counter = 0
HI_parts_how_many = 0
const HI_short_texts_function = function () {
    //HI_function()
    //hangSorIsmetlodesFunction(my_characters, my_words_number);
    HI_parts_how_many = 0
    HI_content = ""
    HI_sub_content_ORIGINAL_array = []
    HI_content_array = []
    HI_data_function();
    hangsorismetlesek_coloring_function(my_words_number);
    HI_text1 = hangSorIsmetlodes_Final_Results.split('dark-olive')
    //HI_radius = Math.floor(parseInt(document.querySelector('#HI-hossz').value) / 2)
    HI_radius_function()
    for (let i = 0; i < HI_text1.length; i++) {
        HI_sub_content = ""
        HI_sub_content_ORIGINAL = ""
        HI_stop = false;
        HI_start = i;
        HI_finish = i;
        HI_counter = 0
        HI_sub_content2 = ""
        while (HI_stop == false && i != HI_text1.length - 1) {
            if (HI_counter == 0) {
                HI_sub_content += HI_text1[i].substring(HI_text1[i].length - HI_radius, HI_text1[i].length)
                HI_sub_content2 += HI_text1[i].substring(HI_text1[i].length - HI_radius, HI_text1[i].length)
                if (i != HI_text1.length - 1) {
                    HI_sub_content += 'dark-olive'
                    HI_sub_content2 += 'dark-olive'
                }
                i += 1
            } else {
                if (HI_text1[i].length <= 2 * HI_radius) {
                    HI_sub_content += HI_text1[i]
                    HI_sub_content2 += HI_text1[i]
                    if (i != HI_text1.length - 1) {
                        HI_sub_content += 'dark-olive'
                        HI_sub_content2 += 'dark-olive'
                    }
                    i += 1
                } else {
                    HI_sub_content += HI_text1[i].substring(0, HI_radius + 1)
                    HI_sub_content2 += HI_text1[i].substring(0, HI_radius + 1)
                    HI_sub_content = clearing_content_from_unclosed_tag(HI_sub_content)
                    HI_parts_how_many += 1
                    HI_content_array.push(HI_sub_content2)
                    HI_sub_content += `<br>`
                    HI_sub_content += `<p>-----------------------</p>`
                    HI_content += HI_sub_content
                    HI_stop = true;
                    HI_finish = i;
                    i -= 1
                }
            }

            HI_counter += 1
        }
        if (i == HI_text1.length - 1) {
            HI_sub_content += HI_text1[i - 1].substring(HI_text1[i - 1].length - HI_radius, HI_text1[i - 1].length)
            HI_sub_content2 += HI_text1[i - 1].substring(HI_text1[i - 1].length - HI_radius, HI_text1[i - 1].length)
            HI_sub_content += 'dark-olive'
            HI_sub_content2 += 'dark-olive'
            HI_sub_content += HI_text1[i].substring(0, HI_radius)
            HI_sub_content2 += HI_text1[i].substring(0, HI_radius)
            HI_sub_content = clearing_content_from_unclosed_tag(HI_sub_content)
            HI_parts_how_many += 1
            HI_content += HI_sub_content
            HI_content_array.push(HI_sub_content2)
        }
    }

    HI_sub_content_ORIGINAL = ""
    let myContent = []
    HI_content_array.forEach(item => {
        HI_sub_content_ORIGINAL = ""
        myContent = item.split('<span')

        HI_sub_content_ORIGINAL += myContent[0] + " "
        for (let i = 1; i < myContent.length; i++) {
            if (i % 2 == 1) {
                if (myContent[i].split(">").length > 1) {
                    if (myContent[i].split(">")[1].split('</span').length > 1) {
                        HI_sub_content_ORIGINAL += myContent[i].split(">")[1].split('</span')[0]
                    }
                }
            }
            if (i % 2 == 0 && myContent.length > 1) {
                if (myContent[i].split('</span>').length > 1) {
                    HI_sub_content_ORIGINAL += myContent[i].split('</span>')[1]
                }
            }
        }
        HI_sub_content_ORIGINAL_array.push(HI_sub_content_ORIGINAL)
    })

    document.querySelector('#hangsorismétlések-short-texts').innerHTML = HI_content
    HI_info_function();
    HI_distributions_function();
    graphOfDistributionOfHI()
    voice_lines_in_subcontents_function1()
    console.log(voice_lines_in_subcontents)
}

let voice_lines_in_subcontents = []
const voice_lines_in_subcontents_function1 = function () {
    voice_lines_in_subcontents=[]
    let myLength =6
    let myResult = []
    HI_sub_content_ORIGINAL_array.forEach(item => {
        let myLine = ""
        let item2 = ""
        let myArray = item.split(" ")
        myResult = []
        myArray.forEach(item => {
            if (item.length >= myLength) {
                item2 = ""
                for (let k = 0; k < item.length; k++) {
                    if (lettersUpperAndLower.includes(item[k])) { item2 += item[k] }
                }
                if (item2.length >= myLength) {
                    for (let i = 0; i < item2.length - myLength+1; i++) {
                        myResult.push(item2.substring(i, i + myLength).toLowerCase())
                    }
                }
            }
        })
        voice_lines_in_subcontents.push(myResult)
    })
    voice_lines_in_subcontents_function2()
}

const voice_lines_in_subcontents_function2 = function () {
    for (let q = 0; q < voice_lines_in_subcontents.length; q++) {
        let myArray = []
        for (let i = 0; i < voice_lines_in_subcontents[q].length - 1; i++) {
            for (let j = i + 1; j < voice_lines_in_subcontents[q].length; j++) {
                if (voice_lines_in_subcontents[q][i] != voice_lines_in_subcontents[q][j] &&
                    !myArray.includes(voice_lines_in_subcontents[q][j])) {
                    myArray.push(voice_lines_in_subcontents[q][j])
                }
            }
        }
        voice_lines_in_subcontents[q] = myArray.slice(0)
    }
    voice_lines_in_subcontents_function3()
}

//kiveszi belőle az összes <span>...</span> formázást
let commonLinesArray = []
const voice_lines_in_subcontents_function3 = function () {
    //az első elem az 1. és 2. tömb közös hangsorai, a második elem a 2. és 3. tömb közös hangsorai ...
    commonLinesArray = []
    for (let i = 0; i < voice_lines_in_subcontents.length - 1; i++) {
        commonLinesArray.push([])
        for (let j = 0; j < voice_lines_in_subcontents[i].length; j++) {
            for (let k = 0; k < voice_lines_in_subcontents[i+1].length; k++) {
                if (voice_lines_in_subcontents[i][j] == voice_lines_in_subcontents[i+1][k]) {
                    commonLinesArray[i].push(voice_lines_in_subcontents[i][j])
                }
            }
        }
    }
}

const HI_sub_content_clearing_function = function (content) {
    let newContent = ""
    let myArray = content.split('<span');
    for (let i = 0; i < myArray.length; i++) {
        if (i % 2 == 0) {
            newContent += myArray[i]
        } else {
            newContent += myArray[i].split('</span>')[1]
        }
    }
    return newContent

}

//kiveszi a végéről a lezáratlan background='ffc0cb' tageket, hogy ne legyen utánna minden világoslila
let subContentArray = []
let subContent_text = ""
const clearing_content_from_unclosed_tag = function (content) {
    subContentArray = content.split('light-pink')
    if (!subContentArray[subContentArray.length - 1].includes('</span>')) {
        subContentArray[subContentArray.length - 1] += '</span>'
        subContent_text = ""
        for (let i = 0; i < subContentArray.length - 1; i++) {
            subContent_text += subContentArray[i] + 'light-pink'
        }
        subContent_text += subContentArray[subContentArray.length - 1]
    } else { subContent_text = content }
    return subContent_text
}

let HI_data1 = 0
let HI_data2 = 0
let HI_data3 = 0
const HI_info_function = function () {
    HI_data1 = hangSorIsmetlodes_Results.length
    HI_data2 = 0
    hangSorIsmetlodes_Results.forEach(item => {
        if (item[3] == 1) { HI_data2 += 1 }
    })
    //HI_data3 = HI_text1.length
    HI_data3 = HI_parts_how_many
    document.querySelector('#HI-info-1').innerHTML = `<b>${HI_data1}</b>`
    document.querySelector('#HI-info-2').innerHTML = `<b>${HI_data2}</b>`
    document.querySelector('#HI-info-3').innerHTML = `<b>${HI_data3}</b>`
}

const HI_distributions_function = function () {
    myDatasHI = [];
    myLabelsHI = [];
    for (let i = 0; i < hangSorIsmetlodes_Results.length - 1; i++) {
        if (hangSorIsmetlodes_Results[i][3] == 1) {
            myDatasHI.push(hangSorIsmetlodes_Results[i + 1][0] - hangSorIsmetlodes_Results[i][0])
            myLabelsHI.push(hangSorIsmetlodes_Results[i][2])
        }
    }
}

function HI_size_function() {
    let innerHeight = window.innerHeight;
    let innerWidth = window.innerWidth;
    innerHeight = Math.floor(innerHeight * 0.9);
    if (innerWidth >= 768) { innerWidth = Math.floor(innerWidth * 7 / 12) };
    let place = document.querySelector("#div-canvas-HI")
    let place2 = document.querySelector("#div-canvas-HI")
    place2.style.overflow = "auto"

    if (document.querySelector("#HI-small").checked == true) {
        place.style.width = `${innerWidth} px`;
        place.style.height = '300px';
        place.style.overflow = "auto"
    }
    if (document.querySelector("#HI-big").checked == true) {
        place.style.width = "30000px";
        place.style.height = `${innerHeight / 2} px`;
        place.style.overflow = "auto"
        //document.querySelector('#jumpToCanvas').scrollIntoView()
    }
    if (notNowHI == false) { graphOfDistributionOfHI() };
    notNowHI = false;
}
let notNowHI = true;
HI_size_function();
let myChartHI = "";
let myDatasHI = Array();
let myLabelsHI = Array();
function graphOfDistributionOfHI() {

    if (Boolean(myChartHI) == true) {
        myChartHI.destroy();
    }

    document.getElementById('canvas-HI').innerHTML = "";
    var ctx = document.getElementById('canvas-HI').getContext('2d');
    myChartHI = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: myLabelsHI,
            datasets: [{
                label: 'száma:',
                data: myDatasHI,
                backgroundColor: [
                    'rgba(0,0,0,0.2)'
                ],
                borderColor: [
                    'rgba(0,0,0,0.2)'
                ],
                borderWidth: 1,
                barThickness: 60,
                barPercentage: 1,
                barThickness: 'flex',
                scaleSteps: 1,
                scaleStepWidth: 100,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            maintainAspectRatio: false,
        }
    });
}