
const array = [1, 2, 3, 4]

module.exports = {

  mergeSort: function(arr) {
    let length = arr.length
    return length == 1 ? arr : this.sort(arr)
  },

  sort: function(arr, newArr = []) {
    // return arr if arr.length == 1
    // return this.addToArr(arr, newArr) if (arr.length == 1)
    // return newArr.push(arr[0]) if arr.length == 1
    // arr.length == 1 ? return this.addToArr(arr, newArr) : null
    if (arr.length == 1) {
      return this.addToArr(arr, newArr)
    }

    // let mid = this.middle(length)
    //
    // let left = this.breakArr(0, mid)
    // let lefty = this.sort(left, newArr)
    //
    //
    // let right = this.breakArr(arr, mid+1, length)
    // let righty = this.sort(right, newArr)
    //
    // sort = this.addToArr(lefty, righty)
    // left.length > 1 ? this.sort(left, newArr) : this.compare(newArr, left)
    // let lefty = this.sort(left)


    // let righty = this.sort(right)
    // right.length > 1 ? this.sort(right) : return right
  },


  addToArr: function(left, right) {

    // let arr = []
    // let sizeL = left.length
    // let sizeR = right.length
    //
    // let length = sizeL > sizeR ? sizeL : sizeR
    //
    //
    //
    // // for(l=0, r=0; x<length; x++){
    //
    //
    //
    //   if (left.length !=0 && left[l] <= right[r]) {
    //   // if (left[l] <= right[r]) {
    //     arr[x] = left[l]
    //     l++
    //   } else {
    //     arr[x] = right[r]
    //     r++
    //   }
    //
    // }
    // return arr
  },





  // --- Helper methods ----

  breakArr: function(arr, start, end) {
    let piece = []
    for(x=0, i=start; i<end; x++, i++){
      piece[x] = arr[i]
    }
    return piece
  },

  middle: function(length) {
    let half = length / 2
    return (length % 2 != 0) ? Math.floor(half) : half
  }


}
