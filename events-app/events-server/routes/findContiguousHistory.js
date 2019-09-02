Sample input:

user0 = ["/start", "/pink", "/register", "/orange", "/red", "a"]
user1 = ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"]
user2 = ["a", "/one", "/two"]
user3 = ["/red", "/orange", "/yellow", "/green", "/blue", "/purple", "/white", "/amber", "/HotRodPink", "/BritishRacingGreen"]
user4 = ["/red", "/orange", "/amber", "/green", "/blue", "/purple", "/white", "/lavender", "/HotRodPink", "/BritishRacingGreen"]
user5 = ["a"]

Write a function that takes two users' browsing histories as input and returns the longest contiguous sequence of URLs that appears in both.

Sample output:

findContiguousHistory(user0, user1)
   /pink
   /register
   /orange

findContiguousHistory(user1, user2)
   (empty)

findContiguousHistory(user2, user0)
   a 

findContiguousHistory(user5, user2)
   a 

findContiguousHistory(user3, user4)
   /green
   /blue
   /purple
   /white

findContiguousHistory(user4, user3)
   /green
   /blue
   /purple
   /white



*/

var user0 = ["/start", "/pink", "/register", "/orange", "/red", "a"];
var user1 = ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"];
var user2 = ["a", "/one", "/two"];
var user3 = ["/red", "/orange", "/yellow", "/green", "/blue", "/purple", "/white", "/amber", "/HotRodPink", "/BritishRacingGreen"];
var user4 = ["/red", "/orange", "/amber", "/green", "/blue", "/purple", "/white", "/lavender", "/HotRodPink", "/BritishRacingGreen"];
var user5 = ["a"];

function findContiguousHistory(userA, userB) {
  // "/start", "/pink", "/register"
  // "/pink", "/register"
  // "/register"
  const sUser = [];
//   for (let i = 0; i < userA.length ; i++) {
//     sUser.push(userA.slice(i).join(" "));
//   }
//   for (let i = 0; i < userB.length ; i++) {
//     sUser.push(userB.slice(i).join(" "));
//   }
  
   for (let i = 0; i < userA.length ; i++) {
    sUser.push(userA.slice(i));
  }
  for (let i = 0; i < userB.length ; i++) {
    sUser.push(userB.slice(i));
  }
  
  //console.log(sUser)
   let maxCount = 0;
  
   for (let i = 0; i < sUser.length; i++) {
    for (let j = i + 1; j < sUser.length; j++) {
      if (sUser[i][0] !== sUser[j][0]) continue;
      else {
        console.log("sUser i", sUser[i])
        console.log("sUser j", sUser[j])
        for (let k = 0; k <  sUser[i].length; k++) {
          if (sUser[i][k] === sUser[j][k]) {
            maxCount++;
            //console.log("sUser i", sUser[i][k])
          } else {
            maxCount = 0;
          }
            console.log("maxCount", maxCount)
        }
      }
    }
  }
 
//   sUser = sUser.sort();
//   let userTokens;
//   for (let i = 0; i < sUser.length; i++) {
//     for (let j = 1; j < sUser.length; j++) {
//       userTokens = sUser[i].split(" ");
//     }
//   }
  
}

findContiguousHistory(user0, user1);