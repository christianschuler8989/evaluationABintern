// configure the test here
var TestConfig = {
  "TestName": "Mushra Blue Test",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": true,
  "UploadIntermediates": true,
  "BeaqleServiceURL": "https://www.timobaumann.de/temp/vtts/beaqleJS_Service.php",
  "SupervisorContact": "7schuler@informatik.uni-hamburg.de",
  "RandomizeTestOrder": true,
  "AnchorsNumber": 2,
  "MaxTestsPerRun": 10,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets": [
    // "GREEN" testsets that serve as anchors
    {
     	"Name": "055",
     	"TestID": "tempo_all_aL",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_a_001_shiftLeft4_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Tempo_w_001_shiftLeft4_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "062",
     	"TestID": "tempo_all_vR",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    		"3": "video/visualMod_2021-01-09_Tempo_a_001_shiftRight4_cut.mp4",
    		"4": "video/visualMod_2021-01-09_Tempo_p_001_shiftRight4_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Tempo_w_001_shiftRight4_cut.mp4",
    	}
    },
    // "BLUE" testsets that serve as first batch
    {
      "Name": "001",
      "TestID": "anfang_a_aL_big",
      "Files":
      {
        "Reference": "video/audioMod_2021-01-09_Anfang_a_002_shiftLeft0_0.90cut.mp4",
        "1": "video/audioMod_2021-01-09_Anfang_a_002_shiftLeft2_0.90cut.mp4",
        "2": "video/audioMod_2021-01-09_Anfang_a_002_shiftLeft4_0.90cut.mp4",
        "3": "video/audioMod_2021-01-09_Anfang_a_002_shiftLeft6_0.90cut.mp4",
        "4": "video/mixMod_2021-01-09_Anfang_a_002_shiftLeft4_0.90cut.mp4",
        "5": "video/multiMod_2021-01-09_Anfang_a_002_shiftRight4_0.90cut.mp4",
      }
    },
    {
      "Name": "004",
      "TestID": "anfang_a_aR_big",
      "Files":
      {
        "Reference": "video/audioMod_2021-01-09_Anfang_a_002_shiftLeft0_0.90cut.mp4",
        "1": "video/audioMod_2021-01-09_Anfang_a_002_shiftRight2_0.90cut.mp4",
        "2": "video/audioMod_2021-01-09_Anfang_a_002_shiftRight4_0.90cut.mp4",
        "3": "video/audioMod_2021-01-09_Anfang_a_002_shiftRight6_0.90cut.mp4",
        "4": "video/mixMod_2021-01-09_Anfang_a_002_shiftLeft4_0.90cut.mp4",
        "5": "video/multiMod_2021-01-09_Anfang_a_002_shiftRight4_0.90cut.mp4",
      }
    },
    {
     	"Name": "012",
     	"TestID": "anfang_a_vR",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Anfang_a_002_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Anfang_a_002_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Anfang_a_002_shiftRight4_0.90cut.mp4",
    		"3": "video/visualMod_2021-01-09_Anfang_a_002_shiftRight2_cut.mp4",
    		"4": "video/visualMod_2021-01-09_Anfang_a_002_shiftRight3_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Anfang_a_002_shiftRight4_cut.mp4",
    	}
    },
    {
     	"Name": "013",
     	"TestID": "euro_p_aL_big",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft2_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft4_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft6_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Europaeisch_p_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Europaeisch_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "016",
     	"TestID": "euro_p_aR_big",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftRight2_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftRight4_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftRight6_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Europaeisch_p_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Europaeisch_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "020",
     	"TestID": "euro_p_mixR",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Europaeisch_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/mixMod_2021-01-09_Europaeisch_p_001_shiftRight1_0.90cut.mp4",
    		"3": "video/mixMod_2021-01-09_Europaeisch_p_001_shiftRight2_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Europaeisch_p_001_shiftRight3_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Europaeisch_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
      "Name": "023",
      "TestID": "euro_p_vL_big",
      "Files":
      {
        "Reference": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft0_0.90cut.mp4",
        "1": "video/mixMod_2021-01-09_Europaeisch_p_001_shiftLeft4_0.90cut.mp4",
        "2": "video/multiMod_2021-01-09_Europaeisch_p_001_shiftRight4_0.90cut.mp4",
        "3": "video/visualMod_2021-01-09_Europaeisch_p_001_shiftLeft2_cut.mp4",
        "4": "video/visualMod_2021-01-09_Europaeisch_p_001_shiftLeft4_cut.mp4",
        "5": "video/visualMod_2021-01-09_Europaeisch_p_001_shiftLeft6_cut.mp4",
      }
    },
    {
     	"Name": "026",
     	"TestID": "euro_p_vR_big",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Europaeisch_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Europaeisch_p_001_shiftRight4_0.90cut.mp4",
    		"3": "video/visualMod_2021-01-09_Europaeisch_p_001_shiftRight2_cut.mp4",
    		"4": "video/visualMod_2021-01-09_Europaeisch_p_001_shiftRight4_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Europaeisch_p_001_shiftRight6_cut.mp4",
    	}
    },
    {
      "Name": "035",
      "TestID": "paar_w_vL",
      "Files":
      {
        "Reference": "video/audioMod_2021-01-09_Paar_w_001_shiftLeft0_0.90cut.mp4",
        "1": "video/mixMod_2021-01-09_Paar_w_001_shiftLeft4_0.90cut.mp4",
        "2": "video/multiMod_2021-01-09_Paar_w_001_shiftRight4_0.90cut.mp4",
        "3": "video/visualMod_2021-01-09_Paar_w_001_shiftLeft2_cut.mp4",
        "4": "video/visualMod_2021-01-09_Paar_w_001_shiftLeft3_cut.mp4",
        "5": "video/visualMod_2021-01-09_Paar_w_001_shiftLeft4_cut.mp4",
      }
    },
    {
      "Name": "036",
      "TestID": "paar_w_vR",
      "Files":
      {
        "Reference": "video/audioMod_2021-01-09_Paar_w_001_shiftLeft0_0.90cut.mp4",
        "1": "video/mixMod_2021-01-09_Paar_w_001_shiftLeft4_0.90cut.mp4",
        "2": "video/multiMod_2021-01-09_Paar_w_001_shiftRight4_0.90cut.mp4",
        "3": "video/visualMod_2021-01-09_Paar_w_001_shiftRight2_cut.mp4",
        "4": "video/visualMod_2021-01-09_Paar_w_001_shiftRight3_cut.mp4",
        "5": "video/visualMod_2021-01-09_Paar_w_001_shiftRight4_cut.mp4",
      }
    },
    {
      "Name": "037",
      "TestID": "pandemie_p_aL_big",
      "Files":
      {
        "Reference": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft0_0.90cut.mp4",
        "1": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft2_0.90cut.mp4",
        "2": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft4_0.90cut.mp4",
        "3": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft6_0.90cut.mp4",
        "4": "video/mixMod_2021-01-09_Pandemie_p_001_shiftLeft4_0.90cut.mp4",
        "5": "video/multiMod_2021-01-09_Pandemie_p_001_shiftRight4_0.90cut.mp4",
      }
    },
    {
      "Name": "040",
      "TestID": "pandemie_p_aR_big",
      "Files":
      {
        "Reference": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft0_0.90cut.mp4",
        "1": "video/audioMod_2021-01-09_Pandemie_p_001_shiftRight2_0.90cut.mp4",
        "2": "video/audioMod_2021-01-09_Pandemie_p_001_shiftRight4_0.90cut.mp4",
        "3": "video/audioMod_2021-01-09_Pandemie_p_001_shiftRight6_0.90cut.mp4",
        "4": "video/mixMod_2021-01-09_Pandemie_p_001_shiftLeft4_0.90cut.mp4",
        "5": "video/multiMod_2021-01-09_Pandemie_p_001_shiftRight4_0.90cut.mp4",
      }
    },
    {
     	"Name": "043",
     	"TestID": "pandemie_p_mixL",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Pandemie_p_001_shiftLeft1_0.90cut.mp4",
    		"2": "video/mixMod_2021-01-09_Pandemie_p_001_shiftLeft2_0.90cut.mp4",
    		"3": "video/mixMod_2021-01-09_Pandemie_p_001_shiftLeft3_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Pandemie_p_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Pandemie_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
      "Name": "047",
      "TestID": "pandemie_p_vL_big",
      "Files":
      {
        "Reference": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft0_0.90cut.mp4",
        "1": "video/mixMod_2021-01-09_Pandemie_p_001_shiftLeft4_0.90cut.mp4",
        "2": "video/multiMod_2021-01-09_Pandemie_p_001_shiftRight4_0.90cut.mp4",
        "3": "video/visualMod_2021-01-09_Pandemie_p_001_shiftLeft2_cut.mp4",
        "4": "video/visualMod_2021-01-09_Pandemie_p_001_shiftLeft4_cut.mp4",
        "5": "video/visualMod_2021-01-09_Pandemie_p_001_shiftLeft6_cut.mp4",
      }
    },
    {
     	"Name": "051",
     	"TestID": "pandemie_p_vR_mid",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Pandemie_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Pandemie_p_001_shiftRight4_0.90cut.mp4",
    		"3": "video/visualMod_2021-01-09_Pandemie_p_001_shiftRight1_cut.mp4",
    		"4": "video/visualMod_2021-01-09_Pandemie_p_001_shiftRight3_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Pandemie_p_001_shiftRight5_cut.mp4",
    	}
    },
    {
     	"Name": "061",
     	"TestID": "tempo_all_vL",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    		"3": "video/visualMod_2021-01-09_Tempo_a_001_shiftLeft4_cut.mp4",
    		"4": "video/visualMod_2021-01-09_Tempo_p_001_shiftLeft4_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Tempo_w_001_shiftLeft4_cut.mp4",
    	}
    },
    {
     	"Name": "069",
     	"TestID": "tempo_a_vL",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_a_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Tempo_a_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Tempo_a_001_shiftRight4_0.90cut.mp4",
    		"3": "video/visualMod_2021-01-09_Tempo_a_001_shiftLeft2_cut.mp4",
    		"4": "video/visualMod_2021-01-09_Tempo_a_001_shiftLeft3_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Tempo_a_001_shiftLeft4_cut.mp4",
    	}
    },
    {
     	"Name": "070",
     	"TestID": "tempo_a_vR",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_a_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Tempo_a_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Tempo_a_001_shiftRight4_0.90cut.mp4",
    		"3": "video/visualMod_2021-01-09_Tempo_a_001_shiftRight2_cut.mp4",
    		"4": "video/visualMod_2021-01-09_Tempo_a_001_shiftRight3_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Tempo_a_001_shiftRight4_cut.mp4",
    	}
    },
    {
      "Name": "071",
      "TestID": "tempo_p_aL_big",
      "Files":
      {
        "Reference": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
        "1": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft2_0.90cut.mp4",
        "2": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
        "3": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft6_0.90cut.mp4",
        "4": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
        "5": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
      }
    },
    {
     	"Name": "074",
     	"TestID": "tempo_p_aR_big",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Tempo_p_001_shiftRight2_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Tempo_p_001_shiftRight6_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "078",
     	"TestID": "tempo_p_mixR",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/mixMod_2021-01-09_Tempo_p_001_shiftRight1_0.90cut.mp4",
    		"3": "video/mixMod_2021-01-09_Tempo_p_001_shiftRight2_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Tempo_p_001_shiftRight3_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "081",
     	"TestID": "tempo_p_vL_big",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    		"3": "video/visualMod_2021-01-09_Tempo_p_001_shiftLeft2_cut.mp4",
    		"4": "video/visualMod_2021-01-09_Tempo_p_001_shiftLeft4_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Tempo_p_001_shiftLeft6_cut.mp4",
    	}
    },
    {
      "Name": "084",
      "TestID": "tempo_p_vR_big",
      "Files":
      {
        "Reference": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
        "1": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
        "2": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
        "3": "video/visualMod_2021-01-09_Tempo_p_001_shiftRight2_cut.mp4",
        "4": "video/visualMod_2021-01-09_Tempo_p_001_shiftRight4_cut.mp4",
        "5": "video/visualMod_2021-01-09_Tempo_p_001_shiftRight6_cut.mp4",
      }
    }
  ]
}
