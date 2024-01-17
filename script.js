const zorluk = document.getElementById('zorluk')
const tahmin = document.getElementById('tahmin')
const yazi = document.getElementById('yazi')
const btn = document.getElementById('btn')

// value ler stringdir numbera cevırmek gerekır burda
// chenge  herbiri değiştiğinde fonksiyon calıssın



// randomu dısarda tanımlayıp içeride degiştir.randomun carpanı olarak kullanılcak value


let random
zorluk.addEventListener('change', function zorlukAyarla() {
    let carpan = Number(zorluk.value)
    random = Math.round(Math.random() * carpan)
    console.log(random)


})


btn.addEventListener('click', karsilastir)

function karsilastir() {
    let tahminNum = Number(tahmin.value)
    if (tahminNum < random) {

        yazi.textContent = ' Daha büyük bir sayı giriniz'
        yazi.classList.remove('text-primary')
        yazi.classList.add('text-danger')
        btn.classList.remove('btn-primary')
        btn.classList.add('btn-danger')
    } else if (tahminNum > random){
        yazi.textContent = ' Daha küçük bir sayı giriniz'
    yazi.classList.remove('text-sussest')
    yazi.classList.add('text-warning')
    btn.classList.remove('btn-primary')
    btn.classList.add('btn-warning')
}
    else {
        yazi.textContent = 'Tebrikler Kazandınız'
        yazi.classList.remove('text-danger', 'text-warning')
        yazi.classList.add('text-success')
        btn.classList.remove('btn-danger', 'btn-warning')
        btn.classList.add('btn-success')
    }

}