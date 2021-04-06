import { types } from '../src/data.js';


describe('types', () => {
  it('should return [["205", "forretress"],["208", "steelix"],["212", "scizor"],["227", "skarmory"]] for type "steel"', () => {
    expect(types('steel')).toMatchObject([["205", "forretress"],["208", "steelix"],["212", "scizor"],["227", "skarmory"]]);
  });

  it('should return [] for type "acero"', () => {
    expect(types('acero')).toMatchObject([]);
  });
});

