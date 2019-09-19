
function count(str) {
    regexp=/[a]/ig;
    let result=str.match(regexp);
    num=result.length;
    console.log(num);
}
function splitStr(str) {
    let arr=str.split(" ")
    console.log(arr)
    return arr
}
function replaceStr(str,str1,str2) {
    let result=str.replace(str1,str2);
    console.log(result)
}
let str = "Tôi yêu ngôn ngữ lập trình Javascript";
let str1="Javascript";
let str2="Typescript";
count(str);
splitStr(str);
replaceStr(str,str1,str2);
