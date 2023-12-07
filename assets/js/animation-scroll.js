
const progressbar = document.querySelector('#progress');

progressbar.animate(
  [
    { width: 0 },
    { width: "100%" },
  ],
  {
    fill: 'forwards',
    timeline: new ScrollTimeline({
      subject: document.documentElement,
    }),
  }
);


//animate sections

const sections = document.querySelectorAll('section');

for (const section of sections) {

  section.animate(
    [
      { opacity: 0.5, transform: 'translateY(150px)', scale: 0.7 },
      { opacity: 1, transform: 'translateY(0)', scale: 1 }
    ],
    {
      fill: 'both',
      timeline: new ViewTimeline({
        subject: section,

      }),
      rangeStart: 'entry 10%',
      rangeEnd: 'cover 45%',
    }
  );
}

