export type Project = {
  type: string;
  title: string;
  description: string;
  deliverables: string;
  src: string;
  specKitHref?: string;
  details: {
    overview: string;
    builtFor: string;
    hook: string;
    direction: string;
    sequence: string[];
    deliverables: string[];
    formats: string[];
    runtime: string;
    sound: string;
    onScreenType: string;
  };
};

/**
 * Video files live in /public/videos (see public/videos/README.txt).
 * Each modal is a compact case study: the strategic read, the hook,
 * visual direction, sequence, and delivery details.
 */
export const projects: Project[] = [
  {
    type: "Product Ad",
    title: "Le Mieux Bio Cell Cream",
    description:
      "A polished skincare spotlight built from frosted-glass staging, cream texture, molecular imagery, and a precise product reveal.",
    deliverables: "15s product film · texture macro · science sequence",
    src: "/videos/skincare-product-spotlight.mp4",
    details: {
      overview:
        "A silver-toned product film that moves from shelf appeal to texture and science. The jar emerges through frosted glass, cream and suspended droplets create the sensory middle, and a molecular network leads into the final lid-lift reveal.",
      builtFor: "Premium skincare launches, paid social, and product-page storytelling.",
      hook: "Clinical skincare made tactile through glass, cream, and molecular motion.",
      direction:
        "Clinical, luminous, and precise. Frost white, polished silver, and soft gray keep the palette aligned to the packaging while fluid highlights stop the product from feeling sterile.",
      sequence: [
        "The jar appears through a frosted-glass cylinder.",
        "A label push-in establishes the Bio Cell Rejuvenating Cream.",
        "Cream texture, droplets, and molecular motion carry the efficacy story.",
        "The lid lifts cleanly before the Le Mieux end card.",
      ],
      deliverables: [
        "15s product spotlight",
        "Texture and molecular-science sequences",
        "Hero product reveal and branded end card",
      ],
      formats: ["9:16"],
      runtime: "15 seconds",
      sound: "Music-led with restrained glass, liquid, and reveal accents.",
      onScreenType: "The packaging carries the detail; the final card resolves to Le Mieux.",
    },
  },
  {
    type: "AI Commercial",
    title: "Fitness Wearable Launch",
    description:
      "A hardware-keynote launch film with a floating product orbit, exploded-view assembly, and material macros for a premium matte-black finish.",
    deliverables: "15s launch film · exploded view · detail macros",
    src: "/videos/fitness-wearable-launch.mp4",
    details: {
      overview:
        "The wearable is treated like flagship hardware. A clean studio orbit establishes the form, an exploded view separates shell, sensor board, and strap, and woven-fabric macros make the engineering legible before the product locks back together.",
      builtFor: "Hardware launches, product pages, and paid-social cutdowns.",
      hook: "Break the band apart to make the engineering visible.",
      direction:
        "Minimal, technical, and precise. A controlled studio void protects the matte-black body while cool highlights, blue thread, and crisp component spacing carry the premium read.",
      sequence: [
        "A slow orbit introduces the band as a hero object.",
        "Shell, sensor board, and strap separate in mid-air.",
        "Fabric weave and clasp macros establish material quality.",
        "The components snap together for the final payoff.",
      ],
      deliverables: [
        "15s launch film",
        "Standalone exploded-view sequence",
        "Spin loops and product-detail macros",
      ],
      formats: ["9:16", "1:1", "16:9"],
      runtime: "15 seconds",
      sound: "Clean electronic build with precise assembly accents.",
      onScreenType: "Sparse feature copy; the product remains the graphic focus.",
    },
  },
  {
    type: "AI Commercial",
    title: "AbsoluteJOI Night Oil",
    description:
      "A bright 19-second ritual film that turns the product directions - drop, warm, pat - into a communal skincare story.",
    deliverables: "19s ritual film · 4 ratios · tactile product story",
    src: "/videos/absolutejoi-night-oil.mp4",
    specKitHref: "/absolutejoi",
    details: {
      overview:
        "Three friends frame the ritual as shared knowledge while the oil stays at the center. The edit moves from social invitation to pipette and palm detail, luminous skin, and a final group return around the bottle.",
      builtFor: "Cold prospecting across Instagram Reels and Meta feeds.",
      hook: "The instructions become the ad: drop, warm, pat, glow.",
      direction:
        "Buoyant, warm, assured, and communal. A lilac field and amber oil create the signature, while cream, camel, rust, and denim separate the three leads without losing cohesion.",
      sequence: [
        "The three-woman circle arrives with unguarded energy.",
        "The bottle advances and an amber drop lands in an open palm.",
        "Warm palms and three cheek pats turn instruction into movement.",
        "Luminous skin and the returning circle resolve to the end card.",
      ],
      deliverables: [
        "19s finished film",
        "H.264 masters in four social ratios",
        "Two proposition beats plus branded end card",
      ],
      formats: ["9:16", "4:5", "1:1", "16:9"],
      runtime: "19 seconds",
      sound: "Warm swinging groove, laughter, pipette, palm-rub, and cheek-pat foley; no voiceover.",
      onScreenType: "ONE OIL / RETINOL + VITAMIN C, then OVERNIGHT / SKIN RENEWAL.",
    },
  },
  {
    type: "AI Commercial",
    title: "GLASSFX DUO-HYDRAfx",
    description:
      "A 16-second motion-first product film built around the bi-phase formula: separate, shake, swirl, mist, and settle.",
    deliverables: "16s product film · 4 ratios · formula macro",
    src: "/videos/glassfx-duo-hydrafx.mp4",
    specKitHref: "/glassfx",
    details: {
      overview:
        "The packaging explains the product before copy can. The film turns its two visible phases into the story, moving from bottle recognition to a marbled-gold macro, atomised mist, skin payoff, and final brand recall.",
      builtFor: "A first paid-social benchmark across Instagram Reels and Meta feeds.",
      hook: "Three snaps of the wrist, and the two layers become one.",
      direction:
        "Clinical, buoyant, weightless, and precise. Frost white, cool gray-blue, and brushed silver hold the set; the amber oil phase is the only warm accent.",
      sequence: [
        "An overhead hold introduces the bottle and its two phases.",
        "The product advances to lens before amber and milk marble into gold.",
        "A fine mist crosses the face and droplets settle on natural skin.",
        "Direct gaze and a final bottle presentation lead to the white card.",
      ],
      deliverables: [
        "16s finished film",
        "H.264 masters in four social ratios",
        "Formula, mist, skin-detail, and hero-product coverage",
      ],
      formats: ["9:16", "4:5", "1:1", "16:9"],
      runtime: "16 seconds",
      sound: "Restrained liquid movement, atomiser hiss, and one clean finish; no voiceover.",
      onScreenType: "No copy over imagery; the product label leads, followed by a clean white end card.",
    },
  },
  {
    type: "Creator-Style Video",
    title: "Creator-Style Refill Demo",
    description:
      "A creator-led refill story with a bathroom-vanity setup, tablet-drop transformation, foam test, and direct-to-camera close.",
    deliverables: "34s creator video · demo sequence · hook cut points",
    src: "/videos/creator-testimonial-batch.mp4",
    details: {
      overview:
        "The film reads like a real recommendation while keeping the product steps unmistakable. A creator introduces the amber-glass dispenser, drops in the tablet, fills it at the tap, tests the foam, and closes directly to camera.",
      builtFor: "Creator-style paid social, hook testing, and conversion-focused product education.",
      hook: "The tablet drop turns a refill routine into visible proof.",
      direction:
        "Native, bright, and credible. Handheld energy and a lived-in vanity setting keep the post conversational while deliberate product framing protects clarity.",
      sequence: [
        "The creator enters the vanity setup and introduces the bottle.",
        "A tablet drops into the dispenser and water activates the refill.",
        "The foam test proves the finished product in use.",
        "A direct-to-camera close lands the recommendation.",
      ],
      deliverables: [
        "34s creator demo",
        "Alternate hook openings from the same scene",
        "Reusable creator persona for future batches",
      ],
      formats: ["9:16"],
      runtime: "34 seconds",
      sound: "Conversational delivery with native room tone and product-action accents.",
      onScreenType: "Light-touch captions and product callouts designed for feed viewing.",
    },
  },
  {
    type: "Product Ad",
    title: "Rhode Glazing Milk",
    description:
      "A moody bathroom ritual pairing intimate mirror portraits, raw skin texture, and tactile Glazing Milk application close-ups.",
    deliverables: "32s vertical film · skincare ritual · product and application close-ups",
    src: "/videos/rhode-glazing-milk.mp4",
    details: {
      overview:
        "A private skincare ritual unfolds through a dim bathroom mirror. Intimate portraits and honest skin texture lead into the Rhode bottle, fingertip application, and a quiet return to the reflection.",
      builtFor: "Beauty campaigns, organic social, and skincare product storytelling.",
      hook: "A bathroom mirror turns a private ritual into a cinematic product story.",
      direction:
        "Moody, intimate, and tactile, with tungsten light, deep shadows, aged tile, and close natural-skin detail.",
      sequence: [
        "A low-lit mirror portrait establishes the private setting.",
        "The Rhode bottle enters on the bathroom sink.",
        "Skin and fingertip macros make the application tactile.",
        "The film resolves on the creator and product in the mirror.",
      ],
      deliverables: [
        "32s vertical product film",
        "Portrait, product, and application coverage",
        "Natural-skin and mirror-storytelling close-ups",
      ],
      formats: ["9:16"],
      runtime: "32 seconds",
      sound: "Original supplied audio mix.",
      onScreenType: "The product label carries the branding with minimal added copy.",
    },
  },
];
