const express = require('express');
const axios = require('axios');
const {Kafka} = require("kafkajs")
const app = express();

const getFood = async (food) => {
        const res = await axios.get(`https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${food}`,{
            headers: {
                'x-rapidapi-host': 'nutrition-by-api-ninjas.p.rapidapi.com',
                'x-rapidapi-key': 'ec061f88cemsha7b28599fa14d82p19150cjsndfba1bae8f0f'
            }
        })
        .then(res => {
            postTobroker(res.data)
        });
        
}

const postTobroker = async (data) => {
    //  axios.post("http://broker-service:8080/publishData",data,{'Content-type':'application/json'})
    // .then(res => console.log(res.status))
    // .catch(err => console.log(err));
    //console.log(data);
    try
    {
         const kafka1 = new Kafka({
              "clientId": "myapp",
              "brokers" :["kafka-2:9092"]
         })

        const producer = kafka1.producer();
        //console.log("Connecting.....")
        await producer.connect()
        //console.log("Connected!")
        //A-M 0 , N-Z 1 
        // const partition = msg[0] < "N" ? 0 : 1;
        const result =  await producer.send({
            "topic": "beef",
            "messages": [
                {
                    "value": JSON.stringify(data)
                }
            ]
        })

        //console.log(`Send Successfully! ${JSON.stringify(result)}`)
        console.log(`Send beef Successfully!`)
        await producer.disconnect();
    }
    catch(ex)
    {
        console.error(`Something bad happened ${ex}`)
    }
}

function call_food(){
    var minutes = 1, the_interval = minutes * 10 * 6000;
    var i = 0;
    var food = ["beef"]
    setInterval(function () {
        getFood(food[i++])
        if (i == 1) {
            i = 0
            //clearInterval(interval)
        }
    }, 5000);
}

var pub_interval_2 = setInterval(function(){
    call_food();
    clearInterval(pub_interval_2);
}, 70000)



const PORT = 3001

app.listen(3001, () => {
    console.log(`Server is running on port ${PORT}.`);
});
