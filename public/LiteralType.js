"use strict";
function showMsg(msg, gender) {
    return `As released output from depart ${msg} and you are ${gender} `;
}
console.log(showMsg("Welcome", "Male"));
const req = { url: "blahblah.com", method: "GET" }; // so that we can't assign others excpet GET
function handleReq(url, method) {
    return url + "  " + method;
}
