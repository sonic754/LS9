const arr = ["olma" , "dolma" , "anjir"]
const userlist = prompt("savatda 3 meva bor olma , dolma , anjir 1 ni bosip qoshin yoki 2 ni bosip ochiriptashlang")
if(userlist == "1"){
const newfruit =  prompt("qaysi meva qoshamiz?")
 arr.push(newfruit)
 alert(arr)
}
else if(userlist == "2"){
    const delFruit = prompt("qaysi meva ochiramiz?");
 if(delFruit == "olma"){
    arr.shift(delFruit)
 }
 else if(delFruit == "anjir"){
    arr.pop(delFruit)
 }
 else if(delFruit == "dolma"){
    arr.pop(delFruit)
    arr.pop(delFruit)
    arr.push("anjir")
 }

    alert(arr);
}

