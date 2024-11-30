const request = require('supertest');
const app = require('../server'); 

describe('GET /api/recipes', () => {
    test('Returns all recipes when no search query is provided', async () => {
        const res = await request(app).get('/api/recipes');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(29); // Total number of recipes in the CSV
    });

    test('Filters recipes by name', async () => {
        const res = await request(app).get('/api/recipes?search=Pancakes');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([
            {
                name: 'Pancakes',
                ingredients: 'Flour, Milk, Eggs, Sugar, Baking powder, Butter',
                time: '<10 minutes',
                budget: '<$5',
                description: 'Classic breakfast pancakes, light and fluffy.',
                link: 'https://www.allrecipes.com/recipe/21014/good-old-fashioned-pancakes/'
            }
        ]);
    });

    test('Filters recipes by ingredient: Egg', async () => {
      const res = await request(app).get('/api/recipes?search=Egg');
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(expect.arrayContaining([
          {
              name: 'Pancakes',
              ingredients: 'Flour, Milk, Eggs, Sugar, Baking powder, Butter',
              time: '<10 minutes',
              budget: '<$5',
              description: 'Classic breakfast pancakes, light and fluffy.',
              link: 'https://www.allrecipes.com/recipe/21014/good-old-fashioned-pancakes/'
          },
          {
              name: 'Scrambled Eggs',
              ingredients: 'Eggs, Milk, Butter, Salt, Pepper',
              time: '<10 minutes',
              budget: '<$5',
              description: 'Quick and fluffy scrambled eggs.',
              link: 'https://www.allrecipes.com/recipe/256007/best-scrambled-eggs/'
          },
          {
              name: 'Omelette',
              ingredients: 'Eggs, Cheese, Vegetables, Salt, Pepper',
              time: '<10 minutes',
              budget: '<$5',
              description: 'Quick and customizable breakfast omelette.',
              link: 'https://www.youtube.com/watch?v=j0klip4kwBI'
          },
          {
              name: 'French Toast',
              ingredients: 'Bread, Eggs, Milk, Cinnamon, Sugar',
              time: '10 to 20 minutes',
              budget: '<$5',
              description: 'Sweet and comforting French toast.',
              link: 'https://www.allrecipes.com/recipe/7016/french-toast-i/'
          },
          {
              name: 'Egg Salad',
              ingredients: 'Eggs, Mayonnaise, Mustard, Salt, Pepper',
              time: '<10 minutes',
              budget: '<$5',
              description: 'Creamy and simple egg salad, perfect for sandwiches.',
              link: 'https://www.youtube.com/watch?v=b0IB0j3-yjY'
          }
      ]));
  });

    test('Filters recipes by budget', async () => {
        const res = await request(app).get('/api/recipes?search=<$5');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0); 
        res.body.forEach(recipe => {
            expect(recipe.budget).toBe('<$5');
        });
    });

    test('Returns an empty array when no recipes match', async () => {
        const res = await request(app).get('/api/recipes?search=NonExistentRecipe');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([]); // No recipes should match
    });
});
