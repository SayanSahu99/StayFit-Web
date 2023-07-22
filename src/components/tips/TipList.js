import React from 'react';

import 'src/styles/TipList.scss';

const TipList = () => {
  return (
    <ul className="tip-list text-start">
      <li>
        The calorie count on this application is based on the{' '}
        <strong>Mifflin-St Jeor</strong> equation{' '}
        <span className="text-muted">
          (Which is the one that I used personally and found effective)
        </span>
        . <br />
        <br />
        <strong>Mifflin-St Jeor Equation:</strong>
        <br /> <br />
        <span className="me-4">For men:</span> BMR = 10W + 6.25H - 5A + 5
        <br />
        <br />
        <span className="me-4">For women:</span> BMR = 10W + 6.25H - 5A - 161
        <br />
        <br />
        Where: <br />
        BMR is the Basal Metabolic Rate{' '}
        <span className="text-muted">(The amount of calories you need per day at rest)</span>.
        <br /> W is body weight in kg.
        <br /> H is body height in cm. <br /> A is age. <br />
      </li>

      <br />
      <br />

      <li>
        It is recommended not to lower your calorie intake by more than 1000 calories per day{' '}
        <span className="text-muted">(Losing 1 kg per week)</span>,
        as this can be unhealthy and may lead to muscle loss, which, in turn, lowers your metabolism.
      </li>

      <br />
      <br />

      <li>
        There are many approaches to weight loss, and no single method works for everyone.
        This is why there are so many different diets and exercise regimens.
        While some methods may be more effective for certain individuals, not all weight loss methods are equivalent.
        Studies suggest that some approaches are healthier than others.
      </li>

      <br />
      <br />

      <li>
        Bloating occurs when your belly becomes enlarged with fluid or gas,
        and it is not necessarily caused by consuming more calories than you need.
        It often happens when you eat foods that are hard for your stomach to digest{' '}
        <span className="text-muted">
          (such as legumes, dairy, apples, salty foods, etc.)
        </span>
        . To avoid bloating, it is essential to drink more water and consider a different diet that does not include high-FODMAP foods.
      </li>
    </ul>
  );
};

export default TipList;
