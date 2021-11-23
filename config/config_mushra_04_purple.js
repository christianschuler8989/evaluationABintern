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
    // "PURPLE" testsets that serve as fourth batch
    {
      "Name": "003",
      "TestID": "anfang_a_aL_tin",
      "Files":
      {
        "Reference": "video/audioMod_2021-01-09_Anfang_a_002_shiftLeft0_0.90cut.mp4",
        "1": "video/audioMod_2021-01-09_Anfang_a_002_shiftLeft1_0.90cut.mp4",
        "2": "video/audioMod_2021-01-09_Anfang_a_002_shiftLeft2_0.90cut.mp4",
        "3": "video/audioMod_2021-01-09_Anfang_a_002_shiftLeft3_0.90cut.mp4",
        "4": "video/mixMod_2021-01-09_Anfang_a_002_shiftLeft4_0.90cut.mp4",
        "5": "video/multiMod_2021-01-09_Anfang_a_002_shiftRight4_0.90cut.mp4",
      }
    },
    {
     	"Name": "008",
     	"TestID": "anfang_a_mixR",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Anfang_a_002_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Anfang_a_002_shiftLeft4_0.90cut.mp4",
    		"2": "video/mixMod_2021-01-09_Anfang_a_002_shiftRight1_0.90cut.mp4",
    		"3": "video/mixMod_2021-01-09_Anfang_a_002_shiftRight2_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Anfang_a_002_shiftRight3_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Anfang_a_002_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "010",
     	"TestID": "anfang_a_mulR",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Anfang_a_002_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Anfang_a_002_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Anfang_a_002_shiftRight1_0.90cut.mp4",
    		"3": "video/multiMod_2021-01-09_Anfang_a_002_shiftRight2_0.90cut.mp4",
    		"4": "video/multiMod_2021-01-09_Anfang_a_002_shiftRight3_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Anfang_a_002_shiftRight4_0.90cut.mp4",
    	}
    },
    {
      "Name": "015",
      "TestID": "euro_p_aL_tin",
      "Files":
      {
        "Reference": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft0_0.90cut.mp4",
        "1": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft1_0.90cut.mp4",
        "2": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft2_0.90cut.mp4",
        "3": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft3_0.90cut.mp4",
        "4": "video/mixMod_2021-01-09_Europaeisch_p_001_shiftLeft4_0.90cut.mp4",
        "5": "video/multiMod_2021-01-09_Europaeisch_p_001_shiftRight4_0.90cut.mp4",
      }
    },
    {
      "Name": "018",
      "TestID": "euro_p_aR_tin",
      "Files":
      {
        "Reference": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft0_0.90cut.mp4",
        "1": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftRight1_0.90cut.mp4",
        "2": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftRight2_0.90cut.mp4",
        "3": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftRight3_0.90cut.mp4",
        "4": "video/mixMod_2021-01-09_Europaeisch_p_001_shiftLeft4_0.90cut.mp4",
        "5": "video/multiMod_2021-01-09_Europaeisch_p_001_shiftRight4_0.90cut.mp4",
      }
    },
    {
     	"Name": "022",
     	"TestID": "euro_p_mulR",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Europaeisch_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Europaeisch_p_001_shiftRight1_0.90cut.mp4",
    		"3": "video/multiMod_2021-01-09_Europaeisch_p_001_shiftRight2_0.90cut.mp4",
    		"4": "video/multiMod_2021-01-09_Europaeisch_p_001_shiftRight3_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Europaeisch_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "024",
     	"TestID": "euro_p_vL_mid",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Europaeisch_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Europaeisch_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Europaeisch_p_001_shiftRight4_0.90cut.mp4",
    		"3": "video/visualMod_2021-01-09_Europaeisch_p_001_shiftLeft1_cut.mp4",
    		"4": "video/visualMod_2021-01-09_Europaeisch_p_001_shiftLeft3_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Europaeisch_p_001_shiftLeft5_cut.mp4",
    	}
    },
    {
     	"Name": "030",
     	"TestID": "paar_w_aR",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Paar_w_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Paar_w_001_shiftRight1_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Paar_w_001_shiftRight2_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Paar_w_001_shiftRight3_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Paar_w_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Paar_w_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "031",
     	"TestID": "paar_w_mixL",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Paar_w_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Paar_w_001_shiftLeft1_0.90cut.mp4",
    		"2": "video/mixMod_2021-01-09_Paar_w_001_shiftLeft2_0.90cut.mp4",
    		"3": "video/mixMod_2021-01-09_Paar_w_001_shiftLeft3_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Paar_w_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Paar_w_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "039",
     	"TestID": "pandemie_p_aL_tin",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft1_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft2_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft3_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Pandemie_p_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Pandemie_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "046",
     	"TestID": "pandemie_p_mulR",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Pandemie_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Pandemie_p_001_shiftRight1_0.90cut.mp4",
    		"3": "video/multiMod_2021-01-09_Pandemie_p_001_shiftRight2_0.90cut.mp4",
    		"4": "video/multiMod_2021-01-09_Pandemie_p_001_shiftRight3_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Pandemie_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "049",
     	"TestID": "pandemie_p_vL_tin",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Pandemie_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Pandemie_p_001_shiftRight4_0.90cut.mp4",
    		"3": "video/visualMod_2021-01-09_Pandemie_p_001_shiftLeft2_cut.mp4",
    		"4": "video/visualMod_2021-01-09_Pandemie_p_001_shiftLeft3_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Pandemie_p_001_shiftLeft4_cut.mp4",
    	}
    },
    {
     	"Name": "052",
     	"TestID": "pandemie_p_vR_tin",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Pandemie_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Pandemie_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Pandemie_p_001_shiftRight4_0.90cut.mp4",
    		"3": "video/visualMod_2021-01-09_Pandemie_p_001_shiftRight2_cut.mp4",
    		"4": "video/visualMod_2021-01-09_Pandemie_p_001_shiftRight3_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Pandemie_p_001_shiftRight4_cut.mp4",
    	}
    },
    {
     	"Name": "057",
     	"TestID": "tempo_all_aR",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_a_001_shiftRight4_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Tempo_w_001_shiftRight4_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "063",
     	"TestID": "tempo_all_w_left",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Tempo_w_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Tempo_w_001_shiftRight4_0.90cut.mp4",
    		"3": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"4": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    		"5": "video/visualMod_2021-01-09_Tempo_w_001_shiftRight4_cut.mp4",
    	}
    },
    {
     	"Name": "065",
     	"TestID": "tempo_a_mixL",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_a_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Tempo_a_001_shiftLeft1_0.90cut.mp4",
    		"2": "video/mixMod_2021-01-09_Tempo_a_001_shiftLeft2_0.90cut.mp4",
    		"3": "video/mixMod_2021-01-09_Tempo_a_001_shiftLeft3_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Tempo_a_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Tempo_a_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "067",
     	"TestID": "tempo_a_mulL",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_a_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Tempo_a_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Tempo_a_001_shiftLeft1_0.90cut.mp4",
    		"3": "video/multiMod_2021-01-09_Tempo_a_001_shiftLeft2_0.90cut.mp4",
    		"4": "video/multiMod_2021-01-09_Tempo_a_001_shiftLeft3_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Tempo_a_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "076",
     	"TestID": "tempo_p_aR_tin",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Tempo_p_001_shiftRight1_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Tempo_p_001_shiftRight2_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Tempo_p_001_shiftRight3_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "077",
     	"TestID": "tempo_p_mixL",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft1_0.90cut.mp4",
    		"2": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft2_0.90cut.mp4",
    		"3": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft3_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "083",
     	"TestID": "tempo_p_vL_tin",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    		"3": "video/visualMod_2021-01-09_Tempo_p_001_shiftLeft2_cut.mp4",
    		"4": "video/visualMod_2021-01-09_Tempo_p_001_shiftLeft3_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Tempo_p_001_shiftLeft4_cut.mp4",
    	}
    },
    {
     	"Name": "086",
     	"TestID": "tempo_p_vR_tin",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Tempo_p_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Tempo_p_001_shiftRight4_0.90cut.mp4",
    		"3": "video/visualMod_2021-01-09_Tempo_p_001_shiftRight2_cut.mp4",
    		"4": "video/visualMod_2021-01-09_Tempo_p_001_shiftRight3_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Tempo_p_001_shiftRight4_cut.mp4",
    	}
    },
    {
     	"Name": "090",
     	"TestID": "tempo_w_mixR",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_w_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Tempo_w_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/mixMod_2021-01-09_Tempo_w_001_shiftRight1_0.90cut.mp4",
    		"3": "video/mixMod_2021-01-09_Tempo_w_001_shiftRight2_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Tempo_w_001_shiftRight3_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Tempo_w_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "093",
     	"TestID": "tempo_w_vL",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Tempo_w_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Tempo_w_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Tempo_w_001_shiftRight4_0.90cut.mp4",
    		"3": "video/visualMod_2021-01-09_Tempo_w_001_shiftLeft2_cut.mp4",
    		"4": "video/visualMod_2021-01-09_Tempo_w_001_shiftLeft3_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Tempo_w_001_shiftLeft4_cut.mp4",
    	}
    }
  ]
}
