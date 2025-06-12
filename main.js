class Veiculo {
  constructor(modelo, marca) {
    this.modelo = modelo;
    this.marca = marca;
  }
}

class VeiculoComPreco extends Veiculo {
  #preco;

  constructor(modelo, marca, preco) {
    super(modelo, marca);
    this.#preco = preco;
  }

  getPreco() {
    return this.#preco;
  }

  setPreco(valor) {
    if (typeof valor === 'number' && valor > 0) {
      this.#preco = valor;
    }
  }

  reajustarPreco() {
    this.#preco *= 1.1;
  }

  exibirInfo() {
    console.log(`${this.modelo} da ${this.marca} custa R$ ${this.getPreco()}`);
  }
}

class Formula1 extends VeiculoComPreco {
  constructor(modelo, marca) {
    super(modelo, marca, 1000000);
  }

  reajustarPreco() {
    this.setPreco(this.getPreco() * 1.5);
  }
}

class CarroEsportivo extends VeiculoComPreco {
  constructor(modelo, marca) {
    super(modelo, marca, 250000);
  }

  reajustarPreco() {
    this.setPreco(this.getPreco() * 1.25);
  }
}

class MotoCorrida extends VeiculoComPreco {
  constructor(modelo, marca) {
    super(modelo, marca, 80000);
  }

  reajustarPreco() {
    this.setPreco(this.getPreco() * 1.15);
  }
}

const civic = new VeiculoComPreco("Civic", "Honda", 120000);
const ferrari = new CarroEsportivo("488 GBT", "Ferrari");
const yamaha = new MotoCorrida("YZF-R1", "Yamaha");
const redBullF1 = new Formula1("RB20", "Red Bull Racing");

civic.reajustarPreco();
ferrari.reajustarPreco();
yamaha.reajustarPreco();
redBullF1.reajustarPreco();

civic.exibirInfo();
ferrari.exibirInfo();
yamaha.exibirInfo();
redBullF1.exibirInfo();
