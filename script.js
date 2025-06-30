let ism = prompt("Ismingizni kiriting")

let harf = prompt("Bironta harf kiriting")

if(ism.toLocaleLowerCase().includes(harf.toLocaleLowerCase())){
    alert(`${ism} ismida ${harf} harfi bor`)
}else{
    alert(`${ism} da ${harf} harfi yoq`)
}

