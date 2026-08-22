/* =========================
   NAVBAR
========================= */

.navbar {
    position: sticky;
    top: 0;
    z - index: 1000;

    width: 100 % ;

    background: #2b1208;



  border-bottom: 2px solid # d4af37;

    box - shadow: 0 5 px 20 px rgba(0, 0, 0, 0.35);
}

.navbar - container {
    max - width: 1450 px;
    height: 96 px;

    margin: 0 auto;
    padding: 0 40 px;

    display: flex;
    align - items: center;
    justify - content: space - between;

    box - sizing: border - box;
}


/* =========================
   LOGO
========================= */

.navbar - logo {
    display: flex;
    align - items: center;

    width: 150 px;
    flex - shrink: 0;
}

.navbar - logo img {
    width: 125 px;
    height: auto;

    display: block;
    object - fit: contain;
}


/* =========================
   NAVIGATION
========================= */

.navbar - links {
    display: flex;
    align - items: center;
    justify - content: center;

    gap: 30 px;

    margin - left: auto;
    margin - right: 35 px;
}

.navbar - links a {
    position: relative;

    color: #ffffff;
    text - decoration: none;

    font - size: 16 px;
    font - weight: 600;

    padding: 35 px 0;

    transition: color 0.3 s ease;
}

.navbar - links a::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: 25 px;

    width: 0;
    height: 2 px;

    background: #d4af37;

    transition: width 0.3 s ease;
}

.navbar - links a: hover {
    color: #d4af37;
}

.navbar - links a: hover::after {
    width: 100 % ;
}


/* =========================
   CALL BUTTON
========================= */

.call - button {
    display: flex;
    align - items: center;
    justify - content: center;

    min - width: 125 px;
    height: 52 px;

    padding: 0 25 px;

    background: #d4af37;
    color: #2b1208;



  text-decoration: none;



  border-radius: 6px;



  font-size: 16px;

  font-weight: 700;



  box-shadow: 0 5px 18px rgba(212, 175, 55, 0.25);



  transition: all 0.3s ease;

}



.call-button:hover {

  background: # f0c94a;

    transform: translateY(-2 px);

    box - shadow: 0 8 px 25 px rgba(212, 175, 55, 0.4);
}


/* =========================
   MOBILE MENU BUTTON
========================= */

.menu - button {
    display: none;

    width: 45 px;
    height: 45 px;

    border: 1 px solid# d4af37;
    border - radius: 5 px;

    background: transparent;
    color: #d4af37;

    font - size: 25 px;

    cursor: pointer;
}


/* =========================
   MOBILE MENU
========================= */

.mobile - menu {
    display: none;
}


/* =========================
   TABLET
========================= */

@media(max - width: 1100 px) {

    .navbar - container {
        padding: 0 25 px;
    }

    .navbar - links {
        gap: 18 px;
        margin - right: 20 px;
    }

    .navbar - links a {
        font - size: 14 px;
    }

    .navbar - logo {
        width: 120 px;
    }

    .navbar - logo img {
        width: 105 px;
    }

    .call - button {
        min - width: 105 px;
        padding: 0 18 px;
    }
}


/* =========================
   MOBILE
========================= */

@media(max - width: 850 px) {

        .navbar - container {
            height: 75 px;
            padding: 0 20 px;
        }

        .navbar - logo {
            width: 130 px;
        }

        .navbar - logo img {
            width: 110 px;
        }

        .navbar - links,
            .call - button {
                display: none;
            }

        .menu - button {
            display: flex;

            align - items: center;
            justify - content: center;
        }

        .mobile - menu {
            display: flex;

            flex - direction: column;

            width: 100 % ;

            padding: 15 px 20 px 25 px;

            background: #2b1208;



    border-top: 1px solid rgba(212, 175, 55, 0.4);



    box-sizing: border-box;

  }



  .mobile-menu a {

    padding: 15px 10px;



    color: # ffffff;

            text - decoration: none;

            font - size: 16 px;
            font - weight: 600;

            border - bottom: 1 px solid rgba(212, 175, 55, 0.2);

            transition: 0.3 s ease;
        }

        .mobile - menu a: hover {
            color: #d4af37;
            padding - left: 18 px;
        }

        .mobile - menu.mobile - call {
                margin - top: 15 px;

                text - align: center;

                background: #d4af37;

                color: #2b1208;



    border-radius: 5px;



    border: none;

  }



  .mobile-menu .mobile-call:hover {

    background: # f0c94a;
                color: #2b1208;

  }

}