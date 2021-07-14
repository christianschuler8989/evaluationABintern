// configure the test here
var TestConfig = {
  "TestName": "Mushra Test for TTS outputs",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": true,
  "EnableABLoop": true,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "https://www.timobaumann.de/temp/vtts/beaqleJS_Service.php",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 11,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets": [
    //
    {
      "Name": "Example 1",
      "TestID": "id1_1",
      "Files": {
            "Reference": "audio/001/reference.wav",
            "1": "audio/001/0_TTS-corrected-espeak.wav",
            "2": "audio/001/1_TTS-corrected-sequitur.wav",
        }
    },
    {
      "Name": "Example 2",
      "TestID": "id1_2",
      "Files": {
        "Reference": "audio/002/reference.wav",
        "1": "audio/002/0_TTS-corrected-espeak.wav",
        "2": "audio/002/1_TTS-corrected-sequitur.wav",
        }
    },
    {
      "Name": "Example 3",
      "TestID": "id1_3",
      "Files": {
        "Reference": "audio/003/reference.wav",
        "1": "audio/003/0_TTS-corrected-espeak.wav",
        "2": "audio/003/1_TTS-corrected-sequitur.wav",
        }
    },
    //
    {
      "Name": "Example 4",
      "TestID": "id1_4",
      "Files": {
        "Reference": "audio/004/reference.wav",
        "1": "audio/004/0_TTS-corrected-espeak.wav",
        "2": "audio/004/1_TTS-corrected-sequitur.wav",
        }
    },

    {
      "Name": "Example 5",
      "TestID": "id1_5",
      "Files": {
        "Reference": "audio/005/reference.wav",
        "1": "audio/005/0_TTS-corrected-espeak.wav",
        "2": "audio/005/1_TTS-corrected-sequitur.wav",
        }
    },

    {
      "Name": "Example 6",
      "TestID": "id1_6",
      "Files": {
        "Reference": "audio/006/reference.wav",
        "1": "audio/006/0_TTS-corrected-espeak.wav",
        "2": "audio/006/1_TTS-corrected-sequitur.wav",
        }
    },

    {
      "Name": "Example 7",
      "TestID": "id1_7",
      "Files": {
        "Reference": "audio/007/reference.wav",
        "1": "audio/007/0_TTS-corrected-espeak.wav",
        "2": "audio/007/1_TTS-corrected-sequitur.wav",
        }
    },

    {
      "Name": "Example 8",
      "TestID": "id1_8",
      "Files": {
        "Reference": "audio/008/reference.wav",
        "1": "audio/008/0_TTS-corrected-espeak.wav",
        "2": "audio/008/1_TTS-corrected-sequitur.wav",
        }
    },

    {
      "Name": "Example 9",
      "TestID": "id1_9",
      "Files": {
        "Reference": "audio/009/reference.wav",
        "1": "audio/009/0_TTS-corrected-espeak.wav",
        "2": "audio/009/1_TTS-corrected-sequitur.wav",
        }
    },

    {
      "Name": "Example 10",
      "TestID": "id1_10",
      "Files": {
        "Reference": "audio/010/reference.wav",
        "1": "audio/010/0_TTS-corrected-espeak.wav",
        "2": "audio/010/1_TTS-corrected-sequitur.wav",
        }
    },

    {
      "Name": "Example 11",
      "TestID": "id1_11",
      "Files": {
        "Reference": "audio/011/reference.wav",
        "1": "audio/011/0_TTS-corrected-espeak.wav",
        "2": "audio/011/1_TTS-corrected-sequitur.wav",
        }
    },
  ]
}
