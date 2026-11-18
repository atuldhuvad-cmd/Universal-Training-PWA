# Workforce Training Intelligence Platform (PWA)
### Health Department · Ahmedabad District, Gujarat
**Author & Lead:** Dr. Atul (Medical Officer & District Trainer)  
**Architecture:** 100% Offline-First, Zero-Build Progressive Web App (PWA) for Personal & District Use

---

## 🌟 Key Capabilities

### 1. 100% Offline & Zero-Build Ready
- **No Node.js or server required:** Double-click `Launch_PWA.bat` or `pwa/index.html` to run instantly on any standard Windows government laptop or desktop.
- **Installable PWA:** Click **📲 Install App** in Chrome or Edge to install as an independent desktop application with a custom medical icon and taskbar shortcut.
- **Bundled Offline Libraries:** `Chart.js`, `jsPDF`, `jsPDF-AutoTable`, and `SheetJS (XLSX)` are stored directly in `pwa/js/vendor/`. No internet connection required after launch.

### 2. Universal Training Capability
- **Blank / Configurable Title:** The training title field in the top header is customizable. Type any training name (e.g., *Common Cancer Screening*, *RCH / Maternal Health*, *IDY / NCD*, *FP-DMPA*, *ASHA Emergency Module*) or select from quick presets. It automatically persists across sessions via `localStorage`.
- **Dynamic Cadres:** Automatically detects cadres present in any master staffing matrix (e.g., `MO`, `CHO`, `SN`, `FHW`, `MPHW`, `ASHA`, `AYUSH`, `LT`, `Pharmacist`, etc.) and assigns harmonious color-coded badges and table columns.
- **Multi-Tier Facilities:** Automatically classifies facilities beyond PHCs: District Hospitals (`DH`), Sub-District Hospitals (`SDH`), Community Health Centres (`CHC`), Urban Health Centres (`UPHC`), Primary Health Centres (`PHC`), Sub-Centres / Arogya Mandirs (`SC / AAM`), Schools, and Anganwadis (`AWC`).

### 3. Google Form & Excel Ingest Engine
- **Designation Normalizer:** Automatically resolves variations from Google Form joining reports:
  - `Fhw`, `FHW`, `RFHW`, `ANM`, `A.N.M.` $\rightarrow$ **`FHW`**
  - `Community Health Officer`, `CHO`, `C.H.O.`, `MLHP` $\rightarrow$ **`CHO`**
  - `Medical Officer`, `MO`, `M.O.`, `M.O`, `AYUSH MO` $\rightarrow$ **`MO`**
  - `Staff Nurse`, `SN`, `S.N.` $\rightarrow$ **`SN`**
  - `MPHW`, `M.P.H.W.`, `Multipurpose Health Worker` $\rightarrow$ **`MPHW`**
  - `ASHA`, `LT`, `Pharmacist`, etc.
- **Facility & Taluka Normalizer:** Cleans prefixes like `PHC `, `Primary Health Centre`, `P.H.C.`, `Sabsentar`, `AAM ` and corrects district spelling variants (`BAVALA` $\rightarrow$ `BAVLA`, `Dascroi` $\rightarrow$ `DASCROI`, `AAKRU` $\rightarrow$ `AKARU`, `Nanodra` $\rightarrow$ `NANODARA`, `Ambalyara` $\rightarrow$ `AMBALIYARA`).

### 4. Critical Data Rules Enforced (Zero Data Dropping)
- **Rule 0:** Master Staffing file is the authoritative universe for official blocks, facilities, and sanctioned denominators.
- **Rule 1 (No Capping):** If trained staff exceeds sanctioned posts (e.g., 2 trained with 0 sanctioned), they are 100% counted.
- **Rule 2 (Excess Tracking):** `excess = max(0, trained - sanctioned)` tracked per cadre and facility.
- **Rule 3 (Untrained Calculation):** `untrained = max(0, sanctioned - trained)`.
- **Baseline Figures Verified:** 742 Sanctioned Posts, 700 Trained Staff, 46 Untrained, 16 Excess, 94.3% District Coverage across 9 Blocks and 47 PHCs.

### 5. Report Generation (Exact Match)
- **52-Page Master PDF Report:** Print-friendly light theme (Deep Navy `#0D2640` header, Teal `#009682` accent, white paper background):
  - *Page 1:* District Dashboard with 6 KPI stat boxes, excess note, and Block-wise Summary table.
  - *Pages 2–3:* Facility-wise Cadre Detail (47 facilities, Total/Trained/Untrained per cadre).
  - *Page 4:* Cadre-wise Coverage Summary across the district with excess column.
  - *Pages 5–52:* Individual Facility Rosters (1 page per facility, 47 pages total, color-coded cadre text).
- **Targeted Block PDF:** Export single-block 2–4 page summaries for Taluka Health Officers.
- **6-Sheet Formatted Excel:** Generates `.xlsx` workbook containing *Dashboard Summary*, *PHC Detail*, *Block Progress*, *Trained Staff List*, *Cadre Summary*, and *Over-Trained Detail*.

---

## 📂 File Directory

```
pwa/
├── index.html                   # Core dashboard shell
├── manifest.webmanifest         # PWA Manifest (standalone desktop/mobile app)
├── sw.js                        # Service Worker (offline cache-first engine)
├── css/
│   ├── style.css                # Official Government dark navy & teal theme
│   └── components.css           # KPI cards, data grids, batch planner, heat maps
├── icons/
│   ├── icon.svg                 # Scalable medical emblem
│   ├── icon-192.png             # Desktop & Android launcher icon
│   └── icon-512.png             # High-res splash screen icon
└── js/
    ├── app.js                   # Application controller & reactive filter engine
    ├── universal-engine.js      # Universal cadre parser, facility classifier, non-capping math
    ├── designation-mapper.js    # Google Form fuzzy normalizer & bilingual column mapper
    ├── dataset-cancer-master.js # Pre-compiled baseline (742 sanctioned, 700 trained staff)
    ├── report-pdf.js            # Exact 52-page PDF generator (jsPDF + AutoTable)
    ├── report-excel.js          # Multi-sheet Excel generator (SheetJS)
    └── vendor/                  # 100% offline bundled libraries
        ├── chart.umd.min.js     # Chart.js 4.4.1
        ├── jspdf.umd.min.js     # jsPDF 2.5.1
        ├── jspdf.plugin.autotable.min.js # AutoTable 3.8.2
        └── xlsx.full.min.js     # SheetJS 0.18.5
```

---

## 🚀 How to Run & Install

### 📱 Mobile (Android & iPhone)
1. Open the live secure web app on your mobile phone:  
   **[https://atuldhuvad-cmd.github.io/Universal-Training-PWA/](https://atuldhuvad-cmd.github.io/Universal-Training-PWA/)**
2. **Android (Chrome):** Tap Menu (⋮) &rarr; Tap **"Install app"** or **"Add to Home screen"**.
3. **iPhone (Safari):** Tap the Share icon (square with arrow) &rarr; Tap **"Add to Home Screen"**.
4. The app icon installs directly to your home screen and works 100% offline with instant local storage!

### 💻 Windows Desktop (Zero-Setup & 100% Offline)
1. **Option A (Instant Desktop Shortcut):** Double-click `Create_Desktop_Shortcut.bat` to automatically place a permanent shortcut on your Windows Desktop with the official medical icon.
2. **Option B (Standalone App Window):** Double-click `Launch_PWA.bat` to launch in distraction-free standalone app mode without browser tabs or address bar.
3. **Option C (Browser Install):** Open in Chrome or Edge and click **📲 Install App** in the header (or the install icon in the URL omnibox) to install to your Windows Start Menu and Taskbar.

---

## 🔒 Privacy & Data Protection by Design
- **Zero Real Names in Repository:** All sample and baseline rosters in the repository demo contain purely anonymous synthetic identifiers (`Participant (Cadre-Block-SrNo)`).
- **Local-First Processing:** Real attendance records, Google Form responses, and Excel imports are processed locally in your browser memory and private `localStorage`. Real participant data never leaves your device and is never uploaded or tracked in Git.
