// task:
// You are choreographing a circus show with various animals.
// For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show.
// If it is possible, return YES, otherwise return NO.

// For example, kangaroo 1 starts at x1 = 2 with a jump distance v1 = 1 and kangaroo 2 starts at x2 = 1 with a jump distance of v2 = 2. After one jump, they are both at x = 3, (x1 + v1 = 2 + 1, x2 + v2 = 1 + 2), so our answer is YES.

// Create a function that should return YES if they reach the same position at the same time, or NO if they don't.

// This function has the following parameter(s):

// x1, v1: integers, starting position and jump distance for kangaroo 1
// x2, v2: integers, starting position and jump distance for kangaroo 2

// pseudo code:
// we have 4 parameters:
//   start1, speed1, start2, speed2
// have a check to see if kangaroo1 can even catch up to kangaroo2 before starting the math logic
//  return 'NO' if kangaroo1 can not catch up to kangaroo2
// else
//   check the condition (compare distances after each jump) for 10000 jumps to see if it the kangaroos will reach the same position at the same jump
//     return 'YES' if the kangaroos will reach the same position
//   else return 'NO'