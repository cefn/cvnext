import { Immutable } from "@lauf/lauf-store";
import { Engagement } from "./types";

export const ADDRESS = `Cefn Hoile
4 Gardner Road Heysham, Morecambe, LA3 1RX 
+44(0)7879414275
cefn@cefn.com
https://cefn.com` as const;


export const ENGAGEMENTS: Immutable<Engagement[]> = [
  /** EMPLOYMENT */
  {
    title: "@VGKits and @ShrimpingIt",
    subtitle: "Instigator and Maintainer",
    tags: ["employment", "python"],
    start: new Date("2012-04-01"),
    stop: new Date("2018-08-01"),
    description:
      "Conceived and delivered projects documenting Arduino-compatible and ESP8266 electronics for UK educators with global impact, with a series of workshops run for commercial and community benefit.",
  },
  {
    title: "Contract Technologist",
    subtitle: "Bespoke prototyping for various clients",
    tags: ["employment"],
    start: new Date("2011-04-01"),
    stop: new Date("2018-08-01"),
    description:
      "BBC R&D; prototyped 'Connected Fob' screenless device for tagging radio programs. BBC Knowledge&Learning; M.I.High 'communicator' pencil built, programmed in public workshops. Physical computing workshops, studio prototypes for BBC Microbit team. Litfest; 'Reading Lights' illuminated poetry in Lancaster Library, interactive website for Lancaster witch trials character-exploration. Photobot; Pi-based coin-triggered compositing and dye-sublimation printing networked photo booth.",
  },
  {
    title: "Imagination@Lancaster University",
    subtitle: "Lead and Architect",
    tags: ["employment"],
    start: new Date("2015-06-01"),
    stop: new Date("2017-01-01"),
    description: `Real-time digital facilitation tool, (HTML5, JQuery, Node, MQTT,Docker, RethinkDB), guiding delegates on iPads through brainstorming process,auto-generating 'keynotes' for design workshops. Developed Utopiary MQTT synchronization system.`,
  },
  {
    title: "O'Reilly and Make Publishing",
    subtitle: "Author and Technical Writer",
    tags: ["employment"],
    start: new Date("2013-01-01"),
    stop: new Date("2015-01-01"),
    description:
      "'Make: Raspberry Pi and AVR Projects'. First author for book teaching physical computing with the Pi. Safari series technical writer on Arduino-compatible projects.",
  },
  {
    title: "BT PLC R&D",
    subtitle: "Researcher, Senior Researcher, Principal Researcher",
    tags: ["employment"],
    start: new Date("2000-06-01"),
    stop: new Date("2011-03-01"),
    description:
      "Technology researcher, strategist, programmer and inventor. Conceived, prototyped, user-trialled BT Rules drag-and-drop programming tool for non-programmers. Visiting scientist at MIT. Conceived, deployed Hubbub - BT's first customer-facing web-based forum and 'Product Innovator's Guide' - Java+XML-based questionnaire tool. Maintainer of http://labs.bt.com. Prototypes, patents, published articles, projects and showcases from Hubbub, 'DIET Agents', SWAN distributed hashtable, 'EOS' and 'STAN' agents, (evolution and wireless propagation simulation tools), WAND pointing device, Shopping Garden self-organising ecommerce tool. BT board strategy documents; 'P2P bandwidth usage', '2020 vision' and 'Digital Footprints'. Network Security working group lead. Departmental employee care spokeperson. Performance management facilitator. BT Group Talent Pool and ‘Key Networker’ Award.",
  },
  {
    title: "Enigmaker.org",
    subtitle: "Inventor",
    tags: ["employment"],
    start: new Date("2010-02-01"),
    stop: new Date("2010-04-01"),
    description:
      "Experimental project releasing six public-domain inventions (archive http://cefn.com/archive/enigmaker.org). Real-time product development via twitter, readers invited to guess a device's function",
  },
  {
    title: "Tinker.it",
    subtitle: "Consultant Maker, Inventor in Residence",
    tags: ["employment"],
    start: new Date("2009-06-01"),
    stop: new Date("2010-03-01"),
    description:
      "Contracted by the creators of the Arduino to co-facilitate innovation workshops. Lead developer for four eighties-inspired hacks in Nokia's PUSH N900 Maemo launch campaign. Facilitated beginners Arduino and commercial prototyping workshops for BBC, BT, EDF, Chapter Arts.",
  },
  {
    title: "AMT Partnership",
    subtitle: "Specialist Telesales and Intranet Support",
    tags: ["employment"],
    start: new Date("1999-10-01"),
    stop: new Date("2000-06-01"),
    description:
      "Telemarketing, campaign management, client liaison for international banking systems, Network installation and data mining. Designed business processes and induction training package.",
  },
  {
    title: "V&A Marketing Limited",
    subtitle: "Business Development Manager",
    tags: ["employment"],
    start: new Date("1996-01-01"),
    stop: new Date("1999-08-01"),
    description: `Ran sales, advertising of £500,000 construction order book. Specified and installed intranet, email, external website. Designed, implemented ISO9002, CDM and COSHH-compliance. Joined company as 2nd full-timer, left it with 70 employees as the fastest-growing company in Wales.`,
  },
  /** EDUCATION */
  {
    title: "MRes, Lancaster University",
    subtitle: "Design for the Digital Economy",
    tags: ["education"],
    start: new Date("2012-09-01"),
    stop: new Date("2013-06-01"),
  },
  {
    title: "Massachusetts Institute of Technology",
    subtitle: "Visiting Scientist Secondment, CSAIL, Media Lab",
    tags: ["education"],
    start: new Date("2005-02-01"),
    stop: new Date("2007-06-01"),
  },
  {
    title: "Santa Fe Institute, CEU, Budapest",
    subtitle: "Complex Systems Summer School",
    tags: ["education"],
    start: new Date("2003-06-01"),
    stop: new Date("2003-08-01"),
  },
  {
    title: "University of Sussex (Computer Science)",
    subtitle: "MSC, Evolutionary and Adaptive Systems",
    tags: ["education"],
    start: new Date("1998-09-01"),
    stop: new Date("2000-06-01"),
  },
  {
    title: "Nottingham University",
    subtitle: "BA First Class Honours, Philosophy",
    tags: ["education"],
    start: new Date("1992-09-01"),
    stop: new Date("1995-06-01"),
  },
  {
    title: "Monmouth School",
    subtitle: "Four As at A-Level, 3 AOs, 9GCSEs",
    tags: ["education"],
    start: new Date("1990-09-01"),
    stop: new Date("1992-06-01"),
  },
  /** SOCIETY */
  {
    title: "Curiosity Collective",
    subtitle: "Member of interactive arts collective",
    tags: ["society"],
    start: new Date("2005-01-01"),
    stop: new Date("2012-04-01"),
    description:
      "Founder member of experimental cyberart group. Created interactive installations for five different shows touring Ipswich and throughout the UK, including the 'Human Kaleidoscope (video)', 'Semaphore to SMS' gateway (machine vision), 'Mime-driven handcar' (ultrasonics), 'Curiosity Killed the Cat' (microcontroller) 'Grass is always greener', (visual illusion) and many more.",
  },
  {
    title: "Black Shoals Project",
    subtitle: "Artificial Life artwork",
    tags: ["society"],
    start: new Date("2000-01-01"),
    stop: new Date("2004-01-01"),
    description:
      "Developer of artificial ecosystem, driven by real-time stock market data, shown at the Tate Gallery, covered by BBC news and selected in shortlist for Brian Sewell's Alternative Turner prize.",
  },
  // {
  //   title:"",
  //   subtitle:"",
  //   tags:[""],
  //   start: new Date(""),
  //   stop: new Date(""),
  //   description:""
  // },
] as const;
