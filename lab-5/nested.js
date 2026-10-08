function outerFunction() {

    let outerName = "Outer variable";

    function innerFunction() {

        console.log("Inner can read: " + outerName);

    }

    innerFunction();

}

outerFunction();