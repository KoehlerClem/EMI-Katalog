<?php

/* Eventdatenbank mit kategorien- und Datumssuche*/

// Kategorien: sport, party, musik,  kultur, outdoor, feiertage
    
//Musterevent:
        $newEvent = array(
            "datum" => $datum = array("tag1","tag2"),
            "kat" => "x",
            "ref" => "x",
            "text" => "x");
        
//Array für alle Events
    $events = array();
        echo "<br>";


//Beispielevents:
    //Sport Events:
        $dresdenPokalspiel = array(
            "datum" => $datum = array("15.06.15"),
            "kat" => "sport",
            "ref" => "dresden.de",
            "text" => "dresden spielt gegen Dortmund im Pokal am...");
        $events[] = $dresdenPokalspiel;

        $frühlingslauf = array(
            "datum" => $datum = array("03.04.15"),
            "kat" => "sport",
            "ref" => "fff.de",
            "text" => "frühlingslauf und so");
        $events[] = $frühlingslauf;

        $saufUndLauf = array(
            "datum" => $datum = array("09.08.15"),
            "kat" => "sport",
            "ref" => "dresden.de",
            "text" => "erst laufen dann saufen");
        $events[] = $saufUndLauf;
    
    // party Events:
        $electroParty = array(
            "datum" => $datum = array("15.06.15"),
            "kat" => "party",
            "ref" => "party.de",
            "text" => "elctroparty");
        $events[] = $electroParty;

        $festival = array(
            "datum" => $datum = array("07.08.15","08.08.15","09.08.15"),
            "kat" => "party",
            "ref" => "brückenfestival.de",
            "text" => "Brückenfestival");
        $events[] = $festival;

        $apocalypse = array(
            "datum" => $datum = array("26.02.15"),
            "kat" => "party",
            "ref" => "party.de",
            "text" => "apocalypse im club blaba");
        $events[] = $apocalypse;


        

// Suchfunktion mit Datum als Eingabe
    function sucheNachDatum ($datum, $inEvents) { 
        $gefundeneEvents = array();
        foreach($inEvents AS $event) {
            foreach($event["datum"] AS $einTag){
                if($einTag==$datum) {
                    $gefundeneEvents[] = $event;    
                    echo "Event am ($datum) gefunden: ";
                    echo $event["text"];
                    echo "<br>";
                }
            }
        }        
        return $gefundeneEvents; // gibt ein Array mit allen zu dieser Kategorie passenden Events zurück
    }

// Suchfunktion mit Kategorie als Eingabe
    function sucheNachKategorie ($kategorie, $inEvents) {
        $gefundeneEvents = array();
        foreach($inEvents AS $event) {
            if($event["kat"]==$kategorie) {
                $gefundeneEvents[] = $event;    
                echo "Event mit Kategorie ($kategorie) gefunden: ";
                echo $event["text"];
                echo "<br>";
            }
        }        
        return $gefundeneEvents; // gibt ein Array mit den an diesem Datum stattfindenden Events zurück
    }

// test der Kategoriensuchfunktion:
    echo "<br> Suche alle Events aus der kategorie Sport: <br><br>";
    $fEvents = sucheNachKategorie ("sport", $events);

    echo "<br> Suche alle Events aus der kategorie party: <br><br>";
    $fEvents = sucheNachKategorie ("party", $events);


// test der Datum Suchfunktion:
    echo "<br> Suche alle Events am 15.06.15: <br><br>";
    $fEvents = sucheNachDatum ("15.06.15", $events);
    
    echo "<br> Suche alle Events am 09.08.15: <br><br>";
    $fEvents = sucheNachDatum ("09.08.15", $events);


?>








