let a = [2,7,8,1]
console.log(a)
let t = 9
let n = a.length
for(i = 0;i <= n; i++) {
    let m = t - a[i]

    for(j=i;j <= n; j++) {
        if(m == a[j])
        {
            console.log(a[j])
            console.log(a[i])
            
        }
    }
    
}

