


export class Person {
    // public name?: string;
    // // public -- palabra reservada para usar la propiedad de la clase en otros archivos
    // private address?: string;  
    // // private -- palabra reservada para usar solamente de forma interna a la clase.

    // // el constructor es un metodo 
    // constructor(name:string, address:string) {
    //     this.name = name;
    //     this.address = address;
    // }

    constructor(
        public firstName:string,
        public lastName: string, 
        private address:string = 'Not Found'){

    }
    // esta forma de constructor es mas utilizada, y será necesaria mas adelante en inyeccion de dependencias.
}


// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string 
//     ){
//         super(realName, 'New york')
//     }

// }

export class Hero  {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string, 
        // Es mejor poner la extencion o herencia aqui:
        public person: Person
    ){
       // Esta forma terminaria afectando a la clase Hero// this.person = new Person(realName)
    }

}


const tony = new Person('Tony','Stark', 'New York');
const ironman = new Hero ('Ironman', 45, 'Tony', tony);
console.log(ironman);