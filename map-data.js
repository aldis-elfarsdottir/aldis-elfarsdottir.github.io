// Each entry is one map pin. "roles" is a list because several jobs happened
// in the same place — the detail panel shows them as a scrollable timeline.
const MAP_LOCATIONS = [
  {
    city: "Cambridge & Boston, USA",
    lat: 42.3736,
    lon: -71.1097,
    roles: [
      {
        title: "Research Fellow — Solar Climate Interventions",
        org: "SilverLining",
        years: "Aug 2020 — Apr 2021",
        note: "Analyzed solar climate intervention methods and governance; refreshed the annual research report."
      },
      {
        title: "Research Fellow — Building Energy Systems",
        org: "Fraunhofer USA, Center for Sustainable Energy Systems",
        years: "Mar 2018 — Aug 2018",
        note: "Simulated HVAC loads for heat pump savings analysis; drafted grant proposals for technology demonstrations."
      },
      {
        title: "Movement-Building Intern — Zero Waste Activism",
        org: "PLAN: The Post-Landfill Action Network",
        years: "Jun 2016 — Aug 2016",
        note: "Organized zero-waste conferences, toured recycling facilities and landfills, co-authored a movement manifesto."
      },
      {
        title: "Captain, Resource Efficiency Program",
        org: "Harvard Office for Sustainability",
        years: "Jan 2017 — May 2017",
        note: "Managed a team of 4 representatives; advised on stakeholder engagement and independent projects."
      },
      {
        title: "Representative, Resource Efficiency Program",
        org: "Harvard Office for Sustainability",
        years: "Aug 2015 — Jan 2017",
        note: "Founded NETS, a networked energy-saving temperature sensing project; led behavior-change campaigns on campus."
      },
      {
        title: "Data & Analytics Intern — Water Pricing Intelligence",
        org: "Lux Research Inc.",
        years: "May 2015 — Aug 2015",
        note: "Built a database of 1,700 water rates across 33 US states; analyzed water stress indices with QGIS."
      }
    ]
  },
  {
    city: "Stanford & San Francisco, USA",
    lat: 37.4275,
    lon: -122.1697,
    roles: [
      {
        title: "Instructor",
        org: "Freeman Spogli Institute for International Studies",
        years: "Sep 2026 — Present",
        note: "Teaching a statistics and R refresher course for incoming Stanford Master's students in International Policy."
      },
      {
        title: "Graduate Researcher",
        org: "Stanford Management Science & Engineering",
        years: "Sep 2021 — Aug 2026",
        note: "Data Science Scholar analyzing large-scale text data of corporate carbon disclosures."
      },
      {
        title: "Teaching Assistant",
        org: "Stanford Management Science & Engineering",
        years: "Sep 2023 — Dec 2025",
        note: "TA across data science, economic analysis, and energy policy courses."
      },
      {
        title: "Research Scientist Intern",
        org: "Amazon",
        years: "Jun 2025 — Sep 2025",
        note: "Built a Python toolkit for an emissions forecasting model supporting Amazon's Climate Pledge."
      }
    ]
  },
  {
    city: "Randstad, Netherlands",
    lat: 52.0907,
    lon: 5.1214,
    roles: [
      {
        title: "Research Fellow — Automated Detection of Methane Emissions",
        org: "SRON Netherlands Institute for Space Research",
        years: "Jul 2019 — Mar 2020",
        note: "Built a Python routine for semi-supervised detection of methane hot spots from satellite data."
      }
    ]
  },
  {
    city: "Reykjavík, Iceland",
    lat: 64.1466,
    lon: -21.9426,
    roles: [
      {
        title: "Research Fellow — Climate and Glacier Interactions",
        org: "Icelandic Meteorological Office",
        years: "Sep 2017 — Feb 2018",
        note: "Produced glacier-change briefings for political envoys; automated verification for WMO's CryoNet database."
      }
    ]
  },
  {
    city: "Gurugram, India",
    lat: 28.4595,
    lon: 77.0266,
    roles: [
      {
        title: "Strategy Intern — Electric Vehicle Market Entry",
        org: "ReNew Power",
        years: "Jun 2017 — Aug 2017",
        note: "Consolidated 3,000+ data points on EVs and charging infrastructure; pitched market entry recommendations to the board."
      }
    ]
  }
];
