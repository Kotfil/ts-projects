import React from 'react';
import './App.css';
import Tests, {splitIntoWords} from "./Tests";
import Lesson4 from "./Lesson4";

function App() {
    // // const fil = {name: 'fil'};
    // const fil = new Object({
    //     name : {
    //         value: 'fil'
    //     }
    // })

    // class Man {
    //     constructor(name) {
    //         this.name = name;
    //     }
    // }
    //
    //
    // class Filipp extends Man{}
    // console.log((new Man('fil')))
    //
    // console.log(Man.prototype)
    //

        // 1. Simple object
        let man = {
        name: 'John',
        age: 28
    };

        let manFullCopy = {...man}


        // 2. Array of primitives
        let numbers = [1, 2, 3];

        let numbersFullCopy  = [...numbers]


        // 3. Object inside an object
        let man1 = {
        name: 'John',
        age: 28,
        mother: {
        name: 'Kate',
        age: 50
    }
    };

        let man1FullCopy = {...man1,mother: {...man1.mother} }

        // 4. Array of primitives inside an object
        let man2 = {
        name: 'John',
        age: 28,
        friends: ["Peter", "Steven", "William"]
    };

        let man2FullCopy  = {...man2, friends:[...man2.friends]}

        // 5 Array of objects
        let people = [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
        ];

        let peopleFullCopy  = people.map(a => ({...a}))

        // 6 Array of objects inside object
        let man3 = {
        name: 'John',
        age: 28,
        friends: [
    {name: "Peter", age: 30},
    {name: "Steven", age: 32},
    {name: "William", age: 28}
        ]
    };

        let man3FullCopy = {...man3, friends: [...man3.friends.map(i => i)]} //  your code

        // 7 Object inside an object, inside an object
        let man4 = {
        name: 'John',
        age: 28,
        mother: {
        name: "Kate",
        age: 50,
        work: {
        position: "doctor",
        experience: 15
    }
    }
    };

        let man4FullCopy //  your code
        man4FullCopy = {...man4}
        man4FullCopy.mother = {...man4.mother}
        man4FullCopy.mother.work = {...man4.mother.work}

        // 8 Array of objects inside object -> object
        let man5 = {
        name: 'John',
        age: 28,
        mother: {
        name: "Kate",
        age: 50,
        work: {
        position: "doctor",
        experience: 15
    },
        parents: [
    {name: "Kevin", age: 80},
    {name: "Jennifer", age: 78},
        ]
    }
    };
        let man5FullCopy //  your code
        man5FullCopy = {...man5}
        man5FullCopy.mother = {...man5.mother}
        man5FullCopy.mother.work = {...man5.mother.work}
        man5FullCopy.mother.parents = {...man5.mother.parents}


        // 9 Object inside an object -> array -> object ->  object
        let man6 = {
        name: 'John',
        age: 28,
        mother: {
        name: "Kate",
        age: 50,
        work: {
        position: "doctor",
        experience: 15
    },
        parents: [
    {
        name: "Kevin",
        age: 80,
        favoriteDish: {
        title: "borscht"
    }
    },
    {
        name: "Jennifer",
        age: 78,
        favoriteDish: {
        title: "sushi"
    }
    },
        ]
    }
    };

        let man6FullCopy  //  your code
        man6FullCopy = {...man6,mother: {...man6.mother, parents: man6.mother.parents.map(i => ({...i,favoriteDish: {...i.favoriteDish}}))}}



        //10 Array of objects inside an object -> object -> array -> object ->  object
        let man7 = {
        name: 'John',
        age: 28,
        mother: {
        name: "Kate",
        age: 50,
        work: {
        position: "doctor",
        experience: 15
    },
        parents: [
    {
        name: "Kevin",
        age: 80,
        favoriteDish: {
        title: "borscht",
        ingredients: [
    {title: "beet", amount: 3},
    {title: "potatoes", amount: 5},
    {title: "carrot", amount: 1},
        ]
    }
    },
    {
        name: "Jennifer",
        age: 78,
        favoriteDish: {
        title: "sushi",
        ingredients: [
    {title: "fish", amount: 1},
    {title: "rise", amount: 0.5}
        ]
    }
    },
        ]
    }
    };

        let man7FullCopy  //  your code
        man7FullCopy = {...man7,mother: {...man7.mother,parents: man7.mother.parents.map(i => ({...i,favoriteDish: {...i.favoriteDish.ingredients} }))}}

    const unicorns = [
        {
            name: 'bob',
            age: '30',
            color: 'red',
            favoriteFruitId: 1,
            active: true
        },
        {
            name: 'john',
            age: '20',
            color: 'blue',
            favoriteFruitId: 2,
            active: false
        },
        {
            name: 'jane',
            age: '25',
            color: 'black',
            favoriteFruitId: 1,
            active: true
        },
        {
            name: 'doge',
            age: '21',
            color: 'yellow',
            active: true
        },
        {
            name: 'cate',
            age: '33',
            color: 'white',
            favoriteFruitId: 1,
            active: true
        }
    ]

    const fruits = [
        {
            id: 1,
            name: 'apple'
        },
        {
            id: 2,
            name: 'watermelon'
        }
    ]

    const a = (unicorns) => {
        let unicornsCopy = [...unicorns]
        if(unicornsCopy) {
            const noCat = unicornsCopy.filter(i => i.name !== 'cate')
            const activ = noCat.filter(i => i.active === true)
            const black = activ.filter(i => i.color !== 'black')
            black.find(t => {
                if(t.name === 'doge') {
                    let s = t
                    s.muchWow = true
                    s.suchFat = true
                    s.lovesCate = false
                    console.log(s)
                    let d = unicornsCopy.sort((t, t2) =>  Number(t2.age) - Number(t.age))
                    console.log(d)
                }
            })
        }
    }
    console.log(a(unicorns))

    // if (unicornsCopy) {
    //     let d = unicornsCopy.sort((t, t2) =>  Number(t2.age) - Number(t.age))
    // }


    // -------------------------------------------------------
    //
    // const unicornsCopy = [...unicorns]
    // let activ = unicornsCopy.filter(i => i.active === true)
    // console.log(activ)
    // -------------------------------------------------------
    // const unicornsCopy = [...unicorns]
    // let black = unicornsCopy.filter(i => i.color !== 'black')
    // console.log(black)
    // -------------------------------------------------------
    // const unicornsCopy = [...unicorns]
    // let black = unicornsCopy.filter(i => i.color !== 'black')
    // console.log(black)
    // -------------------------------------------------------
    // alert(fruits[0].name)
    // alert(fruits[1].name)
    //
    // const unicornsCopy = [...unicorns,]
    // let a = unicornsCopy.find(t => {
    //     if(t.name === 'doge') {
    //         let s = t
    //         s.muchWow = true
    //         s.suchFat = true
    //         s.lovesCate = false
    //      return s
    //     }
    // })
    // console.log(a)
    // -------------------------------------------------------
    //
    // const unicornsCopy = [...unicorns]





    return (
    <div className="App">

    </div>
  );
}

export default App;
