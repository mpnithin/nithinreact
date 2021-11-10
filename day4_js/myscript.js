let text="the rain in spain is heavy always";
let ans=text.match(/ain/g);
document.getElementById("id1").innerHTML=ans;

//return true or false if word found or not
let ans1=text.includes("world");
document.getElementById("id2").innerHTML=ans1;

let ans2=text.startsWith("rain",4);
document.getElementById("id2").innerHTML=ans2;

//string interpolation
let na1="ram";
let na2="hari";
let fullname=`welcome ${na1} and ${na2} to JS`;
document.getElementById("id3").innerText=fullname;

//string sorting
const veg=["potato","brinjal","tomato","spinach"];
veg.sort();
document.getElementById("id4").innerText=veg;

//number sorting
const int=[11,,22,5,4,2];
int.sort(function(a,b){return a-b;});//ascending oder
int.sort(function(a,b){return b-a;});//decreasing sort
document.getElementById("id5").innerText="after sort ="+int;
//date in JS

const dt1=new Date();
const dt2=new Date(2020,0);
const dt3=new Date(2015,14,30,5,20,10,2);//yr,month,date,hr,sec,millisec higher months given overflow to next month
const dt4=new Date(95,4,10);//cannot have 1 parameter then it is millisec

const dt5=new Date("2020-03-25T12:10:05Z");//z denote railway time zone
document.getElementById("id6").innerText=dt1;
document.getElementById("id7").innerText=dt2;
document.getElementById("id8").innerText=dt3;
document.getElementById("id9").innerText=dt4;//prev century year
document.getElementById("id10").innerText=dt5;

