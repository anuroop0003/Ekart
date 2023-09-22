import Logo from "../../assets/logo light.svg";

export default function Footer() {
  const quotesData = [
    {
      quote: "A rose by any other name would smell as sweet.",
      who: "William Shakespeare",
    },
    {
      quote: "All that glitters is not gold.",
      who: "William Shakespeare",
    },
    {
      quote: "All the world’s a stage, and all the men and women merely players.",
      who: "William Shakespeare",
    },
    {
      quote: "Ask not what your country can do for you; ask what you can do for your country.",
      who: "John Kennedy",
    },
    {
      quote: "Ask, and it shall be given you; seek, and you shall find.",
      who: "The Bible",
    },
    {
      quote: "Eighty percent of success is showing up.",
      who: "Woody Allen",
    },
    {
      quote: "For those to whom much is given, much is required.",
      who: "The Bible",
    },
    {
      quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
      who: "Thomas Edison",
    },
    {
      quote: "He travels the fastest who travels alone.",
      who: "Rudyard Kipling",
    },
    {
      quote: "If you want something done right, do it yourself.",
      who: "Charles-Guillaume Étienne",
    },
    {
      quote: "Knowledge is power.",
      who: "Sir Francis Bacon",
    },
    { quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.", who: "Albert Einstein" },
    {
      quote: "No one can make you feel inferior without your consent.",
      who: "Eleanor Roosevelt",
    },
    {
      quote: "That’s one small step for a man, a giant leap for mankind.",
      who: "Neil Armstrong",
    },
    {
      quote: "You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time.",
      who: "Abraham Lincoln",
    },
    {
      quote: "Whatever you are, be a good one.",
      who: "Abraham Lincoln",
    },
  ];

  const randomIndex = Math.floor(Math.random() * quotesData.length);
  return (
    <div className='bg-black text-white flex flex-col justify-center items-center pt-10'>
      <img alt='LoginBg' loading="eager" height={100} width={100} src={Logo} />
      <div className='py-5'>
        <p className='text-center text-base'>{quotesData[randomIndex].quote}</p>
        <p className='text-right'>- {quotesData[randomIndex].who}</p>
      </div>
      <p className='text-center text-xs py-5'>Copyright © 2023 Ekart, Inc. All rights reserved.</p>
    </div>
  );
}
