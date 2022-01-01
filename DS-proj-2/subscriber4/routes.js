var express = require("express");
const axios = require('axios');
var router = express.Router();
const app = express();
const {Kafka} = require("kafkajs")

router.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
router.use(express.urlencoded({ extended: true }));

let food_data = {};
let subscribed_topis = [];

const kafka = new Kafka({
    "clientId": "myapp",
    "brokers" :["kafka-1:9092"]
})

router.get("/", function(req,res){
    res.render("index", food_data);
});

subscriber_name = "subscriber4"
port = 4003

async function handle_subscribe(topic){
    try{

        const consumer = kafka.consumer({"groupId": `${subscriber_name}_${topic}`})

        await consumer.connect()

        await consumer.subscribe({
            "topic": topic,
            "fromBeginning": true
        });
        await consumer.run({
            "eachMessage": async result => {
                updateFoodData((result.message.value).toString('utf-8'));
                console.log(`Data from Kafka ${result.message.value} on partition ${result.partition}`);
            }
        });
    }
    catch(ex){
        console.error(`Something bad happened ${ex}`)
    }
}

router.post("/subscribe", async function(req, res){

    subscribed_topis.push(req.body.name);
    
    console.log("Subscribing to : " + req.body.name);

    res.send();

    handle_subscribe(req.body.name);

});

router.post("/unsubscribe", async function(req, res){
    let topic = req.body.name;
    
    console.log("Un Subscribing to : " + topic);

    if(subscribed_topis.includes(topic)) {
        subscribed_topis = subscribed_topis.filter(x => x !== topic);
    }

    if(food_data.hasOwnProperty(topic)) {
        delete food_data[topic]
    }

    res.send();
});

function updateFoodData(data){
    data = JSON.parse(data);
    if(subscribed_topis.indexOf(data[0].name) == -1){
        return;
    }
    console.log("Data from kafka for topic :" + data[0].name);
    food_data[data[0].name] = {
        name:data[0].name,
        protein:data[0].protein_g,
        calories:data[0].calories
    };
}


router.get("/get_food_data", function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        food_data  : food_data
    }));
    res.send();
});


router.post("/delete_subscription_data", function(req,res){
    //console.log("Subscription Data deleted from Subscriber");
    food_data[req.body.name] = {name:'-',protein:'-',calories:'-'};
    res.sendStatus(200);
});

module.exports = router;
