function BotonPrueba(){
    alert('Ola k ase');
}
const pro=['the','our'];
const adj=['great','big'];
const noun=['jogger','racoon'];
let hola='';
function Recorrer(){
    for (let x=0;x<pro.length;x++){
        for (let y=0;y<adj.length;y++){
            for (let z=0;z<noun.length;z++){
                hola=hola+pro[x]+adj[y]+noun[z]+' ';
            }
        }
    }
    document.querySelector(".Mix").innerHTML=hola;
}
window.onload=Recorrer;