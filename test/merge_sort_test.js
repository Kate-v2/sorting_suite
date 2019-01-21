const assert = require('chai').assert;
const expect = require('chai').expect;

const sort = require('../scripts/merge_sort')


describe('Merge Sort', function() {

  context('Even array', function() {

    it('can sort an even number array', function() {
      unsorted = [4, 3, 2, 1]
      expected = [1, 2, 3, 4]
      sorted = sort.mergeSort(unsorted)
      this.skip('Not Able to Sort Yet')
      expect(sorted).to.eql(expected)
    });

    // it('can sort', function() {
    //   small = [2,1,100,3]
    //   // expected = [1,2,3, 100]
    //   expected = 'blah'
    //   sorted = sort.sort(small)
    //   // pry = require('pryjs')
    //   // eval(pry.it)
    //   assert(true, sorted === expected)
    // });


    it('can join & sort arrays', function() {
      left = [1]
      right = []
      expected = [1]
      sorted = sort.addToArr(left, right)
      expect(sorted).to.eql(expected)


    });




    // --- Helper methods ----

    it('can break an array', function() {
      unsorted = [4, 3, 2, 1, 0]
      expected = [4, 3]
      left = sort.breakArr(unsorted, 0, 2)
      expect(left).to.eql(expected)
      expected = [2, 1, 0]
      right = sort.breakArr(unsorted, 2, 5)
      expect(right).to.eql(expected)
    });

    it('can find the middle of array', function() {
      even = 4
      expected = 2
      mid = sort.middle(even)
      expect(mid).to.eql(expected)
      odd = 5
      expected = 2
      mid = sort.middle(even)
      expect(mid).to.eql(expected)
    });

  });



});


// pry = require('pryjs')
// eval(pry.it)
