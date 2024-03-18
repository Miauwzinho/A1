
 let valor = prompt('digite 1 para verificar saldo, 2 para realizar Saque, 3 realizar Deposito, 4 realizar Transferencia,5 checar Cheque Especial,6 atualizarCadastro,7  avaliar Credito');
  //let valor = 8;
  let saldo = 100;
  let saldoAtual, saldoOrigem = saldo;
  let saldoDestino, historicoCredito, rendaMensal, valorDeposito, valorSaque = 0;
  let cadastroAtivo = true;
  let valorTransferencia = 0;
  let limiteTransferencia = 100;


  function verificarSaldo(saldo) {

    if (saldo > 0) {

      console.log("Saldo positivo");

    } else {

      console.log("Saldo negativo");

    }

  }
  function realizarSaque(saldoAtual, valorSaque) {

    if (valorSaque <= saldoAtual) {

      saldoAtual -= valorSaque;

      console.log(`Saque realizado com sucesso. Saldo atual: R$${saldoAtual}`);

    } else {

      console.log("Saldo insuficiente");

    }

  }
  function realizarDeposito(saldoAtual, valorDeposito) {

    saldoAtual += valorDeposito;

    console.log(`Depósito realizado com sucesso. Novo saldo: R$${saldoAtual}`);

  }
  function realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia) {

    if (valorTransferencia <= saldoOrigem && valorTransferencia <= limiteTransferencia) {

      saldoOrigem -= valorTransferencia;

      saldoDestino += valorTransferencia;

      console.log("Transferência realizada com sucesso");

    } else if (valorTransferencia > saldoOrigem) {

      console.log("Saldo insuficiente para transferência");

    } else {

      console.log("Valor excede o limite de transferência");

    }

  }
  function checarChequeEspecial(saldo) {

    if (saldo < 0) {

      console.log("Dentro do limite do cheque especial");

    } else {

      console.log("Fora do limite do cheque especial");

    }

  }

  function atualizarCadastro(cadastroAtivo, saldo) {

    if (cadastroAtivo) {

      if (saldo > 0) {

        console.log("Cadastro ativo e saldo positivo");

      } else {

        console.log("Cadastro ativo mas precisa regularizar saldo");

      }

    } else {

      console.log("Por favor, atualize seu cadastro");

    }

  }
  function avaliarCredito(saldo, historicoCredito, rendaMensal) {

    if (saldo > 1000 && historicoCredito && rendaMensal > 3000) {

      console.log("Crédito aprovado");

    } else {

      console.log("Crédito negado");

    }

  }

  switch (valor) {

    case 1:
      verificarSaldo(saldo);
      break;
    case 2:
      valorSaque = prompt("insira o valor do saque");
      realizarSaque(saldoAtual, valorSaque);
      break;
    case 3:
      valorDeposito = prompt("insira o valor do deposito");
      realizarDeposito(saldoAtual, valorDeposito);
      break;
    case 4:
      valorTransferencia = prompt("insira o valor da transferencia");
      realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia);
      break;
    case 5:
      checarChequeEspecial(saldo);
      break;
    case 6:
      atualizarCadastro(cadastroAtivo, saldo);
      break;
    case 7:
      rendaMensal = prompt("insira o valor da renda mensal");
      historicoCredito = prompt("insira o historico de crédito");
      avaliarCredito(saldo, historicoCredito, rendaMensal);
      break;
  }


