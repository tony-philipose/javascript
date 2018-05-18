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
