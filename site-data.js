/**
 * Pietro Dardano - Personal Website Data
 * 
 * Central declarative data store for personal website.
 * Easy to update, add news, publications, projects, and videos.
 * Governed according to AGENTS.md.
 */

window.SITE_DATA = {
  profile: {
    name: "Pietro Dardano",
    pronouns: "",
    title: "PhD Candidate in AI & Robotics",
    headline: "Multimodal Perception & Learning in Robotics and Intelligent Vehicles",
    affiliations: [
      { name: "BMW AI Robotics", url: "https://www.bmwgroup.com/en/innovation.html" },
      { name: "TU Eindhoven", url: "https://www.tue.nl/en/" }
    ],
    location: "Munich, Germany / Eindhoven, Netherlands",
    avatar: "assets/avatar.jpg",
    resume: "assets/resume.pdf",
    bio: [
      "I am a PhD Candidate at the BMW AI Robotics Lab in collaboration with TU Eindhoven.",
      "My research focuses on robust multi-modal perception and learning for robots in dynamic, cluttered environments, with an emphasis on object manipulation, environment interaction, and adaptive behaviors. In parallel, I investigate human-vehicle and human-robot interaction.",
      "Previously, I earned my MSc in Automation and Control Engineering from Politecnico di Milano and worked on reinforcement learning for quadrupeds (Sim2Real on Unitree AlienGo) and force-driven cobot validation with Explainable AI (XAI)."
    ],
    researchInterests: [
      "AI for Robotics",
      "Multimodal Perception",
      "Robotic Manipulation",
      "Reinforcement Learning & Sim2Real",
      "Adaptive Behavior",
      "Human-Vehicle Interaction"
    ],
    links: [
      { name: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=mz6A_oMAAAAJ", icon: "scholar" },
      { name: "ORCID", url: "https://orcid.org/0009-0007-3222-7153", icon: "orcid" },
      { name: "GitHub", url: "https://github.com/pietrodardano", icon: "github" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/pietro-dardano/", icon: "linkedin" },
      { name: "Email", url: "mailto:dardanopietro@libero.it", icon: "email" }
    ]
  },

  // Analytics (Private dashboard at https://cloud.umami.is)
  // Public write-only tracking ID (Safe to commit, cannot be used to view stats)
  analytics: {
    umamiWebsiteId: "aaa6c084-5fd3-404b-af49-fe671dcdbfa2"
  },

  news: [
    {
      date: "2026-06",
      tag: "Award",
      icon: "🏆",
      title: "1st classified at 'Europe Embodied' Hackathon in Munich."
    },
    {
      date: "2026-06",
      tag: "Conference",
      icon: "🎤",
      title: "Organized workshop and presented 2 posters at ICRA 2026 in Vienna."
    },
    {
      date: "2026-04",
      tag: "Leadership",
      icon: "✅",
      title: "Participating in RYLA 26: Rotary Youth Leadership Awards."
    },
    {
      date: "2026-02",
      tag: "School",
      icon: "🤖",
      title: "Participating at Romandic Winterschool of Robotics, Slovenia."
    },
    {
      date: "2026-01",
      tag: "Workshop",
      icon: "✅",
      title: "Robotac26 Workshop accepted at ICRA 2026."
    },
    {
      date: "2025-12",
      tag: "School",
      icon: "🤖",
      title: "Accepted to ROMANDIC Winter School 2026: Robot Manipulation of Deformable Objects."
    },
    {
      date: "2025-12",
      tag: "Industry",
      icon: "🎓",
      title: "Attended BMW Dialogue Day, Munich."
    },
    {
      date: "2025-11",
      tag: "Poster",
      icon: "🎤",
      title: "Poster presentation at Soft Robotics Symposium."
    },
    {
      date: "2025-07",
      tag: "Paper",
      icon: "🎤",
      title: "Presented first paper at 19th International Autonomous Systems Conference (IAS-19)."
    },
    {
      date: "2025-04",
      tag: "Paper",
      icon: "✅",
      title: "Paper accepted at IAS-19."
    },
    {
      date: "2025-03",
      tag: "PhD",
      icon: "🤖",
      title: "Joined the RoboTac Lab at BMW + TU Eindhoven as a PhD researcher."
    },
    {
      date: "2024-10",
      tag: "Degree",
      icon: "🎓",
      title: "Graduated with MSc Degree in Automation and Control from Politecnico di Milano."
    },
    {
      date: "2024-06",
      tag: "Research",
      icon: "🤖",
      title: "Started Reinforcement Learning Research Internship at University of Trento."
    }
  ],

  publications: [
    {
      id: "dardano-ias19",
      title: "Force-Driven Validation for Collaborative Robotics in Automated Avionics Testing",
      authors: ["Pietro Dardano", "Paolo Rocco", "David Frisini"],
      venue: "19th International Autonomous Systems Conference (IAS-19)",
      year: 2025,
      date: "2025-07-02",
      tags: ["Collaborative Robotics", "Deep Learning", "eXplainable AI", "ROS 2"],
      abstract: "ARTO is a project combining collaborative robots (cobots) and Artificial Intelligence (AI) to automate functional test procedures for civilian and military aircraft certification. This paper proposes a Deep Learning (DL) and eXplainable AI (XAI) approach, equipping ARTO with interaction analysis capabilities to verify and validate operations on cockpit components. During these interactions, forces, torques, and end-effector poses are recorded and preprocessed to filter disturbances caused by low performance force controllers and embedded Force Torque Sensors (FTS). Convolutional Neural Networks (CNNs) then classify the cobot actions as Success or Fail, while also identifying and reporting the causes of failure. To improve interpretability, Grad-CAM, an XAI technique for visual explanations, is integrated to provide insights into the model's decision-making process. This approach enhances the reliability and trustworthiness of the automated testing system, facilitating the diagnosis and rectification of errors that may arise during testing.",
      links: [
        { name: "arXiv", url: "https://arxiv.org/abs/2505.10224" },
        { name: "PDF", url: "https://arxiv.org/pdf/2505.10224" },
        { name: "Code", url: "https://github.com/pietrodardano/ForceDriven_Arto" },
        { name: "DOI", url: "https://doi.org/10.48550/arXiv.2505.10224" }
      ],
      bibtex: `@inproceedings{dardano2025force,
  title={Force-Driven Validation for Collaborative Robotics in Automated Avionics Testing},
  author={Dardano, Pietro and Rocco, Paolo and Frisini, David},
  booktitle={19th International Autonomous Systems Conference (IAS-19)},
  year={2025},
  doi={10.48550/arXiv.2505.10224}
}`
    }
  ],

  projects: [
    {
      id: "project-arto",
      title: "ARTO: Force-Driven Cobot Cockpit Validation & XAI",
      summary: "Explainable Deep Learning validation for collaborative robotics in aircraft cockpit testing.",
      description: "Functional test procedures for civil and military avionics require high precision. This project equipped collaborative robots with force-torque perception, ROS2 real-time integration, and hybrid CNNs paired with Grad-CAM visual heatmaps. Enables automated pass/fail categorization with 96–99.2% F1 score and root-cause failure diagnostics.",
      period: "2023 - 2024",
      tags: ["Cobots", "ROS 2", "PyTorch", "XAI / Grad-CAM", "Force Control"],
      links: [
        { name: "Paper (arXiv)", url: "https://arxiv.org/abs/2505.10224" },
        { name: "Code (GitHub)", url: "https://github.com/pietrodardano/ForceDriven_Arto" }
      ],
      video: null // Can be a YouTube embed URL, mp4 path, or gif
    },
    {
      id: "project-quadruped",
      title: "Safe Reinforcement Learning for Quadruped Locomotion",
      summary: "Sim2Real transfer of safe locomotion and stop policies on Unitree AlienGo.",
      description: "Designed PPO-based walk and stop policies for quadrupedal robots in NVIDIA IsaacSim and IsaacLab. Extended research to introduce DDPG and TD3-based safety value functions, providing safety assurances and constraint verification for quadruped deployment in unstructured environments.",
      period: "2024 - Present",
      tags: ["Reinforcement Learning", "IsaacSim", "Sim2Real", "Unitree AlienGo", "Safety"],
      links: [
        { name: "University of Trento", url: "https://www.unitn.it" }
      ],
      video: null
    },
    {
      id: "project-drone-rig",
      title: "Actuated Drone Disturbance & Collision Rig",
      summary: "Hardware-in-the-loop testbed for UAV stability during collision and wind events.",
      description: "Designed and implemented an actuated physical platform at Politecnico di Milano to replicate turbulent aerodynamic disturbances and sudden collision impacts on quadrotors. Integrated IMU, gyroscope, and Hall-effect sensor fusion to evaluate controller recovery margins.",
      period: "2023 - 2025",
      tags: ["Drone Testing", "Sensor Fusion", "Hardware-in-the-Loop", "Control"],
      links: [],
      video: null
    }
  ],

  experience: [
    {
      role: "PhD Candidate & Researcher",
      organization: "BMW AI Robotics & TU Eindhoven",
      location: "Munich, Germany / Eindhoven, NL",
      period: "Mar 2025 – Present",
      details: "Researching robust multimodal perception, tactile/force sensing, and adaptive manipulation policies in dynamic environments, alongside human-vehicle interaction."
    },
    {
      role: "Research Collaborator (Reinforcement Learning)",
      organization: "University of Trento (DII)",
      location: "Trento, Italy",
      period: "Apr 2025 – Present",
      details: "Developing DDPG and TD3-based safety value functions for quadrupeds to ensure robust and safe Sim2Real execution."
    },
    {
      role: "Research Intern (Master Thesis)",
      organization: "TXT E-TECH",
      location: "Milan, Italy",
      period: "Sep 2023 – Oct 2024",
      details: "Built the ARTO force-driven cobot validation pipeline. Migrated system to ROS2, implemented Grad-CAM explainable AI, achieving 96%–99.2% F1 score."
    },
    {
      role: "Student Researcher",
      organization: "Politecnico di Milano",
      location: "Milan, Italy",
      period: "Apr 2023 – Jan 2025",
      details: "Designed actuated test rig and multi-sensor fusion for UAV collision and wind disturbance experiments."
    },
    {
      role: "Co-Founder & Arbitrator (Past President)",
      organization: "Automation Engineering Association (AEA)",
      location: "Milan, Italy",
      period: "Sep 2020 – Present",
      details: "Co-founded student association, supervised 110+ students across research robotics projects, organized industrial workshops and hackathons."
    }
  ],

  education: [
    {
      degree: "PhD Candidate in Robotics & AI",
      institution: "Eindhoven University of Technology (TUe) & BMW Group",
      period: "2025 – Present",
      details: "Focus: Robust multimodal perception and learning in robotics and intelligent vehicles."
    },
    {
      degree: "MSc in Automation and Control Engineering",
      institution: "Politecnico di Milano",
      period: "2021 – 2024",
      details: "GPA: 3.78 / 4.0. Core: Advanced Control, Robotics, Machine Learning, Autonomous Vehicles, Power Electronics."
    },
    {
      degree: "BSc in Automation Engineering",
      institution: "Politecnico di Milano",
      period: "2018 – 2021",
      details: "GPA: 3.41 / 4.0. Core: Robotics, Embedded Systems, Industrial Automation, Signal Processing."
    }
  ]
};
