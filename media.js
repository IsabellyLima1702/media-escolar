var moduloFuncoes = require('./modulo/funcoes.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o nome do Aluno(a):', function(aluno){
    let nomeAluno = aluno
    entradaDeDados.question(`Digite qual é o sexo do Aluno(a):[MASCULINO/FEMININO]
       
        `, function(sexoa){
        let sexoAluno = sexoa
        entradaDeDados.question('Digite o nome do Professor(a):', function(professor){
            let nomeProfessor = professor
            entradaDeDados.question(`Digite qual é o sexo do Professor(a):[MASCULINO/FEMININO]
                
                `, function(sexop){
                let sexoProfessor = sexop
                entradaDeDados.question('Digite o nome do curso:', function(curso){
                    let nomeCurso = curso
                    entradaDeDados.question('Digite o nome da disciplina:', function(disciplina){
                        let nomeDisciplina = disciplina
                        entradaDeDados.question('Digite a nota 1:', function(valor1){
                            let nota1 = valor1
                            entradaDeDados.question('Digite a nota 2:', function(valor2){
                                let nota2 = valor2
                                entradaDeDados.question('Digite a nota 3:', function(valor3){
                                  let nota3 = valor3
                                  entradaDeDados.question('Digite a nota 4:', function(valor4){
                                    let nota4 = valor4
                                    entradaDeDados.question('Digite a nota Exame: (Este campo não é obrigatório)', function(exame){
                                        let notaExame = exame
                                        let resultado
                                        let resulExame
                                        let situacao

                                    console.log(moduloFuncoes.ValidarMedia (nomeAluno, sexoAluno, nomeProfessor, sexoProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4, notaExame));
                                    console.log(moduloFuncoes.ValidarResultado (nota1, nota2, nota3, nota4, notaExame, nomeAluno, sexoAluno, nomeProfessor, sexoProfessor, nomeCurso, nomeDisciplina, nomeCurso))

                                    })
                                  })
                                })
                            })  
                        })
                    })
                })
            })
        })
    })
})