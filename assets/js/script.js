  // Récupérer la référence du bouton
  let button = document.getElementById('button')

  // Ajouter un gestionnaire d'événement pour le clic sur le bouton
  button.addEventListener('click', function() {
    // Utiliser Swal.fire pour afficher une alerte
    Swal.fire({
      title: 'SweetAlert2',
      text: 'Ceci est une alerte avec SweetAlert2!',
      icon: 'success',
      confirmButtonText: 'OK'
  })
    });