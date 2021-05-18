const http = require('http');
let jwt = require('jsonwebtoken');
const fs = require('fs')
let cert = fs.readFileSync('./id_rsa.ppk');
let exp = timestamp + (1000 * 3600);
const hostname = '127.0.0.1';
const port = 3000;

function randomString() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i = 0; i < 8; i++) {
 
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    }
    text += "-";
    for(let i = 0; i < 4; i++) {
 
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    }
    text += "-";
    for(let i = 0; i < 4; i++) {
 
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    }
    text += "-";
    for(let i = 0; i < 4; i++) {
 
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    }
    text += "-";
    for(let i = 0; i < 12; i++) {
 
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    }
    return text
}
function timestamp() { return parseInt(Date.now().toString().substr(0,10)); }
function timestampexp() {  let time = parseInt(Date.now().toString().substr(0,10)); let result = time + 3600; return result}

const server = http.createServer((req, res) => {

  let token = jwt.sign({
    "aud": "a42056e2-20f5-497d-9d71-922f7267e015",
    "iss": "https://login.microsoftonline.com/a50e7b76-8ea5-492c-bf17-97d652fc3ce9/v2.0",
    "iat": timestamp(),
    "nbf": timestamp(),
    "exp": timestampexp(),
    "aio": "ATQAy/8TAAAARCAXEb2r6ZHW9SNREFdyleXYq+yW9BEwG6bV69fLu0FduQ1+Obxy4rGfn1zOFBpI",
    "name": "epsilon",
    "nonce": randomString(),
    "oid": "9fda3d25-c8cf-4935-a3e2-c81bfc408388",
    "preferred_username": "episolon.dummy@dummy.com",
    "rh": "0.ASUAdnsOpaWOLEm_F5fWUvw86eJWIKT1IH1JnXGSL3Jn4BUlABE.",
    "roles": [
      "TrocaTurma_Trocar",
      "Fies_Listar",
      "TimeLine_Listar",
      "FeatureToggle_Listar",
      "Beneficio_Listar",
      "HistoricoEscolar_Listar",
      "Creditos_Listar",
      "PerfilAluno_Listar",
      "PerfilAluno_Alterar",
      "Mensalidade_Gerar",
      "QuadroHorario_Confirmar",
      "Pam_Listar",
      "Acordo_Listar",
      "QuadroHorario_Listar",
      "Boleto_Gerar",
      "Servico_Listar",
      "SituacaoAcademica_Listar",
      "SituacaoAcademica_Gravar",
      "Servico_GerarServico",
      "Mensalidade_Listar",
      "SituacaoAcademica_Excluir",
      "Retorna_Token_Raid",
      "Chamado_Listar",
      "Servico_ListarTipos",
      "Carne_Listar",
      "Prouni_Listar",
      "RAID_Acessar",
      "Matricula_Listar",
      "RetornoBancario_Listar",
      "Termo_Listar"
    ],
    "sub": "e36ZmbXCvKxCkHDS3lPHCIQUzdZJjwG9IpkO86PtD_Y",
    "tid": "a50e7b76-8ea5-492c-bf17-97d652fc3ce9",
    "uti": "wrDLkS0bHUel1dwplsEGAA",
    "ver": "2.0"
  }, cert, { algorithm: 'RS256', keyid: 'nOo3ZDrODXEK1jKWhXslHR_KXEg'});
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(token);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});