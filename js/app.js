/**
 * Universal Health Training Intelligence Platform (WTIP)
 * Core Application Controller & Dynamic Training Management
 * Health Department · Ahmedabad District, Gujarat
 */

(function () {
  'use strict';

  // Global State
  const APP_STATE = {
    trainingName: '',
    activeTab: 0,
    filters: {
      block: '',
      facilityType: '',
      facility: '',
      cadre: '',
      search: ''
    },
    data: null, // Active processed dataset
    charts: {},
    pwaPrompt: null,
    batchSettings: {
      maxPax: 40,
      maxBlocks: 9
    },
    customTrainings: {},
    activeTrainingId: 'cancer_baseline'
  };

  // Canonical Ahmedabad District Master Facilities Reference (47 PHCs/UPHCs + 12 SDHs/CHCs = 59 Total)
  const AHMEDABAD_MASTER_FACILITIES = [
    // BAVLA
    { Block: 'BAVLA', PHC: 'URBAN', FacilityType: 'UPHC' },
    { Block: 'BAVLA', PHC: 'GANGAD', FacilityType: 'PHC' },
    { Block: 'BAVLA', PHC: 'KAVITHA', FacilityType: 'PHC' },
    { Block: 'BAVLA', PHC: 'NANODARA', FacilityType: 'PHC' },
    { Block: 'BAVLA', PHC: 'SHIYAL', FacilityType: 'PHC' },
    { Block: 'BAVLA', PHC: 'CHC BAGODARA', FacilityType: 'CHC' },
    { Block: 'BAVLA', PHC: 'CHC BAVLA', FacilityType: 'CHC' },
    // DASCROI
    { Block: 'DASCROI', PHC: 'ASLALI', FacilityType: 'PHC' },
    { Block: 'DASCROI', PHC: 'JETALPUR', FacilityType: 'PHC' },
    { Block: 'DASCROI', PHC: 'KANBHA', FacilityType: 'PHC' },
    { Block: 'DASCROI', PHC: 'KASINDRA', FacilityType: 'PHC' },
    { Block: 'DASCROI', PHC: 'KUHA', FacilityType: 'PHC' },
    { Block: 'DASCROI', PHC: 'NANDEJ', FacilityType: 'PHC' },
    { Block: 'DASCROI', PHC: 'VAHELAL', FacilityType: 'PHC' },
    { Block: 'DASCROI', PHC: 'KHODIYAR', FacilityType: 'PHC' },
    { Block: 'DASCROI', PHC: 'SDH SINGARVA', FacilityType: 'SDH' },
    { Block: 'DASCROI', PHC: 'SDH RUKSHMANIBEN HOSPITAL', FacilityType: 'SDH' },
    { Block: 'DASCROI', PHC: 'CHC NANDEJ', FacilityType: 'CHC' },
    // DETROJ
    { Block: 'DETROJ', PHC: 'KATOSAN ROAD', FacilityType: 'PHC' },
    { Block: 'DETROJ', PHC: 'RAMPURA', FacilityType: 'PHC' },
    { Block: 'DETROJ', PHC: 'RUDATAL', FacilityType: 'PHC' },
    { Block: 'DETROJ', PHC: 'CHC DETROJ', FacilityType: 'CHC' },
    // DHANDHUKA
    { Block: 'DHANDHUKA', PHC: 'AKARU', FacilityType: 'PHC' },
    { Block: 'DHANDHUKA', PHC: 'URBAN', FacilityType: 'UPHC' },
    { Block: 'DHANDHUKA', PHC: 'HADALA', FacilityType: 'PHC' },
    { Block: 'DHANDHUKA', PHC: 'VAGAD', FacilityType: 'PHC' },
    { Block: 'DHANDHUKA', PHC: 'SDH DHANDHUKA', FacilityType: 'SDH' },
    // DHOLERA
    { Block: 'DHOLERA', PHC: 'BHADIYAD', FacilityType: 'PHC' },
    { Block: 'DHOLERA', PHC: 'DHOLERA', FacilityType: 'PHC' },
    { Block: 'DHOLERA', PHC: 'PIPLI', FacilityType: 'PHC' },
    { Block: 'DHOLERA', PHC: 'CHC DHOLERA', FacilityType: 'CHC' },
    // DHOLKA
    { Block: 'DHOLKA', PHC: 'AMBALIYARA', FacilityType: 'PHC' },
    { Block: 'DHOLKA', PHC: 'CHALODA', FacilityType: 'PHC' },
    { Block: 'DHOLKA', PHC: 'URBAN', FacilityType: 'UPHC' },
    { Block: 'DHOLKA', PHC: 'GANOL', FacilityType: 'PHC' },
    { Block: 'DHOLKA', PHC: 'KOTH', FacilityType: 'PHC' },
    { Block: 'DHOLKA', PHC: 'TRANSAD', FacilityType: 'PHC' },
    { Block: 'DHOLKA', PHC: 'VATAMAN', FacilityType: 'PHC' },
    { Block: 'DHOLKA', PHC: 'CHC DHOLKA', FacilityType: 'CHC' },
    // MANDAL
    { Block: 'MANDAL', PHC: 'SITAPUR', FacilityType: 'PHC' },
    { Block: 'MANDAL', PHC: 'VITHALAPUR', FacilityType: 'PHC' },
    { Block: 'MANDAL', PHC: 'TRENT', FacilityType: 'PHC' },
    { Block: 'MANDAL', PHC: 'CHC MANDAL', FacilityType: 'CHC' },
    // SANAND
    { Block: 'SANAND', PHC: 'CHEKHLA', FacilityType: 'PHC' },
    { Block: 'SANAND', PHC: 'MODASAR', FacilityType: 'PHC' },
    { Block: 'SANAND', PHC: 'URBAN', FacilityType: 'UPHC' },
    { Block: 'SANAND', PHC: 'SANATHAL', FacilityType: 'PHC' },
    { Block: 'SANAND', PHC: 'SHELA', FacilityType: 'PHC' },
    { Block: 'SANAND', PHC: 'UPARDAL', FacilityType: 'PHC' },
    { Block: 'SANAND', PHC: 'VIROCHANNAGAR', FacilityType: 'PHC' },
    { Block: 'SANAND', PHC: 'ZOLAPUR', FacilityType: 'PHC' },
    { Block: 'SANAND', PHC: 'CHC SANAND', FacilityType: 'CHC' },
    // VIRAMGAM
    { Block: 'VIRAMGAM', PHC: 'GORAIYA', FacilityType: 'PHC' },
    { Block: 'VIRAMGAM', PHC: 'KARAKTHAL', FacilityType: 'PHC' },
    { Block: 'VIRAMGAM', PHC: 'KUMARKHAN', FacilityType: 'PHC' },
    { Block: 'VIRAMGAM', PHC: 'MANIPURA', FacilityType: 'PHC' },
    { Block: 'VIRAMGAM', PHC: 'VANSVA', FacilityType: 'PHC' },
    { Block: 'VIRAMGAM', PHC: 'URBAN', FacilityType: 'UPHC' },
    { Block: 'VIRAMGAM', PHC: 'SDH VIRAMGAM', FacilityType: 'SDH' }
  ];

  window.addEventListener('DOMContentLoaded', initApp);

  /**
   * Initializes the PWA application
   */
  function initApp() {
    loadSavedTrainingsFromStorage();
    registerServiceWorker();
    setupPwaInstall();
    setupHeaderInputs();
    setupTrainingSwitcher();
    setupTabs();
    setupFilterEvents();
    setupNewTrainingModal();
    setupTrainingLoadModal();
    setupRecordBatchModal();
    setupUploadModal();

    // Load active training (cancer baseline or user last active)
    switchActiveTraining(APP_STATE.activeTrainingId);
  }

  function loadSavedTrainingsFromStorage() {
    try {
      const stored = localStorage.getItem('wtip_custom_trainings');
      if (stored) {
        APP_STATE.customTrainings = JSON.parse(stored);
      }
      APP_STATE.activeTrainingId = localStorage.getItem('wtip_active_training_id') || 'ab_shwp_tot';
    } catch (e) {
      console.warn('Failed to parse saved trainings:', e);
      APP_STATE.customTrainings = {};
    }
  }

  function saveTrainingsToStorage() {
    try {
      localStorage.setItem('wtip_custom_trainings', JSON.stringify(APP_STATE.customTrainings));
      localStorage.setItem('wtip_active_training_id', APP_STATE.activeTrainingId);
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  }

  /**
   * Registers offline Service Worker
   */
  function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => console.log('[PWA] Service Worker registered:', reg.scope))
        .catch((err) => console.warn('[PWA] Service Worker registration failed:', err));
    }
  }

  /**
   * Captures the beforeinstallprompt event for Desktop & Mobile PWA install,
   * or shows friendly install instructions if running offline / file protocol.
   */
  function setupPwaInstall() {
    const installBtn = document.getElementById('btnInstallApp');
    const installModal = document.getElementById('modalInstallInstructions');
    const closeBtn = document.getElementById('btnCloseInstallModal');
    const gotItBtn = document.getElementById('btnGotItInstallModal');

    if (!installBtn) return;

    installBtn.style.display = 'inline-flex';

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      APP_STATE.pwaPrompt = e;
      installBtn.style.display = 'inline-flex';
    });

    installBtn.addEventListener('click', async () => {
      if (APP_STATE.pwaPrompt) {
        APP_STATE.pwaPrompt.prompt();
        const choice = await APP_STATE.pwaPrompt.userChoice;
        if (choice.outcome === 'accepted') {
          installBtn.style.display = 'none';
        }
        APP_STATE.pwaPrompt = null;
      } else {
        if (installModal) installModal.classList.add('active');
      }
    });

    closeBtn?.addEventListener('click', () => installModal?.classList.remove('active'));
    gotItBtn?.addEventListener('click', () => installModal?.classList.remove('active'));
    installModal?.addEventListener('click', (e) => {
      if (e.target === installModal) installModal.classList.remove('active');
    });

    window.addEventListener('appinstalled', () => {
      installBtn.style.display = 'none';
      console.log('[PWA] App successfully installed');
    });
  }

  /**
   * Configures Training Programme title input
   */
  function setupHeaderInputs() {
    const titleInput = document.getElementById('txtTrainingName');
    if (!titleInput) return;

    titleInput.addEventListener('input', (e) => {
      APP_STATE.trainingName = e.target.value;
      if (APP_STATE.data) {
        APP_STATE.data.trainingName = APP_STATE.trainingName;
      }
      if (APP_STATE.activeTrainingId !== 'cancer_baseline' && APP_STATE.customTrainings[APP_STATE.activeTrainingId]) {
        APP_STATE.customTrainings[APP_STATE.activeTrainingId].trainingName = APP_STATE.trainingName;
        saveTrainingsToStorage();
        updateTrainingSwitcherOptions();
      }
      updateDynamicTitles();
    });

    // Export PDF & Excel buttons
    document.getElementById('btnExportPDF')?.addEventListener('click', () => {
      if (APP_STATE.data) {
        ReportPDF.generateMasterPDF(APP_STATE.data, { trainingName: APP_STATE.trainingName });
      }
    });

    document.getElementById('btnExportExcel')?.addEventListener('click', () => {
      if (APP_STATE.data) {
        ReportExcel.exportWorkbook(APP_STATE.data);
      }
    });
  }

  function updateDynamicTitles() {
    const t = APP_STATE.trainingName ? `${APP_STATE.trainingName} — Dashboard` : 'Training Intelligence Platform';
    document.title = t;
  }

  /**
   * Setup Active Training Switcher Dropdown & Selection Tabs
   */
  function setupTrainingSwitcher() {
    const sel = document.getElementById('selActiveTraining');
    if (sel) {
      sel.addEventListener('change', (e) => {
        switchActiveTraining(e.target.value);
      });
    }

    document.getElementById('btnBarNewTraining')?.addEventListener('click', () => {
      document.getElementById('btnOpenNewTrainingModal')?.click();
    });

    updateTrainingSwitcherOptions();
  }

  function updateTrainingSwitcherOptions() {
    const sel = document.getElementById('selActiveTraining');
    const tabsContainer = document.getElementById('trainingTabsContainer');

    const allTrainings = [
      {
        id: 'ab_shwp_tot',
        name: 'AB-SHWP District ToT',
        target: 36,
        trained: 38,
        coverage: '105.6%'
      },
      {
        id: 'cancer_baseline',
        name: 'Common Cancer Screening (Baseline)',
        target: 742,
        trained: 700,
        coverage: '94.3%'
      }
    ];

    Object.keys(APP_STATE.customTrainings).forEach((id) => {
      if (id !== 'cancer_baseline' && id !== 'ab_shwp_tot') {
        const tr = APP_STATE.customTrainings[id];
        allTrainings.push({
          id: id,
          name: tr.trainingName || 'Untitled Training',
          target: tr.kpi?.total_staff || 0,
          trained: tr.kpi?.total_trained || 0,
          coverage: (tr.kpi?.coverage || 0) + '%'
        });
      }
    });

    // Update Dropdown
    if (sel) {
      let h = '';
      allTrainings.forEach((t) => {
        h += `<option value="${t.id}">${t.name} (Load: ${t.target} | Trained: ${t.trained})</option>`;
      });
      sel.innerHTML = h;
      sel.value = APP_STATE.activeTrainingId;
    }

    // Update Selection Tabs Bar
    if (tabsContainer) {
      let th = '';
      allTrainings.forEach((t) => {
        const isActive = t.id === APP_STATE.activeTrainingId;
        const icon = isActive ? '✓' : '🎓';
        th += `
          <button class="training-tab-pill ${isActive ? 'active' : ''}" 
                  onclick="window.switchActiveTraining('${t.id}')"
                  title="Switch to ${t.name}">
            <span>${icon} <b>${t.name}</b></span>
            <span class="pill-meta">Load: ${t.target} | Trained: ${t.trained} (${t.coverage})</span>
          </button>
        `;
      });
      tabsContainer.innerHTML = th;
    }
  }

  window.switchActiveTraining = switchActiveTraining;

  function switchActiveTraining(trainingId) {
    APP_STATE.activeTrainingId = trainingId;
    saveTrainingsToStorage();

    const titleInput = document.getElementById('txtTrainingName');

    if (trainingId === 'ab_shwp_tot') {
      loadABShwpData();
    } else if (trainingId === 'cancer_baseline') {
      loadBaselineData();
    } else if (APP_STATE.customTrainings[trainingId]) {
      const tr = APP_STATE.customTrainings[trainingId];
      APP_STATE.data = tr;
      APP_STATE.trainingName = tr.trainingName || '';
      if (titleInput) titleInput.value = APP_STATE.trainingName;

      populateFilters();
      renderAllViews();
      updateDynamicTitles();
    }

    updateTrainingSwitcherOptions();
  }

  /**
   * Loads AB-SHWP District ToT dataset (Target: 9 Talukas x 4 = 36, 38 Trained)
   */
  function loadABShwpData() {
    const title = 'AB-SHWP District ToT';
    const cadres = ['MO', 'AYUSH MO', 'THV', 'THO', 'FHW', 'TMPHS'];
    const cadreConfig = UniversalEngine.createCadreConfig(cadres);

    const rawParticipants = [
      { SrNo: 1, Name: "Participant (MO-DHOLKA-01)", Prefix: "DR", Cadre: "MO", RawDesig: "MO", DutyPlace: "PHC", PHC: "VATAMAN", Block: "DHOLKA" },
      { SrNo: 2, Name: "Participant (MO-BAVLA-02)", Prefix: "DR", Cadre: "MO", RawDesig: "MO", DutyPlace: "PHC", PHC: "SHIYAL", Block: "BAVLA" },
      { SrNo: 3, Name: "Participant (AYUSH MO-DHANDHUKA-03)", Prefix: "DR", Cadre: "AYUSH MO", RawDesig: "Ayush mo", DutyPlace: "PHC", PHC: "AKARU", Block: "DHANDHUKA" },
      { SrNo: 4, Name: "Participant (MO-DASCROI-04)", Prefix: "DR", Cadre: "MO", RawDesig: "MO", DutyPlace: "PHC", PHC: "VAHELAL", Block: "DASCROI" },
      { SrNo: 5, Name: "Participant (AYUSH MO-BAVLA-05)", Prefix: "DR", Cadre: "AYUSH MO", RawDesig: "AYUSH MO", DutyPlace: "PHC", PHC: "NANODARA", Block: "BAVLA" },
      { SrNo: 6, Name: "Participant (THV-VIRAMGAM-06)", Prefix: "SMT", Cadre: "THV", RawDesig: "THV", DutyPlace: "THO OFFICE", PHC: "GORAIYA", Block: "VIRAMGAM" },
      { SrNo: 7, Name: "Participant (THV-DASCROI-07)", Prefix: "MS", Cadre: "THV", RawDesig: "THV", DutyPlace: "THO OFFICE", PHC: "ASLALI", Block: "DASCROI" },
      { SrNo: 8, Name: "Participant (AYUSH MO-DHOLKA-08)", Prefix: "DR", Cadre: "AYUSH MO", RawDesig: "Ayush Mo", DutyPlace: "PHC", PHC: "CHALODA", Block: "DHOLKA" },
      { SrNo: 9, Name: "Participant (AYUSH MO-DETROJ-09)", Prefix: "DR", Cadre: "AYUSH MO", RawDesig: "AYUSH Medical officer", DutyPlace: "PHC", PHC: "KATOSAN ROAD", Block: "DETROJ" },
      { SrNo: 10, Name: "Participant (THV-DETROJ-10)", Prefix: "SMT", Cadre: "THV", RawDesig: "THV", DutyPlace: "THO OFFICE", PHC: "RUDATAL", Block: "DETROJ" },
      { SrNo: 11, Name: "Participant (MO-DHANDHUKA-11)", Prefix: "DR", Cadre: "MO", RawDesig: "MO", DutyPlace: "PHC", PHC: "HADALA", Block: "DHANDHUKA" },
      { SrNo: 12, Name: "Participant (THV-DHOLERA-12)", Prefix: "SMT", Cadre: "THV", RawDesig: "THV", DutyPlace: "THO OFFICE", PHC: "BHADIYAD", Block: "DHOLERA" },
      { SrNo: 13, Name: "Participant (AYUSH MO-DHOLKA-13)", Prefix: "DR", Cadre: "AYUSH MO", RawDesig: "Ayush M.O", DutyPlace: "PHC", PHC: "KOTH", Block: "DHOLKA" },
      { SrNo: 14, Name: "Participant (THV-DHANDHUKA-14)", Prefix: "SMT", Cadre: "THV", RawDesig: "THV", DutyPlace: "THO OFFICE", PHC: "VAGAD", Block: "DHANDHUKA" },
      { SrNo: 15, Name: "Participant (AYUSH MO-DASCROI-15)", Prefix: "DR", Cadre: "AYUSH MO", RawDesig: "Ayush mo", DutyPlace: "PHC", PHC: "VAHELAL", Block: "DASCROI" },
      { SrNo: 16, Name: "Participant (THO-MANDAL-16)", Prefix: "DR", Cadre: "THO", RawDesig: "THO", DutyPlace: "THO OFFICE", PHC: "TRENT", Block: "MANDAL" },
      { SrNo: 17, Name: "Participant (THO-DHANDHUKA-17)", Prefix: "DR", Cadre: "THO", RawDesig: "THO", DutyPlace: "THO OFFICE", PHC: "HADALA", Block: "DHANDHUKA" },
      { SrNo: 18, Name: "Participant (FHW-DHOLKA-18)", Prefix: "SMT", Cadre: "FHW", RawDesig: "FHW", DutyPlace: "PHC", PHC: "AMBALIYARA", Block: "DHOLKA" },
      { SrNo: 19, Name: "Participant (AYUSH MO-BAVLA-19)", Prefix: "DR", Cadre: "AYUSH MO", RawDesig: "Ayush MO", DutyPlace: "PHC", PHC: "KAVITHA", Block: "BAVLA" },
      { SrNo: 20, Name: "Participant (FHW-SANAND-20)", Prefix: "SMT", Cadre: "FHW", RawDesig: "FHW", DutyPlace: "PHC", PHC: "MODASAR", Block: "SANAND" },
      { SrNo: 21, Name: "Participant (MO-DETROJ-21)", Prefix: "DR", Cadre: "MO", RawDesig: "MO", DutyPlace: "PHC", PHC: "RAMPURA", Block: "DETROJ" },
      { SrNo: 22, Name: "Participant (MO-DHOLKA-22)", Prefix: "DR", Cadre: "MO", RawDesig: "MO", DutyPlace: "PHC", PHC: "AMBALIYARA", Block: "DHOLKA" },
      { SrNo: 23, Name: "Participant (THV-MANDAL-23)", Prefix: "MS", Cadre: "THV", RawDesig: "THV", DutyPlace: "THO OFFICE", PHC: "SITAPUR", Block: "MANDAL" },
      { SrNo: 24, Name: "Participant (AYUSH MO-VIRAMGAM-24)", Prefix: "DR", Cadre: "AYUSH MO", RawDesig: "AYUSH MO", DutyPlace: "PHC", PHC: "KARAKTHAL", Block: "VIRAMGAM" },
      { SrNo: 25, Name: "Participant (AYUSH MO-VIRAMGAM-25)", Prefix: "DR", Cadre: "AYUSH MO", RawDesig: "AYUSH MO", DutyPlace: "PHC", PHC: "KUMARKHAN", Block: "VIRAMGAM" },
      { SrNo: 26, Name: "Participant (MO-VIRAMGAM-26)", Prefix: "DR", Cadre: "MO", RawDesig: "MO", DutyPlace: "PHC", PHC: "KARAKTHAL", Block: "VIRAMGAM" },
      { SrNo: 27, Name: "Participant (AYUSH MO-SANAND-27)", Prefix: "DR", Cadre: "AYUSH MO", RawDesig: "AYUSH MO", DutyPlace: "PHC", PHC: "VIROCHANNAGAR", Block: "SANAND" },
      { SrNo: 28, Name: "Participant (MO-SANAND-28)", Prefix: "DR", Cadre: "MO", RawDesig: "MO", DutyPlace: "PHC", PHC: "SANATHAL", Block: "SANAND" },
      { SrNo: 29, Name: "Participant (MO-DHOLERA-29)", Prefix: "DR", Cadre: "MO", RawDesig: "MO", DutyPlace: "PHC", PHC: "PIPLI", Block: "DHOLERA" },
      { SrNo: 30, Name: "Participant (AYUSH MO-MANDAL-30)", Prefix: "DR", Cadre: "AYUSH MO", RawDesig: "AYUSH MO", DutyPlace: "PHC", PHC: "VITHALAPUR", Block: "MANDAL" },
      { SrNo: 31, Name: "Participant (TMPHS-BAVLA-31)", Prefix: "MR", Cadre: "TMPHS", RawDesig: "TMPHS", DutyPlace: "UPHC", PHC: "URBAN", Block: "BAVLA" },
      { SrNo: 32, Name: "Participant (MO-SANAND-32)", Prefix: "DR", Cadre: "MO", RawDesig: "MO", DutyPlace: "PHC", PHC: "MODASAR", Block: "SANAND" },
      { SrNo: 33, Name: "Participant (AYUSH MO-DETROJ-33)", Prefix: "DR", Cadre: "AYUSH MO", RawDesig: "AYUSH MO", DutyPlace: "PHC", PHC: "RAMPURA", Block: "DETROJ" },
      { SrNo: 34, Name: "Participant (AYUSH MO-SANAND-34)", Prefix: "MRS", Cadre: "AYUSH MO", RawDesig: "AYUSH MO", DutyPlace: "PHC", PHC: "ZOLAPUR", Block: "SANAND" },
      { SrNo: 35, Name: "Participant (AYUSH MO-DHOLERA-35)", Prefix: "DR", Cadre: "AYUSH MO", RawDesig: "AYUSH MO", DutyPlace: "PHC", PHC: "PIPLI", Block: "DHOLERA" },
      { SrNo: 36, Name: "Participant (THO-DETROJ-36)", Prefix: "DR", Cadre: "THO", RawDesig: "THO", DutyPlace: "THO OFFICE", PHC: "KATOSAN ROAD", Block: "DETROJ" },
      { SrNo: 37, Name: "Participant (AYUSH MO-DASCROI-37)", Prefix: "DR", Cadre: "AYUSH MO", RawDesig: "AYUSH MO", DutyPlace: "PHC", PHC: "NANDEJ", Block: "DASCROI" },
      { SrNo: 38, Name: "Participant (MO-MANDAL-38)", Prefix: "DR", Cadre: "MO", RawDesig: "MO", DutyPlace: "PHC", PHC: "VITHALAPUR", Block: "MANDAL" }
    ];

    // Master 47 PHCs of 9 Talukas
    const phcMaster = AHMEDABAD_MASTER_FACILITIES.filter(f => f.FacilityType === 'PHC' || f.FacilityType === 'UPHC');

    const phcData = [];
    const distributedBlockTarget = {};

    phcMaster.forEach(fac => {
      const b = fac.Block;
      distributedBlockTarget[b] = distributedBlockTarget[b] || 0;
      let targetForThisPHC = 0;
      if (distributedBlockTarget[b] < 4) {
        targetForThisPHC = 1;
        distributedBlockTarget[b] += 1;
      }

      const item = {
        Block: fac.Block,
        PHC: fac.PHC,
        FacilityType: fac.FacilityType,
        targetMode: 'pooled',
        Total: targetForThisPHC,
        Trained: 0,
        Untrained: targetForThisPHC,
        Excess: 0,
        Coverage: 0
      };
      cadres.forEach(c => {
        item[c] = 0;
        item[`${c}_tr`] = 0;
        item[`${c}_un`] = 0;
        item[`${c}_ex`] = 0;
      });
      phcData.push(item);
    });

    // Ensure blocks with 3 PHCs (MANDAL, DETROJ, DHOLERA) sum to 4
    ['MANDAL', 'DETROJ', 'DHOLERA'].forEach(b => {
      const remaining = 4 - (distributedBlockTarget[b] || 0);
      if (remaining > 0) {
        const firstPHC = phcData.find(r => r.Block === b);
        if (firstPHC) {
          firstPHC.Total += remaining;
          firstPHC.Untrained += remaining;
          distributedBlockTarget[b] += remaining;
        }
      }
    });

    const matchedList = [];
    rawParticipants.forEach(p => {
      let found = phcData.find(r => r.Block === p.Block && r.PHC === p.PHC);
      if (!found) {
        found = phcData.find(r => r.Block === p.Block);
      }
      if (found) {
        found.Trained += 1;
        found[`${p.Cadre}_tr`] = (found[`${p.Cadre}_tr`] || 0) + 1;
        found.Untrained = Math.max(0, found.Total - found.Trained);
        found.Excess = Math.max(0, found.Trained - found.Total);
        found.Coverage = found.Total > 0 ? Number(((found.Trained / found.Total) * 100).toFixed(1)) : 100;
        matchedList.push({
          SrNo: p.SrNo,
          Name: `${p.Prefix} ${p.Name.replace(/^Dr\.\s*|^Smt\.\s*|^Ms\.\s*|^Mr\.\s*|^Mrs\.\s*/i, '')}`,
          Cadre: p.Cadre,
          Designation: p.RawDesig,
          PlaceOfDuty: p.DutyPlace,
          PHC: found.PHC,
          Block: p.Block,
          Confidence: 1.0,
          RawFacility: p.DutyPlace
        });
      }
    });

    // Build Block Data (Load: 9 blocks x 4 = 36)
    const blocks = ['BAVLA', 'DASCROI', 'DETROJ', 'DHANDHUKA', 'DHOLERA', 'DHOLKA', 'MANDAL', 'SANAND', 'VIRAMGAM'];
    const blockData = blocks.map(b => {
      const phcsInBlock = phcData.filter(r => r.Block === b);
      const bTrained = phcsInBlock.reduce((acc, r) => acc + r.Trained, 0);
      const bTarget = 4;
      const bUntrained = Math.max(0, bTarget - bTrained);
      const bExcess = Math.max(0, bTrained - bTarget);
      const bCov = bTarget > 0 ? Number(((bTrained / bTarget) * 100).toFixed(1)) : 0;

      const bObj = {
        Block: b,
        Total: bTarget,
        Trained: bTrained,
        Untrained: bUntrained,
        Excess: bExcess,
        Coverage: bCov,
        phcCount: phcsInBlock.length
      };

      cadres.forEach(c => {
        let cTr = 0;
        phcsInBlock.forEach(r => cTr += (r[`${c}_tr`] || 0));
        bObj[c] = 0;
        bObj[`${c}_tr`] = cTr;
        bObj[`${c}_un`] = 0;
        bObj[`${c}_ex`] = cTr;
      });

      return bObj;
    });

    // District Totals
    const totalTarget = 36;
    const totalTrained = matchedList.length; // 38
    let totalUntrained = 0;
    let totalExcess = 0;

    blockData.forEach(b => {
      totalUntrained += b.Untrained;
      totalExcess += b.Excess;
    });

    const cadreData = cadres.map(c => {
      let trCount = 0;
      matchedList.forEach(p => {
        if (p.Cadre === c) trCount++;
      });
      return {
        cadre: c,
        total: 0,
        trained: trCount,
        untrained: 0,
        excess: trCount,
        coverage: 100
      };
    });

    const batches = [
      {
        BatchNo: 1,
        Block: 'DHOLERA',
        PaxCount: 1,
        PHCs: 'Remaining ToT Nominations (Dholera: 1)',
        TentativeDate: 'Next Upcoming District ToT'
      }
    ];

    const abDataset = {
      id: 'ab_shwp_tot',
      trainingName: title,
      cadres: cadres,
      cadreConfig: cadreConfig,
      phc_data: phcData,
      block_data: blockData,
      cadre_data: cadreData,
      trained_list: matchedList,
      batches: batches,
      kpi: {
        total_staff: totalTarget,
        total_trained: totalTrained,
        total_untrained: totalUntrained,
        total_excess: totalExcess,
        coverage: Number(((totalTrained / totalTarget) * 100).toFixed(1)),
        blocks: 9,
        phcs: 47,
        generated_date: new Date().toLocaleDateString('en-IN')
      }
    };

    APP_STATE.data = abDataset;
    APP_STATE.trainingName = title;

    const titleInput = document.getElementById('txtTrainingName');
    if (titleInput) titleInput.value = title;

    populateFilters();
    renderAllViews();
    updateDynamicTitles();
  }

  /**
   * Sets up 6 main navigation tabs
   */
  function setupTabs() {
    const tabs = document.querySelectorAll('.nav-tab');
    const panes = document.querySelectorAll('.tab-pane');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const targetIdx = parseInt(tab.dataset.tab, 10);
        APP_STATE.activeTab = targetIdx;

        tabs.forEach((t) => t.classList.remove('active'));
        panes.forEach((p) => p.classList.remove('active'));

        tab.classList.add('active');
        const activePane = document.getElementById(`tabPane${targetIdx}`);
        if (activePane) activePane.classList.add('active');

        // Toggle global filter visibility (hidden on batch planner & heat map for maximum space)
        const filterStrip = document.getElementById('globalFilterStrip');
        if (filterStrip) {
          filterStrip.style.display = (targetIdx === 4 || targetIdx === 5) ? 'none' : 'flex';
        }

        // Trigger chart resize if entering Overview
        if (targetIdx === 0 && APP_STATE.charts) {
          Object.values(APP_STATE.charts).forEach((c) => c && c.resize && c.resize());
        }
      });
    });
  }

  /**
   * Sets up cascading global filters
   */
  function setupFilterEvents() {
    const selBlock = document.getElementById('fBlock');
    const selFacType = document.getElementById('fFacType');
    const selFacility = document.getElementById('fFacility');
    const selCadre = document.getElementById('fCadre');
    const txtSearch = document.getElementById('txtGlobalSearch');
    const btnClear = document.getElementById('btnClearFilters');

    selBlock?.addEventListener('change', (e) => {
      APP_STATE.filters.block = e.target.value;
      populateFacilityDropdown();
      renderAllViews();
    });

    selFacType?.addEventListener('change', (e) => {
      APP_STATE.filters.facilityType = e.target.value;
      populateFacilityDropdown();
      renderAllViews();
    });

    selFacility?.addEventListener('change', (e) => {
      APP_STATE.filters.facility = e.target.value;
      renderAllViews();
    });

    selCadre?.addEventListener('change', (e) => {
      APP_STATE.filters.cadre = e.target.value;
      renderAllViews();
    });

    txtSearch?.addEventListener('input', (e) => {
      APP_STATE.filters.search = e.target.value.toLowerCase().trim();
      renderTrainedStaffList();
    });

    btnClear?.addEventListener('click', () => {
      APP_STATE.filters = { block: '', facilityType: '', facility: '', cadre: '', search: '' };
      if (selBlock) selBlock.value = '';
      if (selFacType) selFacType.value = '';
      if (selFacility) selFacility.value = '';
      if (selCadre) selCadre.value = '';
      if (txtSearch) txtSearch.value = '';
      populateFacilityDropdown();
      renderAllViews();
    });

    document.getElementById('selStaffSort')?.addEventListener('change', renderTrainedStaffList);
  }

  /**
   * Populates the filter dropdowns based on current data
   */
  function populateFilters() {
    if (!APP_STATE.data) return;

    // Blocks
    const selBlock = document.getElementById('fBlock');
    if (selBlock) {
      const currentVal = selBlock.value;
      selBlock.innerHTML = `<option value="">All Blocks (${APP_STATE.data.block_data.length})</option>`;
      APP_STATE.data.block_data.forEach((b) => {
        selBlock.innerHTML += `<option value="${b.Block}">${b.Block}</option>`;
      });
      selBlock.value = currentVal;
    }

    // Facility Types
    const selFacType = document.getElementById('fFacType');
    if (selFacType) {
      const currentVal = selFacType.value;
      const types = new Set(APP_STATE.data.phc_data.map((p) => p.FacilityType || 'PHC'));
      selFacType.innerHTML = '<option value="">All Facility Types</option>';
      types.forEach((t) => {
        selFacType.innerHTML += `<option value="${t}">${t}</option>`;
      });
      selFacType.value = currentVal;
    }

    // Cadres
    const selCadre = document.getElementById('fCadre');
    if (selCadre) {
      const currentVal = selCadre.value;
      selCadre.innerHTML = '<option value="">All Cadres</option>';
      APP_STATE.data.cadres.forEach((c) => {
        selCadre.innerHTML += `<option value="${c}">${c}</option>`;
      });
      selCadre.value = currentVal;
    }

    populateFacilityDropdown();
  }

  function populateFacilityDropdown() {
    const selFacility = document.getElementById('fFacility');
    if (!selFacility || !APP_STATE.data) return;

    const b = APP_STATE.filters.block;
    const ft = APP_STATE.filters.facilityType;

    const filtered = APP_STATE.data.phc_data.filter((p) => {
      if (b && p.Block !== b) return false;
      if (ft && p.FacilityType !== ft) return false;
      return true;
    });

    selFacility.innerHTML = `<option value="">All Facilities (${filtered.length})</option>`;
    filtered.forEach((p) => {
      selFacility.innerHTML += `<option value="${p.PHC}">${p.PHC} (${p.Block})</option>`;
    });
  }

  /**
   * Loads the built-in Master Cancer baseline dataset
   */
  function loadBaselineData() {
    if (typeof CANCER_MASTER_DATA === 'undefined') {
      console.error('CANCER_MASTER_DATA is not defined');
      return;
    }

    // Deep clone baseline data
    const raw = JSON.parse(JSON.stringify(CANCER_MASTER_DATA));

    const cadres = ['MO', 'CHO', 'SN', 'FHW', 'MPHW'];
    raw.cadres = cadres;
    raw.cadreConfig = UniversalEngine.createCadreConfig(cadres);
    raw.trainingName = 'Common Cancer Screening Training';

    APP_STATE.data = raw;
    APP_STATE.trainingName = raw.trainingName;

    const titleInput = document.getElementById('txtTrainingName');
    if (titleInput) titleInput.value = raw.trainingName;

    populateFilters();
    renderAllViews();
    updateDynamicTitles();
  }

  /**
   * Master render method: updates all 6 tabs reactively
   */
  function renderAllViews() {
    renderKPIs();
    renderCharts();
    renderBlockProgress();
    renderPHCTable();
    renderTrainedStaffList();
    renderBatchPlanner();
    renderHeatMap();
  }

  /**
   * Computes filtered subset of data based on active filters
   */
  function getFilteredData() {
    if (!APP_STATE.data) return null;
    const f = APP_STATE.filters;

    const filteredPHCs = APP_STATE.data.phc_data.filter((p) => {
      if (f.block && p.Block !== f.block) return false;
      if (f.facilityType && p.FacilityType !== f.facilityType) return false;
      if (f.facility && p.PHC !== f.facility) return false;
      return true;
    });

    // Check if any filter is active
    const isFiltered = Boolean(f.block || f.facilityType || f.facility || f.cadre);

    // If no filter is active, return the authoritative master district KPIs directly
    if (!isFiltered && APP_STATE.data.kpi) {
      return {
        phcs: filteredPHCs,
        kpi: APP_STATE.data.kpi
      };
    }

    // If filtering by Block only (and no cadre filter), use the Block Data KPI directly
    if (f.block && !f.cadre && !f.facility && !f.facilityType && APP_STATE.data.block_data) {
      const bObj = APP_STATE.data.block_data.find((b) => b.Block === f.block);
      if (bObj) {
        return {
          phcs: filteredPHCs,
          kpi: {
            total_staff: bObj.Total,
            total_trained: bObj.Trained,
            total_untrained: bObj.Untrained,
            total_excess: bObj.Excess,
            coverage: bObj.Coverage,
            blocks: 1,
            phcs: filteredPHCs.length
          }
        };
      }
    }

    // Recompute KPIs for filtered view
    let totalSanc = 0;
    let totalTr = 0;
    let totalUn = 0;
    let totalEx = 0;

    const cadreKey = f.cadre;

    filteredPHCs.forEach((p) => {
      if (cadreKey) {
        const s = p[cadreKey] || 0;
        const tr = p[`${cadreKey}_tr`] || 0;
        const un = p[`${cadreKey}_un`] || 0;
        const ex = p[`${cadreKey}_ex`] || 0;
        totalSanc += s;
        totalTr += tr;
        totalUn += un;
        totalEx += ex;
      } else {
        totalSanc += p.Total;
        totalTr += p.Trained;
        totalUn += p.Untrained;
        totalEx += p.Excess || 0;
      }
    });

    const cov = totalSanc > 0 ? Number(((totalTr / totalSanc) * 100).toFixed(1)) : 0;
    const blocksCount = new Set(filteredPHCs.map((p) => p.Block)).size;

    return {
      phcs: filteredPHCs,
      kpi: {
        total_staff: totalSanc,
        total_trained: totalTr,
        total_untrained: totalUn,
        total_excess: totalEx,
        coverage: cov,
        blocks: blocksCount,
        phcs: filteredPHCs.length
      }
    };
  }

  // ========================================================
  // TAB 1: OVERVIEW & KPIS
  // ========================================================
  function renderKPIs() {
    const fd = getFilteredData();
    if (!fd) return;

    const k = fd.kpi;

    document.getElementById('kpiTotalStaff').textContent = k.total_staff.toLocaleString();
    const subLabel = document.getElementById('kpiTotalStaffSub');
    if (subLabel) subLabel.textContent = 'Training Load';

    document.getElementById('kpiTrained').textContent = k.total_trained.toLocaleString();
    document.getElementById('kpiUntrained').textContent = k.total_untrained.toLocaleString();
    document.getElementById('kpiCoverage').textContent = `${k.coverage}%`;
    document.getElementById('kpiBlocks').textContent = k.blocks;
    document.getElementById('kpiPHCs').textContent = k.phcs;

    // Excess banner
    const banner = document.getElementById('excessBanner');
    const excessNote = document.getElementById('excessNoteText');
    if (banner && excessNote) {
      if (k.total_excess > 0) {
        excessNote.textContent = `${k.total_excess} participants trained beyond target load — all are counted in the trained total.`;
        banner.style.display = 'flex';
      } else {
        banner.style.display = 'none';
      }
    }
  }

  function renderCharts() {
    if (!APP_STATE.data || typeof Chart === 'undefined') return;

    const d = APP_STATE.data;

    // 1. Status Donut Chart
    const ctxStatus = document.getElementById('chartStatusDonut');
    if (ctxStatus) {
      if (APP_STATE.charts.status) APP_STATE.charts.status.destroy();
      APP_STATE.charts.status = new Chart(ctxStatus, {
        type: 'doughnut',
        data: {
          labels: ['Trained Staff', 'Untrained Staff'],
          datasets: [{
            data: [d.kpi.total_trained, d.kpi.total_untrained],
            backgroundColor: ['#00D4B4', '#FF5252'],
            borderColor: '#0D1B2E',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { color: '#DCE8F5', font: { size: 11 } } }
          }
        }
      });
    }

    // 2. Cadre Sanctioned vs Trained Bar
    const ctxCadre = document.getElementById('chartCadreBar');
    if (ctxCadre) {
      if (APP_STATE.charts.cadre) APP_STATE.charts.cadre.destroy();
      APP_STATE.charts.cadre = new Chart(ctxCadre, {
        type: 'bar',
        data: {
          labels: d.cadre_data.map((c) => c.cadre),
          datasets: [
            {
              label: 'Target Load',
              data: d.cadre_data.map((c) => c.total),
              backgroundColor: '#1E4976',
              borderRadius: 4
            },
            {
              label: 'Trained',
              data: d.cadre_data.map((c) => c.trained),
              backgroundColor: '#00D4B4',
              borderRadius: 4
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { color: '#DCE8F5', font: { size: 11 } } }
          },
          scales: {
            x: { ticks: { color: '#7A9BBF' }, grid: { display: false } },
            y: { ticks: { color: '#7A9BBF' }, grid: { color: '#1A2E48' } }
          }
        }
      });
    }

    // 3. Block-wise Coverage Ranking
    const ctxBlockRank = document.getElementById('chartBlockRank');
    if (ctxBlockRank) {
      if (APP_STATE.charts.blockRank) APP_STATE.charts.blockRank.destroy();
      const sortedBlocks = [...d.block_data].sort((a, b) => b.Coverage - a.Coverage);
      APP_STATE.charts.blockRank = new Chart(ctxBlockRank, {
        type: 'bar',
        data: {
          labels: sortedBlocks.map((b) => b.Block),
          datasets: [{
            label: 'Coverage %',
            data: sortedBlocks.map((b) => b.Coverage),
            backgroundColor: sortedBlocks.map((b) => b.Coverage >= 75 ? '#4DDB8A' : b.Coverage >= 50 ? '#FFB938' : '#FF5252'),
            borderRadius: 4
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            x: { max: 115, ticks: { color: '#7A9BBF', callback: (v) => v + '%' }, grid: { color: '#1A2E48' } },
            y: { ticks: { color: '#DCE8F5' }, grid: { display: false } }
          }
        }
      });
    }

    // 4. Block Staff vs Trained
    const ctxBlockVol = document.getElementById('chartBlockVol');
    if (ctxBlockVol) {
      if (APP_STATE.charts.blockVol) APP_STATE.charts.blockVol.destroy();
      APP_STATE.charts.blockVol = new Chart(ctxBlockVol, {
        type: 'bar',
        data: {
          labels: d.block_data.map((b) => b.Block),
          datasets: [
            {
              label: 'Target Load',
              data: d.block_data.map((b) => b.Total),
              backgroundColor: '#1E4976',
              borderRadius: 4
            },
            {
              label: 'Trained',
              data: d.block_data.map((b) => b.Trained),
              backgroundColor: '#4D9FFF',
              borderRadius: 4
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { color: '#DCE8F5', font: { size: 11 } } }
          },
          scales: {
            x: { ticks: { color: '#7A9BBF', font: { size: 10 } }, grid: { display: false } },
            y: { ticks: { color: '#7A9BBF' }, grid: { color: '#1A2E48' } }
          }
        }
      });
    }
  }

  // ========================================================
  // TAB 2: BLOCK-WISE PROGRESS BARS
  // ========================================================
  function renderBlockProgress() {
    const container = document.getElementById('blockProgressContainer');
    if (!container || !APP_STATE.data) return;

    const fd = getFilteredData();
    const blocks = new Set(fd.phcs.map((p) => p.Block));

    let html = '';

    APP_STATE.data.block_data.forEach((b) => {
      if (!blocks.has(b.Block)) return;

      const phcsInBlock = fd.phcs.filter((p) => p.Block === b.Block);
      const covColor = b.Coverage >= 75 ? '#4DDB8A' : b.Coverage >= 50 ? '#FFB938' : '#FF5252';

      html += `
        <div class="block-progress-card">
          <div class="block-progress-hdr">
            <div class="block-title">
              <span>🏛 ${b.Block} TALUKA</span>
              <span class="badge" style="background:${covColor}22; color:${covColor}; border:1px solid ${covColor}">${b.Coverage}%</span>
            </div>
            <div class="block-stats-badge">
              <span>Target Load: <b>${b.Total}</b></span>
              <span style="color:#4DDB8A">Trained: <b>${b.Trained}</b></span>
              <span style="color:#FF5252">Untrained: <b>${b.Untrained}</b></span>
              <button class="btn btn-outline btn-sm" onclick="window.exportBlockPDF('${b.Block}')">📄 PDF</button>
            </div>
          </div>
          <div class="phc-progress-rows">
      `;

      phcsInBlock.forEach((p) => {
        const pColor = p.Coverage >= 75 ? '#4DDB8A' : p.Coverage >= 50 ? '#FFB938' : '#FF5252';
        const fillWidth = Math.min(100, p.Coverage);
        const excessTag = p.Excess > 0 ? `<span class="tag-excess">+${p.Excess} extra</span>` : '';

        html += `
          <div class="phc-progress-row">
            <div class="phc-label">
              <span>${p.PHC}</span>
              <span class="fac-tag">${p.FacilityType || 'PHC'}</span>
              ${excessTag}
            </div>
            <div class="bar-track">
              <div class="bar-fill" style="width:${fillWidth}%; background:${pColor}"></div>
            </div>
            <div class="phc-pct-label" style="color:${pColor}">
              ${p.Trained}/${p.Total} (${p.Coverage}%)
            </div>
          </div>
        `;
      });

      html += `</div></div>`;
    });

    container.innerHTML = html || '<div class="banner banner-blue">No facilities match the active filter.</div>';
  }

  window.exportBlockPDF = function (block) {
    if (APP_STATE.data) {
      ReportPDF.generateBlockPDF(APP_STATE.data, block);
    }
  };

  // ========================================================
  // TAB 3: PHC / FACILITY DETAIL TABLE
  // ========================================================
  function renderPHCTable() {
    const tableHead = document.getElementById('phcTableHead');
    const tableBody = document.getElementById('phcTableBody');
    if (!tableHead || !tableBody || !APP_STATE.data) return;

    const cadres = APP_STATE.data.cadres;
    const fd = getFilteredData();

    // Table Header
    let hHtml = `
      <tr>
        <th class="text-left">Block</th>
        <th class="text-left">Facility / PHC</th>
        <th>Type</th>
    `;
    cadres.forEach((c) => {
      hHtml += `<th>${c}</th>`;
    });
    hHtml += `
        <th>Total</th>
        <th>Trained</th>
        <th>Untrained</th>
        <th>Coverage %</th>
      </tr>
    `;
    tableHead.innerHTML = hHtml;

    // Table Body
    let bHtml = '';
    fd.phcs.forEach((r) => {
      const covClass = r.Coverage >= 75 ? 'cov-green' : r.Coverage >= 50 ? 'cov-amber' : 'cov-red';

      bHtml += `
        <tr>
          <td class="text-left" style="font-weight:600; color:var(--txt2)">${r.Block}</td>
          <td class="text-left" style="font-weight:700; color:var(--txt)">${r.PHC}</td>
          <td><span class="fac-tag">${r.FacilityType || 'PHC'}</span></td>
      `;

      cadres.forEach((c) => {
        const sanc = r[c] || 0;
        const tr = r[`${c}_tr`] || 0;
        const un = r[`${c}_un`] || 0;
        const ex = r[`${c}_ex`] || 0;

        if (r.targetMode === 'pooled') {
          // In pooled mode, cadre columns display attendee count
          bHtml += `<td style="color:${tr > 0 ? '#4DDB8A' : 'var(--txt2)'}; font-weight:${tr > 0 ? '700' : '400'}">${tr}</td>`;
        } else {
          let cellStyle = '';
          let badge = '';
          if (ex > 0) {
            cellStyle = 'color:var(--orange); font-weight:700';
            badge = ` <span class="tag-excess">+${ex}</span>`;
          } else if (un > 0) {
            cellStyle = 'color:var(--txt)';
          }
          bHtml += `<td style="${cellStyle}">${sanc}/${tr}/${un}${badge}</td>`;
        }
      });

      bHtml += `
          <td style="font-weight:700">${r.Total}</td>
          <td style="color:#4DDB8A; font-weight:700">${r.Trained}</td>
          <td style="color:${r.Untrained > 0 ? '#FF5252' : 'var(--txt2)'}; font-weight:700">${r.Untrained}</td>
          <td class="${covClass}">${r.Coverage}%</td>
        </tr>
      `;
    });

    tableBody.innerHTML = bHtml;
  }

  // ========================================================
  // TAB 4: TRAINED STAFF LIST
  // ========================================================
  function renderTrainedStaffList() {
    const tableBody = document.getElementById('trainedStaffTableBody');
    const recordCounter = document.getElementById('staffRecordCount');
    if (!tableBody || !APP_STATE.data) return;

    const list = APP_STATE.data.trained_list || [];
    const f = APP_STATE.filters;

    const filtered = list.filter((r) => {
      if (f.block && r.Block !== f.block) return false;
      if (f.facility && r.PHC !== f.facility) return false;
      if (f.cadre && r.Cadre !== f.cadre) return false;
      if (f.search) {
        const query = f.search;
        const matchName = r.Name.toLowerCase().includes(query);
        const matchDesig = (r.Designation || '').toLowerCase().includes(query);
        const matchDuty = (r.PlaceOfDuty || '').toLowerCase().includes(query);
        const matchPHC = r.PHC.toLowerCase().includes(query);
        const matchBlock = r.Block.toLowerCase().includes(query);
        if (!matchName && !matchDesig && !matchDuty && !matchPHC && !matchBlock) return false;
      }
      return true;
    });

    if (recordCounter) {
      recordCounter.textContent = `Showing ${filtered.length} of ${list.length} records`;
    }

    // Sort by Block & Designation by default, or as selected
    const sortMode = document.getElementById('selStaffSort')?.value || 'block_desig';
    filtered.sort((a, b) => {
      if (sortMode === 'block_desig') {
        const bComp = (a.Block || '').localeCompare(b.Block || '');
        if (bComp !== 0) return bComp;
        const dComp = (a.Cadre || a.Designation || '').localeCompare(b.Cadre || b.Designation || '');
        if (dComp !== 0) return dComp;
        return (a.Name || '').localeCompare(b.Name || '');
      } else if (sortMode === 'block_phc') {
        const bComp = (a.Block || '').localeCompare(b.Block || '');
        if (bComp !== 0) return bComp;
        return (a.PHC || '').localeCompare(b.PHC || '');
      } else if (sortMode === 'cadre_name') {
        const cComp = (a.Cadre || '').localeCompare(b.Cadre || '');
        if (cComp !== 0) return cComp;
        return (a.Name || '').localeCompare(b.Name || '');
      } else if (sortMode === 'name') {
        return (a.Name || '').localeCompare(b.Name || '');
      }
      return (a.SrNo || 0) - (b.SrNo || 0);
    });

    let bHtml = '';
    filtered.slice(0, 300).forEach((s, idx) => {
      bHtml += `
        <tr>
          <td style="color:var(--txt2)">${idx + 1}</td>
          <td class="text-left" style="font-weight:700; color:var(--txt)">${s.Name}</td>
          <td><span class="tag tag-${String(s.Cadre || '').replace(/\s+/g, '_')} tag-${String(s.Cadre || '').split(' ')[0]}">${s.Cadre}</span></td>
          <td style="color:var(--txt2)">${s.Designation}</td>
          <td class="text-left" style="color:var(--txt2)">${s.PlaceOfDuty || '-'}</td>
          <td><b>${s.PHC}</b></td>
          <td style="color:var(--txt2)">${s.Block}</td>
        </tr>
      `;
    });

    if (filtered.length > 300) {
      bHtml += `<tr><td colspan="7" style="padding:14px; color:var(--teal)">Showing first 300 of ${filtered.length} results. Use the search bar to refine.</td></tr>`;
    }

    tableBody.innerHTML = bHtml || '<tr><td colspan="7" style="padding:20px; color:var(--txt2)">No participants match current filters</td></tr>';
  }

  // ========================================================
  // TAB 5: BATCH PLANNING MODULE
  // ========================================================
  function renderBatchPlanner() {
    const container = document.getElementById('batchPlanningContainer');
    if (!container || !APP_STATE.data) return;

    const batches = APP_STATE.data.batches || [];
    const cadres = APP_STATE.data.cadres;
    const maxPax = APP_STATE.batchSettings.maxPax;

    let html = `
      <div class="planner-bar">
        <div class="planner-controls">
          <div class="spinner-group">
            <span class="filter-label">Max Pax / Batch:</span>
            <button class="spinner-btn" onclick="window.changeBatchCapacity(-5)">−</button>
            <input type="number" id="txtBatchMaxPax" class="spinner-input" value="${maxPax}" readonly>
            <button class="spinner-btn" onclick="window.changeBatchCapacity(5)">+</button>
          </div>
          <button class="btn btn-teal btn-sm" onclick="window.replanBatches()">⚡ Re-Plan All Batches</button>
        </div>
        <div style="font-size:12.5px; color:var(--txt2)">
          Remaining Untrained: <b style="color:var(--red)">${APP_STATE.data.kpi.total_untrained}</b> staff · 
          Batches: <b style="color:var(--teal)">${batches.length}</b>
        </div>
      </div>
    `;

    batches.forEach((b, bIdx) => {
      const fillPct = Math.min(100, Math.round((b.total / maxPax) * 100));
      const fillCol = b.total > maxPax ? '#FF8C42' : '#00D4B4';

      html += `
        <div class="batch-card" id="batchCard_${bIdx}">
          <div class="batch-card-header">
            <div class="batch-title-zone">
              <span class="batch-num-badge">Batch ${bIdx + 1}</span>
              <input type="text" class="batch-name-input" value="Training Session ${bIdx + 1}" placeholder="Session Name">
              <span style="font-size:11.5px; color:var(--txt2)">Blocks: ${b.blocks.join(', ')}</span>
            </div>
            <div class="batch-capacity-gauge">
              <div class="batch-fill-track">
                <div class="batch-fill-bar" style="width:${fillPct}%; background:${fillCol}"></div>
              </div>
              <span style="font-weight:700; color:${fillCol}; font-size:12px">${b.total}/${maxPax}</span>
              <button class="btn btn-outline btn-sm" onclick="window.deleteBatch(${bIdx})" title="Delete Batch">🗑</button>
            </div>
          </div>
          <div class="table-wrapper">
            <table class="data-table batch-table-body">
              <thead>
                <tr>
                  <th class="text-left">Block</th>
                  <th class="text-left">Facility / PHC</th>
                  ${cadres.map((c) => `<th>${c}</th>`).join('')}
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
      `;

      b.rows.forEach((r, rIdx) => {
        html += `
          <tr>
            <td class="text-left" style="color:var(--txt2)">${r.Block}</td>
            <td class="text-left" style="font-weight:700">${r.PHC}</td>
        `;

        cadres.forEach((c) => {
          html += `
            <td>
              <input type="number" min="0" class="cadre-input" value="${r[c] || 0}" 
                     onchange="window.updateBatchCadre(${bIdx}, ${rIdx}, '${c}', this.value)">
            </td>
          `;
        });

        html += `
            <td style="font-weight:800; color:var(--teal)">${r.Total}</td>
            <td><button class="btn btn-outline btn-sm" onclick="window.removeFacilityFromBatch(${bIdx}, ${rIdx})">✕</button></td>
          </tr>
        `;
      });

      html += `
              </tbody>
            </table>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  window.changeBatchCapacity = function (delta) {
    APP_STATE.batchSettings.maxPax = Math.max(10, Math.min(100, APP_STATE.batchSettings.maxPax + delta));
    window.replanBatches();
  };

  window.replanBatches = function () {
    if (!APP_STATE.data) return;
    const newBatches = UniversalEngine.planBatches(
      APP_STATE.data.phc_data,
      APP_STATE.data.cadres,
      APP_STATE.batchSettings.maxPax,
      APP_STATE.batchSettings.maxBlocks
    );
    APP_STATE.data.batches = newBatches;
    renderBatchPlanner();
  };

  window.deleteBatch = function (bIdx) {
    if (confirm(`Delete Batch ${bIdx + 1}?`)) {
      APP_STATE.data.batches.splice(bIdx, 1);
      renderBatchPlanner();
    }
  };

  window.removeFacilityFromBatch = function (bIdx, rIdx) {
    const b = APP_STATE.data.batches[bIdx];
    if (b) {
      b.rows.splice(rIdx, 1);
      b.total = b.rows.reduce((sum, r) => sum + r.Total, 0);
      renderBatchPlanner();
    }
  };

  window.updateBatchCadre = function (bIdx, rIdx, cadre, val) {
    const num = Math.max(0, parseInt(val, 10) || 0);
    const b = APP_STATE.data.batches[bIdx];
    if (b && b.rows[rIdx]) {
      const r = b.rows[rIdx];
      r[cadre] = num;
      r.Total = APP_STATE.data.cadres.reduce((s, c) => s + (r[c] || 0), 0);
      b.total = b.rows.reduce((s, row) => s + row.Total, 0);
      renderBatchPlanner();
    }
  };

  // ========================================================
  // TAB 6: DUAL-MATRIX HEAT MAP
  // ========================================================
  function renderHeatMap() {
    renderBlockHeatMap();
    renderFacilityHeatMap();
  }

  function renderBlockHeatMap() {
    const tableHead = document.getElementById('blockHeatMapHead');
    const tableBody = document.getElementById('blockHeatMapBody');
    if (!tableHead || !tableBody || !APP_STATE.data) return;

    const cadres = APP_STATE.data.cadres;

    // Header
    let h = `<tr><th class="text-left">Block / Taluka</th>`;
    cadres.forEach((c) => (h += `<th>${c}</th>`));
    h += `<th>OVERALL</th></tr>`;
    tableHead.innerHTML = h;

    // Body
    let b = '';
    APP_STATE.data.block_data.forEach((blk) => {
      b += `<tr><td class="text-left" style="font-weight:700; color:var(--txt)">${blk.Block}</td>`;

      cadres.forEach((c) => {
        const sanc = blk[c] || 0;
        const tr = blk[`${c}_tr`] || 0;
        if (sanc === 0 && tr === 0) {
          b += `<td><span class="hm-cell-badge hm-bg-na">N/A</span></td>`;
        } else {
          const cov = sanc > 0 ? Math.round((tr / sanc) * 100) : 100;
          const bgCls = tr > sanc ? 'hm-bg-orange' : cov >= 100 ? 'hm-bg-teal' : cov >= 75 ? 'hm-bg-green' : cov >= 50 ? 'hm-bg-amber' : 'hm-bg-red';
          b += `
            <td>
              <span class="hm-cell-badge ${bgCls}" 
                    onclick="window.quickFilterBlock('${blk.Block}', '${c}')"
                    title="${blk.Block} - ${c}: ${tr}/${sanc} (${cov}%)">
                ${cov}%
              </span>
            </td>
          `;
        }
      });

      const overCov = blk.Coverage;
      const overCls = blk.Excess > 0 ? 'hm-bg-orange' : overCov >= 100 ? 'hm-bg-teal' : overCov >= 75 ? 'hm-bg-green' : overCov >= 50 ? 'hm-bg-amber' : 'hm-bg-red';
      b += `
        <td>
          <span class="hm-cell-badge ${overCls}" 
                onclick="window.quickFilterBlock('${blk.Block}', '')"
                title="${blk.Block} Overall: ${blk.Trained}/${blk.Total} (${overCov}%)">
            ${overCov}%
          </span>
        </td>
      </tr>`;
    });

    tableBody.innerHTML = b;
  }

  function renderFacilityHeatMap() {
    const tableHead = document.getElementById('phcHeatMapHead');
    const tableBody = document.getElementById('phcHeatMapBody');
    if (!tableHead || !tableBody || !APP_STATE.data) return;

    const cadres = APP_STATE.data.cadres;

    // Header
    let h = `<tr><th class="text-left">Block</th><th class="text-left">Facility / PHC</th>`;
    cadres.forEach((c) => (h += `<th>${c}</th>`));
    h += `<th>OVERALL</th></tr>`;
    tableHead.innerHTML = h;

    // Body
    let b = '';
    APP_STATE.data.phc_data.forEach((p) => {
      b += `
        <tr>
          <td class="text-left" style="color:var(--txt2)">${p.Block}</td>
          <td class="text-left" style="font-weight:700">${p.PHC}</td>
      `;

      cadres.forEach((c) => {
        const sanc = p[c] || 0;
        const tr = p[`${c}_tr`] || 0;
        if (sanc === 0 && tr === 0) {
          b += `<td><span class="hm-cell-badge hm-bg-na">-</span></td>`;
        } else {
          const cov = sanc > 0 ? Math.round((tr / sanc) * 100) : 100;
          const bgCls = tr > sanc ? 'hm-bg-orange' : cov >= 100 ? 'hm-bg-teal' : cov >= 75 ? 'hm-bg-green' : cov >= 50 ? 'hm-bg-amber' : 'hm-bg-red';
          b += `
            <td>
              <span class="hm-cell-badge ${bgCls}" 
                    onclick="window.quickFilterPHC('${p.PHC}', '${c}')"
                    title="${p.PHC} - ${c}: ${tr}/${sanc} (${cov}%)">
                ${cov}%
              </span>
            </td>
          `;
        }
      });

      const pCov = p.Coverage;
      const pCls = p.Excess > 0 ? 'hm-bg-orange' : pCov >= 100 ? 'hm-bg-teal' : pCov >= 75 ? 'hm-bg-green' : pCov >= 50 ? 'hm-bg-amber' : 'hm-bg-red';
      b += `
        <td>
          <span class="hm-cell-badge ${pCls}" 
                onclick="window.quickFilterPHC('${p.PHC}', '')"
                title="${p.PHC} Overall: ${p.Trained}/${p.Total} (${pCov}%)">
            ${pCov}%
          </span>
        </td>
      </tr>`;
    });

    tableBody.innerHTML = b;
  }

  // Quick filter shortcuts from Heat Map
  window.quickFilterBlock = function (block, cadre) {
    const selBlock = document.getElementById('fBlock');
    const selCadre = document.getElementById('fCadre');
    if (selBlock) selBlock.value = block;
    if (selCadre) selCadre.value = cadre || '';
    APP_STATE.filters.block = block;
    APP_STATE.filters.cadre = cadre || '';
    populateFacilityDropdown();
    renderAllViews();
    document.querySelector('.nav-tab[data-tab="2"]')?.click();
  };

  window.quickFilterPHC = function (phc, cadre) {
    const selFacility = document.getElementById('fFacility');
    const selCadre = document.getElementById('fCadre');
    if (selFacility) selFacility.value = phc;
    if (selCadre) selCadre.value = cadre || '';
    APP_STATE.filters.facility = phc;
    APP_STATE.filters.cadre = cadre || '';
    renderAllViews();
    document.querySelector('.nav-tab[data-tab="3"]')?.click();
  };

  // ========================================================
  // RECALCULATE DATA MODEL AFTER LOAD OR BATCH UPDATES
  // ========================================================
  function recalculateActiveTraining() {
    if (!APP_STATE.data) return;

    const cadres = APP_STATE.data.cadres;
    const phcData = APP_STATE.data.phc_data;

    let grandSanctioned = 0;
    let grandTrained = 0;
    let grandUntrained = 0;
    let grandExcess = 0;

    const blockAgg = {};

    phcData.forEach((p) => {
      let phcCadreTotal = 0;
      let phcCadreUntrainedSum = 0;
      let phcCadreExcessSum = 0;

      cadres.forEach((c) => {
        const s = Number(p[c]) || 0;
        const tr = Number(p[`${c}_tr`]) || 0;
        const un = Math.max(0, s - tr);
        const ex = Math.max(0, tr - s);

        p[c] = s;
        p[`${c}_tr`] = tr;
        p[`${c}_un`] = un;
        p[`${c}_ex`] = ex;

        phcCadreTotal += s;
        phcCadreUntrainedSum += un;
        phcCadreExcessSum += ex;
      });

      if (p.targetMode === 'pooled') {
        p.Total = Number(p.facilityTarget) !== undefined && Number(p.facilityTarget) > 0 ? Number(p.facilityTarget) : (p.Total || 0);
      } else {
        p.Total = phcCadreTotal;
      }
      p.Untrained = Math.max(0, p.Total - p.Trained);
      p.Excess = Math.max(0, p.Trained - p.Total);
      p.CadreExcess = phcCadreExcessSum;
      p.Coverage = p.Total > 0 ? Number(((p.Trained / p.Total) * 100).toFixed(1)) : 0;

      grandSanctioned += p.Total;
      grandTrained += p.Trained;
      grandUntrained += p.Untrained;
      grandExcess += p.Excess;

      // Block Aggregation
      if (!blockAgg[p.Block]) {
        blockAgg[p.Block] = {
          Block: p.Block,
          Total: 0,
          Trained: 0,
          Untrained: 0,
          Excess: 0,
          Coverage: 0,
          phcCount: 0
        };
        cadres.forEach((c) => {
          blockAgg[p.Block][c] = 0;
          blockAgg[p.Block][`${c}_tr`] = 0;
          blockAgg[p.Block][`${c}_un`] = 0;
          blockAgg[p.Block][`${c}_ex`] = 0;
        });
      }

      const b = blockAgg[p.Block];
      b.Total += p.Total;
      b.Trained += p.Trained;
      b.Untrained += p.Untrained;
      b.Excess += p.Excess;
      b.phcCount += 1;

      cadres.forEach((c) => {
        b[c] += p[c];
        b[`${c}_tr`] += p[`${c}_tr`];
        b[`${c}_un`] += p[`${c}_un`];
        b[`${c}_ex`] += p[`${c}_ex`];
      });
    });

    APP_STATE.data.block_data = Object.values(blockAgg)
      .sort((a, b) => a.Block.localeCompare(b.Block))
      .map((b) => {
        b.Coverage = b.Total > 0 ? Number(((b.Trained / b.Total) * 100).toFixed(1)) : 0;
        return b;
      });

    // Cadre Aggregation across district
    let totalCadreExcess = 0;
    APP_STATE.data.cadre_data = cadres.map((c) => {
      let totalSanc = 0;
      let totalTr = 0;
      phcData.forEach((r) => {
        totalSanc += r[c] || 0;
        totalTr += r[`${c}_tr`] || 0;
      });
      const un = Math.max(0, totalSanc - totalTr);
      const ex = Math.max(0, totalTr - totalSanc);
      const cov = totalSanc > 0 ? Number(((totalTr / totalSanc) * 100).toFixed(1)) : 0;
      totalCadreExcess += ex;
      return { cadre: c, total: totalSanc, trained: totalTr, untrained: un, excess: ex, coverage: cov };
    });

    APP_STATE.data.kpi = {
      total_staff: grandSanctioned,
      total_trained: grandTrained,
      total_untrained: grandUntrained,
      total_excess: totalCadreExcess || grandExcess,
      coverage: grandSanctioned > 0 ? Number(((grandTrained / grandSanctioned) * 100).toFixed(1)) : 0,
      blocks: APP_STATE.data.block_data.length,
      phcs: phcData.length,
      generated_date: new Date().toLocaleDateString('en-IN')
    };

    // Re-plan batches for untrained
    APP_STATE.data.batches = UniversalEngine.planBatches(
      phcData,
      cadres,
      APP_STATE.batchSettings.maxPax,
      APP_STATE.batchSettings.maxBlocks
    );

    // Save update to storage if custom training
    if (APP_STATE.activeTrainingId !== 'cancer_baseline' && APP_STATE.customTrainings[APP_STATE.activeTrainingId]) {
      APP_STATE.customTrainings[APP_STATE.activeTrainingId] = APP_STATE.data;
      saveTrainingsToStorage();
    }
  }

  // ========================================================
  // NEW TRAINING SETUP WIZARD (MODAL 1)
  // ========================================================
  function setupNewTrainingModal() {
    const modal = document.getElementById('modalNewTraining');
    const btnOpen = document.getElementById('btnOpenNewTrainingModal');
    const btnClose = document.getElementById('btnCloseNewTrainingModal');
    const btnCancel = document.getElementById('btnCancelNewTraining');
    const btnCreate = document.getElementById('btnCreateNewTraining');
    const pillsContainer = document.getElementById('newProgCadrePills');
    const facGrid = document.getElementById('newProgFacilityGrid');
    const btnSelectAll = document.getElementById('btnSelectAllFacs');
    const btnClearAll = document.getElementById('btnClearAllFacs');
    const btnAddCustom = document.getElementById('btnAddCustomCadre');
    const txtCustom = document.getElementById('txtCustomCadreInput');

    btnOpen?.addEventListener('click', () => {
      document.getElementById('txtNewProgTitle').value = '';
      populateFacilityCheckboxes();
      modal?.classList.add('open');
    });

    btnClose?.addEventListener('click', () => modal?.classList.remove('open'));
    btnCancel?.addEventListener('click', () => modal?.classList.remove('open'));

    // Cadre pill toggle
    pillsContainer?.addEventListener('click', (e) => {
      const pill = e.target.closest('.cadre-pill-checkbox');
      if (pill) {
        pill.classList.toggle('selected');
        const cadre = pill.dataset.cadre;
        pill.textContent = pill.classList.contains('selected') ? `✓ ${cadre}` : `+ ${cadre}`;
        updateModalLoadCalculationSummary();
      }
    });

    // Add custom cadre
    btnAddCustom?.addEventListener('click', () => {
      const val = txtCustom?.value.trim().toUpperCase();
      if (!val) return;
      const existing = pillsContainer.querySelector(`[data-cadre="${val}"]`);
      if (existing) {
        existing.classList.add('selected');
        existing.textContent = `✓ ${val}`;
      } else {
        const pill = document.createElement('div');
        pill.className = 'cadre-pill-checkbox selected';
        pill.dataset.cadre = val;
        pill.textContent = `✓ ${val}`;
        pillsContainer.appendChild(pill);
      }
      txtCustom.value = '';
      updateModalLoadCalculationSummary();
    });

    function populateFacilityCheckboxes() {
      if (!facGrid) return;
      let h = '';
      AHMEDABAD_MASTER_FACILITIES.forEach((fac, idx) => {
        const tagColor = fac.FacilityType === 'SDH' ? '#FF8C42' : fac.FacilityType === 'CHC' ? '#38D9F5' : 'var(--teal)';
        h += `
          <label class="fac-check-item">
            <input type="checkbox" name="facSelect" data-type="${fac.FacilityType}" value="${fac.Block}||${fac.PHC}" checked>
            <span>
              <b>${fac.PHC}</b>
              <span class="fac-tag" style="margin-left:4px; font-size:10px; padding:1px 5px; color:${tagColor}; border-color:${tagColor}">${fac.FacilityType}</span>
              <small style="color:var(--txt2)">(${fac.Block})</small>
            </span>
          </label>
        `;
      });
      facGrid.innerHTML = h;

      facGrid.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
        cb.addEventListener('change', updateModalLoadCalculationSummary);
      });
      updateModalLoadCalculationSummary();
    }

    const btnSelectPHCs = document.getElementById('btnSelectPHCsOnly');
    const btnSelectCHCs = document.getElementById('btnSelectCHCsSDHs');

    btnSelectAll?.addEventListener('click', () => {
      facGrid?.querySelectorAll('input[type="checkbox"]').forEach((cb) => (cb.checked = true));
      updateModalLoadCalculationSummary();
    });

    btnSelectPHCs?.addEventListener('click', () => {
      facGrid?.querySelectorAll('input[name="facSelect"]').forEach((cb) => {
        const t = cb.dataset.type;
        cb.checked = (t === 'PHC' || t === 'UPHC');
      });
      updateModalLoadCalculationSummary();
    });

    btnSelectCHCs?.addEventListener('click', () => {
      facGrid?.querySelectorAll('input[name="facSelect"]').forEach((cb) => {
        const t = cb.dataset.type;
        cb.checked = (t === 'CHC' || t === 'SDH');
      });
      updateModalLoadCalculationSummary();
    });

    btnClearAll?.addEventListener('click', () => {
      facGrid?.querySelectorAll('input[type="checkbox"]').forEach((cb) => (cb.checked = false));
      updateModalLoadCalculationSummary();
    });

    function updateModalLoadCalculationSummary() {
      const selectedFacCount = facGrid?.querySelectorAll('input[name="facSelect"]:checked').length || 0;
      const selectedCadreCount = pillsContainer?.querySelectorAll('.cadre-pill-checkbox.selected').length || 0;
      const mode = document.querySelector('input[name="initLoadMode"]:checked')?.value || 'cadre_fixed';
      const perCadreVal = Math.max(1, parseInt(document.getElementById('numLoadPerCadre')?.value, 10) || 1);
      const poolVal = Math.max(1, parseInt(document.getElementById('numLoadFacilityPool')?.value, 10) || 2);
      const summaryEl = document.getElementById('newProgLoadCalculationSummary');
      if (!summaryEl) return;

      if (mode === 'facility_pool') {
        const totalLoad = selectedFacCount * poolVal;
        summaryEl.innerHTML = `
          <div style="font-weight:700; color:var(--teal); margin-bottom:4px; font-size:13px;">
            📊 Projected District Training Load: ${totalLoad} Trainees
          </div>
          <div><b>Calculation:</b> ${selectedFacCount} Selected Facilities × ${poolVal} Trainees Target per Facility = <b style="color:var(--teal); font-size:14px;">${totalLoad} Trainees</b></div>
          <div style="color:var(--txt2); margin-top:3px; font-size:11.5px;">
            • <b>Rule:</b> Any ${poolVal} participants nominated from the ${selectedCadreCount} selected cadres fulfill the facility's target.
            <br>• Facility achieves <b>100% Coverage</b> when ${poolVal} participants are trained (regardless of specific cadre composition).
          </div>
        `;
      } else if (mode === 'cadre_fixed' || mode === 'uniform') {
        const perFacTotal = perCadreVal * selectedCadreCount;
        const totalLoad = selectedFacCount * perFacTotal;
        summaryEl.innerHTML = `
          <div style="font-weight:700; color:var(--teal); margin-bottom:4px; font-size:13px;">
            📊 Projected District Training Load: ${totalLoad} Trainees
          </div>
          <div><b>Calculation:</b> ${selectedFacCount} Facilities × (${selectedCadreCount} Cadres × ${perCadreVal} Trainee) = <b style="color:var(--teal); font-size:14px;">${totalLoad} Trainees</b> (${perFacTotal} per facility)</div>
          <div style="color:var(--txt2); margin-top:3px; font-size:11.5px;">
            • <b>Rule:</b> Every facility is assigned a fixed target of ${perCadreVal} participant(s) for EACH of the ${selectedCadreCount} selected cadres.
          </div>
        `;
      } else if (mode === 'zero') {
        summaryEl.innerHTML = `
          <div style="font-weight:700; color:var(--txt2); font-size:13px;">
            📊 Initial Training Load: 0 Trainees
          </div>
          <div style="color:var(--txt2); font-size:11.5px;">All initial targets set to 0. You can set them using the Training Load Grid or import sanctioned posts.</div>
        `;
      } else if (mode === 'manual') {
        summaryEl.innerHTML = `
          <div style="font-weight:700; color:var(--teal); font-size:13px;">
            ⚙️ Interactive Grid Setup
          </div>
          <div style="color:var(--txt2); font-size:11.5px;">Clicking "Initialize" will immediately open the Facility × Cadre Grid to enter custom targets.</div>
        `;
      }
    }

    document.querySelectorAll('input[name="initLoadMode"]').forEach((radio) => {
      radio.addEventListener('change', updateModalLoadCalculationSummary);
    });
    document.getElementById('numLoadPerCadre')?.addEventListener('input', updateModalLoadCalculationSummary);
    document.getElementById('numLoadFacilityPool')?.addEventListener('input', updateModalLoadCalculationSummary);

    // Create New Training Programme
    btnCreate?.addEventListener('click', () => {
      const title = document.getElementById('txtNewProgTitle')?.value.trim();
      if (!title) {
        alert('Please enter a Training Programme Title.');
        return;
      }

      // Selected Cadres
      const selectedCadres = [];
      pillsContainer?.querySelectorAll('.cadre-pill-checkbox.selected').forEach((p) => {
        selectedCadres.push(p.dataset.cadre);
      });

      if (selectedCadres.length === 0) {
        alert('Please select at least one participating staff cadre.');
        return;
      }

      // Selected Facilities
      const selectedFacKeys = [];
      facGrid?.querySelectorAll('input[name="facSelect"]:checked').forEach((cb) => {
        selectedFacKeys.push(cb.value);
      });

      if (selectedFacKeys.length === 0) {
        alert('Please select at least one participating facility.');
        return;
      }

      const loadMode = document.querySelector('input[name="initLoadMode"]:checked')?.value || 'cadre_fixed';
      const perCadreVal = Math.max(1, parseInt(document.getElementById('numLoadPerCadre')?.value, 10) || 1);
      const poolVal = Math.max(1, parseInt(document.getElementById('numLoadFacilityPool')?.value, 10) || 2);

      // Build Initial Dataset Structure
      const phcData = [];
      selectedFacKeys.forEach((key) => {
        const [block, phc] = key.split('||');
        const facMeta = AHMEDABAD_MASTER_FACILITIES.find((m) => m.Block === block && m.PHC === phc) || {};

        let facilityTotalTarget = 0;
        let isPooled = false;

        if (loadMode === 'cadre_fixed' || loadMode === 'uniform') {
          facilityTotalTarget = perCadreVal * selectedCadres.length;
        } else if (loadMode === 'facility_pool') {
          facilityTotalTarget = poolVal;
          isPooled = true;
        } else {
          facilityTotalTarget = 0;
        }

        const item = {
          Block: block,
          PHC: phc,
          FacilityType: facMeta.FacilityType || 'PHC',
          targetMode: isPooled ? 'pooled' : 'cadre',
          facilityTarget: facilityTotalTarget,
          Total: facilityTotalTarget,
          Trained: 0,
          Untrained: facilityTotalTarget,
          Excess: 0,
          Coverage: 0
        };

        selectedCadres.forEach((c) => {
          const cadreTarget = (loadMode === 'cadre_fixed' || loadMode === 'uniform') ? perCadreVal : 0;
          item[c] = cadreTarget;
          item[`${c}_tr`] = 0;
          item[`${c}_un`] = cadreTarget;
          item[`${c}_ex`] = 0;
        });

        phcData.push(item);
      });

      const newId = `training_${Date.now()}`;
      const newTraining = {
        id: newId,
        trainingName: title,
        cadres: selectedCadres,
        cadreConfig: UniversalEngine.createCadreConfig(selectedCadres),
        phc_data: phcData,
        block_data: [],
        cadre_data: [],
        trained_list: [],
        batches: [],
        kpi: {}
      };

      APP_STATE.customTrainings[newId] = newTraining;
      APP_STATE.activeTrainingId = newId;
      APP_STATE.data = newTraining;
      APP_STATE.trainingName = title;

      // Recalculate and save
      recalculateActiveTraining();
      saveTrainingsToStorage();

      updateTrainingSwitcherOptions();
      populateFilters();
      renderAllViews();
      updateDynamicTitles();

      modal?.classList.remove('open');

      if (loadMode === 'manual') {
        openTrainingLoadModal();
      } else {
        alert(`Success! Created "${title}" with ${selectedFacKeys.length} facilities and ${selectedCadres.length} cadres. You can now set the training load or record completed batches.`);
      }
    });
  }

  // ========================================================
  // MANUAL TRAINING LOAD SETUP (MODAL 2)
  // ========================================================
  function setupTrainingLoadModal() {
    const modal = document.getElementById('modalTrainingLoad');
    const btnOpen = document.getElementById('btnOpenLoadModal');
    const btnClose = document.getElementById('btnCloseLoadModal');
    const btnCancel = document.getElementById('btnCancelLoadModal');
    const btnSave = document.getElementById('btnSaveTrainingLoad');
    const btnApplyBulk = document.getElementById('btnApplyBulkLoad');

    btnOpen?.addEventListener('click', openTrainingLoadModal);
    btnClose?.addEventListener('click', () => modal?.classList.remove('open'));
    btnCancel?.addEventListener('click', () => modal?.classList.remove('open'));

    btnApplyBulk?.addEventListener('click', () => {
      const targetType = document.getElementById('selBulkCadre')?.value;
      const val = Math.max(0, parseInt(document.getElementById('numBulkVal')?.value, 10) || 0);
      if (!targetType) return;

      if (targetType === '__FACILITY_POOL__') {
        document.querySelectorAll('input.facility-target-input').forEach((inp) => {
          inp.value = val;
        });
        document.querySelectorAll('input.cadre-load-input').forEach((inp) => {
          inp.value = 0;
        });
      } else {
        document.querySelectorAll(`input.cadre-load-input[data-cadre="${targetType}"]`).forEach((inp) => {
          inp.value = val;
        });
      }
      recalcLoadTableTotals();
    });

    btnSave?.addEventListener('click', () => {
      if (!APP_STATE.data) return;

      // Read values from table inputs
      const cadres = APP_STATE.data.cadres;
      document.querySelectorAll('#loadMatrixTableBody tr').forEach((row, idx) => {
        const phcItem = APP_STATE.data.phc_data[idx];
        if (!phcItem) return;

        let cadreSum = 0;
        cadres.forEach((c) => {
          const inp = row.querySelector(`input.cadre-load-input[data-cadre="${c}"]`);
          if (inp) {
            const v = Math.max(0, parseInt(inp.value, 10) || 0);
            phcItem[c] = v;
            cadreSum += v;
          }
        });

        const targetInp = row.querySelector('input.facility-target-input');
        const manualTarget = targetInp ? Math.max(0, parseInt(targetInp.value, 10) || 0) : cadreSum;
        if (cadreSum === 0 && manualTarget > 0) {
          phcItem.targetMode = 'pooled';
          phcItem.facilityTarget = manualTarget;
          phcItem.Total = manualTarget;
        } else {
          phcItem.targetMode = cadreSum > 0 ? 'cadre' : 'pooled';
          phcItem.facilityTarget = manualTarget;
          phcItem.Total = cadreSum > 0 ? cadreSum : manualTarget;
        }
      });

      recalculateActiveTraining();
      renderAllViews();
      modal?.classList.remove('open');
      alert('Training Load successfully updated!');
    });
  }

  function openTrainingLoadModal() {
    const modal = document.getElementById('modalTrainingLoad');
    if (!modal || !APP_STATE.data) return;

    const cadres = APP_STATE.data.cadres;
    const phcs = APP_STATE.data.phc_data;

    // Bulk Cadre Selector
    const selBulk = document.getElementById('selBulkCadre');
    if (selBulk) {
      let bulkOptions = `<option value="__FACILITY_POOL__">⚡ Facility Pool Target (Any Cadre)</option>`;
      cadres.forEach((c) => {
        bulkOptions += `<option value="${c}">${c}</option>`;
      });
      selBulk.innerHTML = bulkOptions;
    }

    // Header
    const tHead = document.getElementById('loadMatrixTableHead');
    let h = `<tr><th class="text-left">Block</th><th class="text-left">Facility / PHC</th><th>Type</th>`;
    cadres.forEach((c) => (h += `<th>${c}</th>`));
    h += `<th>Facility Target</th></tr>`;
    tHead.innerHTML = h;

    // Body
    const tBody = document.getElementById('loadMatrixTableBody');
    let b = '';
    phcs.forEach((p, pIdx) => {
      b += `
        <tr>
          <td class="text-left" style="color:var(--txt2);">${p.Block}</td>
          <td class="text-left" style="font-weight:700;">${p.PHC}</td>
          <td><span class="fac-tag">${p.FacilityType || 'PHC'}</span></td>
      `;

      cadres.forEach((c) => {
        b += `
          <td>
            <input type="number" min="0" class="load-cell-input cadre-load-input" data-cadre="${c}" data-row="${pIdx}" 
                   value="${p[c] || 0}" oninput="window.recalcLoadTableTotals(${pIdx})">
          </td>
        `;
      });

      b += `<td>
        <input type="number" min="0" class="load-cell-input facility-target-input" data-target-row="${pIdx}"
               value="${p.Total || 0}" style="font-weight:800; color:var(--teal); width:58px;" oninput="window.recalcLoadTableTotals()">
      </td></tr>`;
    });
    tBody.innerHTML = b;

    recalcLoadTableTotals();
    modal.classList.add('open');
  }

  window.recalcLoadTableTotals = function (activeRowIdx = null) {
    let grandSum = 0;
    const cadres = APP_STATE.data ? APP_STATE.data.cadres : [];

    document.querySelectorAll('#loadMatrixTableBody tr').forEach((row, pIdx) => {
      let rowCadreSum = 0;
      cadres.forEach((c) => {
        const inp = row.querySelector(`input.cadre-load-input[data-cadre="${c}"]`);
        if (inp) rowCadreSum += Math.max(0, parseInt(inp.value, 10) || 0);
      });

      const targetInp = row.querySelector('input.facility-target-input');
      if (targetInp) {
        if (activeRowIdx === pIdx && rowCadreSum > 0) {
          targetInp.value = rowCadreSum;
        }
        grandSum += Math.max(0, parseInt(targetInp.value, 10) || rowCadreSum);
      } else {
        grandSum += rowCadreSum;
      }
    });

    const lblGrand = document.getElementById('lblGrandTotalLoad');
    if (lblGrand) lblGrand.textContent = grandSum.toLocaleString();
  };

  // ========================================================
  // RECORD COMPLETED BATCH (MODAL 3)
  // ========================================================
  function setupRecordBatchModal() {
    const modal = document.getElementById('modalRecordBatch');
    const btnOpen = document.getElementById('btnOpenRecordBatchModal');
    const btnClose = document.getElementById('btnCloseBatchModal');
    const btnCancel = document.getElementById('btnCancelBatchModal');
    const btnSubmit = document.getElementById('btnSubmitCompletedBatch');

    const tabUpload = document.getElementById('tabSubBatchUpload');
    const tabManual = document.getElementById('tabSubBatchManual');
    const paneUpload = document.getElementById('subPaneBatchUpload');
    const paneManual = document.getElementById('subPaneBatchManual');

    let uploadedBatchParticipants = null;

    btnOpen?.addEventListener('click', () => {
      const nextBatchNum = (APP_STATE.data?.batches?.length || 0) + 1;
      document.getElementById('txtBatchTitle').value = `Batch ${nextBatchNum} - Training Session`;
      document.getElementById('txtBatchDate').value = new Date().toISOString().split('T')[0];
      uploadedBatchParticipants = null;
      document.getElementById('lblBatchFileName').textContent = 'Select or drop Google Form response CSV or attendance sheet';
      initManualBatchRows();
      modal?.classList.add('open');
    });

    btnClose?.addEventListener('click', () => modal?.classList.remove('open'));
    btnCancel?.addEventListener('click', () => modal?.classList.remove('open'));

    // Toggle sub-tabs
    tabUpload?.addEventListener('click', () => {
      tabUpload.classList.add('active');
      tabManual.classList.remove('active');
      paneUpload.style.display = 'block';
      paneManual.style.display = 'none';
    });

    tabManual?.addEventListener('click', () => {
      tabManual.classList.add('active');
      tabUpload.classList.remove('active');
      paneUpload.style.display = 'none';
      paneManual.style.display = 'block';
    });

    // Ingest batch file
    document.getElementById('inputBatchFile')?.addEventListener('change', function (e) {
      handleFileUpload(e.target.files[0], (data) => {
        uploadedBatchParticipants = data;
        document.getElementById('lblBatchFileName').textContent = `✓ ${e.target.files[0].name} (${data.length} responses)`;
      });
    });

    // Manual Participant Row Manager
    const container = document.getElementById('manualBatchRowsContainer');
    document.getElementById('btnAddManualBatchRow')?.addEventListener('click', () => {
      addManualParticipantRow();
    });

    function initManualBatchRows() {
      if (!container) return;
      container.innerHTML = '';
      for (let i = 0; i < 3; i++) {
        addManualParticipantRow();
      }
    }

    function addManualParticipantRow() {
      if (!container || !APP_STATE.data) return;
      const cadres = APP_STATE.data.cadres;
      const phcs = APP_STATE.data.phc_data;

      const div = document.createElement('div');
      div.className = 'batch-entry-row';
      div.innerHTML = `
        <input type="text" placeholder="Participant Name" class="inp-p-name">
        <select class="inp-p-cadre">
          ${cadres.map((c) => `<option value="${c}">${c}</option>`).join('')}
        </select>
        <select class="inp-p-fac">
          ${phcs.map((p) => `<option value="${p.Block}||${p.PHC}">${p.PHC} (${p.Block})</option>`).join('')}
        </select>
        <input type="text" placeholder="Place of Duty / Sub-Centre" class="inp-p-duty">
        <button class="btn btn-outline btn-sm" onclick="this.parentElement.remove()" style="padding:4px 8px; color:var(--red);">✕</button>
      `;
      container.appendChild(div);
    }

    // Submit and Log Completed Batch
    btnSubmit?.addEventListener('click', () => {
      if (!APP_STATE.data) return;

      const batchTitle = document.getElementById('txtBatchTitle')?.value.trim() || 'Completed Training Batch';
      let participantsToAdd = [];

      const isManual = tabManual?.classList.contains('active');

      if (isManual) {
        // Collect from manual rows
        container.querySelectorAll('.batch-entry-row').forEach((row) => {
          const name = row.querySelector('.inp-p-name')?.value.trim();
          const cadre = row.querySelector('.inp-p-cadre')?.value;
          const facVal = row.querySelector('.inp-p-fac')?.value;
          const duty = row.querySelector('.inp-p-duty')?.value.trim();

          if (name && facVal) {
            const [block, phc] = facVal.split('||');
            participantsToAdd.push({
              Name: name,
              Cadre: cadre,
              Designation: cadre,
              PlaceOfDuty: duty || phc,
              PHC: phc,
              Block: block
            });
          }
        });
      } else {
        // Collect from uploaded batch file using DesignationMapper
        if (!uploadedBatchParticipants || uploadedBatchParticipants.length === 0) {
          alert('Please select a batch response file first, or switch to the Manual Entry tab.');
          return;
        }

        const masterList = APP_STATE.data.phc_data;
        const cadres = APP_STATE.data.cadres;

        uploadedBatchParticipants.forEach((pRow, idx) => {
          const rawBlock = pRow.Block || pRow['NAME OF TALUKA'] || pRow['Taluka'] || pRow['Block Name'] || '';
          const normBlock = DesignationMapper.normalizeTaluka(rawBlock);

          const rawFacility = pRow.PHC || pRow['NAME OF PHC'] || pRow['PHC Name'] || pRow['Facility'] ||
                              pRow['(ફરજ ના સ્થળનું નામ) NAME OF PHC/UPHC/THO OFFICE'] || '';

          const matchResult = DesignationMapper.matchFacilityWithMaster(rawFacility, normBlock, masterList);
          const targetFacility = matchResult.matchedName;
          const resolvedBlock = matchResult.suggestedBlock || normBlock;

          const rawDesig = pRow.Designation || pRow.DESIGNATION || pRow['designation'] || pRow.Cadre || '';
          const desigNorm = DesignationMapper.normalizeDesignation(rawDesig, cadres);

          const pName = String(pRow.Name || pRow['Beneficiary Name'] || pRow['Participant Name'] || pRow['Name of Participant'] || '').trim();
          const pDuty = String(pRow.PlaceOfDuty || pRow['Place Of Duty'] || pRow['(ફરજ ના સ્થળનું નામ) NAME OF PHC/UPHC/THO OFFICE'] || pRow['ફરજ નું સ્થળ'] || '').trim();

          if (pName) {
            participantsToAdd.push({
              Name: pName,
              Cadre: desigNorm.cadre,
              Designation: desigNorm.raw || desigNorm.cadre,
              PlaceOfDuty: pDuty || targetFacility,
              PHC: targetFacility,
              Block: resolvedBlock
            });
          }
        });
      }

      if (participantsToAdd.length === 0) {
        alert('No valid participants were found to record.');
        return;
      }

      // Merge into trained staff list and increment facility counts
      participantsToAdd.forEach((p) => {
        APP_STATE.data.trained_list.push(p);

        // Find matching PHC
        const targetPHC = APP_STATE.data.phc_data.find((ph) => ph.Block === p.Block && ph.PHC === p.PHC) ||
                          APP_STATE.data.phc_data.find((ph) => ph.PHC === p.PHC);

        if (targetPHC) {
          targetPHC.Trained += 1;
          targetPHC[`${p.Cadre}_tr`] = (targetPHC[`${p.Cadre}_tr`] || 0) + 1;
        }
      });

      // Recalculate everything
      recalculateActiveTraining();
      renderAllViews();

      modal?.classList.remove('open');
      alert(`Success! Logged "${batchTitle}" with ${participantsToAdd.length} completed participants. Total trained staff is now ${APP_STATE.data.kpi.total_trained}.`);
    });
  }

  // ========================================================
  // UNIVERSAL FILE UPLOAD & INGEST MODAL
  // ========================================================
  function setupUploadModal() {
    const modal = document.getElementById('uploadModal');
    const btnOpen = document.getElementById('btnOpenUploadModal');
    const btnClose = document.getElementById('btnCloseUploadModal');
    const btnProcess = document.getElementById('btnProcessUpload');

    let uploadedStaffingRows = null;
    let uploadedTrainingRows = null;

    btnOpen?.addEventListener('click', () => modal?.classList.add('open'));
    btnClose?.addEventListener('click', () => modal?.classList.remove('open'));

    // Staffing file input
    document.getElementById('inputStaffingFile')?.addEventListener('change', function (e) {
      handleFileUpload(e.target.files[0], (data) => {
        uploadedStaffingRows = data;
        document.getElementById('lblStaffingFileName').textContent = `✓ ${e.target.files[0].name} (${data.length} rows)`;
      });
    });

    // Training file input
    document.getElementById('inputTrainingFile')?.addEventListener('change', function (e) {
      handleFileUpload(e.target.files[0], (data) => {
        uploadedTrainingRows = data;
        document.getElementById('lblTrainingFileName').textContent = `✓ ${e.target.files[0].name} (${data.length} records)`;
      });
    });

    btnProcess?.addEventListener('click', () => {
      if (!uploadedStaffingRows) {
        alert('Please select the Master Staffing file first.');
        return;
      }
      if (!uploadedTrainingRows) {
        alert('Please select the Training Participants file.');
        return;
      }

      const progTitle = document.getElementById('txtUploadTrainingTitle')?.value.trim() || 'Uploaded Training';
      const processed = UniversalEngine.processDataset(
        uploadedStaffingRows,
        uploadedTrainingRows,
        progTitle,
        APP_STATE.batchSettings
      );

      const newId = `training_${Date.now()}`;
      APP_STATE.customTrainings[newId] = processed;
      APP_STATE.activeTrainingId = newId;
      APP_STATE.data = processed;
      APP_STATE.trainingName = progTitle;

      saveTrainingsToStorage();
      updateTrainingSwitcherOptions();

      const titleInput = document.getElementById('txtTrainingName');
      if (titleInput) titleInput.value = progTitle;

      populateFilters();
      renderAllViews();
      updateDynamicTitles();

      modal?.classList.remove('open');
      alert(`Success! Loaded ${processed.kpi.total_trained} participants across ${processed.kpi.phcs} facilities in ${processed.kpi.blocks} blocks.`);
    });
  }

  function handleFileUpload(file, callback) {
    if (!file || typeof XLSX === 'undefined') return;

    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const json = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: '' });
        callback(json);
      } catch (err) {
        alert('File read error: ' + err.message);
      }
    };
    reader.readAsArrayBuffer(file);
  }

})();
