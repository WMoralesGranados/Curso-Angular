



function addNumbers(a:number, b:number){
    return a + b;
}


const addNumbersArrow = (a: number, b:number) => {
    return `${a + b}`;
}


function muliply(firtNumber: number, secondNumber?: number, base: number = 2){
    return firtNumber * base;
}


// const result: number = addNumbers(1, 2 );
// const result2: string = addNumbersArrow (1 ,2);
// const muliplyResult:number = muliply(5);


interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}
healCharacter(strider, 10);
strider.showHp()








export {}