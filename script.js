

document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById('typewriter');

  if (app) {
      const typewriter = new Typewriter(app, {
          loop: true,
          delay: 75
      });

      typewriter
          .pauseFor(500)
          .typeString("Hi, I'm Sneha Chattoraj")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Welcome to my portfolio 💻")
          .pauseFor(1000)
          .deleteAll()
          .typeString("I am a CSE Undergrad")
          .pauseFor(1000)
          .start();
  }
});
