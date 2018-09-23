import {occupationsSkillPoints} from "./occupations";
import {r} from "./roll";

it('compute skill point', () => {
  const result = occupationsSkillPoints({
    str: 5 * r(3, 6),
    con: 5 * r(3, 6),
    siz: 5 * (r(2, 6) + 6),
    dex: 5 * r(3, 6),
    app: 5 * r(3, 6),
    int: 5 * (r(2, 6) + 6),
    pow: 5 * r(3, 6),
    edu: 5 * (r(2, 6) + 6),
  }).filter(x => x < 50);
  expect(result).toEqual([]);
});