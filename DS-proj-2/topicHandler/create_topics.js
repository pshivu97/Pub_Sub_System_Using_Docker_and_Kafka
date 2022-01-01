const {Kafka} = require("kafkajs")

console.log("Inisde broker!!!");
var adminInterval = setInterval(function () {
    run();
    clearInterval(adminInterval)
}, 60000);


async function run(){
    console.log("Inisde broker Run method!!!");

    try
    {
         const kafka1 = new Kafka({
              "clientId": "myapp",
              "brokers" :["kafka-1:9092"]
         })
         const kafka2 = new Kafka({
            "clientId": "myapp",
            "brokers" :["kafka-2:9092"]
        })
        const kafka3 = new Kafka({
            "clientId": "myapp",
            "brokers" :["kafka-3:9092"]
        })
        

        const admin1 = kafka1.admin();
        console.log("Connecting.....")
        await admin1.connect()
        console.log("Connected!")
        //A-M, N-Z
        await admin1.createTopics({
            "topics": [{
                "topic" : "fish"
            },
            {
                "topic" : "chicken",
                "numPartitions":2,
                "replicationFactor":3,
                "waitForLeaders": true
            }
        ]
        })
        console.log("Fish Created Successfully!")
        await admin1.disconnect();

         // -------------------------------------------


        const admin2 = kafka2.admin();
        console.log("Connecting.....")
        await admin2.connect()
        console.log("Connected!")
        //A-M, N-Z
        await admin2.createTopics({
            "topics": [{
                "topic" : "pork",
                "replicationFactor":3,
                "waitForLeaders": true
            }]
        })
        console.log("Pork Created Successfully!")
        await admin2.disconnect();

        // -------------------------------------------

        const admin3 = kafka3.admin();
        console.log("Connecting.....")
        await admin3.connect()
        console.log("Connected!")
        //A-M, N-Z
        await admin3.createTopics({
            "topics": [{
                "topic" : "beef"
            }]
        })
        console.log("Beef Created Successfully!")
        await admin3.disconnect();
    }
    catch(ex)
    {
        console.error(`Something bad happened ${ex}`)
    }
    finally{
        process.exit(0);
    }
}