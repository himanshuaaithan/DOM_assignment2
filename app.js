let teams =[
    {
        name:"Rajsthan Royals",
        captain_name: "Sanju Samson",
        winning_year: "2008",
        color:"pink",
        secondary_color:"blue,pink"
    },
    {
        name:"Chennai Super Kings",
        captain_name: "Ms Dhoni",
        winning_year: "2010, 2011, 2018, 2021, 2023",
         color:"yellow",
        secondary_color:"blue,yellow"
    },
     {
        name:"Mumbai Indians",
        captain_name: "Rohit Sharma",
        winning_year: "2013, 2015, 2017, 2019, 2020",
        color:"blue",
        secondary_color:"goldan,blue"
    },
    {
        name:"Sunrisers Hyderabad",
        captain_name: "Pat Cummins",
        winning_year: "2016",
        color:"orange",
        secondary_color:"black,orange"
    },
    {   
        name:"Kolkata Knight Riders",
        captain_name: "Ajinkya Rahane",
        winning_year: "2012, 2014, 2024",
        color:"purple ",
        secondary_color:"gold,purple"
    },
    {   
        name:"Delhi Capitals",
        captain_name: "Axar Patel",
        winning_year: "not win yet",
        color:"blue",
        secondary_color:"red,blue"
    },
     {   
        name:"Lucknow Super Giants",
        captain_name: "Rishabh Pant ",
        winning_year: "not win yet",
        color:"darkblue",
        secondary_color:"gray,darkblue"
    },
    {   
        name:"Gujarat Titans",
        captain_name: "Shubman Gill ",
        winning_year: "2022",
        color:"darkblue",
        secondary_color:"gold,darkblue"
    },
    {   
        name:" Royal Challengers Bengaluru",
        captain_name: "Virat Kohli ",
        winning_year: "2025",
        color:"red",
        secondary_color:"black,red"
    },
    {   
        name:" Punjab Kings",
        captain_name: "Shreyas Iyer  ",
        winning_year: "not win yet",
        color:"red",
        secondary_color:"red,black"
    }
]

let btn = document.querySelector("button");
let main = document.querySelector("main");
let h1 = document.querySelector("#team h1");
let captain= document.querySelector("#captain");
let h2 = document.querySelector("#team h2");
let team = document.querySelector("#team");




btn.addEventListener("click",function(){
  let num = Math.floor(Math.random()*teams.length);
  h1.innerHTML=`${teams[num].name}`;
  captain.innerHTML=` captain name: ${teams[num].captain_name}`;
  h2.innerHTML=`winning years: ${teams[num].winning_year}`;
  main.style.background=`linear-gradient(${teams[num].secondary_color})`;
  team.style.backgroundColor=`${teams[num].color}`;
  team.style.padding="0.6rem 2rem";
  team.style.border="2px solid white";

})
