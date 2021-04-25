function insert(num){
  const number = document.getElementById('visor').innerHTML;
  document.getElementById('visor').innerHTML = number + num
}

function cleanVisor(){
  document.getElementById('visor').innerHTML = ''
}

function result(){
  var visor = document.getElementById('visor').innerHTML;
  if(visor){
    document.getElementById('visor').innerHTML =eval(visor)
  }else{
    document.getElementById('visor').innerHTML = ''
  }
}