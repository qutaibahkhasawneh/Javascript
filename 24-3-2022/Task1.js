console.log("task1")

let me = {
    fname:"qutaibah",
    lname :"khasawneh",
    age:27,
    dob:"4/09/1995",
    fFood:["fish","meet","salad"],
    fMovie : ["den of thevies","invesble guest ","sxyfull","no time to die"]
}
console.log("****************")
console.log("task2")

var persons1 = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 },
  ];
  
  function firstName(par1){
      let arr =[]
       for(let i=0 ; i < par1.length ; i++ ){
     
            arr.push(par1[i].name.first)
     
        }
        return arr;
  }

    console.log(firstName(persons1))


    console.log("****************")
    console.log("task3")

    function averageAge(person){
        let sum=0;
        for(let i =0 ; i<person.length ; i++){
            sum+=person[i].age
        }
        return sum/(person.length);
    }
    console.log(averageAge(persons1))
console.log("****************")
console.log("task4")

function olderPerson(obj){
    let str =""
    let old=obj[0].age
    for(let i =0 ; i<obj.length ; i++){
        if(old<obj[i].age){
            old = obj[i].age
            str=obj[i].name.first +" "+ obj[i].name.last
        }
    }

    return str
}

console.log(olderPerson(persons1))


console.log("****************")
console.log("task5")

function longestName(obj){
    let fullName = obj[0].name.first + " " +obj[0].name.last;
    let testName = ""
    for(let i =0 ; i<obj.length;i++){
        testName = obj[i].name.first + " "+obj[i].name.last
        if(fullName.length<testName.length){
            fullName = testName;
        }
    } 
    return fullName
}

console.log(longestName(persons1))

console.log("****************")
console.log("task6")
/*
Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/
console.log("****************")
console.log("task7")

function repeatWord(obj){
    let arr = obj.toLowerCase().split(" ")
    let finalObject ={}
    let count=0;
    let newArray =[];
    for(let i =0 ; i<arr.length;i++){
        newArray = arr[i]
        count = 0 ;
        for(let j=0;j<arr.length;j++){
            if(newArray==arr[j]){
                count++
                finalObject[arr[i]]=count
            }
            
        }
        
    }

    return finalObject
}
console.log(repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO"))



console.log("****************")
console.log("task8")

function repeatChar(obj){
    let arr = obj.toLowerCase().split("")
    let finalObject ={}
    let count=0;
    let newArray =[];
    for(let i =0 ; i<arr.length;i++){
        newArray = arr[i]
        count = 0 ;
        for(let j=0;j<arr.length;j++){
            if(newArray==arr[j]){
                count++
                finalObject[arr[i]]=count
            }
        }
        
    }
    return finalObject
}


console.log("****************")
console.log("task9")

function selectFromObject(obj , arr){
    let p = obj
    let array = Object.keys(p);
    for(let i =0 ; i<arr.length;i++){
        if(array[i]!=arr[i]){
            delete p[array[i]]
        }
    }
    return p;
}


console.log(selectFromObject({a: 1, cat: 3 , b:2 , d:15}, ['a', 'cat', 'd']));