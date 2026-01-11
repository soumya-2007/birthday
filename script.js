// // // Typing effect
// // const text = "Dear Mummy, You are my world, my strength, and my happiness. Thank you for everything. I love you forever 💕";
// // let i = 0;

// // function typing() {
// //   if (i < text.length) {
// //     document.getElementById("message").innerHTML += text.charAt(i);
// //     i++;
// //     setTimeout(typing, 40);
// //   }
// // }
// // typing();

// // // Slides
// // const slides = [
// //   {img:"mom1.jpg", caption:"My forever hero 💖"},
// //   {img:"mom2.jpg", caption:"Your smile is my happiness"},
// //   {img:"mom3.jpg", caption:"Best mom in the world 🌍"},
// //   {img:"mom4.jpg", caption:"My strength"},
// //   {img:"mom5.jpg", caption:"My queen 👑"},
// //   {img:"mom6.jpg", caption:"My everything"},
// //   {img:"mom7.jpg", caption:"Forever grateful"},
// //   {img:"mom8.jpg", caption:"Pure love"},
// //   {img:"mom9.jpg", caption:"Endless care"},
// //   {img:"mom10.jpg", caption:"My happiness"},
// //   {img:"mom11.jpg", caption:"Blessed to have you"},
// //   {img:"mom12.jpg", caption:"My angel"},
// //   {img:"mom13.jpg", caption:"Always proud of you"},
// //   {img:"mom14.jpg", caption:"My sunshine ☀️"},
// //   {img:"mom15.jpg", caption:"Love you forever 💕"}
// // ];

// // let index = 0;
// // const slide = document.getElementById("slide");
// // const caption = document.getElementById("caption");
// // const music = document.getElementById("bgMusic");

// // // Gift open
// // let opened = false;
// // function openGift() {
// //   if (opened) return;
// //   opened = true;
// //   document.getElementById("lid").classList.add("open");
// //   document.getElementById("slideshow").style.display = "block";
// //   music.src = "music.mp3";
// //   showSlide();
// // }

// // // Show slide
// // function showSlide() {
// //   slide.style.opacity = 0;
// //   setTimeout(() => {
// //     slide.src = slides[index].img;
// //     caption.innerText = slides[index].caption;
// //     slide.style.opacity = 1;
// //   }, 300);
// // }

// // function nextSlide() {
// //   index = (index + 1) % slides.length;
// //   showSlide();
// // }

// // function prevSlide() {
// //   index = (index - 1 + slides.length) % slides.length;
// //   showSlide();
// // }

// // // Auto slideshow
// // setInterval(nextSlide, 4000);

// // // Swipe support
// // let startX = 0;
// // slide.addEventListener("touchstart", e => startX = e.touches[0].clientX);
// // slide.addEventListener("touchend", e => {
// //   let endX = e.changedTouches[0].clientX;
// //   if (startX - endX > 50) nextSlide();
// //   if (endX - startX > 50) prevSlide();
// // });
// // Typing effect
// const text = "Dear Mummy, You are my world, my strength, and my happiness. Thank you for everything. I love you forever 💕";
// let i = 0;

// function typing() {
//   if (i < text.length) {
//     document.getElementById("message").innerHTML += text.charAt(i);
//     i++;
//     setTimeout(typing, 40);
//   }
// }
// typing();

// // Generate 15 slides automatically
// const slides = [];
// for (let n = 1; n <= 15; n++) {
//   slides.push({
//     img: `mom${n}.jpg`,
//     caption: `Birthday memory ${n} 💖` // You can customize captions per image here
//   });
// }

// let index = 0;
// const slide = document.getElementById("slide");
// const caption = document.getElementById("caption");
// const music = document.getElementById("bgMusic");

// // Gift open
// let opened = false;
// function openGift() {
//   if (opened) return;
//   opened = true;
//   document.getElementById("lid").classList.add("open");
//   document.getElementById("slideshow").style.display = "block";

//   // Start background music
//   music.src = "music.mp3";
//   music.play();

//   showSlide();
// }

// // Show slide
// function showSlide() {
//   slide.style.opacity = 0;
//   setTimeout(() => {
//     slide.src = slides[index].img;
//     caption.innerText = slides[index].caption;
//     slide.style.opacity = 1;
//   }, 300);
// }

// // Next/Previous functions
// function nextSlide() {
//   index = (index + 1) % slides.length;
//   showSlide();
// }

// function prevSlide() {
//   index = (index - 1 + slides.length) % slides.length;
//   showSlide();
// }

// // Auto slideshow
// setInterval(nextSlide, 4000);

// // Swipe support for mobile
// let startX = 0;
// slide.addEventListener("touchstart", e => startX = e.touches[0].clientX);
// slide.addEventListener("touchend", e => {
//   let endX = e.changedTouches[0].clientX;
//   if (startX - endX > 50) nextSlide(); // Swipe left → next
//   if (endX - startX > 50) prevSlide(); // Swipe right → prev
// });

// Typing effect
const text = "Dear Mummy, You are my world, my strength, and my happiness. Thank you for everything. I love you forever 💕";
let i=0;
function typing(){ if(i<text.length){ document.getElementById("message").innerHTML+=text.charAt(i); i++; setTimeout(typing,40); } }
typing();

// Slides
const slides = [
  {img:"mom1.jpeg", caption:"My forever hero 💖"},
  {img:"mom2.jpeg", caption:"Your smile is my happiness"},
  {img:"mom3.jpeg", caption:"Best mom in the world 🌍"},
  {img:"mom4.jpeg", caption:"My strength"},
  {img:"mom5.jpeg", caption:"My queen 👑"},
  {img:"mom6.jpeg", caption:"My everything"},
  {img:"mom7.jpeg", caption:"Forever grateful"},
  {img:"mom8.jpeg", caption:"Pure love"},
  {img:"mom9.jpeg", caption:"Endless care"},
  {img:"mom10.jpeg", caption:"My happiness"},
  {img:"mom11.jpeg", caption:"Blessed to have you"},
  {img:"mom12.jpeg", caption:"My angel"},
  {img:"mom13.jpeg", caption:"Always proud of you"},
  {img:"mom14.jpeg", caption:"My sunshine ☀️"},
  {img:"mom15.jpeg", caption:"Love you forever 💕"}
];

let index=0;
const slide=document.getElementById("slide");
const caption=document.getElementById("caption");
const music=document.getElementById("bgMusic");

// Fireworks
function createFirework(){
  const fw=document.createElement("div");
  fw.classList.add("firework");
  const x=Math.random()*window.innerWidth;
  const y=Math.random()*window.innerHeight/2;
  fw.style.left=x+"px";
  fw.style.top=y+"px";
  const dx=(Math.random()-0.5)*100+"px";
  const dy=(Math.random()-0.5)*100+"px";
  fw.style.setProperty("--dx",dx);
  fw.style.setProperty("--dy",dy);
  document.getElementById("fireworks-container").appendChild(fw);
  setTimeout(()=>fw.remove(),600);
}

// Hearts
function createHeart(){
  const heart=document.createElement("div");
  heart.classList.add("heart");
  heart.style.left=Math.random()*100+"vw";
  heart.style.setProperty("--x",(Math.random()-0.5)*100);
  document.getElementById("hearts-container").appendChild(heart);
  setTimeout(()=>heart.remove(),3000);
}

// Gift open
let opened=false;
function openGift(){
  if(opened)return;
  opened=true;
  document.getElementById("lid").classList.add("open");
  document.getElementById("slideshow").style.display="block";
  music.src="music.mp3";
  music.play();
  showSlide();

  // Fireworks & hearts
  const fwInterval=setInterval(createFirework,400);
  const heartInterval=setInterval(createHeart,500);
  setTimeout(()=>{ clearInterval(fwInterval); clearInterval(heartInterval); },10000);
}

// Show slide
function showSlide(){
  slide.style.opacity=0;
  setTimeout(()=>{
    slide.src=slides[index].img;
    caption.innerText=slides[index].caption;
    slide.style.opacity=1;
  },300);
}

function nextSlide(){ index=(index+1)%slides.length; showSlide(); }
function prevSlide(){ index=(index-1+slides.length)%slides.length; showSlide(); }

// Auto slideshow
setInterval(nextSlide,4000);

// Swipe support
let startX=0;
slide.addEventListener("touchstart",e=>startX=e.touches[0].clientX);
slide.addEventListener("touchend",e=>{
  let endX=e.changedTouches[0].clientX;
  if(startX-endX>50) nextSlide();
  if(endX-startX>50) prevSlide();
});
