// const axios = require("axios");
// router.post("/subscribe_chicken", function(req, res){
//     var data = {
//         name: req.body.name,
//         subscriberName: subscriber_name
//     }
//     axios.post("http://broker-service:8080/subscribe",data,{'Content-type':'application/json'})
//     .then(res => console.log(res.status))
//     .catch(err => console.log(err));
//
// });
//
// router.post("/unsubscribe_chicken", function(req, res){
//     console.log("unubscribe chicken calling!!!")
//     var data = {
//         name: "chicken",
//         subscriberName: "subscriber-1"
//     }
//     axios.post("http://broker-service:8080/unsubscribe",data,{'Content-type':'application/json'})
//     .then(res => console.log(res.status))
//     .catch(err => console.log(err));
// });
//
// router.post("/subscribe_fish", function(req, res){
//     var data = {
//         name: "fish",
//         subscriberName: "subscriber-1"
//     }
//     axios.post("http://broker-service:8080/subscribe",data,{'Content-type':'application/json'})
//     .then(res => console.log(res.status))
//     .catch(err => console.log(err));
// });
//
// router.post("/unsubscribe_fish", function(req, res){
//     var data = {
//         name: "fish",
//         subscriberName: "subscriber-1"
//     }
//     axios.post("http://broker-service:8080/unsubscribe",data,{'Content-type':'application/json'})
//     .then(res => console.log(res.status))
//     .catch(err => console.log(err));
// });
//
// router.post("/subscribe_pork", function(req, res){
//     console.log("subchick");
//     var data = {
//         name: "pork",
//         subscriberName: "subscriber-2"
//     }
//     axios.post("http://broker-service:8080/subscribe",data,{'Content-type':'application/json'})
//     .then(res => console.log(res.status))
//     .catch(err => console.log(err));
// });
//
// router.post("/unsubscribe_pork", function(req, res){
//     console.log("unsubchick");
//     var data = {
//         name: "pork",
//         subscriberName: "subscriber-2"
//     }
//     axios.post("http://broker-service:8080/unsubscribe",data,{'Content-type':'application/json'})
//     .then(res => console.log(res.status))
//     .catch(err => console.log(err));
// });
//
// router.post("/subscribe_beef", function(req, res){
//     console.log("subchick");
//     var data = {
//         name: "beef",
//         subscriberName: "subscriber-1"
//     }
//     axios.post("http://broker-service:8080/subscribe",data,{'Content-type':'application/json'})
//     .then(res => console.log(res.status))
//     .catch(err => console.log(err));
// });
//
// router.post("/unsubscribe_beef", function(req, res){
//     console.log("unsubchick");
//     var data = {
//         name: "beef",
//         subscriberName: "subscriber-1"
//     }
//     axios.post("http://broker-service:8080/unsubscribe",data,{'Content-type':'application/json'})
//     .then(res => console.log(res.status))
//     .catch(err => console.log(err));
// });

//------------------------------------
    // <tr>
    //             <th><B>
    //                     <% if(name == 'chicken'){ %>
    //                         <span id = "chicken_name">
    //                             <%= name%>
    //                         </span>
    //                         <% } else{ %>
    //                             <span id = "chicken_name">-</span>
    //                             <% } %>
    //                 </B></th>
    //             <th>
    //                 <% if(name == 'chicken'){ %>
    //                     <span id = "chicken_protein">
    //                         <%= protein%>
    //                     </span>
    //                     <% } else{ %>
    //                         <span id = "chicken_protein">-</span>
    //                         <% } %>
    //             </th>
    //             <th>
    //                 <% if(name == 'chicken'){ %>
    //                     <span id = "chicken_calories">
    //                         <%= calories%>
    //                     </span>
    //                     <% } else{ %>
    //                         <span id = "chicken_calories">-</span>
    //                         <% } %>
    //             </th>
    //         </tr>
    //         <tr>
    //             <th><B>
    //                     <% if(name == 'fish'){ %>
    //                         <span id = "fish_name">
    //                             <%= name%>
    //                         </span>
    //                         <% } else{ %>
    //                             <span id = "fish_name">-</span>
    //                             <% } %>
    //                 </B></th>
    //             <th>
    //                 <% if(name == 'fish'){ %>
    //                     <span id = "fish_protein">
    //                         <%= protein%>
    //                     </span>
    //                     <% } else{ %>
    //                         <span id = "fish_protein">-</span>
    //                         <% } %>
    //             </th>
    //             <th>
    //                 <% if(name == 'fish'){ %>
    //                     <span id = "fish_calories">
    //                         <%= calories%>
    //                     </span>
    //                     <% } else{ %>
    //                         <span id = "fish_calories">-</span>
    //                         <% } %>
    //             </th>
    //         </tr>
    //
    //         <tr>
    //             <th><B>
    //                     <% if(name == 'beef'){ %>
    //                         <span id = "beef_name">
    //                             <%= name%>
    //                         </span>
    //                         <% } else{ %>
    //                             <span id = "beef_name">-</span>
    //                             <% } %>
    //                 </B></th>
    //             <th>
    //                 <% if(name == 'beef'){ %>
    //                     <span id = "beef_protein">
    //                         <%= protein%>
    //                     </span>
    //                     <% } else{ %>
    //                         <span id = "beef_protein">-</span>
    //                         <% } %>
    //             </th>
    //             <th>
    //                 <% if(name == 'beef'){ %>
    //                     <span id = "beef_calories">
    //                         <%= calories%>
    //                     </span>
    //                     <% } else{ %>
    //                         <span id = "beef_calories">-</span>
    //                         <% } %>
    //             </th>
    //         </tr>
    //         <tr>
    //             <th><B>
    //                     <% if(name == 'pork'){ %>
    //                         <span id = "pork_name">
    //                             <%= name%>
    //                         </span>
    //                         <% } else{ %>
    //                             <span id = "pork_name">-</span>
    //                             <% } %>
    //                 </B></th>
    //             <th>
    //                 <% if(name == 'pork'){ %>
    //                     <span id = "pork_protein">
    //                         <%= protein%>
    //                     </span>
    //                     <% } else{ %>
    //                         <span id = "pork_protein">-</span>
    //                         <% } %>
    //             </th>
    //             <th>
    //                 <% if(name == 'pork'){ %>
    //                     <span id = "pork_calories">
    //                         <%= calories%>
    //                     </span>
    //                     <% } else{ %>
    //                         <span id = "pork_calories">-</span>
    //                         <% } %>
    //             </th>
    //         </tr>

//---------------------------------------

// <tr>
//     <th><B><span>Chicken</span></B></th>
//     <th>
//         <button onClick="subscribe('chicken')">Subscribe</button>
//     </th>
//     <th>
//         <button onClick="unsubscribe('chicken')">Un-Subscribe</button>
//     </th>
// </tr>
// <tr>
//     <th><B><span>Fish</span></B></th>
//     <th>
//         <button onClick="subscribe('fish')">Subscribe</button>
//     </th>
//     <th>
//         <button onClick="unsubscribe('fish')">Un-Subscribe</button>
//     </th>
// </tr>
// <tr>
//     <th><B><span>Pork</span></B></th>
//     <th>
//         <button onClick="subscribe('pork')">Subscribe</button>
//     </th>
//     <th>
//         <button onClick="unsubscribe('pork')">Un-Subscribe</button>
//     </th>
// </tr>
// <tr>
//     <th><B><span>Beef</span></B></th>
//     <th>
//         <button onClick="subscribe('beef')">Subscribe</button>
//     </th>
//     <th>
//         <button onClick="unsubscribe('beef')">Un-Subscribe</button>
//     </th>
// </tr>