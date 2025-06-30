INSERT INTO tb_genre (genre) VALUES ('Drama');
INSERT INTO tb_genre (genre) VALUES ('Horror');
INSERT INTO tb_genre (genre) VALUES ('Science-Fiction');
INSERT INTO tb_genre (genre) VALUES ('Action');
INSERT INTO tb_genre (genre) VALUES ('Adventure');
INSERT INTO tb_genre (genre) VALUES ('Romance');
INSERT INTO tb_genre (genre) VALUES ('Anime');

-- Horror and Drama movies
INSERT INTO tb_movie (name, premiered, rating, summary, image) VALUES ('Penny Dreadful', 2014, 8.2, 'Penny Dreadful is a gothic horror drama series that weaves together characters from classic Victorian literature like Frankenstein, Dracula, and Dorian Gray, set in the dark corners of London. The show follows Vanessa Ives, an enigmatic and powerful medium, as she and Sir Malcolm Murray, an explorer, search for his missing daughter, Mina. They are joined by Ethan Chandler, an American gunslinger with a dark past, and Victor Frankenstein, who is bringing his creature to life', 'https://static.tvmaze.com/uploads/images/original_untouched/48/122260.jpg');
INSERT INTO tb_movie (name, premiered, rating, summary, image) VALUES ('Channel Zero', 2016, 7.1, 'Get ready for some thrills and chills with Channel Zero, a horror anthology series. Each six hour installment draws inspiration from a different ‘creepypasta’ (user‑generated horror stories published online', 'https://static.tvmaze.com/uploads/images/original_untouched/167/419468.jpg');

-- Horror and Drama movies
INSERT INTO tb_movie_category (movie_id, genre_id) VALUES (1, 2);
INSERT INTO tb_movie_category (movie_id, genre_id) VALUES (1, 1);
INSERT INTO tb_movie_category (movie_id, genre_id) VALUES (2, 1);
INSERT INTO tb_movie_category (movie_id, genre_id) VALUES (2, 2);