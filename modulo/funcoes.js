const ValidarMedia = function(aluno, sexoa, professor, sexop, disciplina, nota1, nota2, nota3, nota4, exame){
    let nomeAluno = aluno
    let sexoAluno = sexoa
    let nomeProfessor = professor
    let sexoProfessor = sexop
    let nomeDisciplina = disciplina
    let valor1 = nota1
    let valor2 = nota2
    let valor3 = nota3
    let valor4 = nota4
    let notaExame = exame
    let status = true

    if(aluno == '' || sexoa == '' || professor =='' || sexop =='' || disciplina =='' || nota1 =='' || nota2 == '' || nota3 == '' || nota4 ==''){
        console.log('ERRO: É obrigatório o preenchimento de todas as entradas de dados.')
        status = false
    }else{
        if(isNaN(nota1) == true || isNaN(nota2) == true || isNaN(nota3) == true || isNaN(nota4) == true){
            console.log ('ERRO: É obrigatorio a entrada de valores numericos nas notas.')
            status = false
        }else{
            if(nota1 <0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100 || notaExame < 0 || notaExame > 100){
                console.log('ERR0: É Obrigatório a entrada de valores entre 0 e 100.')
                status = false
            }
            return status
        } 
    }
}  


const ValidarResultado = function(nota1, nota2, nota3, nota4, exame, aluno, sexoa, professor, sexop, disciplina, curso){
    let nomeCurso = curso
    let nomeAluno = aluno
    let sexoAluno = sexoa
    let nomeProfessor = professor
    let sexoProfessor = sexop
    let nomeDisciplina = disciplina
    let valor1 = nota1
    let valor2 = nota2
    let valor3 = nota3
    let valor4 = nota4
    let notaExame = exame
    let resultado
    let resulExame = ''
    let situacao
    let status = false

    resultado = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) /4       
    
        if(resultado >= 70 && resultado <= 100){
            situacao = "APROVADO"
            status = true
                
        }else if(resultado <= 49.9){
                situacao = "REPROVADO"
                status  = true
                    
        }else if(resultado >=50 && resultado <=69){
                    situacao = "EXAME"
                    status = true
                    resulExame = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4) + Number(notaExame)) /5

                    if(resulExame <= 61){
                        situacao = "APROVADO NO EXAME"
                        status = true
                            
                    }else{
                        situacao = "REPROVADO NO EXAME"
                        status = true
                    }
        }
        
        console.log(`******BOLETIM****** \n
                        * Aluno(a): ${nomeAluno} foi ${situacao} na disciplina ${nomeDisciplina}
                        * Curso: ${nomeCurso}
                        * Professor(a): ${nomeProfessor}
                        * Notas do ${nomeAluno}: ${nota1} , ${nota2} , ${nota3} , ${nota4} , ${notaExame}
                        * Média Final: ${resultado.toFixed(1)}
                        * Média Final do Exame: ${resulExame}
                        * *****************************
                    `)  
            return status
}                


   
    module.exports = {
        ValidarMedia,
        ValidarResultado
    }
    

        
            