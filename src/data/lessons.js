export const LESSONS = [
  {
    id: 1,
    title: 'What is an Algorithm? ',
    content: `In computer programming terms, an algorithm is a set of well-defined instructions to solve a particular problem. It takes a set of input(s) and produces the desired output. For example,

    An algorithm to add two numbers:
    
    Take two number inputs
    
    Add numbers using the + operator
    
    Display the result
    
    Qualities of a Good Algorithm
    Input and output should be defined precisely.
    Each step in the algorithm should be clear and unambiguous.
    Algorithms should be most effective among many different ways to solve a problem.
    An algorithm shouldn't include computer code. Instead, the algorithm should be written in such a way that it can be used in different programming languages.`,
    solution: `Step 1: Start
    Step 2: Declare variables a,b and c.
    Step 3: Read variables a,b and c.
    Step 4: If a > b
               If a > c
                  Display a is the largest number.
               Else
                  Display c is the largest number.
            Else
               If b > c
                  Display b is the largest number.
               Else
                  Display c is the greatest number.  
    Step 5: Stop`,
    preview: true,
  },
  {
    id: 2,
    title: 'Find the largest number among three numbers ',
    content: 'comming soon',
    solution: `Step 1: Start
    Step 2: Declare variables a,b and c.
    Step 3: Read variables a,b and c.
    Step 4: If a > b
               If a > c
                  Display a is the largest number.
               Else
                  Display c is the largest number.
            Else
               If b > c
                  Display b is the largest number.
               Else
                  Display c is the greatest number.  
    Step 5: Stop`,
    preview: true,
  },
  {
    id: 3,
    title: 'Find Roots of a Quadratic Equation ax2 + bx + c = 0 ',
    content: 'lesson 3 content',
    solution: `Step 1: Start
    Step 2: Declare variables a, b, c, D, x1, x2, rp and ip;
    Step 3: Calculate discriminant
             D ← b2-4ac
    Step 4: If D ≥ 0
                  r1 ← (-b+√D)/2a
                  r2 ← (-b-√D)/2a 
                  Display r1 and r2 as roots.
            Else     
                  Calculate real part and imaginary part
                  rp ← -b/2a
                  ip ← √(-D)/2a
                  Display rp+j(ip) and rp-j(ip) as roots
    Step 5: Stop  `,
    preview: true,
  },
  {
    id: 4,
    title: ' Find the factorial of a number',
    content: 'comming soon',
    solution: `Step 1: Start
    Step 2: Declare variables n, factorial and i.
    Step 3: Initialize variables
              factorial ← 1
              i ← 1
    Step 4: Read value of n
    Step 5: Repeat the steps until i = n
         5.1: factorial ← factorial*i
         5.2: i ← i+1
    Step 6: Display factorial
    Step 7: Stop`,
    preview: true,
  },
  {
    id: 5,
    title: 'Check whether a number is prime or not',
    content: 'coming soon',
    solution: `Step 1: Start
    Step 2: Declare variables n, i, flag.
    Step 3: Initialize variables
            flag ← 1
            i ← 2  
    Step 4: Read n from the user.
    Step 5: Repeat the steps until i=(n/2)
         5.1 If remainder of n÷i equals 0
                flag ← 0
                Go to step 6
         5.2 i ← i+1
    Step 6: If flag = 0
               Display n is not prime
            else
               Display n is prime
    Step 7: Stop `,
    preview: true,
  },
  {
    id: 6,
    title: 'lesson 3 ',
    content: 'lesson 3 content',
    solution: 'lesson 3 solution',
    preview: true,
  },
  {
    id: 7,
    title: 'lesson 3 ',
    content: 'lesson 3 content',
    solution: 'lesson 3 solution',
    preview: true,
  },
  // {
  //   id: 3,
  //   title: 'lesson 3 ',
  //   content: 'lesson 3 content',
  //   solution: 'lesson 3 solution',
  //   preview: true,
  // },
];
