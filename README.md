[![Waffle.io - Columns and their card count](https://badge.waffle.io/teddim/relationship_app.png?columns=all)](https://waffle.io/teddim/relationship_app?utm_source=badge)
# Relationship App

[Deployed link](http://relationship-app.surge.sh/)

### Schema/ERD for Database
[ERD](https://drive.google.com/file/d/1QXSHpquH37266fL5_dRPYeiIJ2ecnwaq/view?usp=sharing)

### Wireframes
[Wireframes](https://xd.adobe.com/view/7d7d3742-d589-4880-bf49-c2c8658f40d9/)

### A style guide
[Color Scheme](https://www.coolors.co/220901-621708-941b0c-bc3908-f6aa1c)

```
/* RGB */
$color1: rgba(34, 9, 1, 1);
$color2: rgba(98, 23, 8, 1);
$color3: rgba(148, 27, 12, 1); //main
$color4: rgba(188, 57, 8, 1);
$color5: rgba(246, 170, 28, 1);
```

Fonts: Oswald & Quattrocento
```
<link href="https://fonts.googleapis.com/css?family=Oswald|Quattrocento" rel="stylesheet">
```
or
```
<style>
@import url('https://fonts.googleapis.com/css?family=Oswald|Quattrocento');
</style>
```

CSS -
font-family: 'Oswald', sans-serif;
font-family: 'Quattrocento', serif;


### Planning

[Planning Board](https://waffle.io/teddim/relationship_app)



### Server Routes Plan
[Server GitHub repo](https://github.com/teddim/relationship_app_api)
- Auth
  - POST /api/signup Create a new user
  - POST /api/login User login

- Users
  - GET /api/users/:id Retrieve user information
  - DELETE /api/users/:id Delete a user account

- Couples
  - POST /api/couples Create a link between two users
  - DELETE /api/couples Delete the link between two users

- Feelings
  - GET /api/users/:id/feelings/:type Retrieve a user's feelings (loved/unloved)
  - POST /api/users/:id/feelings/:type Post a user's feelings (loved/unloved)
  - PATCH /api/users/:id/feelings/:type Update a user's feelings (loved/unloved)

- Received Scores
  - GET /api/users/:id/received_scores/:type Retrieve a user's scores from their partner (loved/unloved)

- Sent Scores
  - GET /api/users/:id/sent_scores/:type Retrieve a user's scores sent to a partner (loved/unloved)
  - POST /api/users/:id/sent_scores/:type Create a user's scores sent to a partner for the current time period (loved/unloved)
