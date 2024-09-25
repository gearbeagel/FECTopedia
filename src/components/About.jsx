import React from 'react';

const AboutPage = () => {
  const teamMembers = [
    { role: 'Автор ідеї', name: 'Фанда Максим' },
    { role: 'Головна редакторка та голова інформаційного відділу', name: 'Роман Анастасія' },
    { role: 'Член інформаційного відділу, розробниця сайту', name: 'Кондрацька Вікторія' },
    { role: 'Член інформаційного відділу', name: 'Аксьонова Єлизавета' },
    { role: 'Член дизайнерського відділу', name: 'Філь Дарина' },
    { role: 'Упорядник', name: 'Фіняк Олег' },
    { role: 'Волонтери', name: 'Романюк Вадим, Панчишин Ольга, Погончук Назар' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <h1 className="text-2xl font-bold mb-4">Про нас</h1>
      <ul className="list-disc list-inside">
        {teamMembers.map((member, index) => (
          <li key={index}>
            <strong>{member.role}:</strong> {member.name}
          </li>
        ))}
      </ul>
      <br/>
      <h1 className='text-2xl font-bold mb-4'>Список джерел</h1>
      <ol className='list-decimal list-inside'>
        <li>Довідник першокурсника від Студентського уряду</li>
        <li><a href="https://lnu.edu.ua/wp-content/uploads/2020/03/reg_education-results.pdf" style={{textDecoration: "underline"}}>Положення про контроль та оцінювання навчальних досягнень здобувачів вищої освіти Львівського національного університету імені Івана Франка.</a></li>
      </ol>
    </div>
  );
};

export default AboutPage;
