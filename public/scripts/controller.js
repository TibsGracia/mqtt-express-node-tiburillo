// basic functionalities


$(document).ready(function () {
  var topic = "tiburillo/device/status";

  client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")//broker address

  client.on("connect", function () {
    console.log('connected')
  });
  client.subscribe(topic);

  $("#btnOn").click(function () {
    $(this).css('disabled', 'true')
    $('#btnOff').css('disabled', 'false')
    $('#status').val("The device is currently turned on!").css("color", "green");
    client.publish(topic, "Turned On: "+ moment().format('MMMM Do YYYY, h:mm:ss a'));
  })

  $("#btnOff").click(function () {
    $(this).css('disabled', 'false')
    $('#btnOff').css('disabled', 'true')
    $('#status').val("The device is currently turned off!").css("color", "red");
    client.publish(topic, "Turned Off: "+ moment().format('MMMM Do YYYY, h:mm:ss a'));
  })
})

    // $("#btnPublish").click(function () {
    //   var topic = $("#topic").val();
    //   if (topic == "") {
    //     error();
    //   } else {
    //     $("#tblPublish tbody").prepend("<tr>" +
    //       "<td>" + topic + "</td>" +
    //       "<td>" + $('#payload').val() + "</td>" +
    //       "<td>" + moment().format('MMMM Do YYYY, h:mm:ss a') + "</td>");
    //       client.publish($('#topic').val(), $('#payload').val());
    //   }
    //   $("#payload").val("");
    // });



    // $("#btnDConnect").click(function (e) {
    //   e.preventDefault();
    //   $('#status').val("You are disconnected!").css("color", "red");
    //   client.end();
    // });

    // $("#btnUnsubscribe").click(function (er) {
    //   client.unsubscribe(subTopic)
    //   $("#Stopic").val("");
    // });




// // advance functionalities
// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// client.subscribe("mqtt/demo", function (err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("subscribed")
//   }
// })

// client.on("connect", function(){
//     console.log("Successfully connected");
// })

// client.on("message", function (topic, payload) {
//   console.log([topic, payload].join(": "));
//   client.end();
// })

// client.publish("mqtt/demo", "hello world!", function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("published")
//   }
// })
