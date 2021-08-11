function any(variable) {
    console.log(variable)
}
function result(name, callback) {
    callback("Hello " + name);
}
result("Kayel", any)