import nameTransform from '../Components/Functions';

describe('nameTransform', () => {
  it('transform name', () => {
    expect(nameTransform('Vica')).toEqual("Vica's feedback");
  });
  it('empty name', () => {
    expect(nameTransform()).toEqual("name is required");
  });
})



