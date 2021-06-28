var arrLang = {
    'en' : {
        'home' : 'Home',
        'news' : 'News',
        'about' : 'About',
        'doctors' : 'Doctors',
        'offers' : 'Treatments & Prices',
        'contact' : 'Contact',
        'subtitle' : 'DentaWEB is a modern dental clinic which aims to offer high quality servicies on a budget.',
        'description' : 'DentaWEB is a modern dental clinic which aims to offer high quality servicies on a budget.',
        'services' : 'Services',
        'card1' : 'DentaWEB gives you a free appointment and 20% off for new clients',
        'card2' : 'DentaWEB Card',
        'card3' : 'DentaWEB Card offers you multiple free services and discounts',
        'card5' : 'Discount for children and students',
        'card6' : 'Scaling',
        'card7' : 'For every 10 appointments you get 1 free scaling',
        'title' : 'About us',
        'p1' : 'The dentists experience was always helped by the newest technology in order to '
    },
    'ro' : {
        'home' : 'Acasă',
        'news' : 'Noutăți',
        'about' : 'Despre noi',
        'doctors' : 'Medici',
        'offers' : 'Servicii & Tarife',
        'contact' : 'Contact',
        'subtitle' : 'DentaWEB este o clinică dentară modernă cu dorința de a presta servicii de calitate la un preț accesibil.',
        'services' : 'Servicii',
        'description' : 'DentaWEB este o clinică dentară modernă cu dorința de a presta servicii de calitate la un preț accesibil.',
        'card1' : 'DentaWEB ofera consult gratuit si o reducere de 20% clientilor noi',
        'card2' : 'Card DentaWEB',
        'card3' : 'Cardul DentaWEB iti ofera o multitudine de servicii gratuite si reduceri',
        'card5' : 'Discount pentru studenti si copii',
        'card6' : 'Detartraj',
        'card7' : 'La fiecare 10 vizite beneficiezi de un detartraj gratuit'


    }
};

$(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');

        $('.lang').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        })
    })
})

// pas 1: copiezi scripturile (2 la numar)
// pas 2: adaugi la clasa (sau adaugi clasa) lang
// pas 3: adaugi key pentru fiecare element (vezi ca la navbar sunt aceleasi)
// pas 4: adaugi pe fiecare .html butoanele
// pas 5: scrii traducerile pe js (sa nu uiti de ,)
// pas 6: pwp