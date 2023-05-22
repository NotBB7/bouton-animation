$(document).ready(function() {
  // Lorsque le bouton est cliqué
  $('#myButton').click(function() {
    // Utiliser Swal.alert pour afficher une alerte
    Swal.alert({
      title: 'SweetAlert2',
      text: 'Ceci est une alerte avec SweetAlert2!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  });
});