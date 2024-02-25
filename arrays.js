// A R R A Y S

    // let marks=[80,98,79,93,77,67];
    // console.log(marks);
    // console.log(marks[0]);
    // marks[0]=81; // this is possible only integers 
    // str="sandesh";
    // console.log(str[0]);
    // str[0]="D"; // this is a not possible in javascript because in js string is mutable (unchangable)

// for loop

    // for(let i=0;i<marks.length;i++){
    //     console.log(marks[i]);
    // }

// for of

    // let cities=["sangli","miraj","kolhapur","solapur","pune"];
    // for(let city of cities){
    //     // console.log(city);
    //     console.log(city.toUpperCase());
    // }

// Array methods

    // push() - add to end

        // let languages=["python","c","cpp","php","sql"];
        // console.log(languages);
        // languages.push("ruby"); //insert one value
        // console.log(languages); 
        // languages.push("javascript","html","css"); // insert multiple values
        // console.log(languages);
        
     // pop() - remove last value in array and return it
        
        // console.log(languages.pop());
        // languages.pop();
        // console.log(languages);
        
    // toString() - converting into array to string

        // console.log(languages.toString());

    // concate() - to join multiple arrays and returns result

        // let fruits=["mango","apple","banana","lemon"];
        // let students=["sandesh","rushabh","prathmesh","mahesh","nilesh","prasad"];
        // console.log(languages.concat(fruits)); // here are gien two arrays in console log to concatination 
        // console.log(languages.concat(fruits,students)); // here are gien multiple arrays in console log to concatination 
    
    // shift() - delete from start and return it
        // console.log(students);
        // console.log(students.shift());
        // console.log(students);

    // slice() - return a piece of the array

        // console.log(students.slice(0,4)); // in this case are given the students is a array and slice function under give the starting index and ending index

    // splice() - change in orignal array(add,delete,replace)

        // let rollNo=[101,102,103,104,105];
        // console.log(rollNo);
        // console.log(rollNo.splice(1,2,(2,3))); // here are in a splice under diven a starting index and second is whitch elements are delete and the which value are inserted
        // console.log(rollNo);

        // Add element
            // let addEle=rollNo.splice(0,0,1008);
            // console.log(addEle);
            // console.log(rollNo);

        // Delete element
            // let delEle=rollNo.splice(0,1);
            // console.log(delEle);
            // console.log(rollNo);

        // Replace element
            // let insEle=rollNo.splice(3,0,2001);
            // console.log(insEle);
            // console.log(rollNo);






        