// configure the test here
var TestConfig = {
  "TestName": "ABX Demo Test",
  "LoopByDefault": true,
  "ShowFileIDs": false,
  "ShowResults": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  //"BeaqleServiceURL": "/web_service/beaqleJS_Service.php",
  "BeaqleServiceURL": "",
  "SupervisorContact": "",
  "AudioRoot": "",
  "Testsets": [
    //    
    {
      "Name": "Christians_Test",
      "TestID": "id1_1",
      "Files": {
            "A": "video/merkel00.mp4",
            "B": "video/merkel01.mp4",
        }
    },
  ]
}
