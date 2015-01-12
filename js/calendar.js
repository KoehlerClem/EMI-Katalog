
function isValidDate(y, m, d)
    {
	var thisDate = new Date(y,m,1);
	thisDate.setMonth(thisDate.getMonth()+1);
	thisDate.setTime(thisDate.getTime() - 12*3600*1000);
	
	if (d>thisDate.getDate())
		{return false;}
	else
		{return true;}
    }

function getLastDayOfMonth()
{
	var d = getDateFromMemory();
	d.setMonth(d.getMonth()+1);
	d.setDate(1);
	d.setTime(d.getTime() - 12*3600*1000);
	return d.getDate();
}
function putDate(n)
{
	var d = getDateFromMemory();
	d.setDate(n);
	
	
	var returnValue;
	if (returnModus==0) 
		{returnValue = d.getDate()+'.'+(d.getMonth()+1)+'.'+d.getFullYear();}
	else{
		returnValue = getEventtext( d.getFullYear(), d.getMonth(), d.getDate());
		if (!returnValue)
			{returnValue = 'kein Event!';}
	}
	
	document.forms['myform'].elements['datum'].value = returnValue;
}

function setDateToMemory(d)
{
	document.all.date_memory.innerHTML = d.getFullYear()+','+(d.getMonth()+1)+','+d.getDate();
}

function getDateFromMemory()
{
	var s = document.all.date_memory.innerHTML;
	var z = s.split(',');
	return new Date(z[0],z[1]-1,z[2]);
}

function nextMonth()
{
	var d = getDateFromMemory();
	var m = d.getMonth()+1;
	var y = d.getFullYear();
	if ((m+1)>12)
	{
		m = 0;
		y = y + 1;
	}
	d = new Date(y,m,01);
	setDateToMemory(d);
	loadcalendar();
    eventCheck()
}

function prevMonth()
{
	var d = getDateFromMemory();
	var m = d.getMonth()+1;
	var y = d.getFullYear();
	

	if ((m-1)<1)
	{
		m = 11;
		y = y - 1;
	}
	else
	{
		m = m - 2;
	}
	d = new Date(y,m,01);
	setDateToMemory(d);
	
	loadcalendar();
    eventCheck()
}
function iniCalendar()
{
	var d = new Date();
	setDateToMemory(d);
	loadcalendar();
}

function loadcalendar() 
{

	var d = getDateFromMemory();
	var m = d.getMonth(); 
	var y = d.getFullYear();
	document.all.calendar_month.innerHTML = getMonthname(m+1) + ' ' + y;
	var firstD = d;
	firstD.setDate(1);
	var dateDay = firstD.getDay(); 
	dateDay = (dateDay == 0) ? 7: dateDay;
	var entry = '';
	var zahl = '';
	var hD = new Date();
	var bEvent = false;
	for (var i = 1; i <= 42; i++)
	{
		bEvent = false;
		entry = document.getElementById('calendar_entry_'+i);
		zahl = (i+1)-dateDay;
		var dx = new Date(y,m,zahl);

		if (i >= dateDay && isValidDate(y,m,zahl))		
		{
			entry.innerHTML = '<a class=calendar_link href=javascript:putDate('+zahl+')>'+zahl+'</a>';
			entry.hidden = false;
			entry.style.visibility='visible';
			if (!getEventtext(y,m,zahl))
				{entry.style.color='#000000';}
			else{
				entry.style.color='#00FF00';
				entry.title = getEventtext(y,m,zahl);
				bEvent = true;
			}
			if (isHoliday(m,zahl))
				{entry.style.color='#FF0000';}
			else{
				if (!bEvent)
					entry.style.color='000000';
			}
							
			if (hD.getDate() == dx.getDate() && 
				hD.getMonth() == dx.getMonth() && 
				hD.getYear() == dx.getYear())
			{
				entry.style.fontWeight = 'bold';
				entry.style.backgroundColor = '#FFFF33';
			}
			
				
		}
		else
		{
			entry.innerHTML = '';
		
			if (i>= dateDay)
			{
				entry.hidden = true;
				entry.style.border = '0px';
			}
			else
			{
				entry.style.border = '0px';
			}
		} 				  				
	}		
}


function getEventtext(y,m,d)
{
	y = parseInt(y);
	m = parseInt(m);
	d = parseInt(d);
	
	
	m++;
	
	var h = new Array(7);
	
	//exemplarisch nehme ich eine
	//Liste an Festivals her
	h[0] = "22.1.2014|Rap Mayhem Festival, München";
	h[1] = "1.2.2014|Spirit Of Goa, Hamburg";
	h[2] = "16.2.2014|Emergenza Acoustic Festival, Berlin";
	h[3] = "2.3.2014|Skarneval Koblenz, Wehdem";
	h[4] = "12.4.2014|Balinger Rockfestival, Dillingen";
	h[5] = "5.7.2014|HipHop Open, Stuttgart";
	h[6] = "19.7.2014|Feeling Fine Festival, Espelkamp";
	h[7] = "26.7.2014|Beach Party, Duisburg";
	
	var dH;
	var eH;
	for ( var i = 0; i < h.length; i++) {
		
		eH = h[i].split("|");
		
		dH = eH[0].split(".");
		
		if (parseInt(dH[0]) == d && parseInt(dH[1]) == m && parseInt(dH[2]) == y) {
			return eH[1];
		}
	}
	return false;
}


function isHoliday(m,d)
{	
	
	m++;

	var h = new Array(7);
	h[0] = "1.1";
	h[1] = "6.1";
	h[2] = "1.5";
	h[3] = "3.10";
	h[4] = "1.11";
	h[5] = "25.12";
	h[6] = "26.12";
	h[7] = "31.12";
	var iD;
	
	for ( var i = 0; i < h.length; i++) {
		iH = h[i].split(".");
				
		if (iH[0] == d && iH[1] == m) {
			return true;
		}
	}
	
	return false;
	
}


var returnModus = 0;


function setReturnModus(returnIndex)
	{returnModus = returnIndex;}


function getMonthname(monthnumber)
{
	switch(monthnumber)
	{
		case 1:
		  return 'Januar';
		  break;
		case 2:
		  return 'Februar';
		  break;
		case 3:
		  return 'März';
		  break;
		case 4:
		  return 'April';
		  break;
		case 5:
		  return 'Mai';
		  break;
		case 6:
		  return 'Juni';
		  break;
		case 7:
		  return 'Juli';
		  break;
		case 8:
		  return 'August';
		  break;
		case 9:
		  return 'September';
		  break;
		case 10:
		  return 'Oktober';
		  break;
		case 11:
		  return 'November';
		  break;
		case 12:
		  return 'Dezember';
		  break;
		default:
		  return '---';
	}
}