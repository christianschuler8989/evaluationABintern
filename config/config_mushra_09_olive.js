// configure the test here
var TestConfig = {
  "TestName": "Lip-Synchrony Olive Test",
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
    		"Reference": "video/audioMod_2021-01-09_Tempo_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Tempo_a_001_shiftLeft4_0.90cut.mp4",
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
    // "OLIVE" testsets that serve as ninth batch
    {
     	"Name": "096",
     	"TestID": "anfang_a_vL_mid",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Anfang_a_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Anfang_a_002_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Anfang_a_002_shiftRight4_0.90cut.mp4",
    		"3": "video/visualMod_2021-01-09_Anfang_a_002_shiftLeft1_cut.mp4",
    		"4": "video/visualMod_2021-01-09_Anfang_a_002_shiftLeft3_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Anfang_a_002_shiftLeft5_cut.mp4",
    	}
    },
    {
     	"Name": "100",
     	"TestID": "anfang_p_aL_mid",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Anfang_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Anfang_p_001_shiftLeft1_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Anfang_p_001_shiftLeft3_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Anfang_p_001_shiftLeft5_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Anfang_p_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Anfang_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
 	"Name": "105",
 	"TestID": "anfang_p_mixL",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Anfang_p_001_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Anfang_p_001_shiftLeft1_0.90cut.mp4",
		"2": "video/mixMod_2021-01-09_Anfang_p_001_shiftLeft2_0.90cut.mp4",
		"3": "video/mixMod_2021-01-09_Anfang_p_001_shiftLeft3_0.90cut.mp4",
		"4": "video/mixMod_2021-01-09_Anfang_p_001_shiftLeft4_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Anfang_p_001_shiftRight4_0.90cut.mp4",
  }
},
{
 	"Name": "108",
 	"TestID": "anfang_p_mulR",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Anfang_p_001_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Anfang_p_001_shiftLeft4_0.90cut.mp4",
		"2": "video/multiMod_2021-01-09_Anfang_p_001_shiftRight1_0.90cut.mp4",
		"3": "video/multiMod_2021-01-09_Anfang_p_001_shiftRight2_0.90cut.mp4",
		"4": "video/multiMod_2021-01-09_Anfang_p_001_shiftRight3_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Anfang_p_001_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "114",
 	"TestID": "euro_a_aL_mid",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Europaeisch_a_001_shiftLeft0_0.90cut.mp4",
		"1": "video/audioMod_2021-01-09_Europaeisch_a_001_shiftLeft1_0.90cut.mp4",
		"2": "video/audioMod_2021-01-09_Europaeisch_a_001_shiftLeft3_0.90cut.mp4",
		"3": "video/audioMod_2021-01-09_Europaeisch_a_001_shiftLeft5_0.90cut.mp4",
		"4": "video/mixMod_2021-01-09_Europaeisch_a_001_shiftLeft4_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Europaeisch_a_001_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "118",
 	"TestID": "euro_a_mixR",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Europaeisch_a_001_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Europaeisch_a_001_shiftLeft4_0.90cut.mp4",
		"2": "video/mixMod_2021-01-09_Europaeisch_a_001_shiftRight1_0.90cut.mp4",
		"3": "video/mixMod_2021-01-09_Europaeisch_a_001_shiftRight2_0.90cut.mp4",
		"4": "video/mixMod_2021-01-09_Europaeisch_a_001_shiftRight3_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Europaeisch_a_001_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "124",
 	"TestID": "euro_a_vR_mid",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Europaeisch_a_001_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Europaeisch_a_001_shiftLeft4_0.90cut.mp4",
		"2": "video/multiMod_2021-01-09_Europaeisch_a_001_shiftRight4_0.90cut.mp4",
		"3": "video/visualMod_2021-01-09_Europaeisch_a_001_shiftRight1_cut.mp4",
		"4": "video/visualMod_2021-01-09_Europaeisch_a_001_shiftRight3_cut.mp4",
		"5": "video/visualMod_2021-01-09_Europaeisch_a_001_shiftRight5_cut.mp4",
	}
},
{
 	"Name": "125",
 	"TestID": "impf_w_aL_big",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Impfangebot_w_002_shiftLeft0_0.90cut.mp4",
		"1": "video/audioMod_2021-01-09_Impfangebot_w_002_shiftLeft2_0.90cut.mp4",
		"2": "video/audioMod_2021-01-09_Impfangebot_w_002_shiftLeft4_0.90cut.mp4",
		"3": "video/audioMod_2021-01-09_Impfangebot_w_002_shiftLeft6_0.90cut.mp4",
		"4": "video/mixMod_2021-01-09_Impfangebot_w_002_shiftLeft4_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Impfangebot_w_002_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "129",
 	"TestID": "impf_w_mixL",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Impfangebot_w_002_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Impfangebot_w_002_shiftLeft1_0.90cut.mp4",
		"2": "video/mixMod_2021-01-09_Impfangebot_w_002_shiftLeft2_0.90cut.mp4",
		"3": "video/mixMod_2021-01-09_Impfangebot_w_002_shiftLeft3_0.90cut.mp4",
		"4": "video/mixMod_2021-01-09_Impfangebot_w_002_shiftLeft4_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Impfangebot_w_002_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "135",
 	"TestID": "impf_w_vR_big",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Impfangebot_w_002_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Impfangebot_w_002_shiftLeft4_0.90cut.mp4",
		"2": "video/multiMod_2021-01-09_Impfangebot_w_002_shiftRight4_0.90cut.mp4",
		"3": "video/visualMod_2021-01-09_Impfangebot_w_002_shiftRight2_cut.mp4",
		"4": "video/visualMod_2021-01-09_Impfangebot_w_002_shiftRight4_cut.mp4",
		"5": "video/visualMod_2021-01-09_Impfangebot_w_002_shiftRight6_cut.mp4",
	}
},
{
 	"Name": "138",
 	"TestID": "paar_a_aL_mid",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Paar_a_002_shiftLeft0_0.90cut.mp4",
		"1": "video/audioMod_2021-01-09_Paar_a_002_shiftLeft1_0.90cut.mp4",
		"2": "video/audioMod_2021-01-09_Paar_a_002_shiftLeft3_0.90cut.mp4",
		"3": "video/audioMod_2021-01-09_Paar_a_002_shiftLeft5_0.90cut.mp4",
		"4": "video/mixMod_2021-01-09_Paar_a_002_shiftLeft4_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Paar_a_002_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "142",
 	"TestID": "paar_a_mixR",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Paar_a_002_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Paar_a_002_shiftLeft4_0.90cut.mp4",
		"2": "video/mixMod_2021-01-09_Paar_a_002_shiftRight1_0.90cut.mp4",
		"3": "video/mixMod_2021-01-09_Paar_a_002_shiftRight2_0.90cut.mp4",
		"4": "video/mixMod_2021-01-09_Paar_a_002_shiftRight3_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Paar_a_002_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "153",
 	"TestID": "paar_p_aR_mid",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Paar_p_001_shiftLeft0_0.90cut.mp4",
		"1": "video/audioMod_2021-01-09_Paar_p_001_shiftRight1_0.90cut.mp4",
		"2": "video/audioMod_2021-01-09_Paar_p_001_shiftRight3_0.90cut.mp4",
		"3": "video/audioMod_2021-01-09_Paar_p_001_shiftRight5_0.90cut.mp4",
		"4": "video/mixMod_2021-01-09_Paar_p_001_shiftLeft4_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Paar_p_001_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "160",
 	"TestID": "paar_p_vL_mid",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Paar_p_001_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Paar_p_001_shiftLeft4_0.90cut.mp4",
		"2": "video/multiMod_2021-01-09_Paar_p_001_shiftRight4_0.90cut.mp4",
		"3": "video/visualMod_2021-01-09_Paar_p_001_shiftLeft1_cut.mp4",
		"4": "video/visualMod_2021-01-09_Paar_p_001_shiftLeft3_cut.mp4",
		"5": "video/visualMod_2021-01-09_Paar_p_001_shiftLeft5_cut.mp4",
	}
},
{
 	"Name": "165",
 	"TestID": "paar_w_aR_big",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Paar_w_001_shiftLeft0_0.90cut.mp4",
		"1": "video/audioMod_2021-01-09_Paar_w_001_shiftRight2_0.90cut.mp4",
		"2": "video/audioMod_2021-01-09_Paar_w_001_shiftRight4_0.90cut.mp4",
		"3": "video/audioMod_2021-01-09_Paar_w_001_shiftRight6_0.90cut.mp4",
		"4": "video/mixMod_2021-01-09_Paar_w_001_shiftLeft4_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Paar_w_001_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "167",
 	"TestID": "paar_w_vL_big",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Paar_w_001_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Paar_w_001_shiftLeft4_0.90cut.mp4",
		"2": "video/multiMod_2021-01-09_Paar_w_001_shiftRight4_0.90cut.mp4",
		"3": "video/visualMod_2021-01-09_Paar_w_001_shiftLeft2_cut.mp4",
		"4": "video/visualMod_2021-01-09_Paar_w_001_shiftLeft4_cut.mp4",
		"5": "video/visualMod_2021-01-09_Paar_w_001_shiftLeft6_cut.mp4",
	}
},
{
 	"Name": "173",
 	"TestID": "pandemie_a_aR_big",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Pandemie_a_001_shiftLeft0_0.90cut.mp4",
		"1": "video/audioMod_2021-01-09_Pandemie_a_001_shiftRight2_0.90cut.mp4",
		"2": "video/audioMod_2021-01-09_Pandemie_a_001_shiftRight4_0.90cut.mp4",
		"3": "video/audioMod_2021-01-09_Pandemie_a_001_shiftRight6_0.90cut.mp4",
		"4": "video/mixMod_2021-01-09_Pandemie_a_001_shiftLeft4_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Pandemie_a_001_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "180",
 	"TestID": "pandemie_a_vL_mid",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Pandemie_a_001_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Pandemie_a_001_shiftLeft4_0.90cut.mp4",
		"2": "video/multiMod_2021-01-09_Pandemie_a_001_shiftRight4_0.90cut.mp4",
		"3": "video/visualMod_2021-01-09_Pandemie_a_001_shiftLeft1_cut.mp4",
		"4": "video/visualMod_2021-01-09_Pandemie_a_001_shiftLeft3_cut.mp4",
		"5": "video/visualMod_2021-01-09_Pandemie_a_001_shiftLeft5_cut.mp4",
	}
},
{
 	"Name": "184",
 	"TestID": "tempo_a_aL_mid",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Tempo_a_001_shiftLeft0_0.90cut.mp4",
		"1": "video/audioMod_2021-01-09_Tempo_a_001_shiftLeft1_0.90cut.mp4",
		"2": "video/audioMod_2021-01-09_Tempo_a_001_shiftLeft3_0.90cut.mp4",
		"3": "video/audioMod_2021-01-09_Tempo_a_001_shiftLeft5_0.90cut.mp4",
		"4": "video/mixMod_2021-01-09_Tempo_a_001_shiftLeft4_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Tempo_a_001_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "191",
 	"TestID": "tempo_w_aL_big",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Tempo_w_001_shiftLeft0_0.90cut.mp4",
		"1": "video/audioMod_2021-01-09_Tempo_w_001_shiftLeft2_0.90cut.mp4",
		"2": "video/audioMod_2021-01-09_Tempo_w_001_shiftLeft4_0.90cut.mp4",
		"3": "video/audioMod_2021-01-09_Tempo_w_001_shiftLeft6_0.90cut.mp4",
		"4": "video/mixMod_2021-01-09_Tempo_w_001_shiftLeft4_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Tempo_w_001_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "197",
 	"TestID": "tempo_w_vR_big",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Tempo_w_001_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Tempo_w_001_shiftLeft4_0.90cut.mp4",
		"2": "video/multiMod_2021-01-09_Tempo_w_001_shiftRight4_0.90cut.mp4",
		"3": "video/visualMod_2021-01-09_Tempo_w_001_shiftRight2_cut.mp4",
		"4": "video/visualMod_2021-01-09_Tempo_w_001_shiftRight4_cut.mp4",
		"5": "video/visualMod_2021-01-09_Tempo_w_001_shiftRight6_cut.mp4",
	}
},
{
 	"Name": "201",
 	"TestID": "zusammen_a_aR_big",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Zusammen_a_003_shiftLeft0_0.90cut.mp4",
		"1": "video/audioMod_2021-01-09_Zusammen_a_003_shiftRight2_0.90cut.mp4",
		"2": "video/audioMod_2021-01-09_Zusammen_a_003_shiftRight4_0.90cut.mp4",
		"3": "video/audioMod_2021-01-09_Zusammen_a_003_shiftRight6_0.90cut.mp4",
		"4": "video/mixMod_2021-01-09_Zusammen_a_003_shiftLeft4_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Zusammen_a_003_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "205",
 	"TestID": "zusammen_a_mulL",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Zusammen_a_003_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Zusammen_a_003_shiftLeft4_0.90cut.mp4",
		"2": "video/multiMod_2021-01-09_Zusammen_a_003_shiftLeft1_0.90cut.mp4",
		"3": "video/multiMod_2021-01-09_Zusammen_a_003_shiftLeft2_0.90cut.mp4",
		"4": "video/multiMod_2021-01-09_Zusammen_a_003_shiftLeft3_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Zusammen_a_003_shiftRight4_0.90cut.mp4",
	}
}
  ]
}
