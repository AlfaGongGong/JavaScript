function onBrojevniUnos() {
  let brojevniUnos = brojevniUnosInput.value;
  let message = ''
  if (brojevniUnos == '') {
    message = 'Niste unijeli ništa'
  } else if (isNaN(brojevniUnos)) {
    message = 'Niste unijeli broj'
  } else if (brojevniUnos < 1 || brojevniUnos > 23) {
    message = 'Unijeli ste broj veći od opsega 1 - 23'
  } else {
    message = 'Unijeli ste ispravan broj'
  }
}
