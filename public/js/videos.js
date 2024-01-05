const videos = [
    {
        "category": "Walking",
        "name": "Tokyo (Shibuya to Tokyo Tower) - Night",
        "timestart": 50,
        "url": "https://www.youtube.com/watch?v=v5VOTx1YfAg"
    },
    {
        "category": "Walking",
        "name": "Tokyo (Through Shibuya) - Night",
        "timestart": 50,
        "url": "https://www.youtube.com/watch?v=0nTO4zSEpOs"
    },
    {
        "category": "Walking",
        "name": "Tokyo (Through Shinjuku Kabukicho) - Night",
        "timestart": 40,
        "url": "https://www.youtube.com/watch?v=n3Dru5y3ROc"
    },
    {
        "category": "Walking",
        "name": "Tokyo (Roppongi Hills to Tokyo Tower) - Night",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=1aqM14CYb4Y"
    },
    {
        "category": "Walking",
        "name": "Tokyo (Neon) - Night",
        "timestart": 10,
        "url": "https://www.youtube.com/watch?v=pOT7tiRUjao"
    },
    {
        "category": "Walking",
        "name": "Chiba Prefecture (Backstreets Heavy Rain) - Night",
        "timestart": 5,
        "url": "https://www.youtube.com/watch?v=Hndf5JRwUL0"
    },
    {
        "category": "Walking",
        "name": "Tokyo (Narimasu Station) - Night",
        "timestart": 5,
        "url": "https://www.youtube.com/watch?v=5x-_vBSLw6Y"
    },
    {
        "category": "Walking",
        "name": "Aokigahara Forest (Spooky) - Night",
        "timestart": 5,
        "url": "https://www.youtube.com/watch?v=hqsQY-QXI2U"
    },
    {
        "category": "Walking",
        "name": "Seoul (Rain) - Night",
        "timestart": 66,
        "url": "https://www.youtube.com/watch?v=sBtYWK817-0"
    },
    {
        "category": "Walking",
        "name": "Seoul (Mysterious) - Night",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=wYhliE9O_3k"
    },
    {
        "category": "Walking",
        "name": "Seoul (Cyberpunk) - Night",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=I0B21LjeSUQ"
    },
    {
        "category": "Walking",
        "name": "Seoul (Bukchon, Snowfall) - Night",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=I0B21LjeSUQ"
    },
//     {
//         "category": "Walking",
//         "name": "Seoul (Apgujeong Streets, Snowfall) - Day to Night",
//         "timestart": 82,
//         "url": "https://www.youtube.com/watch?v=yfp0pyxKIAU"
//     },
    {
        "category": "Walking",
        "name": "Forest (Rain) - Night",
        "timestart": 30,
        "url": "https://www.youtube.com/watch?v=I-zPNQYHSvU"
    },
    {
        "category": "Walking",
        "name": "Forest (Rain) - Day",
        "timestart": 12,
        "url": "https://www.youtube.com/watch?v=ynLpZGegiJE"
    },
    {
        "category": "Walking",
        "name": "Forest (Snow) - Day",
        "timestart": 23,
        "url": "https://www.youtube.com/watch?v=a_oqcg0hvpo"
    },
    {
        "category": "Walking",
        "name": "Forest (Nakasendo Trail)",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=PpUgBpeJqT0"
    },
    {
        "category": "Walking",
        "name": "NYC - Day",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=u28EnyGxPCg"
    },
    {
        "category": "Walking",
        "name": "NYC (Heavy Rain) - Night",
        "timestart": 10,
        "url": "https://www.youtube.com/watch?v=BOa0zQBRs_M"
    },
    {
        "category": "Walking",
        "name": "NYC (Heavy Rain) - Night 2",
        "timestart": 10,
        "url": "https://www.youtube.com/watch?v=NXObT_Fl-xI"
    },

    {
        "category": "Walking",
        "name": "Manhattan (Busy + Raining) - Night",
        "timestart": 10,
        "url": "https://www.youtube.com/watch?v=eZe4Q_58UTU"
    },
    {
        "category": "Walking",
        "name": "Manhattan (Quiet) - Midnight",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=L_mlofcsRaA"
    },
    {
        "category": "Walking",
        "name": "Manhattan (Snow) - Night",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=iU5QjAbuhec"
    },
    {
        "category": "Walking",
        "name": "Times Square (Snowing) - Night",
        "timestart": 30,
        "url": "https://www.youtube.com/watch?v=F8MN0o6RS9o"
    },
    {
        "category": "Walking",
        "name": "London (Raining) - Night",
        "timestart": 10,
        "url": "https://www.youtube.com/watch?v=N787WRdI35A"
    },
    {
        "category": "Walking",
        "name": "London (Snowing) - Day",
        "timestart": 7,
        "url": "https://www.youtube.com/watch?v=uuO5A9bLZgI"
    },
    {
        "category": "Walking",
        "name": "Moscow (Snowing) - Day",
        "timestart": 32,
        "url": "https://www.youtube.com/watch?v=vDAmd0hTnbs"
    },
    {
        "category": "Walking",
        "name": "Beach (Bora Bora) - Day",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=RvZFYE5jo1M"
    },
    {
        "category": "Walking",
        "name": "Old English Village (England) - Morning",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=RvZFYE5jo1M"
    },
    // {
    //     "category": "Walking",
    //     "name": "Hogwarts Tour (Hogwarts) - Morning",
    //     "timestart": 0,
    //     "url": "https://www.youtube.com/watch?v=RvZFYE5jo1M"
    // },
    {
        "category": "Walking",
        "name": "Distinguished Cosy/Haunted Virtual House Tour - Night",
        "timestart": 198,
        "url": "https://www.youtube.com/watch?v=c86WQBmND8M"
    },
    


















    {
        "category": "Driving",
        "name": "Miami - Night",
        "timestart": 19,
        "url": "https://www.youtube.com/watch?v=Cod_ggrs69U"
    },
    {
        "category": "Driving",
        "name": "Seoul to Seoul - Dusk to Night",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=c1Uqhp5r9Zk"
    },
    {
        "category": "Driving",
        "name": "Seoul to Daeugu - Day to Night",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=Dwswey-GqQc"
    },
    {
        "category": "Driving",
        "name": "Tokyo (Metro Expressway) - Night",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=fEh2l8TcO-Q"
    },
    {
        "category": "Driving",
        "name": "Tokyo (Skyline Expressway) - Sunrise",
        "timestart": 25,
        "url": "https://www.youtube.com/watch?v=B8Yyf6WKgaM"
    },
    {
        "category": "Driving",
        "name": "Tokyo Center - Night",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=p7l6JQApzak"
    },
    {
        "category": "Driving",
        "name": "LA - Day to Night",
        "timestart": 26,
        "url": "https://www.youtube.com/watch?v=lTvYjERVAnY"
    },
    {
        "category": "Driving",
        "name": "Chicago - Day",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=kOMWAnxKq58"
    },
    {
        "category": "Driving",
        "name": "Toronto - Day",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=50Uf_T12OGY"
    },
    {
        "category": "Driving",
        "name": "Hollywood - Afternoon",
        "timestart": 16,
        "url": "https://www.youtube.com/watch?v=S-KdqA_6DII"
    },
    {
        "category": "Driving",
        "name": "NYC (Neon) - Night",
        "url": "https://www.youtube.com/watch?v=n1xkO0_lSU0",
        "timestart": 20
    },
    {
        "category": "Driving",
        "name": "London - Day",
        "url": "https://www.youtube.com/watch?v=QI4_dGvZ5yE",
        "timestart": 25
    },


    














    {
        "category": "Train",
        "name": "Montenegro (Snowing) - Day",
        "timestart": 148,
        "url": "https://www.youtube.com/watch?v=Y53k5YCL93c"
    },
    {
        "category": "Train",
        "name": "Tokyo (Various Lines) - Night 1",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=qJIfavKyYvU"
    },
    {
        "category": "Train",
        "name": "Tokyo (Various) - Night 2",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=QLxqEADKlr8"
    },
    {
        "category": "Train",
        "name": "Tokyo (Yurikamome Line) - Day",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=luclL4J3HAI"
    },
















    {
        "category": "Cycling",
        "name": "NYC POV (Cycling)",
        "url":"https://www.youtube.com/watch?v=Ur9mn5qGc0I",
        "timestart":0
    },
    {
        "category": "Cycling",
        "name": "NYC 3rd Person (Cycling)",
        "url":"https://www.youtube.com/watch?v=RbCzWRnKCaI",
        "timestart":0
    },







    











 

    









    {
        "category": "Aerial",
        "name": "Japan (Aerial)",
        "timestart": 10,
        "url": "https://www.youtube.com/watch?v=qmN1Gf8rRc8"
    },

    {
        "category": "Aerial",
        "name": "Iceland (Aerial)",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=tqeIdpiFxLo"
    },
    {
        "category": "Aerial",
        "name": "Iceland (Glaciers)",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=qFP-nBwxWd4"
    },
    {
        "category": "Aerial",
        "name": "Iceland (Black Sand Beach)",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=TjxO88z16Ro"
    },
    {
        "category": "Aerial",
        "name": "Croatia (Aerial)",
        "timestart": 36,
        "url": "https://www.youtube.com/watch?v=HSsqzzuGTPo"
    },
    {
        "category": "Aerial",
        "name": "Farmland (Aerial)",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=5ZiHkYhWEto"
    },
    {
        "category": "Aerial",
        "name": "The Alps (Aerial)",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=3PZ65s2qLTE"
    },
    {
        "category": "Aerial",
        "name": "The Nordics (Aerial)",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=f5rZ6VYHAgo"
    },
    {
        "category": "Aerial",
        "name": "Positano (Aerial)",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=Khonj4jwBvQ"
    },
    {
        "category": "Aerial",
        "name": "Ireland (Aerial)",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=ycDLfQ1Cv_Y"
    },
    {
        "category": "Aerial",
        "name": "World (Aerial)",
        "timestart": 15,
        "url": "https://www.youtube.com/watch?v=ef1wAfrMg5I"
    },
    {
        "category": "Aerial",
        "name": "Istanbul Sunrise",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=8R39prGh0xI"
    },
    {
        "category": "Aerial",
        "name": "NYC (Aerial)",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=CouF-tNHV3g"
    },
    {
        "category": "Aerial",
        "name": "Billionaires Row, Manhattan (Aerial)",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=i6DRXj-u_6A"
    },
    {
        "category": "Aerial",
        "name": "Midtown Manhattan (Aerial)",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=p_PQ4VyPDEA"
    },
    {
        "category": "Aerial",
        "name": "World (Nature)",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=ITBMT-sUeH0"
    },
    {
        "category": "Aerial",
        "name": "World Ocean",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=FpYWajceIiw"
    },
    {
        "category": "Aerial",
        "name": "Under Red Sea",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=QOdcUvl3IHo"
    },
    {
        "category": "Aerial",
        "name": "Kyoto - 100 Gardens",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=c3uJUrvI2zc"
    },
    {
        "category": "Aerial",
        "name": "Kyoto - Zen Gardens",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=hNsDMm_GE4E"
    },
  
        















    {
        "category": "Animal Cam",
        "name": "Turtles",
        "timestart": 15,
        "url": "https://www.youtube.com/watch?v=yLuEx-XH3Uc"
    },
    {
        "category": "Animal Cam",
        "name": "Brown Bears",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=nprdq03e8yI"
    },
    {
        "category": "Animal Cam",
        "name": "Cows",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=-r8ROxXGXKw"
    },
    {
        "category": "Animal Cam",
        "name": "Cows 2",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=QhLMlA3Wb8w"
    },
    {
        "category": "Animal Cam",
        "name": "Gorillas",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=rgXWDk7rh4w"
    },
    {
        "category": "Animal Cam",
        "name": "African Watering Hole",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=YCF6oamJ0vQ"
    },
    {
        "category": "Animal Cam",
        "name": "Rats",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=KcpGl_FTmlQ"
    },
    {
        "category": "Animal Cam",
        "name": "Cats",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=R7vrbiDi0Tc"
    },
    {
        "category": "Animal Cam",
        "name": "Pandas",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=OObOQ2GElhA"
    },
    {
        "category": "Animal Cam",
        "name": "Coral Reef",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=I6SksxyOFrk"
    },

    {
        "category": "Animal Cam",
        "name": "Otters",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=RNdFaOgCBXc"
    },
    

    














    {
        "category": "City Cam",
        "name": "NYC - Times Square",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=AdUw5RdyZxI"
    },
    {
        "category": "City Cam",
        "name": "Houston - Upper Kirby",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=c5_w4yGHmNQ"
    },
    {
        "category": "City Cam",
        "name": "Seoul - Hangang & Banpo Bridge",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=SmCa3GMVNIM"
    },
    {
        "category": "City Cam",
        "name": "Tokyo - Shiodome Railway",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=QOjmvL3e7Lc"
    },
    {
        "category": "City Cam",
        "name": "Tokyo - Marunouchi Station",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=WlzQuiqIIV4"
    },
    {
        "category": "City Cam",
        "name": "Tokyo - Shinkansen & Ueno-Tokyo Line",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=LtSGLhyX-Oc"
    },
    {
        "category": "City Cam",
        "name": "Tokyo - Shinjuku Crossing",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=RQA5RcIZlAM"
    },
    {
        "category": "City Cam",
        "name": "Venice - Ponte delle Guglie",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=HpZAez2oYsA"
    },
    {
        "category": "City Cam",
        "name": "Melbourne - Flinders St.",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=lSCH7zqG4Bs"
    },
    {
        "category": "City Cam",
        "name": "Switzerland - Palace Central Verbier",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=yDKJMdZTEXQ"
    },
    {
        "category": "City Cam",
        "name": "Various Worldwide Cams",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=8KGXSjtS5pk"
    },
    {
        "category": "City Cam",
        "name": "Earth Orbit (NASA/ISS)",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=XBPjVzSoepo"
    },
    



















    {
        "category": "Dynamic Wallpaper",
        "name": "Study Den (Fireplace + Rain) - Night",
        "timestart": 8,
        "url": "https://www.youtube.com/watch?v=3sL0omwElxw"
    },
    {
        "category": "Dynamic Wallpaper",
        "name": "NYC Window - Night",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=DRbRIXMmHtY"
    },
    {
        "category": "Dynamic Wallpaper",
        "name": "Luxury Apartment (Rain) - Night",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=QUqhgZjrrsE"
    },
    {
        "category": "Dynamic Wallpaper",
        "name": "Luxury Chicago Apartment (Rain) - Night",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=6UsqalA78Wk"
    },
    {
        "category": "Dynamic Wallpaper",
        "name": "Old Library",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=4vIQON2fDWM"
    },
    {
        "category": "Dynamic Wallpaper",
        "name": "Royal Library",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=CHFif_y2TyM"
    },
    {
        "category": "Dynamic Wallpaper",
        "name": "Washington National Park",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=-f9UOL0XTAg"
    },
    {
        "category": "Dynamic Wallpaper",
        "name": "Forest River",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=UDAmAdID7Y8"
    },
    {
        "category": "Dynamic Wallpaper",
        "name": "Particles in Space",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=c5A2sCEJWPQ"
    },
    {
        "category": "Dynamic Wallpaper",
        "name": "Howl's Castle",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=3yxNqOE1dXs"
    },
    {
        "category": "Dynamic Wallpaper",
        "name": "Lake Hylia",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=uSBWLn-zDc4"
    },
    {
        "category": "Dynamic Wallpaper",
        "name": "California Beach",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=nSJ67PGjQfQ"
    },
    {
        "category": "Dynamic Wallpaper",
        "name": "Snowy Village - Dusk",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=ne7g_Os_8hM"
    },
    {
        "category": "Dynamic Wallpaper",
        "name": "Hogwarts Corridor",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=C8AYzPxr_SE"
    },
    





    























    {
        "category": "Space",
        "name": "Milky Way Timelapse 1",
        "timestart": 8,
        "url": "https://www.youtube.com/watch?v=L71nt62ddPk"
    },
    {
        "category": "Space",
        "name": "Milky Way Timelapse 2",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=i7mlhv80A_k"
    },
    {
        "category": "Space",
        "name": "Milky Way Timelapse 3",
        "timestart": 22,
        "url": "https://www.youtube.com/watch?v=XQ28OXLwFl4"
    },
    {
        "category": "Space",
        "name": "Milky Way Timelapse 4",
        "timestart": 18,
        "url": "https://www.youtube.com/watch?v=Z3xkHmC-KQE"
    },
    {
        "category": "Space",
        "name": "Deep Space",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=0k23DVv_xsA"
    },
    {
        "category": "Space",
        "name": "Aurora Borealis",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=WL9EOfzoSsA"
    },
    {
        "category": "Space",
        "name": "Earths Orbit",
        "timestart": 87,
        "url": "https://www.youtube.com/watch?v=7KXGZAEWzn0"
    },
    
    















    {
        "category": "TV",
        "name": "Bob Ross - Season 8",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=ENjAmN_4qzA"
    },
    {
        "category": "TV",
        "name": "Bob Ross - Grandeur of Summer (Special)",
        "timestart": 100,
        "url": "https://www.youtube.com/watch?v=mT0RNrTDHkI"
    },
    {
        "category": "TV",
        "name": "Ghibli",
        "timestart": 0,
        "url": "https://www.youtube.com/watch?v=z9Ug-3qhrwY"
    },
    {
        "category": "TV",
        "name": "90's Saturday Morning Cartoons (Fox)",
        "timestart": 100,
        "url": "https://www.youtube.com/watch?v=8ZSifZ30Cog"
    },
    {
        "category": "TV",
        "name": "90's Saturday Morning Cartoons (Nickelodeon)",
        "timestart": 100,
        "url": "https://www.youtube.com/watch?v=7Y53zvmJsbQ"
    },
    {
        "category": "TV",
        "name": "Rage",
        "timestart": 0,
        "url": "https://youtube.com/playlist?list=PLqDclKaU7dYb_wDnsLwLXfu_dV5iYcND3"
    },
    {
        "category": "TV",
        "name": "Rage 90's",
        "timestart": 0,
        "url": "https://youtube.com/playlist?list=PLDCe4G2FCewCKpwDexE0-loQigCVtMFqL"
    },
    {
        "category": "TV",
        "name": "Rage Iconic Videos '87-'96",
        "timestart": 0,
        "url": "https://www.youtube.com/playlist?list=PLWX6lVDhnhcI9P10RU42QxdQxX8MC9KE2"
    },
    {
        "category": "TV",
        "name": "Rage Iconic Videos '97-'06",
        "timestart": 0,
        "url": "https://www.youtube.com/playlist?list=PLWX6lVDhnhcIV3C4Bh-p1oM8mfCoxj4qf"
    },
    {
        "category": "TV",
        "name": "Rage Iconic Videos '07-'16",
        "timestart": 0,
        "url": "https://www.youtube.com/playlist?list=PLWX6lVDhnhcIutH77U5iARqu3nOXnvE4K"
    },
    {
        "category": "TV",
        "name": "Rage Halloween",
        "timestart": 0,
        "url": "https://www.youtube.com/playlist?list=PLWX6lVDhnhcL0L_HUkSEJSLs_EBxexxlj"
    },






















    // {
    //     "category": "TV",
    //     "name": "Rage Halloween",
    //     "timestart": 0,
    //     "url": "https://www.youtube.com/playlist?list=PLWX6lVDhnhcL0L_HUkSEJSLs_EBxexxlj"
    // },

]
