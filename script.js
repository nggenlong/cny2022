let english_phrase =[
      "(Congratulations and Prosperity)",
      "(Everything goes well)",
      "(Business flourishes)",
      "(A Happy New Year to you)", 
      "(May all your wishes come true)",  
      "(Money and treasures will be plentiful)" ,
      "(Surplus year-after-year)"  ,  
      "(Happiness for the whole family)" , 
      "(Peace and happiness)", 
      "(Good luck and life according to your wishes)",
      "(May the five blessings come to you)",
      "(May you have instant success)",
      "(May you achieve success in all that you do)",
      "(Wishing you good health)",
      "(May wealth come pouring in)",
]

let chinese_phrase=[
["恭","喜","发","财"],
["万","事","如","意"],
["生","意","兴","隆"],
["恭","贺","新","年"],
["心","想","事","成"],
["财","源","广","进"],
["年","年","有","余"],
["阖","家","欢","乐"],
["幸","福","安","康"],
["吉","祥","如","意"],
["五","福","临","门"],
["马","到","成","功"],
["万","事","胜","意"],
["身","体","健","康"],
["财","源","滾","滾"],
]
 
let pin_yin=[
    ["gōng","xǐ","fā","cái"],
    ["wàn","shì","rú","yì"],
    ["shēng","yì","xīng","lóng"],
    ["gōng","hè","xīn","nián"],
    ["xīn","xiǎng","shì","chéng"],
    ["cái","yuán","guǎng","jìn"],
    ["nián","nián","yǒu","yú"],
    ["hé","jiā","huān","lè"],
    ["xìng","fú","ān","kāng"],
    ["jí","xiáng","rú","yì"],
    ["wǔ","fú","lín","mén"],
    ["mǎ","dào","chéng","gōng"],
    ["wàn","shì","shèng","yì"],
    ["shēn","tǐ","jiàn","kāng"],
    ["cái","yuán","gǔn","gǔn"],
]
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var english = document.getElementById("el");
var onClick = function() {
    let num = Math.floor(Math.random()*english_phrase.length);
    english.textContent=english_phrase[num];
    p1.textContent = pin_yin[num][0];
    p2.textContent = pin_yin[num][1];
    p3.textContent = pin_yin[num][2];
    p4.textContent = pin_yin[num][3];
    c1.textContent = chinese_phrase[num][0];
    c2.textContent = chinese_phrase[num][1];
    c3.textContent = chinese_phrase[num][2];
    c4.textContent = chinese_phrase[num][3];
}
button.addEventListener("click",onClick)
