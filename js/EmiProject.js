

function zeig(such){
   // var such=this.document.getElementById("suchfeld").value;
    var date=false;
    if(such.match(/\d{0,2}\.\d{1,2}\.{0,1}\d{0,4}/)){                                                       //wenn Datum in Zahlenform
        date=true;
        var datum=such.split(".");                                                                          //Array mit 2-3 values
        datum[1]=parseInt(datum[1]);
        if(parseInt(datum[0])>31){
            alert("Keine valide Eingabe");
            return
        }
        datum[1]=toMonth(datum[1]);
        
        
    }else if(such.match(/\d{1,2}\.[a-z]+/)){                                                                //filtert datum eingaben in zahlen und wort form
        date=true;
       var datum=such.split(".");
        if(datum[0]>31){
            alert("Keine valide Eingabe");
        return
    }
    }
   if(date==true){                                                                                          // wenn es sich um ein datum handelt"
       if(datum[2]!=null){                                                                                  //wenn jahreszahl gennannt wurde
           if(datum[2].length<4 ){
               datum[2]="20"+datum[2];
           }
           gefundeneEvents=sucheNachDatum(datum);
           if(gefundeneEvents.length==0){
               alert("an diesem Tag ist leider kein Event");
               test(datum[1],datum[2]);
           }
           else{
               for(i=0;i<gefundeneEvents.length;i++){
                   alert(gefundeneEvents[i][4]+":"+gefundeneEvents[i][2])
                   test(datum[1],datum[2]);
               }
       }
       }   
       else{
           datum[2]=2015;
            gefundeneEvents=sucheNachDatum(datum);
           if(gefundeneEvents.length==0){
               alert("an diesem Tag ist leider kein Event");
               test(datum[1],datum[2]);
               
           }
           else{
               for(i=0;i<gefundeneEvents.length;i++){
                   alert(gefundeneEvents[i][4]+":"+gefundeneEvents[i][2])
                   test(datum[1],datum[2]);
               }
       }
       }
       
   }else{ 
            alert("Es wurde kein Ergebnis gefunden");
       if(datum[2]==null){
       test(datum[1],2015);
       }else{
       test(datum[1],datum[2]);
       
        }
            }

   }

    


function checkEvent(e){
    //window.document.location.href="./index.html"
    if(e.keyCode ==13){
        x=this.document.getElementById("suchfeld").value;
        zeig(x);
    }
}
function refresh(){
    createEvents();
    eventCheck();
    var sport=document.getElementById("cSport").checked;
    var musik=document.getElementById("cMusik").checked;
    var party=document.getElementById("cParty").checked;
    var kultur=document.getElementById("cKultur").checked;
    var outdoor=document.getElementById("cOutdoor").checked;
    var feiertage=document.getElementById("cFeiertage").checked;
    
    if(sport==true){
        gefundeneEvents=sucheNachKategorie("sport");
               for(i=0;i<gefundeneEvents.length;i++){
                   gefundeneEvents[i][3]="true";
        }
               }
        //JANNIK: Datenbank.Kategorie("Sport").visible=true; bzw für jedes element der kategorie mit for schleife
    else{
        gefundeneEvents=sucheNachKategorie("sport");
               for(i=0;i<gefundeneEvents.length;i++){
                   gefundeneEvents[i][3]="false";
               }
        //JANNIK: Datenbank.Kategorie("Sport").visible=false;
    }
    if(musik==true){
        gefundeneEvents=sucheNachKategorie("musik");
               for(i=0;i<gefundeneEvents.length;i++){
                   gefundeneEvents[i][3]="true";
               }
        //JANNIK:
    }else{
        gefundeneEvents=sucheNachKategorie("musik");
               for(i=0;i<gefundeneEvents.length;i++){
                   gefundeneEvents[i][3]="false";
               }
        //JANNIK:
    }
    if(party==true){
        gefundeneEvents=sucheNachKategorie("party");
               for(i=0;i<gefundeneEvents.length;i++){
                   gefundeneEvents[i][3]="true";
               }
        //JANNIK:
    }else{
        gefundeneEvents=sucheNachKategorie("party");
               for(i=0;i<gefundeneEvents.length;i++){
                   gefundeneEvents[i][3]="false";
               }
        //JANNIK:
    }
    if(kultur==true){
        gefundeneEvents=sucheNachKategorie("kultur");
               for(i=0;i<gefundeneEvents.length;i++){
                   gefundeneEvents[i][3]="true";
               }
        //JANNIK:
    }else{
        gefundeneEvents=sucheNachKategorie("kultur");
               for(i=0;i<gefundeneEvents.length;i++){
                   gefundeneEvents[i][3]="false";
               }
        //JANNIK:
    }
    if(outdoor==true){
        gefundeneEvents=sucheNachKategorie("outdoor");
               for(i=0;i<gefundeneEvents.length;i++){
                   gefundeneEvents[i][3]="true";
               }
        //JANNIK:
    }else{
        gefundeneEvents=sucheNachKategorie("outdoor");
               for(i=0;i<gefundeneEvents.length;i++){
                   gefundeneEvents[i][3]="false";
               }
        //JANNIK:
    }
    if(feiertage==true){
        gefundeneEvents=sucheNachKategorie("feiertage");
               for(i=0;i<gefundeneEvents.length;i++){
                   gefundeneEvents[i][3]="true";
               }
        //JANNIK:
    }else{
        gefundeneEvents=sucheNachKategorie("feiertage");
               for(i=0;i<gefundeneEvents.length;i++){
                   gefundeneEvents[i][3]="false";
               }
        //JANNIK
    }
        
    
       
}


function createEvents(){
    var sport=document.getElementById("cSport").checked;
    var musik=document.getElementById("cMusik").checked;
    var party=document.getElementById("cParty").checked;
    var kultur=document.getElementById("cKultur").checked;
    var outdoor=document.getElementById("cOutdoor").checked;
    var feiertage=document.getElementById("cFeiertage").checked;
    
    // Kategorien: sport, party, musik,  kultur, outdoor, feiertage
    
    var events = new Array();                           //Array für alle Events
    
     //Musterevent: 
        var newEvent = new Array("datum","kategorie","musterEvent_Text","true","newEvent");
            newEvent[0] = new Array("15","august","2015");
            events[0] = newEvent;
    
    //Beispiele:
        var pokalSpiel = new Array("datum","sport","Pokalspiel_zwischen_Dresden_und_Dortmund","false","Pokalspiel");
                        if(sport==true){
                            pokalSpiel[3]="true";
                        }
            pokalSpiel[0] = new Array("7","mai","2015");
            events[1] = pokalSpiel;
    
        var frühlingslauf = new Array("datum","sport","Ein_10km_Fruehlingslauf_an_der_Elbe_entlang","false","Fruehlingslauf");
                if(sport==true){
                            frühlingslauf[3]="true";
                        }
            frühlingslauf[0] = new Array("3","april","2015");
            events[2] = frühlingslauf;
    
        var saufUndLauf = new Array("datum","sport","erst_Laufen_dann_Saufen","false","Sauf_und_Lauf");
            if(sport==true){
                            saufUndLauf[3]="true";
                        }
            saufUndLauf[0] = new Array("23","juni","2015");
            events[3] = saufUndLauf;
    
        var electroParty = new Array("datum","party","electroParty_im_Stereo","false","Electro_Party");
    if(party==true){
                            electroParty[3]="true";
                        }
            electroParty[0] = new Array("23","juni","2015");
            events[4] = electroParty;
    
        var festival = new Array("datum","party","Das_weitbekannte_Brückenfestival","false","Festival");
            if(party==true){
                            festival[3]="true";
                        }
            festival[0] = new Array("9","august","2015");
            events[5] = festival;
        

          return events;

}

// Suchfunktion mit Datum als Eingabe
function sucheNachDatum (suchDatum) { 
       
        var gefundeneEvents = new Array();
        var inEvents = createEvents();
    
        for (var i=0; i<inEvents.length; i++) {
            var event = inEvents[i];
                if(event[0][0] == suchDatum[0] && event[0][1] == suchDatum[1] && event[0][2] == suchDatum[2]) { 
                    gefundeneEvents.push(event);  
                    //alert("1 Event gefunden: am " + suchDatum[0] + suchDatum[1] + suchDatum[2] + " findet " + gefundeneEvents[i][2] + " statt");

                }
            //for (var i=0; i<gefundeneEvents.length; i++) {
                   
           // }
        }
        return gefundeneEvents;
    }



function sucheNachKategorie (suchKat) { 
       
        var gefundeneEvents = new Array();
        var inEvents = createEvents();

        for (var i=0; i<inEvents.length; i++) {
            var event = inEvents[i];
                if(event[1] == suchKat) { 
                    gefundeneEvents.push(event);    
                  // alert("Event gefunden: zum Thema " + suchKat + " findet " + event[2] + " am "  + event[0][0] + event[0][1] + event[0][2] +  " statt");

                }
            
        }
        return gefundeneEvents;
    }
function test(monthSoll,yearSoll){
    a=document.getElementById("calendar_month").innerHTML;
    b=a.split(" ");
    monthIst=b[0].toLowerCase();
    yearIst=b[1];
    m1=toNumber(monthIst);
    m2=toNumber(monthSoll);
    if(m2>12){
    alert("Keine valide Eingabe");
        return;
    }
    if(yearIst<yearSoll){
        nextMonth();
        test(monthSoll,yearSoll);
    }
    if(yearIst>yearSoll){
        prevMonth();
        test(monthSoll,yearSoll);
    }
    if(m1<m2){
    nextMonth();
        test(monthSoll,yearSoll);
    }
    if(m1>m2){
    prevMonth();
        test(monthSoll,yearSoll);
    }
        
}
function toNumber(month){
    switch(month){                                                                                   //weist den passenden Monat zu
            case "januar":month=1; break;
            case "februar":month=2; break;
            case "märz":month=3; break;
            case "april":month=4; break;
            case "mai":month=5; break;
            case "juni":month=6; break;
            case "juli":month=7; break;
            case "august":month=8; break;
            case "september":month=9; break;
            case "oktober":month=10; break;
            case "november":month=11; break;
            case "dezember":month=12; break;
            case parseInt(month)=1:month=1;break;
            case parseInt(month)=2:month=2;break;
            case parseInt(month)=3:month=3;break;
            case parseInt(month)=4:month=4;break;
            case parseInt(month)=5:month=5;break;
            case parseInt(month)=6:month=6;break;
            case parseInt(month)=7:month=7;break;
            case parseInt(month)=8:month=8;break;
            case parseInt(month)=9:month=9;break;
            case parseInt(month)=10:month=10;break;
            case parseInt(month)=11:month=11;break;
            case parseInt(month)=12:month=12;break;
            default:month=13;break;
            
            
    }
    return month;
        }
function eventCheck(){
    for(i=1;i<=42;i++){
    x=document.getElementById("calendar_entry_"+i);
        x.style.backgroundColor="white"
    }
    events=createEvents();
    a=document.getElementById("calendar_month").innerHTML;
    b=a.split(" ");
    monat=b[0].toLowerCase();
    jahr=b[1];
    var passt;
    for(i=0;i<events.length;i++){
        if(events[i][0][1]==monat &&events[i][0][2]==jahr && events[i][3]=="true"){
            for(j=1;j<=42;j++){
                if(document.getElementById("calendar_entry_"+j).childNodes.length==1){
                    for(z=0;z<events.length;z++){
                        if(document.getElementById("calendar_entry_"+j).childNodes[0].childNodes[0].nodeValue==events[i][0][0]){
                            document.getElementById("calendar_entry_"+j).style.backgroundColor="cyan"; 
                            
                    
                        }
                    }
                }
            }
        }
    }
    
    
    
    events=null;

}
function toMonth(datum){
switch(datum){                                                                                   //weist den passenden Monat zu
            case 1:datum="januar"; break;
            case 2:datum="februar"; break;
            case 3:datum="märz"; break;
            case 4:datum="april"; break;
            case 5:datum="mai"; break;
            case 6:datum="juni"; break;
            case 7:datum="juli"; break;
            case 8:datum="august"; break;
            case 9:datum="september"; break;
            case 10:datum="oktober"; break;
            case 11:datum="november"; break;
            case 12:datum="dezember"; break;             
        }
    return datum;
}

function mouseClick(e){
     if(e.target.innerHTML.match(/\d/)!=-1);
        a=document.getElementById("calendar_month").innerHTML;
        b=a.split(" ");
        monat=b[0].toLowerCase();
        jahr=b[1];
        events=createEvents();
                events[i][4]=events[i][4].replace(/\s/g,"_")
                events[i][2]=events[i][2].replace(/\s/g,"_")
                events[i][4]=events[i][4].replace(/ä/g,"ae")
                events[i][4]=events[i][4].replace(/ü/g,"ue")
                events[i][4]=events[i][4].replace(/ö/g,"oe")
                events[i][2]=events[i][2].replace(/ä/g,"ae")
                events[i][2]=events[i][2].replace(/ü/g,"ue")
                events[i][2]=events[i][2].replace(/ö/g,"oe")
            for(i=0; i<events.length;i++){
                if(events[i][0][0]==e.target.innerHTML && events[i][0][1]==monat && events[i][0][2]==jahr && events[i][3]=="true"){
                window.document.location.href="./terminansicht.html?day="+events[i][0][0]+"&month="+events[i][0][1]+"&year="+events[i][0][2]+"&name="+events[i][4]+"&description="+events[i][2];
                
            }
        }
}

function mouseOver(e){
    if(e.target.innerHTML.match(/\d/)!=-1);
        a=document.getElementById("calendar_month").innerHTML;
        b=a.split(" ");
        monat=b[0].toLowerCase();
        jahr=b[1];
        events=createEvents();
        for(i=0; i<events.length;i++){
            if(events[i][0][0]==e.target.innerHTML && events[i][0][1]==monat && events[i][0][2]==jahr && events[i][3]=="true"){
                events[i][4]=events[i][4].replace(/_/g," ")
                events[i][2]=events[i][2].replace(/_/g," ")
                events[i][4]=events[i][4].replace(/ae/g,"ä")
                events[i][4]=events[i][4].replace(/ue/g,"ü")
                events[i][4]=events[i][4].replace(/oe/g,"ö")
                events[i][2]=events[i][2].replace(/ae/g,"ä")
                events[i][2]=events[i][2].replace(/ue/g,"ü")
                events[i][2]=events[i][2].replace(/oe/g,"ö")
            document.getElementById("datum").value=events[i][4]+":"+events[i][2];
                return
            }else{
             document.getElementById("datum").value="kein Event!"
            }
        }
     }

function siteLoad(){
    myhref=window.document.location.href;
        if(myhref.search("index.html")!=-1){
        refresh()
        }
    if(myhref.search("terminansicht.html")!=-1){ 
       datensatz=window.document.location.href.split("?")
       info=datensatz[1].split("&");
            for(i=0;i<info.length;i++){
                info[i]=info[i].replace(/_/g," ")
                info[i]=info[i].replace(/ae/g,"ä")
                info[i]=info[i].replace(/ue/g,"ü")
                info[i]=info[i].replace(/oe/g,"ö")
                info[i]=info[i].split("=")[1]
                
            }
        document.getElementById("terminansicht").innerHTML="<center>"+"Das Event: "+info[3]+", "+info[4]+"<br/><br/>"+"findet am "+info[0]+"."+info[1]+" "+info[2]+" statt"+"<center/>"
    }
}
siteLoad()
    






        
        