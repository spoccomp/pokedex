//Arcanine
//http://fizal.me/pokeapi/api/59.json
//Magneton
//http://fizal.me/pokeapi/api/82.json
//Duskell
//http://fizal.me/pokeapi/api/355.json

function getThePokemans(response) {
    axios.get(`http://fizal.me/pokeapi/api/${response}.json`)
        .then(function (res) {
            let bing = res.data;
            console.log(bing);
            console.log(bing.name);
            console.log(`ID: ${bing.id}`);
            if(bing.held_items[0] === undefined){
                console.log(`Item: none`);
            }else{
            console.log(`Item: ${bing.held_items[0].item.name}`);
            }
            let abil = bing.abilities.length;
            let randAbil = Math.floor(Math.random() * abil);
            console.log(`Ability: ${bing.abilities[randAbil].ability.name}`);
            console.log(`Height: ${bing.height}`);

            
            //four moves only. Call new axios for moves and accruacy, power and priority
            let ctr = bing.moves.length;
            for (let i = 0; i < 4; i++) {
                let randMoves = Math.floor(Math.random() * ctr);
                axios.get(bing.moves[randMoves].move.url)
                    .then(function (resBonus) {
                        let bong = resBonus.data;
                        // console.log(bong);
                        console.log(
                            `Moves${i}: ${bing.moves[randMoves].move.name}
                Accruacy: ${bong.accuracy}
                Power: ${bong.power}
                Priority: ${bong.priority}`);
                    }).catch(function (response) {
                        console.error(response);
                    })
            }

            console.log(`Type: ${bing.types[0].type.name}`);
            console.log(`Weight: ${bing.weight}`);
            for (let k = 0; k < bing.stats.length; k++) {
                console.log(`${bing.stats[k].stat.name}: ${bing.stats[k].base_stat} `);
            }
            console.log(`Image: ${bing.sprites.front_shiny}`)
        }).catch(function (response) {
            console.error(response);
        })
}

let pokeman = prompt("Catch a pokemon, pick a number between 1 and 807: ");
getThePokemans(pokeman);
//Arcanine
// let arcanine = axios.get("http://fizal.me/pokeapi/api/59.json")
//     .then(function (res) {
//         let bing = res.data;
//         console.log(bing);
//         console.log(bing.name);
//         console.log(`ID: ${bing.id}`);
//         console.log(`Item: ${bing.held_items[0].item.name}`);
//         let abil = bing.abilities.length;
//             let randAbil = Math.floor(Math.random()* abil);
//         console.log(`Ability: ${bing.abilities[randAbil].ability.name}`);
//         console.log(`Height: ${bing.height}`);
//         let ctr = bing.moves.length;



//         for(let i=0;i<4;i++){
//             let randMoves = Math.floor(Math.random()*ctr);   
//              axios.get(bing.moves[randMoves].move.url)
//             .then(function (resBonus) {
//                 let bong = resBonus.data;
//                 // console.log(bong);
//                 console.log(
//                 `Moves${i}: ${bing.moves[randMoves].move.name}
//                 Accruacy: ${bong.accuracy}
//                 Power: ${bong.power}
//                 Priority: ${bong.priority}`);
//             }).catch(function (response) {
//                 console.error(response);
//         })
//         }

//         console.log(`Type: ${bing.types[0].type.name}`);
//         console.log(`Weight: ${bing.weight}`);
//         for(let k=0;k<bing.stats.length;k++){
//             console.log(`${bing.stats[k].stat.name}: ${bing.stats[k].base_stat} `);
//         }
//     }).catch(function (response) {
//         console.error(response);
// })

//Magneton
// let magneton = axios.get("http://fizal.me/pokeapi/api/82.json")
// .then(function (res) {
//         let bing = res.data;
//         console.log(bing);


//     }).catch(function (response) {
//         console.error(response);
// })
//Duskell
// let duskell = axios.get("http://fizal.me/pokeapi/api/355.json")
// .then(function (res) {
//         let bing = res.data;
//         console.log(bing);


//     }).catch(function (response) {
//         console.error(response);
// })

class Pokeman {
    constructor(name,id,abilities,height,type,weight,speed, 
        specialDefense,specialAttack,defense,attack,hp,imageSprite,
        move1,move2,move3,move4) {
        this.name = name;
        this.id = id;
        this.abilities =  abilities;
        this.height = height;
        this.type = type;
        this.weight = weight;
        this.speed = speed;
        this.specialDefense = specialDefense;
        this.specialAttack = specialAttack;
        this.defense = defense;
        this.attack = attack;
        this.hp = hp;
        this.imageSprite = imageSprite;
        this.move1 = move1;
        this.move2 = move2;
        this.move3 = move3;
        this.move4 = move4;
    }

}
class Trainer {
    constuctor(name,
        height, weight, gender, hp, type, attack, defense,
        specialAttack, specialDefense, ability1, ability2,
        move1, move2, move3, move4, pokemanNum) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.gender = gender;
        this.hp = hp;
        this.type = type;
        this.attack = attack;
        this.defense = defense;
        this.specialAttack = specialAttack;
        this.specialDefense = specialDefense;
        this.ability1 = ability1;
        this.ability2 = ability2;
        this.move1 = move1;
        this.move2 = move2;
        this.move3 = move3;
        this.move4 = move4;
        this.pokeman = pokemanNum;
        this.trainerArray = [];
    }
    putPokemanInCage(poke){
        this.trainerArray.push(poke);
    }
    namedAll(){
        return this.trainerArray;
    }
    // get named (name){
    //     return name;
    // }
}

////**********************TODO */
//create web page
//create theme JS web page for type of each pokemon
//test and finish classes
//pull one trainer pokeman, pull all my trainer pokeman
//build my seach in the webpage to display the pokemon
//animation for my ideas
//behavioral JS such as buttons, hover, clicks
//try to get the sprites on the webAPI axios pull to the webpage in cards