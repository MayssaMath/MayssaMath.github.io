<script>
    $(document).ready(function() {



        $("#initBtn").click(function() {

            if (localStorage.TodoListe) {
                alert(" vous allez Tout initialise :" + localStorage.TodoListe);
                localStorage.clear(); //effacer tout le contenu de localStorage
                sessionStorage.clear(); //effacer tout le contenu de SessionStorage
                $('table').html(""); // suprimer le contenue de la table
            }
        });


        $("#submitBtn").click(function() {

            var Todo = {
                titre: "",
                desc: "",
                date: "",
                importance: 0
            };
            // initialisation de l'Objet Todo 

            Todo.titre = localStorage.getItem('titre');
            Todo.desc = localStorage.getItem('description');
            Todo.date = localStorage.getItem('date');
            Todo.importance = localStorage.getItem('etat');


            if (!localStorage.TodoListe) {
                var TodoListe_Tab = [];
                // d�finition du tableau TodoListe_Tab
                TodoListe_Tab.push(Todo);
                // Ajouter Todo au tableau TodoListe_Tab

                //On place le tableau en m�moire en transformant le JSON en chaine de caracteres
                localStorage.TodoListe = JSON.stringify(TodoListe_Tab)

            } else {
                var recupTodoListe = JSON.parse(localStorage.TodoListe); // recuperer la chaine TodoListe sauvegard� et la retransforme en tableau
                var TodoListe_Tab = recupTodoListe.splice(0); //permet de cr�er une copie d'un array � partir d'indice 0 
                TodoListe_Tab.push(Todo)
                    // Ajouter Todo au tableau TodoListe_Tab

                //On replace le tableau en m�moire en transformant le JSON en chaine de caracteres

                localStorage.TodoListe = JSON.stringify(TodoListe_Tab)

            }
            $('table').html(""); // suprimer le contenue de la table 

            for (var i = 0; i < TodoListe_Tab.length; i++) {

                // Cr�er les lignes dans la table pour chaque tache

                $('table').append('<tr>' + '<td>' + TodoListe_Tab[i].titre + '</td>' +
                    '<td>' + TodoListe_Tab[i].date + '</td>' +
                    '<td>' + TodoListe_Tab[i].desc + '</td>' +
                    '<td>' + TodoListe_Tab[i].importance + '</td>'

                    +
                    '</tr>');

            }





            $("#formulaire").empty(); // R�initialiser le formulaire avec Jquery

        });

    });
</script>