const MODELS = [
  {
    id: "bulkamancer-malenia",
    artist: "Bulkamancer",
    series: "Elden Ring",
    title: "Malenia, Blade of Miquella",
    images: [
      "images/bulkamancer/elden-ring/malenia/malenia-1.jpg",
      "images/bulkamancer/elden-ring/malenia/malenia-2.jpg",
      "images/bulkamancer/elden-ring/malenia/malenia-3.jpg",
      "images/bulkamancer/elden-ring/malenia/malenia-4.jpg",
      "images/bulkamancer/elden-ring/malenia/malenia-5.jpg",
      "images/bulkamancer/elden-ring/malenia/malenia-6.jpg",
      "images/bulkamancer/elden-ring/malenia/malenia-7.jpg",
      "images/bulkamancer/elden-ring/malenia/malenia-8.jpg",
      "images/bulkamancer/elden-ring/malenia/malenia-9.jpg",
      "images/bulkamancer/elden-ring/malenia/malenia-10.jpg",
      "images/bulkamancer/elden-ring/malenia/malenia-11.jpg",
      "images/bulkamancer/elden-ring/malenia/malenia-12.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "https://www.etsy.com/listing/4510471991/scarlet-lady-blade-of-rot-ring-of-elden" }
    ],
    description: "A striking sculpt of Malenia, Blade of Miquella, captured mid-battle stance with intricate rot and blade detailing."
  },
  {
    id: "ca3d-spidey",
    artist: "CA3D Studios",
    series: "Marvel",
    title: "Spider-Man on Goblin Glider",
    images: [
      "images/ca3d/marvel/spider-man/spidey-glider-1.jpg",
      "images/ca3d/marvel/spider-man/spidey-glider-2.jpg",
      "images/ca3d/marvel/spider-man/spidey-glider-3.jpg",
      "images/ca3d/marvel/spider-man/spidey-glider-4.jpg",
      "images/ca3d/marvel/spider-man/spidey-glider-5.jpg",
      "images/ca3d/marvel/spider-man/spidey-glider-6.jpg",
      "images/ca3d/marvel/spider-man/spidey-glider-7.jpg",
      "images/ca3d/marvel/spider-man/spidey-glider-8.jpg",
      "images/ca3d/marvel/spider-man/spidey-glider-9.jpg",
      "images/ca3d/marvel/spider-man/spidey-glider-10.jpg",
      "images/ca3d/marvel/spider-man/spidey-glider-11.jpg",
      "images/ca3d/marvel/spider-man/spidey-glider-12.jpg",
      "images/ca3d/marvel/spider-man/spidey-glider-13.jpg"
    ],
    scaleOptions: [
      { scale: "1/4 Scale", size: "Approx. Dimensions: 14 in D x 16 in W x 25 in H", etsyUrl: "https://www.etsy.com/listing/4497859644/spider-man-3d-printed-scale-resin-statue" },
      { scale: "1/9 Scale", size: "Approx. Dimensions: 5 in D x 7 in W x 10 in H", etsyUrl: "https://www.etsy.com/listing/4497859644/spider-man-3d-printed-scale-resin-statue" }
    ],
    description: "A dynamic sculpt of Spider-Man perched atop the Goblin's glider, capturing a tense mid-air standoff."
  },
  {
    id: "kc-absolute-batman",
    artist: "KcStudio",
    series: "DC",
    title: "Absolute Batman",
    images: [
      "images/kc-studio/dc/absolute-batman/absolute-batman-1.jpg",
      "images/kc-studio/dc/absolute-batman/absolute-batman-2.jpg",
      "images/kc-studio/dc/absolute-batman/absolute-batman-3.jpg",
      "images/kc-studio/dc/absolute-batman/absolute-batman-4.jpg",
      "images/kc-studio/dc/absolute-batman/absolute-batman-5.jpg",
      "images/kc-studio/dc/absolute-batman/absolute-batman-6.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A brutal, armor-plated take on the Absolute Batman, built for close-quarters combat with a stripped-down, industrial edge."
  },
  {
    id: "kc-agent-47",
    artist: "KcStudio",
    series: "Hitman",
    title: "Agent 47",
    images: [
      "images/kc-studio/hitman/agent-47/agent-47-1.jpg",
      "images/kc-studio/hitman/agent-47/agent-47-2.jpg",
      "images/kc-studio/hitman/agent-47/agent-47-3.jpg",
      "images/kc-studio/hitman/agent-47/agent-47-4.jpg",
      "images/kc-studio/hitman/agent-47/agent-47-5.jpg",
      "images/kc-studio/hitman/agent-47/agent-47-6.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A sharply tailored sculpt of the World's Greatest Assassin, rendered in cold, precise detail down to the barcode tattoo."
  },
  {
    id: "kc-aragorn",
    artist: "KcStudio",
    series: "Lord of the Rings",
    title: "Aragorn",
    images: [
      "images/kc-studio/lotr/aragorn/aragorn-1.jpg",
      "images/kc-studio/lotr/aragorn/aragorn-2.jpg",
      "images/kc-studio/lotr/aragorn/aragorn-3.jpg",
      "images/kc-studio/lotr/aragorn/aragorn-4.jpg",
      "images/kc-studio/lotr/aragorn/aragorn-5.jpg",
      "images/kc-studio/lotr/aragorn/aragorn-6.jpg",
      "images/kc-studio/lotr/aragorn/aragorn-7.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A regal sculpt of Aragorn, sword raised, capturing the future king of Gondor in his finest hour."
  },
  {
    id: "kc-batman-chair",
    artist: "KcStudio",
    series: "DC",
    title: "Batman on the Throne",
    images: [
      "images/kc-studio/dc/batman-chair/batman-1.jpg",
      "images/kc-studio/dc/batman-chair/batman-2.jpg",
      "images/kc-studio/dc/batman-chair/batman-3.jpg",
      "images/kc-studio/dc/batman-chair/batman-4.jpg",
      "images/kc-studio/dc/batman-chair/batman-5.jpg",
      "images/kc-studio/dc/batman-chair/batman-6.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A brooding sculpt of Batman seated atop a shattered throne, cape pooling around him in quiet, weary triumph."
  },
  {
    id: "kc-cloud-strife",
    artist: "KcStudio",
    series: "Final Fantasy 7",
    title: "Cloud Strife",
    images: [
      "images/kc-studio/final-fantasy/cloud-strife/cloud-strife-1.jpg",
      "images/kc-studio/final-fantasy/cloud-strife/cloud-strife-2.jpg",
      "images/kc-studio/final-fantasy/cloud-strife/cloud-strife-3.jpg",
      "images/kc-studio/final-fantasy/cloud-strife/cloud-strife-4.jpg",
      "images/kc-studio/final-fantasy/cloud-strife/cloud-strife-5.jpg",
      "images/kc-studio/final-fantasy/cloud-strife/cloud-strife-6.jpg",
      "images/kc-studio/final-fantasy/cloud-strife/cloud-strife-7.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "Buster Sword in hand, this sculpt captures Cloud Strife mid-stride with SOLDIER-grade attitude and iconic spiked hair."
  },
  {
    id: "kc-fem-shepard",
    artist: "KcStudio",
    series: "Mass Effect",
    title: "Commander Shepard [Fem Ver]",
    images: [
      "images/kc-studio/mass-effect/fem-shep/shepard-1.jpg",
      "images/kc-studio/mass-effect/fem-shep/shepard-2.jpg",
      "images/kc-studio/mass-effect/fem-shep/shepard-3.jpg",
      "images/kc-studio/mass-effect/fem-shep/shepard-4.jpg",
      "images/kc-studio/mass-effect/fem-shep/shepard-5.jpg",
      "images/kc-studio/mass-effect/fem-shep/shepard-6.jpg",
      "images/kc-studio/mass-effect/fem-shep/shepard-7.jpg",
      "images/kc-studio/mass-effect/fem-shep/shepard-8.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A battle-ready sculpt of Commander Shepard, N7 armor detailed and ready to take on the Reapers."
  },
  {
    id: "kc-deacon",
    artist: "KcStudio",
    series: "Days Gone",
    title: "Deacon St. John",
    images: [
      "images/kc-studio/days-gone/deacon/deacon-1.jpg",
      "images/kc-studio/days-gone/deacon/deacon-2.jpg",
      "images/kc-studio/days-gone/deacon/deacon-3.jpg",
      "images/kc-studio/days-gone/deacon/deacon-4.jpg",
      "images/kc-studio/days-gone/deacon/deacon-5.jpg",
      "images/kc-studio/days-gone/deacon/deacon-6.jpg",
      "images/kc-studio/days-gone/deacon/deacon-7.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A grizzled sculpt of Deacon St. John, road-worn leathers and rifle ready for whatever the Freakers throw at him."
  },
  {
    id: "kc-grievous",
    artist: "KcStudio",
    series: "Star Wars",
    title: "General Grievous",
    images: [
      "images/kc-studio/star-wars/grievous/grievous-1.jpg",
      "images/kc-studio/star-wars/grievous/grievous-2.jpg",
      "images/kc-studio/star-wars/grievous/grievous-3.jpg",
      "images/kc-studio/star-wars/grievous/grievous-4.jpg",
      "images/kc-studio/star-wars/grievous/grievous-5.jpg",
      "images/kc-studio/star-wars/grievous/grievous-6.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A menacing sculpt of General Grievous, lightsabers drawn and ready to add another Jedi kill to his collection."
  },
  {
    id: "kc-geralt",
    artist: "KcStudio",
    series: "The Witcher",
    title: "Geralt of Rivia",
    images: [
      "images/kc-studio/the-witcher/geralt/geralt-1.jpg",
      "images/kc-studio/the-witcher/geralt/geralt-2.jpg",
      "images/kc-studio/the-witcher/geralt/geralt-3.jpg",
      "images/kc-studio/the-witcher/geralt/geralt-4.jpg",
      "images/kc-studio/the-witcher/geralt/geralt-5.jpg",
      "images/kc-studio/the-witcher/geralt/geralt-6.jpg",
      "images/kc-studio/the-witcher/geralt/geralt-7.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A hardened sculpt of Geralt of Rivia, silver sword drawn and ready for whatever monster awaits."
  },
  {
    id: "kc-gordon-freeman",
    artist: "KcStudio",
    series: "Half-Life",
    title: "Gordon Freeman",
    images: [
      "images/kc-studio/half-life/gordon-freeman/freeman-1.jpg",
      "images/kc-studio/half-life/gordon-freeman/freeman-2.jpg",
      "images/kc-studio/half-life/gordon-freeman/freeman-3.jpg",
      "images/kc-studio/half-life/gordon-freeman/freeman-4.jpg",
      "images/kc-studio/half-life/gordon-freeman/freeman-5.jpg",
      "images/kc-studio/half-life/gordon-freeman/freeman-6.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A weary, resolute sculpt of Gordon Freeman, crowbar in hand and HEV suit weathered from the fight ahead."
  },
  {
    id: "kc-he-man",
    artist: "KcStudio",
    series: "Masters of the Universe",
    title: "He-Man",
    images: [
      "images/kc-studio/masters-of-the-universe/he-man/he-man-1.jpg",
      "images/kc-studio/masters-of-the-universe/he-man/he-man-2.jpg",
      "images/kc-studio/masters-of-the-universe/he-man/he-man-3.jpg",
      "images/kc-studio/masters-of-the-universe/he-man/he-man-4.jpg",
      "images/kc-studio/masters-of-the-universe/he-man/he-man-5.jpg",
      "images/kc-studio/masters-of-the-universe/he-man/he-man-6.jpg",
      "images/kc-studio/masters-of-the-universe/he-man/he-man-7.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A commanding sculpt of He-Man, Power Sword raised, channeling the full strength of Grayskull."
  },
  {
    id: "kc-inarius",
    artist: "KcStudio",
    series: "Diablo",
    title: "Inarius",
    images: [
      "images/kc-studio/diablo/inarius/inarius-1.jpg",
      "images/kc-studio/diablo/inarius/inarius-2.jpg",
      "images/kc-studio/diablo/inarius/inarius-3.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "An imposing sculpt of Inarius, fallen angel and founder of Sanctuary, rendered with celestial and dark detailing."
  },
  {
    id: "kc-judge-dredd",
    artist: "KcStudio",
    series: "Judge Dredd",
    title: "Judge Dredd",
    images: [
      "images/kc-studio/judge-dredd/judge-dredd/judge-dredd-1.jpg",
      "images/kc-studio/judge-dredd/judge-dredd/judge-dredd-2.jpg",
      "images/kc-studio/judge-dredd/judge-dredd/judge-dredd-3.jpg",
      "images/kc-studio/judge-dredd/judge-dredd/judge-dredd-4.jpg",
      "images/kc-studio/judge-dredd/judge-dredd/judge-dredd-5.jpg",
      "images/kc-studio/judge-dredd/judge-dredd/judge-dredd-6.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A hard-edged sculpt of Mega-City One's toughest lawman, helmet down and judgment ready."
  },
  {
    id: "kc-kylo",
    artist: "KcStudio",
    series: "Star Wars",
    title: "Kylo Ren",
    images: [
      "images/kc-studio/star-wars/kylo-ren/kylo-1.jpg",
      "images/kc-studio/star-wars/kylo-ren/kylo-2.jpg",
      "images/kc-studio/star-wars/kylo-ren/kylo-3.jpg",
      "images/kc-studio/star-wars/kylo-ren/kylo-4.jpg",
      "images/kc-studio/star-wars/kylo-ren/kylo-5.jpg",
      "images/kc-studio/star-wars/kylo-ren/kylo-6.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A brooding sculpt of Kylo Ren, crackling lightsaber ignited and cloak billowing with dark side intensity."
  },
  {
    id: "kc-lady-maria",
    artist: "KcStudio",
    series: "Bloodborne",
    title: "Lady Maria",
    images: [
      "images/kc-studio/bloodborne/lady-maria/lady-maria-1.jpg",
      "images/kc-studio/bloodborne/lady-maria/lady-maria-2.jpg",
      "images/kc-studio/bloodborne/lady-maria/lady-maria-3.jpg",
      "images/kc-studio/bloodborne/lady-maria/lady-maria-4.jpg",
      "images/kc-studio/bloodborne/lady-maria/lady-maria-5.jpg",
      "images/kc-studio/bloodborne/lady-maria/lady-maria-6.jpg",
      "images/kc-studio/bloodborne/lady-maria/lady-maria-7.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A refined, blade-sharp sculpt of Lady Maria of the Astral Clocktower, rendered mid-duel with her signature Rakuyo daggers."
  },
  {
    id: "kc-legolas",
    artist: "KcStudio",
    series: "Lord of the Rings",
    title: "Legolas",
    images: [
      "images/kc-studio/lotr/legolas/legolas-1.jpg",
      "images/kc-studio/lotr/legolas/legolas-2.jpg",
      "images/kc-studio/lotr/legolas/legolas-3.jpg",
      "images/kc-studio/lotr/legolas/legolas-4.jpg",
      "images/kc-studio/lotr/legolas/legolas-5.jpg",
      "images/kc-studio/lotr/legolas/legolas-6.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A poised sculpt of Legolas mid-draw, bow in hand and elven precision captured in every detail."
  },
  {
    id: "kc-leon",
    artist: "KcStudio",
    series: "Resident Evil",
    title: "Leon Kennedy",
    images: [
      "images/kc-studio/resident-evil/leon/leon-1.jpg",
      "images/kc-studio/resident-evil/leon/leon-2.jpg",
      "images/kc-studio/resident-evil/leon/leon-3.jpg",
      "images/kc-studio/resident-evil/leon/leon-4.jpg",
      "images/kc-studio/resident-evil/leon/leon-5.jpg",
      "images/kc-studio/resident-evil/leon/leon-6.jpg",
      "images/kc-studio/resident-evil/leon/leon-7.jpg",
      "images/kc-studio/resident-evil/leon/leon-8.jpg",
      "images/kc-studio/resident-evil/leon/leon-9.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A tactical sculpt of Leon Kennedy, weapon drawn and ready for whatever Raccoon City throws his way."
  },
  {
    id: "kc-maliketh",
    artist: "KcStudio",
    series: "Elden Ring",
    title: "Maliketh",
    images: [
      "images/kc-studio/elden-ring/maliketh/maliketh-1.jpg",
      "images/kc-studio/elden-ring/maliketh/maliketh-2.jpg",
      "images/kc-studio/elden-ring/maliketh/maliketh-3.jpg",
      "images/kc-studio/elden-ring/maliketh/maliketh-4.jpg",
      "images/kc-studio/elden-ring/maliketh/maliketh-5.jpg",
      "images/kc-studio/elden-ring/maliketh/maliketh-6.jpg",
      "images/kc-studio/elden-ring/maliketh/maliketh-7.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A fearsome sculpt of Maliketh, Black Blade in hand, capturing the Beast Clergyman's feral intensity."
  },
  {
    id: "kc-moon-knight",
    artist: "KcStudio",
    series: "Marvel",
    title: "Moon Knight",
    images: [
      "images/kc-studio/marvel/moon-knight/moon-knight-1.jpg",
      "images/kc-studio/marvel/moon-knight/moon-knight-2.jpg",
      "images/kc-studio/marvel/moon-knight/moon-knight-3.jpg",
      "images/kc-studio/marvel/moon-knight/moon-knight-4.jpg",
      "images/kc-studio/marvel/moon-knight/moon-knight-5.jpg",
      "images/kc-studio/marvel/moon-knight/moon-knight-6.jpg",
      "images/kc-studio/marvel/moon-knight/moon-knight-7.jpg",
      "images/kc-studio/marvel/moon-knight/moon-knight-8.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A bone-white sculpt of Marvel's Fist of Khonshu, cloaked in bandage-wrapped menace and moonlit detail."
  },
  {
    id: "kc-rick-oconnell",
    artist: "KcStudio",
    series: "The Mummy",
    title: "Rick O'Connell",
    images: [
      "images/kc-studio/the-mummy/rick-oconnell/rick-oconnell-1.jpg",
      "images/kc-studio/the-mummy/rick-oconnell/rick-oconnell-2.jpg",
      "images/kc-studio/the-mummy/rick-oconnell/rick-oconnell-3.jpg",
      "images/kc-studio/the-mummy/rick-oconnell/rick-oconnell-4.jpg",
      "images/kc-studio/the-mummy/rick-oconnell/rick-oconnell-5.jpg",
      "images/kc-studio/the-mummy/rick-oconnell/rick-oconnell-6.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "An adventurous sculpt of Rick O'Connell, whip and rifle ready for whatever the tomb throws at him."
  },
  {
    id: "kc-sauron",
    artist: "KcStudio",
    series: "Lord of the Rings",
    title: "Sauron",
    images: [
      "images/kc-studio/lotr/sauron/sauron-1.jpg",
      "images/kc-studio/lotr/sauron/sauron-2.jpg",
      "images/kc-studio/lotr/sauron/sauron-3.jpg",
      "images/kc-studio/lotr/sauron/sauron-4.jpg",
      "images/kc-studio/lotr/sauron/sauron-5.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A menacing sculpt of Sauron, armored and ominous, towering with the full weight of Mordor behind him."
  },
  {
    id: "kc-skeletor",
    artist: "KcStudio",
    series: "Masters of the Universe",
    title: "Skeletor",
    images: [
      "images/kc-studio/masters-of-the-universe/skeletor/skeletor-1.jpg",
      "images/kc-studio/masters-of-the-universe/skeletor/skeletor-2.jpg",
      "images/kc-studio/masters-of-the-universe/skeletor/skeletor-3.jpg",
      "images/kc-studio/masters-of-the-universe/skeletor/skeletor-4.jpg",
      "images/kc-studio/masters-of-the-universe/skeletor/skeletor-5.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A sinister sculpt of Skeletor, staff raised and ready to challenge He-Man for control of Castle Grayskull."
  },
  {
    id: "kc-solid-snake",
    artist: "KcStudio",
    series: "Metal Gear Solid",
    title: "Solid Snake",
    images: [
      "images/kc-studio/metal-gear-solid/solid-snake/solid-snake-1.jpg",
      "images/kc-studio/metal-gear-solid/solid-snake/solid-snake-2.jpg",
      "images/kc-studio/metal-gear-solid/solid-snake/solid-snake-3.jpg",
      "images/kc-studio/metal-gear-solid/solid-snake/solid-snake-4.jpg",
      "images/kc-studio/metal-gear-solid/solid-snake/solid-snake-5.jpg",
      "images/kc-studio/metal-gear-solid/solid-snake/solid-snake-6.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A stealth-ready sculpt of Solid Snake, capturing his tactical gear and battle-hardened focus."
  },
  {
    id: "kc-sovereign",
    artist: "KcStudio",
    series: "Mass Effect",
    title: "Sovereign",
    images: [
      "images/kc-studio/mass-effect/sovereign/sovereign-1.jpg",
      "images/kc-studio/mass-effect/sovereign/sovereign-2.jpg",
      "images/kc-studio/mass-effect/sovereign/sovereign-3.jpg",
      "images/kc-studio/mass-effect/sovereign/sovereign-4.jpg",
      "images/kc-studio/mass-effect/sovereign/sovereign-5.jpg",
      "images/kc-studio/mass-effect/sovereign/sovereign-6.jpg",
      "images/kc-studio/mass-effect/sovereign/sovereign-7.jpg",
      "images/kc-studio/mass-effect/sovereign/sovereign-8.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "An imposing sculpt of Sovereign, the ancient Reaper rendered in full menacing scale and detail."
  },
  {
    id: "kc-squall-leonhart",
    artist: "KcStudio",
    series: "Final Fantasy",
    title: "Squall Leonhart",
    images: [
      "images/kc-studio/final-fantasy/squall-leonhart/squall-1.jpg",
      "images/kc-studio/final-fantasy/squall-leonhart/squall-2.jpg",
      "images/kc-studio/final-fantasy/squall-leonhart/squall-3.jpg",
      "images/kc-studio/final-fantasy/squall-leonhart/squall-4.jpg",
      "images/kc-studio/final-fantasy/squall-leonhart/squall-5.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A cool, composed sculpt of Squall Leonhart, gunblade drawn and ever the reluctant hero."
  },
  {
    id: "kc-starkiller",
    artist: "KcStudio",
    series: "Star Wars",
    title: "Starkiller",
    images: [
      "images/kc-studio/star-wars/starkiller/starkiller-1.jpg",
      "images/kc-studio/star-wars/starkiller/starkiller-2.jpg",
      "images/kc-studio/star-wars/starkiller/starkiller-3.jpg",
      "images/kc-studio/star-wars/starkiller/starkiller-4.jpg",
      "images/kc-studio/star-wars/starkiller/starkiller-5.jpg",
      "images/kc-studio/star-wars/starkiller/starkiller-6.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A powerful sculpt of Starkiller, dual lightsabers drawn and channeling raw Force energy."
  },
  {
    id: "kc-superman-2026",
    artist: "KcStudio",
    series: "DC",
    title: "Superman [2026]",
    images: [
      "images/kc-studio/dc/superman-2026/superman-1.jpg",
      "images/kc-studio/dc/superman-2026/superman-2.jpg",
      "images/kc-studio/dc/superman-2026/superman-3.jpg",
      "images/kc-studio/dc/superman-2026/superman-4.jpg",
      "images/kc-studio/dc/superman-2026/superman-5.jpg",
      "images/kc-studio/dc/superman-2026/superman-6.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A heroic sculpt of the Man of Steel's 2026 screen design, capturing his iconic cape and unmistakable silhouette."
  },
  {
    id: "kc-hunter",
    artist: "KcStudio",
    series: "Bloodborne",
    title: "The Hunter",
    images: [
      "images/kc-studio/bloodborne/hunter/hunter-bloodborne-1.jpg",
      "images/kc-studio/bloodborne/hunter/hunter-bloodborne-2.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "https://www.etsy.com/listing/4495305898/the-hunter-bloodborne-resin-model-kit-3d" }
    ],
    description: "A moody, atmospheric sculpt of the Hunter from Bloodborne, cloaked and ready for the hunt."
  },
  {
    id: "kc-v",
    artist: "KcStudio",
    series: "V for Vendetta",
    title: "V",
    images: [
      "images/kc-studio/v-for-vendetta/v/v-1.jpg",
      "images/kc-studio/v-for-vendetta/v/v-2.jpg",
      "images/kc-studio/v-for-vendetta/v/v-3.jpg",
      "images/kc-studio/v-for-vendetta/v/v-4.jpg",
      "images/kc-studio/v-for-vendetta/v/v-5.jpg",
      "images/kc-studio/v-for-vendetta/v/v-6.jpg",
      "images/kc-studio/v-for-vendetta/v/v-7.jpg",
      "images/kc-studio/v-for-vendetta/v/v-8.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A shadowy, theatrical sculpt of V, Guy Fawkes mask fixed and cloak caught mid-motion."
  },
  {
    id: "kc-venom",
    artist: "KcStudio",
    series: "Marvel",
    title: "Venom",
    images: [
      "images/kc-studio/marvel/venom/venom-1.jpg",
      "images/kc-studio/marvel/venom/venom-2.jpg",
      "images/kc-studio/marvel/venom/venom-3.jpg",
      "images/kc-studio/marvel/venom/venom-4.jpg",
      "images/kc-studio/marvel/venom/venom-5.jpg",
      "images/kc-studio/marvel/venom/venom-6.jpg",
      "images/kc-studio/marvel/venom/venom-7.jpg",
      "images/kc-studio/marvel/venom/venom-8.jpg",
      "images/kc-studio/marvel/venom/venom-9.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 12 in (30 cm) tall", etsyUrl: "LINK_GOES_HERE" }
    ],
    description: "A monstrous sculpt of Venom, tendrils writhing and jaws bared in classic symbiote fashion."
  },
  {
    id: "tanuki-leon",
    artist: "Tanuki Figures",
    series: "Resident Evil",
    title: "Leon S. Kennedy [Resident Evil 9: Requiem]",
    images: [
      "images/tanuki-figures/resident-evil/leon-kennedy/leon-kennedy-1.jpg",
      "images/tanuki-figures/resident-evil/leon-kennedy/leon-kennedy-2.jpg",
      "images/tanuki-figures/resident-evil/leon-kennedy/leon-kennedy-3.jpg",
      "images/tanuki-figures/resident-evil/leon-kennedy/leon-kennedy-4.jpg",
      "images/tanuki-figures/resident-evil/leon-kennedy/leon-kennedy-5.jpg",
      "images/tanuki-figures/resident-evil/leon-kennedy/leon-kennedy-6.jpg",
      "images/tanuki-figures/resident-evil/leon-kennedy/leon-kennedy-7.jpg",
      "images/tanuki-figures/resident-evil/leon-kennedy/leon-kennedy-8.jpg",
      "images/tanuki-figures/resident-evil/leon-kennedy/leon-kennedy-9.jpg",
      "images/tanuki-figures/resident-evil/leon-kennedy/leon-kennedy-10.jpg"
    ],
    scaleOptions: [
      { scale: "1/6 Scale", size: "Approx. 11.5 in (29 cm) tall", etsyUrl: "https://www.etsy.com/listing/4495283661/leon-kennedy-resident-evil-9-requiem" }
    ],
    description: "Original resin sculpt inspired by Leon Kennedy's appearance in Resident Evil 9: Requiem."
  },
  {
    id: "tanuki-spiderman-venom",
    artist: "Tanuki Figures",
    series: "Marvel",
    title: "Spider-Man vs Venom",
    images: [
      "images/tanuki-figures/marvel/spider-man-vs-venom/spiderman-venom-1.jpg",
      "images/tanuki-figures/marvel/spider-man-vs-venom/spiderman-venom-2.jpg",
      "images/tanuki-figures/marvel/spider-man-vs-venom/spiderman-venom-3.jpg",
      "images/tanuki-figures/marvel/spider-man-vs-venom/spiderman-venom-4.jpg",
      "images/tanuki-figures/marvel/spider-man-vs-venom/spiderman-venom-5.jpg",
      "images/tanuki-figures/marvel/spider-man-vs-venom/spiderman-venom-6.jpg",
      "images/tanuki-figures/marvel/spider-man-vs-venom/spiderman-venom-7.jpg",
      "images/tanuki-figures/marvel/spider-man-vs-venom/spiderman-venom-8.jpg"
    ],
    scaleOptions: [
      { scale: "1/8 Scale", size: "Approx. 9 in (23 cm) tall", etsyUrl: "https://www.etsy.com/listing/4495843541/spider-man-vs-venom-resin-model-kit-3d" }
    ],
    description: "A dynamic diorama capturing Spider-Man and Venom mid-clash, sculpted with dramatic action posing and slime detailing."
  }
];
