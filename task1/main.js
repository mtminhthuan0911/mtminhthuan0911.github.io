

var owl = $('.owl-carousel');
owl.owlCarousel({
// $('.owl-carousel').owlCarousel({
loop:true,
margin:70,
reponsiveClass:true,
nav:[
        $('.next').click(function() {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owl.trigger('next.owl.carousel', [300]);
        }),

        $('.prev').click(function() {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owl.trigger('prev.owl.carousel', [300]);
        }),
    ],
//     nav:
//     [nextButton.click(function() {
//     owl.trigger('next.owl.carousel');
//     }),
// // Go to the previous item
//     prveButton.click(function() {
// // With optional speed parameter
// // Parameters has to be in square bracket '[]'
//     owl.trigger('prev.owl.carousel', [300]);

//     }),],
// navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
responsive:{
    0:{
        items:1
    },
    700:{
        items:1
    },
    1000:{
        items:3
    },
}
});