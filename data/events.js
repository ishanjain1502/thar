const events_data = [
  {
    id: "SA1",
    name: "Go Kart",
    domain: "STAND ALONE",
  },
  {
    id: "SA2",
    name: "Robowar ",
    domain: "STAND ALONE",
    sDesc:
      "The Robowar is a remote-controlled robot competition that challenges students to design and construct a remote-controlled robot capable of fighting a tournament against another robot(s). The event will be held at Agora Garden in RTU campus.",
  },
  {
    id: "SA3",
    name: "Rc Nitro",
    domain: "STAND ALONE",
    sDesc:
      "Rc nitro car racing is one of the finest world-class RC off-road tracks",
  },
  {
    id: "SA4",
    name: "MUN",
    domain: "STAND ALONE",
  },
  {
    id: "RO1",
    name: "Roborace ",
    domain: "Robotics",
    sDesc:
      "Roborace is a test of your reflexes and your control over speed and time, that will decide your path to victory.",
  },
  {
    id: "RO2",
    name: "Cyborg trench ",
    domain: "Robotics ",
    sDesc:
      "Cyborg trench is a platform for its partakers to show off their technical skills, that can be used to create robots, which can excecute simple tasks.",
  },
  {
    id: "RO3",
    name: "Hydrazone ",
    domain: "Robotics ",
    sDesc:
      "Hydrazone is a competition for robots, that can function in the water world, to overcome various challenges.",
  },
  {
    id: "RO4",
    name: "Robo soccer ",
    domain: "Robotics ",
    sDesc:
      "Robo soccer is an event for people that are passionate about both soccer and technology. It is an exciting experience for enthusiastic individuals, who are curious to mix sports and science.",
  },
  {
    id: "RO5",
    name: "Track O mania ",
    domain: "Robotics ",
    sDesc:
      "Track O mania is an event that challenges intellectuals to create a robot that can truly push the limits of their technical skills.",
  },
  {
    id: "ST1",
    name: "Bridge O mania",
    domain: "Structures ",
    sDesc:
      "Bridge O mania is an opportunity for enthusiasts of the design and construction world to exercise their skills and put their knowledge to test.",
  },
  {
    id: "ST3",
    name: "Cantilevo",
    domain: "Structures ",
    sDesc:
      "Cantileuo is an event that provides an opportunity to its participants, to put their mechanical knowledge to use and create a 3D practical model, which can stand the test of durability.",
  },
  {
    id: "ST2",
    name: "Hydracs",
    domain: "Structures ",
    sDesc:
      "Hydracs is an opportunity that enables its partakers to put their knowledge and skills to test, by creating a hydraulic arm which can execute simple movements.",
  },
  {
    id: "AU1",
    name: "CAD wars",
    domain: "Automate",
    sDesc:
      "Cad wars is an event providing a platform to designers to present their designs through solid works software.",
  },
  {
    id: "AU2",
    name: "King of dumpyard",
    domain: "Automate",
    sDesc:
      "King of dumpyard is an event that enhances your make shifter qualities.",
  },
  {
    id: "SH2",
    name: "Shark Tank RTU",
    domain: "Startup Hub",
    sDesc:
      "Replicating the very famous shark tank tv show on THAR level, this event is for startups to encourage them and provide a platform.",
  },
  {
    id: "SH1",
    name: "Funniest Pitchdeck",
    domain: "Startup Hub",
    sDesc:
      "This event helps you to pitch business ideas which you think are funny.",
  },
  {
    id: "SH3",
    name: "Business Plan Competition",
    domain: "Startup Hub",
    sDesc: "This event provides a platform to inestablished business ideas",
  },
  {
    id: "DG3",
    name: "Designothon",
    domain: "Design and Graphics",
    sDesc:
      "Designathon is a no - code designing competition in which participants form teams and innovate.",
  },
  {
    id: "DG1",
    name: "Design Battles",
    domain: "Design and Graphics",
    sDesc:
      "The Design battle event  helps you in improving your designing skills.",
  },
  {
    id: "DG4",
    name: "Product advertisement shoot",
    domain: "Design and Graphics",
    sDesc: "Advertising shoot involves Product photography and video shooting.",
  },
  {
    id: "DG2",
    name: "College Video",
    domain: "Design and Graphics",
    sDesc: "Cinematic shoots involves making cinematic videos.",
  },
  {
    id: "DG5",
    name: "Creo3d",
    domain: "Design and Graphics",
    sDesc:
      "Creo3d is a test of imagination and skill, that pushes the competitors to fuse creativity with technology.",
  },
  {
    id: "FW2",
    name: "Battle of bids",
    domain: "Finance",
    sDesc:
      "This event creates a virtual environment to provide our participants with a real experience of the auction.",
  },
  {
    id: "FW1",
    name: "The - Fin - Quest ",
    domain: "Finance ",
    sDesc:
      "Quizzes evaluate the knowledge of the participants within academics as well as beyond academics ",
  },
  {
    id: "MNM2",
    name: "Stratothon",
    domain: "Marketing and Management",
    sDesc: "a marathon of strategic alignment ",
  },
  {
    id: "MNM6",
    name: "Baskets of golden events",
    domain: "Marketing and management ",
    sDesc:
      "If you're looking for a place where you can practice your skills, get feedback on your work, and have fun with other students in the industry, then Baskets of Golden Events is for you.",
  },
  {
    id: "MNM4",
    name: "Knock your brain",
    domain: "Marketing and Managment",
    sDesc:
      "When u practice something with a conscious mind and then continue practicing the same even with a sub-conscious mind, You Master it..” This event includes 3 rounds helping to burn the midnight oil in your brain in a lively and amusing manner.",
  },
  {
    id: "MNM3",
    name: "Businesses QUIZ",
    domain: "Marketing and Management",
    sDesc:
      "It is a mind sport marketing-based event, In which we test the participant’s skills in marketing through quizzes and slide presentations. It is child’s play for a person who presents their marketing skills better to the judges. The team will consist of 2 – 3 members and all of them must be from the same college. there are 2 rounds&nbsp;in&nbsp;total.",
  },
  {
    id: "MNM1",
    name: "AD MAD,",
    domain: "Marketing and Management ",
    sDesc: "an advertisement-making competition  ",
  },
  {
    id: "MNM7",
    name: "buizness BUZZ",
    domain: "Marketing and Management ",
    sDesc:
      "The Business Quiz is a fun way to test your knowledge of business, marketing and business management principles. It is also a great way to get together with friends and family for a night of fun.",
  },
  {
    id: "MNM5",
    name: "TRIGAME",
    domain: "Marketing and Management ",
    sDesc: "Are you ready to go full time in your marketing?",
  },
  {
    id: "MNM8",
    name: "The Improve-Challenge",
    domain: "Marketing and management",
  },
  {
    id: "AR2",
    name: "Game of drones ",
    domain: "Aeromodelling ",
    sDesc:
      "A Drone flying competition on an intense track with numerous obstacles.",
  },
  {
    id: "AR3",
    name: "Airborne",
    domain: "Aeromodelling ",
    sDesc: "An aircraft making event ",
  },
  {
    id: "AR6",
    name: "Antoho ",
    domain: "Aeromodelling ",
    sDesc: "A water rocket competition ",
  },
  {
    id: "AR4",
    name: "Aeronave ",
    domain: "Aeromodelling ",
    sDesc:
      "This remarkable event educates about the Design and making of a wire-controlled aircraft",
  },
  {
    id: "AR1",
    name: "Hoverstorm",
    domain: "Aeromodelling ",
    sDesc: "An event to show the how a hovercraft works .",
  },
  {
    id: "AR5",
    name: "Rocketverse",
    domain: "Aeromodelling ",
    sDesc:
      "This event which is one of a kind will help students to have experience in rocket fabrication and the physics behind it.",
  },
  {
    id: "CW3",
    name: "CSS Battle",
    domain: "Code wars ",
    sDesc:
      "CSS Battles is a competition that aims to observe the CSS skills of participants in competition. The purpose of the event is to allow participants to show their skills and knowledge of CSS.This event will held under the biggest techno-management fest of Rajasthan.",
  },
  {
    id: "CW1",
    name: "CS Funda",
    domain: "Code wars ",
    sDesc:
      "CS Funda is a quiz event where the participants will be tested on their basic knowledge of computer fundamentals.",
  },
  {
    id: "CW7",
    name: "Mind storm",
    domain: "Code WARS ",
    sDesc:
      "We know that learning to code is hard. It takes hours of practice and dedication to build a strong foundation of knowledge, which is why we want to help you get there faster. That's why we've designed our contest: \"Mind Storm.\"",
  },
  {
    id: "CW6",
    name: "Battle rush",
    domain: "Code WARS ",
    sDesc:
      "Code like you mean it. Battle Rush is an intense 2-hour coding competition amid high chaos where teams are attacking each other and competing to get the opportunity to solve programming problems in an intense environment.",
  },
  {
    id: "CW5",
    name: "Hack the code",
    domain: "Code WARS ",
    sDesc:
      "Participants were given a set of problems and a code solution which will fail for some test cases. You're the problem-spotter, and you've got your eye on the prize. You have practiced and practiced, and now it's time to put that knowledge to use.",
  },
  {
    id: "CW4",
    name: "Code lapse",
    domain: "Code WARS",
    sDesc:
      "We're going to be hosting a reverse coding event at THAR Rajasthan technical University of Kota!",
  },
  {
    id: "CW2",
    name: "Blind forces",
    domain: "Code wars",
    sDesc:
      "The Blind Forces tournament is an opportunity for you to win big. You won't be able to see the code you write, but you'll be judged on how quickly and accurately you can write it.",
  },
];

export let stand_alone = [];
export let robotics = [];
export let structures = [];
export let automate = [];
export let startup_hub = [];
export let combat_of_designs = [];
export let finance = [];
export let marketing_and_management = [];
export let aeromodelling = [];
export let code_wars = [];

for (let i = 0; i < events_data.length; i++) {
  if (events_data[i].domain.includes("STAND")) {
    stand_alone.push(events_data[i]);
  }
  if (events_data[i].domain.includes("Robotics")) {
    robotics.push(events_data[i]);
  }
  if (events_data[i].domain.includes("Structures")) {
    structures.push(events_data[i]);
  }
  if (events_data[i].domain.includes("Automate")) {
    automate.push(events_data[i]);
  }
  if (events_data[i].domain.includes("Startup")) {
    startup_hub.push(events_data[i]);
  }
  if (events_data[i].domain.includes("Design")) {
    combat_of_designs.push(events_data[i]);
  }
  if (events_data[i].domain.includes("Finance")) {
    finance.push(events_data[i]);
  }
  if (events_data[i].domain.includes("Marketing")) {
    marketing_and_management.push(events_data[i]);
  }
  if (events_data[i].domain.includes("Aeromodelling")) {
    aeromodelling.push(events_data[i]);
  }
  if (events_data[i].domain.includes("Code")) {
    code_wars.push(events_data[i]);
  }
}

export let filtered_events = {
  stand_alone: stand_alone,
  robotics: robotics,
  structures: structures,
  automate: automate,
  startup_hub: startup_hub,
  combat_of_designs: combat_of_designs,
  finance: finance,
  marketing_and_management: marketing_and_management,
  aeromodelling: aeromodelling,
  code_wars: code_wars,
};
