var toggleMenu = 1;
		changeHeure();

		function menuwrap(){
			if(toggleMenu == 1){
				$("#cssmenu")[0].style.width = "0px";
				toggleMenu = 1 - toggleMenu;
			} else{
				$("#cssmenu")[0].style.width = "200px";
				toggleMenu = 1 - toggleMenu;
			}	
		}
		
		function changeHeure(){
			date = new Date;
			h = date.getHours();
			m = date.getMinutes();
			s = date.getSeconds();
			if(m < 10)
				m = "0" + m;
			if (s < 10)
				s = "0" + s;
			if(h < 10)
				h = "0" + h;
			
			/*Bon là les valeurs sont pour le test pour que ça change tt les secondes que je vois bien, 
			mais c'est pas comme as qu'il faut faire
			Le js est intelligent et ne recharge pas si les valeurs sont inchangés donc c'est pas dérangeant 
			que le if soit validé toutes les 500ms*/
			
			if (h == 16) { $("#zoneImage")[0].style.backgroundImage = 'url("1600.jpg")' ;}
			else if (h == 17) { $("#zoneImage")[0].style.backgroundImage = 'url("1700.jpg")' ;}
			else if (h == 18) { $("#zoneImage")[0].style.backgroundImage = 'url("1800.jpg")' ;}
			else if (h == 11) { $("#zoneImage")[0].style.backgroundImage = 'url("1100.jpg")' ;}
			else if (h == 15) { $("#zoneImage")[0].style.backgroundImage = 'url("1500.jpg")' ;}
			else if (h == 10) { $("#zoneImage")[0].style.backgroundImage = 'url("1000.jpg")' ;}
			else if (h == 19) { $("#zoneImage")[0].style.backgroundImage = 'url("1900.jpg")' ;}
			else if (h == 07) { $("#zoneImage")[0].style.backgroundImage = 'url("0700.jpg")' ;}
			else if (h == 06) { $("#zoneImage")[0].style.backgroundImage = 'url("0600.jpg")' ;}
			else if (h == 08) { $("#zoneImage")[0].style.backgroundImage = 'url("0800.jpg")' ;}
			else if (h == 23) { $("#zoneImage")[0].style.backgroundImage = 'url("2300.jpg")' ;}
			else if (h == 04) { $("#zoneImage")[0].style.backgroundImage = 'url("0400.jpg")' ;}
			else if (h == 00) { $("#zoneImage")[0].style.backgroundImage = 'url("0000.jpg")' ;}
			else if (h == 13) { $("#zoneImage")[0].style.backgroundImage = 'url("1300.jpg")' ;}
			else if (h == 09) { $("#zoneImage")[0].style.backgroundImage = 'url("0900.jpg")' ;}
			else if (h == 20) { $("#zoneImage")[0].style.backgroundImage = 'url("2000.jpg")' ;}
			else if (h == 22) { $("#zoneImage")[0].style.backgroundImage = 'url("2200.jpg")' ;}
			else if (h == 01) { $("#zoneImage")[0].style.backgroundImage = 'url("0100.jpg")' ;}
			else if (h == 02) { $("#zoneImage")[0].style.backgroundImage = 'url("0200.jpg")' ;}
			else if (h == 12) { $("#zoneImage")[0].style.backgroundImage = 'url("1200.jpg")' ;}
			else if (h == 14) { $("#zoneImage")[0].style.backgroundImage = 'url("1400.jpg")' ;}
			else if (h == 03) { $("#zoneImage")[0].style.backgroundImage = 'url("0300.jpg")' ;}
			else if (h == 21) { $("#zoneImage")[0].style.backgroundImage = 'url("2100.jpg")' ;}
			else { $("#zoneImage")[0].style.backgroundImage = 'url("oops.jpg")' ;}
			$("#horloge").html("<p id='horloge'>" + h + " : " + m + " : " + s + "</p>");//Ca ça change le contenu de la balise #zoneImage
			setTimeout(function(){
				changeHeure();
				}, 500);
		}
		
