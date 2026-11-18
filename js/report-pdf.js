/**
 * Universal Health Training Intelligence Platform
 * Exact 52-Page Master PDF Report Generator (jsPDF + AutoTable)
 * Health Department · Ahmedabad District, Gujarat
 */

const ReportPDF = (function () {
  'use strict';

  // Government print-friendly palette
  const NAVY = [13, 38, 64];       // Dark navy headers
  const TEAL = [0, 150, 130];      // Primary teal accents
  const DARK = [35, 45, 60];       // Body text
  const LIGHT = [240, 245, 249];   // Alternating row striping
  const GREEN = [22, 140, 80];     // Good / Passed / Trained
  const AMBER = [190, 130, 0];     // Moderate
  const RED = [200, 45, 45];       // Untrained / Action needed
  const ORANGE = [210, 105, 30];   // Excess / Over-trained
  const GREY = [110, 125, 140];    // Subtext / Borders

  const hs = { fillColor: NAVY, textColor: [255, 255, 255], fontSize: 8.5, fontStyle: 'bold', halign: 'center' };
  const bs = { textColor: DARK, fontSize: 8.5, halign: 'center' };
  const as = { fillColor: LIGHT };
  const mg = { left: 12, right: 12 };

  function covColorArr(c) {
    return c >= 75 ? GREEN : c >= 50 ? AMBER : RED;
  }

  function renderHeaderBar(doc, title, subtitle, landscape = true) {
    const w = landscape ? 297 : 210;
    doc.setFillColor(...NAVY);
    doc.rect(0, 0, w, 22, 'F');
    doc.setFillColor(...TEAL);
    doc.rect(0, 22, w, 1.2, 'F');
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.setFont(undefined, 'bold');
    doc.text(title, 12, 10);
    doc.setFontSize(8.5);
    doc.setTextColor(180, 225, 215);
    doc.setFont(undefined, 'normal');
    doc.text(subtitle, 12, 17);
  }

  function renderPageFooter(doc, trainingTitle, landscape = true) {
    const w = landscape ? 297 : 210;
    const h = landscape ? 210 : 297;
    doc.setFontSize(7);
    doc.setTextColor(...GREY);
    const progText = trainingTitle ? `Common ${trainingTitle} 2026` : 'Common Cancer Training 2026';
    doc.text(`Health Department · Ahmedabad District · ${progText}`, 12, h - 6);
    doc.text('Page ' + doc.internal.getNumberOfPages(), w - 12, h - 6, { align: 'right' });
  }

  /**
   * Generates the Master 52-Page District PDF Dossier (Exact Match)
   * @param {Object} DATA - Processed dataset model
   * @param {Object} options - Custom options (e.g. filter by block)
   */
  function generateMasterPDF(DATA, options = {}) {
    try {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });

      const trainingTitle = (DATA.trainingName || options.trainingName || '').trim();
      const mainHeaderTitle = trainingTitle ? `${trainingTitle} Dashboard` : 'Cancer Screening Training Dashboard';
      const districtSubtitle = `Health Department · Ahmedabad District, Gujarat · Generated: ${new Date().toLocaleDateString('en-IN')}`;

      const activeCadres = DATA.cadres || ['MO', 'CHO', 'SN', 'FHW', 'MPHW'];
      const cadreConfig = DATA.cadreConfig || UniversalEngine.createCadreConfig(activeCadres);

      // ==========================================
      // PAGE 1 — KPIs + Block Summary (Landscape)
      // ==========================================
      renderHeaderBar(doc, mainHeaderTitle, districtSubtitle, true);

      const kpiItems = [
        ['Total Staff', DATA.kpi.total_staff, NAVY],
        ['Trained', DATA.kpi.total_trained, GREEN],
        ['Untrained', DATA.kpi.total_untrained, RED],
        ['Coverage', DATA.kpi.coverage + '%', covColorArr(DATA.kpi.coverage)],
        ['Blocks', DATA.kpi.blocks, NAVY],
        ['PHCs', DATA.kpi.phcs, NAVY]
      ];

      kpiItems.forEach(([lbl, val, col], i) => {
        const x = 12 + i * 46.5;
        const y = 28;
        doc.setFillColor(248, 250, 252);
        doc.roundedRect(x, y, 43, 19, 2, 2, 'F');
        doc.setDrawColor(...TEAL);
        doc.setLineWidth(0.5);
        doc.roundedRect(x, y, 43, 19, 2, 2, 'S');

        doc.setFontSize(15);
        doc.setTextColor(...col);
        doc.setFont(undefined, 'bold');
        doc.text(String(val), x + 21.5, y + 10, { align: 'center' });

        doc.setFontSize(7.5);
        doc.setTextColor(...GREY);
        doc.setFont(undefined, 'normal');
        doc.text(lbl, x + 21.5, y + 16, { align: 'center' });
      });

      let noteY = 52;
      if (DATA.kpi.total_excess > 0) {
        doc.setFontSize(8);
        doc.setTextColor(...ORANGE);
        doc.text(`Note: ${DATA.kpi.total_excess} participants trained beyond sanctioned posts — included in trained count.`, 12, noteY);
        noteY += 5;
      }

      doc.setFontSize(11);
      doc.setTextColor(...NAVY);
      doc.setFont(undefined, 'bold');
      doc.text('Block-wise Summary', 12, noteY + 3);

      // Block-wise Summary Table
      const blockHead = ['Block', 'Total', 'Trained', 'Untrained', 'Coverage %', ...activeCadres.map((c) => `${c} T/Tr`)];
      const blockBody = DATA.block_data.map((b) => [
        b.Block,
        b.Total,
        b.Trained,
        b.Untrained,
        b.Coverage + '%',
        ...activeCadres.map((c) => `${b[c] || 0}/${b[`${c}_tr`] || 0}`)
      ]);

      doc.autoTable({
        startY: noteY + 6,
        head: [blockHead],
        body: blockBody,
        theme: 'grid',
        headStyles: hs,
        bodyStyles: bs,
        alternateRowStyles: as,
        margin: mg,
        styles: { lineColor: [210, 220, 228], lineWidth: 0.2 },
        columnStyles: { 0: { halign: 'left', fontStyle: 'bold' } },
        didParseCell: function (data) {
          if (data.section === 'body') {
            if (data.column.index === 2) data.cell.styles.textColor = GREEN;
            if (data.column.index === 3) data.cell.styles.textColor = RED;
            if (data.column.index === 4) {
              const v = parseFloat(data.cell.raw);
              data.cell.styles.textColor = covColorArr(v);
              data.cell.styles.fontStyle = 'bold';
            }
          }
        }
      });
      renderPageFooter(doc, trainingTitle, true);

      // ==========================================
      // PAGE 2 & 3 — PHC-wise Cadre Detail (Landscape)
      // ==========================================
      doc.addPage('a4', 'landscape');
      renderHeaderBar(doc, 'PHC-wise Cadre Detail', 'Format per cadre: Total / Trained / Untrained', true);

      const phcHead = ['Block', 'PHC', ...activeCadres, 'Total', 'Trained', 'Untrained', 'Cov %'];
      const phcBody = DATA.phc_data.map((r) => [
        r.Block,
        r.PHC,
        ...activeCadres.map((c) => `${r[c] || 0}/${r[`${c}_tr`] || 0}/${r[`${c}_un`] || 0}`),
        r.Total,
        r.Trained,
        r.Untrained,
        r.Coverage + '%'
      ]);

      const totalCols = phcHead.length;
      const totalIdx = totalCols - 4;
      const trIdx = totalCols - 3;
      const unIdx = totalCols - 2;
      const covIdx = totalCols - 1;

      doc.autoTable({
        startY: 27,
        head: [phcHead],
        body: phcBody,
        theme: 'grid',
        headStyles: { ...hs, fontSize: 7.5 },
        bodyStyles: { ...bs, fontSize: 7.5 },
        alternateRowStyles: as,
        margin: { left: 10, right: 10 },
        styles: { lineColor: [210, 220, 228], lineWidth: 0.2 },
        columnStyles: { 0: { halign: 'left' }, 1: { halign: 'left', fontStyle: 'bold' } },
        didDrawPage: function (data) {
          // If autoTable split into multiple pages, add header and footer on each
          if (data.pageNumber > 2 && doc.internal.pageSize.getWidth() > 250) {
            renderHeaderBar(doc, 'PHC-wise Cadre Detail (Continued)', 'Format per cadre: Total / Trained / Untrained', true);
          }
          renderPageFooter(doc, trainingTitle, true);
        },
        didParseCell: function (data) {
          if (data.section === 'body') {
            if (data.column.index === trIdx) data.cell.styles.textColor = GREEN;
            if (data.column.index === unIdx) data.cell.styles.textColor = RED;
            if (data.column.index === covIdx) {
              const v = parseFloat(data.cell.raw);
              data.cell.styles.textColor = covColorArr(v);
              data.cell.styles.fontStyle = 'bold';
            }
          }
        }
      });

      // ==========================================
      // PAGE 4 — Cadre-wise Coverage Summary (Portrait)
      // ==========================================
      doc.addPage('a4', 'portrait');
      renderHeaderBar(doc, 'Cadre-wise Coverage Summary', 'Sanctioned vs Trained per cadre across the district', false);

      const cadreHead = ['Cadre', 'Sanctioned', 'Trained', 'Untrained', 'Excess', 'Coverage %'];
      const cadreBody = DATA.cadre_data.map((c) => [
        c.cadre,
        c.total,
        c.trained,
        c.untrained,
        c.excess || 0,
        c.coverage + '%'
      ]);

      doc.autoTable({
        startY: 30,
        head: [cadreHead],
        body: cadreBody,
        theme: 'grid',
        headStyles: hs,
        bodyStyles: { ...bs, fontSize: 10 },
        alternateRowStyles: as,
        margin: mg,
        styles: { lineColor: [210, 220, 228], lineWidth: 0.2, cellPadding: 3 },
        didParseCell: function (data) {
          if (data.section === 'body') {
            if (data.column.index === 2) data.cell.styles.textColor = GREEN;
            if (data.column.index === 3) data.cell.styles.textColor = RED;
            if (data.column.index === 4 && Number(data.cell.raw) > 0) {
              data.cell.styles.textColor = ORANGE;
              data.cell.styles.fontStyle = 'bold';
            }
            if (data.column.index === 5) {
              const v = parseFloat(data.cell.raw);
              data.cell.styles.textColor = covColorArr(v);
              data.cell.styles.fontStyle = 'bold';
            }
          }
        }
      });
      renderPageFooter(doc, trainingTitle, false);

      // ==========================================
      // PAGES 5 to 52 — Individual Facility Trained Rosters (Portrait)
      // ==========================================
      // Group trained staff by Block and PHC
      const grouped = {};
      (DATA.trained_list || []).forEach((r) => {
        const key = `${r.Block}||${r.PHC}`;
        if (!grouped[key]) grouped[key] = { Block: r.Block, PHC: r.PHC, list: [] };
        grouped[key].list.push(r);
      });

      // Also ensure all 47 PHCs are represented (even if 0 trained)
      (DATA.phc_data || []).forEach((p) => {
        const key = `${p.Block}||${p.PHC}`;
        if (!grouped[key]) {
          grouped[key] = { Block: p.Block, PHC: p.PHC, list: [] };
        }
      });

      const facilityGroups = Object.values(grouped).sort(
        (a, b) => a.Block.localeCompare(b.Block) || a.PHC.localeCompare(b.PHC)
      );

      // Cadre sort order: MO, CHO, SN, FHW, MPHW, etc.
      const cadreOrderMap = {};
      activeCadres.forEach((c, idx) => (cadreOrderMap[c] = idx));

      facilityGroups.forEach((g) => {
        doc.addPage('a4', 'portrait');
        renderHeaderBar(doc, 'Trained Staff List', `Block: ${g.Block}   |   PHC: ${g.PHC}   |   Total Trained: ${g.list.length}`, false);

        const sortedList = [...g.list].sort(
          (a, b) => (cadreOrderMap[a.Cadre] ?? 99) - (cadreOrderMap[b.Cadre] ?? 99) || a.Name.localeCompare(b.Name)
        );

        const rosterHead = [['#', 'Name of Participant', 'Cadre', 'Designation', 'Place of Duty']];
        const rosterBody = sortedList.map((r, i) => [
          i + 1,
          r.Name,
          r.Cadre,
          r.Designation,
          r.PlaceOfDuty || ''
        ]);

        if (rosterBody.length === 0) {
          rosterBody.push(['-', 'No trained staff recorded for this facility yet', '-', '-', '-']);
        }

        doc.autoTable({
          startY: 28,
          head: rosterHead,
          body: rosterBody,
          theme: 'grid',
          headStyles: { ...hs, fontSize: 9.5 },
          bodyStyles: { ...bs, fontSize: 9.5 },
          alternateRowStyles: as,
          margin: mg,
          styles: { lineColor: [210, 220, 228], lineWidth: 0.2, cellPadding: 2.5 },
          columnStyles: { 0: { cellWidth: 12 }, 1: { halign: 'left' }, 2: { fontStyle: 'bold' } },
          didParseCell: function (data) {
            if (data.section === 'body' && data.column.index === 2) {
              const cfg = cadreConfig[data.cell.raw];
              if (cfg && cfg.pdfColor) {
                data.cell.styles.textColor = cfg.pdfColor;
              }
            }
          }
        });
        renderPageFooter(doc, trainingTitle, false);
      });

      // Save PDF with appropriate filename
      const cleanFileName = trainingTitle
        ? `${trainingTitle.replace(/[^a-zA-Z0-9_-]/g, '_')}_Dashboard.pdf`
        : 'Cancer_Screening_Training_Dashboard.pdf';

      doc.save(cleanFileName);
      return { success: true, pages: doc.internal.getNumberOfPages() };
    } catch (err) {
      console.error('PDF export error:', err);
      alert('PDF generation error: ' + err.message);
      return { success: false, error: err.message };
    }
  }

  /**
   * Generates a targeted Single Block / Taluka PDF report (2-4 pages)
   */
  function generateBlockPDF(DATA, selectedBlock) {
    if (!selectedBlock) return generateMasterPDF(DATA);
    try {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
      const trainingTitle = (DATA.trainingName || '').trim();

      // Page 1: Block Executive Summary
      renderHeaderBar(doc, `${selectedBlock} Taluka — Training Summary`, `Health Department · Ahmedabad District, Gujarat`, true);

      const blockObj = DATA.block_data.find((b) => b.Block === selectedBlock);
      const blockPHCs = DATA.phc_data.filter((p) => p.Block === selectedBlock);

      if (!blockObj) {
        alert('Block not found');
        return;
      }

      // Block KPI row
      const kpis = [
        ['Sanctioned', blockObj.Total, NAVY],
        ['Trained', blockObj.Trained, GREEN],
        ['Untrained', blockObj.Untrained, RED],
        ['Coverage', blockObj.Coverage + '%', covColorArr(blockObj.Coverage)],
        ['Facilities', blockPHCs.length, NAVY]
      ];

      kpis.forEach(([lbl, val, col], i) => {
        const x = 12 + i * 54;
        const y = 28;
        doc.setFillColor(248, 250, 252);
        doc.roundedRect(x, y, 50, 19, 2, 2, 'F');
        doc.setDrawColor(...TEAL);
        doc.roundedRect(x, y, 50, 19, 2, 2, 'S');

        doc.setFontSize(15);
        doc.setTextColor(...col);
        doc.setFont(undefined, 'bold');
        doc.text(String(val), x + 25, y + 10, { align: 'center' });

        doc.setFontSize(7.5);
        doc.setTextColor(...GREY);
        doc.text(lbl, x + 25, y + 16, { align: 'center' });
      });

      // PHC Table for this block
      const phcHead = ['PHC', ...DATA.cadres, 'Total', 'Trained', 'Untrained', 'Cov %'];
      const phcBody = blockPHCs.map((r) => [
        r.PHC,
        ...DATA.cadres.map((c) => `${r[c] || 0}/${r[`${c}_tr`] || 0}/${r[`${c}_un`] || 0}`),
        r.Total,
        r.Trained,
        r.Untrained,
        r.Coverage + '%'
      ]);

      doc.autoTable({
        startY: 55,
        head: [phcHead],
        body: phcBody,
        theme: 'grid',
        headStyles: hs,
        bodyStyles: bs,
        alternateRowStyles: as,
        margin: mg
      });
      renderPageFooter(doc, trainingTitle, true);

      // Page 2: Staff List for this block
      doc.addPage('a4', 'portrait');
      renderHeaderBar(doc, `${selectedBlock} Taluka — Trained Personnel`, `Trained Staff Roster`, false);

      const blockStaff = (DATA.trained_list || []).filter((r) => r.Block === selectedBlock);
      const rBody = blockStaff.map((r, i) => [i + 1, r.Name, r.Cadre, r.Designation, r.PHC, r.PlaceOfDuty || '']);

      doc.autoTable({
        startY: 28,
        head: [['#', 'Name', 'Cadre', 'Designation', 'PHC', 'Place of Duty']],
        body: rBody,
        theme: 'grid',
        headStyles: hs,
        bodyStyles: { ...bs, fontSize: 8.5 },
        alternateRowStyles: as,
        margin: mg
      });
      renderPageFooter(doc, trainingTitle, false);

      doc.save(`${selectedBlock}_Training_Report.pdf`);
    } catch (e) {
      alert('Block PDF error: ' + e.message);
    }
  }

  return {
    generateMasterPDF,
    generateBlockPDF
  };
})();

// Export for browser or node
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ReportPDF;
}
