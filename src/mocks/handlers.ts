import { rest } from 'msw';

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/todos/1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        userId: 'user001',
        id: '001abc',
        title: 'Mr. Tester',
        completed: true
      })
    );
  }),
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: '001', title: 'This is a mock data 001' },
        { id: '002', title: 'This is a mock data 002' },
      ])
    );
  })
]