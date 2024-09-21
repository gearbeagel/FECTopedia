import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 overflow-hidden">
        <img src='/src/assets/IMG_1430.PNG' className='mb-5'></img>
      <h1 className="text-2xl font-bold mb-4">Ласкаво просимо до FECTопедії!</h1>
      <p className="text-lg text-center mb-6">
        Вітаємо тебе, майбутній першокурснику чи вже студент з багатомісячним стажем! 
        <br/>
        За ініціативою студентів ми створили путівник, який дасть змогу кожному з вас 
        дізнатися багато нового про університет і те, що чекає далі.
      </p>
      <a
        href="/info"
        className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-200"
        style={{textDecoration: "none"}}
      >
        Почати
      </a>
    </div>
  );
};

export default HomePage;
