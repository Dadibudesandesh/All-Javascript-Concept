// J A V A S C R I P T   F U N C T I O N


// in these program show the function pass to as a paraameter

        // function para(){
        //     console.log("javascript");
        // }          
        
        // function myFunction(para){
        //     return para;                    
        // }

        // console.log(myFunction(para()));  // in javascript under pass a any function to as a parameter


// simple function

            // function Defination  
            // function myFunction()
            // {   
            //     console.log("Namste From Bharat");
            // }
            // Function call
            // myFunction();  

        // Passing parameter to the functions
            // let msg="namste from bharat";
            // function myFunction(msg)
            // {
            //     console.log(msg);
            // }
            // Passing parameter to the myFunction
            // myFunction(msg);  
            
            
        // Passing Argument to the functions
            // function myFunction(msg)
            // {
            //     console.log(msg);
            // }
            // Passing Argument to the myFunction
            // myFunction("namste from bharat"); 
   
            
// Arrow function

        // const sum=(a,b)=>{
        //     console.log(a+b);
        // };
        
        // const mul=(a,b)=>{
        //     return a*b;
        // };
        // console.log(mul(2,3));

// ForEach loop in array  (also called callBack function)    // foreach method is a higher order function

        // let no=[1,2,3,4,5,6,7,8];
        // no.forEach((val,index,arr)=>{       // (val,index,arr) it means a  in foreach loop ypu are print or access a value in array,index of a each element and array name
        //     console.log(val,index,arr);
        // })

        // let city=["Miraj","Sangli","Kolhapur","Pune"];
        // city.forEach((val)=>{
        //     console.log(val.toUpperCase());       // you are convert a string in a varius format
        // })


        // Que : for a given array of numbers, print the square of each value using the forEach loop.

        // let numbers=[2,5,4,3,7,6];
        // numbers.forEach((number)=>{
        //     console.log(number**2);
        // })


// M A P   M E T H O D       //use to copy elements in  a anoher array or creating dublicate array

        // creates a new array with the results of some operation. the value its callback returns are used to form new array

        // let numbers=[2,5,4,3,7,6];

        // numbers.map((val)=>{  // print the array elements of a using map method
        //     console.log(val);
        // })

        // let newArray=numbers.map((val)=>{  // here are copy all elements on numbers array into newArray array using map method
        //     return val;
        // })
        // console.log(newArray);


// F I L T E R    M E T H O D


            // create a new array of elements that give for a condition or filter.

        // Que: print a all even numbers in a array

            // let arr=[2,3,4,1,5,7,6,8];
            // let evenNo=arr.filter((val)=>{
            //     return val%2===0;
            // })
            // console.log(evenNo);



// R E D U C E   M E T H O D

            // Performs some operations and reduces the array to a single value. it returns that single value.

            // let total=arr.reduce((result,val)=>{   // here are in function pass a parameter are tow these is a first is a previos value and  second is current value  
            //     return result+val;
            // })

            // console.log(total);

        // Que: print a largest number

            // let total=arr.reduce((largest,val)=>{
            //     return largest>val?largest:val;
            // })
            // console.log(total);

    
        // Que : we are given array of marks of students. Filter out of the marks of students that scored 90+.

            // let Marks=[88,76,90,95,93,92,95,49];
            // let highest=Marks.filter((val)=>{
            //     return val>90;
            // })
            // console.log(highest)


        // Que : take a number n as input from user. create an array of numbers from 1 to n.use the reduce to calculate sum of all numbers in the array.use the reduce method to calculate product of all numbers in the array.

            // let num=prompt("Enter any number...");
            // let arr = [];
            // for(let i=1;i<=num;i++)
            // {
            //     arr[i-1]=i;
            // }
            // let sum=arr.reduce((result,val)=>{
            //     return result+val;
            // })
            // console.log("sum is :",sum);
            // let product=arr.reduce((result,val)=>{
            //     return result*val;
            // })
            // console.log("product is :",product);


// S P L I T    M E T H O D

            // split() our sentence into an array of words.
    
            // const sentence = "Hii sandesh";
            // const words = sentence.split('');
            // console.log(words);
    
// M A T H 'M A X    M E T H O D


            //Retrive the largest number from the array
    
            // const wordlength = [2, 5, 56, 55, 87, 99, 8, 56, 234, 878];
            // const largest = Math.max(...wordlength);
            // console.log(largest);


// L E N G T H    M E T H O D


            //  Retrive the length of the string
    
            // const word = "sandesh";
            // const length = word.length;
            // console.log(length);


















