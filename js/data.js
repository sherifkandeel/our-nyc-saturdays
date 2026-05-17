const SITE_META = {
  title: "Our NYC Saturdays",
  subtitle: "32 Saturdays. May through December 2026.",
  personalMessage: "I planned this for us for the remaining Saturdays in NYC, I hope you like it :)",
  from: "Sherif",
  to: "Sarah",
  basedIn: "Williamsburg, Brooklyn",
  totalSaturdays: 32,
  startDate: "2026-05-23",
  endDate: "2026-12-26",
  icsDownloadFile: "nyc-saturdays-2026.ics"
};

const CATEGORIES = {
  "Museum": { color: "#B8847C" },
  "Classical": { color: "#8B6B7B" },
  "Jazz": { color: "#C09B5C" },
  "Film": { color: "#7A8B8E" },
  "Bookstore": { color: "#6B8B6B" },
  "Day Trip": { color: "#8FA888" },
  "Architecture": { color: "#7B8FA3" },
  "Techno": { color: "#7D6B8B" },
  "Theater": { color: "#9B6B6B" },
  "Outdoor Concert": { color: "#A39B5C" },
  "Holiday": { color: "#B87070" },
  "Scenic": { color: "#6B9B8B" },
  "Art Fair": { color: "#A3886B" },
  "Halloween": { color: "#8B6B6B" }
};

const SATURDAYS = [
  // -------------------------------------------------------
  // #1 - May 23
  // -------------------------------------------------------
  {
    id: 1,
    date: "2026-05-23",
    title: "MoMA Triple Feature + NY Phil Mendelssohn",
    shortTitle: "MoMA + NY Phil",
    categories: ["Museum", "Classical"],
    primaryCategory: "Museum",
    borough: "Manhattan",
    budget: "$$$",
    season: "spring",
    daytime: {
      time: "12-4pm",
      venue: "MoMA",
      title: "Three Major Exhibitions",
      description: "Frida and Diego: The Last Dream (through Sep 12) - six Kahlo paintings, Rivera works, and an immersive opera-inspired staging. Marcel Duchamp (through Aug 23) - major retrospective of the father of conceptual art. Arthur Jafa: Less Is Morbid (through Jul 6) - video art by the acclaimed filmmaker.",
      address: "11 West 53rd St, Manhattan, NY 10019",
      cost: "$28 online / $30 door",
      bookingUrl: "https://www.moma.org/visit",
      bookingLabel: "moma.org/visit",
      mapQuery: "MoMA+11+West+53rd+St+Manhattan+NY",
      tip: "Go right at noon to avoid crowds. Start on the upper floors and work down. Check 'Notables' $20 tickets if you're both under 40."
    },
    dinner: {
      time: "5:30-7pm",
      options: [
        {
          name: "Yakitori Totto",
          cuisine: "Japanese yakitori",
          priceRange: "$$",
          address: "251 W 55th St, Midtown",
          description: "Grilled skewers in a cozy upstairs izakaya. No reservations - put your name in by 5:30, wait at a nearby bar. Cash only for tips.",
          bookingUrl: null,
          bookingPlatform: "Walk-in",
          mapQuery: "Yakitori+Totto+251+W+55th+St+New+York"
        },
        {
          name: "Gazala's",
          cuisine: "Druze/Middle Eastern",
          priceRange: "$$",
          address: "709 9th Ave, Hell's Kitchen",
          description: "Family-run, generous portions, outstanding lamb. Walk-in friendly.",
          bookingUrl: "https://www.gazalas.com",
          bookingPlatform: "Walk-in",
          mapQuery: "Gazalas+709+9th+Ave+Hells+Kitchen+New+York"
        }
      ]
    },
    evening: {
      time: "7:30pm",
      venue: "New York Philharmonic",
      title: "Janowski Conducts Mendelssohn's \"Scottish\" Symphony",
      description: "Mendelssohn Scottish Symphony. Part of the NY Phil 2025-26 season (May 21-23 performances).",
      address: "David Geffen Hall, 10 Lincoln Center Plaza",
      cost: "$35-150",
      bookingUrl: "https://nyphil.org/concerts-tickets",
      bookingLabel: "nyphil.org",
      mapQuery: "David+Geffen+Hall+Lincoln+Center+New+York",
      tip: null
    },
    bookingUrgency: "high",
    bookingNote: "Book NY Phil today - next week!"
  },

  // -------------------------------------------------------
  // #2 - May 30
  // -------------------------------------------------------
  {
    id: 2,
    date: "2026-05-30",
    title: "Bargemusic by the Bridge + Sheku Kanneh-Mason Plays Elgar",
    shortTitle: "Bargemusic + Sheku",
    categories: ["Classical"],
    primaryCategory: "Classical",
    borough: "Brooklyn/Manhattan",
    budget: "$$$",
    season: "spring",
    daytime: {
      time: "12-3pm",
      venue: "Bargemusic",
      title: "Free Chamber Music at Brooklyn Bridge Park",
      description: "Free world-class chamber music in a stunning waterfront setting. For 2026, Bargemusic has moved ashore to the Brooklyn Bridge Park Boathouse - still the same intimate experience with views of the Manhattan skyline. Saturday afternoon concerts run regularly with rotating programs (Mozart, Beethoven, Schubert). After, walk along Brooklyn Bridge Park toward DUMBO for great photo spots and waterfront views.",
      address: "Brooklyn Bridge Park Boathouse, Brooklyn",
      cost: "Free",
      bookingUrl: "https://www.bargemusic.org",
      bookingLabel: "bargemusic.org",
      mapQuery: "Brooklyn+Bridge+Park+Boathouse+Brooklyn+NY",
      tip: "Arrive 15 min early for a good seat. Grab a coffee at Time Out Market nearby beforehand."
    },
    dinner: {
      time: "5:30-7pm",
      options: [
        {
          name: "Celestine",
          cuisine: "Mediterranean",
          priceRange: "$$$",
          address: "1 John St, DUMBO",
          description: "Waterfront dining with Manhattan Bridge views. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Celestine+1+John+St+DUMBO+Brooklyn+NY"
        },
        {
          name: "Gran Electrica",
          cuisine: "Mexican",
          priceRange: "$$",
          address: "5 Front St, DUMBO",
          description: "Vibrant, great margaritas. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Gran+Electrica+5+Front+St+DUMBO+Brooklyn+NY"
        }
      ]
    },
    evening: {
      time: "7:30pm",
      venue: "New York Philharmonic",
      title: "Sheku Kanneh-Mason Plays Elgar Cello Concerto",
      description: "Young British cello sensation playing one of the greatest cello concertos ever written. He became a household name playing at the Royal Wedding. This is a must-see.",
      address: "David Geffen Hall, Lincoln Center",
      cost: "$35-150",
      bookingUrl: "https://nyphil.org/concerts-tickets",
      bookingLabel: "nyphil.org",
      mapQuery: "David+Geffen+Hall+Lincoln+Center+New+York",
      tip: null
    },
    bookingUrgency: "high",
    bookingNote: "Book NY Phil today - in 2 weeks!"
  },

  // -------------------------------------------------------
  // #3 - Jun 6
  // -------------------------------------------------------
  {
    id: 3,
    date: "2026-06-06",
    title: "Double Feature Day: Metrograph + Film Forum",
    shortTitle: "Metrograph + Film Forum",
    categories: ["Film"],
    primaryCategory: "Film",
    borough: "Manhattan",
    budget: "$$",
    season: "summer",
    daytime: {
      time: "12-3pm",
      venue: "Metrograph",
      title: "Afternoon Screening",
      description: "NYC's most beautifully designed cinema. Check their programming closer to date - they've featured 35mm Fraenkel Gallery artist picks, a Basquiat screening with Q&A by Julian Schnabel, and repertory gems like Portrait of a Lady on Fire, Grey Gardens, and In the Mood for Love.",
      address: "7 Ludlow St, Lower East Side",
      cost: "~$18 per ticket",
      bookingUrl: "https://metrograph.com",
      bookingLabel: "metrograph.com",
      mapQuery: "Metrograph+7+Ludlow+St+Lower+East+Side+New+York",
      tip: "Arrive early and browse the lobby bookstore (film books, prints, merch). The restaurant is good for a pre-show bite. Walk the LES after - gallery hopping on Orchard St and Rivington St (free)."
    },
    dinner: {
      time: "6-7:30pm",
      options: [
        {
          name: "Dhamaka",
          cuisine: "Indian",
          priceRange: "$$$",
          address: "Essex Market, 119 Delancey St",
          description: "Adventurous regional Indian cuisine. One of NYC's most exciting restaurants. Book on Resy (book early - in demand).",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Dhamaka+Essex+Market+119+Delancey+St+New+York"
        },
        {
          name: "Dar Yemma",
          cuisine: "Moroccan",
          priceRange: "$$",
          address: "116 Ave C, East Village",
          description: "Cozy, authentic tagines and couscous. Walk-in or call.",
          bookingUrl: null,
          bookingPlatform: "Walk-in or call",
          mapQuery: "Dar+Yemma+116+Ave+C+East+Village+New+York"
        }
      ]
    },
    evening: {
      time: "8pm",
      venue: "Film Forum",
      title: "The Lubitsch Touch Series",
      description: "The Lubitsch Touch series runs through June 30 - classic Ernst Lubitsch comedies in gorgeous restorations. Also check for the Marilyn 100 centennial series (May 29-Jun 11) or The Third Man on new 35mm print (Jun 12).",
      address: "209 W Houston St, West Village",
      cost: "~$17",
      bookingUrl: "https://filmforum.org",
      bookingLabel: "filmforum.org",
      mapQuery: "Film+Forum+209+W+Houston+St+West+Village+New+York",
      tip: "Buy online - screenings sell out, especially weekend evenings."
    },
    bookingUrgency: "low",
    bookingNote: "Buy film tickets online by Friday each week."
  },

  // -------------------------------------------------------
  // #4 - Jun 13
  // -------------------------------------------------------
  {
    id: 4,
    date: "2026-06-13",
    title: "Chelsea Gallery Walk + Blue Note Jazz Festival",
    shortTitle: "Chelsea Galleries + Blue Note",
    categories: ["Jazz"],
    primaryCategory: "Jazz",
    borough: "Manhattan",
    budget: "$$",
    season: "summer",
    daytime: {
      time: "12-4pm",
      venue: "Chelsea Gallery District",
      title: "Chelsea Gallery Walk + High Line",
      description: "200+ galleries concentrated on West 20th-27th Streets between 10th-11th Avenues. All free. Start at David Zwirner (Lisa Yuskavage, Gerhard Richter - check current shows) and Pace Gallery (David Hockney). Walk the High Line after for architecture and public art.",
      address: "Chelsea, 20th-27th St between 10th-11th Ave, Manhattan",
      cost: "Free",
      bookingUrl: null,
      bookingLabel: null,
      mapQuery: "Chelsea+Galleries+West+25th+St+Manhattan+NY",
      tip: "Most galleries open Tue-Sat 10/11am-6pm. Pick 5-6 galleries max to avoid fatigue."
    },
    dinner: {
      time: "6-7:30pm",
      options: [
        {
          name: "EN Japanese Brasserie",
          cuisine: "Japanese",
          priceRange: "$$$",
          address: "435 Hudson St, West Village",
          description: "Elegant Japanese with excellent sake list. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "EN+Japanese+Brasserie+435+Hudson+St+West+Village+New+York"
        },
        {
          name: "Kubeh",
          cuisine: "Kurdish/Iraqi",
          priceRange: "$$",
          address: "464 6th Ave, West Village",
          description: "Dumplings, stews, mezze. Walk-in friendly.",
          bookingUrl: null,
          bookingPlatform: "Walk-in",
          mapQuery: "Kubeh+464+6th+Ave+West+Village+New+York"
        }
      ]
    },
    evening: {
      time: "8pm",
      venue: "Blue Note",
      title: "Blue Note Jazz Festival",
      description: "52 concerts across Blue Note Greenwich Village and Sony Hall (Jun 1-Jul 1). Check the lineup for Jun 13 specifically. Notable June artists include Brian Blade & The Fellowship Band, Kokoroko (Afrobeat-jazz), and Brandee Younger.",
      address: "131 W 3rd St, Greenwich Village",
      cost: "$25-75 + $20 food/drink minimum",
      bookingUrl: "https://www.ticketweb.com",
      bookingLabel: "ticketweb.com",
      mapQuery: "Blue+Note+131+W+3rd+St+Greenwich+Village+New+York",
      tip: null
    },
    bookingUrgency: "medium",
    bookingNote: "Book Blue Note Jazz Festival show 2-4 weeks ahead. Popular acts sell out."
  },

  // -------------------------------------------------------
  // #5 - Jun 20
  // -------------------------------------------------------
  {
    id: 5,
    date: "2026-06-20",
    title: "Books Are Magic + Prospect Park + BRIC",
    shortTitle: "Books Are Magic + BRIC",
    categories: ["Bookstore", "Outdoor Concert"],
    primaryCategory: "Bookstore",
    borough: "Brooklyn",
    budget: "$",
    season: "summer",
    daytime: {
      time: "12-3pm",
      venue: "Books Are Magic",
      title: "Brooklyn Bookstore + Prospect Park",
      description: "Start at Books Are Magic (225 Smith St, Cobble Hill) - one of NYC's best indie bookstores, founded by novelist Emma Straub. Great curated fiction, design, and art sections. Check their events calendar for author readings. Then walk to Prospect Park (20 min or short bus) for the Long Meadow - NYC's most beautiful open green space. Walk the loop, find the Ravine (a hidden forest in the middle of Brooklyn).",
      address: "225 Smith St, Cobble Hill, Brooklyn",
      cost: "Free (plus whatever books you buy)",
      bookingUrl: null,
      bookingLabel: null,
      mapQuery: "Books+Are+Magic+225+Smith+St+Cobble+Hill+Brooklyn",
      tip: "Also hit McNally Jackson Williamsburg (76 N 4th St) before you leave the neighborhood - it's walking distance from home."
    },
    dinner: {
      time: "5:30-7pm",
      options: [
        {
          name: "Sofreh",
          cuisine: "Persian",
          priceRange: "$$$",
          address: "75 St Marks Ave, Prospect Heights",
          description: "Stunning Persian cuisine - the tahdig (crispy rice) is legendary. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Sofreh+75+St+Marks+Ave+Prospect+Heights+Brooklyn"
        },
        {
          name: "Ayat",
          cuisine: "Palestinian",
          priceRange: "$$",
          address: "761 Washington Ave, Prospect Heights",
          description: "Home-style Palestinian food. Outstanding maftoul and musakhan. Walk-in or OpenTable.",
          bookingUrl: "https://www.opentable.com",
          bookingPlatform: "Walk-in or OpenTable",
          mapQuery: "Ayat+761+Washington+Ave+Prospect+Heights+Brooklyn"
        }
      ]
    },
    evening: {
      time: "7:30pm",
      venue: "BRIC Celebrate Brooklyn!",
      title: "Wayne Wonder + Lila Ike",
      description: "Reggae and dancehall under the stars in Prospect Park. Free.",
      address: "Lena Horne Bandshell, Prospect Park, Brooklyn",
      cost: "Free (RSVP encouraged)",
      bookingUrl: "https://www.bricartsmedia.org/celebrate-brooklyn",
      bookingLabel: "bricartsmedia.org",
      mapQuery: "Lena+Horne+Bandshell+Prospect+Park+Brooklyn",
      tip: "Bring a blanket. Arrive by 7pm for a good spot. Food vendors on site."
    },
    bookingUrgency: "none",
    bookingNote: "Free events - just show up. RSVP encouraged for BRIC but not required."
  },

  // -------------------------------------------------------
  // #6 - Jun 27
  // -------------------------------------------------------
  {
    id: 6,
    date: "2026-06-27",
    title: "Storm King Art Center Day Trip",
    shortTitle: "Storm King",
    categories: ["Day Trip"],
    primaryCategory: "Day Trip",
    borough: "Hudson Valley",
    budget: "$$",
    season: "summer",
    daytime: {
      time: "10am departure (full day)",
      venue: "Storm King Art Center",
      title: "500 Acres of Monumental Sculpture",
      description: "500 acres of rolling hills with monumental outdoor sculptures by Alexander Calder, Maya Lin, Richard Serra, Mark di Suvero, Andy Goldsworthy, and dozens more. One of the most extraordinary art experiences on the East Coast. Budget 4-5 hours to walk the grounds.",
      address: "1 Museum Rd, New Windsor, NY",
      cost: "~$18/person admission",
      bookingUrl: "https://stormking.org",
      bookingLabel: "stormking.org",
      mapQuery: "Storm+King+Art+Center+1+Museum+Rd+New+Windsor+NY",
      tip: "Wear comfortable shoes, bring sunscreen and water. The tram helps but walking is how you experience it. Getting there: Coach USA / ShortLine bus from Port Authority (42nd St), ~90 min. Or Uber (~$100-120 each way)."
    },
    dinner: {
      time: "7:30-9pm",
      options: [
        {
          name: "The Commodore",
          cuisine: "American",
          priceRange: "$$",
          address: "366 Metropolitan Ave, Williamsburg",
          description: "Casual, fun, great fried chicken and frozen drinks. Walk-in.",
          bookingUrl: null,
          bookingPlatform: "Walk-in",
          mapQuery: "The+Commodore+366+Metropolitan+Ave+Williamsburg+Brooklyn"
        },
        {
          name: "Samesa",
          cuisine: "Middle Eastern",
          priceRange: "$",
          address: "Williamsburg, Brooklyn",
          description: "Quick, affordable, excellent falafel and shawarma. Walk-in.",
          bookingUrl: null,
          bookingPlatform: "Walk-in",
          mapQuery: "Samesa+Williamsburg+Brooklyn"
        }
      ]
    },
    evening: null,
    bookingUrgency: "medium",
    bookingNote: "Book timed entry at stormking.org 1-2 weeks ahead - summer Saturdays fill up."
  },

  // -------------------------------------------------------
  // #7 - Jul 4
  // -------------------------------------------------------
  {
    id: 7,
    date: "2026-07-04",
    title: "Governors Island: Art + Architecture + Views",
    shortTitle: "Governors Island",
    categories: ["Scenic"],
    primaryCategory: "Scenic",
    borough: "Brooklyn",
    budget: "$$",
    season: "summer",
    daytime: {
      time: "12-5pm",
      venue: "Governors Island",
      title: "Art, Architecture & Skyline Views",
      description: "A 172-acre island in New York Harbor with car-free paths, rolling hills with Manhattan skyline views, art installations, and historic architecture. The Hills (man-made from recycled construction debris) offer the most spectacular 360-degree views of the Statue of Liberty, Manhattan, and Brooklyn. Check for summer art exhibitions - new installations each year.",
      address: "Governors Island (ferry from Brooklyn Bridge Park Pier 6)",
      cost: "Ferry ~$4 round trip. Island admission free.",
      bookingUrl: "https://www.govisland.org",
      bookingLabel: "govisland.org",
      mapQuery: "Governors+Island+Ferry+Brooklyn+Bridge+Park+Pier+6",
      tip: "Rent bikes on the island (~$20/hr) to cover more ground. The Lavender Field is beautiful in July. Bring lunch or eat at food vendors. July 4th fireworks are spectacular from the island BUT very loud - plan to leave by 7pm if you want to skip."
    },
    dinner: {
      time: "7-9pm",
      options: [
        {
          name: "Win Son",
          cuisine: "Taiwanese-American",
          priceRange: "$$",
          address: "159 Graham Ave, Williamsburg",
          description: "Creative Taiwanese dishes in a fun setting. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Win+Son+159+Graham+Ave+Williamsburg+Brooklyn"
        },
        {
          name: "Rule of Thirds",
          cuisine: "Japanese izakaya",
          priceRange: "$$",
          address: "171 Graham Ave, Williamsburg",
          description: "Excellent small plates, sake, and Japanese whisky. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Rule+of+Thirds+171+Graham+Ave+Williamsburg+Brooklyn"
        }
      ]
    },
    evening: {
      time: "Evening",
      venue: "Williamsburg Waterfront",
      title: "Rooftop Views & Waterfront Walk",
      description: "Rooftop views from Williamsburg hotels (Wythe Hotel rooftop bar, William Vale) if you want to watch fireworks from a distance. Or a quiet walk along the Williamsburg waterfront at Kent Ave.",
      address: "Wythe Hotel / William Vale, Williamsburg",
      cost: "Free (drinks extra)",
      bookingUrl: null,
      bookingLabel: null,
      mapQuery: "Wythe+Hotel+Rooftop+80+Wythe+Ave+Williamsburg+Brooklyn",
      tip: null
    },
    bookingUrgency: "none",
    bookingNote: "No advance booking needed. Check govisland.org for ferry schedule."
  },

  // -------------------------------------------------------
  // #8 - Jul 11
  // -------------------------------------------------------
  {
    id: 8,
    date: "2026-07-11",
    title: "AIA + High Line + Nowadays Summer Party",
    shortTitle: "Architecture + Nowadays",
    categories: ["Architecture", "Techno"],
    primaryCategory: "Architecture",
    borough: "Manhattan/Queens",
    budget: "$$$",
    season: "summer",
    daytime: {
      time: "12-4pm",
      venue: "AIA Center for Architecture + High Line",
      title: "Architecture Walk",
      description: "Start at AIA Center for Architecture (536 LaGuardia Pl, Greenwich Village). Two exhibitions running: Gerrit Rietveld and Democracy & Urban Spaces (both through Sep 2). Then walk the High Line (enter at Gansevoort St, walk north to Hudson Yards). At the north end, visit The Shed (architecture by Diller Scofidio + Renfro) and look at the Vessel and Hudson Yards complex. End at the Oculus (WTC, Calatrava) if time allows - take the 1 train south.",
      address: "536 LaGuardia Pl, Greenwich Village, Manhattan",
      cost: "AIA ~$10. High Line free. Oculus free.",
      bookingUrl: null,
      bookingLabel: null,
      mapQuery: "AIA+Center+for+Architecture+536+LaGuardia+Pl+Greenwich+Village+New+York",
      tip: "The High Line is best in late afternoon light for photography."
    },
    dinner: {
      time: "6-7:30pm",
      options: [
        {
          name: "Thai Diner",
          cuisine: "Thai-American",
          priceRange: "$$",
          address: "186 Mott St, Nolita",
          description: "Playful Thai dishes in a retro diner setting. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Thai+Diner+186+Mott+St+Nolita+New+York"
        },
        {
          name: "Hirohisa",
          cuisine: "Japanese",
          priceRange: "$$$",
          address: "73 Thompson St, SoHo",
          description: "Refined, intimate kaiseki-inspired Japanese. Book on Resy or call.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Hirohisa+73+Thompson+St+SoHo+New+York"
        }
      ]
    },
    evening: {
      time: "10pm+",
      venue: "Nowadays",
      title: "Summer Outdoor Party (Techno Q3)",
      description: "First quarterly techno/electronic night. Nowadays has a lush outdoor garden with excellent sound and curated DJ lineups (house, techno, ambient). Check their schedule closer to date for the specific July 11 lineup.",
      address: "56-06 Cooper Ave, Ridgewood, Queens",
      cost: "~$25 cover",
      bookingUrl: "https://nowadays.nyc",
      bookingLabel: "nowadays.nyc",
      mapQuery: "Nowadays+56-06+Cooper+Ave+Ridgewood+Queens+NY",
      tip: "Outdoor garden is the main draw in summer. Best vibes around 11pm-midnight. Uber back to Williamsburg ~$20-25, 15 min."
    },
    bookingUrgency: "low",
    bookingNote: "RSVP/tickets on nowadays.nyc closer to date."
  },

  // -------------------------------------------------------
  // #9 - Jul 18
  // -------------------------------------------------------
  {
    id: 9,
    date: "2026-07-18",
    title: "Brooklyn Museum: Iris van Herpen",
    shortTitle: "Brooklyn Museum",
    categories: ["Museum"],
    primaryCategory: "Museum",
    borough: "Brooklyn",
    budget: "$$",
    season: "summer",
    daytime: {
      time: "12-4pm",
      venue: "Brooklyn Museum",
      title: "Iris van Herpen: Sculpting the Senses",
      description: "North American debut of the Dutch haute couture designer. Over 140 creations alongside contemporary art, design, and scientific artifacts - a journey from ocean depths to outer space. Designs worn by Beyonce, Bjork, Cate Blanchett, Lady Gaga. Extended through Jan 3, 2027. Also see Unrolling Eternity: The Brooklyn Books of the Dead - a stunning gilded 21-foot papyrus. Walk through the Brooklyn Botanic Garden next door ($18).",
      address: "200 Eastern Parkway, Brooklyn",
      cost: "Suggested $20 general + $5-20 special exhibition surcharge (NYC residents pay-what-you-wish for general)",
      bookingUrl: "https://www.brooklynmuseum.org",
      bookingLabel: "brooklynmuseum.org",
      mapQuery: "Brooklyn+Museum+200+Eastern+Parkway+Brooklyn+NY",
      tip: "Also see Unrolling Eternity: The Brooklyn Books of the Dead - a stunning gilded 21-foot papyrus."
    },
    dinner: {
      time: "6-8pm",
      options: [
        {
          name: "Olmsted",
          cuisine: "American seasonal",
          priceRange: "$$$",
          address: "659 Vanderbilt Ave, Prospect Heights",
          description: "Beautiful garden-to-table restaurant with a backyard garden. Book on Resy well in advance.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Olmsted+659+Vanderbilt+Ave+Prospect+Heights+Brooklyn"
        },
        {
          name: "Maison Yaki",
          cuisine: "Japanese-French",
          priceRange: "$$",
          address: "601 Vanderbilt Ave, Prospect Heights",
          description: "Charming yakitori and small plates. Walk-in or OpenTable.",
          bookingUrl: "https://www.opentable.com",
          bookingPlatform: "Walk-in or OpenTable",
          mapQuery: "Maison+Yaki+601+Vanderbilt+Ave+Prospect+Heights+Brooklyn"
        }
      ]
    },
    evening: {
      time: "9pm",
      venue: "Bar Bayeux",
      title: "Free Live Jazz",
      description: "Free live jazz in a relaxed Brooklyn neighborhood bar. Check for Tomoko Omura (Japanese jazz violinist, DownBeat #1 Rising Star) who performs regularly here.",
      address: "1066 Nostrand Ave, Prospect Lefferts Gardens, Brooklyn",
      cost: "Free (1-drink minimum, tips for musicians)",
      bookingUrl: "https://www.barbayeux.com/jazz",
      bookingLabel: "barbayeux.com",
      mapQuery: "Bar+Bayeux+1066+Nostrand+Ave+Prospect+Lefferts+Gardens+Brooklyn",
      tip: null
    },
    bookingUrgency: "low",
    bookingNote: "No advance museum booking needed. Book Olmsted on Resy well in advance if choosing option A."
  },

  // -------------------------------------------------------
  // #10 - Jul 25
  // -------------------------------------------------------
  {
    id: 10,
    date: "2026-07-25",
    title: "Argosy Books + Death of a Salesman (Nathan Lane)",
    shortTitle: "Argosy + Broadway",
    categories: ["Bookstore", "Theater"],
    primaryCategory: "Bookstore",
    borough: "Manhattan",
    budget: "$$$$",
    season: "summer",
    daytime: {
      time: "12-4pm",
      venue: "Upper East Side Bookstores",
      title: "Upper East Side Bookstore Crawl",
      description: "Start at Argosy Book Store (116 E 59th St) - a six-story treasure of rare books, antique maps, vintage prints, and first editions. Family-run since 1925. Then walk north to the Neue Galerie gift shop/bookstore (1048 5th Ave at 86th - Austrian/German design books) and Albertine (972 5th Ave at 79th - French bookstore inside the French Embassy, stunning architecture). End at the Frick's shop if time allows.",
      address: "116 E 59th St, Manhattan (Argosy start)",
      cost: "Free to browse. Budget for books.",
      bookingUrl: null,
      bookingLabel: null,
      mapQuery: "Argosy+Book+Store+116+E+59th+St+Manhattan+NY",
      tip: "Argosy's print gallery on the upper floor is especially interesting for design/art lovers."
    },
    dinner: {
      time: "5:30-7pm",
      options: [
        {
          name: "Her Name is Han",
          cuisine: "Korean",
          priceRange: "$$",
          address: "17 E 31st St, Koreatown area",
          description: "Modern Korean in a refined setting. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Her+Name+is+Han+17+E+31st+St+New+York"
        },
        {
          name: "Katsu-Hama",
          cuisine: "Japanese tonkatsu",
          priceRange: "$$",
          address: "11 E 47th St, Midtown",
          description: "Outstanding fried pork cutlet. Walk-in.",
          bookingUrl: null,
          bookingPlatform: "Walk-in",
          mapQuery: "Katsu-Hama+11+E+47th+St+Midtown+New+York"
        }
      ]
    },
    evening: {
      time: "8pm",
      venue: "Hudson Theatre (Broadway)",
      title: "Death of a Salesman",
      description: "Nathan Lane stars in this revival with 9 Tony nominations. Closes August 9 - last chance. Arthur Miller's masterpiece about the American dream. Politically resonant, beautifully acted.",
      address: "Hudson Theatre, 141 W 44th St, Manhattan",
      cost: "$80-250",
      bookingUrl: "https://www.telecharge.com",
      bookingLabel: "telecharge.com",
      mapQuery: "Hudson+Theatre+141+W+44th+St+Manhattan+NY",
      tip: "Also check TodayTix app for last-minute discounts. If sold out at face value, check TKTS booth (Times Square) on the day of for discounted tickets."
    },
    bookingUrgency: "high",
    bookingNote: "Closes Aug 9 - best seats going fast. Book now on telecharge.com or TodayTix."
  },

  // -------------------------------------------------------
  // #11 - Aug 1
  // -------------------------------------------------------
  {
    id: 11,
    date: "2026-08-01",
    title: "ICP: YSL and Photography + Metrograph",
    shortTitle: "ICP + Metrograph",
    categories: ["Museum", "Film"],
    primaryCategory: "Museum",
    borough: "Manhattan",
    budget: "$$",
    season: "summer",
    daytime: {
      time: "12-3pm",
      venue: "International Center of Photography",
      title: "Yves Saint Laurent and Photography",
      description: "Over 300 iconic photographs and archival objects exploring the relationship YSL forged between fashion and photography over four decades. Perfect for a design lover. Also see Photobooks USA 2000-25 in the same visit. Walk through the LES galleries after - many along Orchard and Rivington Streets.",
      address: "79 Essex St, Lower East Side",
      cost: "$18/person",
      bookingUrl: "https://www.icp.org/visit",
      bookingLabel: "icp.org/visit",
      mapQuery: "ICP+79+Essex+St+Lower+East+Side+New+York",
      tip: null
    },
    dinner: {
      time: "6-7:30pm",
      options: [
        {
          name: "Fish Cheeks",
          cuisine: "Thai seafood",
          priceRange: "$$$",
          address: "55 Bond St, NoHo",
          description: "Stunning Thai seafood dishes. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Fish+Cheeks+55+Bond+St+NoHo+New+York"
        },
        {
          name: "Sake Bar Decibel",
          cuisine: "Japanese",
          priceRange: "$$",
          address: "240 E 9th St, East Village",
          description: "Underground sake den with great small plates. Walk-in (expect a short wait).",
          bookingUrl: null,
          bookingPlatform: "Walk-in",
          mapQuery: "Sake+Bar+Decibel+240+E+9th+St+East+Village+New+York"
        }
      ]
    },
    evening: {
      time: "8pm",
      venue: "Metrograph",
      title: "Evening Screening",
      description: "Check metrograph.com for the specific Aug 1 program. Metrograph consistently runs exceptional repertory and new independent films. Their 35mm presentations are outstanding.",
      address: "7 Ludlow St, Lower East Side",
      cost: "~$18",
      bookingUrl: "https://metrograph.com",
      bookingLabel: "metrograph.com",
      mapQuery: "Metrograph+7+Ludlow+St+Lower+East+Side+New+York",
      tip: null
    },
    bookingUrgency: "low",
    bookingNote: "Buy Metrograph tickets online by Friday each week."
  },

  // -------------------------------------------------------
  // #12 - Aug 8
  // -------------------------------------------------------
  {
    id: 12,
    date: "2026-08-08",
    title: "Dia:Beacon Day Trip",
    shortTitle: "Dia:Beacon",
    categories: ["Day Trip"],
    primaryCategory: "Day Trip",
    borough: "Hudson Valley",
    budget: "$$",
    season: "summer",
    daytime: {
      time: "10:30am departure (full day)",
      venue: "Dia:Beacon",
      title: "Monumental Contemporary Art in a Former Nabisco Factory",
      description: "A former Nabisco box-printing factory turned into one of the world's great contemporary art museums. Enormous galleries flooded with natural light house monumental works by Richard Serra, Dan Flavin, Donald Judd, Agnes Martin, Andy Warhol, Louise Bourgeois, and more. The scale is staggering - nothing like this in NYC.",
      address: "3 Beekman St, Beacon, NY",
      cost: "$25/person admission",
      bookingUrl: "https://www.diaart.org",
      bookingLabel: "diaart.org",
      mapQuery: "Dia+Beacon+3+Beekman+St+Beacon+NY",
      tip: "Budget 3-4 hours minimum. The Robert Irwin-designed garden outside is meditative and worth lingering in. Beacon's Main Street has cafes and shops for a post-museum stroll. Getting there: Metro-North from Grand Central (Harlem line to Beacon station), 80-90 min, tickets ~$15-24 each way, 8-min walk from station."
    },
    dinner: {
      time: "8-9:30pm",
      options: [
        {
          name: "St. Anselm",
          cuisine: "American grill",
          priceRange: "$$$",
          address: "355 Metropolitan Ave, Williamsburg",
          description: "Outstanding steaks and grilled meats. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "St+Anselm+355+Metropolitan+Ave+Williamsburg+Brooklyn"
        },
        {
          name: "Bonnie's",
          cuisine: "Cantonese-American",
          priceRange: "$$",
          address: "398 Grand St, Williamsburg",
          description: "Creative Cantonese dishes, great cocktails. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Bonnies+398+Grand+St+Williamsburg+Brooklyn"
        }
      ]
    },
    evening: null,
    bookingUrgency: "medium",
    bookingNote: "Buy Metro-North tickets online a few days before. Museum needs no advance booking but check hours (Fri-Mon only)."
  },

  // -------------------------------------------------------
  // #13 - Aug 15
  // -------------------------------------------------------
  {
    id: 13,
    date: "2026-08-15",
    title: "Prospect Park + BRIC: Yola",
    shortTitle: "Prospect Park + BRIC",
    categories: ["Outdoor Concert"],
    primaryCategory: "Outdoor Concert",
    borough: "Brooklyn",
    budget: "$",
    season: "summer",
    daytime: {
      time: "12-4pm",
      venue: "Prospect Park",
      title: "Prospect Park Deep Dive",
      description: "Explore sections you haven't seen: the Ravine (a hidden old-growth forest), the Boathouse (Audubon Center), Lookout Hill (panoramic views), and the Lullwater (serene waterway). Bring a blanket and read in the Long Meadow.",
      address: "Prospect Park, Brooklyn (enter at Grand Army Plaza)",
      cost: "Free",
      bookingUrl: null,
      bookingLabel: null,
      mapQuery: "Grand+Army+Plaza+Prospect+Park+Brooklyn",
      tip: "Enter at Grand Army Plaza for the full experience. The Ravine trail starts near the Nethermead."
    },
    dinner: {
      time: "5:30-7pm",
      options: [
        {
          name: "Al di La",
          cuisine: "Italian",
          priceRange: "$$$",
          address: "248 5th Ave, Park Slope",
          description: "Beloved neighborhood Italian, housemade pasta. Cash only. Walk-in (expect a wait) or try OpenTable.",
          bookingUrl: "https://www.opentable.com",
          bookingPlatform: "Walk-in or OpenTable",
          mapQuery: "Al+di+La+248+5th+Ave+Park+Slope+Brooklyn"
        },
        {
          name: "Miss Ada",
          cuisine: "Mediterranean/Middle Eastern",
          priceRange: "$$$",
          address: "184 DeKalb Ave, Fort Greene",
          description: "Outstanding shakshuka and lamb. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Miss+Ada+184+DeKalb+Ave+Fort+Greene+Brooklyn"
        }
      ]
    },
    evening: {
      time: "7:30pm",
      venue: "BRIC Celebrate Brooklyn!",
      title: "Yola + Dom Flemons + Traveling Wildfires",
      description: "Grammy-nominated Yola (Americana/soul) is exceptional live. Dom Flemons is a founding member of the Carolina Chocolate Drops. Free show in Prospect Park.",
      address: "Lena Horne Bandshell, Prospect Park, Brooklyn",
      cost: "Free",
      bookingUrl: "https://www.bricartsmedia.org/celebrate-brooklyn",
      bookingLabel: "bricartsmedia.org",
      mapQuery: "Lena+Horne+Bandshell+Prospect+Park+Brooklyn",
      tip: "Arrive by 6:30pm for a good spot. Bring a blanket."
    },
    bookingUrgency: "none",
    bookingNote: "Free events. RSVP at bricartsmedia.org (first-come-first-served). Just show up."
  },

  // -------------------------------------------------------
  // #14 - Aug 22
  // -------------------------------------------------------
  {
    id: 14,
    date: "2026-08-22",
    title: "Whitney Biennial (Last Weekend!) + Hiromi at Blue Note",
    shortTitle: "Whitney + Hiromi",
    categories: ["Museum", "Jazz"],
    primaryCategory: "Museum",
    borough: "Manhattan",
    budget: "$$$$",
    season: "summer",
    daytime: {
      time: "12-4pm",
      venue: "Whitney Museum",
      title: "2026 Whitney Biennial (Closes Aug 23!)",
      description: "This is the last Saturday of the Whitney Biennial - the museum's longest-running survey of American art. 56 artists navigating AI, climate grief, and geopolitical power. Also see: Andy Warhol Family Album (through Oct 19) and the rooftop terrace commission by Kelly Akashi (glass-brick sculpture with skyline views).",
      address: "99 Gansevoort St, Meatpacking District",
      cost: "$30 (under 25 free; free Friday nights 5-10pm if you want to preview Friday)",
      bookingUrl: "https://whitney.org/visit",
      bookingLabel: "whitney.org",
      mapQuery: "Whitney+Museum+99+Gansevoort+St+Meatpacking+District+New+York",
      tip: null
    },
    dinner: {
      time: "6-7:30pm",
      options: [
        {
          name: "EN Japanese Brasserie",
          cuisine: "Japanese",
          priceRange: "$$$",
          address: "435 Hudson St, West Village",
          description: "Refined Japanese dining. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "EN+Japanese+Brasserie+435+Hudson+St+West+Village+New+York"
        },
        {
          name: "Cairo",
          cuisine: "Egyptian",
          priceRange: "$$",
          address: "East Village, Manhattan",
          description: "Home-style Egyptian food, generous portions. Walk-in.",
          bookingUrl: null,
          bookingPlatform: "Walk-in",
          mapQuery: "Cairo+Egyptian+Restaurant+East+Village+New+York"
        }
      ]
    },
    evening: {
      time: "8pm",
      venue: "Blue Note",
      title: "Hiromi Uehara - The Piano Quintet feat. PUBLIQuartet",
      description: "THIS IS THE JAPANESE JAZZ EVENT OF THE YEAR. Hiromi is a Japanese piano phenomenon - explosive, virtuosic, genre-defying. She's performing with PUBLIQuartet (string quartet) for a unique classical-jazz fusion. Sets at 8 PM and 10:30 PM. Aug 20-23.",
      address: "Blue Note, 131 W 3rd St, Greenwich Village",
      cost: "~$66+ per person + $20 food/drink minimum",
      bookingUrl: "https://www.ticketweb.com/event/hiromi-the-piano-quintet-feat-blue-note-jazz-club-tickets/14810103",
      bookingLabel: "ticketweb.com",
      mapQuery: "Blue+Note+131+W+3rd+St+Greenwich+Village+New+York",
      tip: "BOOK EARLY. Hiromi sells out. The 8 PM set is the prime slot."
    },
    bookingUrgency: "high",
    bookingNote: "Japanese jazz legend - WILL sell out. Book the moment you decide to go on ticketweb.com."
  },

  // -------------------------------------------------------
  // #15 - Aug 29
  // -------------------------------------------------------
  {
    id: 15,
    date: "2026-08-29",
    title: "Charlie Parker Jazz Festival (Free)",
    shortTitle: "Charlie Parker Fest",
    categories: ["Jazz"],
    primaryCategory: "Jazz",
    borough: "Manhattan (Harlem)",
    budget: "$",
    season: "summer",
    daytime: {
      time: "12-6pm",
      venue: "Marcus Garvey Park",
      title: "Charlie Parker Jazz Festival",
      description: "NYC's premier free jazz event. Three days (Aug 28-30) across Marcus Garvey Park (Harlem) and Tompkins Square Park (East Village). The 2026 lineup features Jazz at Lincoln Center Orchestra, Joshua Redman, Ravi Coltrane, and Kassa Overall. World-class jazz in the neighborhood where bebop was born.",
      address: "Marcus Garvey Park, 18 Mt Morris Park W, Harlem",
      cost: "Free",
      bookingUrl: "https://cityparksfoundation.org/charlieparker",
      bookingLabel: "cityparksfoundation.org",
      mapQuery: "Marcus+Garvey+Park+18+Mt+Morris+Park+W+Harlem+New+York",
      tip: "Bring a blanket, sunscreen, water. Arrive early for a good spot. Food vendors on site."
    },
    dinner: {
      time: "6:30-8pm",
      options: [
        {
          name: "Red Rooster",
          cuisine: "American/soul food",
          priceRange: "$$$",
          address: "310 Lenox Ave, Harlem",
          description: "Marcus Samuelsson's celebrated Harlem restaurant. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Red+Rooster+310+Lenox+Ave+Harlem+New+York"
        },
        {
          name: "Sylvia's",
          cuisine: "Soul food",
          priceRange: "$$",
          address: "328 Malcolm X Blvd, Harlem",
          description: "Legendary Harlem soul food since 1962. Walk-in.",
          bookingUrl: null,
          bookingPlatform: "Walk-in",
          mapQuery: "Sylvias+328+Malcolm+X+Blvd+Harlem+New+York"
        }
      ]
    },
    evening: {
      time: "Evening",
      venue: "Harlem",
      title: "Harlem Stroll",
      description: "Stroll through Harlem. The neighborhood has excellent architecture (brownstones, the Apollo Theater facade). Or head to Tompkins Square Park for more festival if it's a multi-park day.",
      address: "Harlem, Manhattan",
      cost: "Free",
      bookingUrl: null,
      bookingLabel: null,
      mapQuery: "Apollo+Theater+253+W+125th+St+Harlem+New+York",
      tip: null
    },
    bookingUrgency: "none",
    bookingNote: "Free festival - no booking needed. Just show up."
  },

  // -------------------------------------------------------
  // #16 - Sep 5
  // -------------------------------------------------------
  {
    id: 16,
    date: "2026-09-05",
    title: "Guggenheim Pop Art + Film Forum",
    shortTitle: "Guggenheim + Film Forum",
    categories: ["Museum", "Film"],
    primaryCategory: "Museum",
    borough: "Manhattan",
    budget: "$$",
    season: "autumn",
    daytime: {
      time: "12-4pm",
      venue: "Guggenheim",
      title: "Guggenheim Pop",
      description: "The museum's Pop Art collection featuring Lichtenstein, Warhol, Oldenburg, alongside recent acquisitions by Maurizio Cattelan, Lucia Hierro, and Josh Kline. The Guggenheim building itself (Frank Lloyd Wright) is an architectural masterpiece. Walk the spiral ramp. Runs Jun 5, 2026 - Jan 10, 2027. Walk through Central Park after (enter at 86th St, walk south to the Bethesda Fountain and the Lake).",
      address: "1071 5th Ave at 89th St, Manhattan",
      cost: "$30 (pay-what-you-wish Saturdays 5-8pm - but the line is long)",
      bookingUrl: "https://www.guggenheim.org/buy-tickets",
      bookingLabel: "guggenheim.org",
      mapQuery: "Guggenheim+Museum+1071+5th+Ave+Manhattan+NY",
      tip: null
    },
    dinner: {
      time: "6-7:30pm",
      options: [
        {
          name: "Oda House",
          cuisine: "Azerbaijani/Georgian",
          priceRange: "$$",
          address: "76 Ave B, East Village",
          description: "Pomegranate-walnut stews, cheese bread, dumplings. Unique and excellent. Walk-in or OpenTable.",
          bookingUrl: "https://www.opentable.com",
          bookingPlatform: "Walk-in or OpenTable",
          mapQuery: "Oda+House+76+Ave+B+East+Village+New+York"
        },
        {
          name: "Raku",
          cuisine: "Japanese udon",
          priceRange: "$$",
          address: "342 E 6th St, East Village",
          description: "Outstanding handmade udon. Walk-in.",
          bookingUrl: null,
          bookingPlatform: "Walk-in",
          mapQuery: "Raku+342+E+6th+St+East+Village+New+York"
        }
      ]
    },
    evening: {
      time: "8pm",
      venue: "Film Forum",
      title: "Film Forum Screening",
      description: "Check filmforum.org for the Sep 5 program. Film Forum runs a mix of new independent releases and beautifully curated repertory series.",
      address: "209 W Houston St, West Village",
      cost: "~$17",
      bookingUrl: "https://filmforum.org",
      bookingLabel: "filmforum.org",
      mapQuery: "Film+Forum+209+W+Houston+St+West+Village+New+York",
      tip: null
    },
    bookingUrgency: "low",
    bookingNote: "Buy film tickets online by Friday. Museum - no advance booking needed."
  },

  // -------------------------------------------------------
  // #17 - Sep 12
  // -------------------------------------------------------
  {
    id: 17,
    date: "2026-09-12",
    title: "The Cloisters + Fort Tryon Park",
    shortTitle: "The Cloisters",
    categories: ["Day Trip"],
    primaryCategory: "Day Trip",
    borough: "Upper Manhattan/Bronx",
    budget: "$",
    season: "autumn",
    daytime: {
      time: "12-5pm",
      venue: "The Cloisters",
      title: "Medieval Art & Hudson Views",
      description: "The Met's medieval branch, housed in a reconstructed monastery overlooking the Hudson River. Unicorn Tapestries, medieval gardens, Romanesque chapels, Gothic architecture. The building itself is a work of art - incorporating elements from five medieval French cloisters. Fort Tryon Park surrounding it has stunning Hudson views and beautiful gardens.",
      address: "99 Margaret Corbin Dr, Fort Tryon Park, Washington Heights",
      cost: "$30 (or pay-what-you-wish for NY State residents). Included with Met admission if you've been within 3 days.",
      bookingUrl: "https://www.metmuseum.org/visit/plan-your-visit/met-cloisters",
      bookingLabel: "metmuseum.org",
      mapQuery: "The+Cloisters+99+Margaret+Corbin+Dr+Fort+Tryon+Park+New+York",
      tip: "Getting there: A train to 190th St (exit by elevator), 10-min walk through Fort Tryon Park. ~60-75 min from Williamsburg."
    },
    dinner: {
      time: "6:30-8pm",
      options: [
        {
          name: "Mamasushi",
          cuisine: "Dominican-Japanese fusion",
          priceRange: "$$",
          address: "4069 Broadway, Washington Heights",
          description: "Unique Dominican sushi and fusion. Walk-in.",
          bookingUrl: null,
          bookingPlatform: "Walk-in",
          mapQuery: "Mamasushi+4069+Broadway+Washington+Heights+New+York"
        },
        {
          name: "Lilia",
          cuisine: "Italian",
          priceRange: "$$$$",
          address: "567 Union Ave, Williamsburg",
          description: "One of NYC's best restaurants. Book on Resy (book weeks ahead). Head back to Williamsburg for this option.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Lilia+567+Union+Ave+Williamsburg+Brooklyn"
        }
      ]
    },
    evening: {
      time: "Evening",
      venue: "The Four Horsemen",
      title: "Wine Bar Wind-Down",
      description: "Relaxed - you've been walking all day. Local Williamsburg wine bar with natural wines and light food.",
      address: "295 Grand St, Williamsburg, Brooklyn",
      cost: "$$",
      bookingUrl: null,
      bookingLabel: null,
      mapQuery: "The+Four+Horsemen+295+Grand+St+Williamsburg+Brooklyn",
      tip: null
    },
    bookingUrgency: "none",
    bookingNote: "No booking needed for The Cloisters. Pay-what-you-wish for NY State residents."
  },

  // -------------------------------------------------------
  // #18 - Sep 19
  // -------------------------------------------------------
  {
    id: 18,
    date: "2026-09-19",
    title: "Bushwick Open Studios + Elsewhere",
    shortTitle: "Bushwick Studios + Elsewhere",
    categories: ["Art Fair", "Techno"],
    primaryCategory: "Art Fair",
    borough: "Brooklyn",
    budget: "$$",
    season: "autumn",
    daytime: {
      time: "12-5pm",
      venue: "Bushwick Open Studios",
      title: "Hundreds of Open Artist Studios",
      description: "Hundreds of artists open their studios to the public across Bushwick and East Williamsburg. One of NYC's largest open studios events. Walk Troutman Street for the Bushwick Collective street murals. This is a full sensory immersion in Brooklyn's art scene. Sep 18-20, 2026.",
      address: "Various studios across Bushwick (map at artsinbushwick.org)",
      cost: "Free",
      bookingUrl: "https://artsinbushwick.org",
      bookingLabel: "artsinbushwick.org",
      mapQuery: "Bushwick+Open+Studios+Troutman+St+Brooklyn+NY",
      tip: "Download the map from artsinbushwick.org. Focus on the warehouse clusters along Wyckoff, Irving, and Troutman. Easy walk/bike from Williamsburg."
    },
    dinner: {
      time: "6:30-8pm",
      options: [
        {
          name: "Roberta's",
          cuisine: "Italian/pizza",
          priceRange: "$$",
          address: "261 Moore St, Bushwick",
          description: "The original Brooklyn pizza destination. Walk-in (expect a wait) or check Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Walk-in or Resy",
          mapQuery: "Robertas+261+Moore+St+Bushwick+Brooklyn"
        },
        {
          name: "Momo Sushi Shack",
          cuisine: "Japanese",
          priceRange: "$$",
          address: "Bushwick, Brooklyn",
          description: "Casual, fun sushi in a converted warehouse. Walk-in.",
          bookingUrl: null,
          bookingPlatform: "Walk-in",
          mapQuery: "Momo+Sushi+Shack+Bushwick+Brooklyn"
        }
      ]
    },
    evening: {
      time: "10pm+",
      venue: "Elsewhere",
      title: "Techno Q4 Night",
      description: "Second quarterly electronic/techno night. Elsewhere has three spaces (Hall, Zone One, rooftop) programming indie, electronic, and DJ events. The rooftop is open through September. A natural extension of the Bushwick Open Studios day - you're already in the neighborhood.",
      address: "599 Johnson Ave, Bushwick, Brooklyn",
      cost: "~$15-30 depending on event",
      bookingUrl: "https://www.elsewhere.club/events",
      bookingLabel: "elsewhere.club",
      mapQuery: "Elsewhere+599+Johnson+Ave+Bushwick+Brooklyn",
      tip: "Also available on the DICE app."
    },
    bookingUrgency: "low",
    bookingNote: "Free open studios - just show up. Elsewhere tickets on elsewhere.club or DICE app."
  },

  // -------------------------------------------------------
  // #19 - Sep 26
  // -------------------------------------------------------
  {
    id: 19,
    date: "2026-09-26",
    title: "NY Art Book Fair + NYFF Opening Weekend",
    shortTitle: "Art Book Fair + NYFF",
    categories: ["Art Fair", "Film"],
    primaryCategory: "Art Fair",
    borough: "Queens/Manhattan",
    budget: "$$$",
    season: "autumn",
    daytime: {
      time: "12-4pm",
      venue: "MoMA PS1",
      title: "NY Art Book Fair",
      description: "250+ exhibitors from around the world - publishers, artists, zinesters. This year marks the 50th anniversary of both Printed Matter and MoMA PS1. Browse art books, limited edition prints, zines, and publications you won't find anywhere else. Free. Sep 24-27, 2026. Also happening this weekend: The Armory Show at Javits Center ($57, thearmoryshow.com).",
      address: "MoMA PS1, 22-25 Jackson Ave, Long Island City, Queens",
      cost: "Free admission (PS1 is always free since Jan 2026)",
      bookingUrl: "https://printedmatterartbookfairs.org",
      bookingLabel: "printedmatterartbookfairs.org",
      mapQuery: "MoMA+PS1+22-25+Jackson+Ave+Long+Island+City+Queens",
      tip: "Budget for purchases. Bring a tote bag. Go early - it gets crowded by afternoon."
    },
    dinner: {
      time: "6-7:30pm",
      options: [
        {
          name: "Adda",
          cuisine: "Indian",
          priceRange: "$$$",
          address: "31-31 Thomson Ave, Long Island City",
          description: "Excellent Indian cuisine near PS1. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Adda+31-31+Thomson+Ave+Long+Island+City+Queens"
        },
        {
          name: "Ippudo",
          cuisine: "Japanese ramen",
          priceRange: "$$",
          address: "65 4th Ave, East Village",
          description: "Perfect quick ramen before a movie. Walk-in (short wait). Head to Manhattan for this option.",
          bookingUrl: null,
          bookingPlatform: "Walk-in",
          mapQuery: "Ippudo+65+4th+Ave+East+Village+New+York"
        }
      ]
    },
    evening: {
      time: "8pm",
      venue: "Film at Lincoln Center",
      title: "New York Film Festival (NYFF) - Opening Weekend",
      description: "The 64th NYFF runs Sep 25 - Oct 12 at Lincoln Center. Opening weekend screenings are the hottest tickets of the festival. Check filmlinc.org for the 2026 lineup announcement (typically in August).",
      address: "Film at Lincoln Center, various halls",
      cost: "$25-40 per screening",
      bookingUrl: "https://www.filmlinc.org",
      bookingLabel: "filmlinc.org",
      mapQuery: "Film+at+Lincoln+Center+New+York",
      tip: "Tickets go on sale ~2-3 weeks before festival. If opening night is sold out, try the second or third day screenings - same films, less frenzy."
    },
    bookingUrgency: "medium",
    bookingNote: "NYFF tickets drop ~2-3 weeks before festival opens Sep 25. Book as soon as available."
  },

  // -------------------------------------------------------
  // #20 - Oct 3
  // -------------------------------------------------------
  {
    id: 20,
    date: "2026-10-03",
    title: "Guggenheim (Taryn Simon) + NYFF",
    shortTitle: "Guggenheim + NYFF",
    categories: ["Museum", "Film"],
    primaryCategory: "Museum",
    borough: "Manhattan",
    budget: "$$",
    season: "autumn",
    daytime: {
      time: "12-4pm",
      venue: "Guggenheim",
      title: "Taryn Simon Rotunda Installation",
      description: "Major new installation bringing together never-before-seen photographs, text, videos, and sculptures. Visitors choose their own pathways through a massive constellation of images spiraling through the Rotunda. Interactive and immersive. Opened Sep 18 - runs through Mar 14, 2027.",
      address: "1071 5th Ave at 89th St, Manhattan",
      cost: "$30",
      bookingUrl: "https://www.guggenheim.org",
      bookingLabel: "guggenheim.org",
      mapQuery: "Guggenheim+Museum+1071+5th+Ave+Manhattan+NY",
      tip: null
    },
    dinner: {
      time: "6-7:30pm",
      options: [
        {
          name: "Sofreh",
          cuisine: "Persian",
          priceRange: "$$$",
          address: "75 St Marks Ave, Prospect Heights",
          description: "If you loved it in June, go back. Or try it for the first time if you chose Option B in June. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Sofreh+75+St+Marks+Ave+Prospect+Heights+Brooklyn"
        },
        {
          name: "Xi'an Famous Foods",
          cuisine: "Chinese",
          priceRange: "$",
          address: "Multiple locations, Manhattan",
          description: "Hand-pulled noodles, cumin lamb. Quick, affordable, incredible. Walk-in.",
          bookingUrl: null,
          bookingPlatform: "Walk-in",
          mapQuery: "Xian+Famous+Foods+Manhattan+NY"
        }
      ]
    },
    evening: {
      time: "8pm",
      venue: "Film at Lincoln Center",
      title: "NYFF Screening",
      description: "Now in its second weekend, NYFF will have the main slate running. Check filmlinc.org for specific Oct 3 screenings.",
      address: "Film at Lincoln Center",
      cost: "$25-40",
      bookingUrl: "https://www.filmlinc.org",
      bookingLabel: "filmlinc.org",
      mapQuery: "Film+at+Lincoln+Center+New+York",
      tip: null
    },
    bookingUrgency: "medium",
    bookingNote: "NYFF tickets go on sale ~2-3 weeks before festival opens Sep 25."
  },

  // -------------------------------------------------------
  // #21 - Oct 10
  // -------------------------------------------------------
  {
    id: 21,
    date: "2026-10-10",
    title: "Berliner Philharmoniker at Carnegie Hall",
    shortTitle: "Berlin Phil at Carnegie",
    categories: ["Classical"],
    primaryCategory: "Classical",
    borough: "Manhattan",
    budget: "$$$$",
    season: "autumn",
    daytime: {
      time: "12-3pm",
      venue: "Museum of the City of New York",
      title: "The Occupied City + Joe Macken's Model",
      description: "Two compelling exhibitions: The Occupied City: New York and the American Revolution (7,000 sq ft, interactive) and He Built This City: Joe Macken's Model (handcrafted 50x30ft architectural model of NYC, 21 years in the making). Architecture and NYC history lovers' paradise.",
      address: "1220 5th Ave at 103rd St, Manhattan",
      cost: "$23",
      bookingUrl: "https://www.mcny.org",
      bookingLabel: "mcny.org",
      mapQuery: "Museum+of+the+City+of+New+York+1220+5th+Ave+Manhattan",
      tip: null
    },
    dinner: {
      time: "5:30-7pm",
      options: [
        {
          name: "Yakitori Totto",
          cuisine: "Japanese yakitori",
          priceRange: "$$",
          address: "251 W 55th St, Midtown",
          description: "Quick, excellent yakitori before Carnegie. No reservations - arrive by 5:30.",
          bookingUrl: null,
          bookingPlatform: "Walk-in",
          mapQuery: "Yakitori+Totto+251+W+55th+St+New+York"
        },
        {
          name: "Gazala's",
          cuisine: "Druze/Middle Eastern",
          priceRange: "$$",
          address: "709 9th Ave, Hell's Kitchen",
          description: "Generous plates, fast service. Walk-in.",
          bookingUrl: null,
          bookingPlatform: "Walk-in",
          mapQuery: "Gazalas+709+9th+Ave+Hells+Kitchen+New+York"
        }
      ]
    },
    evening: {
      time: "8pm",
      venue: "Carnegie Hall",
      title: "Berliner Philharmoniker - Elgar & Tchaikovsky",
      description: "Elgar Enigma Variations + Tchaikovsky Symphony No. 4. Kirill Petrenko conducting. The Berlin Philharmonic is arguably the world's greatest orchestra. This is a once-in-years opportunity. Part of Carnegie Hall Oct 8-11 residency.",
      address: "Carnegie Hall, 881 7th Ave, Manhattan",
      cost: "$80-300+",
      bookingUrl: "https://www.carnegiehall.org",
      bookingLabel: "carnegiehall.org",
      mapQuery: "Carnegie+Hall+881+7th+Ave+Manhattan+NY",
      tip: "If under 40, check 'Notables' program for $20 tickets. Student Insider tickets $10. Both limited and go fast. BOOK EARLY - Berlin Phil sells out fast."
    },
    bookingUrgency: "high",
    bookingNote: "Book as soon as Carnegie Hall 2026-27 single tickets go on sale. Berlin Phil sells out fast."
  },

  // -------------------------------------------------------
  // #22 - Oct 17
  // -------------------------------------------------------
  {
    id: 22,
    date: "2026-10-17",
    title: "Open House New York (OHNY)",
    shortTitle: "Open House NY",
    categories: ["Architecture"],
    primaryCategory: "Architecture",
    borough: "Various",
    budget: "$",
    season: "autumn",
    daytime: {
      time: "11am-5pm",
      venue: "Various OHNY Sites",
      title: "Open House New York Architecture Festival",
      description: "NYC's annual architecture festival opens hundreds of buildings, infrastructure sites, and spaces normally closed to the public. Past editions have included: Federal Reserve Bank vault, Con Edison steam plants, water treatment facilities, private residences by famous architects, fire stations, and transit infrastructure. Oct 16-19, 2026.",
      address: "Sites across all five boroughs",
      cost: "Free (some sites require advance RSVP - spots fill fast)",
      bookingUrl: "https://ohny.org",
      bookingLabel: "ohny.org",
      mapQuery: "Open+House+New+York",
      tip: "Plan your route the night before. Popular sites fill instantly. Mix a 'big ticket' site with neighborhood walks. Registration opens ~2 weeks before - set a reminder."
    },
    dinner: {
      time: "6:30-8pm",
      options: [
        {
          name: "Tanoreen",
          cuisine: "Palestinian",
          priceRange: "$$",
          address: "7523 3rd Ave, Bay Ridge, Brooklyn",
          description: "Widely considered the best Palestinian restaurant in NYC. Chef Rawia Bishara's lamb is transcendent. Worth a special trip. Book on OpenTable.",
          bookingUrl: "https://www.opentable.com",
          bookingPlatform: "OpenTable",
          mapQuery: "Tanoreen+7523+3rd+Ave+Bay+Ridge+Brooklyn"
        },
        {
          name: "The Four Horsemen",
          cuisine: "Wine bar + food",
          priceRange: "$$$",
          address: "295 Grand St, Williamsburg",
          description: "Natural wines, simple excellent food. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "The+Four+Horsemen+295+Grand+St+Williamsburg+Brooklyn"
        }
      ]
    },
    evening: null,
    bookingUrgency: "high",
    bookingNote: "OHNY registration opens ~Oct 2. Popular sites fill within MINUTES. Set an alarm for when registration opens."
  },

  // -------------------------------------------------------
  // #23 - Oct 24
  // -------------------------------------------------------
  {
    id: 23,
    date: "2026-10-24",
    title: "Whitney (Lichtenstein) + JLCO with Marsalis",
    shortTitle: "Whitney + Marsalis",
    categories: ["Museum", "Jazz"],
    primaryCategory: "Museum",
    borough: "Manhattan",
    budget: "$$$",
    season: "autumn",
    daytime: {
      time: "12-4pm",
      venue: "Whitney Museum",
      title: "Roy Lichtenstein Retrospective",
      description: "Major retrospective of the Pop Art pioneer, spanning his full career. One of the most influential figures in postwar American art. This is the first major Lichtenstein exhibition in years. Opens Oct 14, 2026 (runs through April 2027).",
      address: "99 Gansevoort St, Meatpacking District",
      cost: "$30",
      bookingUrl: "https://whitney.org",
      bookingLabel: "whitney.org",
      mapQuery: "Whitney+Museum+99+Gansevoort+St+Meatpacking+District+New+York",
      tip: "Combine with a walk through the Meatpacking District and a stroll on the southern end of the High Line."
    },
    dinner: {
      time: "5:30-7pm",
      options: [
        {
          name: "Kubeh",
          cuisine: "Kurdish/Iraqi",
          priceRange: "$$",
          address: "464 6th Ave, West Village",
          description: "Outstanding dumplings and mezze. Walk-in.",
          bookingUrl: null,
          bookingPlatform: "Walk-in",
          mapQuery: "Kubeh+464+6th+Ave+West+Village+New+York"
        },
        {
          name: "Tsukimi",
          cuisine: "Japanese",
          priceRange: "$$$",
          address: "East Village, Manhattan",
          description: "Refined Japanese cuisine. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Tsukimi+Japanese+East+Village+New+York"
        }
      ]
    },
    evening: {
      time: "7:30pm",
      venue: "Rose Theater, Jazz at Lincoln Center",
      title: "JLCO with Wynton Marsalis - \"From Cuba to the Crescent City\"",
      description: "This is Marsalis' final season as Artistic Director after 30+ years. 'From Cuba to the Crescent City' traces jazz's Afro-Cuban-New Orleans roots.",
      address: "Rose Theater, Jazz at Lincoln Center, 10 Columbus Circle, 5th Floor",
      cost: "$30-150",
      bookingUrl: "https://jazz.org/concerts-events",
      bookingLabel: "jazz.org",
      mapQuery: "Rose+Theater+Jazz+at+Lincoln+Center+10+Columbus+Circle+New+York",
      tip: null
    },
    bookingUrgency: "medium",
    bookingNote: "Book JLCO 2-4 weeks ahead. Marsalis farewell season - expect high demand."
  },

  // -------------------------------------------------------
  // #24 - Oct 31
  // -------------------------------------------------------
  {
    id: 24,
    date: "2026-10-31",
    title: "The Frick (Siena Bronzes) + Village Halloween Parade",
    shortTitle: "The Frick + Halloween",
    categories: ["Museum", "Halloween"],
    primaryCategory: "Museum",
    borough: "Manhattan",
    budget: "$$",
    season: "autumn",
    daytime: {
      time: "12-4pm",
      venue: "The Frick Collection",
      title: "Siena: The Art of Bronze, 1450-1500",
      description: "First exhibition focusing on Siena as a center of bronze sculpture during the Italian Renaissance. Nearly 40 works by Donatello, Vecchietta, Francesco di Giorgio Martini - most never exhibited outside Tuscany. The Frick's intimate mansion setting makes viewing Renaissance art feel personal. Opens Oct 15, 2026.",
      address: "1 East 70th St, Manhattan",
      cost: "$30 (pay-what-you-wish Wednesdays 1:30-5:30pm if you want a free preview)",
      bookingUrl: "https://www.frick.org/tickets",
      bookingLabel: "frick.org",
      mapQuery: "The+Frick+Collection+1+East+70th+St+Manhattan+NY",
      tip: null
    },
    dinner: {
      time: "5:30-6:30pm",
      options: [
        {
          name: "Ippudo",
          cuisine: "Japanese ramen",
          priceRange: "$$",
          address: "65 4th Ave, East Village",
          description: "Quick, hot ramen before a cold Halloween night. Walk-in (expect a wait).",
          bookingUrl: null,
          bookingPlatform: "Walk-in",
          mapQuery: "Ippudo+65+4th+Ave+East+Village+New+York"
        },
        {
          name: "Mamoun's",
          cuisine: "Middle Eastern/falafel",
          priceRange: "$",
          address: "119 MacDougal St, West Village",
          description: "NYC institution since 1971. Quick, cheap, excellent falafel. Walk-in.",
          bookingUrl: null,
          bookingPlatform: "Walk-in",
          mapQuery: "Mamouns+119+MacDougal+St+West+Village+New+York"
        }
      ]
    },
    evening: {
      time: "7pm",
      venue: "6th Avenue",
      title: "Village Halloween Parade",
      description: "NYC's iconic Halloween parade. Thousands of costumed participants march up 6th Avenue from Spring St to 16th St. Watching is free - just find a spot along 6th Ave. It's creative, weird, political, and quintessentially New York.",
      address: "6th Avenue, from Spring St to 16th St, Manhattan",
      cost: "Free to watch",
      bookingUrl: null,
      bookingLabel: null,
      mapQuery: "Village+Halloween+Parade+6th+Ave+New+York",
      tip: "Arrive by 6:30pm to get a viewing spot. The West Village side streets fill up. Costumes not required to watch but encouraged. It's festive, not scary."
    },
    bookingUrgency: "none",
    bookingNote: "No advance booking needed for museum or parade."
  },

  // -------------------------------------------------------
  // #25 - Nov 7
  // -------------------------------------------------------
  {
    id: 25,
    date: "2026-11-07",
    title: "MoMA PS1 (Hard Art) + JLCO Marsalis' Swinging Cities",
    shortTitle: "PS1 + Marsalis",
    categories: ["Museum", "Jazz"],
    primaryCategory: "Museum",
    borough: "Queens/Manhattan",
    budget: "$$$",
    season: "autumn",
    daytime: {
      time: "12-4pm",
      venue: "MoMA PS1",
      title: "Hard Art",
      description: "Major exhibition examining the legacy of abstract painting by Black artists in the US from 1969 to today. Over 40 artists including Frank Bowling, Mark Bradford, Ed Clark, Jennie C. Jones, Aria Dean, and Torkwase Dyson. Just opened November 5.",
      address: "22-25 Jackson Ave, Long Island City, Queens",
      cost: "Free (PS1 eliminated admission in 2026)",
      bookingUrl: "https://www.momaps1.org",
      bookingLabel: "momaps1.org",
      mapQuery: "MoMA+PS1+22-25+Jackson+Ave+Long+Island+City+Queens",
      tip: "Also see the James Turrell Meeting permanent installation (skyspace room). Time it for late afternoon light."
    },
    dinner: {
      time: "6-7pm",
      options: [
        {
          name: "Adda",
          cuisine: "Indian",
          priceRange: "$$$",
          address: "31-31 Thomson Ave, Long Island City",
          description: "Excellent, close to PS1. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Adda+31-31+Thomson+Ave+Long+Island+City+Queens"
        },
        {
          name: "Gazala's",
          cuisine: "Middle Eastern/Druze",
          priceRange: "$$",
          address: "709 9th Ave, Hell's Kitchen",
          description: "Quick and satisfying before Lincoln Center. Head to Manhattan for this option.",
          bookingUrl: null,
          bookingPlatform: "Walk-in",
          mapQuery: "Gazalas+709+9th+Ave+Hells+Kitchen+New+York"
        }
      ]
    },
    evening: {
      time: "7:30pm",
      venue: "Rose Theater, Jazz at Lincoln Center",
      title: "JLCO with Wynton Marsalis - \"Marsalis' Swinging Cities\"",
      description: "Continuing Marsalis' farewell season. The JLCO is one of the greatest jazz orchestras in the world. Nov 6-7 performances.",
      address: "Rose Theater, Jazz at Lincoln Center, 10 Columbus Circle, 5th Floor",
      cost: "$30-150",
      bookingUrl: "https://jazz.org",
      bookingLabel: "jazz.org",
      mapQuery: "Rose+Theater+Jazz+at+Lincoln+Center+10+Columbus+Circle+New+York",
      tip: null
    },
    bookingUrgency: "medium",
    bookingNote: "Book JLCO 2-4 weeks ahead. Marsalis farewell season - expect high demand."
  },

  // -------------------------------------------------------
  // #26 - Nov 14
  // -------------------------------------------------------
  {
    id: 26,
    date: "2026-11-14",
    title: "MCNY Gingerbread + Yo-Yo Ma at Carnegie Hall",
    shortTitle: "MCNY + Yo-Yo Ma",
    categories: ["Museum", "Classical"],
    primaryCategory: "Museum",
    borough: "Manhattan",
    budget: "$$$$",
    season: "autumn",
    daytime: {
      time: "12-3pm",
      venue: "Museum of the City of New York",
      title: "Gingerbread NYC: The Great Borough Bake-Off",
      description: "Beloved annual tradition. Gingerbread structures crafted by bakers and designers from all five boroughs. Fun, whimsical, and beautifully detailed. Also see The Occupied City if you missed it in October. Opens Nov 6, 2026. Walk through the Conservatory Garden in Central Park (105th St entrance) - stunning in late autumn.",
      address: "1220 5th Ave at 103rd St, Manhattan",
      cost: "$23",
      bookingUrl: "https://www.mcny.org",
      bookingLabel: "mcny.org",
      mapQuery: "Museum+of+the+City+of+New+York+1220+5th+Ave+Manhattan",
      tip: null
    },
    dinner: {
      time: "5:30-7pm",
      options: [
        {
          name: "Her Name is Han",
          cuisine: "Korean",
          priceRange: "$$",
          address: "17 E 31st St, Manhattan",
          description: "Warm, refined Korean. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Her+Name+is+Han+17+E+31st+St+New+York"
        },
        {
          name: "Oda House",
          cuisine: "Azerbaijani/Georgian",
          priceRange: "$$",
          address: "76 Ave B, East Village",
          description: "Hearty, perfect for a cold November evening. Walk-in or OpenTable.",
          bookingUrl: "https://www.opentable.com",
          bookingPlatform: "Walk-in or OpenTable",
          mapQuery: "Oda+House+76+Ave+B+East+Village+New+York"
        }
      ]
    },
    evening: {
      time: "8pm",
      venue: "Carnegie Hall",
      title: "Silkroad Ensemble with Yo-Yo Ma + Rhiannon Giddens",
      description: "Cross-cultural brilliance: Yo-Yo Ma (cello) and Rhiannon Giddens (banjo, vocals, MacArthur Fellow) with the Silkroad Ensemble. A conversation between musical traditions from around the world.",
      address: "Carnegie Hall, 881 7th Ave, Manhattan",
      cost: "$50-200+",
      bookingUrl: "https://www.carnegiehall.org",
      bookingLabel: "carnegiehall.org",
      mapQuery: "Carnegie+Hall+881+7th+Ave+Manhattan+NY",
      tip: null
    },
    bookingUrgency: "high",
    bookingNote: "Book as soon as Carnegie Hall 2026-27 single tickets go on sale. Two legends in one night."
  },

  // -------------------------------------------------------
  // #27 - Nov 21
  // -------------------------------------------------------
  {
    id: 27,
    date: "2026-11-21",
    title: "MCNY After Dark + Metrograph",
    shortTitle: "MCNY + Metrograph",
    categories: ["Museum", "Film"],
    primaryCategory: "Museum",
    borough: "Manhattan",
    budget: "$$",
    season: "autumn",
    daytime: {
      time: "12-3pm",
      venue: "Museum of the City of New York",
      title: "New York Now: After Dark",
      description: "Triennial of contemporary photography focusing on NYC after sunset. Just opened November 20. A perfect exhibition for photographers and anyone who loves the city's nocturnal energy. Also visit El Museo del Barrio next door (pay-what-you-can, 1230 5th Ave).",
      address: "1220 5th Ave at 103rd St, Manhattan",
      cost: "$23",
      bookingUrl: "https://www.mcny.org",
      bookingLabel: "mcny.org",
      mapQuery: "Museum+of+the+City+of+New+York+1220+5th+Ave+Manhattan",
      tip: "Combine with a walk through East Harlem (El Barrio)."
    },
    dinner: {
      time: "6-7:30pm",
      options: [
        {
          name: "Dhamaka",
          cuisine: "Indian",
          priceRange: "$$$",
          address: "Essex Market, 119 Delancey St",
          description: "If you haven't been yet or want to return. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Dhamaka+Essex+Market+119+Delancey+St+New+York"
        },
        {
          name: "Dar Yemma",
          cuisine: "Moroccan",
          priceRange: "$$",
          address: "116 Ave C, East Village",
          description: "Warm tagines for a November night. Walk-in or call.",
          bookingUrl: null,
          bookingPlatform: "Walk-in or call",
          mapQuery: "Dar+Yemma+116+Ave+C+East+Village+New+York"
        }
      ]
    },
    evening: {
      time: "8pm",
      venue: "Metrograph",
      title: "Evening Screening",
      description: "Check metrograph.com for the Nov 21 program. Late fall is typically excellent programming season.",
      address: "7 Ludlow St, Lower East Side",
      cost: "~$18",
      bookingUrl: "https://metrograph.com",
      bookingLabel: "metrograph.com",
      mapQuery: "Metrograph+7+Ludlow+St+Lower+East+Side+New+York",
      tip: null
    },
    bookingUrgency: "low",
    bookingNote: "Buy Metrograph tickets online by Friday each week."
  },

  // -------------------------------------------------------
  // #28 - Nov 28
  // -------------------------------------------------------
  {
    id: 28,
    date: "2026-11-28",
    title: "Strand + Holiday Markets (Thanksgiving Weekend)",
    shortTitle: "Strand + Holiday Markets",
    categories: ["Bookstore", "Holiday"],
    primaryCategory: "Bookstore",
    borough: "Manhattan",
    budget: "$$",
    season: "autumn",
    daytime: {
      time: "12-4pm",
      venue: "Strand Bookstore + Union Square Holiday Market",
      title: "Strand + Union Square Holiday Market",
      description: "Start at The Strand (828 Broadway at 12th St) - '18 miles of books.' Their rare book room on the upper floor has first editions and signed copies. Then walk to the Union Square Holiday Market (opens ~mid-November) - hundreds of vendors selling handmade gifts, crafts, food, and hot drinks. Continue to Rizzoli Bookstore (1133 Broadway at 26th St) - the most beautiful bookstore in NYC with architecture, art, and design books in a stunning space.",
      address: "828 Broadway at 12th St, Manhattan (Strand)",
      cost: "Free to browse (budget for books and gifts)",
      bookingUrl: null,
      bookingLabel: null,
      mapQuery: "Strand+Bookstore+828+Broadway+New+York",
      tip: "The Strand's outdoor $1-$3 book carts are legendary for finding gems."
    },
    dinner: {
      time: "5:30-7pm",
      options: [
        {
          name: "Kubeh",
          cuisine: "Kurdish/Iraqi",
          priceRange: "$$",
          address: "464 6th Ave, West Village",
          description: "Warm and comforting for a cold evening. Walk-in.",
          bookingUrl: null,
          bookingPlatform: "Walk-in",
          mapQuery: "Kubeh+464+6th+Ave+West+Village+New+York"
        },
        {
          name: "Katsu-Hama",
          cuisine: "Japanese tonkatsu",
          priceRange: "$$",
          address: "11 E 47th St, Midtown",
          description: "Crispy, warming comfort food. Walk-in.",
          bookingUrl: null,
          bookingPlatform: "Walk-in",
          mapQuery: "Katsu-Hama+11+E+47th+St+Midtown+New+York"
        }
      ]
    },
    evening: {
      time: "7-9pm",
      venue: "Bryant Park Winter Village",
      title: "Bryant Park Holiday Market & Ice Skating",
      description: "Walk through the holiday market, see the tree, watch ice skaters (or skate - $15 admission with your own skates, $33 with rental). The Chrysler Building glows behind it. Open late October through early March.",
      address: "Bryant Park, 42nd St between 5th and 6th Ave, Manhattan",
      cost: "Free to walk; skating extra",
      bookingUrl: null,
      bookingLabel: null,
      mapQuery: "Bryant+Park+Winter+Village+42nd+St+New+York",
      tip: null
    },
    bookingUrgency: "none",
    bookingNote: "No booking needed. All walk-in and free to browse."
  },

  // -------------------------------------------------------
  // #29 - Dec 5
  // -------------------------------------------------------
  {
    id: 29,
    date: "2026-12-05",
    title: "MoMA (Na Mira) + Nowadays Winter Party",
    shortTitle: "MoMA + Nowadays",
    categories: ["Museum", "Techno"],
    primaryCategory: "Museum",
    borough: "Manhattan/Queens",
    budget: "$$$",
    season: "winter",
    daytime: {
      time: "12-4pm",
      venue: "MoMA",
      title: "Na Mira: NO SMOKING + Permanent Collection",
      description: "New exhibition that opened November 14 in the Kravis Studio. Your second MoMA visit since May - the museum rotates heavily, and the Duchamp, Jafa, and Frida shows have all closed. Explore the permanent collection galleries you missed in May (Monet's Water Lilies, Picasso, Rothko rooms).",
      address: "11 West 53rd St, Manhattan",
      cost: "$28 online",
      bookingUrl: "https://www.moma.org",
      bookingLabel: "moma.org",
      mapQuery: "MoMA+11+West+53rd+St+Manhattan+NY",
      tip: null
    },
    dinner: {
      time: "6-8pm",
      options: [
        {
          name: "EN Japanese Brasserie",
          cuisine: "Japanese",
          priceRange: "$$$",
          address: "435 Hudson St, West Village",
          description: "Warm sake and refined Japanese on a cold night. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "EN+Japanese+Brasserie+435+Hudson+St+West+Village+New+York"
        },
        {
          name: "Gazala's",
          cuisine: "Middle Eastern/Druze",
          priceRange: "$$",
          address: "709 9th Ave, Hell's Kitchen",
          description: "Quick and satisfying. Walk-in.",
          bookingUrl: null,
          bookingPlatform: "Walk-in",
          mapQuery: "Gazalas+709+9th+Ave+Hells+Kitchen+New+York"
        }
      ]
    },
    evening: {
      time: "10pm+",
      venue: "Nowadays",
      title: "Winter Party (Techno Q1-2027)",
      description: "Third quarterly electronic/techno night. December events at Nowadays are indoor with special programming - check for their holiday or end-of-year lineups.",
      address: "56-06 Cooper Ave, Ridgewood, Queens",
      cost: "~$25-35",
      bookingUrl: "https://nowadays.nyc",
      bookingLabel: "nowadays.nyc",
      mapQuery: "Nowadays+56-06+Cooper+Ave+Ridgewood+Queens+NY",
      tip: "Uber back to Williamsburg ~$20-25."
    },
    bookingUrgency: "low",
    bookingNote: "RSVP/tickets on nowadays.nyc closer to date."
  },

  // -------------------------------------------------------
  // #30 - Dec 12
  // -------------------------------------------------------
  {
    id: 30,
    date: "2026-12-12",
    title: "Holiday Walk + Daniil Trifonov at Carnegie Hall",
    shortTitle: "Holiday Walk + Trifonov",
    categories: ["Holiday", "Classical"],
    primaryCategory: "Holiday",
    borough: "Manhattan",
    budget: "$$$$",
    season: "winter",
    daytime: {
      time: "12-4pm",
      venue: "5th Avenue & Midtown",
      title: "Holiday Manhattan",
      description: "5th Avenue holiday windows: Saks, Bergdorf Goodman, Tiffany's. Walk through Rockefeller Center to see the tree (go during the day to avoid the worst evening crowds). Stop at the New York Public Library main branch (42nd St) - the Beaux-Arts building is magnificent and the reading rooms are open. Browse the library gift shop (excellent design books and NYC-themed gifts).",
      address: "5th Avenue, Midtown Manhattan",
      cost: "Free",
      bookingUrl: null,
      bookingLabel: null,
      mapQuery: "Rockefeller+Center+Christmas+Tree+New+York",
      tip: null
    },
    dinner: {
      time: "5:30-7pm",
      options: [
        {
          name: "Yakitori Totto",
          cuisine: "Japanese yakitori",
          priceRange: "$$",
          address: "251 W 55th St, Midtown",
          description: "Quick pre-concert yakitori. No reservations - arrive early.",
          bookingUrl: null,
          bookingPlatform: "Walk-in",
          mapQuery: "Yakitori+Totto+251+W+55th+St+New+York"
        },
        {
          name: "Her Name is Han",
          cuisine: "Korean",
          priceRange: "$$",
          address: "17 E 31st St, Manhattan",
          description: "Warm Korean dishes. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Her+Name+is+Han+17+E+31st+St+New+York"
        }
      ]
    },
    evening: {
      time: "8pm",
      venue: "Carnegie Hall",
      title: "Daniil Trifonov + New York String Orchestra",
      description: "Trifonov is one of the greatest pianists alive - technically staggering and deeply musical. His annual Carnegie Hall December appearance is a tradition. With the New York String Orchestra conducted by Michael Stern. Dec 12, 8 PM - this falls on a Saturday!",
      address: "Carnegie Hall, 881 7th Ave, Manhattan",
      cost: "$50-200+",
      bookingUrl: "https://www.carnegiehall.org",
      bookingLabel: "carnegiehall.org",
      mapQuery: "Carnegie+Hall+881+7th+Ave+Manhattan+NY",
      tip: null
    },
    bookingUrgency: "high",
    bookingNote: "Book as soon as Carnegie Hall 2026-27 single tickets go on sale. Falls on a Saturday - rare and perfect."
  },

  // -------------------------------------------------------
  // #31 - Dec 19
  // -------------------------------------------------------
  {
    id: 31,
    date: "2026-12-19",
    title: "Holiday Markets + Film",
    shortTitle: "Holiday Markets + Film",
    categories: ["Holiday", "Film"],
    primaryCategory: "Holiday",
    borough: "Manhattan",
    budget: "$$",
    season: "winter",
    daytime: {
      time: "12-4pm",
      venue: "Bryant Park + Columbus Circle + Grand Central",
      title: "Holiday Market Crawl",
      description: "Start at Bryant Park Winter Village (42nd St) - the biggest and best. Shops, mulled wine, food stalls. Walk to Columbus Circle Holiday Market (59th St) - smaller, more curated. Optional: Grand Central Terminal holiday fair (inside the terminal - unique setting).",
      address: "Bryant Park, 42nd St between 5th and 6th Ave, Manhattan",
      cost: "Free to browse. Budget for gifts and food.",
      bookingUrl: null,
      bookingLabel: null,
      mapQuery: "Bryant+Park+Winter+Village+42nd+St+New+York",
      tip: null
    },
    dinner: {
      time: "6-7:30pm",
      options: [
        {
          name: "Sofreh",
          cuisine: "Persian",
          priceRange: "$$$",
          address: "75 St Marks Ave, Prospect Heights",
          description: "If heading back to Brooklyn. Warm, comforting Persian. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Sofreh+75+St+Marks+Ave+Prospect+Heights+Brooklyn"
        },
        {
          name: "Fish Cheeks",
          cuisine: "Thai seafood",
          priceRange: "$$$",
          address: "55 Bond St, NoHo",
          description: "Warm spicy Thai for a cold night. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Fish+Cheeks+55+Bond+St+NoHo+New+York"
        }
      ]
    },
    evening: {
      time: "8pm",
      venue: "Film Forum or Metrograph",
      title: "Holiday Season Screening",
      description: "Both theaters typically run holiday-appropriate programming in December (classic films, year-end best-of screenings). Check filmforum.org and metrograph.com.",
      address: "Film Forum: 209 W Houston St / Metrograph: 7 Ludlow St",
      cost: "~$17-18",
      bookingUrl: "https://filmforum.org",
      bookingLabel: "filmforum.org / metrograph.com",
      mapQuery: "Film+Forum+209+W+Houston+St+West+Village+New+York",
      tip: null
    },
    bookingUrgency: "low",
    bookingNote: "Buy film tickets online by Friday each week."
  },

  // -------------------------------------------------------
  // #32 - Dec 26
  // -------------------------------------------------------
  {
    id: 32,
    date: "2026-12-26",
    title: "Wave Hill - End of Year Garden Walk",
    shortTitle: "Wave Hill",
    categories: ["Scenic"],
    primaryCategory: "Scenic",
    borough: "Bronx",
    budget: "$",
    season: "winter",
    daytime: {
      time: "12-4pm",
      venue: "Wave Hill",
      title: "Winter Garden Walk",
      description: "A 28-acre public garden and cultural center overlooking the Hudson River and the Palisades. In winter, the gardens are quiet and contemplative - the glasshouse conservatory has tropical plants. Mark Twain, Teddy Roosevelt, and Arturo Toscanini all lived here. Rotating art exhibitions in Glyndor Gallery.",
      address: "675 W 252nd St, Bronx",
      cost: "$10/person (free Thursdays, free Saturdays 9am-noon if you want to go early)",
      bookingUrl: "https://www.wavehill.org",
      bookingLabel: "wavehill.org",
      mapQuery: "Wave+Hill+675+W+252nd+St+Bronx+NY",
      tip: "Getting there: 1 train to 242nd St, then free Wave Hill shuttle (runs Thu-Sun). ~60 min total from Williamsburg."
    },
    dinner: {
      time: "6-8pm",
      options: [
        {
          name: "Lilia",
          cuisine: "Italian",
          priceRange: "$$$$",
          address: "567 Union Ave, Williamsburg",
          description: "End the year at one of NYC's best restaurants. Book on Resy weeks ahead.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Lilia+567+Union+Ave+Williamsburg+Brooklyn"
        },
        {
          name: "Le Crocodile",
          cuisine: "French brasserie",
          priceRange: "$$$",
          address: "80 Wythe Ave, Williamsburg",
          description: "Classic French in a beautiful Williamsburg space. Book on Resy.",
          bookingUrl: "https://resy.com",
          bookingPlatform: "Resy",
          mapQuery: "Le+Crocodile+80+Wythe+Ave+Williamsburg+Brooklyn"
        }
      ]
    },
    evening: null,
    bookingUrgency: "low",
    bookingNote: "No booking needed for Wave Hill. Book Lilia or Le Crocodile on Resy weeks ahead."
  }
];
