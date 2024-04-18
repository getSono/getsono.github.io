function copy_effect() {
    var copybtn = document.getElementById("copy-field");
    copybtn.animate(
        [
          { background: '#525252'},
          { background: copybtn.style.backgroundColor}
        ], {
          duration: 300,
          iterations: 1
        }
      );
}