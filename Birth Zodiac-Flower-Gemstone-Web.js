function zodiac(){
    var birthmonth = document.getElementById("month").value;
    var birthday = document.getElementById("day").value;
    var year = document.getElementById("year").value;
    var chinesezodiacSign = " unknown because you didn't put a valid date.";
    var zodiacSign = " unknown because you didn't put a valid date.";
    var birthStone = " unknown because you didn't put a valid date.";
    var birthFlower = " unknown because you didn't put a valid date.";

    if(year == 1957 || year == 1969 || year == 1981 || year == 1993 || year == 2005){
        chinesezodiacSign = ("Rooster");
        document.getElementById("chinesezodiacPhoto").innerHTML="<img src='./Chinese Zodiac/rooster.png'width=100%>";
    }
    if(year == 1958 || year == 1970 || year == 1982 || year == 1994 || year == 2006){
        chinesezodiacSign = ("Dog");
        document.getElementById("chinesezodiacPhoto").innerHTML="<img src='./Chinese Zodiac/dog.png'width=100%>";
    }
    if(year == 1959 || year == 1971 || year == 1983 || year == 1995 || year == 2007){
        chinesezodiacSign = ("Pig");
        document.getElementById("chinesezodiacPhoto").innerHTML="<img src='./Chinese Zodiac/pig.png'width=100%>";
    }
    if(year == 1960 || year == 1972 || year == 1984 || year == 1996){
        chinesezodiacSign = ("Rat");
        document.getElementById("chinesezodiacPhoto").innerHTML="<img src='./Chinese Zodiac/rat.png'width=100%>";
    }
    if(year == 1961 || year == 1973 || year == 1985 || year == 1997){
        chinesezodiacSign = ("Ox");
        document.getElementById("chinesezodiacPhoto").innerHTML="<img src='./Chinese Zodiac/ox.png'width=100%>";
    }
    if(year == 1962 || year == 1974 || year == 1986 || year == 1998){
        chinesezodiacSign = ("Tiger");
        document.getElementById("chinesezodiacPhoto").innerHTML="<img src='./Chinese Zodiac/tiger.png'width=100%>";
    }
    if(year == 1963 || year == 1975 || year == 1987 || year == 1999){
        chinesezodiacSign = ("Rabbit");
        document.getElementById("chinesezodiacPhoto").innerHTML="<img src='./Chinese Zodiac/rabbit.png'width=100%>";
    }
    if(year == 1964 || year == 1976 || year == 1988 || year == 2000){
        chinesezodiacSign = ("Dragon");
        document.getElementById("chinesezodiacPhoto").innerHTML="<img src='./Chinese Zodiac/dragon.png'width=100%>";
    }
    if(year == 1965 || year == 1977 || year == 1989 || year == 2001){
        chinesezodiacSign = ("Snake");
        document.getElementById("chinesezodiacPhoto").innerHTML="<img src='./Chinese Zodiac/snake.png'width=100%>";
    }
    if(year == 1966 || year == 1978 || year == 1990 || year == 2002){
        chinesezodiacSign = ("Horse");
        document.getElementById("chinesezodiacPhoto").innerHTML="<img src='./Chinese Zodiac/horse.png'width=100%>";
    }
    if(year == 1967 || year == 1979 || year == 1991 || year == 2004){
        chinesezodiacSign = ("Sheep");
        document.getElementById("chinesezodiacPhoto").innerHTML="<img src='./Chinese Zodiac/sheep.png'width=100%>";
    }
    if(year == 1968 || year == 1980 || year == 1992){
        chinesezodiacSign = ("Monkey");
        document.getElementById("chinesezodiacPhoto").innerHTML="<img src='./Chinese Zodiac/monkey.png'width=100%>";
    }

    if (birthmonth == 1){
        birthStone = ("Garnet");
        birthFlower = ("Carnation");
        document.getElementById("birthStonePhoto").innerHTML="<img src='./Birthstone/Birthstone - January.jpg'width=100%>";
        document.getElementById("birthFlowerPhoto").innerHTML="<img src='./Birthflower/Birthflower - January.jpg'width=100%>";
    }
    if (birthmonth == 2){
        birthStone = ("Amethyst");
        birthFlower = ("Primrose");
        document.getElementById("birthStonePhoto").innerHTML="<img src='./Birthstone/Birthstone - February.jpg'width=100%>";
        document.getElementById("birthFlowerPhoto").innerHTML="<img src='./Birthflower/Birthflower - February.jpg'width=100%>";
    }
    if (birthmonth == 3){
        birthStone = ("Aquamarine");
        birthFlower = ("Daffodil");
        document.getElementById("birthStonePhoto").innerHTML="<img src='./Birthstone/Birthstone - March.jpg'width=100%>";
        document.getElementById("birthFlowerPhoto").innerHTML="<img src='./Birthflower/Birthflower - March.jpg'width=100%>";
    }
    if (birthmonth == 4){
        birthStone = ("Diamond");
        birthFlower = ("Daisy");
        document.getElementById("birthStonePhoto").innerHTML="<img src='./Birthstone/Birthstone - April.jpg'width=100%>";
        document.getElementById("birthFlowerPhoto").innerHTML="<img src='./Birthflower/Birthflower - April.jpg'width=100%>";
    }
    if (birthmonth == 5){
        birthStone = ("Emerald");
        birthFlower = ("Lily of the Valley");
        document.getElementById("birthStonePhoto").innerHTML="<img src='./Birthstone/Birthstone - May.jpg'width=100%>";
        document.getElementById("birthFlowerPhoto").innerHTML="<img src='./Birthflower/Birthflower - May.jpg'width=100%>";
    }
    if (birthmonth == 6){
        birthStone = ("Pearl");
        birthFlower = ("Rose");
        document.getElementById("birthStonePhoto").innerHTML="<img src='./Birthstone/Birthstone - June.jpg'width=100%>";
        document.getElementById("birthFlowerPhoto").innerHTML="<img src='./Birthflower/Birthflower - June.jpg'width=100%>";
    }
    if (birthmonth == 7){
        birthStone = ("Ruby");
        birthFlower = ("Larkspur");
        document.getElementById("birthStonePhoto").innerHTML="<img src='./Birthstone/Birthstone - July.jpg'width=100%>";
        document.getElementById("birthFlowerPhoto").innerHTML="<img src='./Birthflower/Birthflower - July.jpg'width=100%>";
    }
    if (birthmonth == 8){
        birthStone = ("Peridot");
        birthFlower = ("Poppy");
        document.getElementById("birthStonePhoto").innerHTML="<img src='./Birthstone/Birthstone - August.jpg'width=100%>";
        document.getElementById("birthFlowerPhoto").innerHTML="<img src='./Birthflower/Birthflower - August.jpg'width=100%>";
    }
    if (birthmonth == 9){
        birthStone = ("Sapphire");
        birthFlower = ("Aster");
        document.getElementById("birthStonePhoto").innerHTML="<img src='./Birthstone/Birthstone - September.jpg'width=100%>";
        document.getElementById("birthFlowerPhoto").innerHTML="<img src='./Birthflower/Birthflower - September.jpg'width=100%>";
    }
    if (birthmonth == 10){
        birthStone = ("Opal");
        birthFlower = ("Marigold");
        document.getElementById("birthStonePhoto").innerHTML="<img src='./Birthstone/Birthstone - October.jpg'width=100%>";
        document.getElementById("birthFlowerPhoto").innerHTML="<img src='./Birthflower/Birthflower - October.jpg'width=100%>";
    }
    if (birthmonth == 11){
        birthStone = ("Topaz");
        birthFlower = ("Chrysanthemum");
        document.getElementById("birthStonePhoto").innerHTML="<img src='./Birthstone/Birthstone - November.jpg'width=100%>";
        document.getElementById("birthFlowerPhoto").innerHTML="<img src='./Birthflower/Birthflower - November.jpg'width=100%>";
    }
    if (birthmonth == 12){
        birthStone = ("Turquoise");
        birthFlower = ("Narcissus");
        document.getElementById("birthStonePhoto").innerHTML="<img src='./Birthstone/Birthstone - December.jpg'width=100%>";
        document.getElementById("birthFlowerPhoto").innerHTML="<img src='./Birthflower/Birthflower - December.jpg'width=100%>";
    }

    if (birthmonth == 1&& birthday >= 20 || birthmonth == 2 && birthday <= 18){
        zodiacSign = ("Aquarius");
        document.getElementById("zodiacPhoto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-aquarius.png'width=100%>";
    }
    if (birthmonth == 2&& birthday >= 19 || birthmonth == 3&& birthday <= 20){
        zodiacSign = ("Pisces");
        document.getElementById("zodiacPhoto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-pisces.png'width=100%>";
    }
    if (birthmonth == 3&& birthday >= 21 || birthmonth == 4 && birthday <= 19){
        zodiacSign = ("Aries");
        document.getElementById("zodiacPhoto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-aries.png'width=100%>";
    }
    if (birthmonth == 4&& birthday >= 20|| birthmonth == 5 && birthday <= 20){
        zodiacSign = ("Taurus");
        document.getElementById("zodiacPhoto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-taurus.png'width=100%>";
    }
    if (birthmonth == 5&& birthday >= 21 || birthmonth == 6 && birthday <= 20){
        zodiacSign = ("Gemini");
        document.getElementById("zodiacPhoto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-gemini.png'width=100%>";
    }
    if (birthmonth == 6&& birthday >= 21 || birthmonth == 7&& birthday <= 22){
        zodiacSign = ("Cancer");
        document.getElementById("zodiacPhoto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-cancer.png'width=100%>";
    }
    if (birthmonth == 7&& birthday >= 23 || birthmonth == 8 && birthday <= 22){
        zodiacSign = ("Leo");
        document.getElementById("zodiacPhoto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-leo.png'width=100%>";
    }
    if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22){
        zodiacSign = ("Virgo");
        document.getElementById("zodiacPhoto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-virgo.png'width=100%>";
    }
    if (birthmonth == 9&& birthday >= 23 || birthmonth == 10&& birthday <= 22){
        zodiacSign = ("Libra");
        document.getElementById("zodiacPhoto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-libra.png'width=100%>";
    }
    if (birthmonth == 10 && birthday >= 23|| birthmonth == 11 && birthday <= 21){
        zodiacSign = ("Scorpio");
        document.getElementById("zodiacPhoto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-scorpio.png'width=100%>";
    }
    if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21){
        zodiacSign = ("Sagittarius");
        document.getElementById("zodiacPhoto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-sagittarius.png'width=100%>";
    }
    if(birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19){
        zodiacSign = ("Capricorn");
        document.getElementById("zodiacPhoto").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-capricorn.png'width=100%>";
    }else if (birthmonth>12||birthday>31){
        alert("Please enter an accurate date ! ");
    }

    document.getElementById("chinesezodiacResult").innerHTML= chinesezodiacSign;
    document.getElementById("zodiacResult").innerHTML= zodiacSign;
    document.getElementById("birthStoneResult").innerHTML= birthStone;
    document.getElementById("birthFlowerResult").innerHTML= birthFlower;
}