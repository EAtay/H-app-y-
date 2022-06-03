import data from "./config.json" assert { type: "json" };
export default function card() {
  let splitPlans = data.plans;
  let splitTestimonials = data.testimonials;
  let link = data.appStoreLink;
  const [firstCard, secondCard, thirdCard] = splitTestimonials;
  const [standard, premium, lifetime] = splitPlans;
  const priceCards = document.querySelectorAll(".price");
  const titleCards = document.querySelectorAll(".title__buy-card");
  const modalSelectedItems = document.querySelectorAll('.selected_rate')
  const testimonialsCardText = document.querySelectorAll(".text__cards");
  const testimonialsCardAuthor = document.querySelectorAll(".autor__card");
  const linkAppStore = document.getElementById('gotoappstore');
  const testimonialsCardProfession =
    document.querySelectorAll(".profession__card");

    
  priceCards[0].innerHTML = "$" + standard.price;
  titleCards[0].innerHTML = standard.name;
  priceCards[1].innerHTML = "$" + premium.price;
  titleCards[1].innerHTML = premium.name;
  priceCards[2].innerHTML = "$" + lifetime.price;
  titleCards[2].innerHTML = lifetime.name;

  modalSelectedItems[0].innerHTML = standard.name;
  modalSelectedItems[1].innerHTML = premium.name;
  modalSelectedItems[2].innerHTML = lifetime.name;

  const inputPlan1 = document.getElementById("standard");
  inputPlan1.setAttribute("value", standard.name);
  
  const inputPlan2 = document.getElementById("premium");
  inputPlan2.setAttribute("value", premium.name);
  
  const inputPlan3 = document.getElementById("lifetime");
  inputPlan3.setAttribute("value", lifetime.name);

  testimonialsCardText[0].innerHTML = firstCard.text;
  testimonialsCardAuthor[0].innerHTML = firstCard.name;
  testimonialsCardProfession[0].innerHTML = firstCard.job;

  testimonialsCardText[1].innerHTML = secondCard.text;
  testimonialsCardAuthor[1].innerHTML = secondCard.name;
  testimonialsCardProfession[1].innerHTML = secondCard.job;

  testimonialsCardText[2].innerHTML = thirdCard.text;
  testimonialsCardAuthor[2].innerHTML = thirdCard.name;
  testimonialsCardProfession[2].innerHTML = thirdCard.job;



  linkAppStore.href = link
}
