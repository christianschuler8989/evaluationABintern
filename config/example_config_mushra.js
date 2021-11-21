// configure the test here
var TestConfig = {
  "TestName": "Mushra Demo Test",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": true,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "",
  //"BeaqleServiceURL": "/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 3,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets": [
    //
    {
      "Name": "Christian_test_1",
      "TestID": "christian_1_a=a",
      "Files": {
        "Reference": "video/merkel00.mp4",
        "1": "video/merkel01.mp4",
        "2": "video/merkel02.mp4",
        "3": "video/merkel03.mp4",
        "4": "video/merkel04.mp4",
      }
    },{
      "Name": "Christian_test_2",
      "TestID": "christian_1_a=b",
      "Files": {
        "Reference": "video/mindPizzaEnglish.mp4",
        "1": "video/mindPizzaGerman.mp4",
      }
    },{
      "Name": "Christian_test_3",
      "TestID": "christian_1_a=c",
      "Files": {
        "Reference": "video/vitaPrinceItalian.mp4",
        "1": "video/vitaPrinceGerman.mp4",
      }
    },{
      "Name": "Christian_test_4",
      "TestID": "christian_1_a=d",
      "Files": {
        "Reference": "video/soundTest01.mp4",
        "1": "video/soundTest02.mp4",
        "2": "video/soundTest03.mp4",
        "3": "video/soundTest04.mp4",
      }
    }
  ]
}
