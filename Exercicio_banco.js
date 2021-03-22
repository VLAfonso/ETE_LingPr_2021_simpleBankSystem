var clientes = [[nome = "Mateus", código = "985", senha = "317", saldo = 278], [nome = "Tobias", código = "643", senha = "938", saldo = 561],[nome = "Jéssica", código = "341", senha = "789", saldo = 430],[nome = "Laura", código = "123", senha = "456", saldo = 1250]];

var conta_destino;
var cliente_operacao;

function verificacao (){
  var codigo = window.prompt("Digite o seu código");
  var senha = window.prompt("Digite sua senha");

  clientes.forEach (function(item, indice){
    if ((clientes[indice][1]==codigo)&&(clientes[indice][2]==senha)){
      cliente_operacao = clientes[indice];
    }
  });
  if(cliente_operacao == null){
    var tentar_dnv = window.prompt("Cliente não localizado. Gostaria de tentar novamente? Sim, Não")
    if(tentar_dnv == "Sim"){
      verificacao();
    }
    else{
      return false;
    }
  }
  else{
    realiza_op();
  }
}

function realiza_op(){
  var operacao = Number(window.prompt("Qual operação você gostaria de fazer? 1-Saque, 2-Deposito, 3-Transferencia"));
  
  if ((operacao == 1)||(operacao == 2)||(operacao == 3)){
    var valor_op = Number(window.prompt("Qual o valor da operação?"))
    
    if(valor_op > 0){
      switch(operacao){
        case 1: //saque
          if(cliente_operacao[3]>=valor_op){
            clientes.forEach (function(item, indice){
              if (clientes[indice][1]==cliente_operacao[1]){
                clientes[indice][3] = clientes[indice][3]-valor_op;
                alert(`Saque realizado com sucesso! Seu saldo atual é de ${clientes[indice][3]} reais.`);
              }
            });
          }
          else{
            alert("Saldo insuficiente")
          }
        break;
        case 2: //deposito
          conta_destino = window.prompt("Qual o código da conta de destino?");
          clientes.forEach (function(item, indice){
            if (clientes[indice][1]==conta_destino){
              clientes[indice][3] = clientes[indice][3]+valor_op;
              }
            });
          alert(`Depósito realizado com sucesso!`);
        break;
        case 3://transferencia
          if(cliente_operacao[3]>=valor_op){
            conta_destino = window.prompt("Qual o código da conta de destino?");
            clientes.forEach (function(item, indice){
              if (clientes[indice][1]==cliente_operacao[1]){
                clientes[indice][3] = clientes[indice][3]-valor_op;
              }
              if (clientes[indice][1]==conta_destino){
                clientes[indice][3] = clientes[indice][3]+valor_op;
              }
          });
            alert(`Tranferência realizada com sucesso! Seu saldo atual é de ${cliente_operacao[3]} reais.`);
          }
          else{
            alert("Saldo insuficiente")
          }
        break;
      }
    }
    else{
      alert("Valor da operação inválido")
    }
  }
  else{
    alert("Operação inválida")
  }
  var outra_op = window.prompt("Gostaria de realizar outra operação? Sim, Não")
    if(outra_op == "Sim"){
      realiza_op();
    }
    else{
      return false;
    }
}
verificacao();