$(() => {
    $('#submit').on('click', () => {
        var file = document.getElementById('file').files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function(e) {
                $.ajax({
                    method: 'POST',
                    url: 'http://localhost:3000/',
                    data: {file: e.target.result},
                    success: (data) => {
                        $('#csv').append(data);
                        $('#download').attr('download', 'data.csv');
                        $('#download').attr('href', 'data:application/octet-stream,' + data);
                    }
                });
            }
        }
    });
});