import React from 'react';

const AboutPage = () => {
  const teamMembers = [
    { role: 'Автор ідеї', name: 'Фанда Максим' },
    { role: 'Головна редакторка та голова інформаційного відділу', name: 'Роман Анастасія' },
    { role: 'Член інформаційного відділу', name: 'Кондрацька Вікторія' },
    { role: 'Член інформаційного відділу', name: 'Аксьонова Єлизавета' },
    { role: 'Член дизайнерського відділу', name: 'Філь Дарина' },
    { role: 'Упорядник', name: 'Фіняк Олег' },
    { role: 'Волонтери', name: 'Романюк Вадим, Панчишин Ольга, Погончук Назар' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Про нас</h1>
      <ul className="list-disc list-inside">
        {teamMembers.map((member, index) => (
          <li key={index}>
            <strong>{member.role}:</strong> {member.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
