let a = []
a.push('2')
a.push('3')
a.push('4')


let s = a[0]
let n = a.length

for(i = 0; i <= n; i++) {
    if( s < a[i] ) {
     s = a[i]
    }

}
console.log(s)  
console.log(Math.max(...a));

--------------------------
let a = [2,3,4,5,7,9]
let t = 1
let n = a.length
let b=[]
for(i = 0;i <= n; i++) {
    if(t == a[i]) {
        console.log(i)
    }
    else if (t >= a[i]) {   
        b.push(i)        
    }

}
let m = Math.max(...b)
let p = m + 1
console.log(p+"-th position is for number--"+t)
------------------------------
let a = [2,3,4,5,7,9]
let t = 0
let n = a.length
let b =[]
for(i = 0;i <= n; i++) {
    if(t == a[i]) {
        console.log(i)

    }
    else if(t < a[i]) {
        let c = i-1
        console.log(c)
            break
        
    }
    else if (t > Math.max(...a)){
        let n = a.length
        let q = n 
        console.log(q)
        break
    }
    

}
