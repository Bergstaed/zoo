var displ = $('.display'),
    displ2 = $('.display2'),
    btn = $('.js-btn');

var i=0;

btn.click(function(){
    i++;
    displ.html('' + i);
});

notiereImVerlauf('start');
hansSchreibWasInsDisplay();

function hansSchreibWasInsDisplay() {
    notiereImVerlauf('Hans am Start');
    uteSchreibWasInsDisplay();
    notiereImVerlauf('Hans hat an Ute abgegeben');
}

function uteSchreibWasInsDisplay() {
    notiereImVerlauf('Ute am Start');
    susiSchreibWasInsDisplayAberScnell();
    notiereImVerlauf('Ute hat an Susi abgegeben');
}

function susiSchreibWasInsDisplayAberScnell() {
    notiereImVerlauf('Susi am Start');
    displ.text('Hi, ich bins, die Susi');
    notiereImVerlauf('Susi hat geschrieben');
}

function notiereImVerlauf(was){
    displ2.html(displ2.html() + '<br>' + was);
}