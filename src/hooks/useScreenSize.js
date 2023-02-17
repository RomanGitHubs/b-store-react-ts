import { useState, useEffect } from 'react';

const initialHeight = document.documentElement.clientHeight;
const initialWidth = document.documentElement.clientWidth;

export function useScreenSize() {
  const [heigthPos, setHeigthPos] = useState(initialHeight);
  const [widthPos, setWidthPos] = useState(initialWidth);

  useEffect(() => {
    const foo = () => {
      setHeigthPos(document.documentElement.clientHeight);
      setWidthPos(document.documentElement.clientWidth);
    };

    window.addEventListener('resize', foo);
    return () => {
      window.removeEventListener('resize', foo);
    };
  }, []);

  return [heigthPos, widthPos];
}

const array = [3, 5, -4, 8, 11, 1, -1, 6, 2, 15, -5];
const targetSum = 10;

const foo = (array, targetSum) => {
  const result = [];
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        result.push({ 1: array[i], 2: array[j] });
      }
      counter++;
    }
  }
  result.unshift(counter);
  return result;
};

function twoNumberSum(array, targetSum) {
  const nums = [];
  for (const currentNum of array) {
    const match = targetSum - currentNum;

    if (nums.includes(match)) {
      return [currentNum, match];
    }
    nums.push(currentNum);
  }
  return [];
}

const studentArray = [
  {
    name: 'Artem',
    age: 15,
    groupId: 1,
  }, {
    name: 'Grisha',
    age: 16,
    groupId: 2,
  }, {
    name: 'Roma',
    age: 17,
    groupId: 3,
  }, {
    name: 'Oleg',
    age: 18,
    groupId: 4,
  }, {
    name: 'Stas',
    age: 19,
    groupId: 2,
  }, {
    name: 'Viktor',
    age: 20,
    groupId: 3,
  }, {
    name: 'Viktor',
    age: 21,
    groupId: 1,
  }, {
    name: 'Viktor',
    age: 22,
    groupId: 3,
  }, {
    name: 'Viktor',
    age: 23,
    groupId: 4,
  },
];

const vilkiLogki = [
  {
    id: 14142,
    name: 'Vilka',
    count: 4,
  }, {
    id: 212312,
    name: 'Logka',
    count: 10,
  }, {
    id: 14142,
    name: 'Vilka',
    count: 7,
  }, {
    id: 34124,
    name: 'Nozh',
    count: 2,
  },
];

const vilkiFoo = (vilkiLogki) => {
  return vilkiLogki.reduce((acc, position) => {
    if (position.id in acc) {
      acc[position.id].push(position);
    } else {
      acc[position.id] = [position];
    }
    return acc;
  }, {});
};

const fooStudent = (studentArray) => {
  return studentArray.reduce((acc, student) => {
    const { groupId, age } = student;

    if (age < 18) {
      return acc;
    }

    if (groupId in acc) {
      acc[groupId].push(student);
    } else {
      acc[groupId] = [student];
    }
    return acc;
  }, {});
};

const isPolidrom = (inSting) => {
  let revString = '';

  for (let i = inSting.length - 1; i >= 0; i--) {
    revString += (inSting[i]);
  }
  if (revString === inSting) return true;
  return false;
};

const isPalindrome = (string) => string === string.split('').reverse().join('');

useEffect(() => {
  // eslint-disable-next-line no-console
  console.log(foo(array, targetSum));
  // eslint-disable-next-line no-console
  console.log(twoNumberSum(array, targetSum));
  // eslint-disable-next-line no-console
  console.log(fooStudent(studentArray));
  // eslint-disable-next-line no-console
  console.log(vilkiFoo(vilkiLogki));
  // eslint-disable-next-line no-console
  console.log(isPolidrom('vilkiLogki'));
  // eslint-disable-next-line no-console
  console.log(isPolidrom('hazah'));
}, []);
