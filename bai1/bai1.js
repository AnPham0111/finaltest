let maxs=[]
function findMax(arr){
    let max=arr[0];
    let n=0;
    for (let i = 1; i < arr.length; i++) {
        if(max<arr[i]){
            max=arr[i]
            n=i;
        }
    }
    arr.splice(n,1)
    maxs.push(max)
}
score = [7,8,9,10,6]
for (let i=0;i<3;i++){
    findMax(score)
}
alert(maxs[2])
