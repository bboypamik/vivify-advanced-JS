// // Prvi zadatak

// const foo = () => console.log("Hello world");
// foo()

// // sta je reduce

// const niz = [1, 2, 3, 4];
// const sabirac = (zbir, trenutniBroj) => {
//     return zbir + trenutniBroj;
// }

// // 1 + 2 + 3 + 4
// const zbir = array1.reduce(sabirac);
// console.log(zbir)

// var Entity = function(name, delay) {
//     this.name = name;
//     this.delay = delay;  
//   }
  
//   Entity.prototype.greet = function() {
//     setTimeout(
//         () => console.log('Hi, I am ' + this.name),
//         this.delay
//     )
//   }
  
//   var java = new Entity('Java', 5000)
//   var cpp = new Entity('C++', 30)
  
//   java.greet()
//   cpp.greet()



// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15


// class Osoba {
//     constructor(ime, prezime, jmbg, pol) {
//         this.ime = ime;
//         this.prezime = prezime;
//         this.jmbg = jmbg;
//         this.pol = pol;
//     }

//     constructor()
// }

// let marko = new Osoba("Marko", "Markovic",  "24u3087580", true);




class Baka {
    constructor(kolaci, ime, prezime) {
        this.kolaci = kolaci;
        this.ime = ime;
        this.prezime = prezime;
    }

    napraviKolac() {
        console.log("Napravila sam:" + this.kolaci);
    }

    static statickaMetoda(){
        console.log("Ja sam bakina staticka metoda")
    }
}

const mojaBaka = new Baka("bakini kolaci, ruske kape, palacinke", "Ana", "Antonic")

mojaBaka.napraviKolac();
// mojaBaka.statickaMetoda();

Baka.statickaMetoda();



class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y
    }

    plus(tacka) {
        let zbirDveTacke = new Point(this.x + tacka.x, this.y + tacka.y)
        return zbirDveTacke;
    }
}

const t1 = new Point(1,3);
const t2 = new Point(4,6);


const t3 = t1.plus(t2)






class Character {
    constructor() {
        if (this.constructor === Character) {
            throw new Error("Ne mozete instancirati objekat klase Character!")
        }

        this.location = new Point(
            Math.ceil(Math.random() * 10),
            Math.ceil(Math.random() * 10)
        );
        if (Character.numberOfCharacters) {
            Character.numberOfCharacters++;
        } else {
            Character.numberOfCharacters = 1;
        }
        console.log("Broj instanciranih karaktera", Character.numberOfCharacters)
    }

    get position() {
        return `X: ${this.location.x}, Y: ${this.location.y}`
    }

    set position(point) {
        if (point.x > 10 || point.x < 1 || point.y > 10 || point.y < 1) {
            throw new Error("Coordinates out of bounds")
        }
        this.location.x = point.x;
        this.location.y = point.y;
    }

}


class PlayerCharacter extends Character {
    constructor() {
        super()
    }
}

class NonPlayerCharacter extends Character {

}


const playerCharacter = new PlayerCharacter()
const playerCharacter2 = new NonPlayerCharacter()
const playerCharacter3 = new PlayerCharacter()
const playerCharacter4 = new NonPlayerCharacter()
const playerCharacter5 = new PlayerCharacter()

playerCharacter3.position = new Point(3,4)
playerCharacter3.position = new Point(0,4)


console.log(playerCharacter.position)
// playerCharacter.position = new Point(3,4)




const obj = {
    username: "vladica",
    password: "123456",
    addres: {
        street: "djasldjkasl",
        number: "dasdsad",
        city: "Novi Sad"
    }
}


const  { username } = obj


console.log("Username", username)