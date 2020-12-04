//EJERCICIOS DE CALENTAMIENTO
var texto1 = "Hola mi nombre es Cristian Lopez"
var texto2 = " aprendo JavaScript.<br>"
document.write(texto1 + texto2);

var x = "50"
var y = "200"
document.write(x+y);


//CONDICIONALES

var myNum1 = 7
var myNum2 = 10

//CONDICION VERDADERA
if (myNum1<myNum2) {
	alert("Javascript is easy to learn.")
}

//CONDICION FALSA
if (myNum2<myNum1) {
	alert("Javascript is hard to learn.")
}

//EVALUANDO CONDICION VERDADERO O FALSO 
if (myNum1>myNum2) {
	alert("This is my first condition.")
}
else{
	alert("This is my second condition.")
}

//OPCION DE SEGUNDA CONDICION ELSE IF
var course = 3
if (course == 1) {
	document.write("<h1>HTML Tutorial</h1>")
}
else if (course == 2) {
	document.write("<h1>CSS Tutorial</h1>")
}
else{
	document.write("<h1>JAVASCRIPT Tutorial</h1>")
}

//EVALUANDO MULTIPLES CONDICIONES CON SWITCH
var day = 2
switch (day){
	case 1:
		document.write("Monday<br>")
		break
	case 2:
		document.write("Tuesday<br>")
		break
	case 3:
		document.write("Wednesday<br>")
		break
	default:
		document.write("Another day<br>")
}

//BUCLE FOR
for (i=1; i<=5; i++){
	document.write( i + "<br>")
}

//BUCLE WHILE
var i = 0
while (i<10){
	document.write(i+"<br>")
	i++
}

//BUCLE DO WHILE
var i = 20
do {
	document.write(i+"<br>")
	i++
}
while(i<=25)

//ROMPER BUCLE CON BREAK
for (i=0; i<=10; i++){
	if (i==5){
		break
	}
	document.write(i+"<br>")
}

//EXCLUIR UNA ITERACION Y CONTINUAR BUCLE CON CONTINUE
for (i=0; i<=10; i++){
	if (i==5, 6){
		continue
	}
	document.write(i+"<br>")
}

//EJEMPLOS FUNCIONES
function sayHello(name, age){
	document.write(name+" is "+age+" years old." )
}
sayHello("Cristian", 26)
//--retorna multiplicacion
function myFunction(a, b){
	return a*b
}
myFunction(5, 6)

//VENTANAS
alert("Do you really want to leave this page?")

var user = prompt("Please enter your name")
alert(user)

var result = confirm("Do you really want to leave this page?")
if (result == true) {
	alert("Thanks for visiting")
}
else{
	alert("Thanks for staying with us")
}


//---------------ES6----------------//

//DIFERENCIA ENTRE VAR Y LET
function varTest(){
	var x = 1;
	if (true) {
		var x = 2;
		console.log(x);
	}
	console.log(x);
}

function letTest(){
	let x = 1;
	if (true) {
		let x = 2;
		console.log(x);
	}
	console.log(x);
}

//LET EN UN FOR
for (let i = 0; i<3; i++){
	document.write(i)
}

//TEMPLATE LITERALS
let name = "Cristian Lopez"
let msg = `Welcome ${name}`
console.log(msg)

let a = 8
let b = 34 
let msg1 = `The sum is: ${a+b}`
console.log(msg1)

// BUCLES Y FUNCIONES
let list = ["x","y","z"]
for (let val of list){
	console.log(val)
}

//Funciones con ES6
const test = (a, b=3, c=42)=>{
	return a+b+c
}
console.log(test(5))

//OBJETOS
let tree ={
	height: 10,
	color: 'green',
	grow(){
		this.height +=2
	}
}
tree.grow()
console.log(tree.height)

let height =5
let health =100

let athlete = {
	height,
	health
}
console.log(athlete)

let prop = 'name'
let id = '1234'
let mobile = '08923'

let user1 ={
	[prop]: 'Jack', [`user1_${id}`]: `${mobile}`
}
console.log(user1)

//---------

var i = 0
var aa = {
	['foo' + ++i]: i,
	['foo' + ++i]: i,
	['foo' + ++i]: i
}
console.log(aa)

var param = 'size'
var config = {
	[param]: 12,
	['mobile' +
	param.charAt(0).toUpperCase() + param.slice(1)]:4
}
console.log(config)

//CREAR NUEVO OBJETO A PARTIR DE DOS FUENTES
let person = {
	name: 'Jack',
	age: 18,
	sex: 'male'
}
let student ={
	name:'bob',
	age:20,
	xp:'2'
}
let newStudent = Object.assign({},person, student)
console.log(newStudent)

let person1 = {
	name: 'Jack',
	age: 18
}
let newPerson = Object.assign({}, person1, {name:'Bob'})
console.log(newPerson)

//DESESTRUCTURACION
let arr = ['1', '2', '3']
let [one, two, three] = arr
console.log(one)
console.log(two)
console.log(three)

//DESCOMPONER ARRAY DEVUELTO POR FUNCION
let a1 = () =>{
	return[1, 3, 2]
}
let [one1, , two1] = a1()
console.log(one1)

//DESCOMPONIENDO OBJETOS
let obj = {h:100, s:true}
let {h, s} = obj 
console.log(h)
console.log(s)

let r, u
({r, u} = {r: 'Hello ', u:'Instructor'})
console.log(r+u)

let{r1, u1} = {r1:'Hello ', u1:'Jack'}
console.log(r1+u1)

var o = {h: 42, s:true}
var {h: foo, s: bar} =o
console.log(foo)

var obj1 = {id1: 42, name: "Jack"}
let {id1 = 10, age = 20} =obj1
console.log(id1)
console.log(age)

//REST Y SPREAD
function containsAll(arr, ...nums){
	for (let num of nums){
		if(arr.indexOf(num)=== -1){
			return false 
	}
		}
		return true
}

//SPREAD EN FUNCIONES
//Antes
function myFunction(w, x, y, z){
	console.log(w+x+y+z)
}
var args = [1, 2, 3]
myFunction.apply(null, args.concat(4))
//Ahora
const myFunctionn = (w, x, y, z) =>{
	console.log(w+x+y+z)
}
let argss = [1, 2, 3]
myFunctionn(...argss, 4)
console.log(myFunctionn)

var dateFields = [1970, 0, 1]
var date = new Date(...dateFields)
console.log(date)

//SPREAD EN LITERALS DE ARRAYS
//Antes 
var arr2 = ["One", "Two", "Five"]
arr2.splice(2, 0, "Three")
arr2.splice(3, 0, "Four")
console.log(arr2)

//Ahora
let newArr = ["Three", "Four"]
let arr1 = ['One', 'Two', ...newArr, 'Five']
console.log(arr1)

//SPREAD EN LITERALS DE OBJETOS
const obj11 = { foo: 'bar', x: 42}
const obj2 = { foo: 'baz', y: 5}

const clonedObj = {...obj11}
const mergedObj = {...obj11, ...obj2}
console.log(mergedObj, clonedObj)

const merge = (...objects)=>({...objects})
let mergedObj1 = merge(obj11, obj2)
console.log(mergedObj1)


//CLASES
class Rectangle{
	constructor(height, width){
		this.height = height
		this.width = width
	}
}
// a partir de la anterior clase, con new Rectangle creamos otras
const square = new Rectangle(5, 5)
const poster = new Rectangle(2, 3)

//METODOS DE CLASE
class Rectangle1{
	constructor(height, width){
		this.height = height
		this.width = width
	}
	get area(){
		return this.calcArea()
	}
	calcArea(){
		return this.height * this.width
	}
}
const square1 = new Rectangle1(5, 5)
console.log(square1.area)

const sqcris = new Rectangle1(10, 54)
console.log(sqcris.area)

class Point {
	constructor(x, y){
		this.x = x
		this.y = y
	}
	static distance (a, b){
		const dx = a.x - b.x
		const dy = a.y - b.y
		return Math.hypot(dx, dy)
	}
}
const p1 = new Point (7, 2)
const p2 = new Point (3, 8)
console.log(Point.distance(p1, p2))