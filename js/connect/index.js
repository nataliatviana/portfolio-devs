const form = document.getElementById("form-connect");
const select = document.getElementById("perfis");
const label = document.getElementById("label-connect");

const nataliaProfile = "https://www.linkedin.com/in/nat%C3%A1lia-toscano-viana-18457b1b9/";
const juliaProfile = "https://github.com/Juliahandrade";
const rodrigoProfile = "https://www.linkedin.com/in/rodrigol-oliveiraa/";

function showError(){
    const div = document.createElement('div');
    const span = document.createElement('span');

    span.textContent = "Por favor selecione um integrante do grupo para continuar!";
    span.style.color = "red";
    div.appendChild(span);
    label.appendChild(div);

    setTimeout(()=>{
        span.textContent = "";
    },3000);
}

function changeToLinkedinProfile(url){
    window.location.href = url;
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const perfil = select.value;

    if(!perfil){
       showError();
       return;
    }

    console.log(perfil);

    switch (perfil){
        case "natalia":
           changeToLinkedinProfile(nataliaProfile);
           break;
        case "julia":
            changeToLinkedinProfile(juliaProfile);
            break;
        case "rodrigo":
            changeToLinkedinProfile(rodrigoProfile);
            break;
    }
})

