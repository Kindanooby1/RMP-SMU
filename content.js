console.log("Test message: " + location.href)

setTimeout(test_emails, 15000);

function test_emails() {

    const email_list = document.querySelectorAll('a[href^=mailto]')

    for (const email of email_list) {
        console.log(email);
    }

    console.log("A: " + document.querySelectorAll("a").length);
    console.log("Table length: " + document.querySelectorAll("table").length);
    console.log("Iframes: " + document.querySelectorAll("Iframe").length);
    console.log("List length: " + email_list.length);
    console.log(document.readyState);
    console.log(location.href);
    console.log(window.top);
    console.log(window);
}