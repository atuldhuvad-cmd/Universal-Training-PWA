/**
 * Universal Health Training Intelligence Platform
 * Designation & Facility Normalizer with Intelligent Synonym Mapping
 * Health Department · Ahmedabad District, Gujarat
 */

const DesignationMapper = (function () {
  'use strict';

  // Master dictionary for standard designation tokens
  const DESIGNATION_SYNONYMS = {
    MO: [
      'MO', 'M.O.', 'M.O', 'MEDICAL OFFICER', 'MO PHC', 'MO UPHC',
      'MEDICAL OFFICER (CLASS 2)', 'MEDICAL OFFICER CLASS 2', 'CLASS 2 MO',
      'MO I/C', 'INCHARGE MO', 'ALLOPATHIC MO', 'MBBS MO'
    ],
    'AYUSH MO': [
      'AYUSH MO', 'AYUSH M.O.', 'AYUSH M.O', 'AYUSH', 'AYURVEDIC MO',
      'AYURVEDIC MEDICAL OFFICER', 'HOMEOPATHIC MO', 'HOMEOPATHIC MEDICAL OFFICER',
      'BAMS MO', 'BHMS MO', 'AYUSH MEDICAL OFFICER', 'MO AYUSH', 'M.O. AYUSH',
      'AYUSH DOCTOR', 'AYURVEDIC DOCTOR', 'RBSK AYUSH MO'
    ],
    CHO: [
      'CHO', 'C.H.O', 'C.H.O.', 'COMMUNITY HEALTH OFFICER', 'COMMUNITY HEALTHOFFICER',
      'MLHP', 'MID LEVEL HEALTH PROVIDER', 'CHO AAM', 'CHO SC', 'COMMUNITY HEALTH'
    ],
    SN: [
      'SN', 'S.N.', 'S.N', 'STAFF NURSE', 'STAFFNURSE', 'NURSE', 'SISTER',
      'STAFF NURSE (NHM)', 'STAFF NURSE NHM', 'GNM', 'BSC NURSING'
    ],
    FHW: [
      'FHW', 'F.H.W.', 'F.H.W', 'ANM', 'A.N.M.', 'A.N.M', 'FEMALE HEALTH WORKER',
      'FEMALE HEALTHWORKER', 'RFHW', 'RURAL FHW', 'REGULAR FHW', 'MPHW(F)', 'MPHW F'
    ],
    MPHW: [
      'MPHW', 'M.P.H.W.', 'M.P.H.W', 'MULTI PURPOSE HEALTH WORKER', 'MULTIPURPOSE HEALTH WORKER',
      'MALE HEALTH WORKER', 'MHW', 'MPHW(M)', 'MPHW M', 'SI', 'SANITARY INSPECTOR'
    ],
    ASHA: [
      'ASHA', 'A.S.H.A.', 'A.S.H.A', 'ASHA WORKER', 'ASHA FACILITATOR', 'ASHA SAHYOGINI',
      'USHA', 'URBAN ASHA', 'ASHA VOLUNTEER'
    ],
    LT: [
      'LT', 'L.T.', 'L.T', 'LAB TECHNICIAN', 'LAB. TECH', 'LAB.TECH', 'LAB TECH',
      'LABORATORY TECHNICIAN', 'LAB ASSISTANT'
    ],
    PHARMACIST: [
      'PHARMACIST', 'PHARM', 'PHARM.', 'COMPOUNDER', 'PHARMACY OFFICER'
    ],
    DEO: [
      'DEO', 'D.E.O.', 'DATA ENTRY OPERATOR', 'COMPUTER OPERATOR', 'ACCOUNTANT'
    ]
  };

  // Facility Type keywords & patterns
  const FACILITY_TYPE_PATTERNS = [
    { type: 'DH', regex: /\b(DH|D\.H\.|DISTRICT\s*HOSPITAL|CIVIL\s*HOSPITAL)\b/i },
    { type: 'SDH', regex: /\b(SDH|S\.D\.H\.|SUB\s*DISTRICT\s*HOSPITAL|SUB-DISTRICT\s*HOSPITAL)\b/i },
    { type: 'CHC', regex: /\b(CHC|C\.H\.C\.|COMMUNITY\s*HEALTH\s*CENT(?:RE|ER)|SAMUHIK\s*AROGYA\s*KENDRA)\b/i },
    { type: 'UPHC', regex: /\b(UPHC|U\.P\.H\.C\.|UHC|U\.H\.C\.|URBAN\s*PRIMARY\s*HEALTH\s*CENT(?:RE|ER)|URBAN\s*HEALTH\s*CENT(?:RE|ER)|UHWC)\b/i },
    { type: 'PHC', regex: /\b(PHC|P\.H\.C\.|PRIMARY\s*HEALTH\s*CENT(?:RE|ER)|PRATHMIK\s*AROGYA\s*KENDRA)\b/i },
    { type: 'SC_AAM', regex: /\b(SC|S\.C\.|SUB\s*CENT(?:RE|ER)|SABSENTAR|SAB\s*SENTAR|AAM|AYUSHMAN\s*AROGYA\s*MANDIR|AROGYA\s*MANDIR)\b/i },
    { type: 'SCHOOL', regex: /\b(SCHOOL|SHALA|PRATHMIK\s*SHALA|KANYA\s*SHALA|VIDHYALAYA|HIGH\s*SCHOOL|GOVT\s*SCHOOL)\b/i },
    { type: 'AWC', regex: /\b(AWC|A\.W\.C\.|ANGANWADI|ANGANWADI\s*CENT(?:RE|ER))\b/i },
    { type: 'ADMIN', regex: /\b(THO|DHO|CDPO|OFFICE|HEADQUARTER|HQ)\b/i }
  ];

  // Canonical Taluka Name reconciliation map (Ahmedabad District)
  const TALUKA_MAP = {
    'BAVALA': 'BAVLA',
    'BAWLA': 'BAVLA',
    'DASKROI': 'DASCROI',
    'DASHKROI': 'DASCROI',
    'DASCROI': 'DASCROI',
    'DETROJ': 'DETROJ',
    'DETROJ-RAMPURA': 'DETROJ',
    'DHANDHUKA': 'DHANDHUKA',
    'DHOLERA': 'DHOLERA',
    'DHOLKA': 'DHOLKA',
    'MANDAL': 'MANDAL',
    'SANAND': 'SANAND',
    'VIRAMGAM': 'VIRAMGAM'
  };

  // Known PHC Name phonetic/spelling fixes in Ahmedabad District
  const PHC_NAME_FIXES = {
    'AAKRU': 'AKARU',
    'AKRU': 'AKARU',
    'PHC AAKRU': 'AKARU',
    'NANODRA': 'NANODARA',
    'NANODRA PHC': 'NANODARA',
    'DEHGAMADA': 'DEHGAMDA',
    'AMBALYARA': 'AMBALIYARA',
    'KAVITHA 1': 'KAVITHA',
    'SINGARVA': 'SDH SINGARVA',
    'SINGARWA': 'SDH SINGARVA',
    'SDH SINGARVA': 'SDH SINGARVA',
    'SDH VIRAMGAM': 'SDH VIRAMGAM',
    'SDH DHANDHUKA': 'SDH DHANDHUKA',
    'SDH RUKSHMANIBEN': 'SDH RUKSHMANIBEN HOSPITAL',
    'RUKSHMANIBEN': 'SDH RUKSHMANIBEN HOSPITAL',
    'RUKSHMANIBEN HOSPITAL': 'SDH RUKSHMANIBEN HOSPITAL',
    'CHC BAGODARA': 'CHC BAGODARA',
    'BAGODARA': 'CHC BAGODARA',
    'CHC BAVLA': 'CHC BAVLA',
    'CHC SANAND': 'CHC SANAND',
    'CHC DHOLKA': 'CHC DHOLKA',
    'CHC DETROJ': 'CHC DETROJ',
    'CHC MANDAL': 'CHC MANDAL',
    'CHC NANDEJ': 'CHC NANDEJ',
    'CHC DHOLERA': 'CHC DHOLERA',
    'PHC KASINDRA/DASCROI': 'KASINDRA',
    'KASINDRA PHC': 'KASINDRA',
    'RUDATAL DETROJ': 'RUDATAL',
    'RUDATAL (NADISHALA)': 'RUDATAL',
    'ZOLAPUR PHC': 'ZOLAPUR',
    'PHC ZOLAPUR': 'ZOLAPUR',
    'BAREJA 1': 'JETALPUR',
    'BAREJA 2': 'JETALPUR',
    'BAREJA 3': 'JETALPUR',
    'VASAI': 'ASLALI',
    'MIROLI': 'ASLALI',
    'PALDIKANKAJ': 'ASLALI'
  };

  /**
   * Cleans and strips common prefixes, brackets, trailing dots, etc.
   */
  function cleanString(str) {
    if (!str) return '';
    return String(str)
      .trim()
      .toUpperCase()
      .replace(/[\r\n\t]+/g, ' ')
      .replace(/\s+/g, ' ');
  }

  /**
   * Normalizes raw designation entered by participant
   * @param {string} raw - Participant's entered designation
   * @param {Array<string>} activeCadres - Optional currently active cadres in training
   * @returns {{ cadre: string, raw: string, confidence: number }}
   */
  function normalizeDesignation(raw, activeCadres = null) {
    const rawClean = cleanString(raw);
    if (!rawClean) return { cadre: 'OTHER', raw: '', confidence: 0 };

    // Check exact matches in dictionary
    for (const [cadre, synonyms] of Object.entries(DESIGNATION_SYNONYMS)) {
      for (const syn of synonyms) {
        if (rawClean === syn) {
          return { cadre, raw: raw.trim(), confidence: 1.0 };
        }
      }
    }

    // Check if starts with or contains known abbreviation
    const stripped = rawClean.replace(/[.\-_/(),]/g, ' ').replace(/\s+/g, ' ').trim();
    const tokens = stripped.split(' ');

    for (const [cadre, synonyms] of Object.entries(DESIGNATION_SYNONYMS)) {
      for (const syn of synonyms) {
        if (tokens.includes(syn) || stripped === syn) {
          return { cadre, raw: raw.trim(), confidence: 0.9 };
        }
      }
    }

    // Direct token check if activeCadres is specified
    if (activeCadres && Array.isArray(activeCadres)) {
      for (const c of activeCadres) {
        const cUpper = c.toUpperCase();
        if (tokens.includes(cUpper) || stripped.includes(cUpper)) {
          return { cadre: cUpper, raw: raw.trim(), confidence: 0.85 };
        }
      }
    }

    // Check for common prefix patterns
    if (/AYUSH|AYURVED|HOMEOPATH|BAMS|BHMS/i.test(rawClean)) {
      return { cadre: 'AYUSH MO', raw: raw.trim(), confidence: 0.95 };
    }
    if (/^DR\b/i.test(rawClean) || /MEDIC/i.test(rawClean)) {
      return { cadre: 'MO', raw: raw.trim(), confidence: 0.8 };
    }
    if (/COMMUNITY/i.test(rawClean)) {
      return { cadre: 'CHO', raw: raw.trim(), confidence: 0.8 };
    }
    if (/NURS/i.test(rawClean)) {
      return { cadre: 'SN', raw: raw.trim(), confidence: 0.8 };
    }
    if (/FEMALE/i.test(rawClean) || /ANM/i.test(rawClean) || /FHW/i.test(rawClean)) {
      return { cadre: 'FHW', raw: raw.trim(), confidence: 0.8 };
    }
    if (/MALE/i.test(rawClean) || /MULTIPURPOSE/i.test(rawClean) || /MPHW/i.test(rawClean)) {
      return { cadre: 'MPHW', raw: raw.trim(), confidence: 0.8 };
    }
    if (/ASHA/i.test(rawClean)) {
      return { cadre: 'ASHA', raw: raw.trim(), confidence: 0.85 };
    }
    if (/LAB/i.test(rawClean)) {
      return { cadre: 'LT', raw: raw.trim(), confidence: 0.85 };
    }
    if (/PHARM/i.test(rawClean)) {
      return { cadre: 'PHARMACIST', raw: raw.trim(), confidence: 0.85 };
    }

    return { cadre: rawClean, raw: raw.trim(), confidence: 0.5 };
  }

  /**
   * Classifies facility type from name or place of duty
   * @param {string} text
   * @returns {string} DH | SDH | CHC | UPHC | PHC | SC_AAM | SCHOOL | AWC | OTHER
   */
  function detectFacilityType(text) {
    if (!text) return 'PHC';
    const clean = cleanString(text);
    for (const pat of FACILITY_TYPE_PATTERNS) {
      if (pat.regex.test(clean)) {
        return pat.type;
      }
    }
    return 'PHC';
  }

  /**
   * Cleans a facility name by removing facility prefixes/suffixes
   * e.g. "Primary Health Centre Gangad" -> "GANGAD"
   * "PHC KOTH" -> "KOTH"
   * "UPHC VIRAMGAM" -> "URBAN" or "VIRAMGAM URBAN"
   */
  function extractCleanFacilityName(rawFacility) {
    if (!rawFacility) return '';
    let s = cleanString(rawFacility);

    // Specific known mappings
    if (PHC_NAME_FIXES[s]) {
      return PHC_NAME_FIXES[s];
    }

    // Strip prefixes
    s = s.replace(/^(PRIMARY\s*HEALTH\s*CENT(?:RE|ER)|PRATHMIK\s*AROGYA\s*KENDRA|P\.H\.C\.?|PHC)\s+/i, '');
    s = s.replace(/^(COMMUNITY\s*HEALTH\s*CENT(?:RE|ER)|SAMUHIK\s*AROGYA\s*KENDRA|C\.H\.C\.?|CHC)\s+/i, '');
    s = s.replace(/^(URBAN\s*PRIMARY\s*HEALTH\s*CENT(?:RE|ER)|URBAN\s*HEALTH\s*CENT(?:RE|ER)|U\.P\.H\.C\.?|UPHC|U\.H\.C\.?|UHC)\s+/i, '');
    s = s.replace(/^(AYUSHMAN\s*AROGYA\s*MANDIR|AAM|SUB\s*CENT(?:RE|ER)|SABSENTAR|S\.C\.?|SC)\s+/i, '');

    // Strip suffixes
    s = s.replace(/\s+(PRIMARY\s*HEALTH\s*CENT(?:RE|ER)|PHC|P\.H\.C\.?)$/i, '');
    s = s.replace(/\s+(COMMUNITY\s*HEALTH\s*CENT(?:RE|ER)|CHC|C\.H\.C\.?)$/i, '');
    s = s.replace(/\s+(URBAN|UPHC|UHC)$/i, '');

    s = s.trim();
    if (PHC_NAME_FIXES[s]) {
      return PHC_NAME_FIXES[s];
    }
    return s;
  }

  /**
   * Normalizes Taluka / Block Name
   */
  function normalizeTaluka(rawTaluka) {
    if (!rawTaluka) return '';
    const clean = cleanString(rawTaluka);
    return TALUKA_MAP[clean] || clean;
  }

  /**
   * Similarity metric between two strings (Dice's Coefficient on bigrams)
   */
  function stringSimilarity(str1, str2) {
    const s1 = cleanString(str1);
    const s2 = cleanString(str2);
    if (s1 === s2) return 1.0;
    if (s1.length < 2 || s2.length < 2) return 0.0;

    const getBigrams = (str) => {
      const bigrams = new Set();
      for (let i = 0; i < str.length - 1; i++) {
        bigrams.add(str.substring(i, i + 2));
      }
      return bigrams;
    };

    const b1 = getBigrams(s1);
    const b2 = getBigrams(s2);
    let intersection = 0;
    b1.forEach((bg) => {
      if (b2.has(bg)) intersection++;
    });

    return (2.0 * intersection) / (b1.size + b2.size);
  }

  /**
   * Finds the best matching facility from the Master Staffing List
   * @param {string} rawFacility - Facility string entered by user
   * @param {string} block - Normalized Block name
   * @param {Array<Object>} masterFacilities - List of facilities from master staffing
   * @returns {{ matchedName: string, confidence: number, facilityType: string }}
   */
  function matchFacilityWithMaster(rawFacility, block, masterFacilities) {
    const rawClean = cleanString(rawFacility);
    const cleanName = extractCleanFacilityName(rawFacility);
    const fType = detectFacilityType(rawFacility);

    if (!rawClean && !cleanName) return { matchedName: '', confidence: 0, facilityType: fType };

    // 1. Filter master facilities for this block if provided
    const blockFacilities = (masterFacilities || []).filter(
      (m) => !block || cleanString(m.Block) === cleanString(block)
    );

    // Direct match against rawClean in block (e.g. "CHC BAVLA" === "CHC BAVLA")
    for (const mf of blockFacilities) {
      if (cleanString(mf.PHC) === rawClean) {
        return { matchedName: mf.PHC, confidence: 1.0, facilityType: mf.FacilityType || fType };
      }
    }

    // Check exact match with cleanName in block
    for (const mf of blockFacilities) {
      if (cleanString(mf.PHC) === cleanName) {
        return { matchedName: mf.PHC, confidence: 1.0, facilityType: mf.FacilityType || fType };
      }
    }

    // Check if rawClean or cleanName is in known fixes
    const fixed = PHC_NAME_FIXES[rawClean] || PHC_NAME_FIXES[cleanName];
    if (fixed) {
      const found = blockFacilities.find((m) => cleanString(m.PHC) === fixed);
      if (found) {
        return { matchedName: found.PHC, confidence: 0.98, facilityType: found.FacilityType || fType };
      }
    }

    // Match by facility type preference if CHC / SDH
    if (fType === 'CHC' || fType === 'SDH') {
      const typeMatches = blockFacilities.filter((m) => (m.FacilityType || '').toUpperCase() === fType);
      for (const tm of typeMatches) {
        if (cleanName && cleanString(tm.PHC).includes(cleanName)) {
          return { matchedName: tm.PHC, confidence: 0.95, facilityType: fType };
        }
      }
    }

    // 2. Fuzzy match within block facilities
    let bestMatch = null;
    let highestScore = 0;
    let bestType = fType;

    for (const mf of blockFacilities) {
      const sim = stringSimilarity(cleanName || rawClean, mf.PHC);
      // Check substring inclusion
      const isSub = (cleanName && cleanName.includes(cleanString(mf.PHC))) ||
                    cleanString(mf.PHC).includes(cleanName || rawClean);
      let score = Math.max(sim, isSub ? 0.85 : 0);

      if (score > highestScore) {
        highestScore = score;
        bestMatch = mf.PHC;
        bestType = mf.FacilityType || fType;
      }
    }

    if (highestScore >= 0.7 && bestMatch) {
      return { matchedName: bestMatch, confidence: highestScore, facilityType: bestType };
    }

    // 3. Fallback: check across entire district master
    if (masterFacilities && masterFacilities.length > 0) {
      for (const mf of masterFacilities) {
        if (cleanString(mf.PHC) === rawClean || cleanString(mf.PHC) === cleanName) {
          return { matchedName: mf.PHC, confidence: 0.9, facilityType: mf.FacilityType || fType, suggestedBlock: mf.Block };
        }
      }
    }

    return { matchedName: cleanName || rawClean, confidence: highestScore || 0.4, facilityType: fType };
  }

  /**
   * Detects header mapping from raw CSV or Excel row data (Bilingual: English & Gujarati)
   */
  function detectColumnMapping(headers) {
    const map = {
      name: '',
      designation: '',
      placeOfDuty: '',
      facility: '',
      block: '',
      srNo: ''
    };

    const cleanHeaders = headers.map((h) => cleanString(h));

    cleanHeaders.forEach((h, idx) => {
      const orig = headers[idx];
      // Sr No
      if (/^(SR|SR\.?NO|S\.NO|NO|INDEX)\b/i.test(h)) {
        if (!map.srNo) map.srNo = orig;
      }
      // Beneficiary / Participant Name
      else if (/NAME.*(BENEFICIARY|PARTICIPANT|STAFF|EMPLOYEE|PERSON)/i.test(h) ||
               /^(BENEFICIARY\s*NAME|PARTICIPANT\s*NAME|NAME|કર્મચારીનું\s*નામ|નામ)/i.test(h)) {
        if (!map.name) map.name = orig;
      }
      // Designation
      else if (/^(DESIGNATION|DESIG|CADRE|POST|હોદ્દો)/i.test(h) || /DESIGNATION/i.test(h)) {
        if (!map.designation) map.designation = orig;
      }
      // Specific Place of Duty / Sub Centre / AAM
      else if (/^(NAME\s*OF\s*PHC\/UPHC\/THO\s*OFFICE|PLACE\s*OF\s*DUTY|PLACE\s*OF\s*POSTING|DUTY\s*PLACE|સ્થળ|ફરજ)/i.test(h) ||
               /\(ફરજ.*સ્થળ.*નામ\)/i.test(h)) {
        if (!map.placeOfDuty) map.placeOfDuty = orig;
      }
      // PHC / Facility
      else if (/^(NAME\s*OF\s*PHC|PHC\s*NAME|FACILITY\s*NAME|INSTITUTE|PHC|પીએચસી)/i.test(h)) {
        if (!map.facility) map.facility = orig;
      }
      // Taluka / Block
      else if (/^(NAME\s*OF\s*TALUKA|TALUKA\s*NAME|BLOCK\s*NAME|BLOCK|TALUKA|તાલુકો)/i.test(h)) {
        if (!map.block) map.block = orig;
      }
      // Place of duty type fallback
      else if (/^(ફરજ\s*નું\s*સ્થળ|TYPE\s*OF\s*FACILITY)/i.test(h)) {
        if (!map.placeOfDuty) map.placeOfDuty = orig;
      }
    });

    return map;
  }

  return {
    normalizeDesignation,
    detectFacilityType,
    extractCleanFacilityName,
    normalizeTaluka,
    stringSimilarity,
    matchFacilityWithMaster,
    detectColumnMapping,
    DESIGNATION_SYNONYMS,
    FACILITY_TYPE_PATTERNS,
    TALUKA_MAP,
    PHC_NAME_FIXES
  };
})();

// Export for browser or node
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DesignationMapper;
}
