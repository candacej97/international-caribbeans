// Code below is from https://gist.github.com/dvidsilva/e000acc9610b21e43e0a58e5982bd6e9

(function(){
    let newscript = document.createElement('script');
       newscript.type = 'text/javascript';
       newscript.async = true;
       newscript.src = 'https://www.gstatic.com/firebasejs/3.0.2/firebase.js';
    (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(newscript);
})();

_setFormData = function setFormData (sel, data) {
    console.info('setting form to data', data);
    let inputList = document.querySelectorAll(sel + ' [name]');
    [].forEach.call(inputList, function(input) {
        console.log(input);
        if (data[input.name] && data[input.name] !== "undefined") {
          input.value = data[input.name];
        }
    });
};

let _fb;
let fbToForm = function fbToForm (key, sel) {
  _fb = _fb && _fb.name === "fbToForm" ? _fb : firebase.initializeApp(firebaseConfig, "fbToForm");
  _fb.database().ref('user-data/' + key).on('value', function(snapshot) {
      _setFormData(sel, snapshot.val());
  });
};