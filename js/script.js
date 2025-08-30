const formulario = document.getElementById('formulario');

formulario.addEventListener('submit',function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const emailDestinatario = 'juliahenriquesdeandrade@gmail.com';
    
    const assuntoEmail  = `Portifólio`;
    const mensagemEmail = `Olá, meu nome é ${nome}.\n${mensagem}`;
    
    const url = `mailto:${emailDestinatario}?subject=${encodeURIComponent(assuntoEmail)}&body=${encodeURIComponent(mensagemEmail)}` ;
    window.open(url, '_blank');
});
