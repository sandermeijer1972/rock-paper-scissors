let deelnemer = prompt("Hoe heet je?");
if(deelnemer.length < 1) {
    deelnemer = "Onbekende Anonieme Speler die te beroerd is om z'n naam in te vullen";
};
alert("Hoi " + deelnemer + ", welkom bij Rock-Paper-Scissors!");
alert("Je gaat een spelletje spelen tegen de computer. Je mag zelf bepalen uit hoeveel rondes een spel bestaat. Het moet wel een oneven aantal zijn, anders hebben we geen winnaar. Een ronde die gelijk eindigt telt niet mee.");
let rondesTeSpelen = prompt("Hoeveel rondes duurt een spelletje?");
while (rondesTeSpelen%2 == 0) {
    alert("Het spel gaat over een ONEVEN aantal rondes, je hebt nu een even getal gegeven, dus dat moet je veranderen!");
    rondesTeSpelen = prompt("Hoeveel rondes duurt een spelletje?");
};
if (rondesTeSpelen > 15) {
    alert("Om de duur van het spel wel een beetje binnen te perken te houden, hebben we het aantal rondes van " + rondesTeSpelen + " ingekort tot 15.");
    rondesTeSpelen = 15;
};
alert("Je speelt een spel tegen de computer bestaande uit " + rondesTeSpelen + " rondes.");
let ronde = 1;
let jijWint = 0;
let computerWint = 0;
while (ronde <= rondesTeSpelen) {
    const random = Math.random();
    let computer;
    if(random < 0.33) {
        computer = "R";
    } else if(random < 0.67) {
        computer = "P";
    } else {
        computer = "S";
    };
    alert("Oke, daar gaan we! Dit is ronde " + ronde + " (van " + rondesTeSpelen + ")");
    let jij = prompt("Wat speel je? Type een R voor Rock, een P voor Paper of een S voor Scissors");
    let jouwKeuze = jij.toUpperCase();
    while (jouwKeuze !="R" && jouwKeuze !="P" && jouwKeuze !="S") {
        jij = prompt("Je hebt geen geldige keuze ingevuld! Type een R voor Rock, een P voor Paper of een S voor Scissors...");
        jouwKeuze = jij.toUpperCase();
    };
    let jijSpeelt;
    if(jouwKeuze == "R") {
        jijSpeelt = "Rock";
    } else if (jouwKeuze == "P") {
        jijSpeelt = "Paper";
    } else {
        jijSpeelt = "Scissors";
    };
    alert("Jij speelt " + jijSpeelt);
    alert("rapapa.. rapapa... rapapaaa....");
    if(jouwKeuze == "R") {
        if(computer == "R") {
            alert("Zowel jij als de computer speelde Rock, dus dit was een gelijkspel. Deze ronde gaat overnieuw.");
        } else if(computer == "P") {
            alert("De computer speelde Paper en jij Rock, dus de computer wint deze ronde.");
            computerWint++;
            ronde++;
        } else if(computer == "S") {
            alert("De computer speelde Scissors en jij Rock, dus jij wint deze ronde!");
            jijWint++;
            ronde++;
        };
    } else if(jouwKeuze == "P") {
        if(computer == "R") {
            alert("De computer speelde Rock en jij Paper, dus jij wint deze ronde!");
            jijWint++;
            ronde++;
        } else if(computer == "P") {
            alert("Zowel jij als de computer speelde Paper, dus dit was een gelijkspel. Deze ronde gaat overnieuw.");
        } else if(computer == "S") {
            alert("De computer speelde Scissors en jij Paper, dus de computer wint deze ronde.");
            computerWint++;
            ronde++;
        };
    } else if(jouwKeuze == "S") {
        if(computer == "R") {
            alert("De computer speelde Rock en jij Scissors, dus de computer wint deze ronde.");
            computerWint++;
            ronde++;
        } else if(computer == "P") {
            alert("De computer speelde Paper en jij Scissors, dus jij wint deze ronde!");
            jijWint++;
            ronde++;
        } else if(computer == "S") {
            alert("Zowel jij als de computer speelde Scissors, dus dit was een gelijkspel. Deze ronde gaat overnieuw.");
        };
    };
    if(ronde == Math.floor((rondesTeSpelen/2)+1)) {
        if(computerWint>jijWint) {
            alert("Je bent nu bijna halverwege het spel, en de stand is " + computerWint + "-" + jijWint + " in jouw nadeel. Dus even een tandje bij " + deelnemer + "!");
        } else if (jijWint > computerWint) {
            alert("Je bent nu halverwege het spel, en je staat met " + jijWint + "-" + computerWint + " voor. Ga zo door " + deelnemer + "!");
        } else {
            alert("Het spelletje is bijna halverwege en de stand is gelijk, " + jijWint + "-" + computerWint + ". Het kan nog alle kanten op dus!");
        };
    };    
};
if(jijWint > computerWint) {
    alert("Gefeliciteerd " + deelnemer + "! Jij hebt het spelletje gewonnen!!!!! De eindstand is " + jijWint + " tegen " + computerWint + " in jouw voordeel.");
    alert("Bedankt voor het spelen " + deelnemer + ", en wellicht tot een volgende keer!");
} else {
    alert("Helaas " + deelnemer + ", de eindstand is " + computerWint + " tegen " + jijWint + " in het voordeel van de computer, en daarom heeft de computer het spelletje gewonnen...");
    alert("Bedankt voor het spelen " + deelnemer + ", en hopelijk kom je een volgende keer revanche nemen!");
};

