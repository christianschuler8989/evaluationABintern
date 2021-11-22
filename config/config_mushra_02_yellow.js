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
  "LoopByDefault": true,
  "EnableABLoop": true,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "https://www.timobaumann.de/temp/vtts/beaqleJS_Service.php",
  "SupervisorContact": "",
  "RandomizeTestOrder": true,
  "AnchorsNumber": 4,
  "MaxTestsPerRun": 10,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets": [
    // "GREEN" testsets that serve as anchors
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
