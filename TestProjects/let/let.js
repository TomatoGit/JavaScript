// for(let i=0;i<10;i++){
//     console.log(i);
// }
// console.log("----------");  //便于观察
// //console.log(i); //如果let只将i绑定在for循环中，那么此处会抛出异常，否则会显示最后一次i的值    结果：抛出异常

// console.log("----------");  //便于观察
// console.log("----------");  //便于观察

{
    let j;
    for(j=0;j<10;j++){
        let i=j;    //每次循环重新绑定i
        console.log(i);
    }
    // console.log(i);  //同上
}