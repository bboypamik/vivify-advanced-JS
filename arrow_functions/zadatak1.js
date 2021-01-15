class Queue {
    constructor() {
        this.niz = []
    }

    enqueue(e) {
        this.niz.push(e)
    }

    dequeue() {
        return this.niz.shift()
    }

    front() {
        return this.niz[0]
    }

    isEmpty() {
        return !this.niz.length
    }

}

class Customer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    receiveLetter({ sender, text }) {
        console.log(`Letter sent by ${sender.firstName}.`)
        console.log(`He wrote this: ${text}`)
    }

}

class Letter {
    constructor(sender, receiver, text) {
        this.sender = sender;
        this.receiver = receiver;
        this.text = text;
    }
}

class PostOffice {
    constructor() {
        this.letters = new Queue()
        setInterval(() => {
            try{
                this.sendLetter()
            } catch(e) {
                console.log(e.message)
            }
        }, 3000)

    }

    receiveLetter(letter) {
        if (letter.sender === letter.receiver) {
            throw Error("Can't send letter to yourself!")
            return;
        }
        this.letters.enqueue(letter)
    }

    sendLetter() {
        if (this.letters.isEmpty()) {
            console.log("No more letters", this.letters.length)
        } else {
            if (Math.random() < 0.1) {
                this.letters.dequeue();
                throw Error("LETTER LOST!")
            }   
            setTimeout(() => {
                console.log("Sending letter...")
                const letterToSend = this.letters.dequeue();
                letterToSend.receiver.receiveLetter(letterToSend)
            }, 1000)
        } 
    }
}

const customer1 = new Customer("Vlada", "Antonic")
const customer2 = new Customer("Marko", "Gatalo")
const customer3 = new Customer("Nemanja", "Milic")
const customer4 = new Customer("Aleksandar", "Sajatovic")
const customer5 = new Customer("Nevena", "Uscebrka")
const customer6 = new Customer("Miroslav", "Pantos")
const customer7 = new Customer("Neven", "Vuckovic")
const customer8 = new Customer("Dragana", "Isak")
const customer9 = new Customer("Jovan", "Zoric")
const customer10 = new Customer("Ranka", "Jovanovic")

const postOffice = new PostOffice();
const letter1 = new Letter(customer1, customer2, "Pismo 1, cao")
const letter2 = new Letter(customer2, customer3, "Pismo 1, cao")
const letter3 = new Letter(customer3, customer4, "Pismo 1, cao")
const letter4 = new Letter(customer4, customer5, "Pismo 1, cao")
const letter5 = new Letter(customer5, customer6, "Pismo 1, cao")
const letter6 = new Letter(customer6, customer7, "Pismo 1, cao")
const letter7 = new Letter(customer7, customer8, "Pismo 1, cao")
const letter8 = new Letter(customer8, customer9, "Pismo 1, cao")
const letter9 = new Letter(customer9, customer10, "Pismo 1, cao")
const letter10 = new Letter(customer10, customer10, "Pismo 1, cao")


try {
    postOffice.receiveLetter(letter1)
    postOffice.receiveLetter(letter2)
    postOffice.receiveLetter(letter3)
    postOffice.receiveLetter(letter4)
    postOffice.receiveLetter(letter5)
    postOffice.receiveLetter(letter6)
    postOffice.receiveLetter(letter7)
    postOffice.receiveLetter(letter8)
    postOffice.receiveLetter(letter9)
    postOffice.receiveLetter(letter10)
}
catch(e) {
    console.log(e.message)
}
// postOffice.receiveLetter(letter10)