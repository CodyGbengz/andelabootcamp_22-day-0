

'use strict'

const App = require('../app/getPrimes.js');

describe('getPrimes', function(){
	it('should not return undefined',function(){
		expect(App.getPrimes()).toBe.defined;
	});
	it('should return a value', function(){
		expect(App.getPrimes(5)).toEqual([2,3,5]);
	})
	it('should throm an error', function(){
		expect(App.getPrimes('primes')).toEqual('please enter a number')

	})
	it('should throw an error ', function(){
		expect(App.getPrimes(1)).toEqual('input a value above 1');

	})
	it('should take in a number',function(){
		expect(App.getPrimes(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);

	})
	it('should return',function(){
		expect(App.getPrimes('hello')).toBe('please enter a number');

	})
	it('should return',function(){
		expect(App.getPrimes(0)).toEqual('input a value above 1');

	})
	it('should return',function(){
		expect(App.getPrimes(2)).toEqual([2]);
		
	})
	it('should ',function(){
		expect(App.getPrimes(3)).toEqual([2,3]);
		
	})
	it('',function(){
		expect(App.getPrimes()).toEqual([]);
	
	})

});