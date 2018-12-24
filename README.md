# _kangaroo_

#### _looping programming challenge, 12.23.2018_

#### By _**planeswalker1**_

## Description

_This repository has been created in order to showcase a programming challenge about looping completed in JavaScript._

## challenge

You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

* The first kangaroo starts at location _x1_ and moves at a rate of _v1_ meters per jump.
* The second kangaroo starts at location _x2_ and moves at a rate of _v2_ meters per jump.

You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

For example, kangaroo 1 starts at _x1_ = 2 with a jump distance _v1_ = 1 and kangaroo 2 starts at _x2_ = 1 with a jump distance of _v2_ = 2. After one jump, they are both at _x_ = 3, (_x1_ + _v1_ = 2 + 1, _x2_ + _v2_ = 1 + 2), so our answer is YES.

**Function Description**

Create a function that should return YES if they reach the same position at the same time, or NO if they don't.

This function has the following parameter(s):

* _x1_, _v1_: integers, starting position and jump distance for kangaroo 1
* _x2_, _v2_: integers, starting position and jump distance for kangaroo 2

**Input Format**

A single line of four space-separated integers denoting the respective values of _x1_, _v1_, _x2_, and _v2_.

**Constraints**

* 0 <= _x1_ < _x2_ <= 1000
* 1 <= _v1_ <= 10000
* 1 <= _v2_ <= 10000

**Output Format**

Print YES if they can land on the same location at the same time; otherwise, print NO.

Note: The two kangaroos must land at the same location after making the same number of jumps.

**Sample Input**

```
0 3 4 2
```

**Sample Output**

```
YES
```

**Explanation**

In this example:

start:

Kangaroo 1:

_positionOfKangaroo1_ = _x1_

_positionOfKangaroo1_ = 0

kangaroo 2:

_positionOfKangaroo2_ = _x2_

_positionOfKangaroo2_ = 4

===============================================

1st jump:

Kangaroo 1:

_positionOfKangaroo1_ = _x1_ + _v1_

_positionOfKangaroo1_ = 0 + 3

_positionOfKangaroo1_ = 3

kangaroo 2:

_positionOfKangaroo2_ = _x2_ + _v2_

_positionOfKangaroo2_ = 4 + 2

_positionOfKangaroo2_ = 6

===============================================

2nd jump:

Kangaroo 1:

_positionOfKangaroo1_ = _previousPositionOfKangaroo1_ + _v1_

_positionOfKangaroo1_ = 3 + 3

_positionOfKangaroo1_ = 6

Kangaroo 2:

_positionOfKangaroo2_ = _previousPositionOfKangaroo2_ + _v2_

_positionOfKangaroo2_ = 6 + 2

_positionOfKangaroo2_ = 8

===============================================

3rd jump:

Kangaroo 1:

_positionOfKangaroo1_ = _previousPositionOfKangaroo1_ + _v1_

_positionOfKangaroo1_ = 6 + 3

_positionOfKangaroo1_ = 9

kangaroo 2:

_positionOfKangaroo2_ = _previousPositionOfKangaroo1_ + _v2_

_positionOfKangaroo2_ = 8 + 2

_positionOfKangaroo2_ = 10

===============================================

4th jump:

Kangaroo 1:

_positionOfKangaroo1_ = _previousPositionOfKangaroo1_ + _v1_

_positionOfKangaroo1_ = 9 + 3

_positionOfKangaroo1_ = 12

kangaroo 2:

_positionOfKangaroo2_ = _previousPositionOfKangaroo1_ + _v2_

_positionOfKangaroo2_ = 10 + 2

_positionOfKangaroo2_ = 12

===============================================

From the explanation, it is clear that the kangaroos meet at the same location (12) after same number of jumps (4 jumps), and we print YES.

**Sample Input 2**

```
0 2 5 3
```

**Sample Output 2**

```
NO
```

**Explanation 2**

The second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., _x_<sub>2</sub> > _x_<sub>1</sub>). Because the second kangaroo moves at a faster rate (meaning _v_<sub>2</sub> > _v_<sub>1</sub>) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.

## Setup/Installation Requirements

* _Clone repository_
* _Navigate to the cloned repository_
* _open main.js with code editor of choice to see my solution_

## Known Bugs

_I don't think there are any bugs_

## Support and contact details

_If you run into any issues or have questions, ideas or concerns contact me at daniel.munozdev@gmail.com_

## Technologies Used

_JavaScript_