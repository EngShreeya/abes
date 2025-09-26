SubmitEvent(1,2,3,4,5,6,7,89,90,12);
let arr=[];
const sum=(...args)=>{
    console.log(args);
    args.forEach(
    (ele)=>{
        if(ele%2==0){
            arr.push(ele);
        }
    }
    )
    return arr;
}
const output= sum(1,2,3,4,5,6,7);
console.log(output);