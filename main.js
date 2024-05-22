
// Classe pai

class veiculo {
    constructor (marca, modelo, anoModelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.anoModelo = anoModelo;
    }

}
// Esses subclasses estão herdando o constructor da classe pai.

    class Carro extends veiculo {
        acelerar() {
        console.log(`Acelerando o ${this.marca} ${this.modelo} ${this.anoModelo}.`);
        }
    
        parar() {
        console.log(`Parando o ${this.marca} ${this.modelo} ${this.anoModelo}.`);
        }
    }

    class Moto extends veiculo {
        acelerar() {
        console.log(`Acelerando a ${this.marca} ${this.modelo} ${this.anoModelo}.`);
        }
    
        parar() {
        console.log(`Parando a ${this.marca} ${this.modelo} ${this.anoModelo}.`);
        }
    }

//Criando instâncias de objetos

const car1 = new Carro("Fiat", "Uno", 2000);
const moto1 = new Moto("KAWASAKI ", "NINJA 400", 2019);
const car2 = new Carro("Ford", "Focus", 2010);

console.log(car1);
car1.acelerar();
car1.parar();

console.log("________________________________\n"); //Organização na impressão 

console.log(moto1);
moto1.acelerar();
moto1.parar();

console.log("________________________________\n"); //Organização na impressão 

console.log(car2);
car2.acelerar();
car2.parar();
