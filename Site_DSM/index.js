function openModal(id){
  document.getElementById('overlay-'+id).classList.add('active');
  document.addEventListener('keydown', escHandler);
}

function closeModal(id){
  document.getElementById('overlay-'+id).classList.remove('active');
  document.removeEventListener('keydown', escHandler);
}

function closeOnBackdrop(e,id){
  if(e.target.id === 'overlay-'+id){ closeModal(id); }
}

function escHandler(e){
  if(e.key === 'Escape'){
    document.querySelectorAll('.overlay.active').forEach(o=>o.classList.remove('active'));
  }
}