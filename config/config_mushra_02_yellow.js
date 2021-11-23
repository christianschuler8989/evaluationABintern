// configure the test here
var TestConfig = {
  "TestName": "Mushra Yellow Test",
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
  "AnchorsNumber": 2,         // <= Number of testsets that are always part of a session
  "MaxTestsPerRun": 25,
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
    // "YELLOW" testsets that serve as second batch
    {
     	"Name": "002",
     	"TestID": "anfang_a_aL_mid",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Anfang_a_002_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Anfang_a_002_shiftLeft1_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Anfang_a_002_shiftLeft3_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Anfang_a_002_shiftLeft5_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Anfang_a_002_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Anfang_a_002_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "005",
     	"TestID": "anfang_a_aR_mid",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Anfang_a_002_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Anfang_a_002_shiftRight1_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Anfang_a_002_shiftRight3_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Anfang_a_002_shiftRight5_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Anfang_a_002_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Anfang_a_002_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "011",
     	"TestID": "anfang_a_vL",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Anfang_a_002_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Anfang_a_002_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Anfang_a_002_shiftRight4_0.90cut.mp4",
    		"3": "video/visualMod_2021-01-09_Anfang_a_002_shiftLeft2_cut.mp4",
    		"4": "video/visualMod_2021-01-09_Anfang_a_002_shiftLeft3_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Anfang_a_002_shiftLeft4_cut.mp4",
    	}
    },
    {
     	"Name": "014",
     	"TestID": "euro_p_aL_mid",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft1_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft3_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft5_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Europaeisch_p_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Europaeisch_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "019",
     	"TestID": "euro_p_mixL",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Europaeisch_p_001_shiftLeft1_0.90cut.mp4",
    		"2": "video/mixMod_2021-01-09_Europaeisch_p_001_shiftLeft2_0.90cut.mp4",
    		"3": "video/mixMod_2021-01-09_Europaeisch_p_001_shiftLeft3_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Europaeisch_p_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Europaeisch_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "027",
     	"TestID": "euro_p_vR_mid",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Europaeisch_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Europaeisch_p_001_shiftRight4_0.90cut.mp4",
    		"3": "video/visualMod_2021-01-09_Europaeisch_p_001_shiftRight1_cut.mp4",
    		"4": "video/visualMod_2021-01-09_Europaeisch_p_001_shiftRight3_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Europaeisch_p_001_shiftRight5_cut.mp4",
    	}
    },
    {
     	"Name": "029",
     	"TestID": "paar_w_aL",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Paar_w_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Paar_w_001_shiftLeft1_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Paar_w_001_shiftLeft2_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Paar_w_001_shiftLeft3_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Paar_w_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Paar_w_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "034",
     	"TestID": "paar_w_mulR",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Paar_w_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Paar_w_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Paar_w_001_shiftRight1_0.90cut.mp4",
    		"3": "video/multiMod_2021-01-09_Paar_w_001_shiftRight2_0.90cut.mp4",
    		"4": "video/multiMod_2021-01-09_Paar_w_001_shiftRight3_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Paar_w_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "038",
     	"TestID": "pandemie_p_aL_mid",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft1_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft3_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft5_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Pandemie_p_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Pandemie_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "041",
     	"TestID": "pandemie_p_aR_mid",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Pandemie_p_001_shiftRight1_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Pandemie_p_001_shiftRight3_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Pandemie_p_001_shiftRight5_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Pandemie_p_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Pandemie_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "044",
     	"TestID": "pandemie_p_mixR",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Pandemie_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/mixMod_2021-01-09_Pandemie_p_001_shiftRight1_0.90cut.mp4",
    		"3": "video/mixMod_2021-01-09_Pandemie_p_001_shiftRight2_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Pandemie_p_001_shiftRight3_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Pandemie_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "048",
     	"TestID": "pandemie_p_vL_mid",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Pandemie_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Pandemie_p_001_shiftRight4_0.90cut.mp4",
    		"3": "video/visualMod_2021-01-09_Pandemie_p_001_shiftLeft1_cut.mp4",
    		"4": "video/visualMod_2021-01-09_Pandemie_p_001_shiftLeft3_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Pandemie_p_001_shiftLeft5_cut.mp4",
    	}
    },
    {
     	"Name": "053",
     	"TestID": "tempo_a_aL",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_a_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Tempo_a_001_shiftLeft1_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Tempo_a_001_shiftLeft2_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Tempo_a_001_shiftLeft3_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Tempo_a_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Tempo_a_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "054",
     	"TestID": "tempo_a_aR",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_a_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Tempo_a_001_shiftRight1_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Tempo_a_001_shiftRight2_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Tempo_a_001_shiftRight3_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Tempo_a_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Tempo_a_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "058",
     	"TestID": "tempo_all_a_right",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_a_001_shiftRight4_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"2": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"3": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    		"4": "video/visualMod_2021-01-09_Tempo_a_001_shiftLeft4_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Tempo_a_001_shiftRight4_cut.mp4",
    	}
    },
    {
     	"Name": "059",
     	"TestID": "tempo_all_p_left",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    		"3": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"4": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    		"5": "video/visualMod_2021-01-09_Tempo_p_001_shiftRight4_cut.mp4",
    	}
    },
    {
     	"Name": "060",
     	"TestID": "tempo_all_p_right",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    		"2": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"3": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    		"4": "video/visualMod_2021-01-09_Tempo_p_001_shiftLeft4_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Tempo_p_001_shiftRight4_cut.mp4",
    	}
    },
    {
     	"Name": "072",
     	"TestID": "tempo_p_aL_mid",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft1_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft3_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft5_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "075",
     	"TestID": "tempo_p_aR_mid",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Tempo_p_001_shiftRight1_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Tempo_p_001_shiftRight3_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Tempo_p_001_shiftRight5_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "079",
     	"TestID": "tempo_p_mulL",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Tempo_p_001_shiftLeft1_0.90cut.mp4",
    		"3": "video/multiMod_2021-01-09_Tempo_p_001_shiftLeft2_0.90cut.mp4",
    		"4": "video/multiMod_2021-01-09_Tempo_p_001_shiftLeft3_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "082",
     	"TestID": "tempo_p_vL_mid",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    		"3": "video/visualMod_2021-01-09_Tempo_p_001_shiftLeft1_cut.mp4",
    		"4": "video/visualMod_2021-01-09_Tempo_p_001_shiftLeft3_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Tempo_p_001_shiftLeft5_cut.mp4",
    	}
    },
    {
     	"Name": "091",
     	"TestID": "tempo_w_mulL",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_w_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Tempo_w_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Tempo_w_001_shiftLeft1_0.90cut.mp4",
    		"3": "video/multiMod_2021-01-09_Tempo_w_001_shiftLeft2_0.90cut.mp4",
    		"4": "video/multiMod_2021-01-09_Tempo_w_001_shiftLeft3_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Tempo_w_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "094",
     	"TestID": "tempo_w_vR",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_w_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Tempo_w_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Tempo_w_001_shiftRight4_0.90cut.mp4",
    		"3": "video/visualMod_2021-01-09_Tempo_w_001_shiftRight2_cut.mp4",
    		"4": "video/visualMod_2021-01-09_Tempo_w_001_shiftRight3_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Tempo_w_001_shiftRight4_cut.mp4",
    	}
    }
  ]
}
