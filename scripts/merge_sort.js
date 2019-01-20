
const array = [1, 2, 3, 4]

module.exports = {

  mergeSort: function(arr) {
    let length = arr.length
    return length == 1 ? arr : this.sort(arr, length)
  },

  sort: function(arr, length) {
    let mid = this.middle(length)
    let left = this.breakArr(0, mid)
    let right = this.breakArr(arr, mid+1, length)
    return left
  },

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
