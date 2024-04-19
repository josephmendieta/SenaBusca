$(document).ready(function() {
    $('#searchForm').submit(function(event) {
      event.preventDefault();
      var searchTerm = $('#searchInput').val();
      // Aquí puedes realizar la búsqueda con la API que prefieras
      // Por ejemplo, puedes mostrar los resultados en el div #searchResults
      $('#searchResults').html('<p>Resultados para: ' + searchTerm + '</p>');
    });
  });

  $(document).ready(function() {
    // Obtener el elemento video y el botón LSC
    var videoElement = document.getElementById('cameraView');
    var lscButton = document.getElementById('lscButton');
  
    // Abrir el modal al hacer clic en el botón LSC
    lscButton.addEventListener('click', function() {
      $('#cameraModal').modal('show');
      startCamera();
    });
  
    // Función para iniciar la cámara
    function startCamera() {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
          videoElement.srcObject = stream;
        })
        .catch(function(error) {
          console.error('Error al iniciar la cámara: ', error);
        });
    }
  });
  