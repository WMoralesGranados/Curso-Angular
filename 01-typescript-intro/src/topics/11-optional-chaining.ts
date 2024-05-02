

export interface Passenger {
    name: string;
    children?: string[]

}

const passenger1: Passenger = {
    name: 'Fernando',

}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Elizabeth'],
    
}

const  printChildren = ({name,children}: Passenger) => {
    const howManyChildren = children?.length || 'Not children';
    console.log(name, howManyChildren);
} 

printChildren(passenger1);


