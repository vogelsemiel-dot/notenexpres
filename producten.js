/* ======================================================================
   HANDLEIDING (producten.js)
   ----------------------------------------------------------------------
   Dit bestand bevat ALLE producten en hun allergenen, gegroepeerd per
   categorie. De website leest de variabele `PRODUCTEN_PER_CATEGORIE`
   en toont daarna de categorie-titels uit `CATEGORIE_TITELS`.

   Snelle regels
   1) Bewerk dit bestand bij voorkeur in VS Code en gebruik:
      Format Document (Shift+Alt+F) zodat komma’s/inspringing kloppen.
   2) Houd je aan de vaste veldnamen per product:
      - naam         : string (verplicht)
      - bevat        : array van allergenen (rood in Excel)
      - kanBevatten  : array van allergenen (geel in Excel)
      - zonder       : array van allergenen (groen in Excel)
      - zieVerpakking: array met allergenen of notities (optioneel)
   3) JSON-achtige syntax: strings tussen quotes, arrays met [ ... ],
      objecten met { ... }. Let op komma’s tussen items.

   Toegestane allergenen (gebruik exact deze schrijfwijze)
   Gluten, Schaaldieren, Ei, Vis, Pinda, Soja, Melk, Noten,
   Selderij, Mosterd, Sesam, Sulfiet, Lupine, Weekdieren

   ----------------------------------------------------------------------
   1) Product toevoegen (meest voorkomend)
   ----------------------------------------------------------------------
   Stap A: Zoek de juiste categorie in `PRODUCTEN_PER_CATEGORIE`,
          bijvoorbeeld "zuidvruchten" of "voordeelassortiment".
   Stap B: Plak onderstaand blok in de juiste categorie-array (tussen
          de [ ... ]), en vul de waarden in.
   Stap C: Let op de komma:
          - Als je plakt TUSSEN andere producten: zorg dat er een komma
            staat tussen de objecten.
          - Het LAATSTE product in de lijst heeft géén komma erachter.

   KOPIEER & PLAK (nieuw product)
   ----------------------------------------------------------------------
   {
     "naam": "NIEUW PRODUCT",
     "bevat": [
       "Pinda"
     ],
     "kanBevatten": [
       "Noten"
     ],
     "zonder": [
       "Gluten",
       "Schaaldieren",
       "Ei",
       "Vis",
       "Soja",
       "Melk",
       "Selderij",
       "Mosterd",
       "Sesam",
       "Sulfiet",
       "Lupine",
       "Weekdieren"
     ],
     "zieVerpakking": []
   }
   ----------------------------------------------------------------------

   Tips
   - Als een allergeen onbekend is of niet zeker: zet het liever in
     `zieVerpakking` als notitie, of laat het veld leeg en verwijs naar
     het etiket (etiket/verpakking blijft leidend).
   - Gebruik 1 consistente productnaam (naam) om dubbelingen te voorkomen.
   - Nieuwe categorie toevoegen?
     1) Voeg een nieuwe key toe in `PRODUCTEN_PER_CATEGORIE`, bijv.
        "mijn-nieuwe-categorie": [ ... ]
     2) Voeg dezelfde key toe in `CATEGORIE_TITELS` met een nette titel.
   ====================================================================== */

// producten.js (leesbare versie)
// Tip: bewerk dit bestand in VS Code en gebruik Format Document (Shift+Alt+F).
// Velden per product:
// - naam: string
// - bevat: [allergenen]
// - kanBevatten: [allergenen]
// - zonder: [allergenen]
// - zieVerpakking: [allergenen of notitie]
//
// Kleuren uit jullie Excel:
// groen = zonder, geel = kanBevatten, rood = bevat
//
// Let op: etiket/verpakking blijft leidend.

var PRODUCTEN_PER_CATEGORIE = {
  "gebrande-noten-en-mixen": [
    {
      "naam": "Luxe mix",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Mix Noten",
      "bevat": [
        "Pinda",
        "Noten"
      ],
      "kanBevatten": [],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Cashewnoten",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Pinda",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Macadamia's",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Pecannoten",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Rozijnencocktail",
      "bevat": [
        "Pinda"
      ],
      "kanBevatten": [
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Seizoenmix",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Witte hazelnoten",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Borrelnoten knoflook",
      "bevat": [
        "Gluten",
        "Pinda",
        "Melk"
       ],
       "kanBevatten": [
        "Noten"
       ],
       "zonder": [
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Gepelde pistache",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Pistache",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Bruine amandelen",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Witte amandelen",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Pepitamix",
      "bevat": [
        "Pinda",
        "Noten"
      ],
      "kanBevatten": [
        "Sesam"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    }
  ],
  "ongebrande-noten-en-mixen": [
    {
      "naam": "Studentenhaver",
      "bevat": [
        "Noten",
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Naturelmix",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Witte hazelnoten",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Bruine hazelnoten",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Pistache",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Gepelde pistache",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Pinda",
      "bevat": [
        "Pinda"
      ],
      "kanBevatten": [
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Pecannoten",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Cashewnoten",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Paranoten",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Macadamianoten",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Bruine amandelen",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Witte amandelen",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Walnoten in dop",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Walnoten",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    }
  ],
  "zoete-noten": [
    {
      "naam": "Suiker Pinda",
      "bevat": [
        "Pinda"
      ],
      "kanBevatten": [
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Suiker amandelen",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Chocomix",
      "bevat": [
        "Gluten",
        "Pinda",
        "Soja",
        "Melk",
        "Noten"
      ],
      "kanBevatten": [
        "Sesam"
      ],
      "zonder": [
        "Schaaldieren",
        "Ei",
        "Vis",
        "Selderij",
        "Mosterd",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Chocopinda puur",
      "bevat": [
        "Pinda",
        "Soja",
        "Melk"
      ],
      "kanBevatten": [
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Chocopinda melk",
      "bevat": [
        "Pinda",
        "Soja",
        "Melk"
      ],
      "kanBevatten": [
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Chocorozijn yoghurt",
      "bevat": [
        "Soja",
        "Melk"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Chocorozijn puur",
      "bevat": [
        "Soja",
        "Melk"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Chocorozijn melk",
      "bevat": [
        "Soja",
        "Melk"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Pindarotsjes melk",
      "bevat": [
        "Pinda",
        "Soja",
        "Melk"
      ],
      "kanBevatten": [
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Pindarotsjes puur",
      "bevat": [
        "Pinda",
        "Soja",
        "Melk"
      ],
      "kanBevatten": [
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Pindarotsjes wit",
      "bevat": [
        "Pinda",
        "Soja",
        "Melk"
      ],
      "kanBevatten": [
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Pindarotsjes caramel-zeezout",
      "bevat": [
        "Pinda",
        "Soja",
        "Melk"
      ],
      "kanBevatten": [
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    }
  ],
  "zuidvruchten": [
    {
      "naam": "Zoete abrikozen",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Ongezwavelde abrikozen",
      "bevat": [],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Zure abrikozen",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Appelringen",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Iran dadels",
      "bevat": [],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Dadels zonder pit",
      "bevat": [],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Medjool dadels",
      "bevat": [],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Vijgen",
      "bevat": [],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Snackvijgen",
      "bevat": [],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Cranberries",
      "bevat": [],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Pruimen",
      "bevat": [],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Pruimen zonder pit",
      "bevat": [],
      "kanBevatten": [
        "Pinda",
        "Noten",
        "Sulfiet"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Tutti frutti",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten",
        "Sesam"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Chileense rozijnen",
      "bevat": [],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Gele rozijnen",
      "bevat": [],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Sultana rozijnen",
      "bevat": [],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Krenten",
      "bevat": [],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    }
  ],
  "ge-tiketteerde-producten-vaste-prijs": [
    {
      "naam": "Sukade",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Sukadeblokjes",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Cassata",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Bigerreaux",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Citroenrasp",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Sinasappelslingers",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Pijnboompitten",
      "bevat": [],
      "kanBevatten": [],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Pinda",
        "Soja",
        "Melk",
        "Noten",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Sezamzaad",
      "bevat": [
        "Sesam"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Amandelspijs",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda",
        "Soja",
        "Melk"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Amandelmarsepijn",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda",
        "Soja",
        "Melk"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Hennepzaad",
      "bevat": [],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Moerbeibessen",
      "bevat": [],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Chiazaad",
      "bevat": [],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Gojibessen",
      "bevat": [],
      "kanBevatten": [
        "Pinda",
        "Noten",
        "Sulfiet"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Granola",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Muesli",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Salademix",
      "bevat": [
        "Noten",
        "Mosterd"
      ],
      "kanBevatten": [
        "Pinda",
        "Selderij"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Superfoodmix",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Salademix",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Rookamandelen",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Chocoladerozijnen",
      "bevat": [
        "Soja",
        "Melk"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Chocolademacedamia's",
      "bevat": [
        "Soja",
        "Melk",
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Acacia honing",
      "bevat": [],
      "kanBevatten": [],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Pinda",
        "Soja",
        "Melk",
        "Noten",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Weidebloemenhoning",
      "bevat": [],
      "kanBevatten": [],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Pinda",
        "Soja",
        "Melk",
        "Noten",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Weidebloemen creme honing",
      "bevat": [],
      "kanBevatten": [],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Pinda",
        "Soja",
        "Melk",
        "Noten",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Zeeuwse honing",
      "bevat": [],
      "kanBevatten": [],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Pinda",
        "Soja",
        "Melk",
        "Noten",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Pindakaas 100% pinda",
      "bevat": [
        "Pinda"
      ],
      "kanBevatten": [
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Notenpasta",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Stemgember",
      "bevat": [],
      "kanBevatten": [],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Pinda",
        "Soja",
        "Melk",
        "Noten",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Bakgember",
      "bevat": [],
      "kanBevatten": [],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Pinda",
        "Soja",
        "Melk",
        "Noten",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Gembersiroop",
      "bevat": [],
      "kanBevatten": [],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Pinda",
        "Soja",
        "Melk",
        "Noten",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Gemalen kokos",
      "bevat": [],
      "kanBevatten": [],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Pinda",
        "Soja",
        "Melk",
        "Noten",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Sneeuwamandelen",
      "bevat": [
        "Soja",
        "Melk",
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Kaneelamandelen",
      "bevat": [
        "Soja",
        "Melk",
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Amandelgriesmeel",
      "bevat": [
        "Gluten",
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Vruchtengriesmeel",
      "bevat": [
        "Gluten"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten",
        "Sulfiet"
      ],
      "zonder": [
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Citroenrasp",
      "bevat": [],
      "kanBevatten": [],
      "zonder": [],
      "zieVerpakking": []
    }
  ],
  "voordeelassortiment": [
    {
      "naam": "Gedroogde mango",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Gedroogde mango (zonder suiker toegevoegd)",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Papayablokjes groot",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Papayablokjes klein",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Pomeloschijfjes",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Kokosblokjes",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Appelkaneelblokjes",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Ananasblokjes",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Cantaloupe meloen partjes",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Borrelnoten chili",
      "bevat": [
        "Gluten",
        "Pinda",
        "Melk"
      ],
      "kanBevatten": [
        "Noten"
      ],
      "zonder": [
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Kiwi schijfjes",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Bananenchips",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Vruchtenmix",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Cranberries met frambozensmaak",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Gemberblokjes",
      "bevat": [
        "Sulfiet"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten",
        "Sesam"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Lijnzaad",
      "bevat": [],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Gebroken lijnzaad",
      "bevat": [],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Gemengde granen",
      "bevat": [
        "Gluten"
      ],
      "kanBevatten": [
        "Pinda",
        "Soja",
        "Noten",
        "Sesam"
      ],
      "zonder": [
        "Schaaldieren",
        "Ei",
        "Vis",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Havermout",
      "bevat": [
        "Gluten"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Zemelen",
      "bevat": [
        "Gluten"
      ],
      "kanBevatten": [
        "Pinda",
        "Soja",
        "Noten",
        "Sesam"
      ],
      "zonder": [
        "Schaaldieren",
        "Ei",
        "Vis",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Nougatblokjes",
      "bevat": [
        "Melk",
        "Noten"
      ],
      "kanBevatten": [
        "Ei",
        "Pinda",
        "Sesam"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Vis",
        "Soja",
        "Selderij",
        "Mosterd",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Katjang pedis",
      "bevat": [
        "Gluten",
        "Pinda"
      ],
      "kanBevatten": [
        "Noten",
        "Sesam"
      ],
      "zonder": [
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Geisha mix",
      "bevat": [
        "Gluten",
        "Soja"
      ],
      "kanBevatten": [
        "Schaaldieren",
        "Vis",
        "Pinda",
        "Melk",
        "Noten",
        "Sesam",
        "Sulfiet"
      ],
      "zonder": [
        "Ei",
        "Selderij",
        "Mosterd",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Borrelnoten festival",
      "bevat": [
        "Gluten",
        "Pinda"
      ],
      "kanBevatten": [
        "Noten"
      ],
      "zonder": [
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Wasabi nuts",
      "bevat": [
        "Gluten",
        "Pinda",
        "Soja"
      ],
      "kanBevatten": [
        "Vis",
        "Melk",
        "Noten",
        "Selderij",
        "Sesam",
        "Weekdieren"
      ],
      "zonder": [
        "Schaaldieren",
        "Ei",
        "Mosterd",
        "Sulfiet",
        "Lupine"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Hot rice",
      "bevat": [
        "Gluten",
        "Soja"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Schaaldieren",
        "Ei",
        "Vis",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Rigato mix",
      "bevat": [
        "Soja"
      ],
      "kanBevatten": [
        "Schaaldieren",
        "Vis",
        "Pinda",
        "Melk",
        "Noten",
        "Sesam",
        "Sulfiet"
      ],
      "zonder": [
        "Gluten",
        "Ei",
        "Selderij",
        "Mosterd",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Tuinkruiden rounds",
      "bevat": [
        "Gluten",
        "Soja"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Schaaldieren",
        "Ei",
        "Vis",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Sesampeper cracker",
      "bevat": [
        "Melk",
        "Sesam"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Selderij",
        "Mosterd",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Chili rounds",
      "bevat": [
        "Gluten",
        "Soja",
        "Sesam"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Schaaldieren",
        "Ei",
        "Vis",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Original rounds",
      "bevat": [
        "Gluten",
        "Soja"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten",
        "Sesam"
      ],
      "zonder": [
        "Schaaldieren",
        "Ei",
        "Vis",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Mooncracker small",
      "bevat": [
        "Soja",
        "Melk"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten",
        "Sesam"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Selderij",
        "Mosterd",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Mooncracker spicy",
      "bevat": [
        "Soja",
        "Melk"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten",
        "Sesam"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Selderij",
        "Mosterd",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Sojanut cookie's",
      "bevat": [
        "Soja"
      ],
      "kanBevatten": [
        "Gluten",
        "Schaaldieren",
        "Vis",
        "Pinda",
        "Melk",
        "Noten",
        "Sulfiet"
      ],
      "zonder": [
        "Ei",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Teriyaki crackers",
      "bevat": [
        "Gluten",
        "Soja",
        "Sesam"
      ],
      "kanBevatten": [
        "Schaaldieren",
        "Vis",
        "Pinda",
        "Melk",
        "Noten",
        "Sulfiet"
      ],
      "zonder": [
        "Ei",
        "Selderij",
        "Mosterd",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Sushi cheese",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Chinese bollen mix (groot)",
      "bevat": [
        "Gluten",
        "Pinda",
        "Soja",
        "Sesam"
      ],
      "kanBevatten": [
        "Vis",
        "Melk",
        "Noten",
        "Selderij",
        "Weekdieren"
      ],
      "zonder": [
        "Schaaldieren",
        "Ei",
        "Mosterd",
        "Sulfiet",
        "Lupine"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Chinese bollen mix (klein)",
      "bevat": [
        "Gluten",
        "Pinda",
        "Soja",
        "Sesam"
      ],
      "kanBevatten": [
        "Vis",
        "Melk",
        "Noten",
        "Selderij",
        "Weekdieren"
      ],
      "zonder": [
        "Schaaldieren",
        "Ei",
        "Mosterd",
        "Sulfiet",
        "Lupine"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Mexicano's",
      "bevat": [
        "Soja",
        "Melk"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten",
        "Selderij",
        "Mosterd",
        "Sesam"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Walnoot stukjes",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "DopPinda",
      "bevat": [
        "Pinda"
      ],
      "kanBevatten": [
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "VogelPinda",
      "bevat": [
        "Pinda"
      ],
      "kanBevatten": [
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Pofmaïs",
      "bevat": [],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Zoute zonnebloempitten",
      "bevat": [],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Hete pepertjes",
      "bevat": [
        "Gluten"
      ],
      "kanBevatten": [
        "Pinda",
        "Noten"
      ],
      "zonder": [
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Amandelschaafsel",
      "bevat": [
        "Noten"
      ],
      "kanBevatten": [
        "Pinda"
      ],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Kokosslingers",
      "bevat": [],
      "kanBevatten": [],
      "zonder": [
        "Gluten",
        "Schaaldieren",
        "Ei",
        "Vis",
        "Pinda",
        "Soja",
        "Melk",
        "Noten",
        "Selderij",
        "Mosterd",
        "Sesam",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Japanse mix",
      "bevat": [
        "Gluten",
        "Pinda",
        "Soja",
        "Sesam"
      ],
      "kanBevatten": [
        "Noten"
      ],
      "zonder": [
        "Schaaldieren",
        "Ei",
        "Vis",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Jumbo bollenmix",
      "bevat": [
        "Gluten",
        "Pinda",
        "Soja",
        "Sesam"
      ],
      "kanBevatten": [
        "Vis",
        "Melk",
        "Noten",
        "Selderij",
        "Weekdieren"
      ],
      "zonder": [
        "Schaaldieren",
        "Ei",
        "Mosterd",
        "Sulfiet",
        "Lupine"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Fuji mix",
      "bevat": [
        "Gluten",
        "Soja"
      ],
      "kanBevatten": [
        "Schaaldieren",
        "Vis",
        "Pinda",
        "Melk",
        "Noten",
        "Sesam",
        "Sulfiet"
      ],
      "zonder": [
        "Ei",
        "Selderij",
        "Mosterd",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    },
    {
      "naam": "Borrelnoten gemengd",
      "bevat": [
        "Gluten",
        "Pinda"
      ],
      "kanBevatten": [
        "Noten",
        "Sesam"
      ],
      "zonder": [
        "Schaaldieren",
        "Ei",
        "Vis",
        "Soja",
        "Melk",
        "Selderij",
        "Mosterd",
        "Sulfiet",
        "Lupine",
        "Weekdieren"
      ],
      "zieVerpakking": []
    }
  ]
};

var CATEGORIE_TITELS = {
  "gebrande-noten-en-mixen": "Gebrande noten en mixen",
  "ongebrande-noten-en-mixen": "Ongebrande noten en mixen",
  "zoete-noten": "Zoete noten",
  "zuidvruchten": "Zuidvruchten",
  "ge-tiketteerde-producten-vaste-prijs": "Geëtiketteerde producten (vaste prijs)",
  "voordeelassortiment": "Voordeelassortiment"
};
