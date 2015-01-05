function zeig(){
    var such =window.projekt.suchmaschine.eingabe.value.toLowerCase(); //suchmaschine ist html feld, eingabe ist gesuchter text, ändert zu LowerCase
    if(such.match(/\d.\d/){     // filtert Datum eingaben in zahlen form.
        var datum=such.split(".");
        datum[1]=parseInt(datum[1]);
        switch(datum[1]){   //weist den passenden Monat zu
                case 1:datum[1]=januar; break;
                case 2:datum[1]=februar; break;
                case 3:datum[1]=märz; break;
                case 4:datum[1]=april; break;
                case 5:datum[1]=mai; break;
                case 6:datum[1]=juni; break;
                case 7:datum[1]=juli; break;
                case 8:datum[1]=august; break;
                case 9:datum[1]=september; break;
                case 10:datum[1]=oktober; break;
                case 11:datum[1]=november; break;
                case 12:datum[1]=dezember; break;
        }
    if(such.match(/\d.[jfmajsond]/i){    //filtert datum eingaben in zahlen und wort form
       var datum=such.split(".");
}
   if(datum[0]!=null){// wenn es sich um ein datum handelt
       if(datum[2]!=null){//wenn jahreszahl gennannt wurde
           if(datum[2].length<4){
               datum[2]="20"+datum[2];
           }
           ergebnis=projekt.kalender.datum[2].datum[1].datum[0]; //pfad des kalenders
           location.href=ergebnis;//display
}
       else{
           location.href=projekt.kalender.2015.datum[1].datum[0];
       }
       
   }
else{
    location.href=projekt.search(/"such"/i);
}
} /*funtion zeig() verarbeitet die suchanfrage und markiert den Index(falls pfadangabe korrekt/suchergebnis vorhanden) und sollte auch ihre position mit href anzeigen
*die Pfadnamen sind ausgedacht und sollten deshalb umbenannt werden oder das projekt wird angepasst
*/
    

        
        