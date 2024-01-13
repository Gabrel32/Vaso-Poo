const llenar = document.getElementById("llenar")
const vaciar = document.getElementById("vaciar")
const derramar = document.getElementById("derramar")
const sorber = document.getElementById("sorber")
class Vaso {
    constructor(){
        this.container = document.querySelector(".container");
        this.vaso = document.querySelector("#vaso")
        this.agua = document.createElement("div")
        this.alerta = document.getElementById("alerta")
        this.agua.id = "agua"
        this.vasoLleno = false
    }

    set setVasoLleno(estado){
        this.vasoLleno = estado
    }

        llenar(animacion){
            this.setVasoLleno = true
            this.agua.style.animation = animacion;
            this.vaso.appendChild(this.agua)

        }
        vaciar(animacion){
            this.agua.style.animation = animacion;
            this.setVasoLleno = false
        }
        derramar(animacion,animacion2){
            this.vaso.style.animation = animacion;
            this.agua.style.animation = animacion2;
            this.setVasoLleno = false
            setTimeout(() => {
                this.vaso.style.animation = ""
            }, 2000)
        }
        sorber(animacion,animacion2){
            this.vaso.style.animation = animacion ;
            this.agua.style.animation = animacion2;
            this.setVasoLleno = false
            setTimeout(() => {
                this.vaso.style.animation = ""
            }, 2000)
        }
        destruir(){
            this.container = null
            this.vaso = null
            this.agua = null
            this.setVasoLleno = false
        }
        alertar(mensaje){
            this.alerta.textContent = mensaje
            this.alerta.style.backgroundColor = "#830c23d5";

            setTimeout(() => {
                this.alerta.textContent = ""
                this.alerta.style.backgroundColor = "";
            }, 4000);
        }
}

window.addEventListener("load", () => {
    let vasoAgua = new Vaso()

    vaciar.addEventListener("click",()=>{
        if (vasoAgua.vasoLleno) {
            vasoAgua.vaciar("vaciarVaso 2s forwards")
        }else{
            vasoAgua.alertar("no puedes vaciar un vaso que esta vacio");
        }
    })
    
llenar.addEventListener("click",()=>{
    if (vasoAgua.vasoLleno) {
        vasoAgua.alertar("el vaso ya esta lleno");
    }else{
        vasoAgua = new Vaso
        vasoAgua.llenar("llenarVaso 2s forwards")
    }
 
})

derramar.addEventListener("click",()=>{
    if (vasoAgua.vasoLleno) {
        vasoAgua.derramar("derramar 3s forwards","vaciarVaso 2.5s forwards")
    }else{
        vasoAgua.alertar("no puedes derramar un vaso que esta vacio");
        vasoAgua.destruir()
    }
})
sorber.addEventListener("click",()=>{
    if (vasoAgua.vasoLleno) {
        vasoAgua.sorber("sorber 3s forwards","vaciarVaso 2s forwards")
    }else{
        vasoAgua.alertar("no puedes beber de un vaso vacio")
        vasoAgua.destruir()
    }
})

});

const llenarT = document.getElementById("llenarT")
const vaciarT = document.getElementById("vaciarT")
const derramarT = document.getElementById("derramarT")
const sorberT = document.getElementById("sorberT")
const abrir = document.getElementById("abrir")
const cerrar = document.getElementById("cerrar")
const medir = document.getElementById("medir")


class Termo extends Vaso{
    constructor(container,agua,vaso,alerta,vasoLleno){
        super(container,vaso,agua,alerta,vasoLleno)
        this.container = document.querySelector(".containerT")
        this.vaso = document.querySelector("#vasoT")
        this.agua = document.createElement("div")
        this.agua.id = "aguaT"
        this.alerta = document.querySelector("#alertaT")
        this.tapa = document.querySelector("#tapa")
        this.tapado = false
    }

    set setTapado(estado){
        this.tapado = estado
    }

    
    abrir(){
        this.setTapado = false
        this.tapa.style.animation = "abrir 2s forwards"
    }
    cerrar(animacion){
        this.setTapado = true
        this.tapa.style.animation = animacion;
    }
    medir(){
        this.temperatura = (Math.floor(Math.random()* 80) / 4).toFixed(2)
        this.banner = document.getElementById("banner")
        this.banner.style.backgroundColor = "#7ed7f4";
        this.banner.textContent = `la temperatura es: ${this.temperatura}º`
        setTimeout(() => {
            this.banner.textContent = ""
            this.banner.style.backgroundColor = ""
        }, 4000);
    }

}


window.addEventListener("load",()=>{
    let termo = new Termo()

    llenarT.addEventListener("click",()=>{
        if (termo.vasoLleno) {
            termo.alertar("el termo ya esta lleno");
        }else{
            termo.tapado ? termo.alertar("el termo esta tapado no puedes llenarlo") :termo.llenar("llenarVaso 2s forwards")
        }    })
    vaciarT.addEventListener("click",()=>{
        if (termo.vasoLleno) {
            termo.tapado ? termo.alertar("el termo esta tapado no puedes vaciarlo"): termo.vaciar("vaciarVaso 2s forwards")
        }else{
            termo.alertar("no puedes vaciar un termo que esta vacio");
        }    })
    derramarT.addEventListener("click",()=>{
        if (termo.vasoLleno) {
            termo.tapado ? termo.alertar("el termo esta tapado no puedes derramarlo  ") :termo.derramar("derramar 3s forwards","vaciarVaso 2.5s forwards")
        }else{
            termo.alertar("no puedes derramar un termo que esta vacio");
        }
    })
    sorberT.addEventListener("click",()=>{
        if (termo.vasoLleno) {
            termo.tapado ? termo.alertar("no puedes beber de un termo tapado! abrelo antes") :termo.sorber("sorber 3s forwards","vaciarVaso 2s forwards")
        }else{
            termo.alertar("no puedes beber de un termo vacio")
            termo.destruir()
        }
    })
    cerrar.addEventListener("click",()=>{
        if (termo.tapado) {
            termo.alertar("ya esta cerrado! acaso quieres romperlo?")
        }else{
            termo.cerrar("cerrar 2s forwards")
        }
    })
    abrir.addEventListener("click",()=>{
        if (termo.tapado) {
            termo.abrir("abrir 2s forwards")

        }else{
            termo.alertar("ya esta abierto")
        }
    })
    medir.addEventListener("click",()=>{
        if (termo.vasoLleno) {
            termo.medir()
        }else{
            termo.alertar("no hay nada al lo cual medir temperatura")
        }
    })
    
})



    
