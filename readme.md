This is an exercise for students to practice and test their back-end skills.

This database contains a list of awesome songs no matter what genre.

In order to use the different endpoints:

To see all the info in the table "temazos_db" you need to type "http://localhost:5003/api/songs" (you could use Postman, for exmaple) and choose the GET option.

To insert a new song to "temazos_db" you would need to type "http://localhost:5003/api/song", choose the POST option, click on body --> raw --> JSON. Here you would need to write your new element to add to the database, filling the columns: name, artist and genre. Such as:

    {
        name: "",
        artist: "",
        genre: ""
    }

To update an existing element in "temazos_db" you would need to type "http://localhost:5003/api/songs/:id" being :id the id of the element you want to update. There, you need to choose PUT --> raw --> JSON. Here you would need to edit the info that you would like to change:

    {
        name: "",
        artist: "",
        genre: ""
    }

To delete an existing element in "temazos_db" you would need to type "http://localhost:5003/api/song/:id", being :id the id of the element you want to delete. There you need to choose DELETE and send. 

