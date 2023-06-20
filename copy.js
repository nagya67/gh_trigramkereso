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
        place.style.width = "30000px";
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
function graphOfAllit22Function() {

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
                label: 'száma:',
                data: allit22Distances,
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

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

const double = ['cs', 'sz', 'zs', 'gy', 'ty', 'ny', 'ly']
const double_alter = ['#', '&', '@', '%', '{', '=', '+']
let allWordsHasNoDoubleLetter = []
let myWord = ''
dl_done=false
for (let i = 0; i < allWordsHasOnlyLetters.length; i++) {
    myWord = ''
    for (let j = 0; j < allWordsHasOnlyLetters[i].length; j++) {
        dl_done=false
        for (let k = 0; k < double.length; k++) {
            if (allWordsHasOnlyLetters[i][j] == double[k][0] && allWordsHasOnlyLetters[i][j + 1] == double[k][1] && dl_done==false) {
                myWord += double_alter[k];
                j += 1;
                dl_done=true;
            }
        }
        if(dl_done==false){
            myWord+=allWordsHasOnlyLetters[i][j]}
    }
    allWordsHasNoDoubleLetter.push(myWord)
}



let allWords = textArray[0].split(" ");
let allWordsHasOnlyLetters = []
let indexes4AllWordsHasOnlyLetters = [];
let word_ = ""
characterCounter = 0
for (let i = 0; i < allWords.length; i++) {
    word_ = ""
    for (let j = 0; j < allWords[i].length; j++) {
        if (letters.includes(allWords[i][j])) {
            word_ += allWords[i][j]
        }
    }
    allWordsHasOnlyLetters.push(word_)
    indexes4AllWordsHasOnlyLetters.push(characterCounter);
    characterCounter += allWords[i].length + 1
    //a szóközt is hozzászámoljuk
}