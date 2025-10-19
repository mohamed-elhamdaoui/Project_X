function submit() {
    let x = document.getElementById("number").value;
    let result = document.getElementById("result");
    function dooble(a) {
        return a * 2;
    }
    let z = dooble(x);
    result.textContent = z;

}