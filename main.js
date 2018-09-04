"use strict";
// 1- Type Script Hello world
// function helloWorld(message){
//     console.log(message);
// }
Object.defineProperty(exports, "__esModule", { value: true });
// var message = 'Hello World';
// helloWorld(message);
// 2- var and let keyword in type script
// function doSomething(){
//     for(var i = 0; i < 5; i++ ){
//         console.log(i);
//     }
//     console.log('Finally:' +i);
// }
// doSomething();
// function doSomething(){
//     for(let i = 0; i < 5; i++ ){
//         console.log(i);
//     }
//     console.log('Finally:' +i); // Throwing error because i is scoped
//     // to nearest block
// }
// doSomething();
// let log = function message (){
//     console.log(message);
// }
// // 3- Types in type script
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3,4]; // or
// let f: any[] = [1,true,'hello',false];
// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;
// enum Color {Red = 0, Green = 1, Blue = 2};
// let backgroundColor = Color.Blue;
// 4 - Type Assertions
// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');
// 5- Arrow function in typeScript using => 
// In javascript we will create function like
// let log = function(message){
//     console.log(message);
// }
// // but in type script we can create function using arrow 
// let typeFunction = (message) => {
//     console.log(message);
// }
// // if function is one line of code then we can write
// let doLog = (message) => console.log(message);
// // if we don't have parameters then we can write
// let funcType = () => console.log();
// 6- Interfaces in type script
// interface Point{
//     x: number,
//     y:number
// }
// let drawPoint = (point:Point) => {
//     //..
// }
// drawPoint({
//     x:1,
//     y:2
// })
// 7 - Class in type script
// class Point{
//     X: number;
//     Y: number;
//     draw(){
//         console.log('X:' + this.X + ',Y:' + this.Y);
//     }
//     getDistance(another:Point){
//         //..
//     }
// }
// // create object of class point
// let point = new Point()
// point.X = 1;
// point.Y = 2;
// point.draw();
// 8- Constructor in typeScript
// class Point{
//     x: number;
//     y: number;
//     constructor (x?:number, y?:number){ // x? mean we make it optional
//         this.x = x;
//         this.y = y;
//     }
//     draw(){
//         console.log('X: '+ this.x + 'Y: ' + this.y)
//     }
// }
// let point = new Point();
// point.draw();
// 9- Access Modifiers in TypeScript
// Public, Private & Protected
// class Point{
//     private x: number;
//     private y: number;
//     constructor (x?:number, y?:number){ // x? mean we make it optional
//         this.x = x;
//         this.y = y;
//     }
//     draw(){
//         console.log('X: '+ this.x + 'Y: ' + this.y)
//     }
// }
// let point = new Point();
// // Here we can't access x and y because its private and it is
// // inside point class
// point.draw();
// 10- Access Modifiers in constructor parameter
// class Point{
//     constructor (private x?:number, private y?:number){
//     }
//     draw(){
//         console.log('X: '+ this.x + ' Y: ' + this.y)
//     }
// }
// let point = new Point(1,2);
// point.draw();
// // 11 - Property
// class Point{
//     constructor (private _x?:number, private _y?:number){
//     }
//     draw(){
//         console.log('X: '+ this._x + ' Y: ' + this._y)
//     }
//     get x(){
//         return this._x;
//     }
//     set x(value){
//         if(value < 0)
//         throw new Error('Value cannot be less than 0.');
//         this._x = value;
//     }
// }
// let point = new Point(1,2);
// let x = point.x;
// point.x = 20;
// point.draw();
// 12- Modules
// import {Point} from './point'
// let point = new Point(1,2);
// point.draw();
// 13 - Soultion of challenge
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(4, true);
component.onClick();
console.log("likesCount: " + component.likeCounts + ", isSelected: " + component.isSelected);
