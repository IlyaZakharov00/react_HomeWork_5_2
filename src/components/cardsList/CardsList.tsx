import React from 'react';
import '../Components.css'
import { Card } from '../cardsList/Card';
import {LinkedItem} from '../LinkedItem';

/**
 * Компонент отображения всех списков с заголовками
 */

const cardsData = [
  { title: 'Погода', items: [
    {icon: '☁️', text: 'Москва', link: 'https://example.com/news/1'},
    {icon: '☁️', text: 'Таганрог', link: 'https://example.com/news/2'}
    ]
  },
  { title: 'Телепрограмма', items:[
    {icon: '▶️', text: 'ТНТ', link: 'https://example.com/news/1'},
    {icon: '▶️', text: 'Наедине со всеми', link: 'https://example.com/news/2'}
    ]
  },
  { title: 'Эфир', items:[
    {icon: '▶️', text: 'Управление как искусство', link: 'https://example.com/news/1'},
    {icon: '▶️', text: 'Ночь. Мир в это время.', link: 'https://example.com/news/2'}
    ]
  },
];

export const CardsList: React.FC = () => {
  return (
    <div className='cards-list'>
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title}>
          {card.items.map((item, itemIndex) => (
            <LinkedItem key={itemIndex} {...item} />
          ))}
        </Card>
      ))}
    </div>
  );
};