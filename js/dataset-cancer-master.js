// Baseline Dataset: Cancer Screening Training (Sanitized Demo Roster)
// 742 Sanctioned Posts | 700 Trained Staff | 46 Untrained | 16 Excess | 94.3% Coverage
var CANCER_MASTER_DATA = {
  "kpi": {
    "total_staff": 742,
    "total_trained": 700,
    "total_untrained": 46,
    "total_excess": 16,
    "coverage": 94.3,
    "blocks": 9,
    "phcs": 47,
    "data_as_of": "15-06-2026",
    "master_as_of": "15-06-2026"
  },
  "phc_data": [
    {
      "Block": "BAVLA",
      "PHC": "URBAN",
      "Total": 3,
      "MO": 0,
      "MO_tr": 0,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 0,
      "CHO_tr": 0,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 0,
      "SN_tr": 0,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 3,
      "FHW_tr": 3,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 0,
      "MPHW_tr": 0,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 3,
      "Untrained": 0,
      "Coverage": 100.0
    },
    {
      "Block": "BAVLA",
      "PHC": "GANGAD",
      "Total": 15,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 4,
      "CHO_tr": 4,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 1,
      "SN_tr": 1,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 4,
      "FHW_tr": 4,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 5,
      "MPHW_tr": 5,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 15,
      "Untrained": 0,
      "Coverage": 100.0
    },
    {
      "Block": "BAVLA",
      "PHC": "KAVITHA",
      "Total": 12,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 2,
      "CHO_tr": 2,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 2,
      "SN_tr": 2,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 3,
      "FHW_tr": 3,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 4,
      "MPHW_tr": 4,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 12,
      "Untrained": 0,
      "Coverage": 100.0
    },
    {
      "Block": "BAVLA",
      "PHC": "NANODARA",
      "Total": 17,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 4,
      "CHO_tr": 4,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 0,
      "SN_tr": 0,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 5,
      "FHW_tr": 4,
      "FHW_un": 1,
      "FHW_ex": 0,
      "MPHW": 7,
      "MPHW_tr": 7,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 16,
      "Untrained": 1,
      "Coverage": 94.1
    },
    {
      "Block": "BAVLA",
      "PHC": "SHIYAL",
      "Total": 16,
      "MO": 0,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 1,
      "CHO": 4,
      "CHO_tr": 4,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 3,
      "SN_tr": 1,
      "SN_un": 2,
      "SN_ex": 0,
      "FHW": 4,
      "FHW_tr": 4,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 5,
      "MPHW_tr": 5,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 15,
      "Untrained": 1,
      "Coverage": 93.8
    },
    {
      "Block": "DASCROI",
      "PHC": "ASLALI",
      "Total": 17,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 4,
      "CHO_tr": 4,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 1,
      "SN_tr": 1,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 5,
      "FHW_tr": 5,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 6,
      "MPHW_tr": 6,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 17,
      "Untrained": 0,
      "Coverage": 100.0
    },
    {
      "Block": "DASCROI",
      "PHC": "JETALPUR",
      "Total": 24,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 5,
      "CHO_tr": 5,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 4,
      "SN_tr": 2,
      "SN_un": 2,
      "SN_ex": 0,
      "FHW": 7,
      "FHW_tr": 7,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 7,
      "MPHW_tr": 7,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 22,
      "Untrained": 2,
      "Coverage": 91.7
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Total": 25,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 7,
      "CHO_tr": 7,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 2,
      "SN_tr": 2,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 6,
      "FHW_tr": 6,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 9,
      "MPHW_tr": 9,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 25,
      "Untrained": 0,
      "Coverage": 100.0
    },
    {
      "Block": "DASCROI",
      "PHC": "KASINDRA",
      "Total": 12,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 2,
      "CHO_tr": 2,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 2,
      "SN_tr": 2,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 3,
      "FHW_tr": 3,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 4,
      "MPHW_tr": 4,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 12,
      "Untrained": 0,
      "Coverage": 100.0
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Total": 26,
      "MO": 0,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 1,
      "CHO": 6,
      "CHO_tr": 6,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 4,
      "SN_tr": 4,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 8,
      "FHW_tr": 7,
      "FHW_un": 1,
      "FHW_ex": 0,
      "MPHW": 8,
      "MPHW_tr": 8,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 26,
      "Untrained": 0,
      "Coverage": 100.0
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Total": 26,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 5,
      "CHO_tr": 4,
      "CHO_un": 1,
      "CHO_ex": 0,
      "SN": 3,
      "SN_tr": 1,
      "SN_un": 2,
      "SN_ex": 0,
      "FHW": 9,
      "FHW_tr": 9,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 8,
      "MPHW_tr": 8,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 23,
      "Untrained": 3,
      "Coverage": 88.5
    },
    {
      "Block": "DASCROI",
      "PHC": "VAHELAL",
      "Total": 22,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 4,
      "CHO_tr": 4,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 4,
      "SN_tr": 2,
      "SN_un": 2,
      "SN_ex": 0,
      "FHW": 7,
      "FHW_tr": 6,
      "FHW_un": 1,
      "FHW_ex": 0,
      "MPHW": 6,
      "MPHW_tr": 7,
      "MPHW_un": 0,
      "MPHW_ex": 1,
      "Trained": 20,
      "Untrained": 2,
      "Coverage": 90.9
    },
    {
      "Block": "DASCROI",
      "PHC": "KHODIYAR",
      "Total": 6,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 1,
      "CHO_tr": 1,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 1,
      "SN_tr": 0,
      "SN_un": 1,
      "SN_ex": 0,
      "FHW": 2,
      "FHW_tr": 2,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 1,
      "MPHW_tr": 1,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 5,
      "Untrained": 1,
      "Coverage": 83.3
    },
    {
      "Block": "DETROJ",
      "PHC": "KATOSAN ROAD",
      "Total": 16,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 4,
      "CHO_tr": 5,
      "CHO_un": 0,
      "CHO_ex": 1,
      "SN": 2,
      "SN_tr": 1,
      "SN_un": 1,
      "SN_ex": 0,
      "FHW": 5,
      "FHW_tr": 5,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 4,
      "MPHW_tr": 4,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 16,
      "Untrained": 0,
      "Coverage": 100.0
    },
    {
      "Block": "DETROJ",
      "PHC": "RAMPURA",
      "Total": 21,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 5,
      "CHO_tr": 4,
      "CHO_un": 1,
      "CHO_ex": 0,
      "SN": 3,
      "SN_tr": 3,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 6,
      "FHW_tr": 6,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 6,
      "MPHW_tr": 6,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 20,
      "Untrained": 1,
      "Coverage": 95.2
    },
    {
      "Block": "DETROJ",
      "PHC": "RUDATAL",
      "Total": 19,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 4,
      "CHO_tr": 5,
      "CHO_un": 0,
      "CHO_ex": 1,
      "SN": 1,
      "SN_tr": 1,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 7,
      "FHW_tr": 7,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 6,
      "MPHW_tr": 6,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 20,
      "Untrained": 0,
      "Coverage": 105.3
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "AKARU",
      "Total": 11,
      "MO": 0,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 1,
      "CHO": 2,
      "CHO_tr": 2,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 0,
      "SN_tr": 0,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 4,
      "FHW_tr": 3,
      "FHW_un": 1,
      "FHW_ex": 0,
      "MPHW": 5,
      "MPHW_tr": 5,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 11,
      "Untrained": 0,
      "Coverage": 100.0
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "URBAN",
      "Total": 1,
      "MO": 0,
      "MO_tr": 0,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 0,
      "CHO_tr": 0,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 0,
      "SN_tr": 0,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 0,
      "FHW_tr": 0,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 1,
      "MPHW_tr": 1,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 1,
      "Untrained": 0,
      "Coverage": 100.0
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "HADALA",
      "Total": 20,
      "MO": 0,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 1,
      "CHO": 6,
      "CHO_tr": 6,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 1,
      "SN_tr": 1,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 6,
      "FHW_tr": 6,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 7,
      "MPHW_tr": 7,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 21,
      "Untrained": 0,
      "Coverage": 105.0
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "VAGAD",
      "Total": 18,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 4,
      "CHO_tr": 4,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 3,
      "SN_tr": 3,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 4,
      "FHW_tr": 4,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 6,
      "MPHW_tr": 6,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 18,
      "Untrained": 0,
      "Coverage": 100.0
    },
    {
      "Block": "DHOLERA",
      "PHC": "BHADIYAD",
      "Total": 8,
      "MO": 0,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 1,
      "CHO": 2,
      "CHO_tr": 2,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 1,
      "SN_tr": 1,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 2,
      "FHW_tr": 2,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 3,
      "MPHW_tr": 3,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 9,
      "Untrained": 0,
      "Coverage": 112.5
    },
    {
      "Block": "DHOLERA",
      "PHC": "DHOLERA",
      "Total": 12,
      "MO": 1,
      "MO_tr": 0,
      "MO_un": 1,
      "MO_ex": 0,
      "CHO": 1,
      "CHO_tr": 1,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 2,
      "SN_tr": 1,
      "SN_un": 1,
      "SN_ex": 0,
      "FHW": 3,
      "FHW_tr": 3,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 5,
      "MPHW_tr": 5,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 10,
      "Untrained": 2,
      "Coverage": 83.3
    },
    {
      "Block": "DHOLERA",
      "PHC": "PIPLI",
      "Total": 6,
      "MO": 0,
      "MO_tr": 0,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 1,
      "CHO_tr": 1,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 1,
      "SN_tr": 1,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 1,
      "FHW_tr": 1,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 3,
      "MPHW_tr": 3,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 6,
      "Untrained": 0,
      "Coverage": 100.0
    },
    {
      "Block": "DHOLKA",
      "PHC": "AMBALIYARA",
      "Total": 19,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 4,
      "CHO_tr": 5,
      "CHO_un": 0,
      "CHO_ex": 1,
      "SN": 1,
      "SN_tr": 1,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 7,
      "FHW_tr": 6,
      "FHW_un": 1,
      "FHW_ex": 0,
      "MPHW": 6,
      "MPHW_tr": 6,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 19,
      "Untrained": 0,
      "Coverage": 100.0
    },
    {
      "Block": "DHOLKA",
      "PHC": "CHALODA",
      "Total": 16,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 3,
      "CHO_tr": 3,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 1,
      "SN_tr": 1,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 6,
      "FHW_tr": 5,
      "FHW_un": 1,
      "FHW_ex": 0,
      "MPHW": 5,
      "MPHW_tr": 5,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 15,
      "Untrained": 1,
      "Coverage": 93.8
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Total": 30,
      "MO": 5,
      "MO_tr": 6,
      "MO_un": 0,
      "MO_ex": 1,
      "CHO": 0,
      "CHO_tr": 0,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 5,
      "SN_tr": 4,
      "SN_un": 1,
      "SN_ex": 0,
      "FHW": 8,
      "FHW_tr": 6,
      "FHW_un": 2,
      "FHW_ex": 0,
      "MPHW": 12,
      "MPHW_tr": 12,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 28,
      "Untrained": 2,
      "Coverage": 93.3
    },
    {
      "Block": "DHOLKA",
      "PHC": "GANOL",
      "Total": 19,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 4,
      "CHO_tr": 5,
      "CHO_un": 0,
      "CHO_ex": 1,
      "SN": 1,
      "SN_tr": 1,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 7,
      "FHW_tr": 5,
      "FHW_un": 2,
      "FHW_ex": 0,
      "MPHW": 6,
      "MPHW_tr": 6,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 18,
      "Untrained": 1,
      "Coverage": 94.7
    },
    {
      "Block": "DHOLKA",
      "PHC": "KOTH",
      "Total": 19,
      "MO": 0,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 1,
      "CHO": 3,
      "CHO_tr": 4,
      "CHO_un": 0,
      "CHO_ex": 1,
      "SN": 3,
      "SN_tr": 2,
      "SN_un": 1,
      "SN_ex": 0,
      "FHW": 7,
      "FHW_tr": 6,
      "FHW_un": 1,
      "FHW_ex": 0,
      "MPHW": 6,
      "MPHW_tr": 6,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 19,
      "Untrained": 0,
      "Coverage": 100.0
    },
    {
      "Block": "DHOLKA",
      "PHC": "TRANSAD",
      "Total": 15,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 3,
      "CHO_tr": 3,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 2,
      "SN_tr": 0,
      "SN_un": 2,
      "SN_ex": 0,
      "FHW": 5,
      "FHW_tr": 4,
      "FHW_un": 1,
      "FHW_ex": 0,
      "MPHW": 4,
      "MPHW_tr": 4,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 12,
      "Untrained": 3,
      "Coverage": 80.0
    },
    {
      "Block": "DHOLKA",
      "PHC": "VATAMAN",
      "Total": 21,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 5,
      "CHO_tr": 5,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 2,
      "SN_tr": 2,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 7,
      "FHW_tr": 6,
      "FHW_un": 1,
      "FHW_ex": 0,
      "MPHW": 6,
      "MPHW_tr": 6,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 20,
      "Untrained": 1,
      "Coverage": 95.2
    },
    {
      "Block": "MANDAL",
      "PHC": "SITAPUR",
      "Total": 13,
      "MO": 0,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 1,
      "CHO": 3,
      "CHO_tr": 3,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 1,
      "SN_tr": 1,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 5,
      "FHW_tr": 5,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 4,
      "MPHW_tr": 4,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 14,
      "Untrained": 0,
      "Coverage": 107.7
    },
    {
      "Block": "MANDAL",
      "PHC": "VITHALAPUR",
      "Total": 18,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 3,
      "CHO_tr": 3,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 1,
      "SN_tr": 1,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 7,
      "FHW_tr": 6,
      "FHW_un": 1,
      "FHW_ex": 0,
      "MPHW": 6,
      "MPHW_tr": 5,
      "MPHW_un": 1,
      "MPHW_ex": 0,
      "Trained": 16,
      "Untrained": 2,
      "Coverage": 88.9
    },
    {
      "Block": "MANDAL",
      "PHC": "TRENT",
      "Total": 13,
      "MO": 0,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 1,
      "CHO": 3,
      "CHO_tr": 3,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 2,
      "SN_tr": 2,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 4,
      "FHW_tr": 3,
      "FHW_un": 1,
      "FHW_ex": 0,
      "MPHW": 4,
      "MPHW_tr": 4,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 13,
      "Untrained": 0,
      "Coverage": 100.0
    },
    {
      "Block": "SANAND",
      "PHC": "CHEKHLA",
      "Total": 12,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 2,
      "CHO_tr": 2,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 1,
      "SN_tr": 1,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 4,
      "FHW_tr": 4,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 4,
      "MPHW_tr": 4,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 12,
      "Untrained": 0,
      "Coverage": 100.0
    },
    {
      "Block": "SANAND",
      "PHC": "MODASAR",
      "Total": 20,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 5,
      "CHO_tr": 4,
      "CHO_un": 1,
      "CHO_ex": 0,
      "SN": 2,
      "SN_tr": 1,
      "SN_un": 1,
      "SN_ex": 0,
      "FHW": 6,
      "FHW_tr": 5,
      "FHW_un": 1,
      "FHW_ex": 0,
      "MPHW": 6,
      "MPHW_tr": 6,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 17,
      "Untrained": 3,
      "Coverage": 85.0
    },
    {
      "Block": "SANAND",
      "PHC": "URBAN",
      "Total": 11,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 0,
      "CHO_tr": 0,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 0,
      "SN_tr": 0,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 10,
      "FHW_tr": 8,
      "FHW_un": 2,
      "FHW_ex": 0,
      "MPHW": 0,
      "MPHW_tr": 0,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 9,
      "Untrained": 2,
      "Coverage": 81.8
    },
    {
      "Block": "SANAND",
      "PHC": "SANATHAL",
      "Total": 19,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 3,
      "CHO_tr": 3,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 3,
      "SN_tr": 2,
      "SN_un": 1,
      "SN_ex": 0,
      "FHW": 6,
      "FHW_tr": 6,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 6,
      "MPHW_tr": 5,
      "MPHW_un": 1,
      "MPHW_ex": 0,
      "Trained": 17,
      "Untrained": 2,
      "Coverage": 89.5
    },
    {
      "Block": "SANAND",
      "PHC": "SHELA",
      "Total": 14,
      "MO": 1,
      "MO_tr": 0,
      "MO_un": 1,
      "MO_ex": 0,
      "CHO": 2,
      "CHO_tr": 0,
      "CHO_un": 2,
      "CHO_ex": 0,
      "SN": 1,
      "SN_tr": 1,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 6,
      "FHW_tr": 3,
      "FHW_un": 3,
      "FHW_ex": 0,
      "MPHW": 4,
      "MPHW_tr": 2,
      "MPHW_un": 2,
      "MPHW_ex": 0,
      "Trained": 6,
      "Untrained": 8,
      "Coverage": 42.9
    },
    {
      "Block": "SANAND",
      "PHC": "UPARDAL",
      "Total": 13,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 3,
      "CHO_tr": 3,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 1,
      "SN_tr": 1,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 4,
      "FHW_tr": 4,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 4,
      "MPHW_tr": 4,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 13,
      "Untrained": 0,
      "Coverage": 100.0
    },
    {
      "Block": "SANAND",
      "PHC": "VIROCHANNAGAR",
      "Total": 13,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 3,
      "CHO_tr": 3,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 1,
      "SN_tr": 1,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 4,
      "FHW_tr": 4,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 4,
      "MPHW_tr": 4,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 13,
      "Untrained": 0,
      "Coverage": 100.0
    },
    {
      "Block": "SANAND",
      "PHC": "ZOLAPUR",
      "Total": 17,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 4,
      "CHO_tr": 4,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 2,
      "SN_tr": 2,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 5,
      "FHW_tr": 5,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 5,
      "MPHW_tr": 5,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 17,
      "Untrained": 0,
      "Coverage": 100.0
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "GORAIYA",
      "Total": 17,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 1,
      "CHO_tr": 1,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 2,
      "SN_tr": 2,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 7,
      "FHW_tr": 6,
      "FHW_un": 1,
      "FHW_ex": 0,
      "MPHW": 6,
      "MPHW_tr": 6,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 16,
      "Untrained": 1,
      "Coverage": 94.1
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KARAKTHAL",
      "Total": 13,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 2,
      "CHO_tr": 2,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 1,
      "SN_tr": 1,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 5,
      "FHW_tr": 4,
      "FHW_un": 1,
      "FHW_ex": 0,
      "MPHW": 4,
      "MPHW_tr": 4,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 12,
      "Untrained": 1,
      "Coverage": 92.3
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KUMARKHAN",
      "Total": 14,
      "MO": 0,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 1,
      "CHO": 2,
      "CHO_tr": 2,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 3,
      "SN_tr": 3,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 5,
      "FHW_tr": 1,
      "FHW_un": 4,
      "FHW_ex": 0,
      "MPHW": 4,
      "MPHW_tr": 4,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 11,
      "Untrained": 3,
      "Coverage": 78.6
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "MANIPURA",
      "Total": 20,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 5,
      "CHO_tr": 5,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 1,
      "SN_tr": 1,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 7,
      "FHW_tr": 4,
      "FHW_un": 3,
      "FHW_ex": 0,
      "MPHW": 6,
      "MPHW_tr": 6,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 17,
      "Untrained": 3,
      "Coverage": 85.0
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "VANSVA",
      "Total": 7,
      "MO": 0,
      "MO_tr": 0,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 1,
      "CHO_tr": 1,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 0,
      "SN_tr": 0,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 3,
      "FHW_tr": 3,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 3,
      "MPHW_tr": 3,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 7,
      "Untrained": 0,
      "Coverage": 100.0
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "URBAN",
      "Total": 16,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 0,
      "CHO_tr": 0,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 3,
      "SN_tr": 3,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 6,
      "FHW_tr": 6,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 6,
      "MPHW_tr": 6,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Trained": 16,
      "Untrained": 0,
      "Coverage": 100.0
    }
  ],
  "block_data": [
    {
      "Block": "BAVLA",
      "Total": 63,
      "Trained": 61,
      "Untrained": 2,
      "MO": 3,
      "MO_tr": 4,
      "MO_un": 0,
      "MO_ex": 1,
      "CHO": 14,
      "CHO_tr": 14,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 6,
      "SN_tr": 4,
      "SN_un": 2,
      "SN_ex": 0,
      "FHW": 19,
      "FHW_tr": 18,
      "FHW_un": 1,
      "FHW_ex": 0,
      "MPHW": 21,
      "MPHW_tr": 21,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Coverage": 96.8
    },
    {
      "Block": "DASCROI",
      "Total": 158,
      "Trained": 150,
      "Untrained": 8,
      "MO": 7,
      "MO_tr": 8,
      "MO_un": 0,
      "MO_ex": 1,
      "CHO": 34,
      "CHO_tr": 33,
      "CHO_un": 1,
      "CHO_ex": 0,
      "SN": 21,
      "SN_tr": 14,
      "SN_un": 7,
      "SN_ex": 0,
      "FHW": 47,
      "FHW_tr": 45,
      "FHW_un": 2,
      "FHW_ex": 0,
      "MPHW": 49,
      "MPHW_tr": 50,
      "MPHW_un": 0,
      "MPHW_ex": 1,
      "Coverage": 94.9
    },
    {
      "Block": "DETROJ",
      "Total": 56,
      "Trained": 56,
      "Untrained": 1,
      "MO": 3,
      "MO_tr": 3,
      "MO_un": 0,
      "MO_ex": 0,
      "CHO": 13,
      "CHO_tr": 14,
      "CHO_un": 1,
      "CHO_ex": 2,
      "SN": 6,
      "SN_tr": 5,
      "SN_un": 1,
      "SN_ex": 0,
      "FHW": 18,
      "FHW_tr": 18,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 16,
      "MPHW_tr": 16,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Coverage": 100.0
    },
    {
      "Block": "DHANDHUKA",
      "Total": 50,
      "Trained": 51,
      "Untrained": 0,
      "MO": 1,
      "MO_tr": 3,
      "MO_un": 0,
      "MO_ex": 2,
      "CHO": 12,
      "CHO_tr": 12,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 4,
      "SN_tr": 4,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 14,
      "FHW_tr": 13,
      "FHW_un": 1,
      "FHW_ex": 0,
      "MPHW": 19,
      "MPHW_tr": 19,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Coverage": 102.0
    },
    {
      "Block": "DHOLERA",
      "Total": 26,
      "Trained": 25,
      "Untrained": 2,
      "MO": 1,
      "MO_tr": 1,
      "MO_un": 1,
      "MO_ex": 1,
      "CHO": 4,
      "CHO_tr": 4,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 4,
      "SN_tr": 3,
      "SN_un": 1,
      "SN_ex": 0,
      "FHW": 6,
      "FHW_tr": 6,
      "FHW_un": 0,
      "FHW_ex": 0,
      "MPHW": 11,
      "MPHW_tr": 11,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Coverage": 96.2
    },
    {
      "Block": "DHOLKA",
      "Total": 139,
      "Trained": 131,
      "Untrained": 8,
      "MO": 10,
      "MO_tr": 12,
      "MO_un": 0,
      "MO_ex": 2,
      "CHO": 22,
      "CHO_tr": 25,
      "CHO_un": 0,
      "CHO_ex": 3,
      "SN": 15,
      "SN_tr": 11,
      "SN_un": 4,
      "SN_ex": 0,
      "FHW": 47,
      "FHW_tr": 38,
      "FHW_un": 9,
      "FHW_ex": 0,
      "MPHW": 45,
      "MPHW_tr": 45,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Coverage": 94.2
    },
    {
      "Block": "MANDAL",
      "Total": 44,
      "Trained": 43,
      "Untrained": 2,
      "MO": 1,
      "MO_tr": 3,
      "MO_un": 0,
      "MO_ex": 2,
      "CHO": 9,
      "CHO_tr": 9,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 4,
      "SN_tr": 4,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 16,
      "FHW_tr": 14,
      "FHW_un": 2,
      "FHW_ex": 0,
      "MPHW": 14,
      "MPHW_tr": 13,
      "MPHW_un": 1,
      "MPHW_ex": 0,
      "Coverage": 97.7
    },
    {
      "Block": "SANAND",
      "Total": 119,
      "Trained": 104,
      "Untrained": 15,
      "MO": 8,
      "MO_tr": 7,
      "MO_un": 1,
      "MO_ex": 0,
      "CHO": 22,
      "CHO_tr": 19,
      "CHO_un": 3,
      "CHO_ex": 0,
      "SN": 11,
      "SN_tr": 9,
      "SN_un": 2,
      "SN_ex": 0,
      "FHW": 45,
      "FHW_tr": 39,
      "FHW_un": 6,
      "FHW_ex": 0,
      "MPHW": 33,
      "MPHW_tr": 30,
      "MPHW_un": 3,
      "MPHW_ex": 0,
      "Coverage": 87.4
    },
    {
      "Block": "VIRAMGAM",
      "Total": 87,
      "Trained": 79,
      "Untrained": 8,
      "MO": 4,
      "MO_tr": 5,
      "MO_un": 0,
      "MO_ex": 1,
      "CHO": 11,
      "CHO_tr": 11,
      "CHO_un": 0,
      "CHO_ex": 0,
      "SN": 10,
      "SN_tr": 10,
      "SN_un": 0,
      "SN_ex": 0,
      "FHW": 33,
      "FHW_tr": 24,
      "FHW_un": 9,
      "FHW_ex": 0,
      "MPHW": 29,
      "MPHW_tr": 29,
      "MPHW_un": 0,
      "MPHW_ex": 0,
      "Coverage": 90.8
    }
  ],
  "cadre_data": [
    {
      "cadre": "MO",
      "total": 38,
      "trained": 46,
      "untrained": 0,
      "excess": 10,
      "coverage": 121.1
    },
    {
      "cadre": "CHO",
      "total": 141,
      "trained": 141,
      "untrained": 0,
      "excess": 5,
      "coverage": 100.0
    },
    {
      "cadre": "SN",
      "total": 81,
      "trained": 64,
      "untrained": 17,
      "excess": 0,
      "coverage": 79.0
    },
    {
      "cadre": "FHW",
      "total": 245,
      "trained": 215,
      "untrained": 30,
      "excess": 0,
      "coverage": 87.8
    },
    {
      "cadre": "MPHW",
      "total": 237,
      "trained": 234,
      "untrained": 3,
      "excess": 1,
      "coverage": 98.7
    }
  ],
  "trained_list": [
    {
      "Block": "BAVLA",
      "PHC": "GANGAD",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-BAVLA-001)",
      "PlaceOfDuty": "PHC GANGAD"
    },
    {
      "Block": "BAVLA",
      "PHC": "GANGAD",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-BAVLA-002)",
      "PlaceOfDuty": "KERALA"
    },
    {
      "Block": "BAVLA",
      "PHC": "GANGAD",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-BAVLA-003)",
      "PlaceOfDuty": "KALYANGADH"
    },
    {
      "Block": "BAVLA",
      "PHC": "GANGAD",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-BAVLA-004)",
      "PlaceOfDuty": "BHAYLA"
    },
    {
      "Block": "BAVLA",
      "PHC": "GANGAD",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-BAVLA-005)",
      "PlaceOfDuty": "CHIYADA"
    },
    {
      "Block": "BAVLA",
      "PHC": "GANGAD",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-BAVLA-006)",
      "PlaceOfDuty": "GANGAD"
    },
    {
      "Block": "BAVLA",
      "PHC": "GANGAD",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-BAVLA-007)",
      "PlaceOfDuty": "Kalyangadh"
    },
    {
      "Block": "BAVLA",
      "PHC": "GANGAD",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-BAVLA-008)",
      "PlaceOfDuty": "KERALA"
    },
    {
      "Block": "BAVLA",
      "PHC": "GANGAD",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-BAVLA-009)",
      "PlaceOfDuty": "BHAYLA"
    },
    {
      "Block": "BAVLA",
      "PHC": "GANGAD",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-BAVLA-010)",
      "PlaceOfDuty": "Chiyada"
    },
    {
      "Block": "BAVLA",
      "PHC": "GANGAD",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-BAVLA-011)",
      "PlaceOfDuty": "AAM-KERALA"
    },
    {
      "Block": "BAVLA",
      "PHC": "GANGAD",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-BAVLA-012)",
      "PlaceOfDuty": "CHIYADA"
    },
    {
      "Block": "BAVLA",
      "PHC": "GANGAD",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-BAVLA-013)",
      "PlaceOfDuty": "GANGAD"
    },
    {
      "Block": "BAVLA",
      "PHC": "GANGAD",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-BAVLA-014)",
      "PlaceOfDuty": "BHAYLA"
    },
    {
      "Block": "BAVLA",
      "PHC": "GANGAD",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-BAVLA-015)",
      "PlaceOfDuty": "kalyangadh"
    },
    {
      "Block": "BAVLA",
      "PHC": "KAVITHA",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-BAVLA-016)",
      "PlaceOfDuty": "KAVITHA"
    },
    {
      "Block": "BAVLA",
      "PHC": "KAVITHA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-BAVLA-017)",
      "PlaceOfDuty": "RAJODA"
    },
    {
      "Block": "BAVLA",
      "PHC": "KAVITHA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-BAVLA-018)",
      "PlaceOfDuty": "SALJADA"
    },
    {
      "Block": "BAVLA",
      "PHC": "KAVITHA",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-BAVLA-019)",
      "PlaceOfDuty": "KAVITHA"
    },
    {
      "Block": "BAVLA",
      "PHC": "KAVITHA",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-BAVLA-020)",
      "PlaceOfDuty": "KAVITHA"
    },
    {
      "Block": "BAVLA",
      "PHC": "KAVITHA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-BAVLA-021)",
      "PlaceOfDuty": "KAVITHA  1"
    },
    {
      "Block": "BAVLA",
      "PHC": "KAVITHA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-BAVLA-022)",
      "PlaceOfDuty": "SC :SALAJADA"
    },
    {
      "Block": "BAVLA",
      "PHC": "KAVITHA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-BAVLA-023)",
      "PlaceOfDuty": "RAJODA"
    },
    {
      "Block": "BAVLA",
      "PHC": "KAVITHA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-BAVLA-024)",
      "PlaceOfDuty": "Kavitha"
    },
    {
      "Block": "BAVLA",
      "PHC": "KAVITHA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-BAVLA-025)",
      "PlaceOfDuty": "SALJADA"
    },
    {
      "Block": "BAVLA",
      "PHC": "KAVITHA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-BAVLA-026)",
      "PlaceOfDuty": "BAVLA URBAN 1"
    },
    {
      "Block": "BAVLA",
      "PHC": "KAVITHA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-BAVLA-027)",
      "PlaceOfDuty": "RAJODA"
    },
    {
      "Block": "BAVLA",
      "PHC": "NANODARA",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-BAVLA-028)",
      "PlaceOfDuty": "Phc nanodara"
    },
    {
      "Block": "BAVLA",
      "PHC": "NANODARA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-BAVLA-029)",
      "PlaceOfDuty": "AAM KESHARDI,"
    },
    {
      "Block": "BAVLA",
      "PHC": "NANODARA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-BAVLA-030)",
      "PlaceOfDuty": "AADRODA"
    },
    {
      "Block": "BAVLA",
      "PHC": "NANODARA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-BAVLA-031)",
      "PlaceOfDuty": "RUPAL"
    },
    {
      "Block": "BAVLA",
      "PHC": "NANODARA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-BAVLA-032)",
      "PlaceOfDuty": "DEHGAMDA"
    },
    {
      "Block": "BAVLA",
      "PHC": "NANODARA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-BAVLA-033)",
      "PlaceOfDuty": "RUPAL"
    },
    {
      "Block": "BAVLA",
      "PHC": "NANODARA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-BAVLA-034)",
      "PlaceOfDuty": "DEHGAMADA"
    },
    {
      "Block": "BAVLA",
      "PHC": "NANODARA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-BAVLA-035)",
      "PlaceOfDuty": "AADRODA"
    },
    {
      "Block": "BAVLA",
      "PHC": "NANODARA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-BAVLA-036)",
      "PlaceOfDuty": "NANODRA PHC"
    },
    {
      "Block": "BAVLA",
      "PHC": "NANODARA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-BAVLA-037)",
      "PlaceOfDuty": "DEVDHOLERA"
    },
    {
      "Block": "BAVLA",
      "PHC": "NANODARA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-BAVLA-038)",
      "PlaceOfDuty": "AADRODA"
    },
    {
      "Block": "BAVLA",
      "PHC": "NANODARA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-BAVLA-039)",
      "PlaceOfDuty": "NANODARA"
    },
    {
      "Block": "BAVLA",
      "PHC": "NANODARA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-BAVLA-040)",
      "PlaceOfDuty": "Nanodara/dehgamda"
    },
    {
      "Block": "BAVLA",
      "PHC": "NANODARA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-BAVLA-041)",
      "PlaceOfDuty": "DHEDHAL"
    },
    {
      "Block": "BAVLA",
      "PHC": "NANODARA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-BAVLA-042)",
      "PlaceOfDuty": "RUPAL"
    },
    {
      "Block": "BAVLA",
      "PHC": "NANODARA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-BAVLA-043)",
      "PlaceOfDuty": "KESHARADI"
    },
    {
      "Block": "BAVLA",
      "PHC": "SHIYAL",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-BAVLA-044)",
      "PlaceOfDuty": "Uhc bavla and phc shiyal(i/c)"
    },
    {
      "Block": "BAVLA",
      "PHC": "SHIYAL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-BAVLA-045)",
      "PlaceOfDuty": "AAM MITHAPUR"
    },
    {
      "Block": "BAVLA",
      "PHC": "SHIYAL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-BAVLA-046)",
      "PlaceOfDuty": "DEVADTHAL"
    },
    {
      "Block": "BAVLA",
      "PHC": "SHIYAL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-BAVLA-047)",
      "PlaceOfDuty": "BAGODARA"
    },
    {
      "Block": "BAVLA",
      "PHC": "SHIYAL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-BAVLA-048)",
      "PlaceOfDuty": "AAM DHARJI"
    },
    {
      "Block": "BAVLA",
      "PHC": "SHIYAL",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-BAVLA-049)",
      "PlaceOfDuty": "SHIYAL"
    },
    {
      "Block": "BAVLA",
      "PHC": "SHIYAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-BAVLA-050)",
      "PlaceOfDuty": "Dharji"
    },
    {
      "Block": "BAVLA",
      "PHC": "SHIYAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-BAVLA-051)",
      "PlaceOfDuty": "MITHAPUR"
    },
    {
      "Block": "BAVLA",
      "PHC": "SHIYAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-BAVLA-052)",
      "PlaceOfDuty": "SHIYAL"
    },
    {
      "Block": "BAVLA",
      "PHC": "SHIYAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-BAVLA-053)",
      "PlaceOfDuty": "Devadthal"
    },
    {
      "Block": "BAVLA",
      "PHC": "SHIYAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-BAVLA-054)",
      "PlaceOfDuty": "DEVADTHAL"
    },
    {
      "Block": "BAVLA",
      "PHC": "SHIYAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-BAVLA-055)",
      "PlaceOfDuty": "Mithapur"
    },
    {
      "Block": "BAVLA",
      "PHC": "SHIYAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-BAVLA-056)",
      "PlaceOfDuty": "Shiyal"
    },
    {
      "Block": "BAVLA",
      "PHC": "SHIYAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-BAVLA-057)",
      "PlaceOfDuty": "BAGODARA"
    },
    {
      "Block": "BAVLA",
      "PHC": "SHIYAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-BAVLA-058)",
      "PlaceOfDuty": "Dharji"
    },
    {
      "Block": "BAVLA",
      "PHC": "URBAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-BAVLA-059)",
      "PlaceOfDuty": "Bavla Urban"
    },
    {
      "Block": "BAVLA",
      "PHC": "URBAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-BAVLA-060)",
      "PlaceOfDuty": "Bavla 3"
    },
    {
      "Block": "BAVLA",
      "PHC": "URBAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-BAVLA-061)",
      "PlaceOfDuty": "Bavla Urban Bavla2"
    },
    {
      "Block": "DASCROI",
      "PHC": "ASLALI",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DASCROI-062)",
      "PlaceOfDuty": "ASLALI"
    },
    {
      "Block": "DASCROI",
      "PHC": "ASLALI",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-063)",
      "PlaceOfDuty": "VASAI"
    },
    {
      "Block": "DASCROI",
      "PHC": "ASLALI",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-064)",
      "PlaceOfDuty": "PALDIKANKAJ"
    },
    {
      "Block": "DASCROI",
      "PHC": "ASLALI",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-065)",
      "PlaceOfDuty": "MIROLI"
    },
    {
      "Block": "DASCROI",
      "PHC": "ASLALI",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-066)",
      "PlaceOfDuty": "AAM"
    },
    {
      "Block": "DASCROI",
      "PHC": "ASLALI",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DASCROI-067)",
      "PlaceOfDuty": "ASLALI"
    },
    {
      "Block": "DASCROI",
      "PHC": "ASLALI",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-068)",
      "PlaceOfDuty": "MIROLI"
    },
    {
      "Block": "DASCROI",
      "PHC": "ASLALI",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-069)",
      "PlaceOfDuty": "Aslali"
    },
    {
      "Block": "DASCROI",
      "PHC": "ASLALI",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-070)",
      "PlaceOfDuty": "PALDIKANKAJ"
    },
    {
      "Block": "DASCROI",
      "PHC": "ASLALI",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-071)",
      "PlaceOfDuty": "VASAI"
    },
    {
      "Block": "DASCROI",
      "PHC": "ASLALI",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-072)",
      "PlaceOfDuty": "ODE"
    },
    {
      "Block": "DASCROI",
      "PHC": "ASLALI",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-073)",
      "PlaceOfDuty": "Vasai"
    },
    {
      "Block": "DASCROI",
      "PHC": "ASLALI",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-074)",
      "PlaceOfDuty": "ODE"
    },
    {
      "Block": "DASCROI",
      "PHC": "ASLALI",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-075)",
      "PlaceOfDuty": "Paldikankaj"
    },
    {
      "Block": "DASCROI",
      "PHC": "ASLALI",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-076)",
      "PlaceOfDuty": "PHC"
    },
    {
      "Block": "DASCROI",
      "PHC": "ASLALI",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-077)",
      "PlaceOfDuty": "ASLALI"
    },
    {
      "Block": "DASCROI",
      "PHC": "ASLALI",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-078)",
      "PlaceOfDuty": "MIROLI"
    },
    {
      "Block": "DASCROI",
      "PHC": "JETALPUR",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DASCROI-079)",
      "PlaceOfDuty": "Jetalpur"
    },
    {
      "Block": "DASCROI",
      "PHC": "JETALPUR",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-080)",
      "PlaceOfDuty": "SC"
    },
    {
      "Block": "DASCROI",
      "PHC": "JETALPUR",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-081)",
      "PlaceOfDuty": "GIRMATHA"
    },
    {
      "Block": "DASCROI",
      "PHC": "JETALPUR",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-082)",
      "PlaceOfDuty": "GAMDI"
    },
    {
      "Block": "DASCROI",
      "PHC": "JETALPUR",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-083)",
      "PlaceOfDuty": "Bareja 2"
    },
    {
      "Block": "DASCROI",
      "PHC": "JETALPUR",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-084)",
      "PlaceOfDuty": "Bareja 3"
    },
    {
      "Block": "DASCROI",
      "PHC": "JETALPUR",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DASCROI-085)",
      "PlaceOfDuty": "JETALPUR"
    },
    {
      "Block": "DASCROI",
      "PHC": "JETALPUR",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DASCROI-086)",
      "PlaceOfDuty": "PHC JETALPUR"
    },
    {
      "Block": "DASCROI",
      "PHC": "JETALPUR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-087)",
      "PlaceOfDuty": "BAREJA 1"
    },
    {
      "Block": "DASCROI",
      "PHC": "JETALPUR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-088)",
      "PlaceOfDuty": "GIRMATHA"
    },
    {
      "Block": "DASCROI",
      "PHC": "JETALPUR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-089)",
      "PlaceOfDuty": "BAREJA 3"
    },
    {
      "Block": "DASCROI",
      "PHC": "JETALPUR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-090)",
      "PlaceOfDuty": "JETALPUR"
    },
    {
      "Block": "DASCROI",
      "PHC": "JETALPUR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-091)",
      "PlaceOfDuty": "Bareja 2"
    },
    {
      "Block": "DASCROI",
      "PHC": "JETALPUR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-092)",
      "PlaceOfDuty": "GAMDI"
    },
    {
      "Block": "DASCROI",
      "PHC": "JETALPUR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-093)",
      "PlaceOfDuty": "Jetalpur"
    },
    {
      "Block": "DASCROI",
      "PHC": "JETALPUR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-094)",
      "PlaceOfDuty": "GAMDI"
    },
    {
      "Block": "DASCROI",
      "PHC": "JETALPUR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-095)",
      "PlaceOfDuty": "Dascroi THO OFFICE"
    },
    {
      "Block": "DASCROI",
      "PHC": "JETALPUR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-096)",
      "PlaceOfDuty": "JETALPUR"
    },
    {
      "Block": "DASCROI",
      "PHC": "JETALPUR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-097)",
      "PlaceOfDuty": "Bareja -1"
    },
    {
      "Block": "DASCROI",
      "PHC": "JETALPUR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-098)",
      "PlaceOfDuty": "Giramtha"
    },
    {
      "Block": "DASCROI",
      "PHC": "JETALPUR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-099)",
      "PlaceOfDuty": "BAREJA-3"
    },
    {
      "Block": "DASCROI",
      "PHC": "JETALPUR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-100)",
      "PlaceOfDuty": "BAREJA 2"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DASCROI-101)",
      "PlaceOfDuty": "KANBHA"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-102)",
      "PlaceOfDuty": "AAM GATRAD"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-103)",
      "PlaceOfDuty": "SC-Dhamatvan"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-104)",
      "PlaceOfDuty": "AAM-KUJAD"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-105)",
      "PlaceOfDuty": "PASUNJ"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-106)",
      "PlaceOfDuty": "BAKROL"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-107)",
      "PlaceOfDuty": "ZANU"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-108)",
      "PlaceOfDuty": "AAM-KUBADTHAL"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DASCROI-109)",
      "PlaceOfDuty": "KANBHA"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DASCROI-110)",
      "PlaceOfDuty": "PHC - KANBHA"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-111)",
      "PlaceOfDuty": "KANBHA"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-112)",
      "PlaceOfDuty": "KUBADTHAL"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-113)",
      "PlaceOfDuty": "KANBHA"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-114)",
      "PlaceOfDuty": "SC_PASUNJ"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-115)",
      "PlaceOfDuty": "GATARAD"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-116)",
      "PlaceOfDuty": "ZANU"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-117)",
      "PlaceOfDuty": "GATRAD"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-118)",
      "PlaceOfDuty": "KUBADTHAL"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-119)",
      "PlaceOfDuty": "DHAMATVAN"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-120)",
      "PlaceOfDuty": "Zanu"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-121)",
      "PlaceOfDuty": "Pasunj"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-122)",
      "PlaceOfDuty": "KUJAD"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-123)",
      "PlaceOfDuty": "PHC KANBHA"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-124)",
      "PlaceOfDuty": "BAKROL"
    },
    {
      "Block": "DASCROI",
      "PHC": "KANBHA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-125)",
      "PlaceOfDuty": "KANBHA"
    },
    {
      "Block": "DASCROI",
      "PHC": "KASINDRA",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DASCROI-126)",
      "PlaceOfDuty": "KASINDRA"
    },
    {
      "Block": "DASCROI",
      "PHC": "KASINDRA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-127)",
      "PlaceOfDuty": "Visalpur"
    },
    {
      "Block": "DASCROI",
      "PHC": "KASINDRA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-128)",
      "PlaceOfDuty": "AAM-BHAT"
    },
    {
      "Block": "DASCROI",
      "PHC": "KASINDRA",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DASCROI-129)",
      "PlaceOfDuty": "KASINDRA PHC"
    },
    {
      "Block": "DASCROI",
      "PHC": "KASINDRA",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DASCROI-130)",
      "PlaceOfDuty": "Phc kasindra"
    },
    {
      "Block": "DASCROI",
      "PHC": "KASINDRA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-131)",
      "PlaceOfDuty": "KASINDRA PHC"
    },
    {
      "Block": "DASCROI",
      "PHC": "KASINDRA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-132)",
      "PlaceOfDuty": "VISALPUR"
    },
    {
      "Block": "DASCROI",
      "PHC": "KASINDRA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-133)",
      "PlaceOfDuty": "BHAT"
    },
    {
      "Block": "DASCROI",
      "PHC": "KASINDRA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-134)",
      "PlaceOfDuty": "AAM VISALPUR"
    },
    {
      "Block": "DASCROI",
      "PHC": "KASINDRA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-135)",
      "PlaceOfDuty": "Phc"
    },
    {
      "Block": "DASCROI",
      "PHC": "KASINDRA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-136)",
      "PlaceOfDuty": "Bhat"
    },
    {
      "Block": "DASCROI",
      "PHC": "KASINDRA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-137)",
      "PlaceOfDuty": "Kasindra-2"
    },
    {
      "Block": "DASCROI",
      "PHC": "KHODIYAR",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DASCROI-138)",
      "PlaceOfDuty": "Phc Khodiyar"
    },
    {
      "Block": "DASCROI",
      "PHC": "KHODIYAR",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-139)",
      "PlaceOfDuty": "Khodiyar"
    },
    {
      "Block": "DASCROI",
      "PHC": "KHODIYAR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-140)",
      "PlaceOfDuty": "KHODIYAR"
    },
    {
      "Block": "DASCROI",
      "PHC": "KHODIYAR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-141)",
      "PlaceOfDuty": "KHODIYAR"
    },
    {
      "Block": "DASCROI",
      "PHC": "KHODIYAR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-142)",
      "PlaceOfDuty": "KHODIYAR"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DASCROI-143)",
      "PlaceOfDuty": "PHC KUHA"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-144)",
      "PlaceOfDuty": "RANODARA"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-145)",
      "PlaceOfDuty": "HANSALPUR"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-146)",
      "PlaceOfDuty": "Undrel"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-147)",
      "PlaceOfDuty": "Bhavda centre"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-148)",
      "PlaceOfDuty": "VANCH"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-149)",
      "PlaceOfDuty": "CHANDIAL"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DASCROI-150)",
      "PlaceOfDuty": "KUHA"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DASCROI-151)",
      "PlaceOfDuty": "KUHA"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DASCROI-152)",
      "PlaceOfDuty": "KUHA PHC"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DASCROI-153)",
      "PlaceOfDuty": "KUHA"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-154)",
      "PlaceOfDuty": "UNDREL"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-155)",
      "PlaceOfDuty": "KUHA 2"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-156)",
      "PlaceOfDuty": "RANODARA"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-157)",
      "PlaceOfDuty": "KUHA 1"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-158)",
      "PlaceOfDuty": "BHAVDA"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-159)",
      "PlaceOfDuty": "CHANDIYEL"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-160)",
      "PlaceOfDuty": "CHAVLAJ"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-161)",
      "PlaceOfDuty": "BHAVDA"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-162)",
      "PlaceOfDuty": "kuha"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-163)",
      "PlaceOfDuty": "Phc"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-164)",
      "PlaceOfDuty": "KUHA2"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-165)",
      "PlaceOfDuty": "RANODARA"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-166)",
      "PlaceOfDuty": "UNDREL"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-167)",
      "PlaceOfDuty": "CHANDIAL"
    },
    {
      "Block": "DASCROI",
      "PHC": "KUHA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-168)",
      "PlaceOfDuty": "CHAVLAJ"
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DASCROI-169)",
      "PlaceOfDuty": "PHC NANDEJ"
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-170)",
      "PlaceOfDuty": "Sc HIRAPUR"
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-171)",
      "PlaceOfDuty": "BAREJADI"
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-172)",
      "PlaceOfDuty": "DEVDI"
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-173)",
      "PlaceOfDuty": "AAM HARNIYAV"
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DASCROI-174)",
      "PlaceOfDuty": "NANDEJ"
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-175)",
      "PlaceOfDuty": "DHAMATVAN"
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-176)",
      "PlaceOfDuty": "NANDEJ 2"
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-177)",
      "PlaceOfDuty": "NANDEJ 1"
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-178)",
      "PlaceOfDuty": "HARNIYAV"
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-179)",
      "PlaceOfDuty": "BAREJADI"
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-180)",
      "PlaceOfDuty": "VANCH 1"
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-181)",
      "PlaceOfDuty": "VANCH2"
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-182)",
      "PlaceOfDuty": "NANDEJ"
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-183)",
      "PlaceOfDuty": "DEVDI"
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-184)",
      "PlaceOfDuty": "HIRAPUR"
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-185)",
      "PlaceOfDuty": "NANDEJ -1 ,PHC NANDEJ"
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-186)",
      "PlaceOfDuty": "VANCH 2"
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-187)",
      "PlaceOfDuty": "SC"
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-188)",
      "PlaceOfDuty": "BAREJADI"
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-189)",
      "PlaceOfDuty": "Vanch 1"
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-190)",
      "PlaceOfDuty": "DEVDI"
    },
    {
      "Block": "DASCROI",
      "PHC": "NANDEJ",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-191)",
      "PlaceOfDuty": "Harniyav"
    },
    {
      "Block": "DASCROI",
      "PHC": "VAHELAL",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DASCROI-192)",
      "PlaceOfDuty": "VAHELAL"
    },
    {
      "Block": "DASCROI",
      "PHC": "VAHELAL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-193)",
      "PlaceOfDuty": "Singarva 1"
    },
    {
      "Block": "DASCROI",
      "PHC": "VAHELAL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-194)",
      "PlaceOfDuty": "Aam singarva 2 phc vahelal block- Daskroi"
    },
    {
      "Block": "DASCROI",
      "PHC": "VAHELAL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-195)",
      "PlaceOfDuty": "Bhuvaladi"
    },
    {
      "Block": "DASCROI",
      "PHC": "VAHELAL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DASCROI-196)",
      "PlaceOfDuty": "PARDHOL"
    },
    {
      "Block": "DASCROI",
      "PHC": "VAHELAL",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DASCROI-197)",
      "PlaceOfDuty": "VAHELAL"
    },
    {
      "Block": "DASCROI",
      "PHC": "VAHELAL",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DASCROI-198)",
      "PlaceOfDuty": "VAHELAL"
    },
    {
      "Block": "DASCROI",
      "PHC": "VAHELAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-199)",
      "PlaceOfDuty": "SINGARVA 1"
    },
    {
      "Block": "DASCROI",
      "PHC": "VAHELAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-200)",
      "PlaceOfDuty": "ENASAN"
    },
    {
      "Block": "DASCROI",
      "PHC": "VAHELAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-201)",
      "PlaceOfDuty": "VAHELAL"
    },
    {
      "Block": "DASCROI",
      "PHC": "VAHELAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-202)",
      "PlaceOfDuty": "BHUVALDI"
    },
    {
      "Block": "DASCROI",
      "PHC": "VAHELAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-203)",
      "PlaceOfDuty": "AAM-SINGARVA-2"
    },
    {
      "Block": "DASCROI",
      "PHC": "VAHELAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DASCROI-204)",
      "PlaceOfDuty": "Pardhol"
    },
    {
      "Block": "DASCROI",
      "PHC": "VAHELAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-205)",
      "PlaceOfDuty": "VAHELAL"
    },
    {
      "Block": "DASCROI",
      "PHC": "VAHELAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-206)",
      "PlaceOfDuty": "SC Singarava2"
    },
    {
      "Block": "DASCROI",
      "PHC": "VAHELAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-207)",
      "PlaceOfDuty": "SINGARVA 1"
    },
    {
      "Block": "DASCROI",
      "PHC": "VAHELAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-208)",
      "PlaceOfDuty": "Bhuvaldi"
    },
    {
      "Block": "DASCROI",
      "PHC": "VAHELAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-209)",
      "PlaceOfDuty": "PARDHOL"
    },
    {
      "Block": "DASCROI",
      "PHC": "VAHELAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-210)",
      "PlaceOfDuty": "ENASAN"
    },
    {
      "Block": "DASCROI",
      "PHC": "VAHELAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DASCROI-211)",
      "PlaceOfDuty": "PHC VAHELAL"
    },
    {
      "Block": "DETROJ",
      "PHC": "KATOSAN ROAD",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DETROJ-212)",
      "PlaceOfDuty": "PHC pipli"
    },
    {
      "Block": "DETROJ",
      "PHC": "KATOSAN ROAD",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DETROJ-213)",
      "PlaceOfDuty": "bhoyani"
    },
    {
      "Block": "DETROJ",
      "PHC": "KATOSAN ROAD",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DETROJ-214)",
      "PlaceOfDuty": "KATOSAN ROAD"
    },
    {
      "Block": "DETROJ",
      "PHC": "KATOSAN ROAD",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DETROJ-215)",
      "PlaceOfDuty": "Suvala"
    },
    {
      "Block": "DETROJ",
      "PHC": "KATOSAN ROAD",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DETROJ-216)",
      "PlaceOfDuty": "Madrisana"
    },
    {
      "Block": "DETROJ",
      "PHC": "KATOSAN ROAD",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DETROJ-217)",
      "PlaceOfDuty": "BANTAI"
    },
    {
      "Block": "DETROJ",
      "PHC": "KATOSAN ROAD",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DETROJ-218)",
      "PlaceOfDuty": "KATOSAN ROAD"
    },
    {
      "Block": "DETROJ",
      "PHC": "KATOSAN ROAD",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DETROJ-219)",
      "PlaceOfDuty": "MADRISANA"
    },
    {
      "Block": "DETROJ",
      "PHC": "KATOSAN ROAD",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DETROJ-220)",
      "PlaceOfDuty": "SC"
    },
    {
      "Block": "DETROJ",
      "PHC": "KATOSAN ROAD",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DETROJ-221)",
      "PlaceOfDuty": "SC"
    },
    {
      "Block": "DETROJ",
      "PHC": "KATOSAN ROAD",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DETROJ-222)",
      "PlaceOfDuty": "BHOYANI"
    },
    {
      "Block": "DETROJ",
      "PHC": "KATOSAN ROAD",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DETROJ-223)",
      "PlaceOfDuty": "BANTAI"
    },
    {
      "Block": "DETROJ",
      "PHC": "KATOSAN ROAD",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DETROJ-224)",
      "PlaceOfDuty": "SC"
    },
    {
      "Block": "DETROJ",
      "PHC": "KATOSAN ROAD",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DETROJ-225)",
      "PlaceOfDuty": "SC"
    },
    {
      "Block": "DETROJ",
      "PHC": "KATOSAN ROAD",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DETROJ-226)",
      "PlaceOfDuty": "SC"
    },
    {
      "Block": "DETROJ",
      "PHC": "KATOSAN ROAD",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DETROJ-227)",
      "PlaceOfDuty": "BHOYANI"
    },
    {
      "Block": "DETROJ",
      "PHC": "RAMPURA",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DETROJ-228)",
      "PlaceOfDuty": "PHC RAMPURA"
    },
    {
      "Block": "DETROJ",
      "PHC": "RAMPURA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DETROJ-229)",
      "PlaceOfDuty": "AAM GAJ"
    },
    {
      "Block": "DETROJ",
      "PHC": "RAMPURA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DETROJ-230)",
      "PlaceOfDuty": "Bhankoda"
    },
    {
      "Block": "DETROJ",
      "PHC": "RAMPURA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DETROJ-231)",
      "PlaceOfDuty": "Ashoknagar"
    },
    {
      "Block": "DETROJ",
      "PHC": "RAMPURA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DETROJ-232)",
      "PlaceOfDuty": "SADATPURA"
    },
    {
      "Block": "DETROJ",
      "PHC": "RAMPURA",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DETROJ-233)",
      "PlaceOfDuty": "Rampura"
    },
    {
      "Block": "DETROJ",
      "PHC": "RAMPURA",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DETROJ-234)",
      "PlaceOfDuty": "RAMPURA"
    },
    {
      "Block": "DETROJ",
      "PHC": "RAMPURA",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DETROJ-235)",
      "PlaceOfDuty": "PHC"
    },
    {
      "Block": "DETROJ",
      "PHC": "RAMPURA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DETROJ-236)",
      "PlaceOfDuty": "SADATPURA"
    },
    {
      "Block": "DETROJ",
      "PHC": "RAMPURA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DETROJ-237)",
      "PlaceOfDuty": "SC"
    },
    {
      "Block": "DETROJ",
      "PHC": "RAMPURA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DETROJ-238)",
      "PlaceOfDuty": "PANAR"
    },
    {
      "Block": "DETROJ",
      "PHC": "RAMPURA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DETROJ-239)",
      "PlaceOfDuty": "AAM"
    },
    {
      "Block": "DETROJ",
      "PHC": "RAMPURA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DETROJ-240)",
      "PlaceOfDuty": "AAM KANZ"
    },
    {
      "Block": "DETROJ",
      "PHC": "RAMPURA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DETROJ-241)",
      "PlaceOfDuty": "AAM RAMPURA"
    },
    {
      "Block": "DETROJ",
      "PHC": "RAMPURA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DETROJ-242)",
      "PlaceOfDuty": "RAMPURA"
    },
    {
      "Block": "DETROJ",
      "PHC": "RAMPURA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DETROJ-243)",
      "PlaceOfDuty": "AAM"
    },
    {
      "Block": "DETROJ",
      "PHC": "RAMPURA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DETROJ-244)",
      "PlaceOfDuty": "AAM"
    },
    {
      "Block": "DETROJ",
      "PHC": "RAMPURA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DETROJ-245)",
      "PlaceOfDuty": "ASHOK NAGAR"
    },
    {
      "Block": "DETROJ",
      "PHC": "RAMPURA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DETROJ-246)",
      "PlaceOfDuty": "BHKODA"
    },
    {
      "Block": "DETROJ",
      "PHC": "RAMPURA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DETROJ-247)",
      "PlaceOfDuty": "KANZ"
    },
    {
      "Block": "DETROJ",
      "PHC": "RUDATAL",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DETROJ-248)",
      "PlaceOfDuty": "RUDATAL"
    },
    {
      "Block": "DETROJ",
      "PHC": "RUDATAL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DETROJ-249)",
      "PlaceOfDuty": "GUJAD SC"
    },
    {
      "Block": "DETROJ",
      "PHC": "RUDATAL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DETROJ-250)",
      "PlaceOfDuty": "SC Detroj"
    },
    {
      "Block": "DETROJ",
      "PHC": "RUDATAL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DETROJ-251)",
      "PlaceOfDuty": "Nadishala"
    },
    {
      "Block": "DETROJ",
      "PHC": "RUDATAL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DETROJ-252)",
      "PlaceOfDuty": "Dekavada"
    },
    {
      "Block": "DETROJ",
      "PHC": "RUDATAL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DETROJ-253)",
      "PlaceOfDuty": "Sc TAGDI"
    },
    {
      "Block": "DETROJ",
      "PHC": "RUDATAL",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DETROJ-254)",
      "PlaceOfDuty": "PHC"
    },
    {
      "Block": "DETROJ",
      "PHC": "RUDATAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DETROJ-255)",
      "PlaceOfDuty": "RUDATAL"
    },
    {
      "Block": "DETROJ",
      "PHC": "RUDATAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DETROJ-256)",
      "PlaceOfDuty": "DETROJ"
    },
    {
      "Block": "DETROJ",
      "PHC": "RUDATAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DETROJ-257)",
      "PlaceOfDuty": "Rudatal"
    },
    {
      "Block": "DETROJ",
      "PHC": "RUDATAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DETROJ-258)",
      "PlaceOfDuty": "SC"
    },
    {
      "Block": "DETROJ",
      "PHC": "RUDATAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DETROJ-259)",
      "PlaceOfDuty": "NADISHALA"
    },
    {
      "Block": "DETROJ",
      "PHC": "RUDATAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DETROJ-260)",
      "PlaceOfDuty": "DEKAVADA"
    },
    {
      "Block": "DETROJ",
      "PHC": "RUDATAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DETROJ-261)",
      "PlaceOfDuty": "ODHAV"
    },
    {
      "Block": "DETROJ",
      "PHC": "RUDATAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DETROJ-262)",
      "PlaceOfDuty": "AAM"
    },
    {
      "Block": "DETROJ",
      "PHC": "RUDATAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DETROJ-263)",
      "PlaceOfDuty": "DEKAVADA"
    },
    {
      "Block": "DETROJ",
      "PHC": "RUDATAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DETROJ-264)",
      "PlaceOfDuty": "AAM"
    },
    {
      "Block": "DETROJ",
      "PHC": "RUDATAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DETROJ-265)",
      "PlaceOfDuty": "Rudatal"
    },
    {
      "Block": "DETROJ",
      "PHC": "RUDATAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DETROJ-266)",
      "PlaceOfDuty": "AAM"
    },
    {
      "Block": "DETROJ",
      "PHC": "RUDATAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DETROJ-267)",
      "PlaceOfDuty": "AAM"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "AKARU",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DHANDHUKA-268)",
      "PlaceOfDuty": "PHC AAKRU"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "AKARU",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHANDHUKA-269)",
      "PlaceOfDuty": "ROJKA"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "AKARU",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHANDHUKA-270)",
      "PlaceOfDuty": "Kharad"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "AKARU",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHANDHUKA-271)",
      "PlaceOfDuty": "TAGDI"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "AKARU",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHANDHUKA-272)",
      "PlaceOfDuty": "Rojka"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "AKARU",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHANDHUKA-273)",
      "PlaceOfDuty": "AAM-KHARAD"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "AKARU",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHANDHUKA-274)",
      "PlaceOfDuty": "Akru"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "AKARU",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHANDHUKA-275)",
      "PlaceOfDuty": "KHARAD"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "AKARU",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHANDHUKA-276)",
      "PlaceOfDuty": "URBAN HEALTH CENTRE"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "AKARU",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHANDHUKA-277)",
      "PlaceOfDuty": "TAGDI"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "AKARU",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHANDHUKA-278)",
      "PlaceOfDuty": "rojka"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "HADALA",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DHANDHUKA-279)",
      "PlaceOfDuty": "Hadala phc"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "HADALA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHANDHUKA-280)",
      "PlaceOfDuty": "Pachchham"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "HADALA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHANDHUKA-281)",
      "PlaceOfDuty": "SC Bajarda"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "HADALA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHANDHUKA-282)",
      "PlaceOfDuty": "Fedra"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "HADALA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHANDHUKA-283)",
      "PlaceOfDuty": "Zanzarka"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "HADALA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHANDHUKA-284)",
      "PlaceOfDuty": "ADVAL"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "HADALA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHANDHUKA-285)",
      "PlaceOfDuty": "KHADOL"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "HADALA",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DHANDHUKA-286)",
      "PlaceOfDuty": "Hadala  PHC"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "HADALA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHANDHUKA-287)",
      "PlaceOfDuty": "KHADOL"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "HADALA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHANDHUKA-288)",
      "PlaceOfDuty": "HADALA"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "HADALA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHANDHUKA-289)",
      "PlaceOfDuty": "Adval"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "HADALA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHANDHUKA-290)",
      "PlaceOfDuty": "FEDRA"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "HADALA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHANDHUKA-291)",
      "PlaceOfDuty": "Bajarda"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "HADALA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHANDHUKA-292)",
      "PlaceOfDuty": "Pachchham"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "HADALA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHANDHUKA-293)",
      "PlaceOfDuty": "HADALABHAL"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "HADALA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHANDHUKA-294)",
      "PlaceOfDuty": "Zanzarkar"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "HADALA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHANDHUKA-295)",
      "PlaceOfDuty": "PACHCHHAM"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "HADALA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHANDHUKA-296)",
      "PlaceOfDuty": "Khadol"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "HADALA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHANDHUKA-297)",
      "PlaceOfDuty": "FEDARA"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "HADALA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHANDHUKA-298)",
      "PlaceOfDuty": "ADVAL"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "HADALA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHANDHUKA-299)",
      "PlaceOfDuty": "Bajarda"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "URBAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHANDHUKA-300)",
      "PlaceOfDuty": "URBAN"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "VAGAD",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DHANDHUKA-301)",
      "PlaceOfDuty": "Vagad phc"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "VAGAD",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHANDHUKA-302)",
      "PlaceOfDuty": "AAM vasna"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "VAGAD",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHANDHUKA-303)",
      "PlaceOfDuty": "AAM RANGPUR"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "VAGAD",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHANDHUKA-304)",
      "PlaceOfDuty": "KOTDA"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "VAGAD",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHANDHUKA-305)",
      "PlaceOfDuty": "Gunjar"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "VAGAD",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DHANDHUKA-306)",
      "PlaceOfDuty": "Vagad"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "VAGAD",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DHANDHUKA-307)",
      "PlaceOfDuty": "Phc vagad"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "VAGAD",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DHANDHUKA-308)",
      "PlaceOfDuty": "Phc vagad"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "VAGAD",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHANDHUKA-309)",
      "PlaceOfDuty": "KOTDA"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "VAGAD",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHANDHUKA-310)",
      "PlaceOfDuty": "GUNJAR"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "VAGAD",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHANDHUKA-311)",
      "PlaceOfDuty": "VAGAD"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "VAGAD",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHANDHUKA-312)",
      "PlaceOfDuty": "RANGPUR"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "VAGAD",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHANDHUKA-313)",
      "PlaceOfDuty": "VAGAD"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "VAGAD",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHANDHUKA-314)",
      "PlaceOfDuty": "GUNJAR"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "VAGAD",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHANDHUKA-315)",
      "PlaceOfDuty": "VASNA"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "VAGAD",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHANDHUKA-316)",
      "PlaceOfDuty": "Kotada"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "VAGAD",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHANDHUKA-317)",
      "PlaceOfDuty": "DHANDHUKA URBAN 1"
    },
    {
      "Block": "DHANDHUKA",
      "PHC": "VAGAD",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHANDHUKA-318)",
      "PlaceOfDuty": "RANGPUR"
    },
    {
      "Block": "DHOLERA",
      "PHC": "BHADIYAD",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DHOLERA-319)",
      "PlaceOfDuty": "Phc bhadiyad"
    },
    {
      "Block": "DHOLERA",
      "PHC": "BHADIYAD",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLERA-320)",
      "PlaceOfDuty": "AAM - Cher"
    },
    {
      "Block": "DHOLERA",
      "PHC": "BHADIYAD",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLERA-321)",
      "PlaceOfDuty": "Otariya"
    },
    {
      "Block": "DHOLERA",
      "PHC": "BHADIYAD",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DHOLERA-322)",
      "PlaceOfDuty": "Phc bhadiyad"
    },
    {
      "Block": "DHOLERA",
      "PHC": "BHADIYAD",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLERA-323)",
      "PlaceOfDuty": "BHADIYAD"
    },
    {
      "Block": "DHOLERA",
      "PHC": "BHADIYAD",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLERA-324)",
      "PlaceOfDuty": "CHER"
    },
    {
      "Block": "DHOLERA",
      "PHC": "BHADIYAD",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLERA-325)",
      "PlaceOfDuty": "BHADIYAD"
    },
    {
      "Block": "DHOLERA",
      "PHC": "BHADIYAD",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLERA-326)",
      "PlaceOfDuty": "OTARIYA"
    },
    {
      "Block": "DHOLERA",
      "PHC": "BHADIYAD",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLERA-327)",
      "PlaceOfDuty": "CHER"
    },
    {
      "Block": "DHOLERA",
      "PHC": "DHOLERA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLERA-328)",
      "PlaceOfDuty": "BHANGADH"
    },
    {
      "Block": "DHOLERA",
      "PHC": "DHOLERA",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DHOLERA-329)",
      "PlaceOfDuty": "Primary health centre"
    },
    {
      "Block": "DHOLERA",
      "PHC": "DHOLERA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLERA-330)",
      "PlaceOfDuty": "Dholera"
    },
    {
      "Block": "DHOLERA",
      "PHC": "DHOLERA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLERA-331)",
      "PlaceOfDuty": "Sandhida"
    },
    {
      "Block": "DHOLERA",
      "PHC": "DHOLERA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLERA-332)",
      "PlaceOfDuty": "Hebatpur"
    },
    {
      "Block": "DHOLERA",
      "PHC": "DHOLERA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLERA-333)",
      "PlaceOfDuty": "SANDHIDA/ HEBATPUR"
    },
    {
      "Block": "DHOLERA",
      "PHC": "DHOLERA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLERA-334)",
      "PlaceOfDuty": "BHANGADH"
    },
    {
      "Block": "DHOLERA",
      "PHC": "DHOLERA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLERA-335)",
      "PlaceOfDuty": "Dholera"
    },
    {
      "Block": "DHOLERA",
      "PHC": "DHOLERA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLERA-336)",
      "PlaceOfDuty": "HEBATPUR"
    },
    {
      "Block": "DHOLERA",
      "PHC": "DHOLERA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLERA-337)",
      "PlaceOfDuty": "BAVLIYARI"
    },
    {
      "Block": "DHOLERA",
      "PHC": "PIPLI",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLERA-338)",
      "PlaceOfDuty": "AMBLI"
    },
    {
      "Block": "DHOLERA",
      "PHC": "PIPLI",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DHOLERA-339)",
      "PlaceOfDuty": "PHC"
    },
    {
      "Block": "DHOLERA",
      "PHC": "PIPLI",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLERA-340)",
      "PlaceOfDuty": "AMBLI"
    },
    {
      "Block": "DHOLERA",
      "PHC": "PIPLI",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLERA-341)",
      "PlaceOfDuty": "Gamph"
    },
    {
      "Block": "DHOLERA",
      "PHC": "PIPLI",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLERA-342)",
      "PlaceOfDuty": "PIPALI"
    },
    {
      "Block": "DHOLERA",
      "PHC": "PIPLI",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLERA-343)",
      "PlaceOfDuty": "AMBLI"
    },
    {
      "Block": "DHOLKA",
      "PHC": "AMBALIYARA",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DHOLKA-344)",
      "PlaceOfDuty": "AMBALYARA"
    },
    {
      "Block": "DHOLKA",
      "PHC": "AMBALIYARA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-345)",
      "PlaceOfDuty": "Ranoda"
    },
    {
      "Block": "DHOLKA",
      "PHC": "AMBALIYARA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-346)",
      "PlaceOfDuty": "Sathal"
    },
    {
      "Block": "DHOLKA",
      "PHC": "AMBALIYARA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-347)",
      "PlaceOfDuty": "Chandisar"
    },
    {
      "Block": "DHOLKA",
      "PHC": "AMBALIYARA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-348)",
      "PlaceOfDuty": "Saroda"
    },
    {
      "Block": "DHOLKA",
      "PHC": "AMBALIYARA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-349)",
      "PlaceOfDuty": "Ranoda"
    },
    {
      "Block": "DHOLKA",
      "PHC": "AMBALIYARA",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DHOLKA-350)",
      "PlaceOfDuty": "AMBLIYARA"
    },
    {
      "Block": "DHOLKA",
      "PHC": "AMBALIYARA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-351)",
      "PlaceOfDuty": "JALALPUR VAJIFA"
    },
    {
      "Block": "DHOLKA",
      "PHC": "AMBALIYARA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-352)",
      "PlaceOfDuty": "AMBALYARA"
    },
    {
      "Block": "DHOLKA",
      "PHC": "AMBALIYARA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-353)",
      "PlaceOfDuty": "Ranoda"
    },
    {
      "Block": "DHOLKA",
      "PHC": "AMBALIYARA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-354)",
      "PlaceOfDuty": "CHANDISAR"
    },
    {
      "Block": "DHOLKA",
      "PHC": "AMBALIYARA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-355)",
      "PlaceOfDuty": "SHATHL"
    },
    {
      "Block": "DHOLKA",
      "PHC": "AMBALIYARA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-356)",
      "PlaceOfDuty": "ABLIYARA"
    },
    {
      "Block": "DHOLKA",
      "PHC": "AMBALIYARA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-357)",
      "PlaceOfDuty": "SATHAL"
    },
    {
      "Block": "DHOLKA",
      "PHC": "AMBALIYARA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-358)",
      "PlaceOfDuty": "Ranoda"
    },
    {
      "Block": "DHOLKA",
      "PHC": "AMBALIYARA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-359)",
      "PlaceOfDuty": "JALALPUR VAJIFA"
    },
    {
      "Block": "DHOLKA",
      "PHC": "AMBALIYARA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-360)",
      "PlaceOfDuty": "SARODA"
    },
    {
      "Block": "DHOLKA",
      "PHC": "AMBALIYARA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-361)",
      "PlaceOfDuty": "Ambaliyara"
    },
    {
      "Block": "DHOLKA",
      "PHC": "AMBALIYARA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-362)",
      "PlaceOfDuty": "CHANDISAR"
    },
    {
      "Block": "DHOLKA",
      "PHC": "CHALODA",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DHOLKA-363)",
      "PlaceOfDuty": "phc chaloda"
    },
    {
      "Block": "DHOLKA",
      "PHC": "CHALODA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-364)",
      "PlaceOfDuty": "Badarkha 1"
    },
    {
      "Block": "DHOLKA",
      "PHC": "CHALODA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-365)",
      "PlaceOfDuty": "Badarkha2"
    },
    {
      "Block": "DHOLKA",
      "PHC": "CHALODA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-366)",
      "PlaceOfDuty": "KELIYAVASNA"
    },
    {
      "Block": "DHOLKA",
      "PHC": "CHALODA",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DHOLKA-367)",
      "PlaceOfDuty": "PHC CHALODA"
    },
    {
      "Block": "DHOLKA",
      "PHC": "CHALODA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-368)",
      "PlaceOfDuty": "BADRKHA 2"
    },
    {
      "Block": "DHOLKA",
      "PHC": "CHALODA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-369)",
      "PlaceOfDuty": "BADARKHA-1"
    },
    {
      "Block": "DHOLKA",
      "PHC": "CHALODA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-370)",
      "PlaceOfDuty": "Sc-keliyavasna"
    },
    {
      "Block": "DHOLKA",
      "PHC": "CHALODA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-371)",
      "PlaceOfDuty": "CHALODA -2"
    },
    {
      "Block": "DHOLKA",
      "PHC": "CHALODA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-372)",
      "PlaceOfDuty": "Sc-chaloda-1"
    },
    {
      "Block": "DHOLKA",
      "PHC": "CHALODA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-373)",
      "PlaceOfDuty": "BADARKHA 1"
    },
    {
      "Block": "DHOLKA",
      "PHC": "CHALODA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-374)",
      "PlaceOfDuty": "CHALODA 2"
    },
    {
      "Block": "DHOLKA",
      "PHC": "CHALODA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-375)",
      "PlaceOfDuty": "CHALODA-1"
    },
    {
      "Block": "DHOLKA",
      "PHC": "CHALODA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-376)",
      "PlaceOfDuty": "Keliyavasna"
    },
    {
      "Block": "DHOLKA",
      "PHC": "CHALODA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-377)",
      "PlaceOfDuty": "BADARKHA-2"
    },
    {
      "Block": "DHOLKA",
      "PHC": "GANOL",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DHOLKA-378)",
      "PlaceOfDuty": "GANOL"
    },
    {
      "Block": "DHOLKA",
      "PHC": "GANOL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-379)",
      "PlaceOfDuty": "RUPGADH"
    },
    {
      "Block": "DHOLKA",
      "PHC": "GANOL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-380)",
      "PlaceOfDuty": "SARANDHI"
    },
    {
      "Block": "DHOLKA",
      "PHC": "GANOL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-381)",
      "PlaceOfDuty": "Kauka"
    },
    {
      "Block": "DHOLKA",
      "PHC": "GANOL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-382)",
      "PlaceOfDuty": "SC -KAUKA"
    },
    {
      "Block": "DHOLKA",
      "PHC": "GANOL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-383)",
      "PlaceOfDuty": "Ambareli"
    },
    {
      "Block": "DHOLKA",
      "PHC": "GANOL",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DHOLKA-384)",
      "PlaceOfDuty": "Phc ganol"
    },
    {
      "Block": "DHOLKA",
      "PHC": "GANOL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-385)",
      "PlaceOfDuty": "SARANDHI ,"
    },
    {
      "Block": "DHOLKA",
      "PHC": "GANOL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-386)",
      "PlaceOfDuty": "SC DADUSAR"
    },
    {
      "Block": "DHOLKA",
      "PHC": "GANOL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-387)",
      "PlaceOfDuty": "Ambareli"
    },
    {
      "Block": "DHOLKA",
      "PHC": "GANOL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-388)",
      "PlaceOfDuty": "RUPGADH"
    },
    {
      "Block": "DHOLKA",
      "PHC": "GANOL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-389)",
      "PlaceOfDuty": "Aam Simej"
    },
    {
      "Block": "DHOLKA",
      "PHC": "GANOL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-390)",
      "PlaceOfDuty": "KAUKA"
    },
    {
      "Block": "DHOLKA",
      "PHC": "GANOL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-391)",
      "PlaceOfDuty": "Sarandi"
    },
    {
      "Block": "DHOLKA",
      "PHC": "GANOL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-392)",
      "PlaceOfDuty": "RUPGADH"
    },
    {
      "Block": "DHOLKA",
      "PHC": "GANOL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-393)",
      "PlaceOfDuty": "DADUSAR"
    },
    {
      "Block": "DHOLKA",
      "PHC": "GANOL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-394)",
      "PlaceOfDuty": "AMBARELI"
    },
    {
      "Block": "DHOLKA",
      "PHC": "GANOL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-395)",
      "PlaceOfDuty": "Simej"
    },
    {
      "Block": "DHOLKA",
      "PHC": "KOTH",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DHOLKA-396)",
      "PlaceOfDuty": "PHC koth"
    },
    {
      "Block": "DHOLKA",
      "PHC": "KOTH",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-397)",
      "PlaceOfDuty": "AAM:- GUNDI"
    },
    {
      "Block": "DHOLKA",
      "PHC": "KOTH",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-398)",
      "PlaceOfDuty": "Aam Valthera"
    },
    {
      "Block": "DHOLKA",
      "PHC": "KOTH",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-399)",
      "PlaceOfDuty": "Loliya"
    },
    {
      "Block": "DHOLKA",
      "PHC": "KOTH",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-400)",
      "PlaceOfDuty": "Javaraj"
    },
    {
      "Block": "DHOLKA",
      "PHC": "KOTH",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DHOLKA-401)",
      "PlaceOfDuty": "KOTH"
    },
    {
      "Block": "DHOLKA",
      "PHC": "KOTH",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DHOLKA-402)",
      "PlaceOfDuty": "KOTH PHC"
    },
    {
      "Block": "DHOLKA",
      "PHC": "KOTH",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-403)",
      "PlaceOfDuty": "Koth 1"
    },
    {
      "Block": "DHOLKA",
      "PHC": "KOTH",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-404)",
      "PlaceOfDuty": "KOTH 2"
    },
    {
      "Block": "DHOLKA",
      "PHC": "KOTH",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-405)",
      "PlaceOfDuty": "Loliya"
    },
    {
      "Block": "DHOLKA",
      "PHC": "KOTH",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-406)",
      "PlaceOfDuty": "GUNDI"
    },
    {
      "Block": "DHOLKA",
      "PHC": "KOTH",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-407)",
      "PlaceOfDuty": "JAVARAJ"
    },
    {
      "Block": "DHOLKA",
      "PHC": "KOTH",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-408)",
      "PlaceOfDuty": "VALTHERA"
    },
    {
      "Block": "DHOLKA",
      "PHC": "KOTH",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-409)",
      "PlaceOfDuty": "Bhupatsinh Dabhi"
    },
    {
      "Block": "DHOLKA",
      "PHC": "KOTH",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-410)",
      "PlaceOfDuty": "KOTH 1"
    },
    {
      "Block": "DHOLKA",
      "PHC": "KOTH",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-411)",
      "PlaceOfDuty": "KOTH 2"
    },
    {
      "Block": "DHOLKA",
      "PHC": "KOTH",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-412)",
      "PlaceOfDuty": "GUNDI"
    },
    {
      "Block": "DHOLKA",
      "PHC": "KOTH",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-413)",
      "PlaceOfDuty": "LOLIYA"
    },
    {
      "Block": "DHOLKA",
      "PHC": "KOTH",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-414)",
      "PlaceOfDuty": "JAVARAJ"
    },
    {
      "Block": "DHOLKA",
      "PHC": "TRANSAD",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DHOLKA-415)",
      "PlaceOfDuty": "PHC TRANSAD"
    },
    {
      "Block": "DHOLKA",
      "PHC": "TRANSAD",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-416)",
      "PlaceOfDuty": "Sc vautha"
    },
    {
      "Block": "DHOLKA",
      "PHC": "TRANSAD",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-417)",
      "PlaceOfDuty": "PISAWADA , PHC - TRASAD"
    },
    {
      "Block": "DHOLKA",
      "PHC": "TRANSAD",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-418)",
      "PlaceOfDuty": "SC sahij"
    },
    {
      "Block": "DHOLKA",
      "PHC": "TRANSAD",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-419)",
      "PlaceOfDuty": "PISAWADA"
    },
    {
      "Block": "DHOLKA",
      "PHC": "TRANSAD",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-420)",
      "PlaceOfDuty": "Sahij"
    },
    {
      "Block": "DHOLKA",
      "PHC": "TRANSAD",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-421)",
      "PlaceOfDuty": "TRANSAD PHC"
    },
    {
      "Block": "DHOLKA",
      "PHC": "TRANSAD",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-422)",
      "PlaceOfDuty": "SC.VAUTHA"
    },
    {
      "Block": "DHOLKA",
      "PHC": "TRANSAD",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-423)",
      "PlaceOfDuty": "VAUTHA"
    },
    {
      "Block": "DHOLKA",
      "PHC": "TRANSAD",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-424)",
      "PlaceOfDuty": "AAM PISAWADA"
    },
    {
      "Block": "DHOLKA",
      "PHC": "TRANSAD",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-425)",
      "PlaceOfDuty": "TRANSAD"
    },
    {
      "Block": "DHOLKA",
      "PHC": "TRANSAD",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-426)",
      "PlaceOfDuty": "SAHIJ"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DHOLKA-427)",
      "PlaceOfDuty": "UHWC MITHIKUI"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DHOLKA-428)",
      "PlaceOfDuty": "Maflipur HWC/Subcentre"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DHOLKA-429)",
      "PlaceOfDuty": "UPHC 2, Dholka"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DHOLKA-430)",
      "PlaceOfDuty": "UPHC-1"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DHOLKA-431)",
      "PlaceOfDuty": "HWC Firestation, UPHC Dholka 1"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DHOLKA-432)",
      "PlaceOfDuty": "Uhwc saidarshan"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DHOLKA-433)",
      "PlaceOfDuty": "UPHC1 DHOLKA"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DHOLKA-434)",
      "PlaceOfDuty": "URBAN HEALTH CENTER"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DHOLKA-435)",
      "PlaceOfDuty": "UPHC"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DHOLKA-436)",
      "PlaceOfDuty": "UPHC"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-437)",
      "PlaceOfDuty": "URBAN 7"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-438)",
      "PlaceOfDuty": "MAFLIPUR 1"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-439)",
      "PlaceOfDuty": "UHC"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-440)",
      "PlaceOfDuty": "UPHC 2"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-441)",
      "PlaceOfDuty": "UHC"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-442)",
      "PlaceOfDuty": "URBAN 3"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-443)",
      "PlaceOfDuty": "DHOLKA URBAN 4"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-444)",
      "PlaceOfDuty": "Maflipur"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-445)",
      "PlaceOfDuty": "DHOLKA URBAN Sub Senter 3"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-446)",
      "PlaceOfDuty": "HWC MAFLIPUR"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-447)",
      "PlaceOfDuty": "UPHC 2"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-448)",
      "PlaceOfDuty": "URBAN -8"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-449)",
      "PlaceOfDuty": "Mirkuva"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-450)",
      "PlaceOfDuty": "UPHC2 DHOLKA"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-451)",
      "PlaceOfDuty": "HWC SAI DARSHAN"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-452)",
      "PlaceOfDuty": "HWC FIRE STATION"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-453)",
      "PlaceOfDuty": "Hwc vandematram dholka"
    },
    {
      "Block": "DHOLKA",
      "PHC": "URBAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-454)",
      "PlaceOfDuty": "URBAN"
    },
    {
      "Block": "DHOLKA",
      "PHC": "VATAMAN",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-DHOLKA-455)",
      "PlaceOfDuty": "Vataman"
    },
    {
      "Block": "DHOLKA",
      "PHC": "VATAMAN",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-456)",
      "PlaceOfDuty": "BHOLAD"
    },
    {
      "Block": "DHOLKA",
      "PHC": "VATAMAN",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-457)",
      "PlaceOfDuty": "Saragvada"
    },
    {
      "Block": "DHOLKA",
      "PHC": "VATAMAN",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-458)",
      "PlaceOfDuty": "Varana"
    },
    {
      "Block": "DHOLKA",
      "PHC": "VATAMAN",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-459)",
      "PlaceOfDuty": "Vataman"
    },
    {
      "Block": "DHOLKA",
      "PHC": "VATAMAN",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-DHOLKA-460)",
      "PlaceOfDuty": "Motiboru"
    },
    {
      "Block": "DHOLKA",
      "PHC": "VATAMAN",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DHOLKA-461)",
      "PlaceOfDuty": "Vataman"
    },
    {
      "Block": "DHOLKA",
      "PHC": "VATAMAN",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-DHOLKA-462)",
      "PlaceOfDuty": "VATAMAN"
    },
    {
      "Block": "DHOLKA",
      "PHC": "VATAMAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-463)",
      "PlaceOfDuty": "MOTIBORU"
    },
    {
      "Block": "DHOLKA",
      "PHC": "VATAMAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-464)",
      "PlaceOfDuty": "VEJALKA"
    },
    {
      "Block": "DHOLKA",
      "PHC": "VATAMAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-465)",
      "PlaceOfDuty": "VARNA"
    },
    {
      "Block": "DHOLKA",
      "PHC": "VATAMAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-466)",
      "PlaceOfDuty": "VATAMAN"
    },
    {
      "Block": "DHOLKA",
      "PHC": "VATAMAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-467)",
      "PlaceOfDuty": "BHOLAD"
    },
    {
      "Block": "DHOLKA",
      "PHC": "VATAMAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-DHOLKA-468)",
      "PlaceOfDuty": "SARAGVADA"
    },
    {
      "Block": "DHOLKA",
      "PHC": "VATAMAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-469)",
      "PlaceOfDuty": "MOTIBORU"
    },
    {
      "Block": "DHOLKA",
      "PHC": "VATAMAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-470)",
      "PlaceOfDuty": "VATAMAN"
    },
    {
      "Block": "DHOLKA",
      "PHC": "VATAMAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-471)",
      "PlaceOfDuty": "VARNA"
    },
    {
      "Block": "DHOLKA",
      "PHC": "VATAMAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-472)",
      "PlaceOfDuty": "Vejalka"
    },
    {
      "Block": "DHOLKA",
      "PHC": "VATAMAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-473)",
      "PlaceOfDuty": "BHOLAD"
    },
    {
      "Block": "DHOLKA",
      "PHC": "VATAMAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-DHOLKA-474)",
      "PlaceOfDuty": "SARAGWADA"
    },
    {
      "Block": "MANDAL",
      "PHC": "SITAPUR",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-MANDAL-475)",
      "PlaceOfDuty": "PHC SITAPUR"
    },
    {
      "Block": "MANDAL",
      "PHC": "SITAPUR",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-MANDAL-476)",
      "PlaceOfDuty": "AAM ZANZARVA"
    },
    {
      "Block": "MANDAL",
      "PHC": "SITAPUR",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-MANDAL-477)",
      "PlaceOfDuty": "DALOD"
    },
    {
      "Block": "MANDAL",
      "PHC": "SITAPUR",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-MANDAL-478)",
      "PlaceOfDuty": "JALISANA"
    },
    {
      "Block": "MANDAL",
      "PHC": "SITAPUR",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-MANDAL-479)",
      "PlaceOfDuty": "SITAPUR"
    },
    {
      "Block": "MANDAL",
      "PHC": "SITAPUR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-MANDAL-480)",
      "PlaceOfDuty": "JALISHAN"
    },
    {
      "Block": "MANDAL",
      "PHC": "SITAPUR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-MANDAL-481)",
      "PlaceOfDuty": "SITAPUR"
    },
    {
      "Block": "MANDAL",
      "PHC": "SITAPUR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-MANDAL-482)",
      "PlaceOfDuty": "SC"
    },
    {
      "Block": "MANDAL",
      "PHC": "SITAPUR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-MANDAL-483)",
      "PlaceOfDuty": "ZANZRVA"
    },
    {
      "Block": "MANDAL",
      "PHC": "SITAPUR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-MANDAL-484)",
      "PlaceOfDuty": "SC"
    },
    {
      "Block": "MANDAL",
      "PHC": "SITAPUR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-MANDAL-485)",
      "PlaceOfDuty": "SC"
    },
    {
      "Block": "MANDAL",
      "PHC": "SITAPUR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-MANDAL-486)",
      "PlaceOfDuty": "JALISANA"
    },
    {
      "Block": "MANDAL",
      "PHC": "SITAPUR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-MANDAL-487)",
      "PlaceOfDuty": "PHC"
    },
    {
      "Block": "MANDAL",
      "PHC": "SITAPUR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-MANDAL-488)",
      "PlaceOfDuty": "ZANZRAVA"
    },
    {
      "Block": "MANDAL",
      "PHC": "TRENT",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-MANDAL-489)",
      "PlaceOfDuty": "PHC TRENT"
    },
    {
      "Block": "MANDAL",
      "PHC": "TRENT",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-MANDAL-490)",
      "PlaceOfDuty": "SC Endla"
    },
    {
      "Block": "MANDAL",
      "PHC": "TRENT",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-MANDAL-491)",
      "PlaceOfDuty": "SOLGAM"
    },
    {
      "Block": "MANDAL",
      "PHC": "TRENT",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-MANDAL-492)",
      "PlaceOfDuty": "SC RIBADI"
    },
    {
      "Block": "MANDAL",
      "PHC": "TRENT",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-MANDAL-493)",
      "PlaceOfDuty": "TRENT"
    },
    {
      "Block": "MANDAL",
      "PHC": "TRENT",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-MANDAL-494)",
      "PlaceOfDuty": "Trent"
    },
    {
      "Block": "MANDAL",
      "PHC": "TRENT",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-MANDAL-495)",
      "PlaceOfDuty": "SOLGAM"
    },
    {
      "Block": "MANDAL",
      "PHC": "TRENT",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-MANDAL-496)",
      "PlaceOfDuty": "SC"
    },
    {
      "Block": "MANDAL",
      "PHC": "TRENT",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-MANDAL-497)",
      "PlaceOfDuty": "TRENT"
    },
    {
      "Block": "MANDAL",
      "PHC": "TRENT",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-MANDAL-498)",
      "PlaceOfDuty": "ANDALA"
    },
    {
      "Block": "MANDAL",
      "PHC": "TRENT",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-MANDAL-499)",
      "PlaceOfDuty": "SC"
    },
    {
      "Block": "MANDAL",
      "PHC": "TRENT",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-MANDAL-500)",
      "PlaceOfDuty": "TRENT"
    },
    {
      "Block": "MANDAL",
      "PHC": "TRENT",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-MANDAL-501)",
      "PlaceOfDuty": "AAM"
    },
    {
      "Block": "MANDAL",
      "PHC": "VITHALAPUR",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-MANDAL-502)",
      "PlaceOfDuty": "VITHALAPUR"
    },
    {
      "Block": "MANDAL",
      "PHC": "VITHALAPUR",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-MANDAL-503)",
      "PlaceOfDuty": "SC"
    },
    {
      "Block": "MANDAL",
      "PHC": "VITHALAPUR",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-MANDAL-504)",
      "PlaceOfDuty": "AAM-VANPARDI"
    },
    {
      "Block": "MANDAL",
      "PHC": "VITHALAPUR",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-MANDAL-505)",
      "PlaceOfDuty": "AAM -Vinzuvada"
    },
    {
      "Block": "MANDAL",
      "PHC": "VITHALAPUR",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-MANDAL-506)",
      "PlaceOfDuty": "PHC"
    },
    {
      "Block": "MANDAL",
      "PHC": "VITHALAPUR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-MANDAL-507)",
      "PlaceOfDuty": "MANDAL -3"
    },
    {
      "Block": "MANDAL",
      "PHC": "VITHALAPUR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-MANDAL-508)",
      "PlaceOfDuty": "Vinzuvada"
    },
    {
      "Block": "MANDAL",
      "PHC": "VITHALAPUR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-MANDAL-509)",
      "PlaceOfDuty": "MANDAL -2"
    },
    {
      "Block": "MANDAL",
      "PHC": "VITHALAPUR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-MANDAL-510)",
      "PlaceOfDuty": "SC"
    },
    {
      "Block": "MANDAL",
      "PHC": "VITHALAPUR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-MANDAL-511)",
      "PlaceOfDuty": "VITTHLAPUR"
    },
    {
      "Block": "MANDAL",
      "PHC": "VITHALAPUR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-MANDAL-512)",
      "PlaceOfDuty": "SC"
    },
    {
      "Block": "MANDAL",
      "PHC": "VITHALAPUR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-MANDAL-513)",
      "PlaceOfDuty": "SC"
    },
    {
      "Block": "MANDAL",
      "PHC": "VITHALAPUR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-MANDAL-514)",
      "PlaceOfDuty": "SC"
    },
    {
      "Block": "MANDAL",
      "PHC": "VITHALAPUR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-MANDAL-515)",
      "PlaceOfDuty": "VINZUVADA"
    },
    {
      "Block": "MANDAL",
      "PHC": "VITHALAPUR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-MANDAL-516)",
      "PlaceOfDuty": "AAM"
    },
    {
      "Block": "MANDAL",
      "PHC": "VITHALAPUR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-MANDAL-517)",
      "PlaceOfDuty": "VITHALAPUR"
    },
    {
      "Block": "SANAND",
      "PHC": "CHEKHLA",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-SANAND-518)",
      "PlaceOfDuty": "Phc chekhla"
    },
    {
      "Block": "SANAND",
      "PHC": "CHEKHLA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-SANAND-519)",
      "PlaceOfDuty": "NIDHRAD"
    },
    {
      "Block": "SANAND",
      "PHC": "CHEKHLA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-SANAND-520)",
      "PlaceOfDuty": "AAM ANDEJ"
    },
    {
      "Block": "SANAND",
      "PHC": "CHEKHLA",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-SANAND-521)",
      "PlaceOfDuty": "Phc chekhla"
    },
    {
      "Block": "SANAND",
      "PHC": "CHEKHLA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-522)",
      "PlaceOfDuty": "MANIPUR"
    },
    {
      "Block": "SANAND",
      "PHC": "CHEKHLA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-523)",
      "PlaceOfDuty": "CHEKHALA"
    },
    {
      "Block": "SANAND",
      "PHC": "CHEKHLA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-524)",
      "PlaceOfDuty": "NIDHRAD"
    },
    {
      "Block": "SANAND",
      "PHC": "CHEKHLA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-525)",
      "PlaceOfDuty": "ANDEJ"
    },
    {
      "Block": "SANAND",
      "PHC": "CHEKHLA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-526)",
      "PlaceOfDuty": "ANDEJ"
    },
    {
      "Block": "SANAND",
      "PHC": "CHEKHLA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-527)",
      "PlaceOfDuty": "CHEKHLA"
    },
    {
      "Block": "SANAND",
      "PHC": "CHEKHLA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-528)",
      "PlaceOfDuty": "NIDHRAD"
    },
    {
      "Block": "SANAND",
      "PHC": "CHEKHLA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-529)",
      "PlaceOfDuty": "MANIPUR"
    },
    {
      "Block": "SANAND",
      "PHC": "MODASAR",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-SANAND-530)",
      "PlaceOfDuty": "Phc modasar"
    },
    {
      "Block": "SANAND",
      "PHC": "MODASAR",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-SANAND-531)",
      "PlaceOfDuty": "FANGADI"
    },
    {
      "Block": "SANAND",
      "PHC": "MODASAR",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-SANAND-532)",
      "PlaceOfDuty": "PALWADA"
    },
    {
      "Block": "SANAND",
      "PHC": "MODASAR",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-SANAND-533)",
      "PlaceOfDuty": "JUWAL"
    },
    {
      "Block": "SANAND",
      "PHC": "MODASAR",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-SANAND-534)",
      "PlaceOfDuty": "Nani devti"
    },
    {
      "Block": "SANAND",
      "PHC": "MODASAR",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-SANAND-535)",
      "PlaceOfDuty": "MODASAR"
    },
    {
      "Block": "SANAND",
      "PHC": "MODASAR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-536)",
      "PlaceOfDuty": "DARAN"
    },
    {
      "Block": "SANAND",
      "PHC": "MODASAR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-537)",
      "PlaceOfDuty": "MODASAR"
    },
    {
      "Block": "SANAND",
      "PHC": "MODASAR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-538)",
      "PlaceOfDuty": "FANGADI"
    },
    {
      "Block": "SANAND",
      "PHC": "MODASAR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-539)",
      "PlaceOfDuty": "PALVADA"
    },
    {
      "Block": "SANAND",
      "PHC": "MODASAR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-540)",
      "PlaceOfDuty": "NANI DEVTI"
    },
    {
      "Block": "SANAND",
      "PHC": "MODASAR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-541)",
      "PlaceOfDuty": "NANIDEVTI"
    },
    {
      "Block": "SANAND",
      "PHC": "MODASAR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-542)",
      "PlaceOfDuty": "PALWADA"
    },
    {
      "Block": "SANAND",
      "PHC": "MODASAR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-543)",
      "PlaceOfDuty": "JUWAL"
    },
    {
      "Block": "SANAND",
      "PHC": "MODASAR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-544)",
      "PlaceOfDuty": "MODASAR"
    },
    {
      "Block": "SANAND",
      "PHC": "MODASAR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-545)",
      "PlaceOfDuty": "DARAN"
    },
    {
      "Block": "SANAND",
      "PHC": "MODASAR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-546)",
      "PlaceOfDuty": "FANGDI"
    },
    {
      "Block": "SANAND",
      "PHC": "SANATHAL",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-SANAND-547)",
      "PlaceOfDuty": "Phc sanathal"
    },
    {
      "Block": "SANAND",
      "PHC": "SANATHAL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-SANAND-548)",
      "PlaceOfDuty": "CHANGODAR"
    },
    {
      "Block": "SANAND",
      "PHC": "SANATHAL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-SANAND-549)",
      "PlaceOfDuty": "AAM DARAN"
    },
    {
      "Block": "SANAND",
      "PHC": "SANATHAL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-SANAND-550)",
      "PlaceOfDuty": "CHACHARVADI VASANA"
    },
    {
      "Block": "SANAND",
      "PHC": "SANATHAL",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-SANAND-551)",
      "PlaceOfDuty": "Phc Sanathal"
    },
    {
      "Block": "SANAND",
      "PHC": "SANATHAL",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-SANAND-552)",
      "PlaceOfDuty": "Phc sanathal"
    },
    {
      "Block": "SANAND",
      "PHC": "SANATHAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-553)",
      "PlaceOfDuty": "MOTIDEVTI"
    },
    {
      "Block": "SANAND",
      "PHC": "SANATHAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-554)",
      "PlaceOfDuty": "MORAIYA"
    },
    {
      "Block": "SANAND",
      "PHC": "SANATHAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-555)",
      "PlaceOfDuty": "SANATHAL"
    },
    {
      "Block": "SANAND",
      "PHC": "SANATHAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-556)",
      "PlaceOfDuty": "NAVAPURA"
    },
    {
      "Block": "SANAND",
      "PHC": "SANATHAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-557)",
      "PlaceOfDuty": "CHANGODAR"
    },
    {
      "Block": "SANAND",
      "PHC": "SANATHAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-558)",
      "PlaceOfDuty": "VASANA"
    },
    {
      "Block": "SANAND",
      "PHC": "SANATHAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-559)",
      "PlaceOfDuty": "CHANGODAR"
    },
    {
      "Block": "SANAND",
      "PHC": "SANATHAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-560)",
      "PlaceOfDuty": "MORAIYA"
    },
    {
      "Block": "SANAND",
      "PHC": "SANATHAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-561)",
      "PlaceOfDuty": "SANATHAL"
    },
    {
      "Block": "SANAND",
      "PHC": "SANATHAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-562)",
      "PlaceOfDuty": "Navapura"
    },
    {
      "Block": "SANAND",
      "PHC": "SANATHAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-563)",
      "PlaceOfDuty": "MOTI DEVTI"
    },
    {
      "Block": "SANAND",
      "PHC": "SHELA",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-SANAND-564)",
      "PlaceOfDuty": "PHC SHELA"
    },
    {
      "Block": "SANAND",
      "PHC": "SHELA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-565)",
      "PlaceOfDuty": "SC kolat"
    },
    {
      "Block": "SANAND",
      "PHC": "SHELA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-566)",
      "PlaceOfDuty": "KUJAD"
    },
    {
      "Block": "SANAND",
      "PHC": "SHELA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-567)",
      "PlaceOfDuty": "Shela"
    },
    {
      "Block": "SANAND",
      "PHC": "SHELA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-568)",
      "PlaceOfDuty": "KOLAT"
    },
    {
      "Block": "SANAND",
      "PHC": "SHELA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-569)",
      "PlaceOfDuty": "TELAV"
    },
    {
      "Block": "SANAND",
      "PHC": "UPARDAL",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-SANAND-570)",
      "PlaceOfDuty": "UPARDAL"
    },
    {
      "Block": "SANAND",
      "PHC": "UPARDAL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-SANAND-571)",
      "PlaceOfDuty": "AAM VICHHIYA"
    },
    {
      "Block": "SANAND",
      "PHC": "UPARDAL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-SANAND-572)",
      "PlaceOfDuty": "ZAMP"
    },
    {
      "Block": "SANAND",
      "PHC": "UPARDAL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-SANAND-573)",
      "PlaceOfDuty": "MANKOL"
    },
    {
      "Block": "SANAND",
      "PHC": "UPARDAL",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-SANAND-574)",
      "PlaceOfDuty": "PHC"
    },
    {
      "Block": "SANAND",
      "PHC": "UPARDAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-575)",
      "PlaceOfDuty": "VINCHIYA"
    },
    {
      "Block": "SANAND",
      "PHC": "UPARDAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-576)",
      "PlaceOfDuty": "MANKOL"
    },
    {
      "Block": "SANAND",
      "PHC": "UPARDAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-577)",
      "PlaceOfDuty": "RETHAL"
    },
    {
      "Block": "SANAND",
      "PHC": "UPARDAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-578)",
      "PlaceOfDuty": "ZAMP"
    },
    {
      "Block": "SANAND",
      "PHC": "UPARDAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-579)",
      "PlaceOfDuty": "ZAMP"
    },
    {
      "Block": "SANAND",
      "PHC": "UPARDAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-580)",
      "PlaceOfDuty": "ZANZARKA"
    },
    {
      "Block": "SANAND",
      "PHC": "UPARDAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-581)",
      "PlaceOfDuty": "MANKOL"
    },
    {
      "Block": "SANAND",
      "PHC": "UPARDAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-582)",
      "PlaceOfDuty": "RETHAL"
    },
    {
      "Block": "SANAND",
      "PHC": "URBAN",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-SANAND-583)",
      "PlaceOfDuty": "UPHC SANAND"
    },
    {
      "Block": "SANAND",
      "PHC": "URBAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-584)",
      "PlaceOfDuty": "UHC SANNAD"
    },
    {
      "Block": "SANAND",
      "PHC": "URBAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-585)",
      "PlaceOfDuty": "Uphc SC-sanand 10"
    },
    {
      "Block": "SANAND",
      "PHC": "URBAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-586)",
      "PlaceOfDuty": "UPHC SANAND"
    },
    {
      "Block": "SANAND",
      "PHC": "URBAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-587)",
      "PlaceOfDuty": "SANAND-9"
    },
    {
      "Block": "SANAND",
      "PHC": "URBAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-588)",
      "PlaceOfDuty": "Uhc sanand 3"
    },
    {
      "Block": "SANAND",
      "PHC": "URBAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-589)",
      "PlaceOfDuty": "SANAND 7"
    },
    {
      "Block": "SANAND",
      "PHC": "URBAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-590)",
      "PlaceOfDuty": "UPHC SANAND 5"
    },
    {
      "Block": "SANAND",
      "PHC": "URBAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-591)",
      "PlaceOfDuty": "Sanand 1"
    },
    {
      "Block": "SANAND",
      "PHC": "VIROCHANNAGAR",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-SANAND-592)",
      "PlaceOfDuty": "PHC Virochannagar"
    },
    {
      "Block": "SANAND",
      "PHC": "VIROCHANNAGAR",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-SANAND-593)",
      "PlaceOfDuty": "CHHARODI"
    },
    {
      "Block": "SANAND",
      "PHC": "VIROCHANNAGAR",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-SANAND-594)",
      "PlaceOfDuty": "AAM IYAVA"
    },
    {
      "Block": "SANAND",
      "PHC": "VIROCHANNAGAR",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-SANAND-595)",
      "PlaceOfDuty": "KHORAJ"
    },
    {
      "Block": "SANAND",
      "PHC": "VIROCHANNAGAR",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-SANAND-596)",
      "PlaceOfDuty": "VIROCHANNAGAR"
    },
    {
      "Block": "SANAND",
      "PHC": "VIROCHANNAGAR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-597)",
      "PlaceOfDuty": "Virochannagar"
    },
    {
      "Block": "SANAND",
      "PHC": "VIROCHANNAGAR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-598)",
      "PlaceOfDuty": "IYAVA"
    },
    {
      "Block": "SANAND",
      "PHC": "VIROCHANNAGAR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-599)",
      "PlaceOfDuty": "KHORAJ"
    },
    {
      "Block": "SANAND",
      "PHC": "VIROCHANNAGAR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-600)",
      "PlaceOfDuty": "Chharodi"
    },
    {
      "Block": "SANAND",
      "PHC": "VIROCHANNAGAR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-601)",
      "PlaceOfDuty": "IYAVA"
    },
    {
      "Block": "SANAND",
      "PHC": "VIROCHANNAGAR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-602)",
      "PlaceOfDuty": "KHORAJ"
    },
    {
      "Block": "SANAND",
      "PHC": "VIROCHANNAGAR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-603)",
      "PlaceOfDuty": "Virochannagar"
    },
    {
      "Block": "SANAND",
      "PHC": "VIROCHANNAGAR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-604)",
      "PlaceOfDuty": "CHHARODI"
    },
    {
      "Block": "SANAND",
      "PHC": "ZOLAPUR",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-SANAND-605)",
      "PlaceOfDuty": "PHC zolapur"
    },
    {
      "Block": "SANAND",
      "PHC": "ZOLAPUR",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-SANAND-606)",
      "PlaceOfDuty": "BOL"
    },
    {
      "Block": "SANAND",
      "PHC": "ZOLAPUR",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-SANAND-607)",
      "PlaceOfDuty": "AAM MAKHIYAV"
    },
    {
      "Block": "SANAND",
      "PHC": "ZOLAPUR",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-SANAND-608)",
      "PlaceOfDuty": "SHIYAWADA"
    },
    {
      "Block": "SANAND",
      "PHC": "ZOLAPUR",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-SANAND-609)",
      "PlaceOfDuty": "HIRAPUR"
    },
    {
      "Block": "SANAND",
      "PHC": "ZOLAPUR",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-SANAND-610)",
      "PlaceOfDuty": "ZOLAPUR"
    },
    {
      "Block": "SANAND",
      "PHC": "ZOLAPUR",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-SANAND-611)",
      "PlaceOfDuty": "ZOLAPUR"
    },
    {
      "Block": "SANAND",
      "PHC": "ZOLAPUR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-612)",
      "PlaceOfDuty": "HIRAPUR"
    },
    {
      "Block": "SANAND",
      "PHC": "ZOLAPUR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-613)",
      "PlaceOfDuty": "MAKHIYAV"
    },
    {
      "Block": "SANAND",
      "PHC": "ZOLAPUR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-614)",
      "PlaceOfDuty": "Shiyavada"
    },
    {
      "Block": "SANAND",
      "PHC": "ZOLAPUR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-615)",
      "PlaceOfDuty": "Zolapur"
    },
    {
      "Block": "SANAND",
      "PHC": "ZOLAPUR",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-SANAND-616)",
      "PlaceOfDuty": "BOL"
    },
    {
      "Block": "SANAND",
      "PHC": "ZOLAPUR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-617)",
      "PlaceOfDuty": "ZOLAPUR"
    },
    {
      "Block": "SANAND",
      "PHC": "ZOLAPUR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-618)",
      "PlaceOfDuty": "BOL"
    },
    {
      "Block": "SANAND",
      "PHC": "ZOLAPUR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-619)",
      "PlaceOfDuty": "AAM HIRAPUR"
    },
    {
      "Block": "SANAND",
      "PHC": "ZOLAPUR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-620)",
      "PlaceOfDuty": "MAKHIYAV"
    },
    {
      "Block": "SANAND",
      "PHC": "ZOLAPUR",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-SANAND-621)",
      "PlaceOfDuty": "SHIYAWADA"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "GORAIYA",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-VIRAMGAM-622)",
      "PlaceOfDuty": ", Viramgam"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "GORAIYA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-VIRAMGAM-623)",
      "PlaceOfDuty": "Vani"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "GORAIYA",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-VIRAMGAM-624)",
      "PlaceOfDuty": "Goraiya"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "GORAIYA",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-VIRAMGAM-625)",
      "PlaceOfDuty": "goraiya"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "GORAIYA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-626)",
      "PlaceOfDuty": "VADGAS"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "GORAIYA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-627)",
      "PlaceOfDuty": "Dumana"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "GORAIYA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-628)",
      "PlaceOfDuty": "THORI MUBARAK"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "GORAIYA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-629)",
      "PlaceOfDuty": "Phc. GORAIYA"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "GORAIYA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-630)",
      "PlaceOfDuty": "HASALPUR"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "GORAIYA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-631)",
      "PlaceOfDuty": "VANI"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "GORAIYA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-632)",
      "PlaceOfDuty": "Dumana"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "GORAIYA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-633)",
      "PlaceOfDuty": "VADGAS"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "GORAIYA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-634)",
      "PlaceOfDuty": "Goraiya"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "GORAIYA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-635)",
      "PlaceOfDuty": "THORIMUBARAK"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "GORAIYA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-636)",
      "PlaceOfDuty": "VANI"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "GORAIYA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-637)",
      "PlaceOfDuty": "SC-Hansalpur PHC -GORAIYA"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KARAKTHAL",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-VIRAMGAM-638)",
      "PlaceOfDuty": "PHC KARAKTHAL"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KARAKTHAL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-VIRAMGAM-639)",
      "PlaceOfDuty": "Jakhwada"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KARAKTHAL",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-VIRAMGAM-640)",
      "PlaceOfDuty": "Aam ogan"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KARAKTHAL",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-VIRAMGAM-641)",
      "PlaceOfDuty": "phc karakthal (deputation at phc kumarkhan )"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KARAKTHAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-642)",
      "PlaceOfDuty": "Vekariya"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KARAKTHAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-643)",
      "PlaceOfDuty": "KARAKTHAL"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KARAKTHAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-644)",
      "PlaceOfDuty": "SOKALI"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KARAKTHAL",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-645)",
      "PlaceOfDuty": "SC OGAN"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KARAKTHAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-646)",
      "PlaceOfDuty": "KARAKTHAL"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KARAKTHAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-647)",
      "PlaceOfDuty": "Ogan"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KARAKTHAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-648)",
      "PlaceOfDuty": "JAKHWADA"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KARAKTHAL",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-649)",
      "PlaceOfDuty": "AAM SOKALI"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KUMARKHAN",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-VIRAMGAM-650)",
      "PlaceOfDuty": "PHC KUMARKHAN"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KUMARKHAN",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-VIRAMGAM-651)",
      "PlaceOfDuty": "Sc SHAHPUR"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KUMARKHAN",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-VIRAMGAM-652)",
      "PlaceOfDuty": "Kamijla"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KUMARKHAN",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-VIRAMGAM-653)",
      "PlaceOfDuty": "Kumarkhan"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KUMARKHAN",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-VIRAMGAM-654)",
      "PlaceOfDuty": "Kumarkhan"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KUMARKHAN",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-VIRAMGAM-655)",
      "PlaceOfDuty": "kumarkhan"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KUMARKHAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-656)",
      "PlaceOfDuty": "Kamijala"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KUMARKHAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-657)",
      "PlaceOfDuty": "KUMARKHAN.VEKRIYA MPHW"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KUMARKHAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-658)",
      "PlaceOfDuty": "KUMARKHAN"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KUMARKHAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-659)",
      "PlaceOfDuty": "shahpur"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "KUMARKHAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-660)",
      "PlaceOfDuty": "KAMIJLA"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "MANIPURA",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-VIRAMGAM-661)",
      "PlaceOfDuty": "KARAKTHAL"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "MANIPURA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-VIRAMGAM-662)",
      "PlaceOfDuty": "AAM Bhojva"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "MANIPURA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-VIRAMGAM-663)",
      "PlaceOfDuty": "AAM - UKHLOD"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "MANIPURA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-VIRAMGAM-664)",
      "PlaceOfDuty": "DHAKDI"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "MANIPURA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-VIRAMGAM-665)",
      "PlaceOfDuty": "Hirapura"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "MANIPURA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-VIRAMGAM-666)",
      "PlaceOfDuty": "Nadiyana"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "MANIPURA",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-VIRAMGAM-667)",
      "PlaceOfDuty": "MANIPURA"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "MANIPURA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-668)",
      "PlaceOfDuty": "BHOJVA"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "MANIPURA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-669)",
      "PlaceOfDuty": "HIRAPURA"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "MANIPURA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-670)",
      "PlaceOfDuty": "NADIYANA"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "MANIPURA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-671)",
      "PlaceOfDuty": "UKHLOD"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "MANIPURA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-672)",
      "PlaceOfDuty": "HIRAPURA"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "MANIPURA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-673)",
      "PlaceOfDuty": "Dhakdi"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "MANIPURA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-674)",
      "PlaceOfDuty": "UKHLOD"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "MANIPURA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-675)",
      "PlaceOfDuty": "manipura"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "MANIPURA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-676)",
      "PlaceOfDuty": "NADIYANA"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "MANIPURA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-677)",
      "PlaceOfDuty": "Bhojva"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "URBAN",
      "Cadre": "MO",
      "Designation": "MO",
      "Name": "Participant (MO-VIRAMGAM-678)",
      "PlaceOfDuty": "UPHC VIRAMGAM"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "URBAN",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-VIRAMGAM-679)",
      "PlaceOfDuty": "BHRAMFALI AAM"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "URBAN",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-VIRAMGAM-680)",
      "PlaceOfDuty": "URBAN HELTH CENTER VIRAMGAM"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "URBAN",
      "Cadre": "SN",
      "Designation": "SN",
      "Name": "Participant (SN-VIRAMGAM-681)",
      "PlaceOfDuty": "UPHC VIRAMGAM"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "URBAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-682)",
      "PlaceOfDuty": "UPHC VIRAMGAM"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "URBAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-683)",
      "PlaceOfDuty": "UPHC VIRAMGAM"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "URBAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-684)",
      "PlaceOfDuty": "VIRAMGAM URBAN - 2"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "URBAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-685)",
      "PlaceOfDuty": "UHC VIRAMGAM"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "URBAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-686)",
      "PlaceOfDuty": "VIRAMGAM URBAN -1"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "URBAN",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-687)",
      "PlaceOfDuty": "UHC VIRMGAM"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "URBAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-688)",
      "PlaceOfDuty": "URBAN 4"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "URBAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-689)",
      "PlaceOfDuty": "UHC VIRAMGAM  6"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "URBAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-690)",
      "PlaceOfDuty": "URBAN 1"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "URBAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-691)",
      "PlaceOfDuty": "URBAN - 3"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "URBAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-692)",
      "PlaceOfDuty": "Urban 5"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "URBAN",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-693)",
      "PlaceOfDuty": "URBAN HEALTH CENTRE VIRAMGAM  2"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "VANSVA",
      "Cadre": "CHO",
      "Designation": "CHO",
      "Name": "Participant (CHO-VIRAMGAM-694)",
      "PlaceOfDuty": "Sc Asalgam"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "VANSVA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-695)",
      "PlaceOfDuty": "VANSVA"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "VANSVA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-696)",
      "PlaceOfDuty": "GHODA"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "VANSVA",
      "Cadre": "FHW",
      "Designation": "FHW",
      "Name": "Participant (FHW-VIRAMGAM-697)",
      "PlaceOfDuty": "Asalgam"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "VANSVA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-698)",
      "PlaceOfDuty": "GHODA"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "VANSVA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-699)",
      "PlaceOfDuty": "ASALGAM"
    },
    {
      "Block": "VIRAMGAM",
      "PHC": "VANSVA",
      "Cadre": "MPHW",
      "Designation": "MPHW",
      "Name": "Participant (MPHW-VIRAMGAM-700)",
      "PlaceOfDuty": "Vansva"
    }
  ],
  "batches": [
    {
      "rows": [
        {
          "Block": "BAVLA",
          "PHC": "NANODARA",
          "Total": 1,
          "MO": 0,
          "CHO": 0,
          "SN": 0,
          "FHW": 1,
          "MPHW": 0
        },
        {
          "Block": "BAVLA",
          "PHC": "SHIYAL",
          "Total": 1,
          "MO": 0,
          "CHO": 0,
          "SN": 1,
          "FHW": 0,
          "MPHW": 0
        },
        {
          "Block": "DASCROI",
          "PHC": "JETALPUR",
          "Total": 2,
          "MO": 0,
          "CHO": 0,
          "SN": 2,
          "FHW": 0,
          "MPHW": 0
        },
        {
          "Block": "DASCROI",
          "PHC": "NANDEJ",
          "Total": 3,
          "MO": 0,
          "CHO": 1,
          "SN": 2,
          "FHW": 0,
          "MPHW": 0
        },
        {
          "Block": "DASCROI",
          "PHC": "VAHELAL",
          "Total": 2,
          "MO": 0,
          "CHO": 0,
          "SN": 2,
          "FHW": 0,
          "MPHW": 0
        },
        {
          "Block": "DASCROI",
          "PHC": "KHODIYAR",
          "Total": 1,
          "MO": 0,
          "CHO": 0,
          "SN": 1,
          "FHW": 0,
          "MPHW": 0
        },
        {
          "Block": "DETROJ",
          "PHC": "RAMPURA",
          "Total": 1,
          "MO": 0,
          "CHO": 1,
          "SN": 0,
          "FHW": 0,
          "MPHW": 0
        },
        {
          "Block": "DHOLERA",
          "PHC": "DHOLERA",
          "Total": 2,
          "MO": 1,
          "CHO": 0,
          "SN": 1,
          "FHW": 0,
          "MPHW": 0
        },
        {
          "Block": "DHOLKA",
          "PHC": "CHALODA",
          "Total": 1,
          "MO": 0,
          "CHO": 0,
          "SN": 0,
          "FHW": 1,
          "MPHW": 0
        },
        {
          "Block": "DHOLKA",
          "PHC": "URBAN",
          "Total": 2,
          "MO": 0,
          "CHO": 0,
          "SN": 1,
          "FHW": 1,
          "MPHW": 0
        },
        {
          "Block": "DHOLKA",
          "PHC": "GANOL",
          "Total": 1,
          "MO": 0,
          "CHO": 0,
          "SN": 0,
          "FHW": 1,
          "MPHW": 0
        },
        {
          "Block": "DHOLKA",
          "PHC": "TRANSAD",
          "Total": 3,
          "MO": 0,
          "CHO": 0,
          "SN": 2,
          "FHW": 1,
          "MPHW": 0
        },
        {
          "Block": "DHOLKA",
          "PHC": "VATAMAN",
          "Total": 1,
          "MO": 0,
          "CHO": 0,
          "SN": 0,
          "FHW": 1,
          "MPHW": 0
        },
        {
          "Block": "MANDAL",
          "PHC": "VITHALAPUR",
          "Total": 2,
          "MO": 0,
          "CHO": 0,
          "SN": 0,
          "FHW": 1,
          "MPHW": 1
        },
        {
          "Block": "SANAND",
          "PHC": "MODASAR",
          "Total": 3,
          "MO": 0,
          "CHO": 1,
          "SN": 1,
          "FHW": 1,
          "MPHW": 0
        },
        {
          "Block": "SANAND",
          "PHC": "URBAN",
          "Total": 2,
          "MO": 0,
          "CHO": 0,
          "SN": 0,
          "FHW": 2,
          "MPHW": 0
        },
        {
          "Block": "SANAND",
          "PHC": "SANATHAL",
          "Total": 2,
          "MO": 0,
          "CHO": 0,
          "SN": 1,
          "FHW": 0,
          "MPHW": 1
        },
        {
          "Block": "SANAND",
          "PHC": "SHELA",
          "Total": 8,
          "MO": 1,
          "CHO": 2,
          "SN": 0,
          "FHW": 3,
          "MPHW": 2
        },
        {
          "Block": "VIRAMGAM",
          "PHC": "GORAIYA",
          "Total": 1,
          "MO": 0,
          "CHO": 0,
          "SN": 0,
          "FHW": 1,
          "MPHW": 0
        },
        {
          "Block": "VIRAMGAM",
          "PHC": "KARAKTHAL",
          "Total": 1,
          "MO": 0,
          "CHO": 0,
          "SN": 0,
          "FHW": 1,
          "MPHW": 0
        }
      ],
      "total": 40,
      "blocks": [
        "BAVLA",
        "DASCROI",
        "DETROJ",
        "DHOLERA",
        "DHOLKA",
        "MANDAL",
        "SANAND",
        "VIRAMGAM"
      ]
    },
    {
      "rows": [
        {
          "Block": "VIRAMGAM",
          "PHC": "KUMARKHAN",
          "Total": 3,
          "MO": 0,
          "CHO": 0,
          "SN": 0,
          "FHW": 3,
          "MPHW": 0
        },
        {
          "Block": "VIRAMGAM",
          "PHC": "MANIPURA",
          "Total": 3,
          "MO": 0,
          "CHO": 0,
          "SN": 0,
          "FHW": 3,
          "MPHW": 0
        }
      ],
      "total": 6,
      "blocks": [
        "VIRAMGAM"
      ]
    }
  ]
};
