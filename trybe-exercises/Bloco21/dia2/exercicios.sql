select * from Pixar.BoxOffice;
select * from Pixar.Movies;
SELECT * FROM Pixar.Theater;


-- Exercicio 1 
SELECT m.title, b.domestic_sales, b.international_sales
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id;

-- Exercicio 2
SELECT m.title, b.domestic_sales + b.international_sales
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE b.domestic_sales < b.international_sales;

-- Exercicio 3
SELECT m.title, b.rating
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
ORDER BY b.rating DESC;

-- Exercicio 4
SELECT t.`name`, t.location, m.*
FROM Pixar.Theater AS t
LEFT JOIN Pixar.Movies AS m
ON t.id = m.theater_id;

-- Exercicio 5
SELECT m.* ,t.`name`, t.*
FROM Pixar.Theater AS t
RIGHT JOIN Pixar.Movies AS m
ON t.id = m.theater_id;

-- Exercicio 6
SELECT m.*, b.rating
FROM Pixar.Movies AS m
inner JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE b.rating > 8;
