function zeig(){
    var such=document.getElementById("suchfeld").value;                                                    //Eingabefeld auslesen
    var date=false;
    if(such.match(/\d{0,2}\.\d{1,2}\.{0,1}\d{0,4}/)){                                                       //wenn Datum in Zahlenform
        date=true;
        var datum=such.split(".");                                                                          //Array mit 2-3 values
        datum[1]=parseInt(datum[1]);
        switch(datum[1]){                                                                                   //weist den passenden Monat zu
            case 1:datum[1]="januar"; break;
            case 2:datum[1]="februar"; break;
            case 3:datum[1]="märz"; break;
            case 4:datum[1]="april"; break;
            case 5:datum[1]="mai"; break;
            case 6:datum[1]="juni"; break;
            case 7:datum[1]="juli"; break;
            case 8:datum[1]="august"; break;
            case 9:datum[1]="september"; break;
            case 10:datum[1]="oktober"; break;
            case 11:datum[1]="november"; break;
            case 12:datum[1]="dezember"; break;             
        }
    }else if(such.match(/\d{1,2}\.[a-z]+/)){                                                                //filtert datum eingaben in zahlen und wort form
        date=true;
       var datum=such.split(".");
    }
    
   if(date==true){                                                                                          // wenn es sich um ein datum handelt"
       if(datum[2]!=null){                                                                                  //wenn jahreszahl gennannt wurde
           if(datum[2].length<4){
               datum[2]="20"+datum[2];
           }
           //JANNIK:Datenbank:Datum[]???
           //JANNIK:window.open("XYZ???_self");
       }   
       else{                                                                                                //kein jahr
           //JANNIK:Datenbank:2015/Datum[]???
           //JANNNIK:window.open("XYZ???_self");
       }
       
   }else{ 
       if(document.getElementById("content").innerHTML.search(such)!=-1/*JANNIK: hier stattdessen !!if(datenbank.getelementbyname(such)!=null*/){                                   //kein datum aber suche erfolgreich
        //JANNIK:Datenbank:getElementbyName();
        //JANNIK:window.open("XYZ???_self");
        }else{
            alert("Es wurde kein Ergebnis gefunden");
        }

   }
}
    


function checkEvent(e){
    if(e.keyCode ==13){
        zeig();
    }
}
 

        
        