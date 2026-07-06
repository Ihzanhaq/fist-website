/**
 * CENTRAL IMAGE MANIFEST
 * ----------------------
 * Every <img>/background in the site resolves through this file, so replacing
 * an asset later is a one-line change. Imagery is abstract / architectural /
 * data / cartographic — no stocky people, no fake dashboards (per 04_UI_PATTERNS).
 *
 * URLs are Unsplash direct links with sizing params. If any URL fails to load,
 * <SmartImage/> falls back to a themed gradient, so the UI never breaks.
 * Review/swap freely — these are intentional placeholders curated for tone.
 */

const U = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  hero: U("1451187580459-43490279c0fa", 2000),
  heroAlt: U("1518770660439-4636190af475", 2000),

  heroVideo:
    "https://res.cloudinary.com/dijyw23q9/video/upload/v1783327754/compressed_hero_owb3aq.mp4",

  // Three-pillar / capabilities
  pillarAi: U("1677442136019-21780ecad995", 1200),
  pillarGis: "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
  pillarErp: U("1551434678-e076c223a692", 1200),

  // Products
  drona: U("1581091226825-a6a2a5aee158", 1400),
  atto: U("1554224155-6726b3ff858f", 1400),
  figis: "https://images.pexels.com/photos/23781/pexels-photo.jpg",
  seal: U("1601597111158-2fceff292cdc", 1400),

  // About / company
  aboutStory: U("1497366754035-f200968a6e72", 1600),
  footprint: U("1521295121783-8a321d551ad2", 1800),
  team: U("1522071820081-009f0129c71c", 1400),

  // Industries
  indGovernment: U("1486406146926-c627a92ad1ab", 1200),
  indBanking: U("1601597111158-2fceff292cdc", 1200),
  indLogistics: U("1586528116311-ad8dd3c8310d", 1200),
  indTravel: U("1436491865332-7a61a109cc05", 1200),
  indRetail: U("1556742049-0cfed4f6a45d", 1200),
  indHealth: U("1576091160550-2173dba999ef", 1200),
  indGeospatial: U("1477959858617-67f85cf4f1df", 1200),
  indEducation: U("1503676260728-1c00da094a0b", 1200),

  // Services / misc
  servicesHero: U("1518770660439-4636190af475", 1800),
  migration: U("1551288049-bebda4e38f71", 1400),
  ctaBand: U("1517245386807-bb43f82c33c4", 2000),

  // Texture
  gridTexture: U("1558591710-4b4a1ae0f04d", 1200),
};

/** Map a product slug to its image. */
export const productImage = (slug) => images[slug] || images.hero

/** Map an industry index/keyword to its image. */
export const industryImage = (key) => images[key] || images.indGeospatial

export default images
