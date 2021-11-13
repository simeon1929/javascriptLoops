// get and set method 

console.log('Get and Set method'); // Accerer property

var employee1 = {
    name : ' simeon',
    bonus1 : 0,
    slary : 15000,
    yoJ : 2015
}


Object.defineProperty(employee1, 'bounus',{
    get : function(){
        return this.bonus1
    },
    set : function(newBonus) {
        if(newBonus <= 20 && this.yoJ < 2021){
            this.bonus1 = newBonus;
        }
    }
})

employee1.bonus1 = 400

console.log(employee1);