function sendData() {
    let username1 = $('#user1name').val();
    let username1amount = $('#user1amount').val();
    let username2 = $('#user2name').val();
    let username2amount = $('#user2amount').val();
    let username3 = $('#user3name').val();
    let username3amount = $('#user3amount').val();
    let username4 = $('#user4name').val();
    let username4amount = $('#user4amount').val();
    let username5 = $('#user5name').val();
    let username5amount = $('#user5amount').val();
    console.log(username1)

    $.ajax({
        method: "POST",
        crossDomain: true,
        url: "https://d63f-2402-4000-20c2-39c7-d170-f098-b8cd-d908.ngrok.io/getUsers",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify([
            {
                "username": username1,
                "amount": username1amount
            },
            {
                "username": username2,
                "amount": username2amount
            },
            {
                "username": username3,
                "amount": username3amount
            },
            {
                "username": username4,
                "amount": username4amount
            },
            {
                "username": username5,
                "amount": username5amount
            }
        ]),
        success: function (res) {

            if (res == 'success') {
                window.location.href = "request.html";
            }
        },
        error: function (ob, textStatus, error) {
        }
    });
}

let num = 0

function loadNewItems() {
    num = num + 1
    console.log(num)
    let content = "<div className=\"mb-3\">\n" +
        "        <label className=\"form-label\"> User</label>\n" +
        "        <div className=\"d-flex\">\n" +
        "            <input className=\"form-control\" id=\"username" + num + "\" placeholder=\"username\" type=\"email\"\n" +
        "                   style=\"margin-right:10px\">\n" +
        "                <input className=\"form-control\" id=\"user1amount\" placeholder=\"amount\" type=\"email\">\n" +
        "        </div>\n" +
        "\n" +
        "    </div>"

    let username1 = $('#inputBody').append(content);

}


