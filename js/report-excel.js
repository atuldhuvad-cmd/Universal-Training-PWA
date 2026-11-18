/**
 * Universal Health Training Intelligence Platform
 * Multi-Sheet Formatted Excel Workbook Export (SheetJS)
 * Health Department · Ahmedabad District, Gujarat
 */

const ReportExcel = (function () {
  'use strict';

  function exportWorkbook(DATA) {
    try {
      if (typeof XLSX === 'undefined') {
        alert('SheetJS (XLSX) library not loaded');
        return;
      }

      const WB = XLSX.utils.book_new();
      const trainingTitle = (DATA.trainingName || '').trim() || 'Health_Training';
      const cadres = DATA.cadres || ['MO', 'CHO', 'SN', 'FHW', 'MPHW'];

      // ==========================================
      // SHEET 1: Dashboard Summary
      // ==========================================
      const summaryRows = [
        ['Health Department · Ahmedabad District, Gujarat'],
        [`${DATA.trainingName || 'District Training Monitoring Dashboard'}`],
        [`Generated: ${new Date().toLocaleDateString('en-IN')}`],
        [],
        ['KEY PERFORMANCE INDICATORS'],
        ['Total Sanctioned Staff', DATA.kpi.total_staff],
        ['Total Trained Staff', DATA.kpi.total_trained],
        ['Total Untrained Staff', DATA.kpi.total_untrained],
        ['Excess Participants (Beyond Sanctioned)', DATA.kpi.total_excess],
        ['District Overall Coverage %', `${DATA.kpi.coverage}%`],
        ['Total Blocks', DATA.kpi.blocks],
        ['Total Facilities / PHCs', DATA.kpi.phcs],
        [],
        ['BLOCK-WISE TRAINING SUMMARY'],
        [
          'Block',
          'Sanctioned Staff',
          'Trained Staff',
          'Untrained Staff',
          'Coverage %',
          ...cadres.flatMap((c) => [`${c} Sanc`, `${c} Trained`, `${c} Untrained`])
        ]
      ];

      DATA.block_data.forEach((b) => {
        summaryRows.push([
          b.Block,
          b.Total,
          b.Trained,
          b.Untrained,
          `${b.Coverage}%`,
          ...cadres.flatMap((c) => [b[c] || 0, b[`${c}_tr`] || 0, b[`${c}_un`] || 0])
        ]);
      });

      const wsSummary = XLSX.utils.aoa_to_sheet(summaryRows);
      XLSX.utils.book_append_sheet(WB, wsSummary, 'Dashboard Summary');

      // ==========================================
      // SHEET 2: PHC / Facility Detail
      // ==========================================
      const phcRows = [
        [
          'Block',
          'Facility / PHC',
          'Facility Type',
          ...cadres.flatMap((c) => [`${c} Total`, `${c} Trained`, `${c} Untrained`, `${c} Excess`]),
          'Total Sanctioned',
          'Trained',
          'Untrained',
          'Excess',
          'Coverage %'
        ]
      ];

      DATA.phc_data.forEach((r) => {
        phcRows.push([
          r.Block,
          r.PHC,
          r.FacilityType || 'PHC',
          ...cadres.flatMap((c) => [r[c] || 0, r[`${c}_tr`] || 0, r[`${c}_un`] || 0, r[`${c}_ex`] || 0]),
          r.Total,
          r.Trained,
          r.Untrained,
          r.Excess || 0,
          `${r.Coverage}%`
        ]);
      });

      const wsPHC = XLSX.utils.aoa_to_sheet(phcRows);
      wsPHC['!autofilter'] = { ref: `A1:${XLSX.utils.encode_col(phcRows[0].length - 1)}${phcRows.length}` };
      XLSX.utils.book_append_sheet(WB, wsPHC, 'PHC Detail');

      // ==========================================
      // SHEET 3: Block Progress
      // ==========================================
      const blockProgressRows = [
        ['Block', 'Facility / PHC', 'Total Staff', 'Trained', 'Untrained', 'Excess', 'Coverage %']
      ];

      DATA.block_data.forEach((b) => {
        blockProgressRows.push([
          `[BLOCK: ${b.Block}]`,
          'ALL FACILITIES',
          b.Total,
          b.Trained,
          b.Untrained,
          b.Excess || 0,
          `${b.Coverage}%`
        ]);

        const phcs = DATA.phc_data.filter((p) => p.Block === b.Block);
        phcs.forEach((p) => {
          blockProgressRows.push([
            b.Block,
            p.PHC,
            p.Total,
            p.Trained,
            p.Untrained,
            p.Excess || 0,
            `${p.Coverage}%`
          ]);
        });
      });

      const wsBlock = XLSX.utils.aoa_to_sheet(blockProgressRows);
      XLSX.utils.book_append_sheet(WB, wsBlock, 'Block Progress');

      // ==========================================
      // SHEET 4: Trained Staff List
      // ==========================================
      const sortedStaff = [...(DATA.trained_list || [])].sort(
        (a, b) => a.Block.localeCompare(b.Block) || a.PHC.localeCompare(b.PHC) || a.Name.localeCompare(b.Name)
      );

      const staffRows = [
        ['#', 'Name of Participant', 'Cadre', 'Designation (Original)', 'Place of Duty', 'Facility / PHC', 'Block / Taluka']
      ];

      sortedStaff.forEach((s, idx) => {
        staffRows.push([
          idx + 1,
          s.Name,
          s.Cadre,
          s.Designation,
          s.PlaceOfDuty || '',
          s.PHC,
          s.Block
        ]);
      });

      const wsStaff = XLSX.utils.aoa_to_sheet(staffRows);
      wsStaff['!autofilter'] = { ref: `A1:G${staffRows.length}` };
      XLSX.utils.book_append_sheet(WB, wsStaff, 'Trained Staff List');

      // ==========================================
      // SHEET 5: Cadre Summary
      // ==========================================
      const cadreRows = [
        ['Cadre', 'Sanctioned Posts', 'Trained Staff', 'Untrained Staff', 'Excess Participants', 'Coverage %']
      ];

      DATA.cadre_data.forEach((c) => {
        cadreRows.push([
          c.cadre,
          c.total,
          c.trained,
          c.untrained,
          c.excess || 0,
          `${c.coverage}%`
        ]);
      });

      const wsCadre = XLSX.utils.aoa_to_sheet(cadreRows);
      XLSX.utils.book_append_sheet(WB, wsCadre, 'Cadre Summary');

      // ==========================================
      // SHEET 6: Over-Trained Detail (Audit Sheet)
      // ==========================================
      const overTrainedRows = [
        ['Block', 'Facility / PHC', 'Cadre', 'Sanctioned', 'Trained', 'Excess', 'Note']
      ];

      DATA.phc_data.forEach((p) => {
        cadres.forEach((c) => {
          const ex = p[`${c}_ex`] || 0;
          if (ex > 0) {
            overTrainedRows.push([
              p.Block,
              p.PHC,
              c,
              p[c] || 0,
              p[`${c}_tr`] || 0,
              ex,
              'Trained staff exceeds sanctioned posts — preserved as valid data'
            ]);
          }
        });
      });

      if (overTrainedRows.length === 1) {
        overTrainedRows.push(['None', 'None', 'None', 0, 0, 0, 'No facilities with excess trained participants']);
      }

      const wsOverTrained = XLSX.utils.aoa_to_sheet(overTrainedRows);
      wsOverTrained['!autofilter'] = { ref: `A1:G${overTrainedRows.length}` };
      XLSX.utils.book_append_sheet(WB, wsOverTrained, 'Over-Trained Detail');

      // Write and download
      const fileName = `${trainingTitle.replace(/[^a-zA-Z0-9_-]/g, '_')}_Report.xlsx`;
      XLSX.writeFile(WB, fileName);
    } catch (err) {
      console.error('Excel export error:', err);
      alert('Excel export error: ' + err.message);
    }
  }

  return {
    exportWorkbook
  };
})();

// Export for browser or node
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ReportExcel;
}
