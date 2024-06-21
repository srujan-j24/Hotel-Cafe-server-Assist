let a = 5;

if(a == 5){
    let a = 8;
    console.log(a);
}else{
    console.log(a)
}





for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
        if(i == j){
            process.stdout.write("x ")
        }
        else{
            process.stdout.write("  ")
        }
    }
    console.log()
}