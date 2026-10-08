var name = "global";

function test() {
    console.log(name);

    var name = "local";
}

test();