<script>
function verif()
{ if(document.f.nom.value == "")
 { alert("Veuillez saisir votre nom et prénom!");  
 };
 if(document.f.cin.value == "") 
 { alert("Veuillez saisir votre CIN!");
  };
  var v = 1,test=0;
  for(i=0;i<document.f.cin.value.length;++i)
  {if(document.f.cin.value.charAt(i) < "0" || document.f.cin.value.charAt(i) > "9" || document.f.cin.value.length!=8) 
  v = -1;
  }
  if(v == -1)
   {alert("Le numérode votre CIN est incorrect!");  
   test+=1;}
  if(document.f.email.value == "") 
    {alert("Veuillez entrer votre adresse e-mail!");}
  if(document.f.email.value.indexOf('@') == -1) 
    { alert("Adresse e-mail incorrecte!"); 
    test+=1;}
  
 var n=0;
 for(i=0;i<document.f.list.options.length;i++)
 {if (document.f.list[i].selected)
     {n+=1};}
 if (n==0)
     {alert("Veuillez choisir un module de formation!");
           }
 if (n>2) 
     {alert("Veuillez sélectionner au maximum 2 choix!");
     test+=1; }
 if(test==0)
 {alert("Inscription validée");}
           }
           </script>