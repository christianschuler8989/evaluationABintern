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
{ 
 	"Name": "000", 
 	"TestID": "mind_001", 
 	"Files": 
	{
		"A": "video/mind_english.mp4",
		"B": "video/mind_german.mp4",
	} 
},
{ 
 	"Name": "001", 
 	"TestID": "mind_002", 
 	"Files": 
	{
		"A": "video/mind_english.mp4",
		"B": "video/pizza_01.mp4",
	} 
},
]
}
