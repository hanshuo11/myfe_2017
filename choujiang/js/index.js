var otabBody = document.getElementsByClassName("tabBody");
var oContent = otabBody[0].getElementsByClassName("content");
document.querySelectorAll('.tabHeader span').forEach(function (item, index) {
    item.addEventListener('click', function () {
        document.querySelectorAll('.tabHeader span').forEach(function (item) {
            item.classList.remove("active");
        })
        this.classList.add("active");
        document.querySelectorAll('.tabBody div').forEach(function (item) {
            item.classList.remove("show");
        })
        oContent[index].classList.add("show");
    })
})
