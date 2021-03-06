//Arcanine
//http://fizal.me/pokeapi/api/59.json
//Magneton
//http://fizal.me/pokeapi/api/82.json
//Duskell
//http://fizal.me/pokeapi/api/355.json





class Trainer {

    constructor(trainername = "Richardo-AI", height = 800, weight = 21100, gender = "male", hp = 399, type = "human") {
        this.trainername = trainername;
        this.height = height;
        this.weight = weight;
        this.gender = gender;
        this.hp = hp;
        this.type = type;
        this.trainerArray = []; //stores pokedex for the trainer
        
    }
    //adds pokemon
    addPokemon(pk) {
        this.trainerArray.push(pk);
    }
    //returns trainer stats
    trainerStats() {
        return `
            ${this.trainername}
            ${this.type}
            ${this.height}
            ${this.weight}
            ${this.gender}
            ${this.hp}
        `;
    }
    getArray(){
        return this.trainerArray;
    }
    get name(){
        return this.trainername
    }

    gettrainer(){//returns all pokemons for that specific trainer
        return (this.trainername,
                this.trainerArray.forEach(element =>{
                    console.log(element)
                }))
                
    }
    //Requiement returns an array of data
    //get all Pokemon and render to screen on cards
    getAllPokemon() {


        let div = document.getElementById("myList1");
        let divCard = document.createElement("div");
        divCard.setAttribute("id", "attriblist");
        this.trainerArray.forEach(element => { //use element.whatever to get data
            let divCard = document.createElement("div");

            divCard.innerHTML = `
            <h2 class="center teal">${this.trainername}</h2>
            <h3 class="header myListName">${element.name}</h3>
            <div class="card horizontal">
            <div class="card-image">
                 <img class="pokeList" src="${element.image}" alt="Arcanine" width="200">
            </div>
            <div class="card-stacked">
                <div class="card-content myListContent">
                    <p>ID: ${element.id}\u00A0\u00A0\u00A0\u00A0\ Held Item: ${element.item }\u00A0\u00A0\u00A0\u00A0\  Type: ${element.type}</p>
                    <p>Height: ${element.height  }\u00A0\u00A0\u00A0\u00A0\ Weight: ${element.weight}\u00A0\u00A0\u00A0\u00A0\ Ability: ${element.ability}</p>
                    <p>Attack: ${element.attack  }\u00A0\u00A0\u00A0\u00A0\ Defense: ${element.defense}\u00A0\u00A0\u00A0\u00A0\ Speed: ${element.speed} </p>
                    <p>Special Attack: ${element.specialAttack  }\u00A0\u00A0\u00A0\u00A0\ Special Defense: ${element.specialDefense}</p>
                    <h3>Making Moves with Accuracy, Power and Priority</h3>
                    <p>${this.trainerArray[0].moves[0]}</p>
                    <p>${this.trainerArray[0].moves[1]}</p>
                    <p>${this.trainerArray[0].moves[2]}</p>
                    <p>${this.trainerArray[0].moves[3]}</p>
            </div>
                
            </div>
            </div>
            `
            div.appendChild(divCard);

        });

    }

}
class Pokeman {
    constructor(id, name, type, item, ability,
        height, weight, speed, attack, hp, defense,
        specialAttack, specialDefense, moves,
        image) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.item = item;
        this.ability = ability;
        this.height = height;
        this.weight = weight;
        this.speed = speed;
        this.attack = attack;
        this.hp = hp;
        this.defense = defense;
        this.specialAttack = specialAttack;
        this.specialDefense = specialDefense;
        this.moves = moves; //contains move name and accuracy, power, priority
        this.image = image;

    }
}







//for internal testing
let obj = {};



//The below is search for the pokemans, gets that pokemans and stores to a new trainer name, oh yeah baby!

//this is to get any pokemon and display it on a card//

function getThePokemans(trainername, response) {
    axios.get(`https://fizal.me/pokeapi/api/${response}.json`)
        .then(function (res) {
            let bing = res.data;
            // console.log(bing);

            // I used return console log and pushed data to my to obj for testing. I used functions and some variables for data.
            function getId() {
                console.log(`ID: ${bing.id}`);
                obj.id = bing.id;
                return bing.id;
            }
            
            function getName() {
                console.log(bing.name);
                obj.name = bing.name;
                return bing.name;
            }

            function getType() {
                console.log(`Type: ${bing.types[0].type.name}`);
                obj.type = bing.types[0].type.name;
                return bing.types[0].type.name;
            }


            function getItem() {
                let stuff = bing.held_items[0];
                if (stuff === undefined) {
                    console.log(`Item: none`);
                    obj.item = "None";
                    return `None`;
                } else {
                    console.log(`Item: ${bing.held_items[0].item.name}`);
                    obj.item = `${bing.held_items[0].item.name}`;
                    return `${bing.held_items[0].item.name}`;
                }
            }


            function getAbility() {
                abil = bing.abilities.length;
                let randAbil = Math.floor(Math.random() * abil);
                console.log(`Ability: ${bing.abilities[randAbil].ability.name}`);
                obj.ability = `${bing.abilities[randAbil].ability.name}`;
                return `${bing.abilities[randAbil].ability.name}`;
            }


            function getHeight() {
                console.log(`Height: ${bing.height}`);
                obj.height = bing.height;
                return bing.height;
            }


            function getWeight() {
                console.log(`Weight: ${bing.weight}`);
                obj.weight = bing.weight;
                return bing.weight;
            }


            function getStats() {
                for (let k = 0; k < bing.stats.length; k++) {
                    console.log(`${bing.stats[k].stat.name}: ${bing.stats[k].base_stat} `);


                    
                }
               

            }
                obj.speed = `${bing.stats[0].stat.name}: ${bing.stats[0].base_stat} `;
                let speed = `${bing.stats[0].stat.name}: ${bing.stats[0].base_stat} `;
                obj.hp = `${bing.stats[5].base_stat}`;
                let hp = `${bing.stats[5].base_stat}`;
                obj.specialDefense = `${bing.stats[1].stat.name}: ${bing.stats[1].base_stat} `;
                let specialDefense = `${bing.stats[1].stat.name}: ${bing.stats[1].base_stat} `;
                obj.specialAttack = `${bing.stats[2].stat.name}: ${bing.stats[2].base_stat} `;
                let specialAttack = `${bing.stats[2].stat.name}: ${bing.stats[2].base_stat} `;
                obj.defense = `${bing.stats[3].stat.name}: ${bing.stats[3].base_stat} `;
                let defense = `${bing.stats[3].stat.name}: ${bing.stats[3].base_stat} `;
                obj.attack = `${bing.stats[4].stat.name}: ${bing.stats[4].base_stat} `;
                let attack = `${bing.stats[4].stat.name}: ${bing.stats[4].base_stat} `;
            
            //four moves only. Call new axios for moves and accruacy, power and priority
            function getMoves() {
                makingMoves = bing.moves;
                let move = [];
                let ctr = makingMoves.length;
                for (let i = 0; i < 4; i++) {
                    let randMoves = Math.floor(Math.random() * ctr);
                    axios.get(makingMoves[randMoves].move.url)
                        .then(function (resBonus) {
                            let bong = resBonus.data;
                            //console.log(bong);
                            console.log(
                                `Moves${i}: ${makingMoves[randMoves].move.name}
                             Accruacy: ${bong.accuracy}
                             Power: ${bong.power}
                             Priority: ${bong.priority}`);

                            move.push(`Moves${i}: \u00A0\u00A0${makingMoves[randMoves].move.name}\u00A0\u00A0
                                                    Accuracy: ${bong.accuracy}\u00A0\u00A0
                                                    Power: ${bong.power}\u00A0\u00A0
                                                    Priority: ${bong.priority}`);

                        }).catch(function (response) {
                            console.error(response);
                        })
                }
                return obj.moves = move;//for testing purpoese

            }

            function getImage() {
                console.log(`Image: ${bing.sprites.front_shiny}`);
                obj.image = `${bing.sprites.front_shiny}`
                return bing.sprites.front_shiny;
            }

            //below is constructor information
            // id, name, type, item, ability,
            // height, weight, speed, attack, hp, defense,
            // specialAttack, specialDefense, moves,
            // image) 

            
            let nameofPOke = bing.name;

            nameofPOke = new Pokeman(getId(),
                getName(), getType(), getItem(),
                getAbility(), getHeight(), getWeight(),
                bing.stats[0].base_stat, bing.stats[4].base_stat,
                bing.stats[5].base_stat, bing.stats[3].base_stat, bing.stats[2].base_stat,
                bing.stats[1].base_stat, getMoves(), bing.sprites.front_shiny);

            let divcardSearch = document.getElementById("getSearchPoke");
            let divInfo = document.createElement("div");
            divInfo.setAttribute("class", "center");
            divInfo.innerHTML = `
            <h2 class="center teal">Trainer Name: ${trainername.trainername}</h2>
            <h4 class="center teal">Height: ${trainername.height}\u00A0\u00A0\ Weight: ${trainername.weight}\u00A0\u00A0\ Gender: ${trainername.gender}\u00A0\u00A0\ 
            HP: ${trainername.hp}\u00A0\u00A0\ Type: ${trainername.type}</h4>
            <h3 class="header myListName">${getName()}</h3>
            <div class="card horizontal">
            <div class="card-image">
                 <img class="pokeList" src="${bing.sprites.front_shiny}" alt="Arcanine" width="200">
            </div>
            <div class="card-stacked">
                <div class="card-content myListContent">
                    <p>ID: ${getId()}\u00A0\u00A0\u00A0\u00A0\ Held Item: ${getItem() }\u00A0\u00A0\u00A0\u00A0\  Type: ${getType()}</p>
                    <p>Height: ${getHeight() }\u00A0\u00A0\u00A0\u00A0\ Weight: ${getWeight()}\u00A0\u00A0\u00A0\u00A0\ Ability: ${getAbility()}</p>
                    <p>Attack: ${attack  }\u00A0\u00A0\u00A0\u00A0\ Defense: ${defense  }\u00A0\u00A0\u00A0\u00A0\ HP:${hp} </p>
                    <p>Special Attack: ${specialAttack  }\u00A0\u00A0\u00A0\u00A0\ Special Defense: ${specialDefense}\u00A0\u00A0\u00A0\u00A0\  ${speed}</p>
                    
            </div>
                
            </div>
            </div> `
            
            
            divcardSearch.appendChild(divInfo);
            
            console.log( trainername);//name does get passed and printed to console.
            
            
            trainer = new Trainer(trainername.trainername,trainername.height,trainername.weight,trainername.gender,trainername.hp,trainername.type)
            trainer.addPokemon(nameofPOke);
            

        }).catch(function (response) {
            console.error(response);
        })

}
//////////////////The above is search for the pokemans, gets that pokemans and stores to a new trainer name, oh yeah baby!


//Arcanine
axios.get(`https://fizal.me/pokeapi/api/59.json`)
    .then(function (res) {
        let bing = res.data;
        // console.log(bing);
        // I used return console log and pushed data to my to obj for testing. I used functions and some variables for data.
        function getId() {
            console.log(`ID: ${bing.id}`);
            obj.id = bing.id;
            return bing.id;
        }

        function getName() {
            console.log(bing.name);
            obj.name = bing.name;
            return bing.name;
        }

        function getType() {
            console.log(`Type: ${bing.types[0].type.name}`);
            obj.type = bing.types[0].type.name;
            return bing.types[0].type.name;
        }


        function getItem() {
            let stuff = bing.held_items[0];
            if (stuff === undefined) {
                console.log(`Item: none`);
                obj.item = "None";
                return `None`;
            } else {
                console.log(`Item: ${bing.held_items[0].item.name}`);
                obj.item = `${bing.held_items[0].item.name}`;
                return `${bing.held_items[0].item.name}`;
            }
        }


        function getAbility() {
            abil = bing.abilities.length;
            let randAbil = Math.floor(Math.random() * abil);
            console.log(`Ability: ${bing.abilities[randAbil].ability.name}`);
            obj.ability = `${bing.abilities[randAbil].ability.name}`;
            return `${bing.abilities[randAbil].ability.name}`;
        }


        function getHeight() {
            console.log(`Height: ${bing.height}`);
            obj.height = bing.height;
            return bing.height;
        }


        function getWeight() {
            console.log(`Weight: ${bing.weight}`);
            obj.weight = bing.weight;
            return bing.weight;
        }


        function getStats() {
            for (let k = 0; k < bing.stats.length; k++) {
                console.log(`${bing.stats[k].stat.name}: ${bing.stats[k].base_stat} `);


                
            }
            obj.speed = `${bing.stats[0].stat.name}: ${bing.stats[0].base_stat} `;
            obj.hp = `${bing.stats[5].base_stat}`;
            obj.specialDefense = `${bing.stats[1].stat.name}: ${bing.stats[1].base_stat} `;
            obj.specialAttack = `${bing.stats[2].stat.name}: ${bing.stats[2].base_stat} `;
            obj.defense = `${bing.stats[3].stat.name}: ${bing.stats[3].base_stat} `;
            obj.attack = `${bing.stats[4].stat.name}: ${bing.stats[4].base_stat} `;

        }

        //four moves only. Call new axios for moves and accruacy, power and priority
        function getMoves() {
            makingMoves = bing.moves;
            let move = [];
            let ctr = makingMoves.length;
            for (let i = 0; i < 4; i++) {
                let randMoves = Math.floor(Math.random() * ctr);
                axios.get(makingMoves[randMoves].move.url)
                    .then(function (resBonus) {
                        let bong = resBonus.data;
                        //console.log(bong);
                        console.log(
                            `Moves${i}: ${makingMoves[randMoves].move.name}
                                 Accruacy: ${bong.accuracy}
                                 Power: ${bong.power}
                                 Priority: ${bong.priority}`);

                        move.push(`Moves${i}: \u00A0\u00A0${makingMoves[randMoves].move.name}\u00A0\u00A0
                                                 Accuracy: ${bong.accuracy}\u00A0\u00A0
                                                 Power: ${bong.power}\u00A0\u00A0
                                                 Priority: ${bong.priority}`);

                    }).catch(function (response) {
                        console.error(response);
                    })
            }
            return obj.moves = move;

        }

        function getImage() {
            console.log(`Image: ${bing.sprites.front_shiny}`);
            obj.image = `${bing.sprites.front_shiny}`
            return bing.sprites.front_shiny;
        }
    
        arcanine = new Pokeman(getId(),
            getName(), getType(), getItem(),
            getAbility(), getHeight(), getWeight(),
            bing.stats[0].base_stat, bing.stats[4].base_stat,
            bing.stats[5].base_stat, bing.stats[3].base_stat, bing.stats[2].base_stat,
            bing.stats[1].base_stat, getMoves(), bing.sprites.front_shiny);

        let divcard1 = document.getElementById("divcd1");
        let divInfo = document.createElement("div");
        divInfo.setAttribute("class", "center");
        divInfo.innerHTML = `
                <span class="white-text">Pokémon</span>
                <p class="white-text">  ${getName()} Type: ${getType()} Held Item: ${getItem()}</p>
                <img class="sizeImag1" src="${bing.sprites.front_shiny}" alt="Arcanine" width="100">
                <p class="poketext white-text">Arcanine is know for its high speed.
                It is said to be capable of running over 6,200 miles in a single day and
                night.  The fire that blazes widly within this Pokémon's body is its source of power.</p>
                <p>HP: ${bing.stats[5].base_stat}   Attack: ${bing.stats[4].base_stat}   Defense: ${bing.stats[3].base_stat}
                  Ability: ${getAbility()}</p>
                <p>Special Attack: ${bing.stats[2].base_stat} Special Defense: ${bing.stats[1].base_stat} </p>
                
                </div>`;
        divcard1.appendChild(divInfo);

        rich.addPokemon(arcanine);

    }).catch(function (response) {
        console.error(response);
    })



//Magneton
axios.get(`https://fizal.me/pokeapi/api/82.json`)
    .then(function (res) {
        let bing = res.data;
       
        // console.log(bing);
        // I used return console log and pushed data to my to obj for testing. I used functions and some variables for data.
       
        function getId() {
            console.log(`ID: ${bing.id}`);
            obj.id = bing.id;
            return bing.id;
        }

        function getName() {
            console.log(bing.name);
            obj.name = bing.name;
            return bing.name;
        }

        function getType() {
            console.log(`Type: ${bing.types[0].type.name}`);
            obj.type = bing.types[0].type.name;
            return bing.types[0].type.name;
        }


        function getItem() {
            let stuff = bing.held_items[0];
            if (stuff === undefined) {
                console.log(`Item: none`);
                obj.item = "None";
                return `None`;
            } else {
                console.log(`Item: ${bing.held_items[0].item.name}`);
                obj.item = `${bing.held_items[0].item.name}`;
                return `${bing.held_items[0].item.name}`;
            }
        }


        function getAbility() {
            abil = bing.abilities.length;
            let randAbil = Math.floor(Math.random() * abil);
            console.log(`Ability: ${bing.abilities[randAbil].ability.name}`);
            obj.ability = `${bing.abilities[randAbil].ability.name}`;
            return `${bing.abilities[randAbil].ability.name}`;
        }


        function getHeight() {
            console.log(`Height: ${bing.height}`);
            obj.height = bing.height;
            return bing.height;
        }


        function getWeight() {
            console.log(`Weight: ${bing.weight}`);
            obj.weight = bing.weight;
            return bing.weight;
        }


        function getStats() {
            for (let k = 0; k < bing.stats.length; k++) {
                console.log(`${bing.stats[k].stat.name}: ${bing.stats[k].base_stat} `);


                
            }
            obj.speed = `${bing.stats[0].stat.name}: ${bing.stats[0].base_stat} `;
            obj.hp = `${bing.stats[5].base_stat}`;
            obj.specialDefense = `${bing.stats[1].stat.name}: ${bing.stats[1].base_stat} `;
            obj.specialAttack = `${bing.stats[2].stat.name}: ${bing.stats[2].base_stat} `;
            obj.defense = `${bing.stats[3].stat.name}: ${bing.stats[3].base_stat} `;
            obj.attack = `${bing.stats[4].stat.name}: ${bing.stats[4].base_stat} `;

        }
        


        function getMoves() {
            makingMoves = bing.moves;
            let move = [];
            let ctr = makingMoves.length;
            for (let i = 0; i < 4; i++) {
                let randMoves = Math.floor(Math.random() * ctr);
                axios.get(makingMoves[randMoves].move.url)
                    .then(function (resBonus) {
                        let bong = resBonus.data;
                        //console.log(bong);
                        console.log(
                            `Moves${i}: ${makingMoves[randMoves].move.name}
                                 Accruacy: ${bong.accuracy}
                                 Power: ${bong.power}
                                 Priority: ${bong.priority}`);

                        move.push(`Moves${i}: \u00A0\u00A0${makingMoves[randMoves].move.name}\u00A0\u00A0
                                                 Accuracy: ${bong.accuracy}\u00A0\u00A0
                                                 Power: ${bong.power}\u00A0\u00A0
                                                 Priority: ${bong.priority}`);
                        return `Moves${i}: ${makingMoves[randMoves].move.name}
                                 Accruacy: ${bong.accuracy}
                                 Power: ${bong.power}
                                 Priority: ${bong.priority}`;


                    }).catch(function (response) {
                        console.error(response);
                    })
            }
            obj.moves = move;

        }

        function getImage() {
            console.log(`Image: ${bing.sprites.front_shiny}`);
            obj.image = `${bing.sprites.front_shiny}`
            return `${bing.sprites.front_shiny}`;
        }
        magneton = new Pokeman(getId(),
            getName(), getType(), getItem(),
            getAbility(), getHeight(), getWeight(),
            bing.stats[0].base_stat, bing.stats[4].base_stat,
            bing.stats[5].base_stat, bing.stats[3].base_stat, bing.stats[2].base_stat,
            bing.stats[1].base_stat, getMoves(), bing.sprites.front_shiny);


        let divcard2 = document.getElementById("divcd2");
        let divInfo = document.createElement("div");
        divInfo.setAttribute("class", "center");
        divInfo.innerHTML = `
                <span class="white-text">Pokémon</span>
                <p class="white-text">${getName()} Type: ${getType()} Held Item: ${getItem()}</p>
                <img class="sizeImag1" src="${bing.sprites.front_shiny}" alt="Magneton" width="100">
                <p class="poketext white-text">Magneton emits a powerful magnetic force that is fatal to mechanical
                devices.  As a result, large cities sound sirens to warn citizens of large
                scale out breaks of this type of pokémon.</p>
                <p>HP: ${bing.stats[5].base_stat}   Attack: ${bing.stats[4].base_stat}   Defense: ${bing.stats[3].base_stat}
                  Ability: ${getAbility()}</p>
                <p>Special Attack: ${bing.stats[2].base_stat} Special Defense: ${bing.stats[1].base_stat} </p>
                
                </div>`;
        divcard2.appendChild(divInfo);
        rich.addPokemon(magneton);
    }).catch(function (response) {
        console.error(response);
    })

//Duskell
axios.get(`https://fizal.me/pokeapi/api/355.json`)
    .then(function (res) {
        let bing = res.data;
        // console.log(bing);
        // I used return console log and pushed data to my to obj for testing. I used functions and some variables for data.

        function getId() {
            console.log(`ID: ${bing.id}`);
            obj.id = bing.id;
            return bing.id;
        }

        function getName() {
            console.log(bing.name);
            obj.name = bing.name;
            return bing.name;
        }

        function getType() {
            console.log(`Type: ${bing.types[0].type.name}`);
            obj.type = bing.types[0].type.name;
            return bing.types[0].type.name;
        }


        function getItem() {
            let stuff = bing.held_items[0];
            if (stuff === undefined) {
                console.log(`Item: none`);
                obj.item = "None";
                return `None`;
            } else {
                console.log(`Item: ${bing.held_items[0].item.name}`);
                obj.item = `${bing.held_items[0].item.name}`;
                return `${bing.held_items[0].item.name}`;
            }
        }


        function getAbility() {
            abil = bing.abilities.length;
            let randAbil = Math.floor(Math.random() * abil);
            console.log(`Ability: ${bing.abilities[randAbil].ability.name}`);
            obj.ability = `${bing.abilities[randAbil].ability.name}`;
            return `${bing.abilities[randAbil].ability.name}`;
        }


        function getHeight() {
            console.log(`Height: ${bing.height}`);
            obj.height = bing.height;
            return bing.height;
        }


        function getWeight() {
            console.log(`Weight: ${bing.weight}`);
            obj.weight = bing.weight;
            return bing.weight;
        }


        function getStats() {
            for (let k = 0; k < bing.stats.length; k++) {
                console.log(`${bing.stats[k].stat.name}: ${bing.stats[k].base_stat} `);


                
            }
            obj.speed = `${bing.stats[0].stat.name}: ${bing.stats[0].base_stat} `;
            obj.hp = `${bing.stats[5].base_stat}`;
            obj.specialDefense = `${bing.stats[1].stat.name}: ${bing.stats[1].base_stat} `;
            obj.specialAttack = `${bing.stats[2].stat.name}: ${bing.stats[2].base_stat} `;
            obj.defense = `${bing.stats[3].stat.name}: ${bing.stats[3].base_stat} `;
            obj.attack = `${bing.stats[4].stat.name}: ${bing.stats[4].base_stat} `;

        }

        //four moves only. Call new axios for moves and accruacy, power and priority
        function getMoves() {
            makingMoves = bing.moves;
            let move = [];
            let ctr = makingMoves.length;
            for (let i = 0; i < 4; i++) {
                let randMoves = Math.floor(Math.random() * ctr);
                axios.get(makingMoves[randMoves].move.url)
                    .then(function (resBonus) {
                        let bong = resBonus.data;
                        //console.log(bong);
                        console.log(
                            `Moves${i}: ${makingMoves[randMoves].move.name}
                                 Accruacy: ${bong.accuracy}
                                 Power: ${bong.power}
                                 Priority: ${bong.priority}`);

                        move.push(`Moves${i}: \u00A0\u00A0${makingMoves[randMoves].move.name}\u00A0\u00A0
                                                    Accuracy: ${bong.accuracy}\u00A0\u00A0
                                                    Power: ${bong.power}\u00A0\u00A0
                                                    Priority: ${bong.priority}`);

                        return `Moves${i}: ${makingMoves[randMoves].move.name}
                                 Accruacy: ${bong.accuracy}
                                 Power: ${bong.power}
                                 Priority: ${bong.priority}`;


                    }).catch(function (response) {
                        console.error(response);
                    })
            }
            obj.moves = move;

        }

        function getImage() {
            console.log(`Image: ${bing.sprites.front_shiny}`);
            obj.image = `${bing.sprites.front_shiny}`
            return `${bing.sprites.front_shiny}`;
        }
        duskell = new Pokeman(getId(),
            getName(), getType(), getItem(),
            getAbility(), getHeight(), getWeight(),
            bing.stats[0].base_stat, bing.stats[4].base_stat,
            bing.stats[5].base_stat, bing.stats[3].base_stat, bing.stats[2].base_stat,
            bing.stats[1].base_stat, getMoves(), bing.sprites.front_shiny);


        let divcard3 = document.getElementById("divcd3");
        let divInfo = document.createElement("div");
        divInfo.setAttribute("class", "center");
        divInfo.innerHTML = `
            <span class="white-text">Pokémon</span>
            <p class="white-text">${getName()} Type:${getType()} Held Item: ${getItem()}</p>
            <img class="sizeImag1" src="${bing.sprites.front_shiny}" alt="Duskell" width="100">
            <p class="poketext white-text">Duskell can pass through any wall no matter
            how thick it may be. Once this pokémon chooses a target, it will doggedly
            pursue the intended victim until the break of dawn.</p>
            <p>HP: ${bing.stats[5].base_stat}   Attack: ${bing.stats[4].base_stat}   Defense: ${bing.stats[3].base_stat}
                  Ability: ${getAbility()}</p>
                <p>Special Attack: ${bing.stats[2].base_stat} Special Defense: ${bing.stats[1].base_stat} </p>
               
                
            </div>`;
        divcard3.appendChild(divInfo);

        rich.addPokemon(duskell);

    }).catch(function (response) {
        console.error(response);
    })



//for buttons to return home
let goHome = document.querySelector("#goHome");
goHome.addEventListener("click", functionThis);

function functionThis() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
let goHome1 = document.querySelector("#goHome1");
goHome1.addEventListener("click", functionThis);

function functionThis() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
let goHome2 = document.querySelector("#goHome2");
goHome2.addEventListener("click", functionThis);

function functionThis() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
document.getElementById("myBtn").addEventListener("click", displayPokeList);

function displayPokeList() {
    rich.getAllPokemon();
}
let go2Home = document.querySelector("#broo");
go2Home.addEventListener("click", functionThisToo);

function functionThisToo() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//instansiates my trainer for me
let rich = new Trainer();
rich.getArray()
rich.getAllPokemon()


//below gets data to build a new trainer and pokemans collections
// Requiement to meet a such is met below for any pokemon
function gettheID(){
    let getPokID = document.getElementById('inputNumber').value;
    let numId = parseInt(getPokID);
    return numId;
}
function gettheHeight(){
    let getH = document.getElementById('inputheight').value;
    let numH = parseInt(getH);
    return numH;
}
function gettheWeight(){
    let getW = document.getElementById('inputweight').value;
    let numW = parseInt(getW);
    return numW;
}
function gettheGender(){
    let getG = document.getElementById('inputgender').value;
    return getG;   
}
function gettheHp(){
    let getHp= document.getElementById('inputhp').value;
    let numHp = parseInt(getHp);
    return numHp;
}
function gettheType(){
    let getT = document.getElementById('inputtype').value;
    return getT;   
}

function gettheName(){
    let getTrainName = document.getElementById('inputTrainerName').value;
    getTrainName = new Trainer(getTrainName,gettheHeight(),gettheWeight(),gettheGender(),gettheHp(),gettheType());
    return getTrainName;
}

document.getElementById("getsIt").addEventListener("click", searchThem);
function searchThem(){
   getThePokemans(gettheName(), gettheID());   
   
}
