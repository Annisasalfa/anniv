const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "0417", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "Yayy!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: The date we first started dating!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Amma menurut BMKG", // Example trending search query
    "Cara menjadi istri abun tanpa pelet", // Another example query
    `Jy si baik hati dan tidak sombong`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "How long have we been together?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2025-03-08", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together for:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Back To You", // Title of the song
      artist: "Selena Gomez", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Untill I Found You",
      artist: "Stephen Sanchez",
      left: "40%",
      top: "15%",
    },
    {
      title: "Just You",
      artist: "Teddy Adhitya",
      left: "15%",
      top: "40%",
    },
    {
      title: "If I Had A Gun",
      artist: "Noel Gallagher's High Flying Birds",
      left: "30%",
      top: "75%",
    },
    {
      title: "Stuck With You",
      artist: "Justin Bieber,Ariana Grande",
      left: "5%",
      top: "65%",
    },
    {
      title: "i'll be friend's with you",
      artist: "Arash Buana",
      left: "25%",
      top: "90%",
    },
    {
      title: "Can't Help Falling in Love",
      artist: "Elvis Presley",
      left: "35%",
      top: "50%",
    },
    {
      title: "Do I Wanna Know",
      artist: "Arctic Monkeys",
      left: "10%",
      top: "25%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Our Messages", // Title for the messages recap page
    messageGallery: [
      { title: "December 9, 2023", description: "bidadarinya Mojokerto." }, // Message entry
      { title: "May 27, 2024", description: "dikasih kiss mbak mbak jawa cina bejirr" },
      { title: "June 29, 2024", description: "fotografer dadakan❤️" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Our Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "April 13, 2023", description: "Masih malu-malu kucing" }, // Picture entry
      { title: "April 17, 2023", description: "Foto pertama setelah jadian, eak 💕" },
      { title: "Juni 13, 2023", description: "Anjayyy ngedate, btw avamu cakep banget yang ini " },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Kalau kamu cari yang cakep aku mundur, tapi kalau kamu cari yang mundur aku cakepp. eakk", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Thank you for everything, Ammaaa! 💖 oiyaa ini males cari gif jadinya pake pohon natal aja deh", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been together?", // Example of a correct search query
    "how long have we been together", // Another example of a correct search query
  ],
};

export default config;
