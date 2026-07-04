export type Project = {
  type: string;
  title: string;
  description: string;
  deliverables: string;
  src: string;
  details: {
    overview: string;
    approach: string[];
    deliverables: string[];
    formats: string[];
  };
};

/**
 * Video files live in /public/videos (see public/videos/README.txt).
 * Case-study copy below is written to match the actual footage.
 */
export const projects: Project[] = [
  {
    type: "AI Commercial",
    title: "Lip Tint Hero Film",
    description:
      "A cinematic launch spot for a roll-on lip tint — golden-hour opener, marble product staging, gloss macros, and kinetic copy beats.",
    deliverables: "15s hero film · on-screen type system · 9:16 master",
    src: "/videos/beauty-hero-film.mp4",
    details: {
      overview:
        "A full narrative arc in fifteen seconds: a hand catching golden-hour light through sheer curtains, the product reveal on marble, a shimmer macro of the tint itself, glossy lips in close-up, and a beauty portrait — each beat carried by a line of on-screen copy, closing on a branded end card.",
      approach: [
        "Story structured as five copy beats — intrigue, reveal, texture, result, close",
        "Golden-hour and marble art direction locked in the concept round",
        "Kinetic type set matched to the brand's serif voice",
        "Macro texture shots produced for the swipe-stopping middle beats",
      ],
      deliverables: [
        "15s hero film, 9:16 master",
        "On-screen type system reusable for cutdowns",
        "Branded end card + product stills from frame",
      ],
      formats: ["9:16", "4:5", "1:1"],
    },
  },
  {
    type: "AI Commercial",
    title: "Fitness Wearable Launch",
    description:
      "A hardware-keynote launch film — floating product orbit, exploded-view assembly, and fabric macros that make matte black feel premium.",
    deliverables: "15s launch film · exploded-view sequence · material macros",
    src: "/videos/fitness-wearable-launch.mp4",
    details: {
      overview:
        "The band treated like flagship hardware: a slow orbit in a clean studio void, then the hero moment — an exploded view separating shell, sensor board, and strap in mid-air before snapping back together. Woven-fabric macros with the blue signature thread and clasp details round out the engineering story.",
      approach: [
        "Exploded-view sequence built from product architecture references",
        "Studio-void lighting with controlled speculars for matte black",
        "Macro passes on strap weave and clasp for material credibility",
        "Reassembly timed as the film's payoff beat",
      ],
      deliverables: [
        "15s launch film",
        "Exploded-view sequence as standalone clip",
        "360° spin loops + detail macros for product pages",
      ],
      formats: ["9:16", "1:1", "16:9"],
    },
  },
  {
    type: "Product Ads",
    title: "Skincare Product Spotlight",
    description:
      "A premium spot for a rejuvenating cream — pedestal staging, texture swirls, a molecular science motif, and a lid-lift reveal.",
    deliverables: "15s spotlight · texture + science sequences · end card",
    src: "/videos/skincare-product-spotlight.mp4",
    details: {
      overview:
        "A silver-toned product film that moves from shelf appeal to science: the jar on a glass pedestal, a push-in on the label, cream texture swirling in macro with suspended droplets, a 3D molecular-network motif to carry the efficacy story, and a lid-lift reveal before the black end card.",
      approach: [
        "Monochrome silver palette matched to the brand's packaging",
        "Texture macro pass — swirl, droplets, sheen — for tactile appeal",
        "Molecular 3D motif designed to visualize the active-ingredient story",
        "Label legibility protected at feed sizes throughout",
      ],
      deliverables: [
        "15s spotlight film, 9:16 master",
        "Texture and molecule sequences as standalone clips",
        "Branded end card + hero stills",
      ],
      formats: ["9:16", "1:1"],
    },
  },
  {
    type: "Product Ads",
    title: "Skincare Application Demo",
    description:
      "A model-led demo ad for the same cream — jar to camera, spatula scoop, texture pull, and on-skin application in warm light.",
    deliverables: "10s demo ad · application sequence · product stills",
    src: "/videos/skincare-paid-social.mp4",
    details: {
      overview:
        "The conversion companion to the spotlight film: a model presents the jar to camera, a spatula scoops the cream in macro, the texture pulls and stretches, and the routine finishes with application on the cheek — the sequence paid social rewards, staged in warm beige light that keeps it premium.",
      approach: [
        "Demo arc structured as present → scoop → texture → apply",
        "Model casting and warm palette matched to the brand audience",
        "Macro texture-pull shot produced as the scroll-stopper",
        "Same visual system as the spotlight film for a coherent ad set",
      ],
      deliverables: [
        "10s application demo, 9:16 master",
        "Scoop and texture clips for hook testing",
        "Closing product stills",
      ],
      formats: ["9:16", "4:5"],
    },
  },
  {
    type: "Creator-Style Video",
    title: "Creator-Style Refill Demo",
    description:
      "A creator-led demo for a refillable soap system — bathroom vanity setting, tablet-drop refill moment, foam test, direct-to-camera close.",
    deliverables: "34s creator video · demo sequence · multiple hook points",
    src: "/videos/creator-testimonial-batch.mp4",
    details: {
      overview:
        "A creator video that reads like a real post: she walks up to her vanity, introduces the amber-glass dispenser, drops the dissolving tablet in and fills it at the tap — the satisfying product moment — then lathers up and closes direct to camera. Native pacing, handheld energy, commercial-level product clarity.",
      approach: [
        "Creator persona, wardrobe, and bathroom set defined up front",
        "Script beats: hook → unbox → tablet demo → foam proof → close",
        "Tablet-drop staged as the shareable centerpiece moment",
        "Multiple cut points built in for hook and length variations",
      ],
      deliverables: [
        "34s creator demo, 9:16",
        "Alternate hook openings from the same scene",
        "Persona reusable for future batches",
      ],
      formats: ["9:16"],
    },
  },
];
