let a = [1, 2, 8, 12]
let t = 10
let n = a.length
let b =[]
for(i = 0;i < n; i++) {
    if(t == a[i]) {
        console.log(i)

    }
    else if(t < a[i]) {
        let c = i-1
        

            if(c == -1){
                console.log('0')
                break
            }
            else{
                console.log(c)
                break
            }
        
    }
    else if (t > Math.max(...a)){
        let n = a.length
        let q = n 
        console.log(q)
        break
    }
    

}
