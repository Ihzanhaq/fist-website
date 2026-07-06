/**
 * Product catalogue. Flagships have rich detail pages; the wider suite is a
 * compact grid on /products. Copy is verbatim from the content pack.
 */

export const flagshipProducts = [
  {
    slug: 'drona',
    name: 'DRONA',
    kicker: 'AI workflow automation · Fi-Flow AI',
    tagline:
      'DRONA automates your most document-heavy, repetitive processes — turning 7–14 day workflows into 24–48 hours.',
    summary:
      'An end-to-end orchestration layer that ingests documents, classifies and extracts data, routes work, and reports on cycle time — so regulated, repetitive operations run themselves.',
    capabilities: [
      'Document intelligence — OCR, classification & data extraction',
      'Workflow orchestration — cycle-time reduction & SLA tracking',
      'Predictive analytics, conversational AI & computer vision',
    ],
    proof: [
      { value: '98.5%', label: 'OCR accuracy' },
      { value: 'Up to 60%', label: 'Cost reduction' },
      { value: '+40%', label: 'NPS lift' },
    ],
    bestFor:
      'Banks, insurers, government departments and enterprises running high-volume, document-heavy processes.',
  },
  {
    slug: 'atto',
    name: 'ATTO',
    kicker: 'Advanced Text & Table OCR — billing & document automation',
    tagline:
      'ATTO reads invoices, bills and forms the way a person would — only faster and without errors — feeding clean, structured data straight into your ERP or billing system.',
    summary:
      'A document-intelligence engine specialised for structured and semi-structured text and tables. It turns messy paper and PDFs into validated rows your downstream systems can trust.',
    capabilities: [
      'Invoice, bill & form extraction',
      'Table-aware OCR with validation rules',
      'Direct feed into ERP / billing systems',
    ],
    proof: [
      { value: 'Standalone', label: 'or inside DRONA' },
      { value: 'High-volume', label: 'document operations' },
    ],
    bestFor:
      'Finance & accounts-payable teams, freight billing, utilities, and any high-volume document operation. Works standalone or inside DRONA.',
  },
  {
    slug: 'figis',
    name: 'FiGIS',
    kicker: 'Geoconsole — flagship mapping & geospatial platform',
    tagline:
      'FiGIS turns any spatial problem — roads, pipelines, forests, assets, collateral — into a live, decision-ready map, with the exact modules your domain needs.',
    summary:
      'A modular GIS platform combining 2D/3D visualisation, field data collection and asset tracking. Compose the modules your domain requires into a single operational console.',
    capabilities: [
      '2D / 3D visualisation, field data collection & asset tracking',
      'Domain modules for any spatial workflow',
      'Decision-ready maps from live and imported data',
    ],
    modules: [
      { code: 'AQUA', label: 'Pipelines & water' },
      { code: 'URBN', label: 'City planning' },
      { code: 'FRIM', label: 'Forestry' },
      { code: 'ROUT', label: 'Roads & transit' },
      { code: 'ACRE', label: 'Real-estate' },
      { code: 'AGRO', label: 'Agriculture' },
      { code: 'RAID', label: 'Disaster response' },
    ],
    proof: [
      { value: '7', label: 'Domain modules' },
      { value: '2D / 3D', label: 'Visualisation' },
    ],
    bestFor:
      'Government, infrastructure, utilities and enterprises that manage distributed physical assets and need spatial intelligence.',
  },
  {
    slug: 'seal',
    name: 'SEAL',
    kicker: 'Asset intelligence for banks',
    tagline:
      'GIS-based loan and collateral verification — bringing spatial intelligence to lending, asset evaluation and risk.',
    summary:
      'Brings spatial intelligence to the credit lifecycle. Verify collateral, evaluate assets and assess risk with location-aware data and AI assistance.',
    capabilities: [
      'Collateral & asset verification',
      'Spatial risk evaluation',
      'AI-assisted loan assessment',
    ],
    proof: [
      { value: 'GIS-based', label: 'collateral verification' },
      { value: 'AI-assisted', label: 'loan evaluation' },
    ],
    bestFor:
      'Banks and NBFCs needing collateral verification, asset intelligence and AI-assisted loan evaluation.',
  },
]

export const widerSuite = [
  {
    name: 'FIST ERP',
    body: 'Cloud-native ERP unifying CRM, logistics, travel, freight, retail, assets, billing & analytics.',
  },
  {
    name: 'FOCUS',
    body: 'Logistics ERP for freight forwarding, customs (CHA) and warehousing.',
  },
  {
    name: 'EASE',
    body: 'E-commerce platform — single store or full multi-vendor marketplace, with secure payments.',
  },
  {
    name: 'PRESENX',
    body: 'AI workforce platform — face-recognition attendance, geofencing and HR automation.',
  },
  {
    name: 'FLMS',
    body: 'Learning management hub with a built-in exam engine.',
  },
  {
    name: 'PRIME',
    body: 'Project estimation suite — cost planning & infrastructure forecasting.',
  },
  {
    name: 'DMS',
    body: 'Centralised, searchable, audited document & data management for any domain.',
  },
]

export const allProducts = [...flagshipProducts, ...widerSuite]

export function getProduct(slug) {
  return flagshipProducts.find((p) => p.slug === slug) || null
}
