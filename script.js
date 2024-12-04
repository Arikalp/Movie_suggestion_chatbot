// Chatbot response JSON data
const responses = {
    "hello": "Hi there! Tell me about a movie, director, theme, or actor, and I'll suggest something related.",
    "hi": "Hello! Let me know your favorite movie or genre, and I'll find a related recommendation for you.",
    "inception": "If you liked *Inception*, you might enjoy *Interstellar*, another mind-bending sci-fi film by Christopher Nolan.",
    "christopher nolan": "Christopher Nolan's movies are known for their complex storytelling. Try *The Prestige* or *Tenet* if you haven't seen them yet.",
    "sci-fi": "For sci-fi enthusiasts, consider watching *Blade Runner 2049*, *The Matrix*, or *Ex Machina*.",
    "romantic": "If you love romance, check out *The Notebook*, *Pride & Prejudice*, or *La La Land*.",
    "horror": "Looking for a scare? Try *The Conjuring*, *Hereditary*, or *Get Out*.",
    "marvel": "If you're into Marvel, try watching *Avengers: Endgame*, *Iron Man*, or *Doctor Strange*.",
    "superhero": "For superhero action, consider *Spider-Man: No Way Home*, *The Dark Knight*, or *Logan*.",
    "comedy": "Need a laugh? Check out *Superbad*, *The Hangover*, or *Step Brothers*.",
    "thriller": "For edge-of-your-seat thrillers, watch *Gone Girl*, *Prisoners*, or *Se7en*.",
    "mystery": "If you enjoy mysteries, try *Knives Out*, *Shutter Island*, or *The Girl with the Dragon Tattoo*.",
    "quentin tarantino": "Quentin Tarantino fans will love *Pulp Fiction*, *Django Unchained*, or *Kill Bill: Vol. 1*.",
    "animated": "For animated films, check out *Inside Out*, *Coco*, or *Spider-Man: Into the Spider-Verse*.",
    "pixar": "Pixar movies like *Toy Story*, *Finding Nemo*, and *WALL-E* are classics.",
    "action": "For action-packed movies, try *Mad Max: Fury Road*, *John Wick*, or *Die Hard*.",
    "drama": "For compelling dramas, watch *The Shawshank Redemption*, *Forrest Gump*, or *The Godfather*.",
    "crime": "Crime enthusiasts should consider *Goodfellas*, *The Departed*, or *The Irishman*.",
    "adventure": "For adventure, watch *Indiana Jones*, *Pirates of the Caribbean*, or *The Hobbit*.",
    "fantasy": "Fantasy fans will enjoy *Harry Potter*, *The Lord of the Rings*, or *Pan's Labyrinth*.",
    "based on true story": "Movies based on true stories include *Schindler's List*, *The Pursuit of Happyness*, or *12 Years a Slave*.",
    "space": "Space-themed movies to watch are *Gravity*, *2001: A Space Odyssey*, or *The Martian*.",
    "time travel": "Time travel fans will enjoy *Looper*, *The Time Traveler's Wife*, or *Back to the Future*.",
    "war": "For war movies, try *Saving Private Ryan*, *1917*, or *Dunkirk*.",
    "sports": "Sports movies like *Moneyball*, *The Blind Side*, or *Remember the Titans* are inspiring.",
    "classic": "Classics like *Casablanca*, *Gone with the Wind*, or *Citizen Kane* are timeless.",
    "indian": "For Indian cinema, check out *Dangal*, *Gully Boy*, or *3 Idiots*.",
    "bollywood": "Bollywood hits like *Dilwale Dulhania Le Jayenge*, *Zindagi Na Milegi Dobara*, or *PK* are worth a watch.",
    "oscar": "Oscar-winning films to consider are *Parasite*, *The Shape of Water*, or *No Country for Old Men*.",
    "default": "I'm sorry, I didn't understand that. Could you ask something else related to sports yoga?","parasite": "If you liked *Parasite*, you might enjoy *Snowpiercer* or *The Handmaiden*, other fantastic South Korean films.",
    "titanic": "If you loved *Titanic*, try *The Great Gatsby* or *The Notebook* for more romantic drama.",
    "joker": "Fans of *Joker* might also enjoy *Taxi Driver*, *The King of Comedy*, or *Black Swan*.",
    "avengers": "If you're a fan of the Avengers, explore *Guardians of the Galaxy* or *X-Men: Days of Future Past*.",
    "star wars": "For *Star Wars* fans, try *Star Trek*, *The Mandalorian* (TV), or *Dune*.",
    "harry potter": "If you loved *Harry Potter*, dive into *Fantastic Beasts* or *The Chronicles of Narnia*.",
    "the godfather": "If *The Godfather* impressed you, explore *Scarface* or *The Sopranos* (TV series).",
    "frozen": "If *Frozen* was your favorite, try *Moana* or *Tangled* for more animated musical adventures.",

    // Directors
    "steven spielberg": "Steven Spielberg fans should check out *Jaws*, *Jurassic Park*, and *Schindler's List*.",
    "martin scorsese": "Martin Scorsese's classics include *Goodfellas*, *The Wolf of Wall Street*, and *Raging Bull*.",
    "wes anderson": "If you like Wes Anderson's quirky style, try *The Grand Budapest Hotel*, *Moonrise Kingdom*, or *Fantastic Mr. Fox*.",
    "guillermo del toro": "Guillermo del Toro fans should watch *Pan's Labyrinth*, *Crimson Peak*, or *The Shape of Water*.",
    "hayao miyazaki": "For Hayao Miyazaki's magic, watch *Spirited Away*, *My Neighbor Totoro*, or *Howl's Moving Castle*.",

    // Genres
    "drama": "For drama, consider *The Social Network*, *Little Women*, or *A Beautiful Mind*.",
    "comedy": "Need a laugh? Watch *Groundhog Day*, *Mean Girls*, or *Napoleon Dynamite*.",
    "horror": "Horror fans will enjoy *It Follows*, *Midsommar*, or *The Babadook*.",
    "action": "For thrilling action, watch *Edge of Tomorrow*, *Atomic Blonde*, or *The Bourne Identity*.",
    "sci-fi": "Sci-fi lovers should check out *Arrival*, *District 9*, or *Minority Report*.",
    "fantasy": "For fantasy, try *Eragon*, *The Golden Compass*, or *Willow*.",
    "romance": "For romance, explore *A Star is Born*, *Crazy Rich Asians*, or *Silver Linings Playbook*.",

    // Themes
    "time travel": "Time travel enthusiasts should watch *Predestination*, *12 Monkeys*, or *Edge of Tomorrow*.",
    "space": "Space movies like *Interstellar*, *Gravity*, or *First Man* are fascinating.",
    "robots": "For movies featuring robots, watch *I, Robot*, *Chappie*, or *A.I. Artificial Intelligence*.",
    "apocalypse": "Post-apocalyptic movies like *The Road*, *Children of Men*, or *World War Z* are captivating.",
    "heist": "If you like heist movies, watch *Ocean's Eleven*, *Baby Driver*, or *Inside Man*.",
    "revenge": "For revenge tales, check out *Oldboy*, *Kill Bill*, or *The Revenant*.",

    // Family-friendly
    "disney": "Disney classics like *The Lion King*, *Aladdin*, or *Beauty and the Beast* are must-watch.",
    "pixar": "Pixar fans should watch *Up*, *Ratatouille*, or *Finding Dory*.",
    "family": "For family-friendly movies, try *Paddington*, *The Secret Life of Pets*, or *The Lego Movie*.",

    // International cinema
    "japanese": "Explore Japanese cinema with *Your Name*, *Rashomon*, or *Seven Samurai*.",
    "korean": "Korean films like *Train to Busan*, *I Saw the Devil*, or *The Host* are excellent.",
    "french": "French movies like *Amélie*, *Blue Is the Warmest Color*, or *La Haine* are iconic.",
    "indian": "Indian cinema highlights include *Lagaan*, *Queen*, or *Masaan*.",

    // Iconic franchises
    "lord of the rings": "If you love *The Lord of the Rings*, try *The Hobbit* series or *The Witcher* (TV).",
    "batman": "For Batman fans, watch *Batman Begins*, *The Dark Knight Rises*, or *Batman: Mask of the Phantasm*.",
    "spider-man": "Spider-Man fans should check out *Spider-Man: Homecoming*, *Spider-Man: Into the Spider-Verse*, or *Venom*.",
    "pirates of the caribbean": "If you loved *Pirates of the Caribbean*, try *The Mummy* or *Master and Commander*.","hollywood": "Hollywood is home to classics like *The Shawshank Redemption*, *Inception*, and *The Dark Knight*. Looking for something specific?",
    "action hollywood": "For Hollywood action, watch *Mad Max: Fury Road*, *Gladiator*, or *Mission: Impossible - Fallout*.",
    "comedy hollywood": "Hollywood comedies like *Superbad*, *The Hangover*, and *Dumb and Dumber* are hilarious.",
    "hollywood classics": "Hollywood classics include *Casablanca*, *Gone with the Wind*, and *Citizen Kane*.",
    "romance hollywood": "Romantic movies like *Titanic*, *The Fault in Our Stars*, and *La La Land* are iconic.",
    "horror hollywood": "Hollywood horror fans will enjoy *The Exorcist*, *A Nightmare on Elm Street*, or *The Shining*.",
    "sci-fi hollywood": "Sci-fi Hollywood hits include *Blade Runner 2049*, *The Matrix*, and *Interstellar*.",

    // Bollywood
    "bollywood": "Bollywood is known for its musicals, drama, and romance. Try *Dilwale Dulhania Le Jayenge*, *Zindagi Na Milegi Dobara*, or *3 Idiots*.",
    "action bollywood": "For Bollywood action, watch *Shershaah*, *War*, or *Singham*.",
    "romance bollywood": "Bollywood romantic hits include *Kabir Singh*, *Jab We Met*, and *Kal Ho Naa Ho*.",
    "comedy bollywood": "Bollywood comedies like *Hera Pheri*, *Munna Bhai M.B.B.S.*, and *Chupke Chupke* are timeless.",
    "bollywood classics": "Bollywood classics include *Sholay*, *Mughal-e-Azam*, and *Mother India*.",
    "thriller bollywood": "Bollywood thrillers like *Andhadhun*, *Kahaani*, and *Drishyam* are unmissable.",
    "biopic bollywood": "Bollywood biopics such as *Dangal*, *Bhaag Milkha Bhaag*, and *MS Dhoni: The Untold Story* are inspiring.",

    // Tollywood (Telugu Cinema)
    "tollywood": "Tollywood offers blockbusters like *Baahubali: The Beginning*, *RRR*, and *Arjun Reddy*. What do you want to explore?",
    "action tollywood": "Tollywood action hits include *Saaho*, *Pushpa: The Rise*, and *Sye*.",
    "romance tollywood": "Tollywood romance movies like *Geetha Govindam*, *Arya*, and *Ye Maaya Chesave* are must-watch.",
    "comedy tollywood": "Tollywood comedies like *Eega*, *Bhale Bhale Magadivoy*, and *Race Gurram* are hilarious.",
    "tollywood classics": "Classic Tollywood films include *Mayabazar*, *Nuvvu Nenu*, and *Devadasu*.",
    "historical tollywood": "Historical movies like *Magadheera*, *Rudhramadevi*, and *Sye Raa Narasimha Reddy* are stunning.",

    // Kollywood (Tamil Cinema)
    "kollywood": "Kollywood has gems like *2.0*, *Asuran*, and *Anniyan*. What are you looking for?",
    "action kollywood": "For action, try *Kaithi*, *Vikram Vedha*, or *Thuppakki*.",
    "romance kollywood": "Kollywood romance movies like *OK Kanmani*, *96*, and *Vinnaithaandi Varuvaayaa* are beautiful.",
    "kollywood classics": "Classic Tamil movies include *Nayakan*, *Mouna Ragam*, and *Roja*.",
    "thriller kollywood": "Thrillers like *Ratsasan*, *Pizza*, and *Eeram* are gripping.",
    "superhero kollywood": "Kollywood's superhero flicks include *Enthiran (Robot)*, *Mugamoodi*, and *7aum Arivu*.",

    // Sandalwood (Kannada Cinema)
    "sandalwood": "Explore Kannada hits like *KGF*, *Kirik Party*, and *Charlie 777*.",
    "action sandalwood": "Action-packed Kannada movies include *KGF Chapter 2*, *Vikrant Rona*, and *Ugramm*.",
    "romance sandalwood": "Romantic Kannada films like *Milana*, *Simple Agi Ondh Love Story*, and *Chowka* are heartwarming.",
    "comedy sandalwood": "Comedy movies like *Victory*, *Googly*, and *Bhajarangi* are entertaining.",

    // Mollywood (Malayalam Cinema)
    "mollywood": "Malayalam cinema has critically acclaimed films like *Drishyam*, *Bangalore Days*, and *Kumbalangi Nights*.",
    "thriller mollywood": "Thrilling Malayalam films include *Mumbai Police*, *Memories*, and *Forensic*.",
    "family mollywood": "For family dramas, watch *Ustad Hotel*, *Jacobinte Swargarajyam*, and *Pathemari*.",
    "classics mollywood": "Malayalam classics like *Manichitrathazhu*, *Chemmeen*, and *Thaniyavarthanam* are timeless.",
    "romance mollywood": "Romantic Malayalam films like *Premam*, *Ennu Ninte Moideen*, and *Charlie* are beautiful.",

    // Bengali Cinema (Tollywood)
    "bengali cinema": "Bengali cinema has masterpieces like *Pather Panchali*, *Chokher Bali*, and *Autograph*.",
    "satyajit ray": "Satyajit Ray's classics include *Pather Panchali*, *Charulata*, and *Shatranj Ke Khilari*.",
    "thriller bengali": "Bengali thrillers like *Byomkesh Bakshi*, *Kahaani*, and *Chotushkone* are worth watching.",
    "romance bengali": "Romantic Bengali films like *Praktan*, *Chokher Bali*, and *Belasheshe* are heart-touching.",

    // International Cinema
    "japanese": "Japanese classics include *Rashomon*, *Seven Samurai*, and *Your Name*.",
    "korean": "Korean films like *Parasite*, *Train to Busan*, and *Oldboy* are globally acclaimed.",
    "french": "Explore French films like *Amélie*, *La Vie en Rose*, and *Blue Is the Warmest Color*.",
    "spanish": "Spanish hits include *Pan's Labyrinth*, *The Invisible Guest*, and *Roma*.","strong female lead": "Movies with strong female leads include *Wonder Woman*, *Kill Bill*, *The Hunger Games*, and *Little Women*.",
    "heist movie": "For heist movies, check out *Ocean's Eleven*, *Inception*, *The Italian Job*, or *Inside Man*.",
    "plot twist ending": "Movies with plot twist endings include *The Sixth Sense*, *Shutter Island*, *Gone Girl*, and *Fight Club*.",
    "feel-good movie": "Feel-good movies like *Forrest Gump*, *The Pursuit of Happyness*, *Little Miss Sunshine*, and *Paddington* are great for the weekend.",
    "amazing visuals": "Movies with stunning visuals include *Avatar*, *Life of Pi*, *Blade Runner 2049*, and *Interstellar*.",
    "christopher nolan": "Christopher Nolan's movies include *Inception*, *The Dark Knight Trilogy*, *Dunkirk*, and *Tenet*.",
    "best picture oscar": "Best Picture Oscar winners include *The Godfather*, *Schindler's List*, *Parasite*, and *Everything Everywhere All At Once*.",
    "animated movie for kids": "Great animated movies for kids include *Toy Story*, *Finding Nemo*, *Frozen*, and *The Lion King*.",
    "space exploration": "Movies about space exploration include *Interstellar*, *The Martian*, *Apollo 13*, and *Gravity*.",
    "based on true events": "Movies based on true events include *The Social Network*, *Spotlight*, *Bohemian Rhapsody*, and *The Imitation Game*.",
    "time travel": "Time travel movies include *Back to the Future*, *Looper*, *Edge of Tomorrow*, and *The Time Traveler's Wife*.",
    "bollywood great music": "Bollywood movies with great music include *Aashiqui 2*, *Dil Se*, *Kabhi Khushi Kabhie Gham*, and *Kal Ho Naa Ho*.",
    "underrated movies": "Underrated movies include *Prisoners*, *Nightcrawler*, *A Ghost Story*, and *Hunt for the Wilderpeople*.",
    "horror not too scary": "Horror movies that aren't too scary include *A Quiet Place*, *The Others*, *Coraline*, and *Warm Bodies*.",
    "comedy-drama": "Comedy-dramas like *The Grand Budapest Hotel*, *The Intouchables*, *Silver Linings Playbook*, and *Jojo Rabbit* are fantastic.",
    "inspiring sports story": "Inspiring sports movies include *Remember the Titans*, *Dangal*, *Chak De! India*, and *Moneyball*.",
    "dystopian theme": "Dystopian movies include *The Hunger Games*, *Mad Max: Fury Road*, *The Matrix*, and *Children of Men*.",
    "iconic fight scenes": "Movies with iconic fight scenes include *The Matrix*, *Gladiator*, *John Wick*, and *Crouching Tiger, Hidden Dragon*.",
    "romantic not cheesy": "Non-cheesy romantic movies include *500 Days of Summer*, *The Notebook*, *Pride and Prejudice*, and *La La Land*.",
    "19th century setting": "Movies set in the 19th century include *Pride and Prejudice*, *Lincoln*, *The Piano*, and *Gangs of New York*.",
    "marvel cinematic universe": "Marvel Cinematic Universe movies include *Iron Man*, *Avengers: Endgame*, *Black Panther*, and *Guardians of the Galaxy*.",
    "artificial intelligence": "Movies about AI include *Ex Machina*, *Her*, *I, Robot*, and *A.I. Artificial Intelligence*.",
    "coming-of-age": "Coming-of-age movies include *The Perks of Being a Wallflower*, *Lady Bird*, *Stand by Me*, and *Boyhood*.",
    "courtroom drama": "Courtroom dramas include *A Few Good Men*, *12 Angry Men*, *The Trial of the Chicago 7*, and *To Kill a Mockingbird*.",
    "anti-hero main character": "Movies with anti-heroes include *Joker*, *The Wolf of Wall Street*, *Deadpool*, and *V for Vendetta*.","rocky aur rani kii prem kahani": "A romantic drama directed by Karan Johar, starring Ranveer Singh and Alia Bhatt, with family dynamics and humor.",
    "jawan": "An action-packed thriller starring Shah Rukh Khan, directed by Atlee, featuring intense performances and a gripping storyline.",
    "gadar 2": "A sequel to the iconic *Gadar: Ek Prem Katha*, starring Sunny Deol and Ameesha Patel, packed with action and nostalgia.",
    "dream girl 2": "A comedy-drama starring Ayushmann Khurrana, filled with laughter, romance, and hilarious twists.",
    "satyaprem ki katha": "A romantic drama starring Kartik Aaryan and Kiara Advani, showcasing a heartfelt love story.",
    "animal": "An intense action-drama directed by Sandeep Reddy Vanga, starring Ranbir Kapoor, delving into complex family relationships.",
    "tiger 3": "The latest in the Tiger franchise, starring Salman Khan and Katrina Kaif, filled with action, espionage, and thrilling moments.",
    "bhola": "An action thriller starring Ajay Devgn, showcasing an intense and emotionally charged journey of a father.",
    "zara hatke zara bachke": "A lighthearted romantic comedy featuring Vicky Kaushal and Sara Ali Khan, centered on marriage and relationships.",
    "pathaan": "A high-octane action film from YRF's spy universe, starring Shah Rukh Khan, Deepika Padukone, and John Abraham.",
    "the vaccine war": "Directed by Vivek Agnihotri, this film highlights India's fight against COVID-19 and the development of its vaccine.",
    "kalank": "A visually stunning period drama with an ensemble cast, exploring love, betrayal, and redemption in a pre-independence era setting.",
    "lal singh chaddha": "An adaptation of *Forrest Gump*, starring Aamir Khan and Kareena Kapoor, offering an inspiring journey through life's ups and downs.",
    "brahmastra": "A fantasy action-adventure starring Ranbir Kapoor and Alia Bhatt, directed by Ayan Mukerji, set in a mystical universe.",
    "sam bahadur": "A biographical drama about Field Marshal Sam Manekshaw, starring Vicky Kaushal, directed by Meghna Gulzar.",
    "merry christmas": "A thriller starring Katrina Kaif and Vijay Sethupathi, directed by Sriram Raghavan, promising suspense and intrigue."
};


// Function to send user message and show response
function sendMessage() {
    let userMessage = document.getElementById('userMessage').value;
    if (userMessage.trim() === "") return;

    // Show user message
    displayMessage(userMessage, 'user-message');
    
    // Respond based on user message
    let response = getResponse(userMessage.toLowerCase());
    setTimeout(() => {
        displayMessage(response, 'bot-message');
    }, 1000);
    
    // Clear the input field
    document.getElementById('userMessage').value = '';
}

// Display message in the chat
function displayMessage(message, type) {
    let messageContainer = document.getElementById('message-container');
    let newMessage = document.createElement('div');
    newMessage.classList.add('message', type);
    newMessage.textContent = message;
    messageContainer.appendChild(newMessage);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

// Get appropriate response from the JSON data
function getResponse(userMessage) {
    let keys = Object.keys(responses);
    for (let i = 0; i < keys.length; i++) {
        if (userMessage.includes(keys[i])) {
            return responses[keys[i]];
        }
    }
    return responses['default'];
}

// To handle pressing Enter key for submitting messages
document.getElementById('userMessage').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});