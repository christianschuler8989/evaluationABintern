// configure the test here
var TestConfig = {
  "TestName": "Lip-Synchrony Teal Test",
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
    // "TEAL" testsets that serve as sixth batch
    {
    	"Name": "098",
    	"TestID": "anfang_a_vR_mid",
    	"Files":
   	{
   		"Reference": "video/audioMod_2021-01-09_Anfang_a_001_shiftLeft0_0.90cut.mp4",
   		"1": "video/mixMod_2021-01-09_Anfang_a_002_shiftLeft4_0.90cut.mp4",
   		"2": "video/multiMod_2021-01-09_Anfang_a_002_shiftRight4_0.90cut.mp4",
   		"3": "video/visualMod_2021-01-09_Anfang_a_002_shiftRight1_cut.mp4",
   		"4": "video/visualMod_2021-01-09_Anfang_a_002_shiftRight3_cut.mp4",
   		"5": "video/visualMod_2021-01-09_Anfang_a_002_shiftRight5_cut.mp4",
   	}
   },
   {
     	"Name": "099",
     	"TestID": "anfang_p_aL_big",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Anfang_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Anfang_p_001_shiftLeft2_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Anfang_p_001_shiftLeft4_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Anfang_p_001_shiftLeft6_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Anfang_p_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Anfang_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "101",
     	"TestID": "anfang_p_aL_tin",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Anfang_p_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/audioMod_2021-01-09_Anfang_p_001_shiftLeft1_0.90cut.mp4",
    		"2": "video/audioMod_2021-01-09_Anfang_p_001_shiftLeft2_0.90cut.mp4",
    		"3": "video/audioMod_2021-01-09_Anfang_p_001_shiftLeft3_0.90cut.mp4",
    		"4": "video/mixMod_2021-01-09_Anfang_p_001_shiftLeft4_0.90cut.mp4",
    		"5": "video/multiMod_2021-01-09_Anfang_p_001_shiftRight4_0.90cut.mp4",
    	}
    },
    {
     	"Name": "122",
     	"TestID": "euro_a_vL_mid",
     	"Files":
    	{
    		"Reference": "video/audioMod_2021-01-09_Europaeisch_a_001_shiftLeft0_0.90cut.mp4",
    		"1": "video/mixMod_2021-01-09_Europaeisch_a_001_shiftLeft4_0.90cut.mp4",
    		"2": "video/multiMod_2021-01-09_Europaeisch_a_001_shiftRight4_0.90cut.mp4",
    		"3": "video/visualMod_2021-01-09_Europaeisch_a_001_shiftLeft1_cut.mp4",
    		"4": "video/visualMod_2021-01-09_Europaeisch_a_001_shiftLeft3_cut.mp4",
    		"5": "video/visualMod_2021-01-09_Europaeisch_a_001_shiftLeft5_cut.mp4",
    	}
    },
    {
 	"Name": "123",
 	"TestID": "euro_a_vR_big",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Europaeisch_a_001_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Europaeisch_a_001_shiftLeft4_0.90cut.mp4",
		"2": "video/multiMod_2021-01-09_Europaeisch_a_001_shiftRight4_0.90cut.mp4",
		"3": "video/visualMod_2021-01-09_Europaeisch_a_001_shiftRight2_cut.mp4",
		"4": "video/visualMod_2021-01-09_Europaeisch_a_001_shiftRight4_cut.mp4",
		"5": "video/visualMod_2021-01-09_Europaeisch_a_001_shiftRight6_cut.mp4",
	}
},
{
 	"Name": "132",
 	"TestID": "impf_w_mulR",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Impfangebot_w_002_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Impfangebot_w_002_shiftLeft4_0.90cut.mp4",
		"2": "video/multiMod_2021-01-09_Impfangebot_w_002_shiftRight1_0.90cut.mp4",
		"3": "video/multiMod_2021-01-09_Impfangebot_w_002_shiftRight2_0.90cut.mp4",
		"4": "video/multiMod_2021-01-09_Impfangebot_w_002_shiftRight3_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Impfangebot_w_002_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "134",
 	"TestID": "impf_w_vL_mid",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Impfangebot_w_002_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Impfangebot_w_002_shiftLeft4_0.90cut.mp4",
		"2": "video/multiMod_2021-01-09_Impfangebot_w_002_shiftRight4_0.90cut.mp4",
		"3": "video/visualMod_2021-01-09_Impfangebot_w_002_shiftLeft1_cut.mp4",
		"4": "video/visualMod_2021-01-09_Impfangebot_w_002_shiftLeft3_cut.mp4",
		"5": "video/visualMod_2021-01-09_Impfangebot_w_002_shiftLeft5_cut.mp4",
	}
},
{
 	"Name": "140",
 	"TestID": "paar_a_aR_mid",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Paar_a_002_shiftLeft0_0.90cut.mp4",
		"1": "video/audioMod_2021-01-09_Paar_a_002_shiftRight1_0.90cut.mp4",
		"2": "video/audioMod_2021-01-09_Paar_a_002_shiftRight3_0.90cut.mp4",
		"3": "video/audioMod_2021-01-09_Paar_a_002_shiftRight5_0.90cut.mp4",
		"4": "video/mixMod_2021-01-09_Paar_a_002_shiftLeft4_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Paar_a_002_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "141",
 	"TestID": "paar_a_mixL",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Paar_a_002_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Paar_a_002_shiftLeft1_0.90cut.mp4",
		"2": "video/mixMod_2021-01-09_Paar_a_002_shiftLeft2_0.90cut.mp4",
		"3": "video/mixMod_2021-01-09_Paar_a_002_shiftLeft3_0.90cut.mp4",
		"4": "video/mixMod_2021-01-09_Paar_a_002_shiftLeft4_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Paar_a_002_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "147",
 	"TestID": "paar_a_vR_big",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Paar_a_002_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Paar_a_002_shiftLeft4_0.90cut.mp4",
		"2": "video/multiMod_2021-01-09_Paar_a_002_shiftRight4_0.90cut.mp4",
		"3": "video/visualMod_2021-01-09_Paar_a_002_shiftRight2_cut.mp4",
		"4": "video/visualMod_2021-01-09_Paar_a_002_shiftRight4_cut.mp4",
		"5": "video/visualMod_2021-01-09_Paar_a_002_shiftRight6_cut.mp4",
	}
},
{
 	"Name": "149",
 	"TestID": "paar_p_aL_big",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Paar_p_001_shiftLeft0_0.90cut.mp4",
		"1": "video/audioMod_2021-01-09_Paar_p_001_shiftLeft2_0.90cut.mp4",
		"2": "video/audioMod_2021-01-09_Paar_p_001_shiftLeft4_0.90cut.mp4",
		"3": "video/audioMod_2021-01-09_Paar_p_001_shiftLeft6_0.90cut.mp4",
		"4": "video/mixMod_2021-01-09_Paar_p_001_shiftLeft4_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Paar_p_001_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "154",
 	"TestID": "paar_p_aR_tin",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Paar_p_001_shiftLeft0_0.90cut.mp4",
		"1": "video/audioMod_2021-01-09_Paar_p_001_shiftRight1_0.90cut.mp4",
		"2": "video/audioMod_2021-01-09_Paar_p_001_shiftRight2_0.90cut.mp4",
		"3": "video/audioMod_2021-01-09_Paar_p_001_shiftRight3_0.90cut.mp4",
		"4": "video/mixMod_2021-01-09_Paar_p_001_shiftLeft4_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Paar_p_001_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "155",
 	"TestID": "paar_p_mixL",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Paar_p_001_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Paar_p_001_shiftLeft1_0.90cut.mp4",
		"2": "video/mixMod_2021-01-09_Paar_p_001_shiftLeft2_0.90cut.mp4",
		"3": "video/mixMod_2021-01-09_Paar_p_001_shiftLeft3_0.90cut.mp4",
		"4": "video/mixMod_2021-01-09_Paar_p_001_shiftLeft4_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Paar_p_001_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "158",
 	"TestID": "paar_p_mulR",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Paar_p_001_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Paar_p_001_shiftLeft4_0.90cut.mp4",
		"2": "video/multiMod_2021-01-09_Paar_p_001_shiftRight1_0.90cut.mp4",
		"3": "video/multiMod_2021-01-09_Paar_p_001_shiftRight2_0.90cut.mp4",
		"4": "video/multiMod_2021-01-09_Paar_p_001_shiftRight3_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Paar_p_001_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "161",
 	"TestID": "paar_p_vR_big",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Paar_p_001_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Paar_p_001_shiftLeft4_0.90cut.mp4",
		"2": "video/multiMod_2021-01-09_Paar_p_001_shiftRight4_0.90cut.mp4",
		"3": "video/visualMod_2021-01-09_Paar_p_001_shiftRight2_cut.mp4",
		"4": "video/visualMod_2021-01-09_Paar_p_001_shiftRight4_cut.mp4",
		"5": "video/visualMod_2021-01-09_Paar_p_001_shiftRight6_cut.mp4",
	}
},
{
 	"Name": "171",
 	"TestID": "pandemie_a_aL_big",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Pandemie_a_001_shiftLeft0_0.90cut.mp4",
		"1": "video/audioMod_2021-01-09_Pandemie_a_001_shiftLeft2_0.90cut.mp4",
		"2": "video/audioMod_2021-01-09_Pandemie_a_001_shiftLeft4_0.90cut.mp4",
		"3": "video/audioMod_2021-01-09_Pandemie_a_001_shiftLeft6_0.90cut.mp4",
		"4": "video/mixMod_2021-01-09_Pandemie_a_001_shiftLeft4_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Pandemie_a_001_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "178",
 	"TestID": "pandemie_a_mulR",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Pandemie_a_001_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Pandemie_a_001_shiftLeft4_0.90cut.mp4",
		"2": "video/multiMod_2021-01-09_Pandemie_a_001_shiftRight1_0.90cut.mp4",
		"3": "video/multiMod_2021-01-09_Pandemie_a_001_shiftRight2_0.90cut.mp4",
		"4": "video/multiMod_2021-01-09_Pandemie_a_001_shiftRight3_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Pandemie_a_001_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "181",
 	"TestID": "pandemie_a_vR_big",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Pandemie_a_001_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Pandemie_a_001_shiftLeft4_0.90cut.mp4",
		"2": "video/multiMod_2021-01-09_Pandemie_a_001_shiftRight4_0.90cut.mp4",
		"3": "video/visualMod_2021-01-09_Pandemie_a_001_shiftRight2_cut.mp4",
		"4": "video/visualMod_2021-01-09_Pandemie_a_001_shiftRight4_cut.mp4",
		"5": "video/visualMod_2021-01-09_Pandemie_a_001_shiftRight6_cut.mp4",
	}
},
{
 	"Name": "185",
 	"TestID": "tempo_a_aR_big",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Tempo_a_001_shiftLeft0_0.90cut.mp4",
		"1": "video/audioMod_2021-01-09_Tempo_a_001_shiftRight2_0.90cut.mp4",
		"2": "video/audioMod_2021-01-09_Tempo_a_001_shiftRight4_0.90cut.mp4",
		"3": "video/audioMod_2021-01-09_Tempo_a_001_shiftRight6_0.90cut.mp4",
		"4": "video/mixMod_2021-01-09_Tempo_a_001_shiftLeft4_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Tempo_a_001_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "187",
 	"TestID": "tempo_a_vL_big",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Tempo_a_001_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Tempo_a_001_shiftLeft4_0.90cut.mp4",
		"2": "video/multiMod_2021-01-09_Tempo_a_001_shiftRight4_0.90cut.mp4",
		"3": "video/visualMod_2021-01-09_Tempo_a_001_shiftLeft2_cut.mp4",
		"4": "video/visualMod_2021-01-09_Tempo_a_001_shiftLeft4_cut.mp4",
		"5": "video/visualMod_2021-01-09_Tempo_a_001_shiftLeft6_cut.mp4",
	}
},
{
 	"Name": "192",
 	"TestID": "tempo_w_aL_mid",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Tempo_w_001_shiftLeft0_0.90cut.mp4",
		"1": "video/audioMod_2021-01-09_Tempo_w_001_shiftLeft1_0.90cut.mp4",
		"2": "video/audioMod_2021-01-09_Tempo_w_001_shiftLeft3_0.90cut.mp4",
		"3": "video/audioMod_2021-01-09_Tempo_w_001_shiftLeft5_0.90cut.mp4",
		"4": "video/mixMod_2021-01-09_Tempo_w_001_shiftLeft4_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Tempo_w_001_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "203",
 	"TestID": "zusammen_a_mixL",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Zusammen_a_003_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Zusammen_a_003_shiftLeft1_0.90cut.mp4",
		"2": "video/mixMod_2021-01-09_Zusammen_a_003_shiftLeft2_0.90cut.mp4",
		"3": "video/mixMod_2021-01-09_Zusammen_a_003_shiftLeft3_0.90cut.mp4",
		"4": "video/mixMod_2021-01-09_Zusammen_a_003_shiftLeft4_0.90cut.mp4",
		"5": "video/multiMod_2021-01-09_Zusammen_a_003_shiftRight4_0.90cut.mp4",
	}
},
{
 	"Name": "209",
 	"TestID": "zusammen_a_vR_big",
 	"Files":
	{
		"Reference": "video/audioMod_2021-01-09_Zusammen_a_003_shiftLeft0_0.90cut.mp4",
		"1": "video/mixMod_2021-01-09_Zusammen_a_003_shiftLeft4_0.90cut.mp4",
		"2": "video/multiMod_2021-01-09_Zusammen_a_003_shiftRight4_0.90cut.mp4",
		"3": "video/visualMod_2021-01-09_Zusammen_a_003_shiftRight2_cut.mp4",
		"4": "video/visualMod_2021-01-09_Zusammen_a_003_shiftRight4_cut.mp4",
		"5": "video/visualMod_2021-01-09_Zusammen_a_003_shiftRight6_cut.mp4",
	}
}
  ]
}
