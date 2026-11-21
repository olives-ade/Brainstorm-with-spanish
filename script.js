const levels = [
  {
    name: "A1 Beginner",
    title: "Your Spanish starts here",
    intro: "Build a foundation with useful words and simple sentences. This level covers:",
    topics: [
      "Spanish alphabet and letter sounds",
      "Greetings and introductions",
      "Numbers and colours",
      "Days and months",
      "Family members",
      "Food and drinks",
      "Basic sentence construction",
      "Present tense"
    ],
    phrases: [
      { spanish: "¡Hola! Buenos días.", english: "Hello! Good morning." },
      { spanish: "Me llamo Ana y soy de Canadá.", english: "My name is Ana, and I’m from Canada." },
      { spanish: "¿Cuántos años tienes?", english: "How old are you?" }
    ],
    questions: [
      { prompt: "Which Spanish letter is pronounced like the “a” in “father”?", options: ["A", "E", "I"], answer: 0, explanation: "The Spanish letter A is pronounced like the “a” in “father.”" },
      { prompt: "What does “Buenos días” mean?", options: ["Good evening", "Good morning", "Goodbye"], answer: 1, explanation: "Buenos días is the usual greeting for “Good morning.”" },
      { prompt: "How do you say “My name is Luis”?", options: ["Tengo Luis.", "Me llamo Luis.", "Estoy Luis."], answer: 1, explanation: "Me llamo Luis means “My name is Luis.”" },
      { prompt: "What number is “quince”?", options: ["Five", "Fifteen", "Fifty"], answer: 1, explanation: "Quince means fifteen." },
      { prompt: "Which word means “blue”?", options: ["Verde", "Rojo", "Azul"], answer: 2, explanation: "Azul means blue." },
      { prompt: "Which day comes after lunes?", options: ["Martes", "Jueves", "Domingo"], answer: 0, explanation: "Martes (Tuesday) follows lunes (Monday)." },
      { prompt: "What does “enero” mean?", options: ["June", "January", "April"], answer: 1, explanation: "Enero is January." },
      { prompt: "“Mi madre” means:", options: ["My sister", "My mother", "My daughter"], answer: 1, explanation: "Madre means mother." },
      { prompt: "How do you say “I drink water”?", options: ["Bebo agua.", "Como agua.", "Vivo agua."], answer: 0, explanation: "Bebo is the first-person present form of beber (to drink)." },
      { prompt: "Choose the natural sentence for “Ana speaks Spanish.”", options: ["Ana hablan español.", "Ana hablo español.", "Ana habla español."], answer: 2, explanation: "The third-person singular form of hablar is habla." }
    ]
  },
  {
    name: "A2 Elementary",
    title: "Spanish for everyday life",
    intro: "Handle familiar daily situations, describe people, and talk about past events and future plans. This level covers:",
    topics: [
      "Daily routines",
      "Shopping conversations",
      "Describing people",
      "Talking about the past",
      "Asking for directions",
      "Reflexive verbs",
      "Basic future expressions"
    ],
    phrases: [
      { spanish: "Me levanto a las siete cada mañana.", english: "I get up at seven every morning." },
      { spanish: "¿Cuánto cuestan estos zapatos?", english: "How much do these shoes cost?" },
      { spanish: "Vamos a girar a la derecha.", english: "We’re going to turn right." }
    ],
    questions: [
      { prompt: "Complete the routine: “Me ___ a las siete.” (levantarse)", options: ["levanto", "levanta", "levantar"], answer: 0, explanation: "With yo, levantarse becomes me levanto." },
      { prompt: "How would you ask “How much do these shoes cost?”", options: ["¿Qué hora es?", "¿Cuánto cuestan estos zapatos?", "¿Dónde están los zapatos?"], answer: 1, explanation: "¿Cuánto cuestan? asks how much plural items cost." },
      { prompt: "Which phrase describes someone as tall?", options: ["Es alto.", "Tiene alto.", "Está altura."], answer: 0, explanation: "Es alto means “He is tall”; ser is used for a general characteristic." },
      { prompt: "Yesterday, I ate paella: “Ayer ___ paella.”", options: ["como", "comí", "comeré"], answer: 1, explanation: "Comí is the first-person preterite of comer." },
      { prompt: "Which question asks where the pharmacy is?", options: ["¿Cuándo abre la farmacia?", "¿Qué es una farmacia?", "¿Dónde está la farmacia?"], answer: 2, explanation: "¿Dónde está…? asks for a location." },
      { prompt: "Choose the correct reflexive sentence: “She gets dressed.”", options: ["Se viste.", "La viste.", "Le vestir."], answer: 0, explanation: "The reflexive pronoun for ella is se: ella se viste." },
      { prompt: "How do you say “We are going to travel tomorrow”?", options: ["Viajamos ayer.", "Vamos a viajar mañana.", "Fuimos viajar mañana."], answer: 1, explanation: "Ir + a + infinitive expresses a near-future plan." },
      { prompt: "“Me despierto temprano” means:", options: ["I wake up early.", "I go to bed early.", "I get dressed early."], answer: 0, explanation: "Despertarse means to wake up." },
      { prompt: "Complete the shopping request: “Quisiera ___ kilo de tomates.”", options: ["una", "un", "unos"], answer: 1, explanation: "Kilo is masculine singular, so use un kilo." },
      { prompt: "Choose the correct past form: “El sábado nosotros ___ a Madrid.” (ir)", options: ["vamos", "iremos", "fuimos"], answer: 2, explanation: "Fuimos is the preterite form of ir for nosotros." }
    ]
  },
  {
    name: "B1 Intermediate",
    title: "Keep the conversation going",
    intro: "Describe what happened, share your point of view, and connect your ideas in conversation and writing. This level covers:",
    topics: [
      "Past tenses",
      "Expressing opinions",
      "Describing experiences",
      "Making recommendations",
      "Understanding conversations",
      "Writing paragraphs",
      "Everyday discussions"
    ],
    phrases: [
      { spanish: "Desde mi punto de vista, viajar enriquece la vida.", english: "From my point of view, travelling enriches life." },
      { spanish: "El año pasado viajé a Perú con mi familia.", english: "Last year I travelled to Peru with my family." },
      { spanish: "Te recomiendo que visites el museo.", english: "I recommend that you visit the museum." }
    ],
    questions: [
      { prompt: "Which past tense best describes an ongoing background action?", options: ["Imperfecto", "Futuro", "Imperativo"], answer: 0, explanation: "The imperfect often describes habitual or ongoing past actions and background." },
      { prompt: "Complete: “Cuando era niño, ___ al parque cada día.”", options: ["fui", "iba", "iré"], answer: 1, explanation: "Iba is the imperfect form for a repeated past routine." },
      { prompt: "How do you say “In my opinion”?", options: ["A pesar de", "En mi opinión", "Por supuesto que no"], answer: 1, explanation: "En mi opinión introduces a personal opinion." },
      { prompt: "Choose the natural way to say “I have never tried sushi.”", options: ["Nunca he probado sushi.", "Nunca probé sushi mañana.", "No probaré nunca sushi ayer."], answer: 0, explanation: "The present perfect he probado describes an experience up to now." },
      { prompt: "Which phrase makes a recommendation?", options: ["Te recomiendo que lo visites.", "Me llamo Teresa.", "Ayer hizo frío."], answer: 0, explanation: "Te recomiendo que… means “I recommend that you…”" },
      { prompt: "A friend says, “No encuentro las llaves.” What is the problem?", options: ["They cannot find the keys.", "They lost their shoes.", "They need to buy a car."], answer: 0, explanation: "No encuentro las llaves means “I can’t find the keys.”" },
      { prompt: "Which connector means “although”?", options: ["Por eso", "Aunque", "Entonces"], answer: 1, explanation: "Aunque means although or even though." },
      { prompt: "Which is the clearest opening for a paragraph about a trip?", options: ["El año pasado viajé a Perú con mi familia.", "Y entonces muy bonito.", "Porque sí, luego."], answer: 0, explanation: "A clear topic sentence introduces the subject and gives useful context." },
      { prompt: "Choose the correct contrast: “I wanted to go, but I was tired.”", options: ["Quería ir, pero estaba cansado.", "Quiero fui y cansado.", "Iba ir porque cansado."], answer: 0, explanation: "Quería and estaba give the background; pero introduces the contrast." },
      { prompt: "“¿Te importaría cerrar la ventana?” is:", options: ["A polite request to close the window.", "A question about buying a window.", "A command to open the door."], answer: 0, explanation: "¿Te importaría…? is a polite way to make a request." }
    ]
  },
  {
    name: "B2 Upper Intermediate",
    title: "Express ideas with confidence",
    intro: "Use more complex grammar and communicate across social and professional settings. This level covers:",
    topics: [
      "Subjunctive mood",
      "Complex grammar",
      "Debates and discussions",
      "Professional conversations",
      "Advanced listening",
      "Formal and informal writing"
    ],
    phrases: [
      { spanish: "Espero que lleguemos a tiempo.", english: "I hope we arrive on time." },
      { spanish: "Aunque parezca difícil, podemos encontrar una solución.", english: "Although it may seem difficult, we can find a solution." },
      { spanish: "¿Podría enviarme el informe cuando le sea posible?", english: "Could you send me the report when you have a chance?" }
    ],
    questions: [
      { prompt: "Complete: “Espero que ustedes ___ a tiempo.” (llegar)", options: ["llegan", "lleguen", "llegaron"], answer: 1, explanation: "A hope introduced by espero que takes the present subjunctive: lleguen." },
      { prompt: "Which phrase correctly expresses doubt?", options: ["Dudo que sea cierto.", "Sé que es cierto.", "Es evidente que es cierto."], answer: 0, explanation: "Dudo que expresses doubt and is followed by the subjunctive." },
      { prompt: "Choose the correct conditional sentence: “If I had time, I would learn Italian.”", options: ["Si tengo tiempo, aprendí italiano.", "Si tuviera tiempo, aprendería italiano.", "Si tendré tiempo, aprendería italiano."], answer: 1, explanation: "A hypothetical condition uses imperfect subjunctive in the si-clause and conditional in the result." },
      { prompt: "Which connector introduces a consequence?", options: ["Sin embargo", "Por consiguiente", "Aunque"], answer: 1, explanation: "Por consiguiente means “consequently” or “therefore.”" },
      { prompt: "In a debate, which phrase politely signals disagreement?", options: ["No estoy del todo de acuerdo.", "Cállate ahora mismo.", "Eso no importa nunca."], answer: 0, explanation: "No estoy del todo de acuerdo is a measured, polite way to disagree." },
      { prompt: "Choose a suitable professional email opening.", options: ["Estimado señor García:", "Oye, colega:", "¿Qué pasa, tío?"], answer: 0, explanation: "Estimado señor García is an appropriate formal salutation." },
      { prompt: "A speaker says, “A pesar de las dificultades, el proyecto sigue adelante.” What does this mean?", options: ["The project continues despite the difficulties.", "The project has stopped because of the difficulties.", "The project will avoid all difficulties."], answer: 0, explanation: "A pesar de means “despite”; sigue adelante means “continues.”" },
      { prompt: "Choose the sentence with correct reported speech: “She told me she was busy.”", options: ["Me dijo que estaba ocupada.", "Me dijo que estoy ocupada.", "Me digo que estuvo ocupada."], answer: 0, explanation: "Reported speech commonly shifts está to estaba after a past reporting verb." },
      { prompt: "Which sentence uses the passive voice?", options: ["El equipo presentó el informe.", "El informe fue presentado por el equipo.", "El equipo presentará el informe."], answer: 1, explanation: "Fue presentado is a passive construction: the report was presented." },
      { prompt: "Which closing is most appropriate for a formal letter?", options: ["Un abrazo,", "Atentamente,", "¡Nos vemos, tronco!"], answer: 1, explanation: "Atentamente is a conventional formal closing." }
    ]
  },
  {
    name: "C1 Advanced",
    title: "Spanish for study and work",
    intro: "Develop precise, flexible communication for academic, professional, and cultural contexts. This level covers:",
    topics: [
      "Advanced vocabulary",
      "Academic Spanish",
      "Professional communication",
      "Idiomatic expressions",
      "Complex reading comprehension",
      "Advanced writing"
    ],
    phrases: [
      { spanish: "La investigación pone de manifiesto varios factores clave.", english: "The research highlights several key factors." },
      { spanish: "Conviene tener en cuenta las pruebas disponibles.", english: "It is worth bearing the available evidence in mind." },
      { spanish: "A fin de cuentas, debemos evaluar los resultados.", english: "Ultimately, we need to evaluate the results." }
    ],
    questions: [
      { prompt: "Which word is closest in meaning to “plantear” in an academic discussion?", options: ["Proponer o presentar una cuestión", "Olvidar por completo", "Traducir literalmente"], answer: 0, explanation: "Plantear can mean to raise, pose, or put forward an issue or proposal." },
      { prompt: "Complete the academic phrase: “Los resultados ___ que la hipótesis era correcta.”", options: ["sugieren", "sugiere", "sugerir"], answer: 0, explanation: "Los resultados is plural, so the verb is sugieren." },
      { prompt: "Which is the most suitable professional request?", options: ["¿Podría enviarme el informe cuando le sea posible?", "Pásame eso ya.", "Dame el informe, venga."], answer: 0, explanation: "The conditional and formal usted form make this request appropriately polite." },
      { prompt: "What does the idiom “estar entre la espada y la pared” mean?", options: ["To face a difficult dilemma", "To be very relaxed", "To finish a task early"], answer: 0, explanation: "The idiom describes being caught between two difficult choices." },
      { prompt: "In a formal text, “No obstante” is closest to:", options: ["Sin embargo", "Por ejemplo", "En primer lugar"], answer: 0, explanation: "No obstante means “nevertheless” or “however.”" },
      { prompt: "Read: “La medida redujo el consumo, aunque sus efectos fueron menores de lo previsto.” What was unexpected?", options: ["The measure increased consumption.", "The effects were smaller than expected.", "The measure was never implemented."], answer: 1, explanation: "Menores de lo previsto means “smaller than expected.”" },
      { prompt: "Which phrase introduces a qualified conclusion?", options: ["A la luz de estos datos, cabe concluir que…", "No hay nada más que decir, jamás.", "Porque me parece y ya está."], answer: 0, explanation: "A la luz de estos datos signals a conclusion based on evidence." },
      { prompt: "Choose the most precise connector for adding a contrasting point.", options: ["Asimismo", "Ahora bien", "En consecuencia"], answer: 1, explanation: "Ahora bien introduces a qualification or contrasting point." },
      { prompt: "Which sentence uses the subjunctive appropriately after an evaluation?", options: ["Es fundamental que el equipo revise los datos.", "Es fundamental que el equipo revisa los datos.", "Es fundamental que el equipo revisó los datos."], answer: 0, explanation: "An evaluation with es fundamental que takes the subjunctive: revise." },
      { prompt: "For an academic essay, which style is most effective?", options: ["Organized paragraphs, precise claims, and evidence.", "Unconnected fragments and unexplained opinions.", "Slang throughout with no clear structure."], answer: 0, explanation: "Academic writing benefits from clear structure, precise argument, and supporting evidence." }
    ]
  },
  {
    name: "C2 Proficiency",
    title: "Nuance, culture, and precision",
    intro: "Explore sophisticated expression and register, interpret complex texts, and communicate with near-native precision. This level covers:",
    topics: [
      "Sophisticated expressions",
      "Cultural understanding",
      "Nuanced conversations",
      "Advanced literature",
      "Complex grammatical structures",
      "Near-native communication"
    ],
    phrases: [
      { spanish: "No es que me oponga; más bien, quisiera matizar la propuesta.", english: "It’s not that I object; rather, I’d like to qualify the proposal." },
      { spanish: "De no haber sido por tu ayuda, no habríamos terminado.", english: "Had it not been for your help, we would not have finished." },
      { spanish: "Aun cuando discrepo, comprendo tu razonamiento.", english: "Even though I disagree, I understand your reasoning." }
    ],
    questions: [
      { prompt: "“No es que me oponga; más bien, quisiera matizar la propuesta.” What is the speaker doing?", options: ["Refusing outright.", "Softening disagreement and adding a qualification.", "Changing the subject completely."], answer: 1, explanation: "The speaker explicitly softens opposition and offers a nuance instead." },
      { prompt: "Which expression means that something is extremely easy?", options: ["Estar en las nubes", "Ser pan comido", "Costar un ojo de la cara"], answer: 1, explanation: "Ser pan comido means that something is a piece of cake." },
      { prompt: "Choose the correct inversion after “De haberlo sabido…”", options: ["habría actuado de otro modo.", "actúo de otro modo ayer.", "actuaré de otro modo."], answer: 0, explanation: "De haberlo sabido (if I had known) pairs with the conditional perfect habría actuado." },
      { prompt: "In a formal context, what does “¿Tendría la amabilidad de esperar?” convey?", options: ["A highly polite request to wait.", "An informal invitation to leave.", "A complaint about waiting."], answer: 0, explanation: "The conditional phrasing is an especially courteous request." },
      { prompt: "In literary analysis, “el narrador no es fidedigno” means:", options: ["The narrator may not be reliable.", "The narrator tells the story in verse.", "The narrator is omniscient."], answer: 0, explanation: "Fidedigno means trustworthy or reliable." },
      { prompt: "Which sentence means “Had it not been for your help, we would not have finished”?", options: ["De no haber sido por tu ayuda, no habríamos terminado.", "Si no será por tu ayuda, terminamos.", "Aunque tu ayuda, terminaremos."], answer: 0, explanation: "De no haber sido por introduces a counterfactual condition; no habríamos terminado is the conditional perfect." },
      { prompt: "Choose the most natural nuanced use of “si bien.”", options: ["Si bien el argumento es sólido, deja algunas preguntas abiertas.", "Si bien mañana, iremos a casa.", "Si bien es que argumento sólido."], answer: 0, explanation: "Si bien means “although” and introduces a concessive clause." },
      { prompt: "“Aquello distaba mucho de ser una solución ideal.” What does this imply?", options: ["It was far from an ideal solution.", "It was exactly the ideal solution.", "It had not yet been discussed."], answer: 0, explanation: "Distar mucho de means “to be far from.”" },
      { prompt: "Which response best preserves a diplomatic tone when challenging a claim?", options: ["Entiendo ese planteamiento; sin embargo, los datos parecen apuntar en otra dirección.", "Eso es absurdo y no pienso escucharte.", "No, porque no."], answer: 0, explanation: "Acknowledging the viewpoint before presenting evidence keeps disagreement measured and diplomatic." },
      { prompt: "Choose the grammatically correct literary expression.", options: ["Por más que lo intentara, no conseguía recordar el nombre.", "Por más que lo intenta ayer, no conseguía recordar.", "Por más lo intentara que, no recuerda."], answer: 0, explanation: "Por más que can introduce a concessive clause with the imperfect subjunctive: intentara." }
    ]
  }
];

const topicDetails = {
  "Spanish alphabet and letter sounds": {
    note: "Spanish has 27 letters, and its five vowels keep the same clear sounds in every word.",
    spanish: "El alfabeto español tiene veintisiete letras.",
    english: "The Spanish alphabet has twenty-seven letters."
  },
  "Greetings and introductions": {
    note: "Use hola at any time of day; buenos días is a friendly morning greeting.",
    spanish: "¡Hola! ¿Cómo estás?",
    english: "Hello! How are you?"
  },
  "Numbers and colours": {
    note: "Colour words usually agree with the noun in gender and number.",
    spanish: "Tengo tres manzanas rojas.",
    english: "I have three red apples."
  },
  "Days and months": {
    note: "Days and months are not capitalized in Spanish unless they begin a sentence.",
    spanish: "Mi cumpleaños es en mayo.",
    english: "My birthday is in May."
  },
  "Family members": {
    note: "Use mi or mis before a family member to say “my.”",
    spanish: "Mi hermana se llama Clara.",
    english: "My sister is called Clara."
  },
  "Food and drinks": {
    note: "Quisiera is a polite way to order food or a drink.",
    spanish: "Quisiera agua y pan, por favor.",
    english: "I would like water and bread, please."
  },
  "Basic sentence construction": {
    note: "A simple Spanish sentence often follows subject, verb, then object.",
    spanish: "Ana come una manzana.",
    english: "Ana eats an apple."
  },
  "Present tense": {
    note: "Use the present tense for routines and things that are true now.",
    spanish: "Hablo español todos los días.",
    english: "I speak Spanish every day."
  },
  "Daily routines": {
    note: "Reflexive verbs describe routines you do to or for yourself.",
    spanish: "Me despierto y me levanto a las siete.",
    english: "I wake up and get up at seven."
  },
  "Shopping conversations": {
    note: "Use ¿Cuánto cuesta? for one item and ¿Cuánto cuestan? for several.",
    spanish: "¿Cuánto cuestan estos zapatos?",
    english: "How much do these shoes cost?"
  },
  "Describing people": {
    note: "Use ser for a lasting description and tener for features such as hair or eyes.",
    spanish: "Mi hermano es alto y tiene el pelo castaño.",
    english: "My brother is tall and has brown hair."
  },
  "Talking about the past": {
    note: "Use the preterite for a completed event at a specific time.",
    spanish: "Ayer visité a mis abuelos.",
    english: "Yesterday I visited my grandparents."
  },
  "Asking for directions": {
    note: "Use ¿Cómo llego a…? to ask how to get somewhere.",
    spanish: "¿Cómo llego a la estación?",
    english: "How do I get to the station?"
  },
  "Reflexive verbs": {
    note: "A reflexive pronoun comes before a conjugated verb: me, te, se, nos, os, se.",
    spanish: "Me acuesto a las diez.",
    english: "I go to bed at ten."
  },
  "Basic future expressions": {
    note: "Use ir + a + an infinitive to talk about a future plan.",
    spanish: "Mañana voy a estudiar español.",
    english: "Tomorrow I am going to study Spanish."
  },
  "Past tenses": {
    note: "The imperfect sets the scene; the preterite tells what happened.",
    spanish: "De niño vivía en Sevilla, pero el año pasado me mudé.",
    english: "As a child I lived in Seville, but last year I moved."
  },
  "Expressing opinions": {
    note: "Start an opinion with en mi opinión or desde mi punto de vista.",
    spanish: "Desde mi punto de vista, viajar enriquece la vida.",
    english: "From my point of view, travelling enriches life."
  },
  "Describing experiences": {
    note: "The present perfect often describes experiences up to the present.",
    spanish: "He probado muchos platos nuevos.",
    english: "I have tried many new dishes."
  },
  "Making recommendations": {
    note: "A recommendation with te recomiendo que is followed by the subjunctive.",
    spanish: "Te recomiendo que visites el museo.",
    english: "I recommend that you visit the museum."
  },
  "Understanding conversations": {
    note: "Listen for key phrases and context, even when you do not know every word.",
    spanish: "—¿Te apetece salir? —Claro, ¿a qué hora?",
    english: "“Would you like to go out?” “Sure, what time?”"
  },
  "Writing paragraphs": {
    note: "Connect ideas with words such as primero, después, and finalmente.",
    spanish: "Primero desayuné; después, fui al trabajo.",
    english: "First I had breakfast; afterwards, I went to work."
  },
  "Everyday discussions": {
    note: "Invite someone to share their view with ¿Qué opinas de…?",
    spanish: "¿Qué opinas de esta idea?",
    english: "What do you think of this idea?"
  },
  "Subjunctive mood": {
    note: "Wishes and hopes often use the subjunctive after que.",
    spanish: "Espero que lleguemos a tiempo.",
    english: "I hope we arrive on time."
  },
  "Complex grammar": {
    note: "Hypothetical situations commonly pair the imperfect subjunctive with the conditional.",
    spanish: "Si tuviera más tiempo, aprendería italiano.",
    english: "If I had more time, I would learn Italian."
  },
  "Debates and discussions": {
    note: "Acknowledge another view before presenting a careful disagreement.",
    spanish: "Entiendo tu argumento; sin embargo, discrepo.",
    english: "I understand your argument; however, I disagree."
  },
  "Professional conversations": {
    note: "The conditional makes requests sound more polite in professional settings.",
    spanish: "¿Podría enviarme el informe, por favor?",
    english: "Could you send me the report, please?"
  },
  "Advanced listening": {
    note: "Pay attention to time markers and verb tense to follow reported information.",
    spanish: "El portavoz aclaró que la medida entraría en vigor el próximo mes.",
    english: "The spokesperson clarified that the measure would take effect next month."
  },
  "Formal and informal writing": {
    note: "Choose pronouns and greetings to match your reader and the level of formality.",
    spanish: "Le agradezco su respuesta. / Te escribo mañana.",
    english: "I appreciate your reply. / I’ll write to you tomorrow."
  },
  "Advanced vocabulary": {
    note: "Precise verbs such as poner de manifiesto can express ideas more clearly.",
    spanish: "El estudio pone de manifiesto varios factores clave.",
    english: "The study highlights several key factors."
  },
  "Academic Spanish": {
    note: "Academic writing uses clear claims supported by evidence.",
    spanish: "Los resultados respaldan la hipótesis inicial.",
    english: "The results support the initial hypothesis."
  },
  "Professional communication": {
    note: "Use courteous, direct language and a clear purpose in professional messages.",
    spanish: "Quedo a su disposición para cualquier consulta.",
    english: "I remain available for any questions."
  },
  "Idiomatic expressions": {
    note: "Idioms have figurative meanings that may differ from their literal words.",
    spanish: "Tomemos cartas en el asunto.",
    english: "Let’s take action on the matter."
  },
  "Complex reading comprehension": {
    note: "Notice contrast words to understand how an author qualifies a claim.",
    spanish: "Aunque la medida fue eficaz, sus efectos duraron poco.",
    english: "Although the measure was effective, its effects did not last long."
  },
  "Advanced writing": {
    note: "Use varied connectors to build a clear, balanced argument.",
    spanish: "Pese a las dificultades, el proyecto sigue adelante.",
    english: "Despite the difficulties, the project is moving forward."
  },
  "Sophisticated expressions": {
    note: "Phrases such as no es que… sino que… let you refine or correct an idea.",
    spanish: "No es que me oponga, sino que quisiera matizar la propuesta.",
    english: "It is not that I object; rather, I would like to qualify the proposal."
  },
  "Cultural understanding": {
    note: "Forms of address and everyday expressions can vary across regions and situations.",
    spanish: "Las formas de tratamiento varían según el país y el contexto.",
    english: "Forms of address vary by country and context."
  },
  "Nuanced conversations": {
    note: "Soften a disagreement by recognizing the other person’s point first.",
    spanish: "Entiendo tu punto; aun así, lo veo de otra manera.",
    english: "I understand your point; even so, I see it differently."
  },
  "Advanced literature": {
    note: "An unreliable narrator may describe events in a way readers should question.",
    spanish: "El narrador no siempre es una fuente fidedigna.",
    english: "The narrator is not always a reliable source."
  },
  "Complex grammatical structures": {
    note: "Inverted conditional clauses can omit si: de haberlo sabido means “if I had known.”",
    spanish: "De haberlo sabido, habría actuado de otro modo.",
    english: "Had I known, I would have acted differently."
  },
  "Near-native communication": {
    note: "Adapt word choice, tone, and register to the people and situation.",
    spanish: "Agradezco mucho que hayas tenido en cuenta mi propuesta.",
    english: "I really appreciate that you took my proposal into account."
  }
};

const glossaryEntries = [
  ["hola", "hello"],
  ["buenos días", "good morning"],
  ["buenas tardes", "good afternoon"],
  ["buenas noches", "good evening"],
  ["adiós", "goodbye"],
  ["por favor", "please"],
  ["gracias", "thank you"],
  ["de nada", "you're welcome"],
  ["¿cómo estás?", "how are you?"],
  ["¿cómo te llamas?", "what is your name?"],
  ["me llamo", "my name is"],
  ["soy de", "I'm from"],
  ["ser", "to be"],
  ["tener", "to have"],
  ["familia", "family"],
  ["madre", "mother"],
  ["padre", "father"],
  ["hermano", "brother"],
  ["hermana", "sister"],
  ["amigo", "friend"],
  ["casa", "house"],
  ["escuela", "school"],
  ["libro", "book"],
  ["comida", "food"],
  ["agua", "water"],
  ["pan", "bread"],
  ["leche", "milk"],
  ["manzana", "apple"],
  ["desayuno", "breakfast"],
  ["¿cuánto cuesta?", "how much does it cost?"],
  ["rojo", "red"],
  ["azul", "blue"],
  ["verde", "green"],
  ["amarillo", "yellow"],
  ["blanco", "white"],
  ["negro", "black"],
  ["lunes", "Monday"],
  ["martes", "Tuesday"],
  ["miércoles", "Wednesday"],
  ["jueves", "Thursday"],
  ["viernes", "Friday"],
  ["sábado", "Saturday"],
  ["domingo", "Sunday"],
  ["enero", "January"],
  ["febrero", "February"],
  ["marzo", "March"],
  ["abril", "April"],
  ["mayo", "May"],
  ["junio", "June"],
  ["julio", "July"],
  ["agosto", "August"],
  ["septiembre", "September"],
  ["octubre", "October"],
  ["noviembre", "November"],
  ["diciembre", "December"],
  ["uno", "one"],
  ["dos", "two"],
  ["tres", "three"],
  ["cuatro", "four"],
  ["cinco", "five"],
  ["seis", "six"],
  ["siete", "seven"],
  ["ocho", "eight"],
  ["nueve", "nine"],
  ["diez", "ten"],
  ["hoy", "today"],
  ["ayer", "yesterday"],
  ["mañana", "tomorrow"],
  ["persona", "person"],
  ["alto", "tall"],
  ["bajo", "short"],
  ["grande", "big"],
  ["pequeño", "small"],
  ["trabajar", "to work"],
  ["levantarse", "to get up"],
  ["despertarse", "to wake up"],
  ["comer", "to eat"],
  ["beber", "to drink"],
  ["hablar", "to speak"],
  ["aprender", "to learn"],
  ["comprar", "to buy"],
  ["viajar", "to travel"],
  ["tienda", "shop"],
  ["zapatos", "shoes"],
  ["izquierda", "left"],
  ["derecha", "right"],
  ["calle", "street"],
  ["cerca", "near"],
  ["lejos", "far"],
  ["opinión", "opinion"],
  ["experiencia", "experience"],
  ["recomendar", "to recommend"],
  ["aunque", "although"],
  ["sin embargo", "however"],
  ["por consiguiente", "therefore"],
  ["investigación", "research"],
  ["pruebas", "evidence"],
  ["propuesta", "proposal"],
  ["estar de acuerdo", "to agree"],
  ["matizar", "to qualify"],
  ["solución", "solution"]
];

function normalizeTranslation(text) {
  return text.toLowerCase()
    .replace(/ñ/g, "\uE000")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\uE000/g, "ñ")
    .replace(/[’‘]/g, "'")
    .replace(/[¿?¡!.,;:]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const translations = new Map();
function addTranslation(spanish, english) {
  translations.set(`es-en:${normalizeTranslation(spanish)}`, english);
  translations.set(`en-es:${normalizeTranslation(english)}`, spanish);
}

levels.forEach((level) => level.phrases.forEach((phrase) => addTranslation(phrase.spanish, phrase.english)));
Object.values(topicDetails).forEach(({ spanish, english }) => addTranslation(spanish, english));
glossaryEntries.forEach(([spanish, english]) => addTranslation(spanish, english));

const picker = document.querySelector("#level-picker");
const form = document.querySelector("#exam-form");
const questionsContainer = document.querySelector("#questions");
const phraseList = document.querySelector("#phrase-list");
const coachCharacter = document.querySelector("#coach-character");
const coachMessage = document.querySelector("#coach-message");
const topicDetail = document.querySelector("#topic-detail");
const topicAudio = document.querySelector("#topic-audio");
const result = document.querySelector("#exam-result");
const submitButton = document.querySelector("#submit-exam");
const translatorForm = document.querySelector("#translator-form");
const translatorDirection = document.querySelector("#translator-direction");
const translatorInput = document.querySelector("#translator-input");
const translatorResult = document.querySelector("#translator-result");
const storageKey = "hola-spanish-cefr-grades-v2";
let currentLevel = 0;
let progressStorageAvailable = true;
let activeUtterance = null;
let activeSpeakerButton = null;
let selectedTopicExample = "";
let completedGrades = loadGrades();

function loadGrades() {
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored === null) return null;
    const saved = Number(stored);
    return Number.isInteger(saved) && saved >= 0 && saved <= 100 ? saved : null;
  } catch {
    progressStorageAvailable = false;
    return null;
  }
}

function saveGrades() {
  try {
    localStorage.setItem(storageKey, String(completedGrades));
  } catch {
    progressStorageAvailable = false;
  }
}

function renderPicker() {
  picker.replaceChildren();
  levels.forEach((level, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "level-button";
    button.setAttribute("aria-pressed", String(index === currentLevel));
    button.setAttribute("aria-label", `Level ${index + 1}: ${level.name}`);
    const number = document.createElement("span");
    number.className = "level-number";
    number.textContent = String(index + 1);
    const label = document.createElement("span");
    label.className = "level-short";
    label.textContent = level.name;
    button.append(number, label);
    button.addEventListener("click", () => selectLevel(index));
    picker.append(button);
  });
  document.querySelector("#progress-pill").textContent = !progressStorageAvailable
    ? "Progress won’t be saved"
    : completedGrades === null
      ? "Exam not taken"
      : `Best exam grade: ${completedGrades}%`;
}

function renderLesson(level) {
  stopSpeech();
  document.querySelector("#level-label").textContent = `LEVEL ${currentLevel + 1} · ${level.name.toUpperCase()}`;
  document.querySelector("#level-title").textContent = level.title;
  document.querySelector("#level-intro").textContent = level.intro;
  const content = document.querySelector("#lesson-content");
  content.replaceChildren();
  topicDetail.hidden = true;
  selectedTopicExample = "";
  level.topics.forEach((topic) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "topic-button";
    button.setAttribute("aria-pressed", "false");
    button.textContent = topic;
    button.addEventListener("click", () => selectTopic(topic, button));
    item.append(button);
    content.append(item);
  });
  renderPhrases(level);
}

function selectTopic(topic, button) {
  const detail = topicDetails[topic];
  if (!detail) {
    coachMessage.textContent = "This topic’s mini-lesson is not available yet.";
    return;
  }

  stopSpeech();
  document.querySelectorAll(".topic-button").forEach((topicButton) => {
    topicButton.setAttribute("aria-pressed", String(topicButton === button));
  });
  document.querySelector("#topic-detail-title").textContent = topic;
  document.querySelector("#topic-detail-note").textContent = detail.note;
  document.querySelector("#topic-example-spanish").textContent = detail.spanish;
  document.querySelector("#topic-example-english").textContent = detail.english;
  selectedTopicExample = detail.spanish;
  topicDetail.hidden = false;
  topicDetail.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

topicAudio.addEventListener("click", () => {
  if (selectedTopicExample) speakSpanish(selectedTopicExample, topicAudio);
});

function stopSpeech() {
  if (activeSpeakerButton) activeSpeakerButton.classList.remove("is-playing");
  activeSpeakerButton = null;
  activeUtterance = null;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  coachCharacter.classList.remove("is-speaking");
}

function speakSpanish(text, button) {
  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    coachMessage.textContent = "Voice playback is not available in this browser. You can still read and practice each phrase.";
    return;
  }

  stopSpeech();
  const utterance = new SpeechSynthesisUtterance(text);
  const spanishVoice = window.speechSynthesis.getVoices().find((voice) => voice.lang.toLowerCase().startsWith("es"));
  utterance.lang = spanishVoice ? spanishVoice.lang : "es-ES";
  if (spanishVoice) utterance.voice = spanishVoice;
  utterance.rate = 0.88;
  activeUtterance = utterance;
  activeSpeakerButton = button;
  coachCharacter.classList.add("is-speaking");
  button.classList.add("is-playing");
  coachMessage.textContent = `Listen to Lola: ${text}`;

  utterance.onend = () => {
    if (activeUtterance !== utterance) return;
    activeUtterance = null;
    activeSpeakerButton = null;
    coachCharacter.classList.remove("is-speaking");
    button.classList.remove("is-playing");
    coachMessage.textContent = `Your turn! Say: ${text}`;
  };
  utterance.onerror = () => {
    if (activeUtterance !== utterance) return;
    activeUtterance = null;
    activeSpeakerButton = null;
    coachCharacter.classList.remove("is-speaking");
    button.classList.remove("is-playing");
    coachMessage.textContent = "Lola couldn't play the audio. Check your device's speech settings and try again.";
  };
  window.speechSynthesis.speak(utterance);
}

function renderPhrases(level) {
  phraseList.replaceChildren();
  coachMessage.textContent = "¡Hola! Tap a speaker, listen closely, then say it with me.";
  level.phrases.forEach((phrase) => {
    const card = document.createElement("article");
    card.className = "phrase-card";
    const text = document.createElement("div");
    text.className = "phrase-text";
    const spanish = document.createElement("strong");
    spanish.lang = "es";
    spanish.textContent = phrase.spanish;
    const english = document.createElement("span");
    english.textContent = phrase.english;
    text.append(spanish, english);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "phrase-audio";
    button.setAttribute("aria-label", `Hear pronunciation: ${phrase.spanish}`);
    button.innerHTML = '<span aria-hidden="true">🔊</span><span class="listen-label">Listen</span>';
    button.addEventListener("click", () => speakSpanish(phrase.spanish, button));
    card.append(text, button);
    phraseList.append(card);
  });
}

function renderExam() {
  questionsContainer.replaceChildren();
  levels.forEach((level, levelIndex) => {
    const section = document.createElement("section");
    section.className = "exam-level";
    const heading = document.createElement("h4");
    heading.textContent = `Level ${levelIndex + 1} · ${level.name}`;
    section.append(heading);

    level.questions.forEach((question, questionIndex) => {
      const questionNumber = levelIndex * 10 + questionIndex;
      const fieldset = document.createElement("fieldset");
      fieldset.className = "question";
      const legend = document.createElement("legend");
      const number = document.createElement("span");
      number.className = "question-number";
      number.textContent = `${questionNumber + 1}.`;
      legend.append(number, document.createTextNode(` ${question.prompt}`));
      fieldset.append(legend);

      question.options.forEach((option, optionIndex) => {
        const label = document.createElement("label");
        label.className = "answer-option";
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `question-${questionNumber}`;
        input.value = String(optionIndex);
        input.required = true;
        label.append(input, document.createTextNode(option));
        fieldset.append(label);
      });
      section.append(fieldset);
    });
    questionsContainer.append(section);
  });
}

function selectLevel(index) {
  currentLevel = index;
  renderPicker();
  renderLesson(levels[index]);
}

function showResult(grade, correctCount) {
  result.replaceChildren();
  result.classList.toggle("needs-review", grade < 70);
  const heading = document.createElement("strong");
  heading.textContent = `Your grade: ${grade}% · ${correctCount} of 60 correct`;
  const message = document.createElement("p");
  message.textContent = grade >= 70
    ? "¡Muy bien! You passed the exam."
    : "Keep practicing and review the answers below before trying again.";
  result.append(heading, message);

  const review = document.createElement("div");
  review.className = "answer-review";
  levels.forEach((level, levelIndex) => {
    level.questions.forEach((question, questionIndex) => {
      const line = document.createElement("p");
      const number = levelIndex * 10 + questionIndex + 1;
      line.textContent = `${number}. ${question.options[question.answer]} — ${question.explanation}`;
      review.append(line);
    });
  });
  result.append(review);

  const retry = document.createElement("button");
  retry.type = "button";
  retry.className = "retry-button";
  retry.textContent = "Try the exam again";
  retry.addEventListener("click", () => {
    form.reset();
    result.hidden = true;
    result.replaceChildren();
    document.querySelector(".exam-card").classList.remove("is-submitted");
    submitButton.disabled = false;
    questionsContainer.querySelectorAll("input").forEach((input) => {
      input.disabled = false;
      input.closest(".answer-option").classList.remove("is-correct", "is-incorrect");
    });
    document.querySelector("#exam").scrollIntoView({ behavior: "smooth" });
  });
  result.append(retry);
  result.hidden = false;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const answers = new FormData(form);
  let correctCount = 0;
  levels.forEach((level, levelIndex) => {
    level.questions.forEach((question, questionIndex) => {
      const questionNumber = levelIndex * 10 + questionIndex;
      const selected = Number(answers.get(`question-${questionNumber}`));
      if (selected === question.answer) correctCount += 1;
      const fieldset = questionsContainer.querySelector(`[name="question-${questionNumber}"]`).closest("fieldset");
      fieldset.querySelectorAll("input").forEach((input, optionIndex) => {
        input.disabled = true;
        if (optionIndex === question.answer) input.closest(".answer-option").classList.add("is-correct");
        if (optionIndex === selected && selected !== question.answer) input.closest(".answer-option").classList.add("is-incorrect");
      });
    });
  });

  const grade = Math.round((correctCount / 60) * 100);
  completedGrades = Math.max(completedGrades || 0, grade);
  saveGrades();
  renderPicker();
  showResult(grade, correctCount);
  submitButton.disabled = true;
  document.querySelector(".exam-card").classList.add("is-submitted");
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

function updateTranslatorPlaceholder() {
  translatorInput.placeholder = translatorDirection.value === "es-en"
    ? "Try hola, buenos días, or me llamo Ana"
    : "Try hello, good morning, or my name is Ana";
}

translatorDirection.addEventListener("change", updateTranslatorPlaceholder);
translatorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!translatorForm.reportValidity()) return;

  const direction = translatorDirection.value;
  const key = `${direction}:${normalizeTranslation(translatorInput.value)}`;
  const translation = translations.get(key);
  translatorResult.replaceChildren();
  translatorResult.classList.toggle("not-found", translation === undefined);

  const heading = document.createElement("span");
  heading.className = "translator-result-label";
  heading.textContent = translation === undefined
    ? "No exact match in the course glossary"
    : direction === "es-en" ? "English translation" : "Traducción al español";
  const text = document.createElement("strong");
  text.textContent = translation === undefined
    ? "Try a lesson word or one of the sample phrases above."
    : translation;
  if (translation !== undefined) text.lang = direction === "es-en" ? "en" : "es";
  translatorResult.append(heading, text);
  translatorResult.hidden = false;
});

selectLevel(0);
renderExam();
updateTranslatorPlaceholder();
