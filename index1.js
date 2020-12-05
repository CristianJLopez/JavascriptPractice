//HERENCIA
class Animal{
	constructor(name){
		this.name = name
	}
speak(){
	console.log(this.name + ' makes a noise.')
	}
}
class Dog extends Animal{
	speak(){
		console.log(this.name + ' barks')
	}
}
let dog = new Dog('Rex')
dog.speak()
let fox = new Animal('Foxy') 
fox.speak()

class Cat extends Animal{
	speak(){
		console.log('Hello my name is '+ this.name +' and I am a cat.' )
	}
	walk(){
		console.log('My first steps')
	}
}
let iguano = new Cat('Iguano')
iguano.speak()
iguano.walk()

//Ahora con super
class Donkey extends Animal{
	speak(){
		super.speak()//Esto lo trae de Animal
		console.log(this.name + ' is Donkey in english')
	}
} 
let burro = new Donkey('Burro')
burro.speak()

//MAP Y SET 
//Objeto Map
let map = new Map ([['k1', 'v1'], ['k2', 'v2']])
console.log(map.size)
console.log(map.get('k1'))

let map1 = new Map()
map.set('k3','v3').set('k4', 'v4')
console.log(map.get('k4'))
console.log(map.has('k3')) 

for (let kv of map.entries())
	console.log(kv[0] +" : "+ kv[1])

//Objeto Set
let set = new Set ([1, 2, 4, 2, 59, 9, 4, 9, 1])
console.log(set.size)

let set2 = new Set()
set.add(7).add(76).add(75).add(71)
console.log(set2.has(7))
for (let v of set2.values())
console.log(v) 

