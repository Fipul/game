export class PersonStr {
    id: string;
    name: string;
    armor: string;
    attack: string;
    health: string;
    img: string;
    "alt-img": string;
}

export class Person {
    id: number;
    name: string;
    armor: number;
    attack: number;
    health: number;
    img: string;
    altimg: string;
}

function toPerson(personStr: PersonStr): Person {
    return {
        id: parseInt(personStr.id, 10),
        name: personStr.name,
        armor: parseInt(personStr.armor, 10),
        attack: parseInt(personStr.attack, 10),
        health: parseInt(personStr.health, 10),
        img: personStr.img,
        altimg: personStr["alt-img"]
    };
}

export class ItemStr {
    id: string;
    name: string;
    price: string;
    armor: string;
    attack: string;
    health: string;
    img: string;
}

export class Item {
    id: number;
    name: string;
    price: number;
    armor: number;
    attack: number;
    health: number;
    img: string;
}

function toItem(itemStr: ItemStr): Item {
    return {
        id: parseInt(itemStr.id, 10),
        name: itemStr.name,
        price: parseInt(itemStr.price, 10),
        armor: parseInt(itemStr.armor, 10),
        attack: parseInt(itemStr.attack, 10),
        health: parseInt(itemStr.health, 10),
        img: itemStr.img
    };
}

export class EquipmentStr {
    helmets: ItemStr[];
    gloves: ItemStr[];
    chests: ItemStr[];
    boots: ItemStr[];
    swords: ItemStr[];
}

export class Equipment {
    helmets: Item[];
    gloves: Item[];
    chests: Item[];
    boots: Item[];
    swords: Item[];
}

function toEquipment(equipmentStr: EquipmentStr): Equipment {
    return {
        helmets: equipmentStr.helmets.map(i => toItem(i)),
        gloves: equipmentStr.gloves.map(i => toItem(i)),
        chests: equipmentStr.chests.map(i => toItem(i)),
        boots: equipmentStr.boots.map(i => toItem(i)),
        swords: equipmentStr.swords.map(i => toItem(i))
    };
}

export class DataStr {
    person: PersonStr;
    equipment: EquipmentStr;
}

export class Data {
    person: Person;
    equipment: Equipment;
}

export function toData(dataStr: DataStr): Data {
    return {
        person: toPerson(dataStr.person),
        equipment: toEquipment(dataStr.equipment)
    }
}