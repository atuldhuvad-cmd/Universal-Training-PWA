/**
 * Universal Health Training Intelligence Platform
 * Universal Data Engine & Calculation Core
 * Health Department · Ahmedabad District, Gujarat
 */

const UniversalEngine = (function () {
  'use strict';

  const Mapper = (typeof DesignationMapper !== 'undefined') 
    ? DesignationMapper 
    : (typeof require !== 'undefined' ? require('./designation-mapper.js') : {});

  const STANDARD_CADRE_COLORS = {
    'MO':         { bg: 'rgba(77,159,255,0.2)',  color: '#4D9FFF', border: '#4D9FFF', pdfColor: [40, 90, 200] },
    'AYUSH MO':   { bg: 'rgba(56,217,245,0.2)',  color: '#38D9F5', border: '#38D9F5', pdfColor: [0, 160, 200] },
    'AYUSH':      { bg: 'rgba(56,217,245,0.2)',  color: '#38D9F5', border: '#38D9F5', pdfColor: [0, 160, 200] },
    'CHO':        { bg: 'rgba(180,143,255,0.2)', color: '#B48FFF', border: '#B48FFF', pdfColor: [120, 70, 190] },
    'SN':         { bg: 'rgba(255,185,56,0.2)',  color: '#FFB938', border: '#FFB938', pdfColor: [180, 120, 0] },
    'FHW':        { bg: 'rgba(0,212,180,0.2)',   color: '#00D4B4', border: '#00D4B4', pdfColor: [0, 140, 125] },
    'ANM':        { bg: 'rgba(0,212,180,0.2)',   color: '#00D4B4', border: '#00D4B4', pdfColor: [0, 140, 125] },
    'MPHW':       { bg: 'rgba(77,219,138,0.2)',  color: '#4DDB8A', border: '#4DDB8A', pdfColor: [30, 140, 75] },
    'ASHA':       { bg: 'rgba(255,107,157,0.2)', color: '#FF6B9D', border: '#FF6B9D', pdfColor: [220, 60, 120] },
    'LT':         { bg: 'rgba(255,140,66,0.2)',  color: '#FF8C42', border: '#FF8C42', pdfColor: [210, 105, 30] },
    'PHARMACIST': { bg: 'rgba(156,136,255,0.2)', color: '#9C88FF', border: '#9C88FF', pdfColor: [110, 90, 210] }
  };

  const CADRE_PALETTE = [
    { bg: 'rgba(77,159,255,0.2)',  color: '#4D9FFF', border: '#4D9FFF', pdfColor: [40, 90, 200] },
    { bg: 'rgba(56,217,245,0.2)',  color: '#38D9F5', border: '#38D9F5', pdfColor: [0, 160, 200] },
    { bg: 'rgba(180,143,255,0.2)', color: '#B48FFF', border: '#B48FFF', pdfColor: [120, 70, 190] },
    { bg: 'rgba(255,185,56,0.2)',  color: '#FFB938', border: '#FFB938', pdfColor: [180, 120, 0] },
    { bg: 'rgba(0,212,180,0.2)',   color: '#00D4B4', border: '#00D4B4', pdfColor: [0, 140, 125] },
    { bg: 'rgba(77,219,138,0.2)',  color: '#4DDB8A', border: '#4DDB8A', pdfColor: [30, 140, 75] },
    { bg: 'rgba(255,107,157,0.2)', color: '#FF6B9D', border: '#FF6B9D', pdfColor: [220, 60, 120] },
    { bg: 'rgba(255,140,66,0.2)',  color: '#FF8C42', border: '#FF8C42', pdfColor: [210, 105, 30] },
    { bg: 'rgba(156,136,255,0.2)', color: '#9C88FF', border: '#9C88FF', pdfColor: [110, 90, 210] },
    { bg: 'rgba(164,176,190,0.2)', color: '#A4B0BE', border: '#A4B0BE', pdfColor: [120, 130, 140] }
  ];

  const BLOCK_PALETTE = ['#00D4B4', '#4D9FFF', '#FFB938', '#4DDB8A', '#FF8C42', '#B48FFF', '#FF5252', '#DCE8F5', '#7A9BBF'];

  /**
   * Builds cadre metadata and color mapping dynamically
   * @param {Array<string>} cadresList
   */
  function createCadreConfig(cadresList) {
    const config = {};
    cadresList.forEach((cadre, idx) => {
      const p = STANDARD_CADRE_COLORS[cadre.toUpperCase()] || CADRE_PALETTE[idx % CADRE_PALETTE.length];
      config[cadre] = {
        name: cadre,
        bg: p.bg,
        color: p.color,
        border: p.border,
        pdfColor: p.pdfColor,
        order: idx
      };
    });
    return config;
  }

  /**
   * Processes raw Staffing & Training records into official Dashboard Data Model
   * strictly adhering to Dr. Atul's Critical Data Rules
   *
   * @param {Array<Object>} masterStaffingRows - Authoritative facility list & sanctioned counts
   * @param {Array<Object>} trainingParticipantRows - Participant attendance records
   * @param {string} trainingName - User-configured training programme title
   * @param {Object} options - Custom settings (e.g. batch size)
   */
  function processDataset(masterStaffingRows, trainingParticipantRows, trainingName = '', options = {}) {
    const maxPaxPerBatch = options.maxPaxPerBatch || 40;
    const maxBlocksPerBatch = options.maxBlocksPerBatch || 9;

    // 1. Detect Cadres from Master Staffing columns
    // Columns between 'PHC'/'Facility' and 'Total'/'Grand Total'
    let cadres = [];
    if (masterStaffingRows.length > 0) {
      const sample = masterStaffingRows[0];
      const keys = Object.keys(sample);
      const ignore = new Set(['SR', 'SR.NO', 'SR.NO.', 'SRNO', 'BLOCK', 'BLOCK NAME', 'TALUKA', 'TALUKA NAME',
                              'PHC', 'PHC NAME', 'FACILITY', 'FACILITY NAME', 'PLACE OF DUTY', 'TOTAL', 'GRAND TOTAL', 'TYPE']);
      cadres = keys.filter((k) => !ignore.has(k.toUpperCase().trim()));
    }

    if (cadres.length === 0) {
      cadres = ['MO', 'CHO', 'SN', 'FHW', 'MPHW'];
    }

    const cadreConfig = createCadreConfig(cadres);

    // 2. Build Facility Master Reference (Rule 0)
    const facilityMap = new Map();
    const blockSet = new Set();

    masterStaffingRows.forEach((row) => {
      const block = Mapper.normalizeTaluka(row.Block || row['Block Name'] || row.Taluka || row['Taluka Name']);
      const facilityRaw = String(row.PHC || row['PHC Name'] || row.Facility || row['Facility Name'] || '').trim();
      const facilityClean = Mapper.extractCleanFacilityName(facilityRaw);

      if (!block || !facilityClean || facilityClean.toUpperCase().includes('TOTAL')) {
        return; // Skip total or blank rows
      }

      blockSet.add(block);
      const key = `${block}||${facilityClean}`;

      const fType = row.Type || Mapper.detectFacilityType(facilityRaw);

      // Sum sanctioned posts per cadre
      const cadreSanctioned = {};
      let calculatedTotal = 0;

      cadres.forEach((c) => {
        const val = Number(row[c]) || 0;
        cadreSanctioned[c] = val;
        calculatedTotal += val;
      });

      // Use explicit total if available, otherwise sum of cadres
      const explicitTotal = Number(row.Total || row['Grand Total']);
      const totalSanctioned = !isNaN(explicitTotal) && explicitTotal > 0 ? explicitTotal : calculatedTotal;

      facilityMap.set(key, {
        Block: block,
        PHC: facilityClean,
        FacilityRaw: facilityRaw,
        FacilityType: fType,
        Total: totalSanctioned,
        sanctioned: cadreSanctioned,
        trainedCadre: {},
        trainedParticipants: [],
        Trained: 0,
        Untrained: 0,
        Excess: 0,
        Coverage: 0
      });

      // Initialize trained counts to 0
      cadres.forEach((c) => {
        facilityMap.get(key).trainedCadre[c] = 0;
      });
    });

    // 3. Match and Aggregate Training Participants
    // Rule 1: No capping. Every participant is counted.
    const unmatchedParticipants = [];
    const matchedParticipants = [];

    (trainingParticipantRows || []).forEach((pRow, idx) => {
      const rawBlock = pRow.Block || pRow['NAME OF TALUKA'] || pRow['Taluka'] || pRow['Block Name'] || '';
      const normBlock = Mapper.normalizeTaluka(rawBlock);

      const rawFacility = pRow.PHC || pRow['NAME OF PHC'] || pRow['PHC Name'] || pRow['Facility'] ||
                          pRow['(ફરજ ના સ્થળનું નામ) NAME OF PHC/UPHC/THO OFFICE'] || '';

      // Match facility against master
      const masterList = Array.from(facilityMap.values());
      const matchResult = Mapper.matchFacilityWithMaster(rawFacility, normBlock, masterList);

      const targetFacility = matchResult.matchedName;
      const resolvedBlock = matchResult.suggestedBlock || normBlock;
      const key = `${resolvedBlock}||${targetFacility}`;

      // Normalize designation & cadre
      const rawDesig = pRow.Designation || pRow.DESIGNATION || pRow['designation'] || pRow.Cadre || '';
      const desigNorm = Mapper.normalizeDesignation(rawDesig, cadres);
      const cadre = desigNorm.cadre;

      const participantName = String(pRow.Name || pRow['Beneficiary Name'] || pRow['Participant Name'] || pRow['Name of Participant'] || '').trim();
      const placeOfDuty = String(pRow.PlaceOfDuty || pRow['Place Of Duty'] || pRow['(ફરજ ના સ્થળનું નામ) NAME OF PHC/UPHC/THO OFFICE'] || pRow['ફરજ નું સ્થળ'] || '').trim();

      const participant = {
        SrNo: idx + 1,
        Name: participantName || `Participant ${idx + 1}`,
        Cadre: cadre,
        Designation: desigNorm.raw || cadre,
        PlaceOfDuty: placeOfDuty,
        PHC: targetFacility,
        Block: resolvedBlock,
        Confidence: matchResult.confidence,
        RawFacility: rawFacility
      };

      if (facilityMap.has(key)) {
        const fac = facilityMap.get(key);
        fac.trainedParticipants.push(participant);
        fac.trainedCadre[cadre] = (fac.trainedCadre[cadre] || 0) + 1;
        fac.Trained += 1;
        matchedParticipants.push(participant);
      } else {
        // Unknown or unmatched facility
        unmatchedParticipants.push(participant);
      }
    });

    // 4. Calculate Final PHC-level Metrics (Rules 1, 2, 3)
    const phcData = [];
    let grandSanctioned = 0;
    let grandTrained = 0;
    let grandUntrained = 0;
    let grandExcess = 0;

    const blockAgg = {};

    facilityMap.forEach((fac) => {
      let phcCadreUntrainedSum = 0;
      let phcCadreExcessSum = 0;

      // Construct flat object for table rendering
      const item = {
        Block: fac.Block,
        PHC: fac.PHC,
        FacilityType: fac.FacilityType,
        Total: fac.Total,
        Trained: fac.Trained
      };

      cadres.forEach((c) => {
        const sanc = fac.sanctioned[c] || 0;
        const tr = fac.trainedCadre[c] || 0;
        const un = Math.max(0, sanc - tr);
        const ex = Math.max(0, tr - sanc);

        item[c] = sanc;
        item[`${c}_tr`] = tr;
        item[`${c}_un`] = un;
        item[`${c}_ex`] = ex;

        phcCadreUntrainedSum += un;
        phcCadreExcessSum += ex;
      });

      // PHC Untrained = max(0, Sanctioned - Trained)
      // If trained > sanctioned, untrained = 0, excess = trained - sanctioned
      const phcUntrained = Math.max(0, fac.Total - fac.Trained);
      const phcExcess = Math.max(0, fac.Trained - fac.Total);

      item.Untrained = phcUntrained;
      item.Excess = phcExcess;
      item.CadreExcess = phcCadreExcessSum;
      item.Coverage = fac.Total > 0 ? Number(((fac.Trained / fac.Total) * 100).toFixed(1)) : 0;

      phcData.push(item);

      grandSanctioned += fac.Total;
      grandTrained += fac.Trained;
      grandUntrained += phcUntrained;
      grandExcess += phcExcess;

      // Aggregate Block level
      if (!blockAgg[fac.Block]) {
        blockAgg[fac.Block] = {
          Block: fac.Block,
          Total: 0,
          Trained: 0,
          Untrained: 0,
          Excess: 0,
          Coverage: 0,
          phcCount: 0
        };
        cadres.forEach((c) => {
          blockAgg[fac.Block][c] = 0;
          blockAgg[fac.Block][`${c}_tr`] = 0;
          blockAgg[fac.Block][`${c}_un`] = 0;
          blockAgg[fac.Block][`${c}_ex`] = 0;
        });
      }

      const b = blockAgg[fac.Block];
      b.Total += fac.Total;
      b.Trained += fac.Trained;
      b.Untrained += phcUntrained;
      b.Excess += phcExcess;
      b.phcCount += 1;

      cadres.forEach((c) => {
        b[c] += fac.sanctioned[c] || 0;
        b[`${c}_tr`] += fac.trainedCadre[c] || 0;
        b[`${c}_un`] += Math.max(0, (fac.sanctioned[c] || 0) - (fac.trainedCadre[c] || 0));
        b[`${c}_ex`] += Math.max(0, (fac.trainedCadre[c] || 0) - (fac.sanctioned[c] || 0));
      });
    });

    // 5. Finalize Block Summaries
    const blockData = Object.values(blockAgg)
      .sort((a, b) => a.Block.localeCompare(b.Block))
      .map((b) => {
        b.Coverage = b.Total > 0 ? Number(((b.Trained / b.Total) * 100).toFixed(1)) : 0;
        return b;
      });

    // 6. Cadre-wise Summary across District (Page 4 of PDF)
    const cadreData = cadres.map((c) => {
      let totalSanc = 0;
      let totalTr = 0;

      phcData.forEach((r) => {
        totalSanc += r[c] || 0;
        totalTr += r[`${c}_tr`] || 0;
      });

      const un = Math.max(0, totalSanc - totalTr);
      const ex = Math.max(0, totalTr - totalSanc);
      const cov = totalSanc > 0 ? Number(((totalTr / totalSanc) * 100).toFixed(1)) : 0;

      return {
        cadre: c,
        total: totalSanc,
        trained: totalTr,
        untrained: un,
        excess: ex,
        coverage: cov
      };
    });

    // Calculate total district cadre excess (sum of overtrained slots)
    let totalCadreExcess = 0;
    cadreData.forEach((c) => (totalCadreExcess += c.excess));

    // 7. Auto-Plan Batches for Untrained Staff (Tab 5)
    const batches = planBatches(phcData, cadres, maxPaxPerBatch, maxBlocksPerBatch);

    // Sort PHCs by Block then PHC name
    phcData.sort((a, b) => a.Block.localeCompare(b.Block) || a.PHC.localeCompare(b.PHC));

    // Overall District Coverage
    const districtCoverage = grandSanctioned > 0 ? Number(((grandTrained / grandSanctioned) * 100).toFixed(1)) : 0;

    return {
      trainingName: trainingName.trim() || '',
      cadres: cadres,
      cadreConfig: cadreConfig,
      kpi: {
        total_staff: grandSanctioned,
        total_trained: grandTrained,
        total_untrained: grandUntrained,
        total_excess: totalCadreExcess || grandExcess,
        coverage: districtCoverage,
        blocks: blockData.length,
        phcs: phcData.length,
        generated_date: new Date().toLocaleDateString('en-IN')
      },
      phc_data: phcData,
      block_data: blockData,
      cadre_data: cadreData,
      trained_list: matchedParticipants,
      unmatched_list: unmatchedParticipants,
      batches: batches
    };
  }

  /**
   * Automatic intelligent batch planning for remaining untrained staff
   */
  function planBatches(phcData, cadres, maxPax = 40, maxBlocks = 9) {
    const batches = [];
    const untrainedPHCs = phcData
      .filter((r) => r.Untrained > 0)
      .map((r) => ({
        Block: r.Block,
        PHC: r.PHC,
        Untrained: r.Untrained,
        cadres: cadres.reduce((acc, c) => {
          acc[c] = r[`${c}_un`] || 0;
          return acc;
        }, {})
      }))
      .sort((a, b) => a.Block.localeCompare(b.Block) || b.Untrained - a.Untrained);

    let currentBatchRows = [];
    let currentBatchTotal = 0;
    let currentBatchBlocks = new Set();

    untrainedPHCs.forEach((phc) => {
      // Check if adding this PHC would exceed block or capacity constraints
      const willExceedPax = currentBatchTotal + phc.Untrained > maxPax && currentBatchRows.length > 0;
      const willExceedBlocks = !currentBatchBlocks.has(phc.Block) && currentBatchBlocks.size >= maxBlocks && currentBatchRows.length > 0;

      if (willExceedPax || willExceedBlocks) {
        // Seal current batch
        batches.push({
          total: currentBatchTotal,
          blocks: Array.from(currentBatchBlocks),
          rows: currentBatchRows
        });
        currentBatchRows = [];
        currentBatchTotal = 0;
        currentBatchBlocks = new Set();
      }

      const row = {
        Block: phc.Block,
        PHC: phc.PHC,
        Total: phc.Untrained
      };
      cadres.forEach((c) => {
        row[c] = phc.cadres[c] || 0;
      });

      currentBatchRows.push(row);
      currentBatchTotal += phc.Untrained;
      currentBatchBlocks.add(phc.Block);
    });

    if (currentBatchRows.length > 0) {
      batches.push({
        total: currentBatchTotal,
        blocks: Array.from(currentBatchBlocks),
        rows: currentBatchRows
      });
    }

    return batches;
  }

  return {
    processDataset,
    createCadreConfig,
    planBatches,
    CADRE_PALETTE,
    BLOCK_PALETTE
  };
})();

// Export for browser or node
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UniversalEngine;
}
