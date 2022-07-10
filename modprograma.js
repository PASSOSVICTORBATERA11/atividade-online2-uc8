// ok --- Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será
// permitido por data inválida.

// ok --- Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.

// ok --- Listar participantes e palestrantes por evento.
 
// ok --- Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão,
// alertar que o cadastro não será permitido por ter excedido o limite.

// Criar fluxograma com todos os requisitos que devem ser atendidos pelo sistema.


const data = new Date();

if(data < 09/07/2022){
    console.log("Evento criado com sucesso. " +data);
}else{
    console.log("Data inválida! Data do evento não pode ser anterior ao dia atual");
}
        
var idade = 19
if(idade >= 18){
    console.log("Cadastro realizado com sucesso! Bem Vindo");
}else{
    console.log("Cadastro Negado! Acesso não autorizado a menores de 18 anos");
}
        
// posições                      0               1              2             3              4
var listaDePalestrantes = ["Palestrante0","Palestrante1","Palestrante2","Palestrante3","Palestrante4"]; //Array
        
console.log(listaDePalestrantes.length);
        
// posições                      0                 1                 2             3                4              5
var listaDeParticipantes = ["Participante0","Participante1","Participante2","Participante3","Participante4","Participante5"]; //Array
        
console.log(listaDeParticipantes.length)


var inscritos = 100;
if(inscritos <= 100){
    console.log("Acesso liberado, sua vaga é a vaga de número 99");
}else{
    console.log("Não existem mais vagas disponíveis. Até a próxima")
}