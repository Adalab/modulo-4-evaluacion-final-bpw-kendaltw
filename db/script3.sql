CREATE DATABASE temazos_db;
USE temazos_db;

CREATE TABLE songs (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    artist VARCHAR(50) NOT NULL,
    genre VARCHAR(50)
);

INSERT INTO songs (name, artist, genre)
VALUES 
('Chan Chan','Buena Vista Social Club','Son Cubano'),
('Mercedes Benz','Janis Joplin','Blues Rock'),
('Boogie Wonderland','Earth, Wind & Fire','Funk'),
('Talkin Bout a Revolution','Tracy Chapman','Folk Rock');


INSERT INTO songs (name, artist, genre)
VALUES 
('Lets go back','Jungle','Funk');

SELECT * FROM songs;

UPDATE songs SET name = "The Emptiness Machine", artist = "Linkin Park", genre = "Nu Metal" WHERE id = 6;

DELETE from songs WHERE id = 3;



