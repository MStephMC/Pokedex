
$(document).ready(function() {
    $('#example').DataTable({
        "ajax": {
            url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=807",
            dataSrc: "results"
        },
        "columns": [
            {
                data: function(response, b, c, settings) {
                    return settings.row + 1;
                }
            },
            {
                data: "name"
            },
            {
                data: function(response, b, c, settings) {
                    let currentImage = settings.row + 1;
                    let image = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + currentImage + '.png" />';
                    return image;
                }
            }
        ]
    });
});

$(document).ready(function() {
    var table = $('#example').DataTable();
    var i=0;
    $('#example tbody').on( 'click', 'tr', function () {
        //do{
            $(this).toggleClass('selected');
         //   i=i+1;
       // }while(i<11);
    } );
 
    $('#button').click( function () {
        alert( table.rows('.selected').data().length +' row(s) selected' );
    } );
} );





