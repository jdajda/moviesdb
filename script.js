        function deleteMovies() {
            var checkedBoxes = document.querySelectorAll("input[type='checkbox']:checked");
            for (var i = 0 ; i < checkedBoxes.length; i++) {
                document.getElementById("movieList").removeChild(checkedBoxes[i].parentNode)
            }
        }
        function addMovie() {
            var movieTitle = document.getElementById("inputTitle").value;
            var movieYear = document.getElementById("inputYear").value;
            var movieActors = document.getElementById("inputActors").value;

            if (movieTitle=="" || movieYear == "" || movieActors == "") {
                alert("Musisz wypelnic wszystkie pola");
                return;
            }

            var li = document.createElement("li");
            li.innerHTML = "<input type='checkbox'> " + movieTitle + ", " + movieYear + ", " + movieActors;
            document.getElementById("movieList").appendChild(li);
            document.getElementById("inputTitle").value = "";
            document.getElementById("inputYear").value = "";
            document.getElementById("inputActors").value = "";
        }
        