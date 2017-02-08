# Inför gruppuppgiften

Medlemmar: Kristian Lindgren, Anna Fuentes Jakobsen, Christofer Jadelius

Idéer
Miniräknare, Todo-app, Memory-spel, Countdown/timer, Snake-spel.

Interaktion
Vi valde att göra ett memoryspel, anledningen till att det blev memory framför våra andra idéer var att det är roligt att göra ett spel. Det blir även lätt att bygga ut funktionalitet om vi känner att det finns tid över, men initialt så kommer funktionaliteten hållas simpel.

De delar som ska finnas med är följande:

Det ska vara ett rutnät på 3*8 rutor.
Spelplanen som genereras ska ha två matchande symboler.
Poäng ska räknas ut beroende på antal klick eventuellt gå på tid med en timer.

Eventuella extragrejer som kan appliceras beroende på tid:

Rutnätets storlek ska kunna matas in av användaren
Antal matchande symboler ska kunna ändras av användaren

Handlingsplan
Vi kommer tillsammans att ta fram en utvecklingsmiljö så att alla i gruppen arbetar på samma sätt. Eftersom ingen av oss är speciellt bra på React så kommer vi behöva att gå igenom några tutorials på egen hand för att lära oss hur det fungerar. React har inget inbygd testverktyg så det kommer vi behöva kolla på.

Projektet kommer att drivas genom Trello där vi planerar och strukturerar arbetet och kommer versionshanteras genom git med Github.

Alla i gruppen måste få utveckla så vi måste hitta på ett bra sätt att dela upp arbetet så alla får möjlighet att göra alla olika delar i projektet.

Design
Se bilaga 1 för wireframe.

Eventuellt val av ramverk
Vi har valt att använda oss av React. Anledningen till att vi valde React är för att alla i gruppen vill lära sig det. Just nu är React populärt och det ser ut att fler och fler använder sig av det. Alternativet hade varit Angular2 men de blev utkonkurrerat av React på grund av populariteten i gruppen men även eftersom vi redan innan har varit mer sugna att lära sig React. Angular2 är även relativt nytt och det finns inte lika mycket dokumentation för det som de finns för React.

# Sammanfattning

Vi valde att använda React för vårt memoryspel och använde Reacts egna ”create react app” där Jest följde med som testverktyg. För att göra enhetstest på vårt spel så använde vi Enzyme som komplement till Jest. Eftersom ingen av oss hade arbetat med testning innan så valde vi att testa så mycket som möjligt av applikationen. Det slutade med ca 80-90% test coverage.

Vi har inte testat någon annat testverktyg tidigare så vi har inte direkt något att jämföra med men Enzyme fungerade smidigt. I början tog det lite tid att förstå hur testerna skulle skrivas men när vi väl kom igång så flöt det på.



# Reflektion

Arbetet i helhet fungerade bra, ingen av oss hade arbetat med React innan så det var intressant att få pröva på det. Det tog visserligen lite tid att komma in i React så vi var tvungna att skala ner vårt arbete litegrann utifrån hur vi skulle hinna bli klara, dels med projektet i sig men även hinna testa det.

Det var intressant att arbeta med testning eftersom vi inte har gjort det tidigare och vi har pratat med folk som arbetar som utvecklare och de tycker testning är en viktig del som alltid borde göras. Problemet har dock varit att sälja in de till kunden så det är ofta testning inte används.

Eftersom detta var ett grupparbete och React var nytt så försökte vi sitta tillsammans så mycket som möjligt och parprogrammera eller dela upp bitar som alla hade koll på sen tidigare, bland annat de olika designmomenten.
