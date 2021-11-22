// configure the test here
var TestConfig = {
  "TestName": "Mushra Red Test",
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
    // "RED" testsets that serve as third batch
    {
     	"Name": "006",
     	"TestID": "anfang_a_aR_tin",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Anfang_a_002_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Anfang_a_002_shiftRight1_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Anfang_a_002_shiftRight2_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Anfang_a_002_shiftRight3_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Anfang_a_002_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Anfang_a_002_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "007",
     	"TestID": "anfang_a_mixL",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Anfang_a_002_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Anfang_a_002_shiftLeft1_0.90cut.mp4",
    		"2": "video/mixMod_2021-01-09_Anfang_a_002_shiftLeft2_0.90cut.mp4",
    		"3": "video/mixMod_2021-01-09_Anfang_a_002_shiftLeft3_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Anfang_a_002_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Anfang_a_002_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "009",
     	"TestID": "anfang_a_mulL",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Anfang_a_002_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Anfang_a_002_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Anfang_a_002_shiftLeft1_0.90cut.mp4",
    		"3": "video/multiMod_2021-01-09_Anfang_a_002_shiftLeft2_0.90cut.mp4",
    		"4": "video/multiMod_2021-01-09_Anfang_a_002_shiftLeft3_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Anfang_a_002_shiftRight4_0.90cut.mp4",
    	}
    },{
     	"Name": "017",
     	"TestID": "euro_p_aR_mid",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftRight1_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftRight3_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftRight5_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Europaeisch_p_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Europaeisch_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "021",
     	"TestID": "euro_p_mulL",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Europaeisch_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Europaeisch_p_001_shiftLeft1_0.90cut.mp4",
    		"3": "video/multiMod_2021-01-09_Europaeisch_p_001_shiftLeft2_0.90cut.mp4",
    		"4": "video/multiMod_2021-01-09_Europaeisch_p_001_shiftLeft3_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Europaeisch_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
      "Name": "025",
      "TestID": "euro_p_vL_tin",
      "Files":
      {
        "Reference": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft0_0.90cut.mp4",
        "1": "video/mixMod_2021-01-09_Europaeisch_p_001_shiftLeft4_0.90cut.mp4",
        "2": "video/multiMod_2021-01-09_Europaeisch_p_001_shiftRight4_0.90cut.mp4",
        "3": "video/visualMod_2021-01-09_Europaeisch_p_001_shiftLeft2_cut.mp4",
        "4": "video/visualMod_2021-01-09_Europaeisch_p_001_shiftLeft3_cut.mp4",
        "5": "video/visualMod_2021-01-09_Europaeisch_p_001_shiftLeft4_cut.mp4",
      }
    },
    {
      "Name": "028",
      "TestID": "euro_p_vR_tin",
      "Files":
      {
        "Reference": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft0_0.90cut.mp4",
        "1": "video/mixMod_2021-01-09_Europaeisch_p_001_shiftLeft4_0.90cut.mp4",
        "2": "video/multiMod_2021-01-09_Europaeisch_p_001_shiftRight4_0.90cut.mp4",
        "3": "video/visualMod_2021-01-09_Europaeisch_p_001_shiftRight2_cut.mp4",
        "4": "video/visualMod_2021-01-09_Europaeisch_p_001_shiftRight3_cut.mp4",
        "5": "video/visualMod_2021-01-09_Europaeisch_p_001_shiftRight4_cut.mp4",
      }
    },
    {
     	"Name": "032",
     	"TestID": "paar_w_mixR",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Paar_w_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Paar_w_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/mixMod_2021-01-09_Paar_w_001_shiftRight1_0.90cut.mp4",
    		"3": "video/mixMod_2021-01-09_Paar_w_001_shiftRight2_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Paar_w_001_shiftRight3_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Paar_w_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "033",
     	"TestID": "paar_w_mulL",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Paar_w_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Paar_w_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Paar_w_001_shiftLeft1_0.90cut.mp4",
    		"3": "video/multiMod_2021-01-09_Paar_w_001_shiftLeft2_0.90cut.mp4",
    		"4": "video/multiMod_2021-01-09_Paar_w_001_shiftLeft3_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Paar_w_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
      "Name": "042",
      "TestID": "pandemie_p_aR_tin",
      "Files":
      {
        "Reference": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft0_0.90cut.mp4",
        "1": "video/audioMod_2021-01-09_Pandemie_p_001_shiftRight1_0.90cut.mp4",
        "2": "video/audioMod_2021-01-09_Pandemie_p_001_shiftRight2_0.90cut.mp4",
        "3": "video/audioMod_2021-01-09_Pandemie_p_001_shiftRight3_0.90cut.mp4",
        "4": "video/mixMod_2021-01-09_Pandemie_p_001_shiftLeft4_0.90cut.mp4",
        "5": "video/multiMod_2021-01-09_Pandemie_p_001_shiftRight4_0.90cut.mp4",
      }
    },
    {
     	"Name": "045",
     	"TestID": "pandemie_p_mulL",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Pandemie_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Pandemie_p_001_shiftLeft1_0.90cut.mp4",
    		"3": "video/multiMod_2021-01-09_Pandemie_p_001_shiftLeft2_0.90cut.mp4",
    		"4": "video/multiMod_2021-01-09_Pandemie_p_001_shiftLeft3_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Pandemie_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "050",
     	"TestID": "pandemie_p_vR_big",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Pandemie_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Pandemie_p_001_shiftRight4_0.90cut.mp4",
    		"3": "video/visualMod_2021-01-09_Pandemie_p_001_shiftRight2_cut.mp4",
    		"4": "video/visualMod_2021-01-09_Pandemie_p_001_shiftRight4_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Pandemie_p_001_shiftRight6_cut.mp4",
    	}
    },
    {
     	"Name": "056",
     	"TestID": "tempo_all_a_left",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_a_001_shiftLeft4_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Tempo_a_001_shiftRight4_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"3": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"4": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    		"5": "video/visualMod_2021-01-09_Tempo_a_001_shiftRight4_cut.mp4",
    	}
    },
    {
     	"Name": "064",
     	"TestID": "tempo_all_w_right",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Tempo_w_001_shiftRight4_0.90cut.mp4",
    		"2": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"3": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    		"4": "video/visualMod_2021-01-09_Tempo_w_001_shiftLeft4_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Tempo_w_001_shiftRight4_cut.mp4",
    	}
    },
    {
     	"Name": "066",
     	"TestID": "tempo_a_mixR",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_a_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Tempo_a_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/mixMod_2021-01-09_Tempo_a_001_shiftRight1_0.90cut.mp4",
    		"3": "video/mixMod_2021-01-09_Tempo_a_001_shiftRight2_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Tempo_a_001_shiftRight3_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Tempo_a_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "068",
     	"TestID": "tempo_a_mulR",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_a_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Tempo_a_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Tempo_a_001_shiftRight1_0.90cut.mp4",
    		"3": "video/multiMod_2021-01-09_Tempo_a_001_shiftRight2_0.90cut.mp4",
    		"4": "video/multiMod_2021-01-09_Tempo_a_001_shiftRight3_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Tempo_a_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "073",
     	"TestID": "tempo_p_aL_tin",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft1_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft2_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft3_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "080",
     	"TestID": "tempo_p_mulR",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight1_0.90cut.mp4",
    		"3": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight2_0.90cut.mp4",
    		"4": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight3_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "085",
     	"TestID": "tempo_p_vR_mid",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    		"3": "video/visualMod_2021-01-09_Tempo_p_001_shiftRight1_cut.mp4",
    		"4": "video/visualMod_2021-01-09_Tempo_p_001_shiftRight3_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Tempo_p_001_shiftRight5_cut.mp4",
    	}
    },
    {
     	"Name": "087",
     	"TestID": "tempo_w_aL",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_w_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Tempo_w_001_shiftLeft1_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Tempo_w_001_shiftLeft2_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Tempo_w_001_shiftLeft3_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Tempo_w_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Tempo_w_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "088",
     	"TestID": "tempo_w_aR",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_w_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Tempo_w_001_shiftRight1_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Tempo_w_001_shiftRight2_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Tempo_w_001_shiftRight3_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Tempo_w_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Tempo_w_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "089",
     	"TestID": "tempo_w_mixL",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_w_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Tempo_w_001_shiftLeft1_0.90cut.mp4",
    		"2": "video/mixMod_2021-01-09_Tempo_w_001_shiftLeft2_0.90cut.mp4",
    		"3": "video/mixMod_2021-01-09_Tempo_w_001_shiftLeft3_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Tempo_w_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Tempo_w_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "092",
     	"TestID": "tempo_w_mulR",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_w_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Tempo_w_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Tempo_w_001_shiftRight1_0.90cut.mp4",
    		"3": "video/multiMod_2021-01-09_Tempo_w_001_shiftRight2_0.90cut.mp4",
    		"4": "video/multiMod_2021-01-09_Tempo_w_001_shiftRight3_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Tempo_w_001_shiftRight4_0.90cut.mp4",
    	}
    },
  ]
}
