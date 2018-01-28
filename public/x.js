
function Stats(array) {
	this.sum = function () {
		var sum = 0;
		for (i = 0; i < array.length; i++) {
			sum = sum + array[i];
		}
			return sum
	}
	this.avg = function () {

		avg = this.sum()/array.length;
		return avg;
	}
	this.min = function () {
		var min = array[0];
		for (i = 0; i < array.length; i++) {
			if (array[i] < min) {
				min = array[i];
			}
			
		}
		return min
	}
	this.max = function () {
		var max = array[0];
		for (i = 0; i < array.length; i++) {
			if (array[i] > max) {
				max = array[i];
			}
			
		}
		return max
	}

}

staty = new Stats([1, 2, 3, 4, 5, 6, 7])
staty.sum
staty.avg











var array = { 
	sum: sum,
	avg: avg,
	min: min,
	max: max,

}
function stats(array) {
		sum = 0;
		min = array[0];
		max = array[0];
		for (i = 0; i < array.length; i++) {
			sum = sum + array[i];
			if (array[i] < min) {
				min = array[i];
			}
			if (array[i] > max) {
			max = array[i];
			}
		
	} 
	avg = sum / array.length;
return { 
	sum: sum,
	avg: avg,
	min: min,
	max: max}
}
	
stats([1, 2, 3, 4, 5, 6, 7])








