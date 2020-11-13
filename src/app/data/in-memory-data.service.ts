import { InMemoryDbService } from 'angular-in-memory-web-api'

export class InMemoryDataService implements InMemoryDbService {
  createDb(): {} {
    return {
      users: [
        {
          id: 1, //id!=0 дабы не писать код лишней проверки на true!!!
          email: 'admin@ya.ru',
          password: '123456',
          userName: 'John',
        },
        {
          id: 2,
          email: 'user1@mail.ru',
          password: '1234567',
          userName: 'Alex',
        },
        {
          id: 3,
          email: 'user2@mail.ru',
          password: '1234568',
          userName: 'Barbara',
        },
      ],

      courses: [
        {
          id: 0,
          title: 'JavaScript',
          duration: 1200,
          date: '01.11.2020',
          description: 'JavaScript courses Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo temporibus illum ab nostrum sunt optio repudiandae omnis labore natus praesentium maxime eveniet numquam, assumenda dolorum totam eius eligendi culpa pariatur.',
          authors: 'Пушкин, Крылов, Есенин'
        },
        {
          id: 1,
          title: 'React',
          duration: 1800,
          date: '02.12.2020',
          description: 'React courses Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quisquam quam consectetur sequi voluptates ratione nostrum nam reiciendis molestias voluptatum. Voluptas earum iusto aut aperiam, laudantium nihil quidem excepturi ut!',
          authors: 'Крылов, Есенин'
        },
        {
          id: 2,
          title: 'Angular',
          duration: 2800,
          date: '03.01.2021',
          description: 'Angular courses Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum voluptatem quibusdam iusto officia itaque eius ut aliquid. Voluptatem adipisci amet iure corporis fugit, facere dignissimos, ducimus nihil quam deserunt aliquam.',
          authors: 'Пушкин, Есенин'
        },
        {
          id: 3,
          title: 'Vue',
          duration: 5000,
          date: '04.02.2021',
          description: 'Vue courses Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a alias voluptatibus temporibus labore, consectetur laboriosam, expedita nihil vero dolore suscipit. Aliquid, aut aperiam nesciunt quaerat corrupti suscipit eum aspernatur voluptate laboriosam amet dolore, veniam sapiente voluptas.',
          authors: 'Пушкин, Крылов'
        },
        {
          id: 4,
          title: 'Java',
          duration: 6608,
          date: '01.11.2020',
          description: 'Java courses Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo temporibus illum ab nostrum sunt optio repudiandae omnis labore natus praesentium maxime eveniet numquam, assumenda dolorum totam eius eligendi culpa pariatur.',
          authors: 'Пушкин'
        },
        {
          id: 5,
          title: 'Pithon',
          duration: 10000,
          date: '02.12.2020',
          description: 'Pithon courses Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quisquam quam consectetur sequi voluptates ratione nostrum nam reiciendis molestias voluptatum. Voluptas earum iusto aut aperiam, laudantium nihil quidem excepturi ut!',
          authors: 'Крылов'
        },
        {
          id: 6,
          title: 'Laravel 5+',
          duration: 200,
          date: '03.01.2021',
          description: 'Laravel 5+ courses Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum voluptatem quibusdam iusto officia itaque eius ut aliquid. Voluptatem adipisci amet iure corporis fugit, facere dignissimos, ducimus nihil quam deserunt aliquam.',
          authors: 'Есенин'
        },
        {
          id: 7,
          title: 'Yii 2+',
          duration: 1000,
          date: '04.02.2021',
          description: 'Yii 2+ courses Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a alias voluptatibus temporibus labore, consectetur laboriosam, expedita nihil vero dolore suscipit. Aliquid, aut aperiam nesciunt quaerat corrupti suscipit eum aspernatur voluptate laboriosam amet dolore, veniam sapiente voluptas.',
          authors: 'dfghj'
        },
        {
          id: 8,
          title: 'GraphQL',
          duration: 800,
          date: '01.11.2020',
          description: 'GraphQL courses Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo temporibus illum ab nostrum sunt optio repudiandae omnis labore natus praesentium maxime eveniet numquam, assumenda dolorum totam eius eligendi culpa pariatur.',
          authors: 'ioprty'
        },
        {
          id: 9,
          title: 'Jango',
          duration: 4000,
          date: '02.12.2020',
          description: 'Jango courses Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quisquam quam consectetur sequi voluptates ratione nostrum nam reiciendis molestias voluptatum. Voluptas earum iusto aut aperiam, laudantium nihil quidem excepturi ut!',
          authors: 'xcvbnm'
        },
        {
          id: 10,
          title: 'WordPress',
          duration: 500,
          date: '03.01.2021',
          description: 'WordPress courses Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum voluptatem quibusdam iusto officia itaque eius ut aliquid. Voluptatem adipisci amet iure corporis fugit, facere dignissimos, ducimus nihil quam deserunt aliquam.',
          authors: 'asdfg'
        },
        {
          id: 11,
          title: 'Ramda library',
          duration: 8000,
          date: '04.02.2021',
          description: 'Ramda library courses Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a alias voluptatibus temporibus labore, consectetur laboriosam, expedita nihil vero dolore suscipit. Aliquid, aut aperiam nesciunt quaerat corrupti suscipit eum aspernatur voluptate laboriosam amet dolore, veniam sapiente voluptas.',
          authors: 'yhnik,mjm'
        },
        {
          id: 12,
          title: 'Lodash library',
          duration: 36000,
          date: '04.02.2021',
          description: 'Lodash library courses Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a alias voluptatibus temporibus labore, consectetur laboriosam, expedita nihil vero dolore suscipit. Aliquid, aut aperiam nesciunt quaerat corrupti suscipit eum aspernatur voluptate laboriosam amet dolore, veniam sapiente voluptas.',
          authors: 'rfgbnedfcv'
        }
      ],
    }
  }
}
