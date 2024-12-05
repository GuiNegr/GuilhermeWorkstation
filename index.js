/*

vai aparecer meu nome, quando aparecer meu nome ele vai sumindo junto com o bg(background)

*/

let tl = gsap.timeline();
const paragrafo = document.getElementById('g_sap');
const div = document.querySelector('.overlay');
const img = document.querySelector('.divMainFoto')
const divMain = document.querySelector('.divMainH1eFoto')
const sectionFoto = document.querySelectorAll('.divSectionFotos')
const sectionfotoFirst = document.getElementById('sectionFirst')
const sectionfotoTwo = document.getElementById('sectionTwo')

//o primeiro parametro do gsap é o elemento que quermos animar
//o segundo parametro são as propriedades do css que quero definir o valor

//Gsap.to serve para determinar até onde sua animação vai, começando com a propriedade padrão dela(que no caso e 1 e indo para 0 na opacity)

//gsap.from serve para definir o ponto para onde vai, ele começa com o ponto inicial ao contrario(seria o contrario do to), vc define aonde ele começa,e a propriedade do css dele padrão é aonde ele termina

/* gsap.from(paragrafo, {
  opacity: 0,
  duration: 1.7,
});

gsap.to(paragrafo, {
  opacity: 0,
  delay: 1.3,
  duration: 1.5,
}); */








tl.set("body",{overflow:"hidden"}).
from(paragrafo, {
  opacity: 0,
  duration: 1,
}).
to(paragrafo, 
  { opacity: 0, 
    delay: 1.1, 
    duration: 0.4 })
    .to(div,{
      opacity: 0,
      duration:1,
      ease: "linear"
}).from(img,{
  rotateZ: 45,
  duration: 1.5,
  ease: "power4.inOut",
  scale: 0,
}, "<")
.from(sectionfotoFirst,{
  rotateZ: 50,
  duration: 1.2,
  ease: "power4.out",
  scale: 0,
},"<")
.from(sectionfotoTwo,{
  rotateZ: 55,
  duration: 1.4,
  ease: "power4.out",
  scale: 0,
},"<").set("body",{overflow:"auto"}).set(div,{
  zIndex: "-1"
})


  