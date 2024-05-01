import s60 from "../assets/images/departments/60SecondstoFamemin.webp";
import s90 from "../assets/images/departments/90sGameFairmin.webp";
import adzap from "../assets/images/departments/Adzap-min.webp";
import bloctackle from "../assets/images/departments/Block&Tacklemin.webp";
import iplauc from "../assets/images/departments/C2C-IPLAuctionmin.webp";
import moviescreen from "../assets/images/departments/C2C-MovieScreeningmin.webp";
import channelSurf from "../assets/images/departments/ChannelSurfingmin.webp";
import openmic from "../assets/images/departments/CurtainCall-OpenMic-min.webp";
import spinyarn from "../assets/images/departments/CurtainCall-Spin-a-Yarn-min.webp";
import ecellepl from "../assets/images/departments/E-CellSVCE-EPL_EntrepreneurshipPitchingLeaguemin.webp";
import ewb from "../assets/images/departments/EWBSVCEagadishonamisson-min.webp";
import esports from "../assets/images/departments/EsportsEventsmin.webp";
import fifa from "../assets/images/departments/FIFAFootball-min.webp";
import greenscreen from "../assets/images/departments/GreenScreenmin.webp";
import lasertag from "../assets/images/departments/LaserTag-min.webp";
import mrms from "../assets/images/departments/MR_MsHighwaysmin.webp";
import danceevent from "../assets/images/departments/MusicClub-BattleofBandsmin.webp";
import battlebands from "../assets/images/departments/BattleofBandsmin.webp";
import twoshades from "../assets/images/departments/PhotographyClub-TwoShadesofGremin.webp";
import escapeasylum from "../assets/images/departments/ScienceClubEscapeAsylum-min.webp";
import shipwreck from "../assets/images/departments/ShipWreckmin.webp";
import clubcinemax from "../assets/images/departments/Shortfilmclub_c2cClubCinemax.webp";
import bgmi from "../assets/images/departments/Student-Council-BGMI-min-1.webp";
import ithaanda from "../assets/images/departments/Shortfilmclub-IthaanDaCinemamin.webp";
import memeMarcket from "../assets/images/departments/E-CellSVCE-MemeMarketingmin.webp";
import monopoly from "../assets/images/departments/E-CellSVCEMonopolyMadness-min.webp";
import opinionbuzz from "../assets/images/departments/E-CellSVCE-OpinionBuzzmin.webp";

const eventsData: {
  image: string;
  // day: Number;
  name: string;
  id: string;
  date: string;
  time: string;
  rules: string[];
  venue: string;
  description: string[];
  coordinators: { name: string; contact: string }[];
}[] = [
  {
    image: battlebands,
    id: "1.1",
    rules: [],
    name: "Battle of Bands",
    date: "7th May ",
    time: "10:15AM-1:30PM",
    venue: "MPH",
    coordinators: [
      { name: "Melvin", contact: "9940407331" },
      { name: "Akshay", contact: "7358596293" },
    ],
    description: [
      "The Battle of the Bands is an event hosted by the music club where various bands from different colleges get to perform live music. Each band is evaluated by certain criteria to assess the winners of the event at the end.",
    ],
  },
  {
    image: escapeasylum,
    id: "1.2",
    name: "Escape Asylum",
    rules: [],
    date: "7th May ",
    time: "10:15AM-1:30PM",
    venue: "3RD BLOCK FULL",
    coordinators: [
      { name: "Maseera Ahmedi M", contact: "9944444327" },
      { name: "Shoban", contact: "7418700000" },
      // { name: "Rohit", contact: "6382534626" },
    ],
    description: [
      "Participants are made to compete with each other in an asylum and solve riddles to escape it.",
    ],
  },
  {
    image: ewb,
    id: "1.3",
    name: "Jagadish on a mission",
    date: "7th May ",
    time: "10:15AM-2:30PM",
    venue: "BLOCK 2-FIRST FLOOR(2 ROOMS)",
    rules: [],
    coordinators: [{ name: "Nithishkumar B", contact: "+91 99405 09524" }],
    description: [
      "A tricky mini map of SVCE is given as a dot map to each team, so the teams have to find those actual locations in SVCE map through the given map, then each places contain clues which leads to a ultimate answer.",
    ],
  },
  {
    image: openmic,
    id: "1.4",
    name: "Open Mic",
    date: "7th May ",
    rules: [],
    time: "10:30AM-12:00PM",
    venue: "BLOCK 2 FIRST FLOOR",
    coordinators: [{ name: "Harikrishnan", contact: "+91 97893 80793" }],
    description: [
      "Individual event, Participants will be required to act out/perform material that is either spoken word poetry or a stand-up comedy set for an allocated time of 2-5 minutes.",
    ],
  },
  {
    image: ecellepl,
    id: "1.5",
    name: "EPL : Entrepreneur Pitching League",
    date: "7th May ",
    time: "11:00AM-1:00PM",
    venue: "LIBRARY SEMINAR HALL",
    rules: [],
    coordinators: [
      { name: "Roshan", contact: "9841092274" },
      { name: "Gurunath raj", contact: "9087148428" },
    ],
    description: [
      "Round 1 : Startup Trivia",
      "A fun and educational trivia competition focused on startup history, famous entrepreneurs, industry trends, tech innovations.",
      "Participants form teams and compete to answer questions, showcasing their knowledge of the startup ecosystem while enjoying a social and engaging atmosphere.",
      "Round 2 : Pitch Perfect",
      "Participants compete in delivering compelling pitches for fictional or real startup ideas assigned by the organizers.",
      "They are judged on their presentation skills, storytelling ability, and effectiveness in conveying the value proposition of their startup.",
      "Organizers will give suprise twists, challenges to make the participants adapt to real time scenarios",
      "Round 3 : Shark Tank Showdown",
      "Inspired by the popular TV show 'Shark Tank,' participants pitch their business ideas to a panel of 'sharks' (judges) who act as potential investors.",
      "The sharks ask probing questions and negotiate deals with the entrepreneurs, offering funding or partnerships based on the strength of the pitches.",
      "Participants simulate the journey of building and managing a startup within a virtual environment.",
      "They make strategic decisions regarding product development, marketing, funding, and business expansion.",
      "Participants are evaluated based on their ability to navigate challenges, make informed decisions, and achieve business success. Business model canvas will be awarded brownie points",
    ],
  },
  // {
  //   image: bgmi,
  //   id: "1.6",
  //   rules: [],
  //   name: "Film fest",
  //   date: "7th May ",
  //   time: "10:15AM-1:15PM",
  //   venue: "BIOTECH SEMINAR HALL",
  //   coordinators: [{ name: "Nishaanth k", contact: "6374456933" }],
  //   description: [
  //     "An intercollege Shortfilm competition where the qualified Shortfilms are shotlisted screened and judged receiving a cash prize and certificates.",
  //   ],
  // },
  {
    image: clubcinemax,
    id: "1.8",
    name: "Cinemax",
    date: "7th May ",
    time: "11:00AM-3:00PM",
    venue: "FUNCTION HALL",
    rules: [],
    coordinators: [{ name: "Nishaanth k", contact: "6374456933" }],
    description: ["Screening of a sensational film to entertain the audience."],
  },
  {
    image: shipwreck,
    id: "1.9",
    name: "SHIP WRECK",
    date: "7th May ",
    rules: [],
    time: "10:15AM-12:15PM",
    venue: "OAT",
    coordinators: [{ name: "ARYAN", contact: "+91 98843 49275" }],
    description: [
      "This is an individual event.",
      "A participant is given 3 minutes to prove to the judges why they deserve the life jacket and entertain the audience.",
      "The character for each participant will be given on spot during the time of their performance.",
      "There will be a total of 2 rounds.",
      "Performers are not allowed to make any discriminatory or hate speech during their performance.",
      "Participants are asked to behave with utmost decorum as Vulgarity of any kind will lead to disqualification of the team.",
      "The judge’s decision is final and absolute.",
      "Certification and merit of appreciation will be awarded.",
    ],
  },
  {
    image: s60,
    id: "1.10",
    name: "60 SEC TO FAME",
    date: "7th May ",
    rules: [],
    time: "10:15AM-12:15PM",
    venue: "BLOCK 2 SECOND FLOOR",
    coordinators: [{ name: "ARYAN", contact: "+91 98843 49275" }],
    description: [],
  },
  {
    image: iplauc,
    id: "1.11",
    name: "IPL Auction",
    date: "8th May 2024",
    time: "11:00AM-3:00PM",
    rules: [],
    venue: "VIDEO HALL",
    coordinators: [
      { name: "SHIVA SUBBIAH", contact: "+919629578481" },
      { name: "Gokul Nambiar", contact: "+919629578481" },
    ],
    description: [
      "Form teams of three and dive into the strategic world of cricket team building.",
      "Each team will participate in a thrilling auction where they bid to acquire players for their dream team.",
      "With limited resources and intense competition, every bid will require careful consideration and strategic planning.",
      "The auction format adds an element of excitement and unpredictability, making it a must-watch event for all cricket enthusiasts.",
    ],
  },
  // {
  //   image: bgmi,
  //   id: "1.12",
  //   name: "MOVIE SCREENING",
  //   rules: [],
  //   date: "7th May ",
  //   time: "11:00AM-3:00PM",
  //   venue: "FUNCTION HALL",
  //   coordinators: [{ name: "Vinochan KB", contact: "+91 86374 31560" }],
  //   description: [
  //     "Have a say in what movies make it to the big screen by casting your votes on our social media platforms",
  //     "Choose from a curated selection of blockbuster hits, cult classics, and fan-favorite films to create the ultimate movie lineup",
  //     "Sit back, relax, and enjoy an immersive cinematic experience under the stars as the chosen movies come to life on the big screen.",
  //     "Whether you're a fan of action, comedy, drama, or romance, there's something for everyone at our movie screening event.",
  //   ],
  // },
  {
    image: fifa,
    id: "1.13",
    rules: [],
    name: "FIFA FOOTBALL",
    date: "7th May ",
    time: "11:00AM-3:00PM",
    venue: "VIDEO HALL",
    coordinators: [{ name: "Gokul kannappan", contact: "+91 88384 13008" }],
    description: [
      "Show off your gaming skills in our FIFA tournament, where participants compete for exciting prizes and bragging rights.",
      "Each participant will be provided with a gaming PC and controllers to compete in head-to-head matches.",
      "Battle your way through the tournament bracket, strategizing and adapting your gameplay to outwit opponents and secure victory.",
      "With gift vouchers and cash prizes up for grabs, the stakes are high, and only the most skilled players will emerge victorious.",
    ],
  },
  {
    image: bloctackle,
    id: "1.14",
    name: "BLOCK AND TACKLE",
    date: "7th May ",
    rules: [],
    time: "12:45PM-2:30PM",
    venue: "BLOCK 2 SECOND FLOOR",
    coordinators: [{ name: "ARYAN", contact: "+91 98843 49275" }],
    description: [
      "This is an individual event",
      "A participant is given 3 minutes to block and tackle for the given topic and entertain the audience. The topic for each participant will be given on spot during the time of their performance and a preparation time of 2 minutes will be provided.",
      "There will be a total of 2 rounds",
      "Performers are not allowed to make any discriminatory or hate speech during their performance.",
      "Participants are asked to behave with utmost decorum as Vulgarity of any kind will lead to disqualification of the team.",
      "The judge’s decision is final and absolute.",
      "Certification and merit of appreciation will be awarded.",
    ],
  },
  {
    image: channelSurf,
    id: "1.15",
    name: "CHANNEL SURFING",
    date: "7th May ",
    rules: [],
    time: "12:45PM-2:30PM",
    venue: "OAT",
    coordinators: [{ name: "ARYAN", contact: "+91 98843 49275" }],
    description: [
      "-A team can consist of a minimum of 3 to maximum of 5 members.",
      "A team will perform for a maximum of 5 minutes.",
      "Every team must have their own team's name.",
      "Modify your tone, your style, your attitude and language if necessary. Make sure that it’s interesting.",
      "Participants have to enact the channel given by the judge and change to different channels spontaneously as soon as the judge changes it.",
      "The game will have fun elements in between the play like MUTE, FAST FORWARD, SLOW MOTION, REWIND which must be performed by the participants.",
      "Props if required can be brought by the participants and some Props will be provided by the organisers.",
      "The props provided by the organisers must be used appropriately by the participants.",
      "NO VULGARITY will be entertained.",
      "Usage of vulgarity will lead to disqualification.",
      "Language preferred : ENGLISH/TAMIL.",
      "The event has only one round after which the judges will announce the results.",
      "Judges' decisions are final.",
    ],
  },
  {
    image: memeMarcket,
    id: "1.16",
    name: "MEME MARKETING",
    date: "7th May ",
    time: "Online",
    venue: "Online",
    rules: [],
    coordinators: [{ name: "Bharathraj . R", contact: "+91 81485 82517" }],
    description: [
      "Participants are challenged to harness the power of memes to promote a product, company, political party, or any other entity.",
      "Each participant can submit up to three memes that effectively convey their message and captivate their audience.",
      "Grab the Attention of Target audience with ur originality.",
      "Participants can use Editing tools of their choice .",
    ],
  },
  {
    image: ithaanda,
    id: "1.17",
    rules: [],
    name: "ITHAAN DA CINEMA",
    date: "7th May ",
    time: "10.15AM-1.15PM",
    venue: "BIOTECH SEMINAR HALL",
    coordinators: [{ name: "Nishaanth k", contact: "+91 63744 56933" }],
    description: [
      "An intercollege Shortfilm competition where the qualified Shortfilms are shotlisted screened and judged receiving a cash prize and certificates.",
    ],
  },

  {
    image: greenscreen,
    id: "2.1",
    rules: [],
    name: "GREEN SCREEN",
    date: "8th May 2024",
    time: "9:30AM-11:30AM",
    venue: "BLOCK 2 CLASSROOM",
    coordinators: [{ name: "ARYAN", contact: "+91 98843 49275" }],
    description: [
      "This is an individual event.",
      "Time limit for performance is 3 mins.",
      "The participant will be blindfolded and the video will run in the background on mute.",
      "The judges will give clues based on the video, and the participant must guess the Video under the given time limit.",
      "Judges decision is final.",
    ],
  },
  {
    image: adzap,
    id: "2.2",
    rules: [],
    name: "ADZAP",
    date: "8th May 2024",
    time: "9:30AM-11:30AM",
    venue: "OAT",
    coordinators: [{ name: "ARYAN", contact: "+91 98843 49275" }],
    description: [
      "Team size: Each team must consist of a minimum of 2 and a maximum of 5 participants.",
      "Time limit: Each team will be given a set amount of time to create and present their ad (1-2 mins). The time limit should be communicated to the participants in advance.",
      "Language and content: The ads should be in good taste and appropriate for all audiences. Offensive language, content, and gestures are not allowed. The ads should be original and created by the team. Plagiarism or copying from other sources is not allowed.",
    ],
  },
  {
    image: s90,
    id: "2.3",
    name: "90'S GAME FAIR",
    date: "8th May 2024",
    time: "10:00AM onwards",
    rules: [],
    venue: "BLOCK 3-GROUND FLOOR",
    coordinators: [{ name: "Tharun Balaji", contact: "+91 91508 27575" }],
    description: [
      "Transport  back to the golden age of the 90s at our themed game fair! Join us for retro fun where you can indulge in classic games like pen fights and hand cricket.",
      "Relive the nostalgia as you compete in these old-school favorites and challenge your friends to see who reigns supreme.",
      "It's a blast from the past you won't want to miss",
    ],
  },
  {
    image: spinyarn,
    id: "2.4",
    name: "SPIN-A-YARN",
    date: "8th May 2024",
    time: "10:00AM-11:00AM",
    rules: [],
    venue: "BLOCK 2 CLASSROOM",
    coordinators: [
      { name: "Arunima", contact: "9840073069" },
      { name: "Jhalak", contact: "9444243793" },
    ],
    description: [
      "A theme will be given for the group to work with along with a sentence to start their script with, each team member will say one sentence for the story to follow along.",
      "A sketch of the script will be performed for 3 minutes, the time allocated for the script preparation (based on the starting sentence and theme given) will be 10 minutes.",
      "This process continues until a full-fledged script is formed.",
    ],
  },
  {
    image: monopoly,
    id: "2.5",
    name: "MONOPOLY MADNESS",
    date: "8th May 2024",
    time: "10:15AM onwards",
    venue: "2ND FLOOR EG HALL",
    rules: [],
    coordinators: [
      { name: "Varshini K.K.", contact: "8825755455" },
      { name: "Shruthika", contact: "6369183851" },
    ],
    description: [
      "Monopoly Madness is a Monopoly event filled with excitement and competition!",
      "With time constraints adding a thrilling twist, participants will need to strategize quickly to build their empires and bankrupt their opponents.",
      "This is a group event with a minimum of 3 players in a team.",
    ],
  },
  {
    image: moviescreen,
    id: "2.6",
    name: "CINEMAX",
    date: "8th May 2024",
    rules: [],
    time: "11:00AM-3:00PM",
    venue: "FUNCTION HALL",
    coordinators: [{ name: "Nishaanth K", contact: "+91 63744 56933" }],
    description: [
      // "Cinemax offers a screening of a sensational film to entertain the audience crowd.",
      "Screening of a sensational film to entertain the audience crowd",
    ],
  },
  {
    image: mrms,
    id: "2.7",
    name: "Mr&Ms Highways",
    date: "8th May 2024",
    time: "11:30AM onwards",
    venue: "OAT",
    rules: [],
    coordinators: [{ name: "ARYAN", contact: "+91 98843 49275" }],
    description: [
      "This is an individual event.",
      "There will be a total of 3 to 4 rounds.",
      "There will be eliminations on each round.",
      "The topics and rounds will be given on spot by the judges.",
      "Performers are not allowed to make any discriminatory or hate speech during their performance.",
      "Participants are asked to behave with utmost decorum as Vulgarity of any kind will lead to disqualification of the team.",
      "The judge’s decision is final and absolute.",
      "Certification and merit of appreciation will be awarded.",
    ],
  },
  // {
  //   image: bgmi,
  //   id: "2.8",
  //   name: "IPL Auction",
  //   date: "8th May 2024",
  //   time: "11:00AM-3:00PM",
  //   rules: [],
  //   venue: "VIDEO HALL",
  //   coordinators: [
  //     { name: "SHIVA SUBBIAH", contact: "+919629578481" },
  //     { name: "Gokul Nambiar", contact: "+919629578481" },
  //   ],
  //   description: [
  //     "Form teams of three and dive into the strategic world of cricket team building.",
  //     "Each team will participate in a thrilling auction where they bid to acquire players for their dream team.",
  //     "With limited resources and intense competition, every bid will require careful consideration and strategic planning.",
  //     "The auction format adds an element of excitement and unpredictability, making it a must-watch event for all cricket enthusiasts.",
  //   ],
  // },
  {
    image: lasertag,
    id: "2.9",
    name: "Laser Tag",
    date: "8th May 2024",
    time: "11:00AM-3:00PM",
    venue: "1ST FLOOR EG HALL(1,2)",
    rules: [],
    coordinators: [
      { name: "NAREN SURYA", contact: "+91 98840 90301" },
      { name: "SAKTHIMURUGAN M", contact: "+91 93633 81082" },
    ],
    description: [
      "Assemble your squad of five and gear up for an adrenaline-fueled battle in the laser tag arena.",
      "Navigate through a maze-like environment filled with neon lights and obstacles, adding to the excitement and challenge.",
      "Strategize with your team to outmaneuver opponents, capture bases, and eliminate opposing players using state-of-the-art laser tag equipment.",
      "The fast-paced action and teamwork required make laser tag a thrilling experience for participants and spectators alike.",
    ],
  },
  // {
  //   image: bgmi,
  //   id: "2.10",
  //   name: "Movie Screening",
  //   date: "8th May 2024",
  //   rules: [],
  //   time: "11:00AM-3:00PM",
  //   venue: "FUNCTION HALL",
  //   coordinators: [{ name: "VINOCHAN KB", contact: "8637431560" }],
  //   description: [
  //     "Have a say in what movies make it to the big screen by casting your votes on our social media platforms.",
  //     "Choose from a curated selection of blockbuster hits, cult classics, and fan-favorite films to create the ultimate movie lineup.",
  //     "Sit back, relax, and enjoy an immersive cinematic experience under the stars as the chosen movies come to life on the big screen.",
  //     "Whether you're a fan of action, comedy, drama, or romance, there's something for everyone at our movie screening event.",
  //   ],
  // },
  {
    image: opinionbuzz,
    id: "2.11",
    name: "OPINION BUZZ",
    date: "8th May 2024",
    rules: [],
    time: "TBH",
    venue: "TBH",
    coordinators: [
      { name: "Upillikannan", contact: "8950203767" },
      { name: "Sangeeth", contact: "+91 63692 51267" },
    ],
    description: [
      "An interactive event organised by Ecell student volunteers to ignite dynamic discussions on entrepreneurship and other trending topics.",
      "Our main objective is to create an engaging environment for participants to express their opinions, sparking insightful discussions and constructive debates.",
      "By conducting this event we intend to get the thought provoking ideas and views of the students from movies to politics, business ideas and many more.",
    ],
  },
  // {
  //   image: bgmi,
  //   id: "2.12",
  //   name: "OPINION BUZZ",
  //   rules: [],
  //   date: "8th May 2024",
  //   time: "TBH",
  //   venue: "TBH",
  //   coordinators: [
  //     { name: "Upillikannan", contact: "8950203767" },
  //     { name: "Sangeeth", contact: "+91 63692 51267" },
  //   ],
  //   description: [
  //     "An interactive event organised by Ecell student volunteers to ignite dynamic discussions on entrepreneurship and other trending topics.",
  //     "Our main objective is to create an engaging environment for participants to express their opinions, sparking insightful discussions and constructive debates.",
  //     "By conducting this event we intend to get the thought provoking ideas and views of the students from movies to politics, business ideas and many more.",
  //   ],
  // },
  // {
  //   image: spinyarn,
  //   id: "2.13",
  //   rules: [],
  //   name: "Spin-a-Yarn",
  //   date: "8th May ",
  //   time: "10.00AM-11.00AM",
  //   venue: " BLOCK 2 SECOND FLOOR",
  //   coordinators: [
  //     { name: "Arunima", contact: "+91 98400 73069" },
  //     { name: "Jhalak", contact: "+91 94442 43793" },
  //   ],
  //   description: [
  //     "A theme will be given for the group to work with along with a sentence to start their script with, each team member will say one sentence for the story to follow along.",
  //     "A sketch of the script will be performed for 3 minutes, the time allocated for the script preparation (based on the starting sentence and theme given) will be 10 minutes.",
  //     "This process continues until a full-fledged script is formed.",
  //   ],
  // },
  {
    image: bgmi,
    id: "2.14",
    name: "Dance Events",
    date: "TBA ",
    time: "TBA",
    venue: "TBA",
    rules: [],
    coordinators: [
      { name: "TBA", contact: "TBA" },
      // { name: "Jhalak", contact: "+91 94442 43793" },
    ],
    description: [],
  },
  {
    image: twoshades,
    id: "2.15",
    name: "2 SHADES OF GREY",
    date: "8th May ",
    time: "10.00AM-11.00AM",
    venue: "Online Event",
    rules: [
      "The participants are required to submit 1 Monochrome/Grayscale photos.",
      "Editing is strictly prohibited. Basic color correction is allowed.",
      "Mobile photography is allowed.",
      "It is an online event.",
    ],
    coordinators: [
      { name: "Arunima", contact: "+91 98400 73069" },
      { name: "Jhalak", contact: "+91 94442 43793" },
    ],
    description: [
      "2 Shades of Gray is a photography competition to showcase your creativity and talent in capturing monochromatic moments. Submit your best black and white photographs for a chance to win exciting prizes and get recognized as a talented photographer.",
      "Show us how you can play with contrasts, highlights, and shadows to create a captivating image. The best photos will be featured on the Photo Club Instagram Handle. So, grab your cameras, experiment with different techniques, and show us your best work in black and white photography.",
      "Good luck!",
    ],
  },
];

export default eventsData;
