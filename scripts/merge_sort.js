
const array = [1, 2, 3, 4]

module.exports = {

  mergeSort: function(arr) {
    let length = arr.length
    return length == 1 ? arr : this.sort(arr)
  },

  sort: function(arr) {
    // sort left
    // sort right
    // merge left & right
    let sorted
    if (arr.length == 1) {
      return arr
    } else {
      // wow variables without 'let' persist through each recursive call
      let left   = this.leftHalf(arr)
      let lefty  = this.sort(left)
      let right  = this.rightHalf(arr)
      let righty = this.sort(right)
      sorted = this.merge(lefty, righty)
    }
    return sorted
  },

  leftHalf: function(arr) {
    let l = arr.length
    let mid = this.middle(l)
    let half = this.breakArr(arr, 0, mid)
    return half
  },

  rightHalf: function(arr) {
    let l = arr.length
    let mid = this.middle(l)
    let half = this.breakArr(arr, mid, l)
    return half
  },

  merge: function(left, right) {
    let agr = []
    let size = left.length + right.length
    let index = 0

    while (index < size ) {
      let val
      // right is always equal or larger in size
      if ( this.onlyRight(left, right) ) {
        val = right.shift()
        agr.push(val)
        index += 1
      } else if ( this.onlyLeft(left, right) ) {
        val = left.shift()
        agr.push(val)
        index += 1
      } else if ( this.leftSmaller(left, right) ) {
        val = left.shift()
        agr.push(val)
        index += 1
      } else if ( this.rightSmaller(left, right) ) {
        val = right.shift()
        agr.push(val)
        index += 1
      }
    }
    return agr
  },

  onlyRight: function(left, right) {
    return (left.length == 0 && right.length > 0)
  },

  onlyLeft: function(left, right) {
    return (right.length == 0 && left.length > 0)
  },

  leftSmaller: function(left, right) {
    return (left[0] <= right[0])
  },

  rightSmaller: function(left, right) {
    return (right[0] < left[0])
  },


  // --- Helper methods ----

  breakArr: function(arr, start, end) {
    let l = arr.length
    let mid = this.middle(l)
    let piece = []
    for(x=0, i=start; i<end; x++, i++){
      piece[x] = arr[i]
    }
    return piece
  },

  middle: function(length) {
    let half = length / 2
    return (length % 2 != 0) ? Math.floor(half) : half
  },


}
