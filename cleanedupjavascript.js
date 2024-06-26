//CONVENTIONS AND INTRO INFO

//Single line commen

/* Multi-line 
Comment */

/*Enter 'use strict' at the top of a JS file to keep code relagated to modern JS
 JS is dynamically typed and uses semicolons.*/


//let for normal variables, const for unchanging variables.

let x = 123;
const y = 234;

/*camelCase for naming variables. 
 ALL CAPS for pre-runtime consts

 

UNDERSCORE_FOR_CONSTANTS

camelForDeclarations

Capitalforconstructors

*/




//DATA TYPES AND THEIR OPERATIONS

/* a. Primatives
    1.String
    2. Number
    3. BigInt
    4. Boolean
    5.Undefined
    6. Null


                    1. Strings:
                            ^Can be single or double quoted - no difference
                            ^Can be enclosed in backticks which allow (a) multi-line strings, (b)formated string, and (c)template functions/template literals.
                                ex: (a)`multi        (b) `formatted string ${reference}`
                                        line         (c) see misc section
                                        string`

                            ^Can use special characters inside of itself to modify its own data. The common backslash is called an escape character.
                                ex:  \n : line break
                                     \\ : backslash
                                     \t : Tab

                            ^Are immuntable
                            ^Are iterable (and therefore indexable) (spaces are included in indexing)
                            ^Is always enclosed by a String object wrapper and so contains object properties and methods.
                            ^Single dots call methods and properties to variables, double dots on values directly
                            ^The characters are compared by their numeric code. The greater code means that the character is greater. In general Capitals < lowercase <common non-letter characters < special characters < other language characters
                            > Common String Properties
                                > .length -> gets length
                                > .at[index] -> gets character at index
                                >
                            > Common String Methods
                                > .toUpperCase() -> converts to uppercase
                                > .toLowerCase() -> converts to lowercase
                                > .indexOf(substr, index) -> returns the starting index of a substring within a string
                                > .includes(substr, [index]) -> boolean if sunstr is in String. index is optional.
                                > .startsWith(substr) -> boolean if substring begins string
                                > .endssWith(substr) -> boolean if substring ends string
                                > .slice(start index [, end index]) -> returns substring defined by start and optional end indexes(not including end index) (!!!most important of all search and return sybstring methods)
                                > .substring(start index [, end index]) -> returns substring defined by start and optional end indexes (not including end)
                                > .substr(start index [, length]) ->  Returns the part of the string from start, with the given length.
                                > .str.trim() -> removes whitespace around string
                                > .str.repeat(n) -> repeats string n times.
                                > .codePointAt(index) -> gets  UTF-16 code for character at position
                                > .String.fromCodePoint(code) -> Creates a character by its numeric code
                                > .localeacompare(other string to compare) -> compares characters of different languages via ECMA-402 standard
                                > .
                    
                    2.Number:
                        ^aka "Double precision floating point numbers".
                        ^Stored in 64-bit format IEEE 754
                        ^ Can use underscored as a spacer (syntactic sugar)
                            ex: 1_000_000 will print as 1 000 000 while still being an int type
                        ^Can use shorthand for zeros
                            ex: 1e9 will print as 1000000000; 1 and 9 zeros to the right.
                                5e-4 will print as 0.0005; 1 and 4 zeros to the left.
                        ^Includes hex, bianry, and octal number systems.
                        ^Look into precision errors.
                        ^Is always enclosed by an Int object wrapper and so contains object properties and methods.

                        > Common Number Properties
                            > 
                        > Common Number Methods
                            > .toString(base) -> converts int to string in any number system via base from 2 - 36
                            > Math.floor(int) -> rounds down to nearest whole number
                            > Math.ceil(int) -> rounds up to nearest whole number
                            > Math.round(int) -> rounds any direction to nearest whole number (.5+ is up, .49- is down)
                            > Math.trunc(int) -> Removes anything after the decimal point without rounding
                            > .toFixed(n) -> rounds to nearest whole number at n digits after decimal and returns a string
                            > parseInt(int) -> reads number from a string and returns it as an int
                            > parseFloat(int) -> reads floating point number from a string and returns it as an int
                            > Math.random() -> Returns a random number from 0 to 1 (not including 1).
                            > Math.max(a, b, c...) -> Returns the greatest from the arbitrary number of arguments.
                            > Math.min(a, b, c...) -> Returns the smallest from the arbitrary number of arguments.
                            > Math.pow(n, power) -> Returns n raised to the given power.
                            >




                    3. BigInt:
                        ^For any integer that exceeds |((2^53)-1)| digits long.
                        ^Decalred by adding 'n' to the end of a number
                            ex: let veryBigInt = 100000000000000000000000000000000000000n
                        ^Is always enclosed by a BigInt object wrapper and so contains object properties and methods.


                    4.Boolean:
                        ^Can only return/store two values, True and False
                        ^ Results from comparisons
                        ^Is always enclosed by a Boolean object wrapper and so contains object properties and methods.

                    5.Null:
                        ^references a non-existing object. Represents the concept of nothing. The box doesn't even exist
                        ^Is always enclosed by a Null object wrapper and so contains object properties and methods.(?)

                    
                    6. Undefined:
                        ^means "there is currently no value assigned here". There is nothing in ths box.
                        ^Is always enclosed by a Undefined object wrapper and so contains object properties and methods.(?)


*/
        
/* b. Non-Primatives/Complex 
    1.Object
        I. Plain Object
        II. Symbol
        III. Array
        IV. Function
        V.Map
        VI. Set
        VII. JSON
        VIII. Object Wrappers



                    1.Object

                        ^A variable that can store multiple types of data.
                        ^Contains properties and methods. 
                            ex: object.property, object.method()

                        ^Cannot be copied in the same way Primatives are and to do so only references the objects memory.
                                   
                            ex: let thisObject = {
                                property: "this property"
                            }

                            thisObject = thatObject -> thatObject just references thisObject, that is not a copy of this.

                        ^To copy an object, either iterate contents into a new object using a for...in loop and an object constructor or use
                        Object.assign() method. 

                            I. Plain Object:
                                ^An Object that is user defined.
                                ^To delete propeties: delete objectName.propertytodelete;
                                ^ Can use external variable values as property names(called computed properties)
                                    ex: let fruit = "apple";
                                        let fruitObject = {

                                            [fruit]: "Granny Smith",
                                        };

                                        fruitObject.apple; -> returns "Granny Smith"

                                        ^Computed properties can contain external variables in addition to strings (i believe other data types as well, though not sure...)

                                ^ [in] keyword can be used to test if a specific key exists within an object
                                    ex:

                                        let thisObject = {
                                            propertyOne: "this property"
                                        }

                                        propertyOne in thisObject; -> returns true
                                        propertyTwo in thisObject -> returns false

                                ^Can iterate over keys of object properties by using a for..in loop
                                        for (key in object){

                                            action;
                                        }
                                

                                ^To delete properties use:
                                        delete objName.propertyName;

                                    ^Plain Object Literals
                                        ^declared with let or const
                                        ^Keys can either be plaintext, strings or symbols while pairs can be any datatype
                                        ^Non-plaintext keys, with the exception of strings and symbols CAN be used
                                            but are automatically converted to strings.
                                        ^ Int keys (aka "integer properties") (which, again are converted to strings)  are ordered from least to greatest. All other values are ordered according to creation order
                                        ^commas seperate properties


                                        ex: let thisObject = {
                                            property1 : "any data type",
                                            "multi word property": true,
                                            exampleMethod: function(){
                                                funtionbody;
                                            },
                                            nestedObject: {
                                                subproperty: [1,2,"cool"]
                                            },

                                        }

                                        thisObject.property1 -> value of property1 inside object
                                        thisObject['multi word property'] -> value of  multi-word-property
                                        thisObject.exampleMethod() -> returns value of the function inside object
                                        thisObject.nestedObject -> returns ????
                                        thisObject.nestedObject.subpropertyone -> returns nested property from property object

                                        ^The "this" keyword can be used by an object method to reference properties inside its parent object
                                            ex: let thisOBject = {
                                                prop1: 24;
                                                exampleMethod: function() {
                                                    let ziyadAge = this.prop1;
                                                    return ziyadAge;
                                                }
                                            }
                                        
                                        ^ Object literals use object constructors internally (?)

                                    ^Plain Object Constructors
                                        ^ Can be used to (a) create empty objects or (b)create an object and instansiate it in slightly different implementations.


                                            ex: 

                                            (a) let emptyObj = new Object(); 
                                            
                                            
                                            
                                            
                                            
                                            (b) function thisFunction(param, param2) {

                                                    this.param = param,
                                                    this.param2 = param2

                                            }

                                            let newObject = new thisFunction("anything", "anything bro")


                                            ^Object constructor functions take parameters which are to be the properties of the obejct it creates.
                                            The function then sets the keys of the properties using 'this.param' and the values of th keys 
                                            with whatever is on the otherside of the equals sign. In the example, "this.param" is the property param, while ""= param" sets 
                                            it equal to the parameter called "param". Then, newObject is created wth the "new" function syntax with arguments that
                                            reflect the contructors parameters. Then newObject is to be treated as a regular object (properties and methods can be accesed using dot notation, etc)
                                             

                            > Common Plain OBject Properties
                                >.__proto__ -> sets protoype of object to that of another object (Prototypal Inheritence)
                                    ex:

                                            let firstObject = {
                                                prop1: "This is a first property"
                                            };

                                            let secondObject = {
                                                prop2: "This is a second property"
                                            };

                                            secondObject.__proto__ = firstObject; -> now secondObject inherits properties from firstObject
                                                                                  -> secondObject.prop1 will return value of prop1
                                                                                  ->Can also be used as a key in an object so as long as the value represents the object to inherit from 
                                                                                    ex:
                                                                                            let one = {
                                                                                                someprop: true
                                                                                            }

                                                                                            let two = {
                                                                                                __proto__ : one
                                                                                            }

                                                                                            two will inherit the properties of one when that key is called like two.someprop.
                                                                                    >__proto__ can only be an object or null.
                                                                                    >can't reference in circles
                                                                                    > is read-only
                                                                                    > is generally considered outdated in favor of
                                                                                            >.getProtoypeOf(obj)
                                                                                            >.setPrototypeOf(obj, proto)
                                                                                            >.create(proto[,descriptors])


                                > .prototype -> see "Native Prototypes" in the section on Prototypal Inheritance


                            > Common Plain Object Methods
                                                            
                                >Object.keys(obj) – returns an array of keys.
                                >Object.values(obj) – returns an array of values.
                                >Object.entries(obj) – returns an array of [key, value] pairs.
                                >Object.fromEntries(array) -> ??
                                >Look into property flags and their associated methods, they are rarely used.
                                >Look into getters/setters and their associated methods, they are rarely used

                            
                                




                    II. Symbol:
                                ^Is a unique identifier - to be used as object keys with pspecific purposes
                                ^let nameOfSymbol = Symbol("description of symbol")
                                ^all symbols are unique even if the descriptions are the same, the name of the symbol must be unique
                                ^use squaare brackets in object literals:
                                                let user = {
                                                    [id]: 123.
                                                };
                                ^Because Symbol is an object, there are various proerpties and methods associaeted with it.




                    III. Array:     
                                ^Arrays - a type of object  ordered collections of data of any type,indexed starting at 0
                                    ex:
                                    
                                        let nameOfArray = new Array(); -> Array constructor

                                        let nameOfAnotherArray = [] -> Array literal



                                ^for..of loops work for iterating over arrays
                                ^Arrays are mutable
                                ^Arrays are iterable (therefore indexable w/ square brackets -> array[index])
                                ^Because Arrays are Objects,there are various properties and methods associated with it
                                                
                                    > Common Array Properties
                                        > .at[index] ->returns element at index
                                        > .length -> returns number of elements in array
                                    > Common Array Methods
                                        > .pop() -> Extracts the last element of the array and returns it
                                        > .push(n) -> Append the element n to the end of the array
                                        > .shift() -> Extracts the first element of the array and returns it
                                        > .unshift(n) -> Add the element n to the beginning of the array
                                        > String(n) -> returns all elements of array n in a comma seperted string
                                        > .splice(start index, [, n's to delete, element1,.....,elementn]) -> from a given index(inclusive), [delete n elemnts, replace them with element, element2, element etc]
                                        > .slice([start index], [end index]) -> returns a new array copying to it all items from index start to end (not including end). Can also make copy of original array if used without arguments.
                                        > .concat(arg1, arg2...) -> creates a new array that includes values from other arrays and additional items
                                        > .forEach(function(n1, n1, n1)){function body} ->run a function for every element of the array, n can be an item, index or another array
                                        > .indexOf(item, from) -> looks for item atarting from index from, returns index where it was found, otherwise -1
                                        > .lastIndexOf(item, from) -> same as indexOf but looks for items from right to left
                                        > .includes(item, from)-> looks for item starting from from, returns true if found, otherwise false.
                                        > .find(function(item, idex, array){function body}) -> finds the first item that satisfies the given criteria. returns boolean
                                        > .findIndex(function(item, index, array){function body}) - same as find but returns position of the element if true
                                        > .findLastIndex(function(item, index, array){function body}) - same as findIndex but operates from right to left
                                        > .filer(function(item, index, array){function body})-> finds all items that satisfy the given criteria.
                                        > .map(function(item, index, array){functionbody}) -> calls the functionf or each element of array, returns array of the results
                                        > .sort(ordering fn) -> sorts original array in place, also returns the sorted array. Default ordering function is lexical.
                                        > .reverse() -> reverses order of array
                                        > .split(delim) -> splits an array according to the given delimiter. No delim splits array of letters into a comma-delimited list characters
                                        > .join(glue) -> joins array according to given glue element.
                                        > .reduce(function(accumulator, item, index, array){}, [initial]) -> takes the result of the initial funtion and passes it through to the next one (????)
                                        > .reduceRight(function(accumulator, item, index, array){}, [initial] => saem as .reduce but from right to left
                                        > .Array.isArray([]) -> checks if object is an array, returns boolean
                                        > .some(function(item, index, array){function body}) -> returns true the moment the function returns a truthy value
                                        > .every(function(item, index, array){function body}) -> returns false the moment the function returns a falsey value
                                        > .fill(value, start index, end index) -> fills array with repeating value from start to end
                                        > .copyWithin(target index, start index, end index ) -> copies elements from start index to end index and places them at target index within the array.
                                        > .flat(depth)/.flatMap(fn) -> create a new flat array from a multidimensional array
                                        > look into "thisArg", appears to function like "this" (objects) but for arrays
                                        > look into iterables

                    




                    IV. Function:
                               ^Functions, global variables are outside of functions, local vars are inside them.
                                ^defaults can be defiend as parameters with 'parameter = Value'
                                ^'return value' gives value to the function call, 'return' by itself can exit the function and return 'undefined'
                                ^naming conventions usially begin with verb describing action, followed by the goal of the funciton. Camel case is used.
                                ^Functions should only do single tasks

                                ^functionName() refers to the result/return value of functionName. functionName refers to the function itself
                                ^function expressions exist as do arrow functions (what is usually used is a function declaration)

                                ex: function declaration :

                                                        function functionName(parameter, parameter...){

                                                            action;
                                                        }

                                                        functionName(arguements)

                                    function expression: 
                                                        let variableName = function(){
                                                        --
                                                            action;
                                                        }


                        
                                    Named Funcition Expression:
                                                        let variableName = function nameOfFunction(){
                                                            --
                                                                action;
                                                            }
                                    Arrow Function:
                                                        ** to be written**

                                    Rare alternative usecase for making a function:

                                                        let func = new Function([arg1, arg2, ...], functionBody);

                            
                
                    

`                               ^The "this" keyword can be used inside of functions even if they are not inside objects.
                                ^Recursion is when a function calls itself - need to study this more
                                ^Rest Parameters: get a function to accept a non-discrete amount of arguments as an array
                                    ex:
                                        function nameOfFunction(param1, param2, ...nameOfArray) {
                                            action;
                                            arguments.length; //a loosely associated object that indexes arguments (?). Generally depreciated now though.

                                        }

                                        nameOfFunction(arg1, arg2, arg3, arg4); //arg1 and arg2 are discrete and isolated while arg3 and arg4 are in the array nameOfArray.


                                ^Spread Paramters: the opposite of Rest Parameters, gets arguments from elements of an array.
                                    ex:
                                        let thisArray = [arg1, arg2, arg3]

                                        function nameOfFunction(...nameOfArraySource) {
                                            action;
                                        }
                                ^Arbitray scope can be limited by code blocks
                                    ex:
                                            {

                                                some code ;

                                            }
                                ^global Objects

                                    ex: globalThis

                                ^global variables

                                    ex: var nameOfGlobalVariable = "any value";

                                ^Functions, like Arrays are objects. Functions have properties.
                                    ex: 
                                    function nameOfFunc() {
                                        action;
                                    }

                                    nameOfFunc.name; -> returns the name of the function

                                ^there are many other properties of functions because they are objects.
                                ^we can add custom properties to functions like so:
                                    ex:

                                        function nameOfFuncBruh() {

                                            nameOfFuncBruh.new_property //need to explore this deeper
                                        }


                                ^Scheduling a call (setTImeout and setInterval)
                                    ex:

                                        let nameOfthis = setTimeout(func|code, [delay],[arg1], [arg2], ...); //setTimeout allows us to run a function once after the interval of time
                                        let nameofThat = setInterval(func|code, [delay],[arg1], [arg2], ...); //allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
                                        //There are other quirks about this - must look into this deeper.

                                ^Decorators and Forwarding, call/apply -> ???
                                ^Function Binding -> ????
                                ^Constructor Funtions 
                    



                    V.Map:
                                ^Essentally the same a a plain object, but allows for any data type to be a key. 
                                
                                    ex: let thisMap = new Map() -> Map constructor

                                ^properties maintain creation order
                                ^Because Maps are Objects, there are various properties and methods associated with it
                                ^A subtype of Map is WeakMap, which will automatically free up memory when proeprties are not in use (Map) doesn't do this.
                                    ex: let variableName = new WeakMap();
                                ^Can only take objects as keys.

                                    > Common Array Properties
                                        >.size -> returns current element count
                                    > Common Array Methods
                                        >.set(key, value) – stores the value by the key.
                                        >.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
                                        >.has(key) – returns true if the key exists, false otherwise.
                                        >.delete(key) – removes the element (the key/value pair) by the key.
                                        >.clear() – removes everything from the map.                              
                                        >.keys() – returns an iterable for keys
                                        >.values() – returns an iterable for values
                                        >.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
                                        >.Object.entries(obj) -> ///
                                        >. Object.fromEntries -> ???
                                        >.



                    VI. Set:
                                ^Are like Arrays except values can appear in the structure only once
                                ^Because Sets are Objects, there are various properties and methods associated with it
                                ^A subtype of Set is WeakSet, which will automatically free up memory when properties are not in use,
                                   ex: let variableName = new WeakSet();

                                > Common Set Properties
                                    >.size -> returns current element count
                                > Common Set Methods
                                    >.add(value) – adds a value, returns the set itself.
                                    >.delete(value) – removes the value, returns true 
                                    >set.has(value) – returns true if the value exists in the set, otherwise false.
                                    >.clear() – removes everything from the set.
                                    >.size – is the elements count.
                                    >.forEach() -? SIMILAR TO MAP METHOD forEach                            
                                    >.keys() – returns an iterable object for values,
                                    >.values() – same as set.keys(), for compatibility with Map,
                                    >.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.
                                        


                    VII. JSON:
                                ^The JSON (JavaScript Object Notation) is a general format to represent values and objects. 
                                ^ main methods are JSON.stringify to convert objects into JSON and JSON.parse to convert JSON back into an object.
                                  ex: let student = {
                                        name: 'John',
                                        age: 30,
                                        isAdmin: false,
                                        courses: ['html', 'css', 'js'],
                                        spouse: null
                                        };

                                        let json = JSON.stringify(student); -> returns:       {
                                                                                                "name": "John",
                                                                                                "age": 30,
                                                                                                "isAdmin": false,
                                                                                                "courses": ["html", "css", "js"],
                                                                                                "spouse": null
                                                                                                }

                                ^Various other properties and methods exist as this is an Object.

                                    > Common JSON Properties
                                        >
                                    > Common JSON Methods
                                        >JSON.stringify(value [, replacer, space]) -> converts the properties of a datatype  (value) to a string (JSON-encoded or serialized or stringified or marshalled object). This method can be used on all datatypes. Functions, Symbols, and  properties with value undefined are skipped however.
                                        >toJSON(){function body} -> manually converts info to JSON
                                        >JSON.parse(str[,reviver]) -> decodes JSON string
                                        



                    VIII. Object Wrappers:
                                ^Don't exist for null and undefined values
                                ^ Are created for primatives to acces their pethods and properties Are discarded after use.






*/


/* c.Type Conversions
    1.Primative to Primative
    2. Object to primitive
    3. Implicit type conversions

            1. Primative to Primative
               I. String Conversion
                    ex: String(non-string value);
               II. Numeric Conversion
                    ex: Number(non-int value);
               III. Boolean Convserion
                    ex: Boolean(non-bool value);


            2.Object to Primative Conversion
               I. **to be written**


            3. Implicit Type Conversions
                I. Putting a '+' before non-ints converts that result/alue to a number
                II.




*/

//CONTROL FLOW AND CONDITIONALS

/*  a. While Loop
    b. Do...While Loop
    c.For Loop   
    d.Switch Statemtent   
    f. For..in Loop
    g. For..Of Loop
    h. If Statements
    I. Destructuring
    J. Misc
             
                    a. While Loop


                        while (condition) {
                            action;
                            condition breaker;
                        }

                        ^condition is truthy by default in all types of loops


                    b. Do...While Loop
                        do {
                            action;
                            condition breaker;
                        } while(condition);
                    c.For Loop
                        for (initialization variable (either inline or outside); condition; step) {
                                action;
                            }

                    d.Switch Statemtent
                        ^ can be used in place of multiple if checks. Cases can be grouped without break statements between them

                            switch (conditional){
                                case value1:
                                    action;
                                    break
                                case value2:
                                    action;
                                    break

                            }

                    f. For..in Loop
                            ^for object properties
                            
                    g. For..Of Loop
                            ^for arrays and iterable objects
                    

                    h. If Statements:

                            ex:
                                if (condition){
                                    action;
                                    action;
                                    
                                } else if (condition){
                                    action;

                                } else {
                                    action;
                                    action;
                                }

                            ^note that the question mark operator exists for elegance with respect to conditinals

                    I. Destructuring
                                ^Taking an object and isolating its elements into seperate distinct variables

                                ^Arrays
                                    ex:
                                        let arr: ["John", "Smith"];

                                        let [firstName, surname] = arr; -> now Firstname is linked to arr[0] and likewise respectively with surname.

                                ^Object
                                    ex: **to be written**


                    J.Misc:
                        ^'break' can be used to forcefully exit any loop
                        ^'continue' can be used to begin a new iteration of loop from that point where 'continue' exists.

                        ^labels

                           ex: labelName: conditional; 
                                            conditional

                                            break labelName; -> allows  break snd continue to target specific loops from any nested depth.



                            
    
*/

//EXPRESSIONS AND OPERATORS

/*
    a. Logical Operators
    b. Bitwise Operators
    c. Mathematical Operators
    d. Modify and Assign
    e. Comparison Operators
    d. Other Operators (include type of)


                    a. Logical Operators:
                        ^used for
                            || OR
                            && AND
                            ! NOT
                            ?? Nullish Coalescing
                      
                    b. Bitwise Operators
                        ^used for
                            AND ( & )
                            OR ( | )
                            XOR ( ^ )
                            NOT ( ~ )
                            LEFT SHIFT ( << )
                            RIGHT SHIFT ( >> )
                            ZERO-FILL RIGHT SHIFT ( >>> )
                    c. Mathematical Operators
                            ^used for math, string concatination, and string to numeric division, string to int conversion
                                                                    
                                Addition +,
                                Subtraction -,
                                Multiplication *,
                                Division /,
                                Remainder %,
                                Exponentiation **.


                    d. Modify and Assign:
                        ^used on variables to assign new values to variables based on another variable.
                            += add and assign
                            *= multiply and assign
                            /= divide and assign
                            -= subtract and assign
                            * \ / (?)
                        ^Increment and Decrement    
                            ++: inc by 1,
                             --: dec by 1
                            prefix: operates and returns new value
                            postfix:operates and returns old value
                                
                    e. Comparison Operators:
                        ^used for comparing datatypes and value

                        <, >, <=, >=, ==,===,!==, !=

                    
                        ^Strings get compared alphabetically with 0 being A and 24 being Z (therefore Z>A returns True)
                            watch out for quirks with null/undefined comparisons
                        ^multitype conversion: strings get converted to numbers, true and false bools become 1 nad 0 respectively

                        ^strict equality checks equality without converting types

                        

                    d. Other Operators (include type of)
                                ^typeof: finds the data type of a variable: typeof x or typeof(x)
                                ^comma :used to throw all arugements except the last one
 */

//INTERACTION

/*
    a.Modal Window
        alert("hello"); ->basic modal window popup

        let popUp = prompt("this is a warning", [input]); ->prompt is a modal window that allows user input

        let confirmPLease = confirm("why have drama?"); ->confirm is a modal window with two buttons "ok" (true) and "cancel"(false)


*/


//PROTOTYPAL INHERITANCE

/*

    All objects have an internal (hidden) property called [[Prototype]] that  is either null
    or references another object. If a certain property is not explicitly defined in an object, the JS engine will search for in in that objects [[Prototype]].

    See section on object properties for use of __proto__.

    __proto__ is a getter/setter for [[Protoype]]


    .prototype is the property called "prototype" that every object (even object wrappers for primatives) implicity has (sometimes called "native prototypes" (?)). (F.prototype) (this is seperate from the [[Prototype]] access by __proto__)







*/

//Classes

/*
    A class is a type of function, named with a Capital letter at the beginning of every word.
                                ^
    ^Basic class syntax (Class Declaration):

                            class NameOfClass {
                                constructor() {};
                                method1;
                                method.... ;
                            }

    ^Class Expressions also exist.
    ^Classes may contain getters and setters.
    ^Can use computed names
    ^Can add properties to classes using equals sign..
    ^Static properties and Methods Exist
    ^

    ^Essentially what a class does is it creates an object via a constructor function and groups
    it in with methods that belong to that class so they can be seperate but stil capable of being used together.




*/

//ERROR HANDLING

/*

    a.Try...Catch
    b. Throw
    c. Try...Catch.Finally
    c. Custom

                            a. try...catch blocks 

                                ex: try (
                                    action;
                                )catch (error object) {
                                    do this if try block fails;
                                }

                                ^only works synchronously
                                ^error object can have any name and is optional syntax
                                ^error object has two main properties
                                    ^.name -> returns the name fo the error object
                                    ^.message -> description about error messages
                            
                            b. Throw
                                ex: throw <error object>
                                ^look into rethrowing and wrror object constructors
                            c. Try...Catch...Finally
                                self-explanatory
                            d. Custom
                                look into this more

                
      


*/

//Promises, Async, wait

/*
        ^ansynchronous actions are actions that are initiated now but are finished later

        ^come back to  this after basic DOM knowledge



*/

//DOM

//Document

/*

                                
    ^window is a global object of the browser and provides methods to control it.
    ^document is an object that encompasses all page content as sub objects (DOM)
        ^see DOM Living Standard for document object properties and methods and CSS Object Model(CSSOM, rarely used) for CSS-object proerties and methods
    
   ^For every thing except the document itself, the BOM (browser object model ) is used
        ^see HTML specification for BOM proerties and methods

    SO the tree looks like:

                            window
                            /  |  \
                          DOM  BOM  Javascript


    
    ^The DOM Tree



        The HTML DOM is a standard object model and programming interface for HTML. It defines:

        The HTML elements as objects
        The properties of all HTML elements
        The methods to access all HTML elements
        The events for all HTML elements

    In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

    HTML DOM methods are actions you can perform (on HTML Elements).

    HTML DOM properties are values (of HTML Elements) that you can set or change.

    A property is a value that you can get or set (like changing the content of an HTML element).

    A method is an action you can do (like add or deleting an HTML element).

    All html tags are objects in the document object model
    

    ^the "document" object is the entry point to the DOM
            ^to further access things on the page, use of methods and properties associated with the document object are needed.



            Finding HTML Elements:
                document.getElementById(id) 	        Find an element by element id (method)
                document.getElementsByTagName(name) 	Find elements by tag name (method)
                document.getElementsByClassName(name) 	Find elements by class name  (method)  
                
            Changing HTML Elements:
                element.innerHTML =  new html content 	Change the inner HTML of an element (property)
                element.attribute = new value 	        Change the attribute value of an HTML element (property)
                element.style.property = new style 	    Change the style of an HTML element (property)
                element.setAttribute(attribute, value) 	Change the attribute value of an HTML element (method)


            Adding and Deleting Elements:
                document.createElement(element) 	    Create an HTML element (method)
                document.removeChild(element) 	        Remove an HTML element (method)
                document.appendChild(element) 	        Add an HTML element (method)
                document.replaceChild(new, old) 	    Replace an HTML element (method)
                document.write(text) 	                Write into the HTML output stream (method)

            Adding Events Handlers:
                document.getElementById(id).onclick = function(){code} 	Adding event handler code to an onclick event (method)
                
                
            Finding HTML Objects(by collection):

                document.anchors 	                    Returns all <a> elements that have a name attribute 	
                document.applets 	                    Deprecated 	
                document.baseURI 	                    Returns the absolute base URI of the document 	
                document.body 	                        Returns the <body> element 	
                document.cookie 	                    Returns the document's cookie 	
                document.doctype 	                    Returns the document's doctype 	
                document.documentElement 	            Returns the <html> element 
                document.documentMode 	                Returns the mode used by the browser 	
                document.documentURI 	                Returns the URI of the document 	
                document.domain 	                    Returns the domain name of the document server 	
                document.domConfig 	                    Obsolete. 	
                document.embeds 	                    Returns all <embed> elements 	
                document.forms 	                        Returns all <form> elements 	
                document.head 	                        Returns the <head> element 	
                document.images 	                    Returns all <img> elements 	
                document.implementation 	            Returns the DOM implementation 	
                document.inputEncoding 	                Returns the document's encoding (character set) 	
                document.lastModified 	                Returns the date and time the document was updated 	
                document.links 	                        Returns all <area> and <a> elements that have a href attribute 	
                document.readyState 	                Returns the (loading) status of the document 	
                document.referrer 	                    Returns the URI of the referrer (the linking document) 	
                document.scripts 	                    Returns all <script> elements 	
                document.strictErrorChecking 	        Returns if error checking is enforced 	
                document.title 	                        Returns the <title> element 	
                document.URL 	                        Returns the complete URL of the document 	




                

*/