const Person = {
    firstName: 'Fadhil',
    lastName: 'Atmojo',
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    },
    height: 170,
    weight:750,
    weightIdeal: function(){
        const heightMinus100 = this.height - 100;
        return heightMinus100 - (heightMinus100*10/100);
    },

    // latihan if condition di dalam objek
    goodEnough: function(){
        const weightIdeal = this.weightIdeal();
        const fullName = this.fullName();
        if(weightIdeal - 5 > this.weight)
        return fullName + " ,You need to add " + (weightIdeal - this.weight) +" Kg to your weight.";
        else if(weightIdeal + 5 < this.weight)
        return fullName + " ,You need to reduce " + (this.weight - weightIdeal) + " Kg to your weight.";
        return "You are in a good shape";
    },

};

console.log(`Weight Ideal: ${Person.weightIdeal()}`);
console.log(Person.goodEnough());


//conditional challange
// if(Person.isWeightIdeal()){
//     console.log(`${Person.fullName()} badanmu ideal`);
// } else{
//     console.log(`${Person.fullName()} awakmu elek`);
// };

// //optional chaining

// const countries = {
//     ID:{
//         province:['Jateng', 'Jabar', 'Jatim', 'DIY'],
//         city:['yogya', 'bali', 'jakarta'],
//     },
//     MY:{},
// }

// console.log(countries.TH?.province ?? '404 Not Found');

