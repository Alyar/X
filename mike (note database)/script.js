function addFootnotes() {
    // verkrijg de data.
    $.getJSON('data.json', function (data) {

        // een variable om straks de tekst in op te slaan.
        var output = "";

        // loop door de array in data.json
        for (var i = 0; i < data.footnotes.length; i++ ) {
            output = output + "<p class='footnote' id=" + data.footnotes[i].referentie + ">" + data.footnotes[i].footnote + "</p>"
        }

        // hier worden de voetnoten aan het document toegevoegd. 
        $('#placeholder').append(output);
    });
}