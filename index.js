// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
typeof(a); //String
typeof(b); //Object


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(let ctr = 0; ctr < a.length; ctr++){
	a[ctr] = a[ctr]*2;
}
document.write(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
//Case 1:
for(let ctr = 0; ctr < colors.length; ctr++){
	document.write(colors[ctr] + " ");
}
document.write(" | ")

//Case 2:
for(let ctr = 0; ctr < colors.length; ctr++){
	if(ctr != colors.length-1){
    	document.write(colors[ctr] + "+");
    }
    else{
    	document.write(colors[ctr]);
    }
}
document.write(" | ")

//Case 3:
for(let ctr = 0; ctr < colors.length; ctr++){
	if(ctr != colors.length-1){
    	document.write(colors[ctr] + "+");
    }
    else{
    	document.write(colors[ctr]);
    }
}
document.write(" | ")


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
document.write(a.reverse());


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var tally = {}; 

for(let ctr = 0; ctr < a.length; ctr++){
    if(tally[a[ctr]] == undefined){ //Initialize key value pair here if new
    	tally[a[ctr]] = 1; 
    }
    
    else if(tally[a[ctr]] != undefined){ //Already existing in map, count is 1 so add frequency
        tally[a[ctr]] = (tally[a[ctr]] + 1);
    }
}

//Display results
var hifreq_element = a[0]; 
var hifreq_frequency = tally[a[0]];//default is the first element of the array
for(var key in tally){
	document.write(key + " has a frequency of " + tally[key] + " | ");
    
    if(hifreq_frequency < tally[key]){
    	hifreq_element = key;
        hifreq_frequency = tally[key];
    }
    else{
    	continue;
    }
}
document.write(" >>> Therefore, the highest frequency is element: '" + hifreq_element + "' with a frequency of: " + hifreq_frequency);