const oszlop=5;
const sor=4;

function visszaFordit(){
    console.log('Most fordult vissza');
}

function megfordit(){
    let nyitott = document.getElementsByClassName('open').length;
    if(nyitott<2){
        if(nyitott==0){
            setTimeout(function(){
                visszaFordit();
            },2000);
        }
        this.classList.add("open");
        this.style.backgroundImage=this.dataset.bgimg;
    }
};

for (let i = 0; i < sor; i++){
    let sor=document.createElement('div');
    sor.className='sor';
    for (let j = 0; j < oszlop; j++) {
        let cella = document.createElement('div');
        cella.onclick=megfordit;
        cella.className='cella';
        sor.appendChild(cella);
    }
    document.getElementById('palya').appendChild(sor);
}

const kepSzam=oszlop*sor/2; //páros és max 44, min 2

for (let i = 1; i <= kepSzam; i++) {
    for (let j = 0; j < 2; j++) {
        let x=Math.round(Math.random()*(sor-1));
        let y=Math.round(Math.random()*(oszlop-1));

        let kepCella = palya.children[x].children[y];
        if(!kepCella.dataset.bgimg){
            kepCella.setAttribute("data-bgimg",'url("./img/'+i+'.png")');
            //kepCella.dataset.img='url("./img/'+i+'.png")';
            //kepCella.style.backgroundImage='url("./img/'+i+'.png")';
        }
        else{j--};
    }
}