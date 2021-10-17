var matt = [8.5, 10.0, 15.5];
var glossy = [10.0, 11.5, 17, 0];
var calculate = form.calculate;
var reset = form.reset;
var price = document.querySelector('#price');
var countOut = document.querySelector('#countOut');
var sumOut = document.querySelector('#sumOut');
var sum = 0;

calculate.addEventListener('click', function (e) {
    e.preventDefault();

    let count = form.count.value;

    for (var i = 0; i < form.size.length; i++) {

        if (form.size[i].checked == true && form.paper.value == 'matt') {
            price.textContent = matt[i];
            countOut.textContent = count;
            sum = count * matt[i];
            sumOut.textContent = sum;
        }

        if (form.size[i].checked == true && form.paper.value == 'glossy') {
            price.textContent = glossy[i];
            countOut.textContent = count;
            sum = count * glossy[i];
            sumOut.textContent = sum;
        }
    }
})

reset.addEventListener('click', function () {
    price.textContent = 0;
    countOut.textContent = 0;
    sumOut.textContent = 0;
})

function isNumber(event) {
    if ((event.keyCode < 48) || (event.keyCode > 57)) {
        alert('Введите число');
        event.returnValue = false;
    }
}
 