export type Problem = {
  id: number
  title: string
  description: string
  difficulty:
    | 'Beginner'
    | 'Intermediate'
    | 'Strings & Arrays'
    | 'Functions'
    | 'Advanced'
}

// Data based on the provided list
export const problems: Problem[] = [
  // Beginner
  {
    id: 1,
    title: '"Hello, World!" ',
    description: 'Write and run a simple program that outputs text.',
    difficulty: 'Beginner',
  },
  {
    id: 2,
    title: 'Basic Arithmetic Calculator',
    description:
      'Takes two numbers as input and prints their sum, difference, product, and quotient.',
    difficulty: 'Beginner',
  },
  {
    id: 3,
    title: 'Temperature Converter',
    description:
      'Converts a temperature from Fahrenheit to Celsius or vice versa.',
    difficulty: 'Beginner',
  },
  {
    id: 4,
    title: 'Area of a Rectangle',
    description:
      'Takes the length and width of a rectangle and calculates its area.',
    difficulty: 'Beginner',
  },
  // Intermediate
  {
    id: 5,
    title: 'Even or Odd',
    description: 'Takes an integer and prints whether it is even or odd.',
    difficulty: 'Intermediate',
  },
  {
    id: 6,
    title: 'Largest of Three Numbers',
    description: 'Takes three numbers and prints the largest among them.',
    difficulty: 'Intermediate',
  },
  {
    id: 7,
    title: 'Sum of Numbers in a Range',
    description:
      'Takes two integers (start and end) and calculates the sum of all integers between them.',
    difficulty: 'Intermediate',
  },
  {
    id: 8,
    title: 'Factorial Calculation',
    description: 'Takes a non-negative integer and calculates its factorial.',
    difficulty: 'Intermediate',
  },
  {
    id: 9,
    title: 'Prime Number Checker',
    description: 'Takes an integer and determines if it is a prime number.',
    difficulty: 'Intermediate',
  },
  {
    id: 10,
    title: 'Fibonacci Sequence',
    description:
      "Generates and prints the first 'n' terms of the Fibonacci sequence.",
    difficulty: 'Intermediate',
  },
  // Strings & Arrays
  {
    id: 11,
    title: 'String Reversal',
    description: 'Takes a string and prints its reverse.',
    difficulty: 'Strings & Arrays',
  },
  {
    id: 12,
    title: 'Palindrome Checker',
    description: 'Takes a string and checks if it is a palindrome.',
    difficulty: 'Strings & Arrays',
  },
  {
    id: 13,
    title: 'Count Vowels and Consonants',
    description:
      'Takes a string and counts the number of vowels and consonants.',
    difficulty: 'Strings & Arrays',
  },
  {
    id: 14,
    title: 'Find the Maximum/Minimum in an Array/List',
    description:
      'Takes a list of numbers and finds the largest or smallest number.',
    difficulty: 'Strings & Arrays',
  },
  {
    id: 15,
    title: 'Sum of Elements in an Array/List',
    description: 'Takes a list of numbers and calculates their sum.',
    difficulty: 'Strings & Arrays',
  },
  // Functions
  {
    id: 16,
    title: 'Create a Greeting Function',
    description: 'Takes a name as input and prints a personalized greeting.',
    difficulty: 'Functions',
  },
  {
    id: 17,
    title: 'Function to Calculate Area',
    description:
      'Refactors the area calculation into a function that returns the area.',
    difficulty: 'Functions',
  },
  {
    id: 18,
    title: 'Function to Check for Palindrome',
    description:
      'Encapsulates the palindrome checking logic within a function.',
    difficulty: 'Functions',
  },
  // Advanced
  {
    id: 19,
    title: 'Simple Search',
    description:
      'Takes a list of numbers and a target, checks if the target exists.',
    difficulty: 'Advanced',
  },
  {
    id: 20,
    title: 'Bubble Sort (Conceptual Introduction)',
    description:
      'Explains the concept of sorting with Bubble Sort (implementation optional).',
    difficulty: 'Advanced',
  },
]
