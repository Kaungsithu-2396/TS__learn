function showMsg(msg: string, gender: "Male" | "Female" | "Prefer not to say") {
    return `As released output from depart ${msg} and you are ${gender} `;
}
console.log(showMsg("Welcome", "Male"));

const req = { url: "blahblah.com", method: "GET" as "GET" }; // so that we can't assign others excpet GET
function handleReq(url: string, method: string) {
    return url + "  " + method;
}
