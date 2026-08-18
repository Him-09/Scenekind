export type Project = {
  type: string;
  title: string;
  description: string;
  deliverables: string;
  src: string;
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
    type: "AI Commercial",
    title: "Lip Tint Hero Film",
    description:
      "A cinematic beauty launch built around golden-hour intrigue, marble product staging, gloss macros, and a clean branded payoff.",
    deliverables: "15s hero film · type system · 3 social ratios",
    src: "/videos/beauty-hero-film.mp4",
    details: {
      overview:
        "A fifteen-second product story that moves from atmosphere to proof: warm light catches the hand, the tint arrives on marble, shimmer and lip macros show the finish, and a final portrait lands the beauty payoff.",
      builtFor: "Beauty launches, paid social, and feed-first product storytelling.",
      hook: "Golden-hour intrigue becomes glossy product proof in fifteen seconds.",
      direction:
        "Warm, tactile, and editorial. Sheer curtains and pale marble keep the frame premium while gold highlights and tight gloss details give the tint its signature.",
      sequence: [
        "Golden-hour hand and silhouette open the film.",
        "The roll-on tint is revealed against pale marble.",
        "Shimmer texture and glossy-lip macros prove the finish.",
        "A beauty portrait and branded end card close the arc.",
      ],
      deliverables: [
        "15s hero film",
        "Reusable on-screen type system",
        "Product and beauty stills pulled from frame",
      ],
      formats: ["9:16", "4:5", "1:1"],
      runtime: "15 seconds",
      sound: "Music-led edit with restrained product accents.",
      onScreenType: "Five short copy beats in a serif-led brand voice.",
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
];
