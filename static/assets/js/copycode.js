document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.copy-button');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var code = this.previousElementSibling.querySelector('code').innerText;
            navigator.clipboard.writeText(code).then(function () {
            }).catch(function (err) {
                console.error('Failed to copy code: ', err);
            });
        });
    });
});
