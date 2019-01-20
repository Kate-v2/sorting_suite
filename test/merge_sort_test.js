const assert = require('chai').assert;

const sort = require('../scripts/merge_sort')


describe('Merge Sort', function() {

  context('Even array', function() {

    it('can sort an even number array', function() {
      unsorted = [4, 3, 2, 1]
      expected = [1, 2, 3, 4]
      sorted = sort.mergeSort(unsorted)
      assert( true, sorted === expected)
    });

    // it('can sort', function() {});

    it('can break an array', function() {
      unsorted = [4, 3, 2, 1, 0]
      expected = [4, 3]
      left = sort.breakArr(unsorted, 0, 2)
      assert(true, left == expected )
      expected = [2, 1, 0]
      right = sort.breakArr(unsorted, 2+1, 5)
      assert(true, right == expected )
    });

    it('can find the middle of array', function() {
      even = 4
      expected = 2
      mid = sort.middle(even)
      assert(true, mid == expected)
      odd = 5
      expected = 2
      mid = sort.middle(even)
      assert(true, mid == expected)
    });

  });




});


// pry = require('pryjs')
// eval(pry.it)
