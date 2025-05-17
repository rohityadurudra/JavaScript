// correct for this test case only console.log(strStr("sadbutsad","sad"));
// var strStr = function(haystack, needle) {
//     const arg1 = haystack.split("");
//     const arg2 = needle.split("");
//     const val = [];
//     for(let i = 0 ; i<arg2.length; i++){
        
//         if(arg1[i] === arg2[i]){
//             val.push(arg2[i])
//         }
//         else 
//             return null;
//     }
//     // console.log(val,arg2);
//     return val.join('') === arg2.join('');

//     //     while(i<arg2.length){
//     //         let arg2e = arg2[i];
//     //         if(char === arg2e){
//     //             val.push(arg2e)
//     //         }
//     //         else    
//     //             break ; 
//     //     }
     
// }



//other method
var strStr = function(haystack, needle) {
  if (!needle) return 0;
  const split = haystack.split(needle);
  return split.length > 1 ? split[0].length : -1;
};

//using manual for loop method
var strStr = function(haystack, needle) {
  if (!needle) return 0;

  const hLen = haystack.length;
  const nLen = needle.length;

  for (let i = 0; i <= hLen - nLen; i++) {
    let match = true;

    for (let j = 0; j < nLen; j++) {
      if (haystack[i + j] !== needle[j]) {
        match = false;
        break;
      }
    }

    if (match) return i; // found match at index i
  }

  return -1; // needle not found
};


//using  string indexof method
var strStr = function(haystack, needle) {
  if (!needle) return 0;
  return haystack.indexOf(needle);
};
