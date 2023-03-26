function pilihanComputer() {
    var comp = Math.random();
    if( comp < 0.34 ) return 'batu';
    if( comp >= 0.34 && comp < 0.67 ) return 'gunting';
    return 'kertas' ;
}

function getHasil(comp, player) {
    if( player == comp ) return 'SERI';
    if( player == 'batu' ) return ( comp == 'gunting' ) ? 'MENANG' : 'KALAH';
    if( player == 'gunting' ) return ( comp == 'batu' ) ? 'KALAH' : 'MENANG';
    if( player == 'kertas' ) return ( comp == 'gunting' ) ? 'KALAH' : 'MENANG'; 
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {
        const pilihanComputer = getPilihanComputer();
            const pilihanPlayer = pil.className;
            const hasil = getHasil(pilihanComputer, pilihanPlayer);
        
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
        
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
    });
})

// const pBatu = document.querySelector('.batu');
// pBatu.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pBatu.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pGunting = document.querySelector('.gunting');
// pGunting.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGunting.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pKertas = document.querySelector('.kertas');
// pKertas.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pKertas.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });