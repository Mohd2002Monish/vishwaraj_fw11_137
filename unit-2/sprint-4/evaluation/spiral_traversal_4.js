function spiralTraverse4(N, arr) {
    var top = 0
    var left = 0
    var bottom = N-1
    var right = N-1
    var ans = []
    for (let i = 0; i < N/2; i++) {
        for (let r = bottom; r > top; r--) {
            ans.push(arr[r][right]) 
        }
        right--
        for (let t = right; t < left; t++) {
            const element = array[t];
            
        }
        
    }
    console.log(ans.join(' '))
}

var N = 3
var arr = [ [ 5, 4, 3 ], [ 6, 9, 2 ], [ 7, 8, 1 ] ]
spiralTraverse4(N, arr)
