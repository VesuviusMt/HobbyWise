$(document).ready(function () {
    $('#updatableContent').load('home.html');
});

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

$(document).ready(function () {
    $("#homeOption").click(function (event) {
        $('#updatableContent').load('home.html');
    });
});

$(document).ready(function () {
    $("#batteryManagement").click(function (event) {
        $('#updatableContent').load('battery-management.html');
    });
});
