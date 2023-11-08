var tl = gsap.timeline();

tl
    .from("#nav1", {
        opacity: 0,
        y: 20,
        duration: 1
    })
    .from("#nav2", {
        opacity: 0,
        y: 20,
        duration: 1

    })

    .from("#center h1", {
        opacity: 0,
        scale: 1.3,
        duration: 1
    })
    .from("#center button", {
        opacity: 0,
        y: 20,
        duration: 1
    })

    .from(["#img1", "img22"], {

        x: -60,
        scale: 1.6,
        opacity: 0,
        duration: 1
    })
    .from(["#img33", "img44"], {

        x: 60,
        scale: 1.6,
        opacity: 0,
        duration: 1,
        delay: "-1",
    })